import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ImageName } from './imageName';

@Injectable()
export class ImageNameService extends RestService<ImageName> {

  constructor(injector: Injector) {
    super(ImageName, 'imageNames', injector);
  }


}
