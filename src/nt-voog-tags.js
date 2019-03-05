class TagsGroup {
    constructor(options) {
      this.pageData = options.pageData;
      this.recievedGroupsDOM = document.querySelectorAll('.ntjs-tags-area');
      this.groups = [];
      this.init();
    }
    
    init() {
        this.recieveGroups();
        
    }

    recieveGroups() {
        const groups = [];

        this.recievedGroupsDOM.forEach(function (item) {
            groups.push(item.getAttribute('data-group'));
        });

        this.groups = groups;
    }
  }
  