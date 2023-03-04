import { LightningElement } from 'lwc';

export default class A2DataBinding extends LightningElement {

  isim = "ERTUGRUL BEY";

  ad = "Akif";

  handlerInput(event){

    this.ad = event.target.value;

  }


  name = "Ayse";
  buyukIsim;
  handlerOnChange(event){

    this.name = event.target.value;

  }

  get IsmiBuyukHarfeCevir(){

    this.buyukIsim = this.name.toUpperCase();
    return this.buyukIsim;
  }



  FirstName = "Ayse";

  handleIsim(event){

    this.FirstName = event.target.value;

  }


LastName = "koc";
  
handleSoyisim(event){

    this.LastName = event.target.value;

  }




  upperCaseFullName;

  get tamIsim(){

    this.upperCaseFullName = this.FirstName.toUpperCase() + " " + this.LastName.toUpperCase();
    return this.upperCaseFullName;
  }




}