import { Component, OnInit } from '@angular/core';
import { ImageName } from '../imageName';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageNameService } from '../image-name.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';

@Component({
  selector: 'app-image-name-delete',
  templateUrl: './image-name-delete.component.html'
})
export class ImageNameDeleteComponent implements OnInit {
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

  delete() {
    this.imageNameService.delete(this.imageName).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }

}
