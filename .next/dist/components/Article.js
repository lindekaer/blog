'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubHeading = exports.Link = exports.Item = exports.List = exports.SmallCode = exports.Code = exports.Paragraph = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _db = require('../db.js');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _BasePage = require('./BasePage');

var _BasePage2 = _interopRequireDefault(_BasePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/theo/Sites/lindekaer/components/Article.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  margin: 1.5rem 0 2rem 0;\n'], ['\n  text-align: center;\n  margin: 1.5rem 0 2rem 0;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 3.4rem;\n  font-family: Times, Georgia, serif;\n  border-bottom: 1px solid transparent;\n  line-height: 3.5rem;\n'], ['\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 3.4rem;\n  font-family: Times, Georgia, serif;\n  border-bottom: 1px solid transparent;\n  line-height: 3.5rem;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: grey;\n  margin-bottom: 0px;\n'], ['\n  color: grey;\n  margin-bottom: 0px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 0.8rem;\n  margin: 0px;\n'], ['\n  font-size: 0.8rem;\n  margin: 0px;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0px;\n'], ['\n  margin: 0px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  color: grey;\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n'], ['\n  text-transform: uppercase;\n  color: grey;\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 1.5rem;\n  line-height: 1.6rem;\n'], ['\n  margin-bottom: 1.5rem;\n  line-height: 1.6rem;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: Consolas, monaco, monospace;\n  background: aliceblue;\n  font-size: 0.8rem;\n  padding: 1rem 2.8rem;\n  line-height: 1.4rem;\n  margin: 0rem -2.8rem;\n  margin-bottom: 1.5rem;\n'], ['\n  font-family: Consolas, monaco, monospace;\n  background: aliceblue;\n  font-size: 0.8rem;\n  padding: 1rem 2.8rem;\n  line-height: 1.4rem;\n  margin: 0rem -2.8rem;\n  margin-bottom: 1.5rem;\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: Consolas, monaco, monospace;\n  background: aliceblue;\n  font-size: 0.8rem;\n  display: inline;\n  padding: 4px 6px;\n'], ['\n  font-family: Consolas, monaco, monospace;\n  background: aliceblue;\n  font-size: 0.8rem;\n  display: inline;\n  padding: 4px 6px;\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 1.6rem;\n'], ['\n  line-height: 1.6rem;\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 0.5rem;\n'], ['\n  margin-bottom: 0.5rem;\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: Times, Georgia, serif;\n  margin-top: 2rem;\n'], ['\n  font-family: Times, Georgia, serif;\n  margin-top: 2rem;\n']);
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

var Article = function (_React$Component) {
  (0, _inherits3.default)(Article, _React$Component);

  function Article() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Article);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      article: null
    }, _this.componentDidMount = function () {
      var slug = window.location.pathname.slice(1);
      var article = (0, _db.getBySlug)(slug);
      _this.setState({ article: article });
    }, _this.render = function () {
      var article = _this.state.article;

      if (Boolean(article)) {
        var tags = article.tags,
            title = article.title,
            date = article.date;

        return _react2.default.createElement(_BasePage2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement('article', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement(ArticleHead, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _react2.default.createElement(Tags, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, tags.map(function (tag, idx) {
          return _react2.default.createElement(Tag, { key: idx, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, tag, idx !== tags.length - 1 && ', ');
        })), _react2.default.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, title), _react2.default.createElement(PublishDate, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, (0, _format2.default)(date, 'Do [of] MMMM YYYY'))), _react2.default.createElement(ArticleBody, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _this.props.children)));
      } else {
        return _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, 'Loading...');
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Article;
}(_react2.default.Component);

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

exports.default = Article;

var ArticleHead = _styledComponents2.default.div(_templateObject);

var ArticleBody = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.h1(_templateObject3);

var Author = _styledComponents2.default.p(_templateObject4);
var PublishDate = _styledComponents2.default.p(_templateObject5);

var Tags = _styledComponents2.default.p(_templateObject6);

var Tag = _styledComponents2.default.span(_templateObject7);

var Paragraph = exports.Paragraph = _styledComponents2.default.p(_templateObject8);

var Code = exports.Code = _styledComponents2.default.pre(_templateObject9);

var SmallCode = exports.SmallCode = _styledComponents2.default.pre(_templateObject10);

var List = exports.List = _styledComponents2.default.ul(_templateObject11);

var Item = exports.Item = _styledComponents2.default.li(_templateObject12);

var RawLink = function RawLink(props) {
  var href = props.href,
      children = props.children;

  return _react2.default.createElement('a', (0, _extends3.default)({ href: href }, props, { target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }), children);
};

var Link = exports.Link = (0, _styledComponents2.default)(RawLink)(_templateObject2);

