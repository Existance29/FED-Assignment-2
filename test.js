
$( '.thumbnail' ).mousemove(function(e) {
    // Show original picture    
    var $original = $( '#' + this.id + '_original');
    var $container = $original.parent();
    var zoom_container_size = $(this).width()/3
    var zoom_area_size = zoom_container_size/2
    var zoom_radius = zoom_area_size / 2;
    $container.css("width",`${zoom_container_size}px`)
    $container.css("height",`${zoom_container_size}px`)
    $container.removeClass( 'hidden' );

    // Thumbnail
    var offset = $( this ).offset();
    var tX = e.pageX - offset.left;
    var tY = e.pageY - offset.top;
    // We stay inside the limits of the zoomable area
    tX = Math.max( zoom_radius, Math.min( $( this ).width() - zoom_radius, tX ) )
    tY = Math.max( zoom_radius, Math.min( $( this ).height() - zoom_radius, tY ) )
    // Ratios
    var ratioX = ( $original.width() - zoom_container_size) / ( $( this ).width() - zoom_area_size )
    var ratioY = ( $original.height() - zoom_container_size) / ( $( this ).height() - zoom_area_size )
    // Margin to be set in the original    
    var moX = -Math.floor( ( tX - zoom_radius ) * ratioX )
    var moY = -Math.floor( ( tY - zoom_radius ) * ratioY )
    // Apply zoom efect
    $original.css( 'marginLeft', moX );
    $original.css( 'marginTop', moY );
    //Calculate the position of the zoom
    console.log( $('#header').height())
    var y = $(this).position().top + (e.pageY - $(this).offset().top) - $container.height()/2
    var x = $(this).position().left + (e.pageX - $(this).offset().left) - $container.width()/2
    console.log(e.pageX)
    $container.css('top',y)
    $container.css('left',x)
});

$( '.thumbnail' ).mouseout(function(e) {
    var $original = $( '#' + this.id + '_original');
    var $container = $original.parent();
    $container.addClass( 'hidden' );
});