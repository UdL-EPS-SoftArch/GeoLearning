import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ImageImage } from './imageImage';
import {Observable} from 'rxjs';

@Injectable()
export class ImageImageService extends RestService<ImageImage> {

  constructor(injector: Injector) {
    super(ImageImage, 'imageImages', injector);
  }

  public findGamesByCreatorUsernameContaining(username: string): Observable<ImageImage[]> {
    const options: any = {params: [{key: 'id', value: username}]};
    return this.search('findImageImagesByCreatorUsernameContaining', options);
  }
}
