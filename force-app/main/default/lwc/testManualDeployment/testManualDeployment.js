import { LightningElement } from 'lwc';

export default class TestManualDeployment extends LightningElement {
    greeting = 'World';
    handleInputChange(event) {
        this.greeting = event.target.value;
    }
}