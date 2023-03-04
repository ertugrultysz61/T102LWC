import { LightningElement } from 'lwc';

export default class A08reactive extends LightningElement {

ad = 'Akif';

  handleInput(event){

    this.ad = event.target.value;
    console.log(' kod render edildi')
  }


}