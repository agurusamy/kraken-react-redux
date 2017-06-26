'use strict';

import React from 'react';
import '../style/style.css';
import '../style/materialize.css';
import '../style/react-range.css';

module.exports = React.createClass({
    render: function render() {
        return (
            <html>
			    <head>
                    <meta charSet="UTF-8"/>
                    <link href="css/style.css" rel="stylesheet" type="text/css" />
                    <link href="css/materialize.css" rel="stylesheet" type="text/css" />
                    <link href="css/react-range.css" rel="stylesheet" type="text/css" />
                    <title>Music</title>
				</head>
			    <body>
					{this.props.children}
					<script src="js/bundle.js"></script>
                    <script src="js/vendor.js"></script>
				</body>
			</html>
        );
    }
});
