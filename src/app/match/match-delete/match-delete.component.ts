import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Match} from "../match";
import {MatchService} from "../match.service";

@Component({
  selector: 'app-match-delete',
  templateUrl: './match-delete.component.html',
})
export class MatchDeleteComponent implements OnInit {

  private id: string;
  public match: Match = new Match();
  constructor(  private router: Router,
                private route: ActivatedRoute,
                private matchService: MatchService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.matchService.get(this.id).subscribe(
      match => this.match  = match);
  }

  delete() {
    this.matchService.delete(this.match).subscribe(
      () => this.router.navigate(['match']))
  }
}
