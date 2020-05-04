import {Resource} from '@lagoshny/ngx-hal-client';
import {Player} from '../player/player';

export class MatchResult extends Resource {
  id: number;
  result: number;
  time: number;

  player: Player;
  // match: Match;

}
