import { LightningElement } from 'lwc';

export default class TestCompForNewBranch extends LightningElement {
    greeting = 'World';
    handleInputChange(event) {
        this.greeting = event.target.value;
    }
}