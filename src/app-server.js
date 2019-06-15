import { renderToString } from 'react-dom/server';
import React, { Component } from 'react';
import ejs from 'ejs';

class AppShell extends Component {
  render() {
    return (
      <main className="iam-from-server" id="root" data-role="app-shell">
        Loading page....
      </main>
    );
  }
}

export default (req, res) => {
  const initialState = JSON.stringify({
    name: 'afeiship',
    homepage: 'https://github.com/afeiship'
  });
  const appShell = renderToString(<AppShell />);
  const filename = `${__dirname}/app-shell.ejs`;

  ejs.renderFile(filename, { appShell, initialState }, (err, str) => {
    res.send(str);
  });
};
