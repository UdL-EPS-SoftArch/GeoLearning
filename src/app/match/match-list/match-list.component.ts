import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatchService} from '../match.service';
import {Match} from '../match';
import {Sort} from '@lagoshny/ngx-hal-client';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {
  public matches: Match[] = [];
  public pageSize = 5;
  public page = 1;
  public totalMatch = 0;
  private sorting: Sort[] = [{ path: 'name', order: 'ASC' }];

  constructor(public router: Router,
              private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (matches: Match[]) => {
        this.matches = matches;
        this.totalMatch = this.matchService.totalElement();
      });
  }

  changePage() {
    this.matchService.page(this.page - 1).subscribe(
      (matches: Match[]) => this.matches = matches);
  }
}
