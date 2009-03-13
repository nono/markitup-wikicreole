// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Wikicreole by Bruno Michel
// http://github.com/nono/markitup-wikicreole/tree/master
// ----------------------------------------------------------------------------
// Wikicreole
// http://www.wikicreole.org/
// -------------------------------------------------------------------
var mySettings = {
  onShiftEnter: {keepDefault: false, replaceWith: '\\\\'},
  onCtrlEnter: {keepDefault: false, replaceWith: '\n\n'},
  markupSet: [
    {name:'Heading 1', key:'1', openWith:'==', closeWith:'==', placeHolder:'Your title here...' },
    {name:'Heading 2', key:'2', openWith:'===', closeWith:'===', placeHolder:'Your title here...' },
    {name:'Heading 3', key:'3', openWith:'====', closeWith:'====', placeHolder:'Your title here...' },
    {name:'Heading 4', key:'4', openWith:'=====', closeWith:'=====', placeHolder:'Your title here...' },
    {separator:'---------------' },
    {name:'Bold', key:'B', openWith:'**', closeWith:'**', className:'bold', placeHolder:'Your text here...'},
    {name:'Italic', key:'I', openWith:'//', closeWith:'//', className:'italic', placeHolder:'Your text here...'},
    {separator:'---------------' },
    {name:'Bulleted list', openWith:'* ', className:'list-bullet'},
    {name:'Numeric list', openWith:'# ', className:'list-numeric'},
    {separator:'---------------' },
    {name:'Picture', key:"P", replaceWith:'{{[![Url:!:http://]!]|[![Alternative text]!]}}'},
    {name:'Link', key:"L", openWith:"[", closeWith:'|[![Url:!:http://]!]|[![Title]!]]', placeHolder:'Your text to link here...' },
    {separator:'---------------' },
    {name:'Quotes', openWith:'> ', className:'quotes'},
    {name:'Code block', openWith:'{{{', closeWith:'}}}', className:'code'},
  ]
};

