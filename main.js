// DDK - Automatically loads high resolution tumblr images,
//
// blah blah explain stuff here
//
// This is free and unencumbered software released into the public domain.

var Widget = require("widget").Widget;
var tabs = require("tabs");
var Request = require("request").Request;

var checkImageExists = Request({
    url: "http://bbot.org/bbot.png",
    onComplete: function (response) {
        console.log("Sent request to"); //oops how do I put a variable in a string
    }
});

exports.main = function() {

    new Widget({
        id: "sbierwagen-widget-1",
        label: "My Mozilla Widget",
        contentURL: "http://www.mozilla.org/favicon.ico",

        onClick: function(event) {
            
            // Tabs documentation: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/tabs.html

            checkImageExists.get();

        }
    });
};

