/**
 * Created by seonaid on 14-11-25.
 */


$(document).ready( function() {
    $('.communities img').hover(
        function() {
            var text = $(this).closest(".image").find('.overlay')
            $(this).stop().animate({"left":"20"});
            $(this).toggleClass('bringforward');
            text.toggleClass('hidden');
            text.toggleClass('bringforward');
            text.stop().animate({"left":"20"});
        },
        function() {
            var text = $(this).closest(".image").find('.overlay')
            $(this).stop().animate({"left":"0"});
            $(this).removeClass('bringforward');
            text.toggleClass('hidden');
            text.toggleClass('bringforward');
            text.stop().animate({"left":"0"});
        });

});
