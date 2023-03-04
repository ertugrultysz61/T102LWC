import { LightningElement } from 'lwc';

export default class A10customEventChildBir extends LightningElement {

  sehir = 'SIVAS'
  handleClick(){
    const cstEvent = new CustomEvent('armut', {detail:this.sehir})
    this.dispatchEvent(cstEvent)
  }

}