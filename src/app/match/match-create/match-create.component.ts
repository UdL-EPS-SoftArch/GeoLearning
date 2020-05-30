import { Component, OnInit } from '@angular/core';
import {Match} from '../match';
import {MatchService} from '../match.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Game} from '../../games/game';
import {ImageNameService} from '../../games/image-name/image-name.service';
import {GameService} from '../../games/games.service';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html'
})
export class MatchCreateComponent implements OnInit {
  public match: Match;
  public games: Game[] = [];
  private selectedGames: Set<string>;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private matchService: MatchService,
              private imageNameService: ImageNameService,
              private gameService: GameService,
              private authenticationService: AuthenticationBasicService) {}

  ngOnInit(): void {
    this.match = new Match();
    this.selectedGames = new Set<string>();
    this.gameService.findGamesByCreatorUsernameContaining(
      this.authenticationService.getCurrentUser().id
    ).subscribe((games: Game[]) => {
      this.games = games;
    });
  }

  onSubmit(): void {
    this.match.setGames(Array.from(this.selectedGames));
    this.matchService.create(this.match).subscribe(
      (match: Match) => this.router.navigate(['/matches'])
    );
  }

  onSelect(game: Game): void{
    if(this.selectedGames.has(game.uri))
      this.selectedGames.delete(game.uri);
    else
      this.selectedGames.add(game.uri);
  }
}
