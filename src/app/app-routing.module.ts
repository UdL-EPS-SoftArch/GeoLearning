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
import { ImageOptionDetailComponent } from './games/image-option/image-option-detail/image-option-detail.component';
import { ImageOptionCreateComponent } from './games/image-option/image-option-create/image-option-create.component';
import {ImageOptionQuestionCreateComponent} from "./questions/image-option-question/image-option-question-create/image-option-question-create.component";




const routes: Routes = [
  { path: 'register', component: PlayerRegisterComponent},
  { path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id', component: PlayerDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard] },
  { path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions', component: ImageOptionListComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions/new', component: ImageOptionCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions/:id/addQuestion', component: ImageOptionQuestionCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions/:id', component: ImageOptionDetailComponent, canActivate: [LoggedInGuard] },
  //{ path: 'imageOptions/:id/edit', component: ImageOptionEditComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
