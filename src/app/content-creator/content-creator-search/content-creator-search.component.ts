import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ContentcreatorService } from '../contentcreator.service';
import { User } from '../../login-basic/user';
import { Contentcreator } from '../contentcreator';

@Component({
  selector: 'app-content-creator-search',
  templateUrl: './content-creator-search.component.html',
})

export class ContentCreatorSearchComponent {
  @Input() users: User[];
  @Output() emitResults: EventEmitter<any> = new EventEmitter();

  constructor(private contentcreatorService: ContentcreatorService) {
  }

  performSearch(text: string): void {
    this.contentcreatorService.findByUsernameContaining(text).subscribe((contentcreators: Contentcreator[]) =>
      this.emitResults.emit(contentcreators.sort((a, b) => a.id.localeCompare(b.id))));
  }
}
