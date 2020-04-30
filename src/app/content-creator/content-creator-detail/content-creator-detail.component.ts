import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentcreatorService } from '../contentcreator.service';
import { Contentcreator } from '../contentcreator';
import { User } from '../../login-basic/user';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-content-creator-detail',
  templateUrl: './content-creator-detail.component.html'
})
export class ContentCreatorDetailComponent implements OnInit {
  public contentcreator: Contentcreator = new Contentcreator();

  constructor(private route: ActivatedRoute,
              private contentcreatorService: ContentcreatorService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contentcreatorService.get(id).subscribe(
      contentcreator => {
        this.contentcreator = contentcreator;
      });
  }

  getCurrentUser(): User {
    return this.authenticationService.getCurrentUser();
  }
}
