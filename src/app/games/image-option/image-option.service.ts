
import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ImageOption } from './imageOption';
import {Observable} from 'rxjs';

@Injectable()
export class ImageOptionService extends RestService<ImageOption> {

  constructor(injector: Injector) {
    super(ImageOption, 'imageOptions', injector);
  }

  public findGamesByCreatorUsernameContaining(username: string): Observable<ImageOption[]> {
    const options: any = {params: [{key: 'id', value: username}]};
    return this.search('findImageOptionsByCreatorUsernameContaining', options);
  }
}
