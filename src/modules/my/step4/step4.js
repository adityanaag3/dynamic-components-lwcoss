import { LightningElement, api } from 'lwc';

export default class Step4 extends LightningElement {
    @api username;

    handleNext(){
        const event = new CustomEvent('nav', {
            detail: { step: 4 }
        });
        this.dispatchEvent(event);
    }

}
