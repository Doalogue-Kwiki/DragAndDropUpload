/**
 * JavaScript for Drag And Drop Upload
 */
( function ( mw, $ ) {
    
    function loadDragAndDropUpload() {

		var file = new OO.ui.SelectFileWidget( {
			id: "modal-select-file",
			showDropTarget: true,
			droppable: true
		} );
		var upload = new mw.Upload;
		
		var dialogActionButtons = [ 
		{
			id: "model-upload-button",
			action: 'upload',
			framed: false,			
			icon: 'check',
			label: mw.msg("modal-upload-label-button"),
			iconTitle: mw.msg("modal-upload-label-button"),
			flags: [ 'primary', 'progressive' ] 
		},
		{ 
			id: "model-close-button",
			action: 'close',
			framed: false,
			icon: 'close',
			iconTitle: mw.msg("modal-close-button"),
			flags: 'safe' 
		} ];
		
		var dialogTitle = mw.msg("upload-files-dialog-title");
		var dialogHeight = 250;
		var materialDialog = CreateMaterialDialog( file, dialogActionButtons, dialogTitle, dialogHeight );
		
		materialDialog.getActionProcess = function ( action ) {
			var dialog = this;

			if ( action === 'upload' ) {
				return new OO.ui.Process( function () {				
					
					try {
						var fileToUpload = file.getValue();
						
						if (fileToUpload) {
							upload.setFile( fileToUpload );
							upload.setFilename( fileToUpload.name );
							upload.upload();
							
							swal({   
								title: mw.msg("uploaded-successfully"),
								text: mw.msg("redirect-files-list"),
								confirmButtonText: mw.msg("modal-ok-button")
							}).then(function() {
								window.location.href = "/special:fileList";
								dialog.close();
							});
						}
						else {
							$.simplyToast(mw.msg("modal-popup-warning-file-missing"), 'danger');
						}
					}
					catch (e) {
						console.log(e);
						dialog.close();
					}	
				} );
			} 
			
			if ( action === 'close' ) {				
				return new OO.ui.Process( function () {					
					dialog.close();
				} );
			}
		};
    }
    
	
    $( function () {
		$( document ).on( "click", "#upload_toggle", function(e) {
			e.preventDefault();
			loadDragAndDropUpload();
		});        
    });
	
}( mediaWiki, jQuery ) );
