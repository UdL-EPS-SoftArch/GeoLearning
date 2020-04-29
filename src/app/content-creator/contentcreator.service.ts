import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Contentcreator } from './contentcreator';

@Injectable()
export class ContentcreatorService extends RestService<Contentcreator> {

  constructor(injector: Injector) {
    super(Contentcreator, 'contentcreators', injector);
  }

  public findByUsernameContaining(text: string): Observable<Contentcreator[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByUsernameContaining', options);
  }
}
