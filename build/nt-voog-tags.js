"use strict";

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
  }]);

  return TagsGroup;
}();