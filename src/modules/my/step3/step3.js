import { LightningElement, api } from 'lwc';

export default class Step3 extends LightningElement {
    @api username;

    handleNext(){
        const event = new CustomEvent('nav', {
            detail: { step: 3 }
        });
        this.dispatchEvent(event);
    }

}
