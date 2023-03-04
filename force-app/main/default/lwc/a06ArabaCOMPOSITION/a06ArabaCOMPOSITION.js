import { LightningElement } from 'lwc';

export default class A06ArabaCOMPOSITION extends LightningElement {

arabaMarkasi = 'Honda';
yakitTuruDede = 'ELEKTRIK';

handleYakitTuru(ev){
  this.yakitTuruDede = ev.target.value;
}

}