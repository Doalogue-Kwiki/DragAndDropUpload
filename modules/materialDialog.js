function CreateMaterialDialog( fieldset, dialogActionButtons, dialogTitle, dialogHeight ) {
	
	function MaterialDialog( config ) {
		MaterialDialog.parent.call( this, config );
		this.broken = true;
	}
	
	OO.inheritClass( MaterialDialog, OO.ui.ProcessDialog );
	MaterialDialog.static.title = dialogTitle;
	MaterialDialog.static.actions = dialogActionButtons;
	MaterialDialog.prototype.initialize = function () {
		var closeButton,
			dialog = this;

		MaterialDialog.parent.prototype.initialize.apply( this, arguments );
		this.content = new OO.ui.FormLayout( {
			classes: ['materialDialog'],
			items: [ fieldset ]
		} );		

		this.$body.append( this.content.$element );
	};
		
	MaterialDialog.prototype.getBodyHeight = function () {
		return dialogHeight;
	};

	MaterialDialog.prototype.onDialogKeyDown = function ( e ) {
		var actions;

		if ( e.which === OO.ui.Keys.ESCAPE && this.constructor.static.escapable ) {
			this.executeAction( 'close' );
			e.preventDefault();
			e.stopPropagation();
		} 
	};
	
	var materialDialog = new MaterialDialog( {
		size: 'large'		
	} );
		
	// Create and append a window manager, which opens and closes the window.
	var windowManager = new OO.ui.WindowManager();

	windowManager.addWindows( [ materialDialog ] );
	// Open the window!
	windowManager.openWindow( materialDialog );
	$( 'body' ).append( windowManager.$element );	
	
	return materialDialog;
};