import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'produtos/novo', component: ProdutoFormComponent },
  { path: 'produtos/editar/:id', component: ProdutoFormComponent },
  { path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
