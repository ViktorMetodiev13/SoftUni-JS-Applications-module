const tmp = document.getElementById('app-button');

class MyButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallBack() {
        this.shadowRoot.appendChild(tmp.content.cloneNode(true));
        this.shadowRoot.querySelector('.btn').textContent = this.getAttribute('text');
        this.shadowRoot.querySelector('.btn').classList.add(this.getAttribute('type'));
    }
}

window.customElements.define('app-button', MyButton);