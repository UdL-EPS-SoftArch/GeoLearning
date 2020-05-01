import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { ContentcreatorService } from '../contentcreator.service';
import {ContentCreator} from '../contentCreator';
import { User } from '../../login-basic/user';


@Component({
  selector: 'app-content-creator-register',
  templateUrl: './content-creator-register.component.html',
})

export class ContentCreatorRegisterComponent implements OnInit {
  public user: ContentCreator;

  constructor(private router: Router,
              private contentcreatorService: ContentcreatorService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit() {
    this.user = new ContentCreator();
  }

  onSubmit(): void {
    this.contentcreatorService.create(this.user).subscribe(
      (contentcreator: ContentCreator) => {
        this.authenticationBasicService.login(contentcreator.id, contentcreator.password).subscribe(
          (user: User) => this.router.navigate([user.uri]))
      });
  }
}
