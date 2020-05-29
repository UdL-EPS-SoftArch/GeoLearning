import {Resource} from '@lagoshny/ngx-hal-client';
import {ContentCreator} from '../content-creator/contentCreator';

export class Match extends Resource{
  id: number;
  name: string;
  rating: number;
  description: string;
  contentCreator: ContentCreator;
  games: string[];

  uri: string;

  constructor(values: object = {}){
    super();
    Object.assign(this as any, values)
  }


  setGames(uri: string[]){
    this.games = uri;
  }
}
