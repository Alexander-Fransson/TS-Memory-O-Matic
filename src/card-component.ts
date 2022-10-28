import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mem-card')
export default class Card extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
  name : string;

  @property()
  face : string

  @property()
  back: string

  constructor(name : string) {
    super();
    this.name = name
    this.setAttribute('data-front', this.name);
    this.setAttribute('data-back', 'back');
    this.setAttribute('data-isfound', "false");
    this.back = 'back';
    this.face = this.back;
  }

  flip() {
    if (this.face == 'back') {
        this.face = this.name;
    } else {
        this.face = 'back';
    }
  }

  pair() {

  }


  render() {
    return html`<img src="./img/${this.face}.png"/>`;
  }
}