import { ActionSkills } from './action-skills.model';
import { Cosmetics } from './cosmetics.model';
import { SavingThrows } from './saving-throws.model';

export interface Player {
    playerName: string,
    characterName: string,
    alignment: string,
    size: string,

    cosmetics: Cosmetics,

    hitPoints: number,

    actionSkills: ActionSkills,

    savingThrows: SavingThrows
}