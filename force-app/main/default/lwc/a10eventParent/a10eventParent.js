import { LightningElement } from 'lwc';

export default class A10eventParent extends LightningElement {

handleYeniClick(){
  alert('***Bak beni Child daki Buton aktif etti')
  window.alert('Bak beni Child daki Buton aktif etti')
}

renderedCallback(){
  this.template.querySelector('c-a10event-child-js')
  .addEventListener('click', this.handleYeniClick)
}





}