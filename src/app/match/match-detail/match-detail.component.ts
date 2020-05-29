import { Component, OnInit } from '@angular/core';
import {Match} from '../match';
import {Router, ActivatedRoute} from '@angular/router';
import {MatchService} from '../match.service';
import {ContentCreator} from '../../content-creator/contentCreator';
import {Game} from "../../games/game";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html'
})
export class MatchDetailComponent implements OnInit {
  public match: Match;
  public games: Game[] = [];
  private id: string;
  private setGames: Set<string>;

  constructor(private router: Router, private route: ActivatedRoute, private matchService: MatchService) { }

  ngOnInit(): void {
    this.match = new Match();
    this.setGames = new Set<string>();
    this.id = this.route.snapshot.paramMap.get('id');
    this.matchService.get(this.id).subscribe((match: Match) => {
      this.match = match;
      match.getRelation(ContentCreator, 'contentCreator').subscribe((creator: ContentCreator) => this.match.contentCreator = creator);
      match.getRelationArray(Game, "games").subscribe((games: Game[]) => {
        this.games = games;
        this.games.forEach((game) => {this.setGames.add(game.uri)})
      });
    });
  }

  deleteGame(game: Game): void{
    console.log(this.games[0].uri);
    console.log(this.setGames);
    console.log(game.uri);
    this.setGames.delete(game.uri);
    this.match.setGames(Array.from(this.setGames));
    this.matchService.patch(this.match).subscribe(
      () =>
        this.router.navigate['/matches/' + this.id]);
    this.ngOnInit();
  }
}
