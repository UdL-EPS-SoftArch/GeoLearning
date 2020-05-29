import { Component, OnInit } from '@angular/core';
import {Match} from '../match';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../match.service';
import {Location} from '@angular/common';
import {Game} from '../../games/game';
import {GameService} from '../../games/games.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';


@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
})
export class MatchEditComponent implements OnInit {
  public id: string;
  public match: Match = new Match();
  public games: Game[];
  private setGames: Set<Game>;
  private selectedGames: Set<string>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private matchService: MatchService,
              private gameService: GameService,
              private authenticationService: AuthenticationBasicService,
              private location: Location)
  { }

  ngOnInit(){
    this.setGames = new Set<Game>();
    this.selectedGames = new Set<string>();

    this.gameService.findGamesByCreatorUsernameContaining(
      this.authenticationService.getCurrentUser().id).subscribe((games: Game[]) => {
      games.forEach((game: Game) => {
        this.setGames.add(game);
      });
      this.games = Array.from(this.setGames);
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.matchService.get(this.id).subscribe(
      match => {
        this.match = match;
        this.match.getRelationArray(Game, 'games').subscribe((games: Game[]) => {
          games.forEach((game: Game) => {
            this.selectedGames.add(game.uri);
            this.setGames.forEach((gm: Game) => {
              if(gm.equalsTo(game)) this.setGames.delete(gm);
            })
          });
          this.games = Array.from(this.setGames);
        });
        console.log(this.setGames);
      });
  }

  public onSubmit(): void{
    this.match.setGames(Array.from(this.selectedGames));
    this.matchService.patch(this.match).subscribe(
      () =>
       this.router.navigate['/match/' + this.id]);
  }

  public goBack(): void{
    this.location.back();
  }

  public onSelect(game: Game): void{
    this.selectedGames.add(game.uri);
  }
}
