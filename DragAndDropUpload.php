<?php

if ( function_exists( 'wfLoadExtension' ) ) {
	wfLoadExtension( 'DragAndDropUpload' );
	
	// Keep i18n globals so mergeMessageFileList.php doesn't break
	$wgMessagesDirs['DragAndDropUpload'] = __DIR__ . '/i18n';
	
	$wgExtensionMessagesFiles['DragAndDropUploadMagic'] = __DIR__ . '/DragAndDropUpload.i18n.magic.php';
	wfWarn(
		'Deprecated PHP entry point used for DragAndDropUpload extension. Please use wfLoadExtension ' .
		'instead, see https://www.mediawiki.org/wiki/Extension_registration for more details.'
	);
	return true;
} else {
	die( 'This version of the DragAndDropUpload extension requires MediaWiki 1.25+' );
}
