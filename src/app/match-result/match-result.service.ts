import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { MatchResult } from './match-result';

@Injectable()
export class MatchResultService extends RestService<MatchResult> {

  constructor(injector: Injector) {
    super(MatchResult, 'marchResults', injector);
  }

  public findByMatch(match: string): Observable<MatchResult[]> {
    // const options: any = {params: [{key: 'text', value: match}]};
    return this.search('findByMatch');
  }

  public findByPlayer(player: string): Observable<MatchResult[]> {
    // const options: any = {params: [{key: 'text', value: player}]};
    return this.search('findByPlayer');
  }

  public findByMatchAndPlayer(match: string, player: string): Observable<MatchResult[]> {
    // const options: any = {params: [{key: 'text', value: player}]};
    return this.search('findByMatchAndPlayer');
  }

}
