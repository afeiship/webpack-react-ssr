import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import React, { Component } from 'react';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

class AppShell extends Component{
  render(){
    return (
      <main className="iam-from-server" id="root" data-role="app-shell">
        Loading page....
      </main>
    );
  }
}

function * renderApp(next) {
  const initialState = JSON.stringify({ test: 'afeiship' });
  const appShell = renderToString(<AppShell />);
  
  this.body = ejs.render( String(fs.readFileSync(path.resolve(__dirname, './app-shell.ejs'))) ,{
    appShell,
    initialState
  });
}

export default renderApp;
