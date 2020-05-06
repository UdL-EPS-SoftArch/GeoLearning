import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatchResultService} from '../match-result.service';
import {MatchResult} from '../match-result';
import {Player} from '../../player/player';
import {PlayerService} from "../../player/player.service";
import {Sort} from "@lagoshny/ngx-hal-client";

@Component({
  selector: 'app-match-result-create',
  templateUrl: './match-result-create.component.html'
})
export class MatchResultCreateComponent implements OnInit {
  public matchResult: MatchResult
  public players: Player[] = [];
  private sorting: Sort[] = [{ path: 'username', order: 'ASC' }];

  constructor(private router: Router,
              private matchResultService: MatchResultService,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.matchResult = new MatchResult();
    this.playerService.getAll({sort: this.sorting}).subscribe(
      (players: Player[]) => {
        this.players = players;
      });
  }

  onSubmit() {
    this.matchResultService.create(this.matchResult).subscribe(
      (matchResult: MatchResult) => this.router.navigate(['/matchResults']));
  }
}

