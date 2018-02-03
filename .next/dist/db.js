'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBySlug = exports.getAll = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
-----------------------------------------------------------------------------------
|
| Articles
|
-----------------------------------------------------------------------------------
*/

var articles = {
  'provider-and-hoc-pattern-with-react': {
    title: 'Prover & HOC Pattern with React',
    tags: ['Code', 'React'],
    date: new Date('2018-02-02')
  },
  'camino-de-santiago': {
    title: 'Camino de Santiago',
    tags: ['Hiking'],
    date: new Date('2016-06-05')

    /*
    -----------------------------------------------------------------------------------
    |
    | Methods
    |
    -----------------------------------------------------------------------------------
    */

  } };var getAll = exports.getAll = function getAll() {
  return (0, _keys2.default)(articles).map(function (slug) {
    return (0, _extends3.default)({}, articles[slug], { slug: slug });
  });
};

var getBySlug = exports.getBySlug = function getBySlug(slug) {
  return (0, _extends3.default)({}, articles[slug], { slug: slug });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiLmpzIl0sIm5hbWVzIjpbImFydGljbGVzIiwidGl0bGUiLCJ0YWdzIiwiZGF0ZSIsIkRhdGUiLCJnZXRBbGwiLCJtYXAiLCJzbHVnIiwiZ2V0QnlTbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQVFBLElBQU07O1dBQ21DLEFBQzlCLEFBQ1A7VUFBTSxDQUFBLEFBQUMsUUFGOEIsQUFFL0IsQUFBUyxBQUNmO1VBQU0sSUFBQSxBQUFJLEtBSkcsQUFDd0IsQUFHL0IsQUFBUyxBQUVqQjtBQUx1QyxBQUNyQyxHQUZhLEFBQ2Y7O1dBS3NCLEFBQ2IsQUFDUDtVQUFNLENBRmMsQUFFZCxBQUFDLEFBQ1A7VUFBTSxJQUFBLEFBQUksS0FIVSxBQUdkLEFBQVMsQUFJbkI7O0FBYkEsQUFBaUIsQUFxQmpCOzs7Ozs7OztBQWZ3QixBQUNwQixVQWNTLDBCQUFTLFNBQVQsQUFBUyxTQUFBOzZCQUFNLEFBQVksVUFBWixBQUFzQixJQUFJLGdCQUFBO3NDQUFjLFNBQWQsQUFBYyxBQUFTLFNBQU8sTUFBOUI7QUFBaEMsQUFBTSxHQUFBO0FBQXJCLEFBRVAsQ0FGTzs7QUFFQSxJQUFNLGdDQUFZLFNBQVosQUFBWSxnQkFBQTtvQ0FBYyxTQUFkLEFBQWMsQUFBUyxTQUFPLE1BQTlCO0FBQWxCIiwiZmlsZSI6ImRiLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aGVvL1NpdGVzL2xpbmRla2FlciJ9