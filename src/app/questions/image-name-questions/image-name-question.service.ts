import { Injectable, Injector } from '@angular/core';
import { ImageNameQuestion } from './imageNameQuestion';
import { RestService } from '@lagoshny/ngx-hal-client';

@Injectable({
  providedIn: 'root'
})
export class ImageNameQuestionService extends RestService<ImageNameQuestion> {

  constructor(injector: Injector) {
    super(ImageNameQuestion, '', injector);
  }
}


@Injectable({
  providedIn: 'root'
})
export class ImageNameQuestionServiceExtended extends RestService<ImageNameQuestion> {

  constructor(injector: Injector) {
    super(ImageNameQuestion, 'imageNameQuestions', injector);
  }
}
