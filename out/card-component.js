(() => {
  // card-component.ts
  var Card = class extends HTMLElement {
    constructor(cardName) {
      super();
      this.cardName = cardName;
      this.attachShadow({ mode: "open" });
      this.shadowRoot?.appendChild(this.template().content.cloneNode(true));
      this.setAttribute("data-front", this.cardName);
      this.setAttribute("data-isfound", "false");
      this.addEventListener("click", () => {
        let img = this.shadowRoot?.querySelector("img");
        let allCards = document.querySelectorAll("mem-card");
        let allFronts = [];
        allCards.forEach((element) => {
          const el = element;
          console.log(el.dataset);
        });
        console.log(this.dataset.front);
        console.log(this.dataset.isfound);
        if (img?.getAttribute("src") === "./img/back.png") {
          img?.setAttribute("src", "./img/" + cardName + ".png");
        } else {
          img?.setAttribute("src", "./img/back.png");
          console.log(allCards);
        }
      });
    }
    template() {
      const templat = document.createElement("template");
      templat.innerHTML = `
            <img src="./img/back.png"/>
        `;
      return templat;
    }
  };
  window.customElements.define("mem-card", Card);
})();
