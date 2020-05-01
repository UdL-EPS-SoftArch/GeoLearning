import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { PlayerRegisterComponent } from './player/player-register/player-register.component';
import { ImageOptionListComponent } from './games/image-option/image-option-list/image-option-list.component';
//import { ImageOptionDetailComponent } from './games/image-option/image-option-detail/image-option-detail.component';
//import { ImageOptionEditComponent } from './games/image-option/image-option-edit/image-option-edit.component';
import { ImageOptionCreateComponent } from './games/image-option/image-option-create/image-option-create.component';
import {ImageOptionQuestionCreateComponent} from "./questions/image-option-question/image-option-question-create/image-option-question-create.component";
import {ImageOptionQuestionListComponent} from "./questions/image-option-question/image-option-question-list/image-option-question-list.component";




const routes: Routes = [
  { path: 'register', component: PlayerRegisterComponent},
  { path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id', component: PlayerDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard] },
  { path: 'image-option-games', component: ImageOptionListComponent, canActivate: [LoggedInGuard] },
  { path: 'image-option-games/new', component: ImageOptionCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'image-option-question/:id/add', component: ImageOptionQuestionCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'image-option-question/:id', component: ImageOptionQuestionListComponent, canActivate: [LoggedInGuard] },
  //{ path: 'image-option-games/:id', component: ImageOptionDetailComponent, canActivate: [LoggedInGuard] },
  //{ path: 'image-option-games/:id/edit', component: ImageOptionEditComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
