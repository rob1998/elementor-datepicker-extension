jQuery( document ).ready( function( $ ) {
	let flatpicker_options = {
		disable: [
			function( date ) {
				return ( date.getDay() === 1 || date.getDay() === 2 );
			}
		],
		minDate: new Date().fp_incr(1) //verander naar 1 voor morgen of 0 naar vandaag
	}
	setTimeout(() => {
		flatpickr( "#form-field-reservation_date", flatpicker_options );
	}, 500);
} );
