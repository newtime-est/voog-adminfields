/*
    Add this to the "elements" page to create fields formed from page or site data.
    The data has to be saved as a unsplit string with some distinctive letter/symbol between them.
    Load jquery first and then this file and then call the function out with options like shown in the example.js file.
*/

/*------------------------------------------------------------------------------------------------------*/



function GetAdminFields(options) {
    this.parentElement = '';
    this.siteData = false;
    this.dataLine = [];
    this.dataKeyName = '';
    this.savingButtonLabel = '';
    this.addingButtonLabel = '';
    this.splitString = '';
    this.init(options);
    this.manipulateInputs();
    this.dataSaving();
}


GetAdminFields.prototype.init = function(options) {
    this.parentElement = options.parentElement;
    this.siteData = options.siteData;
    this.dataLine = options.dataLine.split(options.splitString);
    this.dataKeyName = options.dataKeyName;
    this.savingButtonLabel = options.savingButtonLabel;
    this.addingButtonLabel = options.addingButtonLabel;
    this.edicyDataobject = this.setEdicyDataObject();
    this.placeSelectedToDOM();
    this.placeControlsToDOM();
};


// Init functions

GetAdminFields.prototype.placeSelectedToDOM = function() {
    var that = this;
    $(this.dataLine).each(function(i, tag) {
     $(that.parentElement).append(
      '<div class="admin-border js-admin-tag-block">'
        +'<input type="text" class="admin-field js-tag-input js-tag-title" value="'+ tag +'">'+
        '<button class="admin-remove js-remove">Eemalda</button>'
      +'</div>');
    });
};

GetAdminFields.prototype.placeControlsToDOM = function() {
    var that = this;
    $('<button class="control-button js-save">'+ this.savingButtonLabel +'</button><button class="control-button js-add">'+ this.addingButtonLabel +'</button>').insertAfter(that.parentElement);
};

// Clicks on add and remove buttons

GetAdminFields.prototype.manipulateInputs = function() {
    $('body').on('click', '.js-add', function(){
        $('.js-tag-list').append('<div class="admin-border js-admin-tag-block"><input type="text" class="admin-field js-tag-input js-tag-title"><button class="admin-remove js-remove">Eemalda</button></div>');
    }).on('click', '.js-remove', function(){
        $(this).closest('.js-admin-tag-block').remove();
    });
};

// Setting edicy data to either page or site

GetAdminFields.prototype.setEdicyDataObject = function() {
    if(this.siteData){
        return edicyData = new Edicy.CustomData({
            type: 'site'
        });
    } else {
        return edicyData = new Edicy.CustomData({
            type: 'page',
            id: pageID
        });
    }
};

// Saving into site or page

GetAdminFields.prototype.dataSaving = function() {
    var that = this;
    $('body').on('click', '.js-save', function() {
        var setTags = [];
        $(that.parentElement).find('.js-admin-tag-block').each(function(i, tag){
            var singletag = $(tag).find('.js-tag-input').val();
            setTags.push(singletag);
        });
        setTags = setTags.join(";");
        edicyData.set(that.dataKeyName, setTags);
    });
};