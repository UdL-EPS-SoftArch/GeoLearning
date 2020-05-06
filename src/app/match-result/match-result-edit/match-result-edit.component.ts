import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchResultService} from '../match-result.service';
import {MatchResult} from '../match-result';
import {Player} from '../../player/player';
import {PlayerService} from "../../player/player.service";
import {Sort} from "@lagoshny/ngx-hal-client";

@Component({
  selector: 'app-match-result-edit',
  templateUrl: './match-result-edit.component.html'
})
export class MatchResultEditComponent implements OnInit {
  public matchResult: MatchResult = new MatchResult();
  public players: Player[] = [];
  private sorting: Sort[] = [{ path: 'username', order: 'ASC' }];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private matchResultService: MatchResultService,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.matchResultService.get(id).subscribe(matchResult => {
      this.matchResult = matchResult;
    });
    this.playerService.getAll({sort: this.sorting}).subscribe(
      (players: Player[]) => {
        this.players = players;
      });
  }

  public onSubmit() {
    this.matchResultService.update(this.matchResult).subscribe((matchResult: MatchResult) => this.router.navigate([matchResult.uri]));
  }
}
