import { Component, OnInit } from '@angular/core';
import { ImageName } from '../imageName';
import { Router } from '@angular/router';
import { ImageNameService } from '../image-name.service';
import { AuthenticationBasicService } from '../../../login-basic/authentication-basic.service';


@Component({
  selector: 'app-image-name-list',
  templateUrl: './image-name-list.component.html',
})
export class ImageNameListComponent implements OnInit {
  public imageNameGames: ImageName[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageNameGames = 0;


  constructor(
    public router: Router,
    private imageNameService: ImageNameService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.imageNameService.getAll({size: this.pageSize}).subscribe(
      (imageNameGames: ImageName[]) => {
        this.imageNameGames = imageNameGames;
        this.totalImageNameGames = this.imageNameService.totalElement();
      }
    )
  }

  changePage() {
    this.imageNameService.page(this.page - 1).subscribe(
      (imageNameGames: ImageName[]) => this.imageNameGames = imageNameGames);
  }

  isLoggedCreator() {
    return this.authenticationService.isRole('CONTENTCREATOR');
  }
}
