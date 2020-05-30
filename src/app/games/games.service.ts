import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import { Observable } from 'rxjs/internal/Observable';
import {Game} from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService extends RestService<Game>{
  constructor(injector: Injector) {
    super(Game, 'games', injector);
  }

  public findGamesByCreatorUsernameContaining(username: string): Observable<Game[]> {
    const options: any = {params: [{key: 'id', value: username}]};
    return this.search('findGamesByCreatorUsernameContaining', options);
  }
}

