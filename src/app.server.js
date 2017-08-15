'use strict';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import React, { Component } from 'react';
// import fs from 'fs';

class App extends Component{
  render(){
    const {test} = this.props;
    return (
      <main className="iam-from-server" id="root" data-role="app-shell">
        Hello {test}
      </main>
    );
  }
}

function* renderApp(next) {
  this.body = yield initAndRender({
    test:'fei'
  });
}

function* initAndRender(props) {
  const appShellHtml = renderToString(<App {...props} />);
  return renderIndex(appShellHtml, props);
}

function renderIndex(inAppShellHtml, inInitialState) {
  // can also be done with template engine like ejs or jade/pug
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>React SSR</title>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(inInitialState || {})}
        </script>
      </head>
      <body>
          ${inAppShellHtml}
          <script type="application/javascript" src="/build/bundle.js"></script>
      </body>
    </html>`;
}

module.exports = {
  renderApp
};
