'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

___$insertStyle(".header__class {\n  display: flex;\n  margin-bottom: 10px;\n  gap: 12px;\n  height: 50px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid;\n  object-fit: contain;\n  margin-top: 10px;\n}\n\n.footer__class {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  background-color: #480a99;\n  color: white;\n  text-align: center;\n}");

// import Footer from "./lib/components/Footer";

const Header = (_ref) => {
  let {
    links
  } = _ref;
  return /*#__PURE__*/React__default['default'].createElement("header", {
    className: "header__class"
  }, links.map((_ref2, idx) => {
    let {
      name,
      link
    } = _ref2;
    return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, {
      key: idx,
      to: link,
      activeStyle: {
        fontWeight: "bold"
      },
      style: {
        marginTop: "10px"
      }
    }, name);
  }));
};

const Footer = props => {
  return /*#__PURE__*/React__default['default'].createElement("footer", {
    className: "footer__class"
  }, /*#__PURE__*/React__default['default'].createElement("p", null, "Copyright \xA9 Myntra Ltd."));
};

exports.Footer = Footer;
exports.Header = Header;
