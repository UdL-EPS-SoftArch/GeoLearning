import { Component, OnInit } from '@angular/core';
import { ImageNameService } from '../image-name.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { ImageName } from '../imageName';

@Component({
  selector: 'app-image-name-edit',
  templateUrl: './image-name-edit.component.html'
})

export class ImageNameEditComponent implements OnInit {
  public imageName: ImageName = new ImageName();
  public id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imageNameService: ImageNameService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageNameService.get(this.id).subscribe(
      imageName => this.imageName = imageName);
  }

  onSubmit(): void {
    this.imageName.instructions = this.imageName.instructions ? this.imageName.instructions : undefined; // Don't edit if not a reset
    this.imageNameService.update(this.imageName).subscribe(
      (imageName: ImageName) => {
        this.router.navigate(['/imageNames/' + this.id]);
      });
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }

}
