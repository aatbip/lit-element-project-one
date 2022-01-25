/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './components/main-component';

export class MyApp extends LitElement {
  static get styles() {
    return [
      css`
        main {
          width: 100%;
          margin: 20px;
        }
      `,
    ];
  }
  render() {
    return html`<main><main-component></main-component></main>`;
  }
}

customElements.define('my-app', MyApp);
