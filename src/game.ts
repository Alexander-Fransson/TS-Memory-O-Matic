import {shuffle} from 'lodash';
import Card from './card-component';

export default class Game {
    
    cards : string[];
    memorySection : HTMLElement;

    constructor(dev=false) {
        this.memorySection = document.querySelector('#memory-section')!;
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
        this.cards = this.cards.flatMap(card => [card, card]);
        if (!dev) {
            this.cards = shuffle(this.cards)
        }
    }

    play() {
        this.memorySection.addEventListener('click', (e) => this.flickCard(e));
        this.renderCards()
    }

    flickCard(e : any) :void {

        if(this.checkCards(this.updateBoardView().allFaces) < 1){
            e.target.flip();   
        }
        else if(this.checkCards(this.updateBoardView().allFaces) < 2){

            e.target.flip();

            this.pair(this.updateBoardView().allCards,this.updateBoardView().allFaces);

            setTimeout(() => {
                this.updateBoardView().allCards.forEach(element => {
                    element.face = element.back;
                    element.requestUpdate();
               });
            }, 2000);
        }
        else{}
    }

    renderCards() : void {
        this.cards.forEach(cardName => {
            this.memorySection.appendChild(new Card(cardName))
        });
    } 

    updateBoardView() {
        const allFaces: string[] = [];
        const allCards: NodeListOf<Card> = this.memorySection.querySelectorAll('mem-card')
        allCards.forEach(element => allFaces.push(element.face));

        return {
            allFaces: allFaces,
            allCards: allCards,
        };
    }
    
    checkCards(allFaces : string[]) {
        return allFaces.filter(element => element !== 'back').length;
    }

    pair(allCards: NodeListOf<Card>, allFaces: string[]) {

        const indexes: number[] = [];
        
        allFaces.forEach((element, index) => {
            if(element !== 'back'){
                indexes.push(index);
            }
        });

        if(allFaces[indexes[0]!] === allFaces[indexes[1]!] && indexes.length > 1){
            console.log('pair');
            allCards[indexes[0]!]?.setPair();
            allCards[indexes[1]!]?.setPair();
        }
    }
}

new Game(false).play();