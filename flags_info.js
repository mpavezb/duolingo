// API
// ====================
/*
Duo API:
===============
JSON: 
-------------
https://www.duolingo.com/users/<username> (too heavy for users with many followers)
https://www.duolingo.com/comments/<id>

Javascript:
-------------
var DuoState = JSON.parse(localStorage.getItem('duo.state'));
- Works everywhere

Variable duo.user
> duo.user.attributes.learning_language
> duo.user.attributes.learning_language_string
- Only works on comments section): duo.user
*/


// www.duolingo.com/users language Codes
// =======================================
{
    cs    // Czech
    cy    // Welsh
    da    // Danish
    de    // German
    dn    // Dutch
    el    // Greek
    en    // English
    eo    // Esperanto
    es    // Spanish (Spain)
    fr    // French
    ga    // Irish
    he    // Hebrew
    hu    // Hungarian
    hv    // High Valyrian
    it    // Italian
    ja    // Japanese
    kl    // Klingon
    ko    // Korean
    nb    // Norwegian (Bokmål)
    pl    // Polish
    pt    // Portuguese (Brazilian)
    ro    // Romanian
    ru    // Russian
    sv    // Swedish
    sw    // Swahili
    tr    // Turkish
    uk    // Ukrainian
    vi    // Vietnamese
    zs    // Chinese
}

// LocalStore duo.state language codes
// =======================================
var duoJSON = JSON.parse(localStorage.getItem('duo.state'));
duoJSON.config.courses.en:
{
    cs     // Czech
    cy     // Welsh
    da     // Danish
    de     // German
    el     // Greek
    en     // English
    eo     // Esperanto
    es     // Spanish (Spain)
    fr     // French
    ga     // Irish
    he     // Hebrew
    hu     // Hungarian
    hv     // High Valyrian
    it     // Italian
    ja     // Japanese
    ko     // Korean
    nl-NL  // Dutch
    no-BO  // Norwegian (Bokmål)
    pl     // Polish
    pt     // Portuguese (Brazilian)
    ro     // Romanian
    ru     // Russian
    sv     // Swedish
    sw     // Swahili
    tlh    // Klingon
    tr     // Turkish
    uk     // Ukrainian
    vi     // Vietnamese
    zh     // Chinese
}
duoJSON.config.courses.es:
{
​​    gn     // Guarani
    ca     // Catalan
}
