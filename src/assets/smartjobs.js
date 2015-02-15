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


	// tweak 'Need help' aside
	$( '.contact', '#asides' )
	.removeClass( 'contact' ).addClass( 'help' )
	.find( 'h2' ).text( 'Need help?' );

	// rewrite contact link in 'Need help' aside
	$( 'a' ).filter( '[href="https://www.qld.gov.au/jobs/government/qgov-jobs-feedback/"]' )
	.attr( 'href', 'http://www.qld.gov.au/help/smartjobs/jobs.html' )
	.text( 'check our knowledge base' );

	// intercept contact us links
	$( document ).on( 'click', 'a[href*="://www.qld.gov.au/contact-us/"]', function( event ) {
		if ( $( this ).closest( '.intercept' ).length === 0 ) {
			event.preventDefault();
			// present contact us options
			$( document ).status( 'show', {
				lightbox: true,
				status: 'info',
				title: 'What is your enquiry about?',
				body: '<ul class="intercept">' +
				  '<li><a href="http://www.qld.gov.au/help/smartjobs/jobs.html">An advertised position or job application</a></li>' +
				  '<li><a href="http://www.qld.gov.au/help/smartjobs/technical.html">This website or Smartjobs account</a></li>' +
				  '<li><a href="https://www.qld.gov.au/contact-us/">A government service</a></li>' +
				  '</ul>'
			});

			return false;
		}
	});

});
}( jQuery ));