import { LightningElement } from 'lwc';

export default class A10customEventChildUc extends LightningElement {

  customer = {
    name: 'Mahmut',
    Yas: 45
  }
  handleClick(){
    const cstEvent = new CustomEvent('ayva', {detail:this.customer})
    this.dispatchEvent(cstEvent)
  }

}