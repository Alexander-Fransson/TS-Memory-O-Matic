import {shuffle} from 'lodash';
import Card from './card-component';

export default class Game {
    
    cards : string[]
    memorySection : HTMLElement

    constructor() {

        this.cards = [
            '1_pig',
            '2_squirrel',
            '3_rabbit',
            '4_frog',
            '5_fox',
            '6_bear',
            '7_monkey',
            '8_panda',
            '9_chick',
            '10_tiger',
            '11_penguin',
            '12_racoon',
        ];

        this.cards = shuffle([...this.cards, ...this.cards]);
        this.memorySection = document.querySelector('#memory-section')!
    }

    renderCards() : void {
        this.cards.forEach(cardName => {
            this.memorySection.appendChild(new Card(cardName))
        });
    } 
    
    public checkCards() {
        const allCards = document.querySelectorAll('mem-card');
        console.log(allCards);
    }
}

new Game().renderCards();