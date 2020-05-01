import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ContentCreator } from './contentCreator';

@Injectable()
export class ContentcreatorService extends RestService<ContentCreator> {

  constructor(injector: Injector) {
    super(ContentCreator, 'contentCreators', injector);
  }

  public findByUsernameContaining(text: string): Observable<ContentCreator[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByUsernameContaining', options);
  }
}
