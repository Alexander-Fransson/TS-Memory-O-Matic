import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mem-card')
export default class Card extends LitElement {
  static styles = css`img { margin: 0.2vw; }`;

  @property({type: String})
  name : string;

  @property({type: String})
  face : string;

  @property({type: String})
  back: string;

  constructor(name : string) {
    super();
    this.name = name
    this.back = 'back';
    this.face = this.back;
  }

  flip() :void {
    if (this.face == 'back') {
        this.face = this.name;
    } else {
        this.face = this.back;
    }
    this.requestUpdate();
  }

  pair() {

  }

  render() {
    return html`<img src="./img/${this.face}.png"/>`;
  }
}