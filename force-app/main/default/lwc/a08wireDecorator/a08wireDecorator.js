import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts'

export default class A08wireDecorator extends LightningElement {

    @wire (getAllAccounts) butunAccountlar;

    



}