import { Resource } from '@lagoshny/ngx-hal-client';

export class Games extends Resource {
  uri: String;
  instructions: String;

  constructor() {
    super();
  }

}