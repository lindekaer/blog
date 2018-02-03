'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGrid = exports.Image = exports.SubHeading = exports.Link = exports.Item = exports.List = exports.SmallCode = exports.Code = exports.Paragraph = undefined;

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

var _helpers = require('./helpers');

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
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n  text-transform: uppercase;\n  font-weight: 900;\n  margin-top: 2.5rem;\n'], ['\n  text-transform: uppercase;\n  font-weight: 900;\n  margin-top: 2.5rem;\n']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  font-size: 0.8rem;\n  margin-top: 0.2rem;\n'], ['\n  text-align: center;\n  font-size: 0.8rem;\n  margin-top: 0.2rem;\n']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  margin-bottom: 1.5rem;\n'], ['\n  width: 100%;\n  margin-bottom: 1.5rem;\n']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 0px -', 'px 1.5rem;\n\n  ', ' {\n    flex: 1;\n    width: calc(50% - ', 'px);\n    margin: ', 'px;\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 0px -', 'px 1.5rem;\n\n  ', ' {\n    flex: 1;\n    width: calc(50% - ', 'px);\n    margin: ', 'px;\n  }\n']);
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
      var slug = _this.props.slug.slice(1);
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
            lineNumber: 39
          }
        }, _react2.default.createElement('article', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _react2.default.createElement(ArticleHead, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _react2.default.createElement(Tags, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, tags.map(function (tag, idx) {
          return _react2.default.createElement(Tag, { key: idx, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, tag, idx !== tags.length - 1 && ', ');
        })), _react2.default.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, title), _react2.default.createElement(PublishDate, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, (0, _format2.default)(date, 'Do [of] MMMM YYYY'))), _react2.default.createElement(ArticleBody, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _this.props.children)));
      } else {
        return _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
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
      lineNumber: 141
    }
  }), children);
};

var Link = exports.Link = (0, _styledComponents2.default)(RawLink)(_templateObject2);

var SubHeading = exports.SubHeading = _styledComponents2.default.h2(_templateObject13);

var ImageLabel = _styledComponents2.default.p(_templateObject14);

var RawImage = (0, _styledComponents2.default)(function (props) {
  return _react2.default.createElement('img', (0, _extends3.default)({}, props, { src: props.src, __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    }
  }));
})(_templateObject15);

var Image = exports.Image = (0, _styledComponents2.default)(function (props) {
  return _react2.default.createElement('div', (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }), _react2.default.createElement(RawImage, { src: props.src, __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    }
  }), props.title && _react2.default.createElement(ImageLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, props.title));
})(_templateObject16);

var ImageGrid = exports.ImageGrid = (0, _styledComponents2.default)(function (props) {
  return _react2.default.createElement('div', (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }), props.images.map(function (image, idx) {
    return _react2.default.createElement(RawImage, { key: idx, src: image.src, title: image.title, __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      }
    });
  }));
})(_templateObject17, 1 * _helpers.unit, RawImage, 2 * _helpers.unit, 1 * _helpers.unit);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJnZXRCeVNsdWciLCJmb3JtYXQiLCJCYXNlUGFnZSIsInVuaXQiLCJBcnRpY2xlIiwic3RhdGUiLCJhcnRpY2xlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzbHVnIiwicHJvcHMiLCJzbGljZSIsInNldFN0YXRlIiwicmVuZGVyIiwiQm9vbGVhbiIsInRhZ3MiLCJ0aXRsZSIsImRhdGUiLCJtYXAiLCJ0YWciLCJpZHgiLCJsZW5ndGgiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQXJ0aWNsZUhlYWQiLCJkaXYiLCJBcnRpY2xlQm9keSIsIlRpdGxlIiwiaDEiLCJBdXRob3IiLCJwIiwiUHVibGlzaERhdGUiLCJUYWdzIiwiVGFnIiwic3BhbiIsIlBhcmFncmFwaCIsIkNvZGUiLCJwcmUiLCJTbWFsbENvZGUiLCJMaXN0IiwidWwiLCJJdGVtIiwibGkiLCJSYXdMaW5rIiwiaHJlZiIsIkxpbmsiLCJTdWJIZWFkaW5nIiwiaDIiLCJJbWFnZUxhYmVsIiwiUmF3SW1hZ2UiLCJzcmMiLCJJbWFnZSIsIkltYWdlR3JpZCIsImltYWdlcyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFackI7Ozs7Ozs7O0FBY0E7Ozs7Ozs7O0ksQUFRcUI7Ozs7Ozs7Ozs7Ozs7OzhNLEFBQ25CO2VBQVEsQUFDRyxBO0FBREgsQUFDTixhLEFBR0Ysb0JBQW9CLFlBQU0sQUFDeEI7VUFBTSxPQUFPLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixNQUE3QixBQUFhLEFBQXNCLEFBQ25DO1VBQU0sVUFBVSxtQkFBaEIsQUFBZ0IsQUFBVSxBQUMxQjtZ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VDtrQkFBQSxBQUNFO0FBREY7QUFBQSxJQUFBLGdDQUNFLEFBQUMsWUFBUyxLQUFLLE1BQWYsQUFBcUI7Z0JBQXJCO2tCQURGLEFBQ0UsQUFDQztBQUREO1lBQ0MsQUFBTSx5QkFBVSxjQUFEOztnQkFBQTtrQkFBQSxBQUFhO0FBQWI7QUFBQSxHQUFBLFFBSFEsQUFDMUIsQUFFa0IsQUFBbUI7QUFIMUIsQUFBUSxDQUFBLEVBQWQsQUFVUDs7QUFBTyxJQUFNLGdFQUFtQixpQkFBQTt5QkFDOUIsY0FBQSxrQ0FBQSxBQUFTOztnQkFBVDtrQkFBQSxBQUNHO0FBREg7QUFBQSxJQUFBLFFBQ0csQUFBTSxPQUFOLEFBQWEsSUFBSSxVQUFBLEFBQUMsT0FBRCxBQUFRLEtBQVI7eUNBQWdCLEFBQUMsWUFBUyxLQUFWLEFBQWUsS0FBSyxLQUFLLE1BQXpCLEFBQStCLEtBQUssT0FBTyxNQUEzQyxBQUFpRDtrQkFBakQ7b0JBQWhCLEFBQWdCO0FBQUE7S0FBQTtBQUZOLEFBQzlCLEFBQ0c7QUFGUSxBQUFZLENBQUEscUJBQVosQUFRSSxBQUFJLG1CQVJSLEFBVVQsVUFWUyxBQVlXLEFBQUksbUJBWnJCLEFBQU0sQUFhQyxBQUFJIiwiZmlsZSI6IkFydGljbGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RoZW8vU2l0ZXMvbGluZGVrYWVyIn0=