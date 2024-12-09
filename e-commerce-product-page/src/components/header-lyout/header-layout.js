import { LitElement, html } from "lit";
import { headerStyles } from "../../styles/header-layout-styles";

class HeaderLayout extends LitElement {
  static styles = [headerStyles];

  constructor() {
    super();
    this.currentLink = "Collections";
  }

  renderLink(link) {
    const isActive = this.currentLink === link;
    return html`
      <li class="link ${isActive ? "active" : ""}">
        <a href="#" @click=${this.handleLinkClick}>${link}</a>
      </li>
    `;
  }

  handleLinkClick = (event) => {
    event.preventDefault();
    const clickedLink = event.target.textContent;
    if (this.currentLink !== clickedLink) {
      this.currentLink = clickedLink;
      this.requestUpdate();
    }
  };

  render() {
    const links = ["Collections", "Men", "Women", "About", "Contact"];
    return html`
      <div class="header">
        <div class="navigation">
          <a href="#">
            <img
              class="logo-icon"
              src="../../../public/assets/logo.svg"
              alt="logo"
            />
          </a>
          <ul class="links">
            ${links.map(link => this.renderLink(link))}
          </ul>
        </div>
        <div class="status">
          <a href="#">
            <img
              class="icon-cart"
              src="../../../public/assets/icon-cart.svg"
              alt="cart"
            />
          </a>
          <a href="#">
            <img
              class="avatar"
              src="../../../public/assets/image-avatar.png"
              alt="avatar"
            />
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("header-layout", HeaderLayout);
