//script for the zoom function in the products-details page
$( '#productImg' ).mousemove(function(e) {
    // Show original picture    
    var $original = $( '#' + this.id + '_original');
    //upscale the image by 1.5 for zoom
    $original.css("width",`${$original.get(0).naturalWidth*1.5}px`)
    $original.css("height",`${$original.get(0).naturalHeight*1.5}px`)
    var $container = $original.parent();
    var zoom_container_size = $(this).width()/8
    $container.css("width",`${zoom_container_size*2}px`)
    $container.css("height",`${zoom_container_size*2}px`)
    $container.removeClass( 'hidden' );

    // Thumbnail
    var offset = $( this ).offset();
    var tX =  e.pageX - offset.left;
    var tY = e.pageY - offset.top;
    // Ratios
    var ratioX = ( $original.width()) / ( $( this ).width())
    var ratioY = ( $original.height()) / ( $( this ).height())
    // Margin to be set in the original    
    var moX = -Math.floor( tX * ratioX - zoom_container_size)
    var moY = -Math.floor( tY * ratioY - zoom_container_size)
    // Apply zoom efect
    $original.css( 'marginLeft', moX );
    $original.css( 'marginTop', moY );
    //Calculate the position of the zoom
    var y = $(this).position().top + (e.pageY - offset.top) - zoom_container_size
    var x = $(this).position().left + (e.pageX - offset.left) - zoom_container_size
    $container.css("top", y)
    $container.css("left", x)
});

$( '#productImg' ).mouseout(function(e) {
    var $original = $( '#' + this.id + '_original');
    var $container = $original.parent();
    $container.addClass( 'hidden' );
});