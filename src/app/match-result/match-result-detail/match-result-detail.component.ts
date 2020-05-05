import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchResult} from '../match-result';
import {MatchResultService} from '../match-result.service';
// import {Match} from '../match/match';

@Component({
  selector: 'app-match-result-detail',
  templateUrl: './match-result-detail.component.html'
})

export class MatchResultDetailComponent implements OnInit {
  public matchResult: MatchResult = new MatchResult();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private matchResultService: MatchResultService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.matchResultService.get(id).subscribe((matchResult: MatchResult) => {
      this.matchResult = matchResult;
     // matchResult.getRelation(Match, 'match').subscribe((match: Match) => this.matchResult.match = match);
    });
  }

}
