/*
   	Not a required file. An example of how to call this function out.
*/

/*------------------------------------------------------------------------------------------------------*/

var optionsObject = {
    parentElement: '.js-tag-list', //empty element, into(and next to) other elements and fields get appended to
    siteData: false, //if site data is false, the script handles it as page data
    savingButtonLabel: 'Salvesta',
    addingButtonLabel: 'lisa Tag',
    dataLine: pageDataThingy, //
    dataKeyName: 'randomTags', // The key of the page or site object
};

var selectedTags = new GetAdminFields(optionsObject);