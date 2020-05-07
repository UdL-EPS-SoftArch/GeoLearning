import { Component, OnInit } from '@angular/core';
import {Match} from "../match";
import {ActivatedRoute, Router} from "@angular/router";
import {MatchService} from "../match.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
})
export class MatchEditComponent implements OnInit {

  public match: Match = new Match();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private matchService: MatchService,
              private location: Location)
  { }

  ngOnInit(){

    const id = this.route.snapshot.paramMap.get('id');
    this.matchService.get(id).subscribe(
      match => this.match = match);
  }

  public onSubmit(): void{
    this.matchService.update(this.match).subscribe(
      (match: Match) => this.router.navigate[match.uri]);
  }

  public goBack(): void{
    this.location.back();
  }
}
