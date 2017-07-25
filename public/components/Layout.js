import React, { Component } from 'react';

class Layout extends Component {
  render() {
      return (
        <html lang='en'>
        <head>
          <title>Sample Applicaion</title>
          <script src='bundle.js'/>
        </head>
        <body>
        <div id='app'>
          <div>{this.props.children}</div>
        </div>
        </body>
        </html>
      );
    }
}
