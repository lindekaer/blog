'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BasePage = require('../components/BasePage');

var _BasePage2 = _interopRequireDefault(_BasePage);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('../components/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/theo/Sites/lindekaer/pages/about.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 3rem;\n  padding-bottom: 2px;\n  border-bottom: 1px solid #2c2c2c;\n  text-transform: uppercase;\n  font-weight: 900;\n'], ['\n  margin-top: 3rem;\n  padding-bottom: 2px;\n  border-bottom: 1px solid #2c2c2c;\n  text-transform: uppercase;\n  font-weight: 900;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: center;\n  ', ' img {\n    max-width: 50%;\n    ', ';\n  }\n\n  p {\n    padding: 0px ', 'px;\n    ', ' margin: 0px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  ', ' img {\n    max-width: 50%;\n    ', ';\n  }\n\n  p {\n    padding: 0px ', 'px;\n    ', ' margin: 0px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)([' flex-direction: column;'], [' flex-direction: column;']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)([' \n      max-width: 100%;\n      margin-bottom: 1rem;\n    '], [' \n      max-width: 100%;\n      margin-bottom: 1rem;\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)([' padding: 0px;'], [' padding: 0px;']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: ', 'px;\n'], ['\n  margin-top: ', 'px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n  ', ' p {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-size: 0.8rem;\n    margin: 0px;\n    color: #7d7d7d;\n  }\n\n  p:last-child {\n    letter-spacing: 0px;\n    ', ';\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  ', ' p {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-size: 0.8rem;\n    margin: 0px;\n    color: #7d7d7d;\n  }\n\n  p:last-child {\n    letter-spacing: 0px;\n    ', ';\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)([' order: -1;'], [' order: -1;']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: bold;\n  margin: 0px;\n  margin-bottom: 0.5rem;\n'], ['\n  font-weight: bold;\n  margin: 0px;\n  margin-bottom: 0.5rem;\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  letter-spacing: 2px;\n'], ['\n  letter-spacing: 2px;\n']);
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
  return _react2.default.createElement(_BasePage2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(TopSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('img', { src: '/static/misc/about_me.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Hi, I\'m ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Theodor'), '! I currently live in Copenhagen working on creating amazing health software with ', _react2.default.createElement('a', { href: 'https://lenus.io', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Lenus eHealth'), '. I love hiking and have most recently thruhiked the Pacific Crest Trail. What gets me out of the bed in the morning is the opportunity to learn something new and have a great time with the people I care about.')), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Experience'), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'Lenus eHealth'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(Spaced, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'present'))), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, 'Fullstack Developer & Partner'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'In October 2017 I have joined ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Lenus eHealth'), ' as partner and fullstack developer. We are trying to create an online platform enabling health professionals to provide a better service to the end users and maintain quality at scale. We are currently operating mainly on the Danish market, but international expansion is our primary goal. You can read more about our mission ', _react2.default.createElement('a', { href: 'https://lenus.io', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, 'here'), ' \uD83D\uDE80.')), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, 'Wakie Wakie'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, '2016 - 2017')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'Backend Developer'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, 'Subsequently I started my own consulting company offering programming services. This led to employment in the startup ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'WakieWakie'), '. I worked as the lead backend developer building the infrastructure from scratch in Node. In addition to writing Node, I managed the AWS setup revolving around DynamoDB, Lambda and S3.')), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'Shipbeat'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, '2015 - 2016')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, 'Customer Success Manager'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'After more than a year of web development I was headhunted by the logistics technology startup ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, 'Shipbeat'), '. I decided to join them as Customer Success Manager - a positon spanning from writing technical documentation and helping customers to doing frontend development for both internal and external tools. Unfortunately Shipbeat went bankrupt in the summer of 2016 \uD83D\uDCB8.')), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, 'Dwarf'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, '2014 - 2015')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, 'Frontend Developer'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, 'By coincidence I saw a job poster for a student frontend developer position in a web development company called ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, 'Dwarf'), '. This marked the beginning of a rigorous, tough and amazingly rewarding time of getting up to speed with web technology alongside my business studies. I got the position and helped create website for some of the major Danish brands \u2728. I worked with Bootstrap, Backbone, Angular and Grunt.')), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, 'IBM'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, '2012 - 2014')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, 'Junior Analyst'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, 'My first job in the industry was at ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, 'IBM'), '. I conducted data analysis for the sales department and monitored KPIs. My actual work revolved around Excel (and other MS tools) together with some VBA sprinkled here and there. I returned to IBM once returning from my semester abroad in S\xE3o Paulo, Brazil \uD83C\uDDE7\uD83C\uDDF7.')), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, 'Education'), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, 'IT University of Copenhagen'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, '2014 - 2016')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, 'MSc. Software Development'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, 'Studying at the IT University of Copenhagen gave me a more theoretic understanding of computer science - this was a contrast to my previous programming experience being based solely on trial and error. Starting from discrete mathematics and Java 101 we worked our way up through algorithms to intelligent systems programming and system Scalability. I graduated with a thesis on ', _react2.default.createElement('em', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, 'WebRTC in the context of P2P'), ' with an emphasis on the SKIP+ topology.')), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, 'Copenhagen Business School'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, '2011 - 2014')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, 'BSc. International Business'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, 'My studies in international business provided a very broad skill set of common business skills. We were taught basic economics, corporate finance, stastics, organizational studies, accounting and introductory courses to several other fields. I graduated with a thesis on the ', _react2.default.createElement('em', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    }
  }, 'Business Value of the Internet of Things'), '.')), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, 'Projects'), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, 'Hikebeat'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }, '2014 - 2017')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, 'Fullstack Developer & Partner'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, 'I love to travel and especially sharing the amazing moments I experience. Prior to walking the ', _react2.default.createElement('a', { href: 'http://lindekaer.com/camino-de-santiago.html', __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, 'Camino de Santiago'), ' I started tinkering with a GSM modem and a SIM-card to make it possible for me to send SMS with geolocation back home while traveling. This date should then be displayed on a web based map for all my friends and family to follow. This led to me developing ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    }
  }, 'Hikebeat'), ' ', 'together with my friends Niklas, Jesper and Dimitar. The project culminated in releasing the Hikebeat Web Dashboard and IOS app. The project has been discountinued and is now open source.')), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    }
  }, 'Pacific Crest Trail'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, '2017')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, 'Long Distance Hiker'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, 'I have a passion for hiking. For many years, hiking the ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, 'Pacific Crest Trail'), ' ', 'in one stretch has been a dream of mine. I undertook this project and begun planning throughout 2016. In April 2017 I started the 2,500 mile journey from the Mexican border to the Canadian border. I succeded and finished after more than five months of continous hiking. An experience of a lifetime \uD83C\uDDF2\uD83C\uDDFD \uD83C\uDDFA\uD83C\uDDF8 \uD83C\uDDE8\uD83C\uDDE6!')), _react2.default.createElement(ResumeSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, _react2.default.createElement(ResumeSectionTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    }
  }, 'The Swedish Classic'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, '2016 - 2017')), _react2.default.createElement(ResumeTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    }
  }, 'Runner, Swimmer, Cyclist and Skier'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, 'Throughout 2016 and 2017 I completed the ', _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, 'Swedish Classic Challenge'), ' by finishing four specific Swedish sport events within 12 months. The events in challenge are V\xE4tternrundan (300 km biking), Vansbrosimningen (3 km open water swimming), Liding\xF6loppet (30 km trail running) and Vasaloppet (90 km cross contry skiing). Amazed by the Swedes\' ability to host huge sport events \uD83C\uDDF8\uD83C\uDDEA.')));
};

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

