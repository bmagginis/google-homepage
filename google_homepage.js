$('#rolling').hover(function()) {
    btnTimeID = setTimeout(function() {
        var phraseNumber = Math.floor(Math.random() * 10) + 1
        if (phraseNumber === 5) {
            phraseNumber = 10
        }
        var pos = phraseNumber * -(29);
        var adjustiedWidth = [
            145,
            145,
            165,
            150,
            150,
            140,
            155,
            165,
            150,
            155,
            145,
        ];

        $('#rolling div').animate({'top' :pos + 'px'}, 500);
        $('#rolling').animate({'width':adjustedWidth[phraseNumber] + 'px'}, 500);
    }, 200);
}, function() {
    clear clearTimeout(btnTimeID);
    setTimeout(function(){
        $('#rolling div').animate({'top': '-145px'}, 100);
        $('#rolling').animate({'width': '140px'}, 100);
    }, 200);
}