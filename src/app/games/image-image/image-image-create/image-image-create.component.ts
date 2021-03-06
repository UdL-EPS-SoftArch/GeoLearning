import { ImageImageService } from './../image-image.service';
import { Router } from '@angular/router';
import { ImageImage } from './../imageImage';
import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';

@Component({
  selector: 'app-image-image-create',
  templateUrl: './image-image-create.component.html'
})

export class ImageImageCreateComponent implements OnInit {

  public imageImage: ImageImage;

  constructor(private router: Router,
              private imageImageService: ImageImageService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit() {
    this.imageImage = new ImageImage();
  }

  onSubmit(): void {
    this.imageImage.creator = this.authenticationService.getCurrentUser();
    this.imageImageService.create(this.imageImage).subscribe(
      (imageImage: ImageImage) => {
        this.router.navigate(['imageImages/' + this.getId()]);
      }
    )
  }

  getId() {
    const uri = this.imageImage.uri.toString();
    const splitted = uri.split('/');
    return splitted[2];
  }
}
