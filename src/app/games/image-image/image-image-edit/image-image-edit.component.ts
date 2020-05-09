import { Component, OnInit } from '@angular/core';
import { ImageImageService } from '../image-image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { ImageImage } from '../imageImage';

@Component({
  selector: 'app-image-image-edit',
  templateUrl: './image-image-edit.component.html'
})

export class ImageImageEditComponent implements OnInit {
  public imageImage: ImageImage = new ImageImage();
  public id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imageImageService: ImageImageService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageImageService.get(this.id).subscribe(
      imageImage => this.imageImage = imageImage);
  }

  onSubmit(): void {
    this.imageImage.instructions = this.imageImage.instructions ? this.imageImage.instructions : undefined; // Don't edit if not a reset
    this.imageImageService.update(this.imageImage).subscribe(
      () => {
        this.router.navigate(['/imageImages/' + this.id]);
      });
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }

}
