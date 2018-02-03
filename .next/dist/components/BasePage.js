'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _helpers = require('../components/helpers');

var _about = require('../pages/about');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/theo/Sites/lindekaer/components/BasePage.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0px, 0px);\n  border-bottom: none;\n\n  &:hover {\n    transform: translate(0px, -3px);\n  }\n'], ['\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0px, 0px);\n  border-bottom: none;\n\n  &:hover {\n    transform: translate(0px, -3px);\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 860px;\n  margin: 0px auto;\n  padding: 0 2.8rem;\n  background-color: white;\n\n  ', ';\n'], ['\n  max-width: 860px;\n  margin: 0px auto;\n  padding: 0 2.8rem;\n  background-color: white;\n\n  ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    padding: 0 1.5rem;\n  '], ['\n    padding: 0 1.5rem;\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3rem 0 2rem 0;\n\n  ', ' a {\n    border: 0px;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 2.4rem;\n    font-weight: 900;\n    margin: 0px;\n    ', ';\n  }\n\n  ul {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n\n  li {\n    display: inline-block;\n    padding-right: ', 'px;\n  }\n\n  li:last-child {\n    padding-right: 0px;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3rem 0 2rem 0;\n\n  ', ' a {\n    border: 0px;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 2.4rem;\n    font-weight: 900;\n    margin: 0px;\n    ', ';\n  }\n\n  ul {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n\n  li {\n    display: inline-block;\n    padding-right: ', 'px;\n  }\n\n  li:last-child {\n    padding-right: 0px;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    flex-direction: column;\n  '], ['\n    flex-direction: column;\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      margin-bottom: ', 'px;\n    '], ['\n      margin-bottom: ', 'px;\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 6rem 0 4rem 0;\n  text-align: center;\n\n  p {\n    font-size: 0.8rem;\n    margin: 0rem;\n  }\n'], ['\n  padding: 6rem 0 4rem 0;\n  text-align: center;\n\n  p {\n    font-size: 0.8rem;\n    margin: 0rem;\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0.3rem;\n\n  img {\n    margin: 0px ', 'px;\n    height: ', 'px;\n    width: ', 'px;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  margin-bottom: 0.3rem;\n\n  img {\n    margin: 0px ', 'px;\n    height: ', 'px;\n    width: ', 'px;\n  }\n']);
/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------------------
|
| Page
|
-----------------------------------------------------------------------------------
*/

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Lindekaer'))), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'About'))))), children, _react2.default.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(IconRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(Icon, { src: '/static/icons/github.svg', alt: 'Github', href: 'https://github.com/lindekaer', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement(Icon, {
    src: '/static/icons/twitter.svg',
    alt: 'Twitter',
    href: 'https://twitter.com/lindekaer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement(Icon, {
    src: '/static/icons/instagram.svg',
    alt: 'Instagram',
    href: 'https://instagram.com/lindekaer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), _react2.default.createElement(Icon, {
    src: '/static/icons/linkedin.svg',
    alt: 'LinkedIn',
    href: 'https://linkedin.com/in/lindekaer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement(Icon, {
    src: '/static/icons/telegram.svg',
    alt: 'telegram',
    href: 'https://telegram.me/lindekaer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, '\xA9 ', new Date().getFullYear(), ' - Theodor Lindekaer'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('a', { href: 'mailto:theodor.lindekaer@gmail.com', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'Email me')))));
};

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

var IconLink = function IconLink(props) {
  var src = props.src,
      alt = props.alt,
      href = props.href;

  return _react2.default.createElement('a', (0, _extends3.default)({ href: href, target: '_blank' }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }), _react2.default.createElement('img', { src: src, alt: alt, __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }));
};

var Icon = (0, _styledComponents2.default)(IconLink)(_templateObject);

var Page = _styledComponents2.default.div(_templateObject2, (0, _helpers.mobile)(_templateObject3));

var Header = _styledComponents2.default.div(_templateObject4, (0, _helpers.mobile)(_templateObject5), (0, _helpers.mobile)(_templateObject6, _helpers.unit), 3 * _helpers.unit);

var Footer = _styledComponents2.default.div(_templateObject7);

var IconRow = _styledComponents2.default.div(_templateObject8, _helpers.unit, 3 * _helpers.unit, 3 * _helpers.unit);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFzZVBhZ2UuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiSGVhZCIsIkxpbmsiLCJ1bml0IiwibW9iaWxlIiwiYWJvdXQiLCJjaGlsZHJlbiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkljb25MaW5rIiwic3JjIiwicHJvcHMiLCJhbHQiLCJocmVmIiwiSWNvbiIsIlBhZ2UiLCJkaXYiLCJIZWFkZXIiLCJGb290ZXIiLCJJY29uUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FBWmxCOzs7Ozs7OztBQWNBLEFBUUE7Ozs7Ozs7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0MsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhOLEFBQ0UsQUFDRSxBQUNFLEFBR0osZ0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVZWLEFBQ0UsQUFNRSxBQUNFLEFBQ0UsQUFDRSxBQUtQLGNBZkgsQUFnQkUsMEJBQUMsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsbUNBQ0UsQUFBQyxRQUFLLEtBQU4sQUFBVSw0QkFBMkIsS0FBckMsQUFBeUMsVUFBUyxNQUFsRCxBQUF1RDtnQkFBdkQ7a0JBREYsQUFDRSxBQUNBO0FBREE7b0NBQ0EsQUFBQztTQUFELEFBQ00sQUFDSjtTQUZGLEFBRU0sQUFDSjtVQUhGLEFBR087O2dCQUhQO2tCQUZGLEFBRUUsQUFLQTtBQUxBO0FBQ0Usb0NBSUYsQUFBQztTQUFELEFBQ00sQUFDSjtTQUZGLEFBRU0sQUFDSjtVQUhGLEFBR087O2dCQUhQO2tCQVBGLEFBT0UsQUFLQTtBQUxBO0FBQ0Usb0NBSUYsQUFBQztTQUFELEFBQ00sQUFDSjtTQUZGLEFBRU0sQUFDSjtVQUhGLEFBR087O2dCQUhQO2tCQVpGLEFBWUUsQUFLQTtBQUxBO0FBQ0Usb0NBSUYsQUFBQztTQUFELEFBQ00sQUFDSjtTQUZGLEFBRU0sQUFDSjtVQUhGLEFBR087O2dCQUhQO2tCQWxCSixBQUNFLEFBaUJFLEFBT0Y7QUFQRTtBQUNFLHVCQU1KLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUFNLGFBQUEsQUFBSSxPQUFWLEFBQU0sQUFBVyxlQXpCbkIsQUF5QkUsQUFDQSx5Q0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFRLHNDQUFxQyxRQUE3QyxBQUFvRDtnQkFBcEQ7a0JBQUE7QUFBQTtLQTlDSyxBQUNiLEFBRUUsQUFnQkUsQUEwQkUsQUFDRTtBQTlDVjs7QUF1REE7Ozs7Ozs7O0FBUUEsSUFBTSxXQUFXLFNBQVgsQUFBVyxnQkFBUztNQUFBLEFBQ2hCLE1BRGdCLEFBQ0csTUFESCxBQUNoQjtNQURnQixBQUNYLE1BRFcsQUFDRyxNQURILEFBQ1g7TUFEVyxBQUNOLE9BRE0sQUFDRyxNQURILEFBQ04sQUFDbEI7O3lCQUNFLGNBQUEsOEJBQUcsTUFBSCxBQUFTLE1BQU0sUUFBZixBQUFzQixZQUF0QixBQUFtQzs7Z0JBQW5DO2tCQUFBLEFBQ0U7QUFERjtBQUFBLElBQUEseUNBQ08sS0FBTCxBQUFVLEtBQUssS0FBZixBQUFvQjtnQkFBcEI7a0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISzs7QUFKTjs7QUFTQSxJQUFNLE9BQU8sZ0NBQVAsQUFBTyxBQUFPLFVBQXBCOztBQVVBLElBQU0sT0FBTywyQkFBUCxBQUFjLHNCQUFkLEFBTUYscUJBTko7O0FBV0EsSUFBTSxTQUFTLDJCQUFULEFBQWdCLHNCQUFoQixBQU1GLHdDQU5FLEFBaUJBLHFCQWpCQSxBQWtCaUIsa0NBbEJ2QixBQUFNLEFBNkJlLEFBQUk7O0FBYXpCLElBQU0sU0FBUywyQkFBVCxBQUFnQixJQUF0Qjs7QUFVQSxJQUFNLFVBQVUsMkJBQVYsQUFBaUIsSUFBakIsQUFNWSxpQ0FOWixBQU9RLEFBQUksbUJBUGxCLEFBQU0sQUFRTyxBQUFJIiwiZmlsZSI6IkJhc2VQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aGVvL1NpdGVzL2xpbmRla2FlciJ9