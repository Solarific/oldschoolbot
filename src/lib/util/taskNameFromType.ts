import { Tasks } from '../constants';
import { ActivityEnum } from '.prisma/client';

export function taskNameFromType(activityType: ActivityEnum): Tasks {
	switch (activityType) {
		case ActivityEnum.Agility:
			return Tasks.AgilityActivity;
		case ActivityEnum.ClueCompletion:
			return Tasks.ClueActivity;
		case ActivityEnum.Cooking:
			return Tasks.CookingActivity;
		case ActivityEnum.MonsterKilling:
			return Tasks.MonsterActivity;
		case ActivityEnum.GroupMonsterKilling:
			return Tasks.GroupMonsterActivity;
		case ActivityEnum.Fishing:
			return Tasks.FishingActivity;
		case ActivityEnum.Mining:
			return Tasks.MiningActivity;
		case ActivityEnum.Smelting:
			return Tasks.SmeltingActivity;
		case ActivityEnum.Smithing:
			return Tasks.SmithingActivity;
		case ActivityEnum.Woodcutting:
			return Tasks.WoodcuttingActivity;
		case ActivityEnum.Firemaking:
			return Tasks.FiremakingActivity;
		case ActivityEnum.Crafting:
			return Tasks.CraftingActivity;
		case ActivityEnum.Questing:
			return Tasks.QuestingActivity;
		case ActivityEnum.Runecraft:
			return Tasks.RunecraftActivity;
		case ActivityEnum.Burying:
			return Tasks.BuryingActivity;
		case ActivityEnum.Offering:
			return Tasks.OfferingActivity;
		case ActivityEnum.FightCaves:
			return Tasks.FightCavesActivity;
		case ActivityEnum.Fletching:
			return Tasks.FletchingActivity;
		case ActivityEnum.Wintertodt:
			return Tasks.WintertodtActivity;
		case ActivityEnum.Tempoross:
			return Tasks.TemporossActivity;
		case ActivityEnum.Alching:
			return Tasks.AlchingActivity;
		case ActivityEnum.Herblore:
			return Tasks.HerbloreActivity;
		case ActivityEnum.Nightmare:
			return Tasks.NightmareActivity;
		case ActivityEnum.AnimatedArmour:
			return Tasks.AnimatedArmourActivity;
		case ActivityEnum.Cyclops:
			return Tasks.CyclopsActivity;
		case ActivityEnum.Sawmill:
			return Tasks.SawmillActivity;
		case ActivityEnum.Sepulchre:
			return Tasks.SepulchreActivity;
		case ActivityEnum.Plunder:
			return Tasks.PlunderActivity;
		case ActivityEnum.FishingTrawler:
			return Tasks.FishingTrawler;
		case ActivityEnum.Zalcano:
			return Tasks.ZalcanoActivity;
		case ActivityEnum.Pickpocket:
			return Tasks.PickpocketActivity;
		case ActivityEnum.Farming:
			return Tasks.FarmingActivity;
		case ActivityEnum.TitheFarm:
			return Tasks.TitheFarmActivity;
		case ActivityEnum.BarbarianAssault:
			return Tasks.BarbarianAssault;
		case ActivityEnum.AgilityArena:
			return Tasks.AgilityArena;
		case ActivityEnum.ChampionsChallenge:
			return Tasks.ChampionsChallenge;
		case ActivityEnum.Hunter:
			return Tasks.HunterActivity;
		case ActivityEnum.Birdhouse:
			return Tasks.BirdhouseActivity;
		case ActivityEnum.AerialFishing:
			return Tasks.AerialFishingActivity;
		case ActivityEnum.DriftNet:
			return Tasks.DriftNetActivity;
		case ActivityEnum.Construction:
			return Tasks.ConstructionActivity;
		case ActivityEnum.MahoganyHomes:
			return Tasks.MahoganyHomes;
		case ActivityEnum.Enchanting:
			return Tasks.Enchanting;
		case ActivityEnum.Casting:
			return Tasks.Casting;
		case ActivityEnum.GloryCharging:
			return Tasks.GloryCharging;
		case ActivityEnum.WealthCharging:
			return Tasks.WealthCharging;
		case ActivityEnum.GnomeRestaurant:
			return Tasks.GnomeRestaurant;
		case ActivityEnum.SoulWars:
			return Tasks.SoulWars;
		case ActivityEnum.RoguesDenMaze:
			return Tasks.RoguesDenMaze;
		case ActivityEnum.Gauntlet:
			return Tasks.Gauntlet;
		case ActivityEnum.CastleWars:
			return Tasks.CastleWars;
		case ActivityEnum.MageArena:
			return Tasks.MageArena;
		case ActivityEnum.Raids:
			return Tasks.Raids;
		case ActivityEnum.Collecting:
			return Tasks.Collecting;
		case ActivityEnum.MageTrainingArena:
			return Tasks.MageTrainingArena;
		case ActivityEnum.BlastFurnace:
			return Tasks.BlastFurnaceActivity;
		case ActivityEnum.MageArena2:
			return Tasks.MageArena2;
		case ActivityEnum.BigChompyBirdHunting:
			return Tasks.BigChompyBirdHunting;
		case ActivityEnum.DarkAltar:
			return Tasks.DarkAltar;
		case ActivityEnum.Trekking:
			return Tasks.TrekkingActivity;
		case ActivityEnum.Revenants:
			return Tasks.RevenantsActivity;
		case ActivityEnum.PestControl:
			return Tasks.PestControl;
		case ActivityEnum.VolcanicMine:
			return Tasks.VolcanicMine;
		case ActivityEnum.Inferno:
			return Tasks.Inferno;
	}
}
