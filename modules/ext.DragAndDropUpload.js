/**
 * JavaScript for Accessibility Menu
 */
( function ( mw, $ ) {
    
    function loadDragAndDropUpload() {
		//var menu = mw.template.get( "ext.MaterialFAB", "menu.mustache" );
		/*var file = new OO.ui.SelectFileWidget(),
		button = new OO.ui.ButtonWidget( { label: 'Save' } ),
		upload = new mw.Upload;

		button.on( 'click', function () {
		  upload.setFile( file.getValue() );
		  upload.setFilename( file.getValue().name );
		  upload.upload();
		} );*/
		
		var uploadDialog = new mw.Upload.Dialog();
		var windowManager = new OO.ui.WindowManager();
		$( "#content" ).append( windowManager.$element );
		
		windowManager.addWindows( [ uploadDialog ] );
		windowManager.openWindow( uploadDialog );
	
    $( function () {
        loadDragAndDropUpload();
    });

}( mediaWiki, jQuery ) );
