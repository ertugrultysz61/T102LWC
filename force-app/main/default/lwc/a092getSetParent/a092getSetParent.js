import { LightningElement, track } from 'lwc';
export default class A092getSetParent extends LightningElement {
    girilenYas=0
    handleYas(event){
    this.girilenYas = event.target.value
    }
@track customerDetail={
    name:'Resul',
    yas: 9
  }

  handleName(event){
    this.customerDetail.name = event.target.value
  }

  goster=true

  handleSakla(){
    this.goster = false
  }

  renderedCallback(){
    this.goster = true
  }
}