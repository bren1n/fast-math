import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { AlgebraPage } from '../algebra/algebra';
import { GeometriaPage } from'../geometria/geometria';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  mudaPageAritmetica(){
    this.navCtrl.push(QuizPage);
  }
  mudaPageAlgebra(){
    this.navCtrl.push(AlgebraPage);
  }

  mudaPageGeometria(){
    this.navCtrl.push(GeometriaPage);
  }
}