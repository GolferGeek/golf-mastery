import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeesDetailPageRoutingModule } from './tees-detail-routing.module';

import { TeesDetailPage } from './tees-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeesDetailPageRoutingModule
  ],
  declarations: [TeesDetailPage]
})
export class TeesDetailPageModule {}
