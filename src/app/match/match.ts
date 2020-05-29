import {Resource} from '@lagoshny/ngx-hal-client';
import {ContentCreator} from '../content-creator/contentCreator';
import {Game} from '../games/game'

export class Match extends Resource{
  id: number;
  name: string;
  rating: number;
  description: string;
  contentCreator: ContentCreator;
  games: Array<Game>;
  //games: string[];

  uri: string;

  constructor(values: object = {}){
    super();
    Object.assign(this as any, values)
  }


  setGames(games: Game[]){
    this.games = games;
  }
  /*setGames(uri: string[]){
    this.games = uri;
  }*/
}
