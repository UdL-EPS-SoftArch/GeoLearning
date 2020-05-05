import {Resource} from '@lagoshny/ngx-hal-client';
import {ContentCreator} from '../content-creator/contentCreator';

export class Match extends Resource {
  uri: string;
  id: string;
  name: string;
  rating: number;
  description: string;


  contentCreator: ContentCreator;

  constructor() {
    super();
  }
}
