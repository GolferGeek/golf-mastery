import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './game-routing.module';

import { EditPage } from './edit/edit.page';
import { NewPage } from './new/new.page';
import { ViewPage } from './view/view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule
  ],
  declarations: [EditPage, NewPage, ViewPage]
})
export class GameModule {}
