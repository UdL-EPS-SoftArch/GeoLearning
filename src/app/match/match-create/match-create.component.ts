import { Component, OnInit } from '@angular/core';
import {Match} from '../match';
import {MatchService} from '../match.service';
import {Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {ContentCreator} from '../../content-creator/contentCreator';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html'
})
export class MatchCreateComponent implements OnInit {
  public match: Match;
  public creator: ContentCreator;
  constructor(private router: Router,
              private matchService: MatchService,
              private authenticationService: AuthenticationBasicService) {}

  ngOnInit(): void {
    this.match = new Match();
  }

  onSubmit(): void {
    this.matchService.create(this.match).subscribe(
      (match: Match) => this.router.navigate([match.uri])
    );
  }
}
