/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class FilterComponent extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      keyword: { type: String },
      isStocked: { type: Boolean },
      listenKeyword: { type: Function },
      listenCheckBoxStatus: { type: Function },
    };
  }

  constructor() {
    super();
    this.keyword = '';
    this.isStocked = false;
  }

  render() {
    return html`
      <input
        type="text"
        placeholder="Search..."
        value=${this.keyword}
        @input=${(event) => {
          this.listenKeyword(event);
        }}
      />
      <br />
      <input
        type="checkbox"
        id="filter"
        .checked=${this.isStocked}
        @click=${(event) => {
          this.listenCheckBoxStatus(event);
        }}
      />
      <label for="filter">Only show products in stock</label>
    `;
  }
}

customElements.define('filter-component', FilterComponent);
