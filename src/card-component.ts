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

  @property({type: Boolean})
  paired: boolean;

  constructor(name : string) {
    super();
    this.name = name
    this.back = 'back';
    this.face = this.back;
    this.paired = false;
  }

  flip(): void {
    if (this.face == 'back') {
        this.face = this.name;
    } else {
        this.face = this.back;
    }
    this.requestUpdate();
  }

  setPair(): void{
    this.paired = true;
  }

  display(): string {
    return this.paired? this.name: this.face;
  }

  render() {
    return html`<img src="./img/${this.display()}.png"/>`;
  }
}