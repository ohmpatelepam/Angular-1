import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddarticleComponent} from './addarticle/addarticle.component';
import {BodyComponent} from './body/body.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
                        { path: '',  redirectTo: 'login', pathMatch: 'full' },
                        {path:'login', component: LoginComponent},
                        {path:':username', redirectTo: ':username/home/bodycomponent/all', pathMatch:'full'},
                          {path:':username/home/bodycomponent/:src', component: HomeComponent,
                              children:[  
                                    {path:':src', component: BodyComponent}
                                ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
