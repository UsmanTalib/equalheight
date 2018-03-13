# equalheight
Jquery code to set equal heights of divs

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

for example

equalheight('#section .row' , ".box");


Author:- Usman Talib
https://usmantalib.com

