import { api, LightningElement } from 'lwc';

export default class A06MotorHakkinda extends LightningElement {

@api motorCinsi = 'Vtec';
@api yakitTuruParent = 'benzinli kardes';
    motorGucuBaba = 2;

    handleMotorGucu(event){
      this.motorGucuBaba = event.target.value;
    }
}