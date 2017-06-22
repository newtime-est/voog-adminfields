/*
   	Not a required file. An example of how to call this function out.
*/

/*------------------------------------------------------------------------------------------------------*/

var optionsObject = {
    parentElement: '.js-tag-list', // Empty element, into(and next to) other elements and fields get appended to
    siteData: false, // If site data is false, the script handles it as page data
    savingButtonLabel: 'Salvesta',
    addingButtonLabel: 'lisa Tag',
    dataLine: '{{ page.data.someKey }}',
    dataKeyName: 'randomTags', // The key of the page or site object
    pageID: '{{ page.id }}',
    splitString: ';', // A symbol or something, from what to split into an array
};

var selectedTags = new GetAdminFields(optionsObject);