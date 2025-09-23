import { LightningElement } from 'lwc';

export default class TestGitPush extends LightningElement {
    greeting = 'World';
    handleInputChange(event) {
        this.greeting = event.target.value;
    }
}