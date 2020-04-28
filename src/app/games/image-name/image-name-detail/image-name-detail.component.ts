import { Component, OnInit } from '@angular/core';
import { ImageName } from '../imageName';
import { ActivatedRoute } from '@angular/router';
import { ImageNameService } from '../image-name.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';

@Component({
  selector: 'app-image-name-detail',
  templateUrl: './image-name-detail.component.html'
})
export class ImageNameDetailComponent implements OnInit {
  public imageName: ImageName = new ImageName();
  public id;

  constructor(private route: ActivatedRoute,
              private imageNameService: ImageNameService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
