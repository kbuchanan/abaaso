(function ($) {
"use asm";

var REGEX_SECTIONS = /^(api|main|tutorials)$/,
    REGEX_URI      = /.*\/|\.html/g,
    html           = $("html")[0],
    sections       = [],
    content        = {},
    current        = "main",
    api, copy, converter, display, hash, section, tutorials;

// Setting tabs as 4 spaces
hljs.tabReplace = "    "; 
