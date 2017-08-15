import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import React, { Component } from 'react';
// import fs from 'fs';

class App extends Component{
  render(){
    return (
      <main className="iam-from-server" id="root" data-role="app-shell">
        Loading page....
      </main>
    );
  }
}

function * renderApp(next) {
  const initialState = { test: 'afeiship' };
  const appShellHtml = renderToString(<App />);

  this.body = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>React SSR</title>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState || {})}
          </script>
        </head>
        <body>
            ${appShellHtml}
            <script type="application/javascript" src="/build/bundle.js"></script>
        </body>
      </html>`.trim();
}

module.exports = {
  renderApp
};
