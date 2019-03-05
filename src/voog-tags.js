//import { addButton } from './templates';
import {createElement} from './create-element';

class TagsGroup {
    constructor(options) {
        this.pageData = options.pageData;
        this.recievedGroupsDOM = document.querySelectorAll('.ntjs-tags-area');
        this.groups = [];
        this.init();
    }

    init() {
        this.receiveGroups();
        this.addButtonsDOM();
    }

    receiveGroups() {
        const groups = [];

        this.recievedGroupsDOM.forEach(function (item) {
            groups.push(item.getAttribute('data-group'));
        });

        this.groups = groups;
    }

    addButtonsDOM() {
        createElement();
        for (const group of this.groups) {
            const temp = document.createElement('span');
            temp.innerHTML = 'wututu';
            document.querySelector(`.ntjs-tags-area[data-group='${group}']`).appendChild(temp);
        }
    }
}

const TestMethod = () => {
    console.log("Successful!");
};

export {
    TestMethod,
    TagsGroup,
};
