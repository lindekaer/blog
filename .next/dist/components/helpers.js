'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPath = exports.mobile = exports.unit = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @media (max-width: 600px) {\n    ', ';\n  }\n'], ['\n  @media (max-width: 600px) {\n    ', ';\n  }\n']);

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
| Utils
|
-----------------------------------------------------------------------------------
*/

var unit = exports.unit = 8;

var mobile = exports.mobile = function mobile() {
  return (0, _styledComponents.css)(_templateObject, _styledComponents.css.apply(undefined, arguments));
};

var getPath = exports.getPath = function getPath(slug, file) {
  return '/static' + slug + '/' + file;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJjc3MiLCJ1bml0IiwibW9iaWxlIiwiZ2V0UGF0aCIsInNsdWciLCJmaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLEFBQVM7Ozs7OztBQVJUOzs7Ozs7OztBQVVBLEFBUUE7Ozs7Ozs7O0FBQU8sSUFBTSxzQkFBTixBQUFhLEFBRXBCOztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLFNBQUE7U0FBQSxBQUFhLDRDQUU3Qix1Q0FGZ0I7QUFBZixBQU1QOztBQUFPLElBQU0sNEJBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxNQUFELEFBQU8sTUFBUDtxQkFBQSxBQUEwQixhQUExQixBQUFrQztBQUFsRCIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aGVvL1NpdGVzL2xpbmRla2FlciJ9