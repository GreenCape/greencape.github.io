$(document).ready(function () {
    alert("Processing feature image");
    var cWidth = window.innerWidth;
    alert("Canvas width is " + cWidth);
    var width = 1920;
    var sizes = [480, 768, 1024, 1280, 1920];
    for (var i = 0; i < sizes.length; ++i) {
        if (cWidth <= sizes[i]) {
            width = sizes[i];
            break;
        }
    }
    alert("Best fit is " + width);

    var $img = $('img#feature-image');
    alert("Found feature image " + $img.data('ref'));
    $img.attr({
        'src': "/images/" + width + "/" + $img.data('ref')
    });
});
