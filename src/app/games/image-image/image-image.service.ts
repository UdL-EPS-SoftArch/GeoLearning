import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ImageImage } from './imageImage';

@Injectable()
export class ImageImageService extends RestService<ImageImage> {

  constructor(injector: Injector) {
    super(ImageImage, 'imageImages', injector);
  }
}
