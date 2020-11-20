import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MatCardModule,MatCheckboxModule,MatRadioModule]
})
export class AppRoutingModule { }
