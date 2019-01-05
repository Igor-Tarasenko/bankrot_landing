$(document).ready(function() {
    $(document).mouseup(function (e) {
        var div = $(".hidden-block");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide();
        }
    });
    $('.spoiler-title').click(function () {
        $('.spoiler-body').hide(400);
       $(this).next().show(400);
    });
});