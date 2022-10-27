class Card extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.appendChild(this.template().content.cloneNode(true));
    }

    connectedCallback() {

        
    }

    template(){
        const templat = document.createElement('template');
        templat.innerHTML = `
            <h1>Bild</h1>
            <img src=""/>
        `;

        return templat;
    }
}

window.customElements.define('mem-card',Card);