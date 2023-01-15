function randomSite() {
    var sites = ["https://resource.fyi/category/ui-libraries", "https://duuuuunk.com/straps/category/heros", "https://web3forms.com/#start", "https://graygrids.com/", "https://www.youtube.com/results?search_query=what+is+google+drive+api", "https://stackoverflow.com/questions/38320878/circle-button-css#:~:text=For%20a%20modern%20CSS%20approach,a%20tag)%20has%20no%20effect.",];
    var randomNumber = Math.floor(Math.random() * sites.length);
    window.location = sites[randomNumber];
}