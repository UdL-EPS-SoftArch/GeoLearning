
import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ImageOption } from './imageOption';

@Injectable()
export class ImageOptionService extends RestService<ImageOption> {

  constructor(injector: Injector) {
    super(ImageOption, 'imageOptions', injector);
  }


}
