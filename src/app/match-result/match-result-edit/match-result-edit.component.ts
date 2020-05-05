import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchResultService} from '../match-result.service';
import {MatchResult} from '../match-result';

@Component({
  selector: 'app-match-result-edit',
  templateUrl: './match-result-edit.component.html'
})
export class MatchResultEditComponent implements OnInit {
  public matchResult: MatchResult = new MatchResult();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private matchResultService: MatchResultService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.matchResultService.get(id).subscribe(matchResult => {
      this.matchResult = matchResult;
    });
  }

  public onSubmit() {
    this.matchResultService.update(this.matchResult).subscribe((matchResult: MatchResult) => this.router.navigate([matchResult.uri]));
  }
}