var Title = _styledComponents2.default.h1(_templateObject);

var TopSection = _styledComponents2.default.div(_templateObject2, (0, _helpers.mobile)(_templateObject3), (0, _helpers.mobile)(_templateObject4), 3 * _helpers.unit, (0, _helpers.mobile)(_templateObject5));

var ResumeSection = _styledComponents2.default.div(_templateObject6, 3 * _helpers.unit);

var ResumeSectionTop = _styledComponents2.default.div(_templateObject7, (0, _helpers.mobile)(_templateObject3), (0, _helpers.mobile)(_templateObject8));

var ResumeTitle = _styledComponents2.default.h3(_templateObject9);

var Spaced = _styledComponents2.default.span(_templateObject10);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIkJhc2VQYWdlIiwic3R5bGVkIiwidW5pdCIsIm1vYmlsZSIsIlRpdGxlIiwiaDEiLCJUb3BTZWN0aW9uIiwiZGl2IiwiUmVzdW1lU2VjdGlvbiIsIlJlc3VtZVNlY3Rpb25Ub3AiLCJSZXN1bWVUaXRsZSIsImgzIiwiU3BhY2VkIiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRQSxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FBVjdCOzs7Ozs7OztBQVlBLEFBUUE7Ozs7Ozs7O2tCQUFlLFlBQUE7eUJBQ2IsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSw0Q0FDTyxLQUFMLEFBQVM7Z0JBQVQ7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQ1UsNkJBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRFYsQUFDVSxZQUNhLHNHQUFBLGNBQUEsT0FBRyxNQUFILEFBQVE7Z0JBQVI7a0JBQUE7QUFBQTtLQUZ2QixBQUV1QixrQkFMM0IsQUFDRSxBQUVFLEFBU0Ysd09BQUMsY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBWkYsQUFZRSxBQUVBLCtCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxrQ0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FKTixBQUNFLEFBRUUsQUFDRSxBQUdKLDhCQUFDLGNBQUQ7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S0FMckUsQUFLcUUsQUFBMEIsYUFML0YsS0FqSUosQUEySEUsQUFNRSxBQVlGLGlOQUFDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSx3Q0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FISixBQUNFLEFBRUUsQUFFRiwwQkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FMRixBQUtFLEFBQ0Esd0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQzBELDRFQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUQxRCxBQUMwRCxBQUFxQyx3QkFEL0YsS0FuSkosQUE2SUUsQUFNRSxBQVNGLDJZQUFDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSx3Q0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FISixBQUNFLEFBRUUsQUFFRixpQ0FBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FMRixBQUtFLEFBQ0EsdURBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQzJDLDZEQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUQzQyxBQUMyQyw4QkFwS2xDLEFBQ2IsQUE0SkUsQUFNRTtBQW5LTjs7QUE4S0E7Ozs7Ozs7O0FBUUEsSUFBTSxRQUFRLDJCQUFSLEFBQWUsR0FBckI7O0FBUUEsSUFBTSxhQUFhLDJCQUFiLEFBQW9CLHNCQUFwQixBQUdGLHdDQUhFLEFBS0Esd0NBTEEsQUFZYSxBQUFJLG1CQVpqQixBQWFBLHFCQWJOOztBQWlCQSxJQUFNLGdCQUFnQiwyQkFBaEIsQUFBdUIsc0JBQTdCLEFBQU0sQUFDVSxBQUFJOztBQUdwQixJQUFNLG1CQUFtQiwyQkFBbkIsQUFBMEIsc0JBQTFCLEFBR0Ysd0NBSEUsQUFhQSxxQkFiTjs7QUFpQkEsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLEdBQTNCOztBQU1BLElBQU0sU0FBUywyQkFBVCxBQUFnQixLQUF0QiIsImZpbGUiOiJhYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGhlby9TaXRlcy9saW5kZWthZXIifQ==