import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageNameService } from '../image-name.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { ImageName } from '../imageName';

@Component({
  selector: 'app-image-name-create',
  templateUrl: './image-name-create.component.html'
})

export class ImageNameCreateComponent implements OnInit {
  public imageName: ImageName;

  constructor(private router: Router,
              private imageNameService: ImageNameService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.imageName = new ImageName();
  }

  onSubmit(): void {
    this.imageName.creator = this.authenticationService.getCurrentUser();
    this.imageNameService.create(this.imageName).subscribe(
      (imageName:ImageName) => {
        this.router.navigate([imageName.uri]);
      }
    )
  }

}
