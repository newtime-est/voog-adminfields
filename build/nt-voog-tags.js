"use strict";

var _createElement = require("./create-element.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TagsGroup =
/*#__PURE__*/
function () {
  function TagsGroup(options) {
    _classCallCheck(this, TagsGroup);

    this.pageData = options.pageData;
    this.recievedGroupsDOM = document.querySelectorAll('.ntjs-tags-area');
    this.groups = [];
    this.init();
  }

  _createClass(TagsGroup, [{
    key: "init",
    value: function init() {
      this.recieveGroups();
      this.addButtonsDOM();
    }
  }, {
    key: "recieveGroups",
    value: function recieveGroups() {
      var groups = [];
      this.recievedGroupsDOM.forEach(function (item) {
        groups.push(item.getAttribute('data-group'));
      });
      this.groups = groups;
    }
  }, {
    key: "addButtonsDOM",
    value: function addButtonsDOM() {
      (0, _createElement.createElement)();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;
          var temp = document.createElement('span');
          temp.innerHTML = 'wututu';
          document.querySelector(".ntjs-tags-area[data-group='".concat(group, "']")).appendChild(temp);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return TagsGroup;
}();