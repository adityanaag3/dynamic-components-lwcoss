import { LightningElement, api } from 'lwc';

export default class Step1 extends LightningElement {
    @api username;

    handleNext(){
        const event = new CustomEvent('nav', {
            detail: { step: 1 }
        });
        this.dispatchEvent(event);
    }

}
