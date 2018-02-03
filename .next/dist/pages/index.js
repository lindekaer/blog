'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _BasePage = require('../components/BasePage');

var _BasePage2 = _interopRequireDefault(_BasePage);

var _helpers = require('../components/helpers');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/theo/Sites/lindekaer/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 1.4rem;\n'], ['\n  margin-bottom: 1.4rem;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 0.8rem;\n'], ['\n  font-size: 0.8rem;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n  ', ' p {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-size: 0.8rem;\n    margin: 0px;\n    color: #7d7d7d;\n  }\n\n  ', ' {\n    letter-spacing: 0px;\n    text-transform: none;\n    ', ';\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  ', ' p {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-size: 0.8rem;\n    margin: 0px;\n    color: #7d7d7d;\n  }\n\n  ', ' {\n    letter-spacing: 0px;\n    text-transform: none;\n    ', ';\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)([' flex-direction: column;'], [' flex-direction: column;']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)([' order: -1;'], [' order: -1;']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  color: grey;\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n'], ['\n  text-transform: uppercase;\n  color: grey;\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 1.6rem;\n\n  a {\n    border-bottom: 1px solid transparent;\n  }\n\n  a:hover {\n    border-bottom: 1px solid #2c2c2c;\n  }\n'], ['\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 1.6rem;\n\n  a {\n    border-bottom: 1px solid transparent;\n  }\n\n  a:hover {\n    border-bottom: 1px solid #2c2c2c;\n  }\n']);
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

exports.default = function () {
  var articles = (0, _db.getAll)();
  return _react2.default.createElement(_BasePage2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, articles.map(function (_ref, idx) {
    var slug = _ref.slug,
        title = _ref.title,
        date = _ref.date,
        tags = _ref.tags;
    return _react2.default.createElement(Article, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, _react2.default.createElement(ArticleTop, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, tags.map(function (tag, idx) {
      return _react2.default.createElement(Tag, { key: idx, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, tag, idx !== tags.length - 1 && ', ');
    }))), _react2.default.createElement(ArticleTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: slug, __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, title))), _react2.default.createElement(DateText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }, (0, _format2.default)(date, 'Do [of] MMMM YYYY')));
  }));
};

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

var Article = _styledComponents2.default.div(_templateObject);

var DateText = _styledComponents2.default.p(_templateObject2);

var ArticleTop = _styledComponents2.default.div(_templateObject3, (0, _helpers.mobile)(_templateObject4), DateText, (0, _helpers.mobile)(_templateObject5));

var Tag = _styledComponents2.default.span(_templateObject6);

var ArticleTitle = _styledComponents2.default.h1(_templateObject7);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZWQiLCJIZWFkIiwiQmFzZVBhZ2UiLCJtb2JpbGUiLCJ1bml0IiwiZm9ybWF0IiwiZ2V0QWxsIiwiYXJ0aWNsZXMiLCJtYXAiLCJpZHgiLCJzbHVnIiwidGl0bGUiLCJkYXRlIiwidGFncyIsInRhZyIsImxlbmd0aCIsIkFydGljbGUiLCJkaXYiLCJEYXRlVGV4dCIsInAiLCJBcnRpY2xlVG9wIiwiVGFnIiwic3BhbiIsIkFydGljbGVUaXRsZSIsImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQVEsQUFBWTs7QUFDN0IsQUFBTzs7OztBQUNQLEFBQVMsQUFBYzs7Ozs7Ozs7Ozs7OztBQWR2Qjs7Ozs7Ozs7QUFnQkEsQUFRQTs7Ozs7Ozs7a0JBQWUsWUFBTSxBQUNuQjtNQUFNLFdBQU4sQUFBaUIsQUFDakI7eUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxXQUNHLEFBQVMsSUFBSSxnQkFBQSxBQUE4QixLQUE5QjtRQUFBLEFBQUcsWUFBSCxBQUFHO1FBQUgsQUFBUyxhQUFULEFBQVM7UUFBVCxBQUFnQixZQUFoQixBQUFnQjtRQUFoQixBQUFzQixZQUF0QixBQUFzQjsyQkFDakMsY0FBRDs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSxrQkFDRyxjQUFEOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUNHO0FBREg7QUFBQSxZQUNHLEFBQUssSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU47NkJBQ1AsY0FBRCxPQUFLLEtBQUwsQUFBVTtvQkFBVjtzQkFBQSxBQUNHO0FBREg7T0FBQSxFQUFBLEFBRUcsYUFBUSxLQUFBLEFBQUssU0FBYixBQUFzQixLQUhqQixBQUNSLEFBRThCO0FBTnRDLEFBQ0UsQUFDRSxBQUNHLEFBUUwsMEJBQUMsY0FBRDs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFxQjtrQkFBckI7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLE9BYk4sQUFXRSxBQUNFLEFBQ0UsQUFHSiwwQkFBQyxjQUFEOztrQkFBQTtvQkFBQSxBQUFXO0FBQVg7QUFBQSw2QkFBVyxBQUFPLE1BakJSLEFBQ1osQUFnQkUsQUFBVyxBQUFhO0FBbkJoQyxBQUNFLEFBQ0csQUFzQk47QUExQkQ7O0FBNEJBOzs7Ozs7OztBQVFBLElBQU0sVUFBVSwyQkFBVixBQUFpQixJQUF2Qjs7QUFJQSxJQUFNLFdBQVcsMkJBQVgsQUFBa0IsRUFBeEI7O0FBSUEsSUFBTSxhQUFhLDJCQUFiLEFBQW9CLHNCQUFwQixBQUdGLHdDQUhFLEFBV0YsVUFYRSxBQWNBLHFCQWROOztBQWtCQSxJQUFNLE1BQU0sMkJBQU4sQUFBYSxLQUFuQjs7QUFPQSxJQUFNLGVBQWUsMkJBQWYsQUFBc0IsR0FBNUIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RoZW8vU2l0ZXMvbGluZGVrYWVyIn0=