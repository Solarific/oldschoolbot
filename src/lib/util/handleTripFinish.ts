import { MessageAttachment } from 'discord.js';
import { KlasaClient, KlasaMessage, KlasaUser } from 'klasa';
import { Bank } from 'oldschooljs';

import { PerkTier, Time } from '../constants';
import { getRandomMysteryBox } from '../data/openables';
import { RuneTable, SeedTable, WilvusTable, WoodTable } from '../simulation/seedTable';
import { ActivityTaskOptions } from '../types/minions';
import { generateContinuationChar, itemID, roll, stringMatches } from '../util';
import { channelIsSendable } from './channelIsSendable';
import createReadableItemListFromBank from './createReadableItemListFromTuple';
import getUsersPerkTier from './getUsersPerkTier';

export async function handleTripFinish(
	client: KlasaClient,
	user: KlasaUser,
	channelID: string,
	message: string,
	onContinue:
		| undefined
		| ((message: KlasaMessage) => Promise<KlasaMessage | KlasaMessage[] | null>),
	attachment: Buffer | undefined,
	data: ActivityTaskOptions
) {
	const channel = client.channels.get(channelID);
	if (!channelIsSendable(channel)) return;

	const perkTier = getUsersPerkTier(user);
	const continuationChar = generateContinuationChar(user);
	if (onContinue) {
		message += `\nSay \`${continuationChar}\` to repeat this trip.`;
	}

	const minutes = data.duration / Time.Minute;
	const pet = user.equippedPet();
	if (minutes < 5) {
		// Do nothing
	} else if (pet === itemID('Peky')) {
		let loot = new Bank();
		for (let i = 0; i < minutes; i++) {
			if (roll(10)) {
				loot.add(SeedTable.roll());
			}
		}
		await user.addItemsToBank(loot.bank, true);
		message += `\n<:peky:787028037031559168> Peky flew off and got you some seeds during this trip: ${await createReadableItemListFromBank(
			client,
			loot.bank
		)}.`;
	} else if (pet === itemID('Obis')) {
		let loot = new Bank();
		let rolls = minutes / 3;
		for (let i = 0; i < rolls; i++) {
			loot.add(RuneTable.roll());
		}
		await user.addItemsToBank(loot.bank, true);
		message += `\n<:obis:787028036792614974> Obis did some runecrafting during this trip and got you: ${await createReadableItemListFromBank(
			client,
			loot.bank
		)}.`;
	} else if (pet === itemID('Brock')) {
		let loot = new Bank();
		let rolls = minutes / 3;
		for (let i = 0; i < rolls; i++) {
			loot.add(WoodTable.roll());
		}
		await user.addItemsToBank(loot.bank, true);
		message += `\n<:brock:787310793183854594> Brock did some woodcutting during this trip and got you: ${await createReadableItemListFromBank(
			client,
			loot.bank
		)}.`;
	} else if (pet === itemID('Wilvus')) {
		let loot = new Bank();
		let rolls = minutes / 6;
		for (let i = 0; i < rolls; i++) {
			loot.add(WilvusTable.roll());
		}
		await user.addItemsToBank(loot.bank, true);
		message += `\n<:wilvus:787320791011164201> Wilvus did some pickpocketing during this trip and got you: ${await createReadableItemListFromBank(
			client,
			loot.bank
		)}.`;
	} else if (pet === itemID('Smokey')) {
		let loot = new Bank();
		for (let i = 0; i < minutes; i++) {
			if (roll(450)) {
				loot.add(getRandomMysteryBox());
			}
		}
		if (loot.length > 0) {
			await user.addItemsToBank(loot.bank, true);
			message += `\n<:smokey:787333617037869139> Smokey did some walking around while you were on your trip and found you ${loot}.`;
		}
	}

	client.queuePromise(() => {
		channel.send(message, attachment ? new MessageAttachment(attachment) : undefined);

		if (!onContinue) return;

		channel
			.awaitMessages(
				mes => mes.author === user && stringMatches(mes.content, continuationChar),
				{
					time: perkTier > PerkTier.One ? Time.Minute * 10 : Time.Minute * 2,
					max: 1
				}
			)
			.then(async messages => {
				const response = messages.first();
				if (response && !user.minionIsBusy) {
					try {
						await onContinue(response as KlasaMessage).catch(err => {
							channel.send(err);
						});
					} catch (err) {
						channel.send(err);
					}
				}
			});
	});
}
