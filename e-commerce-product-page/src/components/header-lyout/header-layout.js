import { LitElement, html } from "lit";

import { headerStyles } from "../../styles/header-layout-styles";

class HeaderLayout extends LitElement {
  static styles = [headerStyles];
  render() {
    return html`
      <div class="header">
        <ul class="navigation">
          <a href="#">
            <img
              class="logo-icon"
              src="../../../public/assets/logo.svg"
              alt="logo"
            />
          </a>
          <ul class="links">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </ul>
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
