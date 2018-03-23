// ==UserScript==
// @name         Duolingo Flag background
// @namespace    https://github.com/mpavezb/duolingo
// @version      1.0.0
// @description  Sets the website background to the flag of the current language. Based on Thomas de Roo's usercript.
// @author       Matias Pavez
// @icon         https://raw.githubusercontent.com/camiloaa/duolingotreeenhancer/master/duolingo.png
// @grant    none
// @match        *://www.duolingo.com/*
// @require https://code.jquery.com/jquery-3.3.1.min.js
// @downloadURL  https://raw.githubusercontent.com/mpavezb/duolingo/master/duolingo_background_flags.user.js
// @updateURL    https://raw.githubusercontent.com/mpavezb/duolingo/master/duolingo_background_flags.user.js
// ==/UserScript==

/*
Duo API:
===============
JSON:
https://www.duolingo.com/users/<username>
https://www.duolingo.com/comments/<id>

Javascript:
var DuoState = JSON.parse(localStorage.getItem('duo.state'));
(Only on comments section): duo.user
*/


function doFlag(){
    
    // from http://think0.deviantart.com
    var flags = {
        cs: "https://pre00.deviantart.net/1278/th/pre/i/2009/041/5/2/czech_republic_grunge_flag_by_think0.jpg", // Czech
        cy: "https://img00.deviantart.net/bf46/i/2009/011/f/f/welsh_grungy_flag_by_think0.jpg", // Welsh
        da: "https://i.imgur.com/MVKImbX.jpg", // Danish
        de: "https://i.imgur.com/KjM0RNL.jpg", // German
        dn: "https://i.imgur.com/ibQ5R2y.jpg", // Dutch
        el: "https://i.imgur.com/QdWgibY.jpg", // Greek
        en: "https://i.imgur.com/3KI66sY.jpg", // English
        eo: "https://i.imgur.com/RqTOULB.jpg", // Esperanto
        es: "https://i.imgur.com/Xdensoa.jpg", // Spanish (Spain)
        fr: "https://i.imgur.com/AUxfmNS.jpg", // French
        ga: "https://i.imgur.com/Dbi7nPR.jpg", // Irish
        he: "https://pre00.deviantart.net/c61c/th/pre/i/2009/024/c/d/israel_grungy_flag_by_think0.jpg", // Hebrew
        hu: "https://i.imgur.com/AHl1KqM.jpg", // Hungarian
        hv: "https://vignette.wikia.nocookie.net/duolingo/images/a/aa/Flag-hv.svg/revision/latest/scale-to-width-down/480?cb=20171019190718", // High Valyrian
        it: "https://i.imgur.com/qOjj10n.jpg", // Italian
        ja: "https://pre00.deviantart.net/83ab/th/pre/i/2010/331/c/4/japan_grunge_flag_by_think0-d1urafh.jpg", // Japanese
        kl: "https://img00.deviantart.net/2a19/i/2011/324/0/7/klingon_empire_grunge_flag_by_elthalen-d4gr37c.jpg", // Klingon
        ko: "https://pre00.deviantart.net/d168/th/pre/i/2009/041/d/b/south_korea_grunge_flag_by_think0.jpg", // Korean
        nb: "https://i.imgur.com/GZSVizM.jpg", // Norwegian (Bokmål)
        pl: "https://i.imgur.com/gJ0aMso.jpg", // Polish
        pt: "https://i.imgur.com/vGHMaiK.jpg", // Portuguese (Brazilian)
        ro: "https://img00.deviantart.net/9bf6/i/2009/007/0/4/romanian_grunge_flag_by_think0.jpg", // Romanian
        ru: "https://i.imgur.com/shKQqnR.jpg", // Russian
        sv: "https://i.imgur.com/VN547Ku.jpg", // Swedish
        sw: "https://cdn.pixabay.com/photo/2016/03/07/14/26/tanzania-1242282_960_720.jpg", // Swahili
        tr: "https://i.imgur.com/diItxKa.jpg", // Turkish
        uk: "https://i.imgur.com/NZQtpAa.jpg", // Ukrainian
        vi: "https://i.imgur.com/8fF8Qz3.jpg", // Vietnamese
        zs: "https://pre00.deviantart.net/50ff/th/pre/i/2009/026/e/2/people__s_republic_of_china_gf_by_think0.jpg", // Chinese
    }

    // get username
    var duoJSON = JSON.parse(localStorage.getItem('duo.state'));
    var username = duoJSON.user.username;

    // get language from user API
    $.getJSON('https://www.duolingo.com/users/' + username, function(data) {
        
        var language = data.learning_language;
        var language_full = data.learning_language_string;

        if (language in flags) {
            console.log('[Userscript - Duolingo Flag Background] Setting background for language "' + language_full + '".');
            $("body").css("background", "url(" + flags[language] + ")");
            $("body").css("background-size", "100%");
            $("body").css("background-repeat", "no-repeat");
            $("body").css("background-attachment", "fixed");

            // footer adjustments
            $(".nav-footer").css("text-shadow", "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
            $(".nav-footer a").css("color", "white");
        } else {
            // defaults to none
            console.log('[Userscript - Duolingo Flag Background] Setting background to empty');
            $("body").css("background", "");
        }

        console.log('[Userscript - Duolingo Flag Background] Done.');
    });
}

function inject(f) { //Inject the script into the document
    var script;
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = f.toString();
    document.head.appendChild(script);
}

// inject JS code
console.log('[Userscript - Duolingo Flag Background] Injecting code ...');
inject(doFlag);

$(document).ready(function() {
  doFlag();
});

// and apply!
window.setInterval(function(){
  doFlag();
}, 5000);
