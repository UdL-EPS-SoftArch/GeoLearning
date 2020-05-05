import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatchResultService} from '../match-result.service';
import {MatchResult} from '../match-result';

@Component({
  selector: 'app-match-result-create',
  templateUrl: './match-result-create.component.html'
})
export class MatchResultCreateComponent implements OnInit {
  public matchResult: MatchResult

  constructor(private router: Router,
              private matchResultService: MatchResultService) {
  }

  ngOnInit() {
    this.matchResult = new MatchResult();
  }

  onSubmit() {
    this.matchResultService.create(this.matchResult).subscribe(
      (matchResult: MatchResult) => this.router.navigate(['/matchResults']));
  }
}

