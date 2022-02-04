import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTeesPageRoutingModule } from './edit-tees-routing.module';

import { EditTeesPage } from './edit-tees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTeesPageRoutingModule
  ],
  declarations: [EditTeesPage]
})
export class EditTeesPageModule {}
