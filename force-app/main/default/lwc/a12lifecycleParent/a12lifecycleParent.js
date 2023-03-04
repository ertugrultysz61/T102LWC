import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'

export default class A12lifecycleParent extends LightningElement {
@track contactList
@track error

  constructor(){
  super()
  //alert('PARENT CONSTRUCTOR alert')
 /* getContactList().then(result=>{this.contactList = result;
                                 this.error = undefined })
                  .catch(error=>{this.contactList = undefined;
                                 this.error = result }) */
}

connectedCallback(){
  //alert('PARENT connectedCallback alert')
  getContactList().then(result=>{this.contactList = result;
                        this.error = undefined })
                        .catch(error=>{this.contactList = undefined;
                        this.error = result })

}

renderedCallback(){
  //alert('PARENT renderedCallback alert')


}

disconnectedCallback(){

}

errorCallback(error, stack){

}

}