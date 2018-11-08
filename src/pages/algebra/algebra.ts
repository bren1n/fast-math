import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { templateSourceUrl } from '@angular/compiler';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-algebra',
  templateUrl: 'algebra.html',
})
export class AlgebraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  segundos: any = 0;
  minutos: number = 0;
  acabou = '';

  ionViewDidLoad() {
    this.segundos = "00"
    console.log('ionViewDidLoad AlgebraPage');
    if(this.acabou == ''){
    var intervalo = setInterval(() => {
      this.segundos++;

    if(this.segundos < 10){
      this.segundos = "0" + this.segundos; 
    }
    if(this.segundos == 60){
      this.minutos++;
      this.segundos = "00"
    }
      if(this.acabou == 'true'){
        clearInterval(intervalo);
      }
    },1000)}
    this.passaQuestao();
    }


  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    }
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    }
  }

  contador: number = 0;
  pontos: number = 0;
  questao: number = 0;
  corCorreta = '';
  corErrada1 = '';
  corErrada2 = '';
  corErrada3 = '';
  desativaBotao = '';
  lista = [];

passaQuestao(){
  this.desativaBotao = '';
  this.corCorreta = ''
  this.corErrada1 = ''
  this.corErrada2 = ''
  this.corErrada3 = ''

  if(this.questao < 7){
    do{
    var y = Math.floor(Math.random() * 20) + 1;}
    while((this.lista.indexOf(y) > -1) == true);

  this.questao++;
  this.lista.push(y);
  this.contador=y;
  }
  else{
    this.acabou = 'true';
    this.contador = 21;
  }}


  mudaCor(n: number){
    if (n == 0){
      this.corCorreta = 'green';
      this.corErrada1 = 'red';
      this.desativaBotao = 'true'
    }

    else if (n == 1){
      this.corCorreta = 'green';
      this.corErrada2 = 'red';
      this.desativaBotao = 'true'
    }

    else if (n == 2){
      this.corCorreta = 'green';
      this.corErrada3 = 'red';
      this.desativaBotao = 'true'
    }

    else if (n == 3){
      this.corCorreta = 'green';
      this.pontos++;
      this.desativaBotao = 'true'
    }

    var self=this;
    setTimeout(function(){self.passaQuestao()}, 1000);
  }

  menu(){
    this.navCtrl.push(HomePage);
    this.contador = 0;
    this.questao = 0;
    this.pontos = 0;
    this.acabou = '';
    this.lista = [];
  }

  tentarNovamente(){
    this.contador = 0;
    this.questao = 0;
    this.pontos = 0;
    this.acabou = '';
    this.segundos = 0;
    this.minutos = 0;
    this.lista = [];
    this.passaQuestao();

    this.segundos = "00";
    if(this.acabou == ''){
    var intervalo = setInterval(() => {
      this.segundos++;

    if(this.segundos < 10){
      this.segundos = "0" + this.segundos; 
    }
    if(this.segundos == 60){
      this.minutos++;
      this.segundos = "00"
    }
      if(this.acabou == 'true'){
        clearInterval(intervalo);
      }
    },1000)}}}