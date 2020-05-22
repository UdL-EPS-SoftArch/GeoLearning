import {Resource} from '@lagoshny/ngx-hal-client';
import {ContentCreator} from '../content-creator/contentCreator';
import {Game} from '../games/game'

export class Match extends Resource{
  id: number;
  name: string;
  rating: number;
  description: string;
  contentCreator: ContentCreator;
  games: Game[];

  uri: string;

  constructor() {
    super();
  }
}
