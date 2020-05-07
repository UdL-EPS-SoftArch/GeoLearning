import { Component, OnInit } from '@angular/core';
import {Match} from "../match";
import {Router, ActivatedRoute} from "@angular/router";
import {MatchService} from "../match.service";
import {ContentCreator} from "../../content-creator/contentCreator";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html'
})
export class MatchDetailComponent implements OnInit {
  public match: Match;

  constructor(private router: Router, private route: ActivatedRoute, private matchService: MatchService) { }

  ngOnInit(): void {
    this.match = new Match();
    const id = this.route.snapshot.paramMap.get('id');
    this.matchService.get(id).subscribe((match: Match) => {
      this.match = match;
      match.getRelation(ContentCreator, 'contentCreator').subscribe((creator: ContentCreator) => this.match.contentCreator = creator);
    });
  }

}
