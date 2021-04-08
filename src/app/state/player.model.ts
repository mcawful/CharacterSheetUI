import { ActionSkills } from "../models/action-skills.model";
import { Cosmetics } from "../models/cosmetics.model";
import { SavingThrows } from "../models/saving-throws.model";

export interface Player {
  id: number | string;
  playerName: string,
  characterName: string,
  alignment: string,
  size: string,
  hitPoints: number,
  
  cosmetics: Cosmetics,
  actionSkills: ActionSkills,
  savingThrows: SavingThrows
}

export function createPlayer(params: Partial<Player>) {
  return {

  } as Player;
}
