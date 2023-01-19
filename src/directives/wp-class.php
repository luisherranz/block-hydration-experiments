<?php

require_once __DIR__ . '/utils.php';

function process_wp_class( $tags, $context ) {
	if ( $tags->is_tag_closer() ) {
		return;
	}

	/**
	 * A `wp-class` *tag* doesn't really make sense.
	 * What would be the point of e.g. `<wp-class:red="isRed">?
	 */
	if ( 'WP-CLASS' === $tags->get_tag() ) {
		return;
	}

	$prefixed_attributes = $tags->get_attribute_names_with_prefix( 'wp-class:' );

	foreach ( $prefixed_attributes as $attr ) {
		list( , $class_name ) = explode( ':', $attr );
		if ( empty( $class_name ) ) {
			continue;
		}

		// TODO: Properly parse $value.
		$expr      = $tags->get_attribute( $attr );
		$add_class = get_from_context( $expr, $context->get_context() );
		if ( $add_class ) {
			$tags->add_class( $class_name );
		} else {
			$tags->remove_class( $class_name );
		}
	}
}