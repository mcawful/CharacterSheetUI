import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Player } from './player.model';
import { PlayerStore } from './player.store';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  constructor(private playerStore: PlayerStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Player[]>('https://api.com').pipe(tap(entities => {
      this.playerStore.set(entities);
    }));
  }

  add(player: Player) {
    this.playerStore.add(player);
  }

  update(id, player: Partial<Player>) {
    this.playerStore.update(id, player);
  }

  remove(id: ID) {
    this.playerStore.remove(id);
  }

}
