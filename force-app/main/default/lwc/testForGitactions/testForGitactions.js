import { LightningElement } from 'lwc';

export default class TestForGitactions extends LightningElement {
    greeting = 'World';
    handleInputChange(event) {
        this.greeting = event.target.value;
    }
}