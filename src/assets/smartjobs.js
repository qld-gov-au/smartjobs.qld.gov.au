// custom script for smartjobs
(function( $ ) {
// ondomready
$(function() {
	var advancedSearchToggleHandler,
		fieldSizes,
		revealFeedbackSection
	;


	// use qg-coa, not qg-logo
	$( '#qg-logo' ).attr( 'id', 'qg-coa' );


	// add advanced search toggle
	advancedSearchToggleHandler = function() {
		$( '#advanced-search' ).forcesRelevance( 'relevant', $( '#advanced-search-toggle' ).is( ':checked' ));
	};

	$( '#advanced-search' ).before( '<li><input type="checkbox" id="advanced-search-toggle" /> <label for="advanced-search-toggle">More search options</label></li>' );
	$( '#advanced-search-toggle' ).click( advancedSearchToggleHandler );
	advancedSearchToggleHandler();


	// lightbox for links in labels
	$( 'a', 'label' ).butterfly();


	// adjust sizes of fields on application form
	fieldSizes = {
		'in_email' : 40,
		'in_phone' : 20,
		'in_contact_addr3' : 20, // suburb
		'in_contact_addr5' : 5 // postcode
	};

	$( 'input', '#content' ).filter( ':text' ).each(function() {
		var input = $( this );
		if ( typeof fieldSizes[ input.attr( 'name' ) ] === 'number' ) {
			input.attr( 'size', fieldSizes[ input.attr( 'name' ) ]);
		}
	});


	// add 'contact us' link in feedback form on core pages
	$( '.instruction', '#page-feedback' ).eq( 0 )
		.append( '<p>We do not reply to feedback. <a href="https://www.qld.gov.au/contact-us/">Contact us if you need a response</a>.</p>' )
	;


});
}( jQuery ));