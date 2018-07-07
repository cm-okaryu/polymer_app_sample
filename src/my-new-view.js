/* PolymerElement base class と html ヘルパー関数 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* 利用するコンポーネントimport */
import '@polymer/paper-checkbox/paper-checkbox.js';
/* 共通スタイル */
import './shared-styles.js';

/* PolymerElementを継承したクラス*/
class MyNewView extends PolymerElement {
  static get template() {
    /* カスタムエレメント用テンプレートを定義*/
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class = "card">
        <div class="circle"> 1 </div>
        <h1>New View</h1>
        <paper-checkbox>Ready to deploy!</paper-checkbox>
        <p>New view!</p>
      </div>
      `;
  }
}

/* カスタムエレメントをwindowに登録 */
window.customElements.define('my-new-view', MyNewView);
