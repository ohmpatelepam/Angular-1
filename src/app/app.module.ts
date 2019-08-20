import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AsideComponent } from './aside/aside.component';
import { NewscellComponent } from './newscell/newscell.component';
import { LoaderComponent } from './loader/loader.component';
import {ModelService} from './model.service';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContinuereadingComponent } from './continuereading/continuereading.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AsideComponent,
    NewscellComponent,
    LoaderComponent,
    AddarticleComponent,
    ContinuereadingComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ModelService
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
