/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import { LitElement, html, css } from 'lit';

 import { classMap } from 'lit-html/directives/class-map.js';
 
 
 
 export class TableCategory extends LitElement {
   static get styles() {
     return css`
      .category-head {
          font-weight: bold; 
      }
     `;
   }
 
   static get properties() {
     return {
       category: { type: String },
     };
   }
 
   constructor() {
     super();
     this.category = ''; 
   }
 
 
   render() {
    return html` <div class="category-head">${this.category}</div> `;
  }
 }
 
 customElements.define('table-category', TableCategory);
 