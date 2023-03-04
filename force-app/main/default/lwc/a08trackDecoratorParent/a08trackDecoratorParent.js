import { LightningElement, track } from 'lwc';

export default class A08trackDecoratorParent extends LightningElement {

  ad = "Akif";
  soyad = "Tuysuz"

 @track aileBireyi = {
    name: "Resul",
    yas: 50
  }

  handleAd(event){
    this.aileBireyi.name = event.target.value;
//  this.ad = event.target.value;
  }


  handleYas(event){
    this.aileBireyi.yas = event.target.value;
//    this.soyad = event.target.value;
  }

}