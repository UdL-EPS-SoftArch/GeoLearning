import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Match} from "../match";
import {MatchService} from "../match.service";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-match-delete',
  templateUrl: './match-delete.component.html',
})
export class MatchDeleteComponent implements OnInit {

  public id: string;
  public user: Match = new Match();
  constructor(  private router: Router,
                private route: ActivatedRoute,
                private matchService: MatchService,
                private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.matchService.get(this.id).subscribe(
      match => this.user  = match);
  }

  delete() {
    this.matchService.delete(this.user).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }
}
