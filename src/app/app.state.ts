import { Player } from './models/player.model';

export interface AppState {
    readonly player: Player[];
}