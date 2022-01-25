/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import { classMap } from 'lit-html/directives/class-map.js';


export class ProductComponent extends LitElement {
  static get styles() {
    return css`
        .table-data {
            display: flex; 
        }
        .data {
            width: 120px; 
        }
        .outOfStock {
            color: red; 
        }


    `;
  }

  static get properties() {
    return {
      products: { type: Object },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="table-data">
        <div class="data ${classMap({ outOfStock: !this.products.stocked })}">
          ${this.products.name}
        </div>
        <div class="data">${this.products.price}</div>
      </div>
    `;
  }
}

customElements.define('product-component', ProductComponent);
