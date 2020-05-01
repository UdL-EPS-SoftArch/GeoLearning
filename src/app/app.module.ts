import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxHalClientModule } from '@lagoshny/ngx-hal-client';
import { ExternalConfigurationService } from './external-configuration-service';

import { AppRoutingModule } from './app-routing.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { HttpErrorInterceptor } from './error-handler/http-error-interceptor';
import { LoginBasicModule } from './login-basic/login-basic.module';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AuthInterceptor } from './login-basic/auth-interceptor';

import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { PlayerService } from './player/player.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PlayerRegisterComponent } from './player/player-register/player-register.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerSearchComponent } from './player/player-search/player-search.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageOptionListComponent } from './games/image-option/image-option-list/image-option-list.component';
//import { ImageOptionDetailComponent } from './games/image-option/image-option-detail/image-option-detail.component';
//import { ImageOptionEditComponent } from './games/image-option/image-option-edit/image-option-edit.component';
import { ImageOptionCreateComponent } from './games/image-option/image-option-create/image-option-create.component';
import {ImageOptionService} from "./games/image-option/image-option.service";
import {ImageOptionQuestionService} from "./questions/image-option-question/image-option-question.service";
import {ImageOptionQuestionCreateComponent} from "./questions/image-option-question/image-option-question-create/image-option-question-create.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PlayerRegisterComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerDeleteComponent,
    PlayerEditComponent,
    PlayerSearchComponent,
    //ImageOptionEditComponent,
    //ImageOptionDetailComponent,
    NotFoundComponent,
    ImageOptionListComponent,
    ImageOptionCreateComponent,
    ImageOptionQuestionCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHalClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
    AuthenticationBasicService, LoggedInGuard, PlayerService, ImageOptionService, ImageOptionQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
