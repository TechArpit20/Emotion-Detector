import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './components/conversation/conversation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FacialComponent } from './components/facial/facial.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardGuard } from './guards/auth-guard/auth-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path:'user',
    canActivate: [AuthGuardGuard],
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'conversation',
        component: ConversationComponent
      },
      {
        path: 'facial',
        component: FacialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
