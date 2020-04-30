import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContentcreatorService } from '../contentcreator.service';
import { Contentcreator } from '../contentcreator';
import { Sort } from '@lagoshny/ngx-hal-client';

@Component({
  selector: 'app-content-creator-list',
  templateUrl: './content-creator-list.component.html'
})
export class ContentCreatorListComponent implements OnInit {
  public contentcreators: Contentcreator[] = [];
  public pageSize = 5;
  public page = 1;
  public totalContentcreators = 0;
  private sorting: Sort[] = [{ path: 'username', order: 'ASC' }];

  constructor(
    public router: Router,
    private contentcreatorService: ContentcreatorService) {
  }

  ngOnInit() {
    this.contentcreatorService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (contentcreators: Contentcreator[]) => {
        this.contentcreators = contentcreators;
        this.totalContentcreators = this.contentcreatorService.totalElement();
      });
  }

  changePage() {
    this.contentcreatorService.page(this.page - 1).subscribe(
      (contentcreators: Contentcreator[]) => this.contentcreators = contentcreators);
  }
}
