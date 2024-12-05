import { LitElement, html } from "lit";
import { baseStyles } from "./styles/base-styles";

import "./components/header-lyout/header-layout";

class ECommerceProductPage extends LitElement {
  static styles = [baseStyles];

  render() {
    return html`
      <header>
        <header-layout></header-layout>
      </header>
    `;
  }
}

customElements.define("e-commerce-product-page", ECommerceProductPage);
