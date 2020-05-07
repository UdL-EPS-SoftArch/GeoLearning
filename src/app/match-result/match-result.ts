import {Resource} from '@lagoshny/ngx-hal-client';


export class MatchResult extends Resource {
  uri: string;
  id: string;
  result: number;
  time: number;

  match: any;
  player: any;

  constructor() {
    super();
  }
}
