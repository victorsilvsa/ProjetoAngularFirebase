import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { increment } from '@angular/fire/firestore';
import { IncremnetComponent } from './incremnet.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [IncremnetComponent],
  imports: [
    CommonModule, 
    IonicModule
  ], 

  exports: [IncremnetComponent]

  
})
export class IncremnetModule { }
