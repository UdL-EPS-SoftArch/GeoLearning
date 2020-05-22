import { Component, OnInit } from '@angular/core';
import { ImageName } from '../imageName';
import { Router } from '@angular/router';
import { ImageNameService } from '../image-name.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { User } from 'src/app/login-basic/user';
import { ContentCreator } from 'src/app/content-creator/contentCreator';
import { ContentcreatorServiceNarrow } from 'src/app/content-creator/contentcreator.service';

@Component({
  selector: 'app-image-name-list',
  templateUrl: './image-name-list.component.html',
})
export class ImageNameListComponent implements OnInit {
  public imageNameGames: ImageName[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageNameGames = 0;


  constructor(public router: Router,
              private imageNameService: ImageNameService,
              private authenticationService: AuthenticationBasicService,
              private contentCreatorService: ContentcreatorServiceNarrow) {
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

  getCurrentUser(): String {
    return this.authenticationService.getCurrentUser().id;
  }

  getCreatorIDFor(imageName: ImageName): String {
    imageName.getRelation(ContentCreator, 'creator').subscribe(
      (creator: ContentCreator) => imageName.creator = creator);
    return imageName.creator.id;
  }

  isLoggedCreator() {
    return this.authenticationService.isRole('CONTENTCREATOR');
  }
}
