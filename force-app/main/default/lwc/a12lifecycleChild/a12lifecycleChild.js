import { LightningElement } from 'lwc';

export default class A12lifecycleChild extends LightningElement {
  constructor(){
    super()
    //alert('CHILD CONSTRUCTOR alert')

  }
  
  connectedCallback(){
    //alert('CHILD connectedCallback alert')

  
  }
  
  
  renderedCallback(){
    //alert('CHILD renderedCallback alert')

  
  }
  
  disconnectedCallback(){
  
  }
  
  errorCallback(error, stack){
  
  }

}