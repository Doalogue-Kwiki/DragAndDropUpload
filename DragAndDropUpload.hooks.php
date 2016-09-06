<?php
/**
 * Hooks for DragAndDropUpload extension
 *
 * @file
 * @ingroup Extensions
 */

class DragAndDropUploadHooks {
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin) {

		$out->addModules( array( 'ext.DragAndDropUpload' ) );
		return true;
	}
}
