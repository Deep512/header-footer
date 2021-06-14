'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".header__class {\n  display: flex;\n  margin-bottom: 10px;\n  gap:12px;\n  height:50px;\n  margin-bottom:20px;\n  border-bottom: 1px solid;\n  object-fit:contain;\n  margin-top:10px;\n}\n\n.footer__class {\nposition: fixed;\nwidth: 100%;\nleft: 0;\nbottom: 0;\nbackground-color: rgb(72, 10, 153);\ncolor: white;\ntext-align: center;\n}\n";
styleInject(css_248z);

const Header = (_ref) => {
  let {
    links
  } = _ref;
  return /*#__PURE__*/React__default['default'].createElement("header", {
    className: "header__class"
  }, links.map(link => link.component));
};

const Footer = props => {
  return /*#__PURE__*/React__default['default'].createElement("footer", {
    className: "footer__class"
  }, /*#__PURE__*/React__default['default'].createElement("p", null, "Copyright \xA9 Myntra Ltd."));
};

exports.Footer = Footer;
exports.Header = Header;
