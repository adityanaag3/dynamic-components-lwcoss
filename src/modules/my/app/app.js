import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    isStep1 = true;
    isStep2 = false;
    isStep3 = false;
    isStep4 = false;
    
    username = 'Aditya';

    handleNav(event){
        if(event.detail.step === 1){
            this.isStep1 = false;
            this.isStep2 = true;
            this.isStep3 = false;
            this.isStep4 = false;
        } else if(event.detail.step === 2){
            this.isStep1 = false;
            this.isStep2 = false;
            this.isStep3 = true;
            this.isStep4 = false;
        } else if(event.detail.step === 3){
            this.isStep1 = false;
            this.isStep2 = false;
            this.isStep3 = false;
            this.isStep4 = true;
        }
        
    }
}
