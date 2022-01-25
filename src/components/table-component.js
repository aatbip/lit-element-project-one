/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './table-category';
import './product-component';


export class TableComponent extends LitElement {
  static get styles() {
    return css`
        .table-head {
            display: flex; 
        }

        .table-head .column {
            width: 120px; 
        }
    `;
  }

  static get properties() {
    return {
      data: { type: Array },
      keyword: {
        type: String,
      },
      isStocked: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.data = [];
    this.row = [];
    this.keyword = '';
  }

  render() {
    let _item;

    this.row = [];
    this.data.forEach((items) => {
      if (items.name.indexOf(this.keyword) === -1) {
        return;
      }
      if (this.isStocked && !items.stocked) {
        return;
      }

      if (items.category != _item) {
        _item = items.category;
        this.row.push(html`<table-category
          .category=${items.category}
        ></table-category>`);
      }

      this.row.push(html`
        <product-component .products=${items}></product-component>
      `);
    });

    return html`
      <div class="table">
        <div class="table-head">
          <div class="column">Name</div>
          <div class="column">Price</div>
        </div>
        <div class="table-body">${this.row}</div>
      </div>
    `;
  }
}

customElements.define('table-component', TableComponent);
