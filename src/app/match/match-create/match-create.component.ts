import { Component, OnInit } from '@angular/core';
import {Match} from '../match';
import {MatchService} from '../match.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Game} from '../../games/game';
import {ImageNameService} from "../../games/image-name/image-name.service";
import {ImageOptionService} from "../../games/image-option/image-option.service";
import {ImageImageService} from "../../games/image-image/image-image.service";
import {GameService} from "../../games/games.service";
import {ImageName} from "../../games/image-name/imageName";

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html'
})
export class MatchCreateComponent implements OnInit {
  public match: Match;
  public games: Game[] = [];
  private selectedGames: Set<Game>;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private matchService: MatchService,
              private imageNameService: ImageNameService,
              private authenticationService: AuthenticationBasicService) {}

  ngOnInit(): void {
    this.match = new Match();
    this.selectedGames = new Set<Game>();
    //this.selectedGames = new Set<string>();
    this.imageNameService.findGamesByCreatorUsernameContaining(
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

    /*const id = this.route.snapshot.paramMap.get("id");
    //const uri = '/matches/' + id + '/games';
    this.match.setGames(Array.from(this.selectedGames));*/
    /*this.matchService.update(this.match).subscribe(() => {
      this.router.navigate['/matches/' + id + '/games'];
    });*/
  }

  onSelect(game: Game): void{
    console.log(game);
    if(this.selectedGames.has(game))
      this.selectedGames.delete(game);
    else
      this.selectedGames.add(game);
  }
}
