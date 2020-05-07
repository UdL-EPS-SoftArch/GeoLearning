import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatchResult} from '../match-result';
import {MatchResultService} from '../match-result.service';
import {Sort} from '@lagoshny/ngx-hal-client';
import {Player} from "../../player/player";
// import {Match} from '../../match/match';

@Component({
  selector: 'app-match-result-list',
  templateUrl: './match-result-list.component.html'
})

export class MatchResultListComponent implements OnInit {
  public matchResults: MatchResult[] = [];
  public pageSize = 5;
  public page = 1;
  public totalMatchResults = 0;
  private sorting: Sort[] = [{path: 'username', order: 'ASC'}];

  constructor(private router: Router,
              private matchResultsService: MatchResultService) {
  }

  ngOnInit() {
    this.matchResultsService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (matchResults: MatchResult[]) => {
        this.matchResults = matchResults;
        this.matchResults.map(matchResult => matchResult.getRelation(Player, 'player').subscribe(player => matchResult.player = player));
        //this.matchResults.map(matchResult => matchResult.getRelation(Match, 'match').subscribe(match => matchResult.match = match));
        this.totalMatchResults = this.matchResultsService.totalElement();
      });
  }

  changePage() {
    this.matchResultsService.page(this.page - 1).subscribe(
      (matchResults: MatchResult[]) => this.matchResults = matchResults);
  }

}
