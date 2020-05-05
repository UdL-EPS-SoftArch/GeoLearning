import { Resource } from '@lagoshny/ngx-hal-client';

export class Games extends Resource {
  uri: string;
  instructions: string;

  constructor() {
    super();
  }

}
