webpackJsonp([27],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/magda/src/cordially/Cordially-webiste/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/magda/src/cordially/Cordially-webiste/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/magda/src/cordially/Cordially-webiste/node_modules/babel-plugin-lodash/lib/index.js","/Users/magda/src/cordially/Cordially-webiste/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/magda/src/cordially/Cordially-webiste/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/magda/src/cordially/Cordially-webiste/node_modules/babel-preset-env/lib/index.js","/Users/magda/src/cordially/Cordially-webiste/node_modules/babel-preset-stage-0/lib/index.js","/Users/magda/src/cordially/Cordially-webiste/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/category.jsx':function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r("./node_modules/react/react.js"),d=o(i),c=r("./node_modules/react-helmet/lib/Helmet.js"),u=o(c),b=r("./src/components/PostListing/PostListing.jsx"),p=o(b),f=r("./data/SiteConfig.js"),y=o(f),m=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),n(t,[{key:"render",value:function(){var e=this.props.pathContext.category,t=this.props.data.allMarkdownRemark.edges;return d.default.createElement("div",{className:"category-container"},d.default.createElement(u.default,{title:'Posts in category "'+e+'" | '+y.default.siteTitle}),d.default.createElement(p.default,{postEdges:t}))}}]),t}(d.default.Component);t.default=m;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-templates-category-jsx-43737f33e25f852268ab.js.map