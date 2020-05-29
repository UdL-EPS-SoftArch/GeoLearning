import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import { Observable } from 'rxjs/internal/Observable';
import {Game, GameImpl} from './game';
import {ImageImage} from "./image-image/imageImage";

@Injectable({
  providedIn: 'root'
})
export abstract class GameService extends RestService<GameImpl>{
  constructor(injector: Injector) {
    super(GameImpl, 'games', injector);
  }

  public findGamesByCreatorUsernameContaining(username: string): Observable<Game[]> {
    const options: any = {params: [{key: 'id', value: username}]};
    return this.search('findGamesByCreatorUsernameContaining', options);
  }
}

