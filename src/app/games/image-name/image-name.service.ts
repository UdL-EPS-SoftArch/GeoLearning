import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ImageName } from './imageName';
import {Observable} from 'rxjs';

@Injectable()
export class ImageNameService extends RestService<ImageName> {

  constructor(injector: Injector) {
    super(ImageName, 'imageNames', injector);
  }

  public findGamesByCreatorUsernameContaining(username: string): Observable<ImageName[]> {
    const options: any = {params: [{key: 'id', value: username}]};
    return this.search('findImageNamesByCreatorUsernameContaining', options);
  }
}
