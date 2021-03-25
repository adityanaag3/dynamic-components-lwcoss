import { LightningElement, api } from 'lwc';

export default class Step2 extends LightningElement {
    @api username;

    handleNext(){
        const event = new CustomEvent('nav', {
            detail: { step: 2 }
        });
        this.dispatchEvent(event);
    }

}
