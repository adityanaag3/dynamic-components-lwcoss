import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    dynamicCtor;
    username = 'Aditya';

    async connectedCallback(){
        const ctor = await import('my/step1');
        this.dynamicCtor = ctor.default;
    }

    async handleNav(event){
        if(event.detail.step === 1){
            const ctor = await import('my/step2');
            this.dynamicCtor = ctor.default;
        } else if(event.detail.step === 2){
            const ctor = await import('my/step3');
            this.dynamicCtor = ctor.default;
        } else if(event.detail.step === 3){
            const ctor = await import('my/step4');
            this.dynamicCtor = ctor.default;
        }
        
    }
}
