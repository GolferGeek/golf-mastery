import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTeesPageRoutingModule } from './create-tees-routing.module';

import { CreateTeesPage } from './create-tees.page';
import { SideComponent } from '../components/side/side.component';
import { HoleComponent } from '../components/hole/hole.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTeesPageRoutingModule
  ],
  declarations: [CreateTeesPage, SideComponent, HoleComponent]
})
export class CreateTeesPageModule {}
