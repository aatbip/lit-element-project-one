/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './filter-component'; 
import './table-component'; 
import { ITEMS } from '../constants/constants'

export class MainComponent extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      keyword: { type: String }, 
      inStocked: { type: Boolean }, 
      handleKeyword: { type: Function }, 
      handleCheckBoxStatus: { type: Function }
    }
  }

  constructor() {
    super(); 
    this.keyword = ''; 
    this.isStocked = false; 
    this.handleKeyword = this.handleKeyword.bind(this); 
    this.handleCheckBoxStatus = this.handleCheckBoxStatus.bind(this); 
  }

  render() {
    return html`
      <filter-component
        .keyword = ${this.keyword}
        .isStocked = ${this.isStocked}
        .listenKeyword = ${this.handleKeyword}
        .listenCheckBoxStatus = ${this.handleCheckBoxStatus}
      ></filter-component>
      <table-component
        .data = ${ITEMS}
        .keyword = ${this.keyword}
        .isStocked = ${this.isStocked}
      ></table-component>
    `;
  }

  handleKeyword(event) {
    this.keyword = event.target.value; 
  }

  handleCheckBoxStatus(event) {
    this.isStocked = event.target.checked; 
  }
  
}

customElements.define('main-component', MainComponent);
