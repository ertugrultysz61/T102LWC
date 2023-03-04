import { LightningElement } from 'lwc';

export default class A10customEventParent extends LightningElement {

  yeniBilgi = 'BAK BURASI DEGISECEK'
  handleElma(){
    this.yeniBilgi = 'yepis yeni bilgi firindan taze'
  }

  childVeri
  handleArmut(event){
    this.childVeri = event.detail
  }

  musteri = {
    name: 'Ali',
    Yas: 9
  }
  handleAyva(event){
    this.musteri = event.detail
  }
}