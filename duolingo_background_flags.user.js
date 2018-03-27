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

function setupFlagScript(){
    
    var LOG_NS = '[Userscript - Duolingo Flag Background] ';
    var footer_flag = 'script_duo_flag_footer';

    // from http://think0.deviantart.com
    var flags = {
        cs: "https://pre00.deviantart.net/1278/th/pre/i/2009/041/5/2/czech_republic_grunge_flag_by_think0.jpg", // Czech
        cy: "https://img00.deviantart.net/bf46/i/2009/011/f/f/welsh_grungy_flag_by_think0.jpg", // Welsh
        da: "https://i.imgur.com/MVKImbX.jpg", // Danish
        de: "https://i.imgur.com/KjM0RNL.jpg", // German
        nl: "https://i.imgur.com/ibQ5R2y.jpg", // Dutch
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
        tlh: "https://img00.deviantart.net/2a19/i/2011/324/0/7/klingon_empire_grunge_flag_by_elthalen-d4gr37c.jpg", // Klingon
        ko: "https://pre00.deviantart.net/d168/th/pre/i/2009/041/d/b/south_korea_grunge_flag_by_think0.jpg", // Korean
        no: "https://i.imgur.com/GZSVizM.jpg", // Norwegian (Bokmål)
        pl: "https://i.imgur.com/gJ0aMso.jpg", // Polish
        pt: "https://i.imgur.com/vGHMaiK.jpg", // Portuguese (Brazilian)
        ro: "https://img00.deviantart.net/9bf6/i/2009/007/0/4/romanian_grunge_flag_by_think0.jpg", // Romanian
        ru: "https://i.imgur.com/shKQqnR.jpg", // Russian
        sv: "https://i.imgur.com/VN547Ku.jpg", // Swedish
        sw: "https://cdn.pixabay.com/photo/2016/03/07/14/26/tanzania-1242282_960_720.jpg", // Swahili
        tr: "https://i.imgur.com/diItxKa.jpg", // Turkish
        uk: "https://i.imgur.com/NZQtpAa.jpg", // Ukrainian
        vi: "https://i.imgur.com/8fF8Qz3.jpg", // Vietnamese
        zh: "https://pre00.deviantart.net/50ff/th/pre/i/2009/026/e/2/people__s_republic_of_china_gf_by_think0.jpg", // Chinese
    }

    // ========== BACKGROUND ============
    function cleanBackground() {
        console.log(LOG_NS + '... cleaning background.');
        $("body").css("background", "");
    }

    function drawBackground(code, language) {
        console.log(LOG_NS + 'Setting background for language "' + language + '" (code: ' + code + ').');
        if (code in flags) {           
            $("body").css("background", "url(" + flags[code] + ")");
            $("body").css("background-size", "cover");
            $("body").css("background-position", "0px 0px");
            $("body").css("background-repeat", "no-repeat");
            $("body").css("background-attachment", "fixed");
        } else {
            // defaults to none
            console.log(LOG_NS + ' ... an image for code (' + code + ') was not found.');
            cleanBackground();
            cleanFooter();
        }
    }

    // ========== FOOTER ============
    function drawFooterComments() {
        // for duolingo.com/comment/<> views.
        // (Use .nav-footer)
        $(".nav-footer").css("background", "white");
        $(".nav-footer").css("border-radius", "10px");
    }

    function cleanFooterComments() {
        $(".nav-footer").css("background", "none");
        $(".nav-footer").css("border-radius", "0px");
    }

    function cleanFooterCommon() {
        var infoNodes = document.querySelectorAll("ul > li > a[href='/info']");
        if (infoNodes.length > 0) {
            // find footer
            var infoNode = infoNodes[infoNodes.length-1];
            var footerNode = infoNode.parentNode.parentNode;
            // append flag class
            footerNode.className = footerNode.className.replace(" script_duo_flag_footer", "");
            footerNode.className += " script_duo_flag_footer";
            // modify items
            $(".script_duo_flag_footer").css("background", "none");
            $(".script_duo_flag_footer").css("text-shadow", "none");
            $(".script_duo_flag_footer a").css("color", "inherit");
            // remove flag
            footerNode.className = footerNode.className.replace(" script_duo_flag_footer", "");
        }
    }

    function drawFooterCommon() {
        // for duolingo.com/<> views. 
        // Based on /info hrefs.
        var infoNodes = document.querySelectorAll("ul > li > a[href='/info']");
        if (infoNodes.length > 0) {
            // find footer
            var infoNode = infoNodes[infoNodes.length-1];
            var footerNode = infoNode.parentNode.parentNode;
            // append flag class
            footerNode.className = footerNode.className.replace(" script_duo_flag_footer", "");
            footerNode.className += " script_duo_flag_footer";
            // modify items
            $(".script_duo_flag_footer").css("background", "none");
            $(".script_duo_flag_footer").css("text-shadow", "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000");
            $(".script_duo_flag_footer a").css("color", "white");
        } 
    }

    function cleanFooter() {
        console.log(LOG_NS + '... cleaning footer.');
        if (inDiscussionView()) {
            cleanFooterComments();
        } else {
            cleanFooterCommon();
        }
    }

    function drawFooter() {
        console.debug(LOG_NS + 'Setting footer.');
        if (inDiscussionView()) {
            drawFooterComments();
        } else {
            drawFooterCommon();
        }
    }

    function inDiscussionView() {
        if ( $(".nav-footer").length ) {
            return true;
        }
        return false;
    }

    // ========== DRAWING ============
    function getCurrentLanguage() {
        // common API
        var duoJSON = JSON.parse(localStorage.getItem('duo.state'));
        var code = duoJSON.user.learningLanguage;
       return code.replace(/-.*/g, "");
    }

    function reDraw(code) {
        drawFooter();
        drawBackground(code, "-");
    }

    reDraw(getCurrentLanguage()); 
}


// inject JS code
function inject(f) { //Inject the script into the document
    var script;
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = f.toString();
    document.head.appendChild(script);
}
inject(setupFlagScript);

$(document).ready(function() {
    setupFlagScript();
});

// and apply!
window.setInterval(function(){
  setupFlagScript();
}, 5000);