var SubHeading = exports.SubHeading = _styledComponents2.default.h2(_templateObject13);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJnZXRCeVNsdWciLCJmb3JtYXQiLCJCYXNlUGFnZSIsIkFydGljbGUiLCJzdGF0ZSIsImFydGljbGUiLCJjb21wb25lbnREaWRNb3VudCIsInNsdWciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2xpY2UiLCJzZXRTdGF0ZSIsInJlbmRlciIsIkJvb2xlYW4iLCJ0YWdzIiwidGl0bGUiLCJkYXRlIiwibWFwIiwidGFnIiwiaWR4IiwibGVuZ3RoIiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQXJ0aWNsZUhlYWQiLCJkaXYiLCJBcnRpY2xlQm9keSIsIlRpdGxlIiwiaDEiLCJBdXRob3IiLCJwIiwiUHVibGlzaERhdGUiLCJUYWdzIiwiVGFnIiwic3BhbiIsIlBhcmFncmFwaCIsIkNvZGUiLCJwcmUiLCJTbWFsbENvZGUiLCJMaXN0IiwidWwiLCJJdGVtIiwibGkiLCJSYXdMaW5rIiwiaHJlZiIsIkxpbmsiLCJTdWJIZWFkaW5nIiwiaDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBaUI7O0FBQzFCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhyQjs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7SSxBQVFxQjs7Ozs7Ozs7Ozs7Ozs7OE0sQUFDbkI7ZUFBUSxBQUNHLEE7QUFESCxBQUNOLGFBR0YsQSxvQkFBb0IsWUFBTSxBQUN4QjtVQUFNLE9BQU8sT0FBQSxBQUFPLFNBQVAsQUFBZ0IsU0FBaEIsQUFBeUIsTUFBdEMsQUFBYSxBQUErQixBQUM1QztVQUFNLFVBQVUsbUJBQWhCLEFBQWdCLEFBQVUsQUFDMUI7WUFBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQ2Y7QSxhLEFBRUQsU0FBUyxZQUFNO1VBQUEsQUFDTCxVQUFZLE1BRFAsQUFDWSxNQURaLEFBQ0wsQUFDUjs7VUFBSSxRQUFKLEFBQUksQUFBUSxVQUFVO1lBQUEsQUFDWixPQURZLEFBQ1UsUUFEVixBQUNaO1lBRFksQUFDTixRQURNLEFBQ1UsUUFEVixBQUNOO1lBRE0sQUFDQyxPQURELEFBQ1UsUUFEVixBQUNDLEFBQ3JCOzsrQkFDRSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLGdCQUNHLEFBQUssSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU47aUNBQ1AsY0FBRCxPQUFLLEtBQUwsQUFBVTt3QkFBVjswQkFBQSxBQUNHO0FBREg7V0FBQSxFQUFBLEFBRUcsYUFBUSxLQUFBLEFBQUssU0FBYixBQUFzQixLQUhqQixBQUNSLEFBRThCO0FBTHBDLEFBQ0UsQUFDRyxBQU9ILDZCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQVE7QUFBUjtBQUFBLFdBVEYsQUFTRSxBQUNBLHdCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQWM7QUFBZDtBQUFBLGlDQUFjLEFBQU8sTUFYekIsQUFDRSxBQVVFLEFBQWMsQUFBYSxBQUU3Qix3Q0FBQyxjQUFEOztzQkFBQTt3QkFBQSxBQUFjO0FBQWQ7QUFBQSxpQkFBYyxBQUFLLE1BZnpCLEFBQ0UsQUFDRSxBQWFFLEFBQXlCLEFBSWhDO0FBckJELGFBcUJPLEFBQ0w7K0JBQU8sY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBUCxBQUFPLEFBQ1I7QUFDRjtBOzs7O0VBckNrQyxnQkFBTSxBOztBQXdDM0M7Ozs7Ozs7O2tCQXhDcUIsQTs7QUFnRHJCLElBQU0sY0FBYywyQkFBZCxBQUFxQixJQUEzQjs7QUFLQSxJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0I7O0FBRUEsSUFBTSxRQUFRLDJCQUFSLEFBQWUsR0FBckI7O0FBU0EsSUFBTSxTQUFTLDJCQUFULEFBQWdCLEVBQXRCO0FBSUEsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLEVBQTNCOztBQUtBLElBQU0sT0FBTywyQkFBUCxBQUFjLEVBQXBCOztBQUlBLElBQU0sTUFBTSwyQkFBTixBQUFhLEtBQW5CLEFBT0E7O0FBQU8sSUFBTSxnQ0FBWSwyQkFBWixBQUFtQixFQUF6QixBQUtQOztBQUFPLElBQU0sc0JBQU8sMkJBQVAsQUFBYyxJQUFwQixBQVVQOztBQUFPLElBQU0sZ0NBQVksMkJBQVosQUFBbUIsSUFBekIsQUFRUDs7QUFBTyxJQUFNLHNCQUFPLDJCQUFQLEFBQWMsR0FBcEIsQUFJUDs7QUFBTyxJQUFNLHNCQUFPLDJCQUFQLEFBQWMsR0FBcEI7O0FBSVAsSUFBTSxVQUFVLFNBQVYsQUFBVSxlQUFTO01BQUEsQUFDZixPQURlLEFBQ0ksTUFESixBQUNmO01BRGUsQUFDVCxXQURTLEFBQ0ksTUFESixBQUNULEFBQ2Q7O3lCQUNFLGNBQUEsOEJBQUcsTUFBSCxBQUFTLFFBQVQsQUFBbUIsU0FBTyxRQUExQixBQUFpQztnQkFBakM7a0JBQUEsQUFDRztBQURIO0lBQUEsRUFERixBQUNFLEFBSUg7QUFQRCxBQVNBOztBQUFPLElBQU0sc0JBQU8sZ0NBQVAsQUFBTyxBQUFPLFNBQXBCLEFBRVA7O0FBQU8sSUFBTSxrQ0FBYSwyQkFBYixBQUFvQixHQUExQiIsImZpbGUiOiJBcnRpY2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aGVvL1NpdGVzL2xpbmRla2FlciJ9