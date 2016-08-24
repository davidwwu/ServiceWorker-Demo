/**
 * We put all global variables into one file for
 * easy maintenance in the future.
 * 
 * Variables with '_' prefix indicates that they are used within
 * the offline solution; variables without '_' indicates that they
 * are used externally (i.e. APEX).
 *
 * NOTE: Because service worker loads before everything else,
 * the global bariables need to be declaired in sw.js.
 **/

// main.js global variables
// Public
var FIELDS_TO_SAVE_ID = '#t_Body_content';
var HIGHLIGHT_THIS_ID = '#status';
var TIME_LAST_SAVED_ID = '#timeLastSaved';
var MODAL_DIALOG = 'local_changes_dialog';

// Private
var _NETWORK_STATUS_ID = '#networkStatus';
let _pageNumRegex = new RegExp(/f\?p=\w+:(\w+):/, '');
var _PREFIX = "P" + _pageNumRegex.exec(document.URL)[1];

// Service Worker global variables


// IndexedDB global variables
// Public

// Private
var _DB_VERSION = 1;
var _DB_NAME = 'drydockFields';
var _STORE_NAME = _PREFIX + '_drydockData';


