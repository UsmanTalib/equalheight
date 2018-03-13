/**
 * @author Usman Talib
 * https://usmantalib.com
 */

/*This is equal height function we parse it two parameter row and Item*/
function equalheight(row,item) {
    $(row).each(function() {
        var rowDivs = [];
        $($(this).find(item)).each(function() {
            rowDivs.push(parseInt($(this).height()))
        });
        var height = Math.max.apply(Math,rowDivs);
        $(this).find(item).height(height).addClass('custom-set-height');
    });
}



/*Set Equal Height on elements on desktop*/

$(document).ready(function() {
    if($(window).width() > 767){
        //equalheight('#section .row' , ".box");
    }
});


/*Set Equal Height on elements on desktop and remove on mobiles*/

$(window).resize(function(){
    if($(window).width() > 767){
        //equalheight('#section .row' , ".box");
    }else{
        $('.custom-set-height').removeAttr('style');
    }
});
