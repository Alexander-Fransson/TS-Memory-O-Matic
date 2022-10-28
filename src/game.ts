import {shuffle} from 'lodash';
import Card from './card-component';

export default class Game {
    
    cards : string[]
    memorySection : HTMLElement

    constructor(dev=false) {

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

        this.cards = this.cards.flatMap(card => [card, card])
        if (!dev) {
            this.cards = shuffle(this.cards)
        }
        this.memorySection = document.querySelector('#memory-section')!
    }

    play() {
        // this.memorySection.addEventListener('click',() => {

        //     let allCards = document.querySelectorAll('mem-card');
        //     let allFronts = []
        //     // (Array.from(allCards)).filter(element => (element.dataset).includes()).length;


        //     allCards.forEach(element  => {
        //         const el = element as HTMLElement
        //         console.log(el.dataset.front)
        //         //count = allCards
        //     });

        //     console.log(this.dataset.front)
        //     console.log(this.dataset.isfound)


        //     if (img?.getAttribute('src') === './img/back.png') {

        //         img?.setAttribute('src', './img/'+cardName+'.png');
        //         this.setAttribute('')

        //     } else {

        //         img?.setAttribute('src', './img/'+this.getAttribute('data-back')+'.png');
        //         console.log(allCards);

        //     }

        // });
        this.renderCards()
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

new Game(true).play();