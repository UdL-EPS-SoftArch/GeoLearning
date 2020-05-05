import {Resource} from '@lagoshny/ngx-hal-client';
import {Player} from '../player/player';
import {Match} from '../match/match'

export class MatchResult extends Resource {
  uri: string;
  id: string;
  result: number;
  time: number;

  match: Match;
  player: Player;

  constructor() {
    super();
  }
}
