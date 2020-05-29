import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Match} from './match';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MatchService extends RestService<Match> {
  constructor(injector: Injector) {
    super(Match, 'matches', injector);
  }

  public findById(uri: string): Observable<Match> {
    const options: any = {params: [{key: 'id', value: uri}]};
    return this.searchSingle('findById', options);
  }

  public findByName(uri: string): Observable<Match> {
    const options: any = {params: [{key: 'name', value: uri}]};
    return this.searchSingle('findByName', options);
  }

  public findByContentCreatorContaining(uri: string): Observable<Match[]> {
    const options: any = {params: [{key: 'contentCreator', value: uri}]};
    return this.search('findByContentCreatorContaining', options);
  }

  public findByGamesContaining(uri: string): Observable<Match[]> {
    const options: any = {params: [{key: 'games', value: uri}]};
    return this.search('findByGamesContaining', options);
  }
}
