import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentcreatorService } from '../contentcreator.service';
import { ContentCreator } from '../contentCreator';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-content-creator-delete',
  templateUrl: './content-creator-delete.component.html'
})
export class ContentCreatorDeleteComponent implements OnInit {
  public user: ContentCreator = new ContentCreator();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contentcreatorService: ContentcreatorService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contentcreatorService.get(this.id).subscribe(
      contentcreator => this.user = contentcreator);
  }

  delete() {
    this.contentcreatorService.delete(this.user).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }
}
