import { ContentCreator } from './../../../content-creator/contentCreator';
import { ContentcreatorService } from './../../../content-creator/contentcreator.service';
import { ImageImageService } from '../image-image.service';
import { Router } from '@angular/router';
import { ImageImage } from '../imageImage';
import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from '../../../login-basic/authentication-basic.service';


@Component({
  selector: 'app-image-image-list',
  templateUrl: './image-image-list.component.html'
})
export class ImageImageListComponent implements OnInit {

  public imageImageGames: ImageImage[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageImageGames = 0;
  public saveUri;

  constructor(
    public router: Router,
    private imageImageService: ImageImageService,
    private authenticationService: AuthenticationBasicService,
    private contentcreatorService: ContentcreatorService) {
  }

  ngOnInit(): void {

    this.imageImageService.getAll({size: this.pageSize}).subscribe(
      (imageImageGames: ImageImage[]) => {
        this.imageImageGames = imageImageGames;
        this.totalImageImageGames = this.imageImageService.totalElement();
    })
  }

  changePage() {
//    this.imageImageService.page(this.page - 1).subscribe(
//      (this.imageImageGames: ImageImage[]) => this.imageImageGames = this.imageImageGames);
  }

  getId(i: number) {
    const uri = this.imageImageGames[i].uri.toString();
    const splitted = uri.split('/');
    return splitted[2];
  }

  getCurrentUser(): string {
    return this.authenticationService.getCurrentUser().id;
  }

  getCreatorIDFor(imageImage: ImageImage): string {
    imageImage.getRelation(ContentCreator, 'creator').subscribe(
      (creator: ContentCreator) => imageImage.creator = creator);
    return imageImage.creator.id;
  }

  isLoggedCreator() {
    return this.authenticationService.isRole('CONTENTCREATOR');
  }

}
