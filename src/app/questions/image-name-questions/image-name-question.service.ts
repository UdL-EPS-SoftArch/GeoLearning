import { Injectable, Injector } from '@angular/core';
import { ImageNameQuestion } from './imageNameQuestion';
import { RestService } from '@lagoshny/ngx-hal-client';

@Injectable({
  providedIn: 'root'
})
export class ImageNameQuestionService extends RestService<ImageNameQuestion> {

  constructor(injector: Injector) {
    super(ImageNameQuestion, 'imageNames', injector);
  }
}
