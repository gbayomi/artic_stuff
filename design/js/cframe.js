$(document).ready(function() {
	console.log('olar');

	active_id = 0
	no_submit = true

	$('.highlight').hover(function(){
		//console.log('aqui');
		button = '#' + String(this.id) + ' .button-label'
		$(button).show()
	}, function(){
		button = '#' + String(this.id) + ' .button-label'
		$(button).hide()
	});

	$('.button-label').on('click', function (e) {
		id_of_change = $(this).attr('id').split(' ')[0]
		id = $(this).parent().closest('p').attr('id').split(' ')[0]
		button = '#' + String(id) + ' .button-label'

		$(button).removeClass('btn-info').addClass('btn-secondary');
		$(button).removeClass('btn-danger').addClass('btn-secondary');
		$(button).removeClass('btn-success').addClass('btn-secondary');

		selection = '#' + String(id) + ' #'+id_of_change
		$(selection).removeClass('btn-secondary').addClass('btn-'+id_of_change);
 	});

 	$('#left-arrow').on('click', function (e) {
 		if (active_id>0) {
			$('#'+String(active_id)).removeClass('active');
			active_id--
			$('#'+String(active_id)).addClass('active');
			$('#submission').attr('disabled','disabled');
			no_submit = true
		}
 	});

 	$('#right-arrow').on('click', function (e) {
 		if (no_submit) {
 			$('#'+String(active_id)).removeClass('active');
			active_id++
			$('#'+String(active_id)).addClass('active');
 		}

		if ($('#'+String(active_id+1)).length<=0) {
			$('#submission').removeAttr('disabled');
			no_submit = false
		}
 	});

});
