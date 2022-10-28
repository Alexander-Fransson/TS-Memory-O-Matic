import {shuffle} from 'lodash';
import Card from './card-component';

export default class Game {
    
    cards : string[];
    memorySection : HTMLElement;

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
        this.memorySection.addEventListener('click', (e) => this.flickCard(e));
        this.renderCards()
    }

    flickCard(e : any) :void {
        const allFaces: string[] = [];
        const allCards: NodeListOf<Card> = this.memorySection.querySelectorAll('mem-card')
        allCards.forEach(element => allFaces.push(element.face));

        if(this.checkCards(allFaces)){
            e.target.flip();
        }else{
           allCards.forEach(element => {
                element.face = element.back;
                element.requestUpdate();
           })
        }
    }

    renderCards() : void {
        this.cards.forEach(cardName => {
            this.memorySection.appendChild(new Card(cardName))
        });
        console.log('renderer')
    } 
    
    public checkCards(allFaces : string[]) {
        return allFaces.filter(element => element !== 'back').length < 2;
    }
}

new Game(true).play();