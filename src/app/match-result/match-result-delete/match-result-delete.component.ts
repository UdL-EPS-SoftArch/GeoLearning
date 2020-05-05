import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatchResultService} from '../match-result.service';
import {MatchResult} from '../match-result';

@Component({
  selector: 'app-match-result-delete',
  templateUrl: './match-result-delete.component.html'
})
export class MatchResultDeleteComponent implements OnInit {
  public matchResult: MatchResult = new MatchResult();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private matchResultService: MatchResultService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.matchResultService.get(id).subscribe(
      matchResult => this.matchResult = matchResult);
  }

  delete() {
    this.matchResultService.delete(this.matchResult).subscribe(
      () => {
        this.router.navigate(['matchResults']);
      });
  }
}
