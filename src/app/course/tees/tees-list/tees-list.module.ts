import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeesListPageRoutingModule } from './tees-list-routing.module';

import { TeesListPage } from './tees-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeesListPageRoutingModule
  ],
  declarations: [TeesListPage]
})
export class TeesListPageModule {}
