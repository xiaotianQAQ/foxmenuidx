'use strict';

var parent_css_resets = [];

function resize_field_appendix(time){	
	setTimeout(function()
		{
		jQuery('.appendix_field').each(
			function()
				{
				var label_width = 0;
				var icon_width = 0;
				var set_appendix_width = 0;
				var set_width = 0;
				var the_field = jQuery(this);
				var input_container = the_field.find('.input_container');
				jQuery(this).find('.icon-holder').each(
					function()
						{
							
							set_width = 0;
							
							if(!input_container.hasClass('icon-label-tip') && !input_container.hasClass('icon-label-hidden'))
								{
								label_width = jQuery(this).find('.icon-label').width();
								
								label_width = parseInt(label_width)+10;
								
								}
							else
								label_width = 0;
								
							
							if(jQuery(this).find('.no-icon').is('span'))	
								jQuery(this).addClass('has_no_icon');
								
							icon_width = jQuery(this).find('.icon-select').width();
							
							jQuery(this).find('.icon-select span').css('width',(parseInt(jQuery(this).find('.icon-select span').css('font-size')) )+'px');
							
							
							set_width = (parseInt(label_width))+parseInt(icon_width);
							
							
							
							if(input_container.hasClass('icon-spinner') || input_container.hasClass('icon-dropdown'))
								{
								if(set_width>set_appendix_width)
									set_appendix_width = set_width;
								}
							else
								{
								if(the_field.hasClass('material_field'))
									set_appendix_width += 	set_width+20;
								else
									set_appendix_width += 	set_width;
								}
							
						}
					);
				if(!input_container.hasClass('icon-dropdown') && !input_container.hasClass('icon-spinner'))
					{

					jQuery(this).find('.icon-container').css('width',(set_appendix_width)+'px');
					}

					if(input_container.hasClass('icon-spinner') && !the_field.hasClass('material_field'))
						{
						icon_width = jQuery(this).find('.icon-checked .icon-select').width();
						label_width =  parseInt(jQuery(this).find('.icon-checked .icon-label').width());
						set_appendix_width = icon_width+label_width+55;
						input_container.css('width',set_appendix_width+'px');
						}
					
					if(input_container.hasClass('icon-dropdown') && !the_field.hasClass('material_field'))
						{
						icon_width = jQuery(this).find('.is_default_selection .icon-select').width();
						label_width =  parseInt(jQuery(this).find('.is_default_selection .icon-label').width());
						set_appendix_width = icon_width+label_width+55;
						input_container.css('width',set_appendix_width+'px');
						}
				}
			
			);
		},time
	);
}



function showDays(firstDate,secondDate){
                
                  

                  var startDay = new Date(firstDate);
                  var endDay = new Date(secondDate);
                  var millisecondsPerDay = 1000 * 60 * 60 * 24;

                  var millisBetween = startDay.getTime() - endDay.getTime();
                  var days = millisBetween / millisecondsPerDay;

                  // Round down.
                  //alert( Math.floor(days));

              }


function run_parent_css_reset(popup_id)
	{
	parent_css_resets = []; 
			//var the_popup = jQuery('#nexForms_popup_'+popup_id);
			
			var the_popup = jQuery('.nex_forms_modal');
			
			var parentEls = the_popup.parents()
			  .map(function() {

				if(jQuery(this).css('position'))
					{
					parent_css_resets.push(
								{
								element: jQuery(this),
								position: jQuery(this).css('position')
								}
							);
					}
					jQuery(this).css('position','unset');
			  })
			  .get()
	}

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
function build_md_select(obj){
	
	obj.closest('.form_field').find('div.cd-dropdown').remove();
	
	if(obj.attr('data-effect')=='stack')
			{
			obj.dropdown( {
					gutter :15,
					effect : 'stack',
					select_obj : obj
				} );
			}
		else if(obj.attr('data-effect')=='angled')
			{
			obj.dropdown( {
					gutter : 10,
					delay : 100,
					random : true,
					effect : 'angled',
					select_obj : obj
				} );
			}
		else if(obj.attr('data-effect')=='fanned')
			{
			obj.dropdown( {
					gutter : 0,
					delay : 40,
					effect : 'fanned',
					rotated : 'left',
					select_obj : obj
				} );
			}
		else if(obj.attr('data-effect')=='slide-in')
			{
			obj.dropdown( {
					gutter : 15,
					stack : true,
					slidingIn : 100,
					effect : 'slide-in',
					select_obj : obj
				} );
			}
		else
			obj.dropdown({ select_obj : obj });	
	
}
Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
function run_count(selector, to)
{
  var from = jQuery(selector).text()=='' ? 0 : parseFloat(jQuery(selector).find('.math_result').text().replace(',',''));
  var get_decimals =  parseInt(jQuery(selector).attr('data-decimal-places'));
  jQuery({someValue: from}).animate({someValue: parseFloat(to)}, {
    duration: 400,
    easing:'swing',
    step: function() {
      
	  jQuery(selector).find('.math_result').text(Math.ceil(this.someValue).format(get_decimals));
    }
  });
  setTimeout(function(){
    jQuery(selector).find('.math_result').text(parseFloat(to).format(get_decimals));
  }, 550);
  
  
  jQuery(selector).find('.set_math_result').trigger('change');
}

function set_up_math_logic(target){
	

	var get_math = target.attr('data-original-math-equation');
	var pattern = /\{(.*?)\}/g;
	var match;
	while ((match = pattern.exec(get_math)) != null)
		{
		var element = document.getElementsByName(match[1]);
		
		jQuery(element).on('change',
			function()
				{
				setTimeout(function(){run_math_logic(target)},30);
				}
			);
		}
		
}

function run_math_logic(target){

	if(!strstr(target.attr('data-math-equation'),'['))
		target.attr('data-math-equation',target.attr('data-original-math-equation'));
		
	var get_math = target.attr('data-math-equation');
	
	var the_form = target.closest('form');

	var set_result = '';
	var match_array = []
	var pattern = /\{(.*?)\}/g;
	var set_val = '';
	var clean_math ='';
	var i = 0;
	var check_val = 0;
	var select_val = 0;
	var match;
	
	while ((match = pattern.exec(get_math)) != null)
		{
		match_array[i] = match[1];
		i++;
		}
		
	var arrayLength = match_array.length;
	
	for (var j = 0; j < arrayLength; j++)
		{
		
		 var set_match = match_array[j];
		 var element = document.getElementsByName(match_array[j]);

		 select_val = 0;
		 check_val = 0;
		
		 if(jQuery(element).is('select'))
			{
			the_form.find('select[name="'+match_array[j]+'"] option:selected').each(
				function()
					{
					if(jQuery(this).prop('selected')==true)
						{
						if(jQuery(element).closest('.form_field').hasClass('multi-select'))
							select_val += parseFloat(jQuery(this).val());
						else
							select_val = parseFloat(jQuery(this).val());	
						}
					else
						select_val = 0;
					}
				);
			set_val = select_val;	
			
			//if(!the_form.find('select[name="'+match_array[j]+'"]').closest('.form_field').is(':visible'))
				//set_val = 0;
			
			}
		 else if(jQuery(element).attr('type')=='checkbox')
		 	{
			the_form.find('input[name="'+match_array[j]+'"]').each(
				function()
					{
					
					if(jQuery(this).prop('checked')==true)
						check_val += parseFloat(jQuery(this).val());
					}
				);
			set_val = check_val;
			
			
			//if(!the_form.find('input[name="'+match_array[j]+'"]').closest('.form_field').is(':visible'))
				//set_val = 0;
			
			}
		 else if(jQuery(element).attr('type')=='radio')
		 	{
			
			
			
			if(the_form.find('input[name="'+match_array[j]+'"]:checked').val())
				set_val = the_form.find('input[name="'+match_array[j]+'"]:checked').val();	
			else
				set_val = 0;
				
			
			//if(!the_form.find('input[name="'+match_array[j]+'"]').closest('.form_field').is(':visible'))
				//set_val = 0;
			
			}
		else if(jQuery(element).attr('type')=='text')
		 	{
			
			if(jQuery(element).closest('.form_field').hasClass('md-datepicker') || jQuery(element).closest('.form_field').hasClass('date') || jQuery(element).closest('.form_field').hasClass('jq-datepicker'))
				{
				
				var get_date = (the_form.find('input[name="'+match_array[j]+'"]').val()) ? Date.parse(the_form.find('input[name="'+match_array[j]+'"]').val()) : 0;
				var set_date = (get_date)/(1000 * 60 * 60 * 24)

				set_val = (set_date<0) ? 0 : set_date;
				
				}
			else	
				set_val = (the_form.find('input[name="'+match_array[j]+'"]').val()) ? the_form.find('input[name="'+match_array[j]+'"]').val() : 0;
				
			//if(!the_form.find('input[name="'+match_array[j]+'"]').closest('.form_field').is(':visible'))
				//set_val = 0;
				
			}
		else if(jQuery(element).is('textarea'))
			{
			set_val = (the_form.find('textarea[name="'+match_array[j]+'"]').val()) ? the_form.find('textarea[name="'+match_array[j]+'"]').val() : 0;
			
			//if(!the_form.find('textarea[name="'+match_array[j]+'"]').closest('.form_field').is(':visible'))
				//set_val = 0;
			}
		 else
		 	set_val = (jQuery(element).val()) ? jQuery(element).val().replace(',','') : 0;
			
		
			
		 clean_math = target.attr('data-math-equation').replace(set_match,set_val).replace('{','').replace('}','');
		 target.attr('data-math-equation',clean_math)
		}
	//if(target.is(':visible'))
		run_count(target,math.eval(clean_math));
	//For decimals
	if(target.attr('data-decimal-places')!=0)
		target.parent().find('input.set_math_result').val((Math.ceil(math.eval(clean_math) * 100)/100).toFixed(parseInt(target.attr('data-decimal-places'))));
	else
		target.parent().find('input.set_math_result').val((Math.ceil(math.eval(clean_math) * 100)/100));
		
	target.parent().find('input.set_math_result').trigger('change');
}
var the_field ='';
function clearFileInput(obj){
       var new_file_input = obj.clone();
	   
	   obj.append(new_file_input)
	   obj.remove();
	   
    }
function is_inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}


function run_nf_reanimate(the_field){
		the_field.removeClass(the_field.attr('data-animation-name'));
		the_field.removeClass('wow');
		the_field.removeClass('animated');
		the_field.css('animation-name','');
		the_field.css('visibility','visible');
	
		setTimeout(function()
			{
			the_field.addClass('animated');
			the_field.addClass('test');
			the_field.addClass(the_field.attr('data-animation-name'));	
			
			},200);
}

function run_nf_cl_animations(field,action, the_form){

	if(field.attr('data-animation-name') )
		{	
		var animation = field.attr('data-animation-name');	
		var animation_delay = 0;
		if(field.attr('data-wow-delay'))
			{
			animation_delay = field.attr('data-wow-delay');
			animation_delay = animation_delay.replace('s','');
			}
		var animation2 = animation.replace('In','Out');
		animation2 = animation2.replace('Down','Up');

	field.removeClass(field.attr('data-animation-name'));
	field.removeClass('wow');
	field.removeClass('animated');
	field.removeClass(animation2);
	field.css('animation-name','');
	
	field.addClass('animated');
	
	if(action=='show')
		{
		nf_replace_tags(the_form,field);
		if(!field.hasClass('animation_exe'))
			{
			setTimeout(function()
					{
					setTimeout(function()
						{
						field.show();
						field.addClass(field.attr('data-animation-name'));
						field.css('visibility','visible');
						field.addClass('animation_exe');
						},animation_delay);
					},200
				);
			}
		}
	else
		{
		field.addClass(animation2);
		setTimeout(function()
				{
				field.hide();
				field.removeClass('animation_exe')
				},200
			)
		}
		
	}
else
	{
	if(action=='show')
		{
		field.show();
		nf_replace_tags(the_form,field);
		}
	else
		field.hide();
	}

	
		
}

jQuery(document).ready(
function()
	{
	
	
	jQuery(this).closest('form').find('input').removeAttr('disabled');
	
	
	
	jQuery('.ui-nex-forms-container').each(
		function()
			{
			var form_container = jQuery(this);
			form_container.find(':disabled').each(
				function()
					{
					form_container.find('form').append('<input type="hidden" name="'+ jQuery(this).attr('name') +'" value="'+ jQuery(this).val() +'" />');
					}
				);	
			}
		);
	
	

	jQuery('.ui-nex-forms-container').each(
	function()
		{
		jQuery(this).find('.step').last().addClass('last_step');
		}
	);
	
	
	
	
	jQuery(document).on('change', '.upload_fields input[type="file"]',
		function()
			{
			hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);	
	
		
	
	
			
	jQuery(document).on('change', '.upload_fields input[type="file"]',
		function()
			{
			hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);	
	
	
	jQuery(document).on('click', "#nex-forms .upload-multi .fa.fa-cloud-upload",
		function()
			{
			//jQuery(this).closest('.form_field').find('.the_input_element').trigger('click');
			}
		);	
	

	jQuery(document).on('click', "#nex-forms .upload-image .nf_add_image .the_input_element .fileinput-new .fa",
		function()
			{
			jQuery(this).closest('.form_field').find('.the_input_element').trigger('click');
			}
		);	
	
	
		
	/* BREADCRUMB */

	jQuery('.nex-submit').prop('disabled',false);
	jQuery('textarea').closest('.form_field').addClass('multi_line');
	
	
	jQuery(document).on('click', ".date #datetimepicker input",
		function()
			{
			jQuery(this).parent().find('.input-group-addon').trigger('click');
			jQuery(this).parent().find('.input-group-addon-bd').trigger('click');
			}
		);	

	jQuery(document).on('click', ".time #datetimepicker input",
		function()
			{
			jQuery(this).parent().find('.input-group-addon').trigger('click');
			jQuery(this).parent().find('.input-group-addon-bd').trigger('click');
			}
		);	
		
	/*jQuery( ".jq-radio-group #the-radios input" ).checkboxradio();	
	jQuery( ".jq-check-group #the-radios input" ).checkboxradio();
	jQuery( "select.jq_select" ).selectmenu();*/
	/* MD FIELDS */
	jQuery('input').trigger('autoresize');
	jQuery('textarea').trigger('autoresize');
	jQuery('select.material_select').material_select();

	jQuery('.nex_forms_modal.modal').modal(
			{
			dismissible: false, // Modal can be dismissed by clicking outside of the modal
			opacity: .8, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration (not for bottom modal)
			startingTop: '4%', // Starting top style attribute (not for bottom modal)
			endingTop: '10%', // Ending top style attribute (not for bottom modal)
			ready: function(modal, trigger)
				{ 	// Callback for Modal open. Modal and trigger parameters available.

				},
			complete: function() 
				{  
				} // Callback for Modal close
			}
		);
		
	var get_nex_forms = {};
	var get_nex_forms_interactions = {};

	jQuery('form.submit-nex-form').each(
		function(index)
			{
			get_nex_forms[jQuery(this).attr('id')] = false;
			get_nex_forms_interactions[jQuery(this).attr('id')] = false;
			}
		);

	
	jQuery.fn.isInViewport = function() {
		var elementTop = jQuery(this).offset().top;
		var elementBottom = elementTop + jQuery(this).outerHeight();
	
		var viewportTop = jQuery(window).scrollTop();
		var viewportBottom = viewportTop + jQuery(window).height();
	
		return elementBottom > viewportTop && elementTop < viewportBottom;
	};
		
	var ajaxurl = jQuery('#nf_ajax_url').text();
	
	jQuery(window).on('load resize scroll', function() {
		for (var key in get_nex_forms) {
		   if (jQuery('form#'+key).isInViewport()) { 
			if(get_nex_forms[key] == false)
				{
				var data = 	
					{
					action	 			: 'nf_add_form_view',
					nex_forms_id		: jQuery('form#'+key).find('input[name="nex_forms_Id"]').val()
					};
				jQuery.post(ajaxurl, data, function(response){});
				get_nex_forms[key] = true;
			  }
		   }
		}
	});
	
	
	jQuery(document).on('click','form[name="nex_form"]',
		function()
			{
			var the_form = jQuery(this);
			if(get_nex_forms_interactions[the_form.attr('id')] == false)
				{
				var data = 	
					{
					action	 			: 'nf_add_form_interaction',
					nex_forms_id		: the_form.find('input[name="nex_forms_Id"]').val()
					};
				jQuery.post(ajaxurl, data, function(response){});
				get_nex_forms_interactions[the_form.attr('id')] = true;
			  }
			}
		);
	
	jQuery(document).on('change','input[type="file"][multiple]',
			function(e){
				
				hide_nf_error(jQuery(this).closest('.form_field'));
				
				var files = this.files;
				var max_upload_size_per_file 	= (jQuery(this).closest('.form_field').find('.the_input_element').attr('data-max-size-pf')) ? parseFloat(jQuery(this).closest('.form_field').find('.the_input_element').attr('data-max-size-pf')) : 0;
				var max_upload_size_overall 	= (jQuery(this).closest('.form_field').find('.the_input_element').attr('data-max-size-overall')) ? parseFloat(jQuery(this).closest('.form_field').find('.the_input_element').attr('data-max-size-overall')) : 0;
				var max_files 					= (jQuery(this).closest('.form_field').find('.the_input_element').attr('data-max-files')) ? parseFloat(jQuery(this).closest('.form_field').find('.the_input_element').attr('data-max-files')) : 0;
				

				var set_file_names = '';
				var total_size = 0;
				for (var i=0;i<files.length;i++){
					var size = (files[i].size/(1024*1024)).toFixed(2);
					set_file_names += '<li class="file-item"><i class="fa fa-file-o"></i>&nbsp;&nbsp;'+ files[i].name + ' - '+ size  +'MB</li>';
					total_size += parseFloat(size);
					if(max_upload_size_per_file>0)
						{
						if(parseFloat(size)>max_upload_size_per_file)
							{
							var get_error_msg = jQuery(this).closest('.form_field').find('.error_message').attr('data-max-per-file-message');
							var set_error_msg = get_error_msg.replace('{x}',max_upload_size_per_file)
							show_nf_error(jQuery(this).closest('.form_field'),set_error_msg)
							return false;
							}
						}
					var fname = files[i].name;
					var items = jQuery(this).closest('.form_field').parent().find('div.get_file_ext').text();
					items = items.split('\n');
					var ext = fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
						if(jQuery.inArray(ext,items)<0)
							{
							show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('.error_message').attr('data-secondary-message'))

							return false;
							}
						}
				if(max_upload_size_overall>0)
					{
					if(total_size>max_upload_size_overall)
						{
						var get_error_msg = jQuery(this).closest('.form_field').find('.error_message').attr('data-max-all-file-message');
						var set_error_msg = get_error_msg.replace('{x}',max_upload_size_overall)
						show_nf_error(jQuery(this).closest('.form_field'),set_error_msg);
						return false;
						}
					}
			    if(max_files>0)
					{
					if(files.length>max_files)
						{
						var get_error_msg = jQuery(this).closest('.form_field').find('.error_message').attr('data-file-upload-limit-message');
						var set_error_msg = get_error_msg.replace('{x}',max_files)
						show_nf_error(jQuery(this).closest('.form_field'),set_error_msg);
						return false;
						}
					}
				
				if(!jQuery(this).closest('.form_field').find('ul.file_list').attr('class'))
					jQuery(this).closest('.form_field .input_container').append('<ul class="file_list">'+ set_file_names +'</ul>');
				else
					jQuery(this).closest('.form_field').find('ul.file_list').html( set_file_names );
				
				setTimeout(function(){ jQuery(this).closest('.form_field').find('span.fileinput-filename').text(files.length+' Files Selected - ' + total_size.toFixed(2) + 'MB') },100);
				
				if(files.length==0)
					{
					jQuery(this).closest('.form_field').find('ul.file_list').remove();
					if(jQuery(this).closest('.form_field').hasClass('required'))
						{
						var set_error_msg = jQuery(this).closest('.form_field').find('.error_message').attr('data-error-message');
						show_nf_error(jQuery(this).closest('.form_field'),set_error_msg);	
						}
					}
				
				
				return false;
			});
	jQuery('.md-slider').each(
		function(index)
			{
			var the_slider = jQuery(this).find('.slider');
			var slider_min = the_slider.attr('data-starting-value');
			setTimeout(
				function()
					{
					the_slider.parent().find('input.the_slider').val(slider_min);
					the_slider.parent().find('input.the_slider').trigger('change');
					},(index+10));
			}
		);
	
	
	jQuery('#nex-forms input[type="file"]').each(
		function(index)
			{
			jQuery(this).val('');
			}
		);
	
	
	
	jQuery(document).on('click','.input-group-addon.recreate-this-field',
		function()
			{
			var clone = jQuery(this).parent().clone();
			
			
			jQuery(this).parent().parent().append(clone);
			jQuery(this).parent().append('<span class="input-group-addon delete-this-field"><i class="fa fa-minus"></i></span>');
			jQuery(this).remove();
			}
		);
	
	jQuery(document).on('click','.input-group-addon.delete-this-field',
		function()
			{
			jQuery(this).parent().remove();
			}
		);
	
	jQuery(document).on('mouseup','.js-signature canvas',
		function()
			{
			jQuery(this).parent().parent().find('textarea').val((jQuery(this).parent().parent().find('.js-signature').jqSignature('getDataURL')));
			
			}
		);
	jQuery(document).on('touchend','.js-signature canvas',
		function()
			{
			jQuery(this).parent().parent().find('textarea').val((jQuery(this).parent().parent().find('.js-signature').jqSignature('getDataURL')));
			
			}
		);	
	
	
	
	jQuery(document).on('click','.clear_digital_siganture',
		function()
			{
			jQuery(this).parent().find('textarea').val('');
			jQuery(this).parent().find('.js-signature').jqSignature('clearCanvas');
			}
		);
		//
	jQuery('.icon-label-tip [data-toggle="tooltip"]').tooltip_bs({ delay:{ "show": 500, "hide": 100 }})
	jQuery('.icon-label-tip [data-toggle="tooltip_bs"]').tooltip_bs({ delay:{ "show": 500, "hide": 100 }})
	
	if(get_wow!='disabled')
		{
		var wow = new WOW(
				{
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
				}
			)
		wow.init();
		}
		
		jQuery(document).trigger('scroll','html, body');

	jQuery(document).on('blur', '#nex-forms input, #nex-forms textarea', function()
		{
		jQuery(this).trigger('change');
		jQuery(this).keyup();
		}
	);
	
	
	jQuery('#nex-forms input.numbers_only').on('keyup', function(){
		var n = parseInt(jQuery(this).val().replace(/\D/g,''),10);
		if(jQuery(this).val()=='NaN')
			jQuery(this).val(0);
		console.log(jQuery(this).val())
	});
	
	jQuery('#nex-forms input, #nex-forms textarea').each(
		function()
			{
			jQuery(this).attr('autocomplete','off');
			
			if(jQuery(this).attr('maxlength') && !jQuery(this).closest('.form_field').hasClass('material_field'))
				{
				var current_total = jQuery(this).val().length;
				var max_total = jQuery(this).attr('maxlength');
				jQuery(this).parent().append('<div class="text_counter_holder"><div class="badge label-success text_counter" style="display:none;">' + current_total + ' / ' + max_total + '</div></div>')
				
           		jQuery(this).keyup(function () {
 
            	var left = (max_total-jQuery(this).val().length);
 
				if(left <= 0){
					jQuery(this).parent().find('.text_counter').addClass("label-danger").removeClass('label-success');
				}else{
					jQuery(this).parent().find('.text_counter').removeClass("label-danger").addClass('label-success');
				}
 				
				if(jQuery(this).val().length<=0)
					{
					jQuery(this).closest('.form_field').removeClass('has_max_lenght');	
					jQuery(this).parent().find('.character-counter').hide();
					}
				else
					{
					jQuery(this).closest('.form_field').addClass('has_max_lenght');	
					jQuery(this).parent().find('.character-counter').show();
					}
            	jQuery(this).parent().find('.character-counter').text(jQuery(this).val().length + '/' + max_total);
				});
				}
			}
		);
		
		
		jQuery(document).on('click', '.the-radios a, .the-radios .input-label, .the-radios span.check-icon', function(e){
				
				
				var the_field = jQuery(this).closest('.form_field');
				
				
				if(!the_field.hasClass('classic-radio-group') && !the_field.hasClass('classic-check-group'))
					{
						e.preventDefault();
					}
				
				var clickedParent = (jQuery(this).hasClass('input-label')) ? jQuery(this).parent().find('.clearfix') : jQuery(this).closest('.clearfix');
				var	input = clickedParent.find('input');
				var	nexCheckable = clickedParent.find('a:first');
				var	input_label = clickedParent.closest('label');
				
				
				
				if(input.prop('type') === 'radio')
					{
					
					the_field.find('.radio_selected').removeClass('radio_selected');
						the_field.find('#the-radios a').css('background','#fff');
						the_field.find('.check-icon').remove();
					if(!nexCheckable.hasClass('checked'))
						{
							jQuery('input[name="' + input.attr('name') + '"]').each(
								function(index, el)
									{
									jQuery(el).prop('checked', false).parent().find('a:first').removeClass('checked').removeClass("ui-state-active").addClass("ui-state-default").removeClass(jQuery(el).closest('.the-radios').attr('data-checked-class'));
									nexCheckable.attr('class','checked' );
									
									
									
									input_label.removeClass('radio_selected');
									
									}
								);
							
						}
					
					
					if(the_field.closest('.step').hasClass('auto-step'))
						{
							
							if(the_field.closest('.step').hasClass('last_step'))
								{
								setTimeout(function()
									{
									the_field.closest('form').submit();
									},500);
								}
							else
								{
								setTimeout(function()
										{	
											the_field.closest('.step ').find('.nex-step').trigger('click');	
										},300
									)
								}
						}
					
					}
				
					if(input.prop('checked'))
						{
						input.prop('checked', false);
						nexCheckable.attr('class','ui-state-default');
							nexCheckable.css('background','#fff');
						input_label.removeClass('radio_selected');
						nexCheckable.parent().find('.check-icon').remove();
						} 
					else 
						{
						
						input.prop('checked', true);
						nexCheckable.attr('class','checked');
						nexCheckable.addClass("ui-state-active").removeClass("ui-state-default")
						input_label.addClass('radio_selected');
						if(nexCheckable.closest('#the-radios').data('checked-bg-color') && nexCheckable.closest('#the-radios').data('checked-bg-color')!='')
							nexCheckable.css('background',nexCheckable.closest('#the-radios').attr('data-checked-bg-color'));
						else
							nexCheckable.css('background','#8bc34a');
						
						var checked_color = '#ffffff';
						
						if(nexCheckable.css('color')!='transparent' && nexCheckable.css('color')!='undefined' && nexCheckable.css('color')!='' && nexCheckable.css('color')!='rgba(0, 0, 0, 0)')
							checked_color = nexCheckable.css('color');
							
						nexCheckable.after('<span style="color:'+ checked_color +';" class="check-icon checked fa '+ nexCheckable.closest('.the-radios').attr('data-checked-class')+'"></span>' );
						
						nexCheckable.addClass('animated').addClass('pulse');
						setTimeout(function(){ nexCheckable.removeClass('animated').removeClass('pulse');},1300);
						
						}	
						
					input.trigger('change');
					}		
				
			);
		

	
	
	
	
	
	jQuery(document).on('click','.nf-sticky-contact-form.paddel-right .nf-sticky-paddel',
		function()
			{
			
					
			var sticky_form = jQuery(this).closest('.nf-sticky-contact-form');
			
			var sticky_width = sticky_form.outerWidth();
			
			if(sticky_form.hasClass('open'))
				{
				sticky_form.removeClass('open');
				sticky_form.animate(
					{
					marginRight:-sticky_width
					}
				,300);
				}
			else
				{
				jQuery('.nf-sticky-contact-form.paddel-right.open .nf-sticky-paddel').trigger('click')
				sticky_form.animate(
					{
					marginRight:-4
					}
				,300);
				sticky_form.addClass('open')
				}
			}
		);
		
	
	jQuery(document).on('click','.nf-sticky-contact-form.paddel-left .nf-sticky-paddel',
		function()
			{
			var sticky_form = jQuery(this).closest('.nf-sticky-contact-form');
			
			var sticky_width = sticky_form.outerWidth();
			
			if(sticky_form.hasClass('open'))
				{
				sticky_form.removeClass('open');
				sticky_form.animate(
					{
					marginLeft:-sticky_width
					}
				,300);
				}
			else
				{
				jQuery('.nf-sticky-contact-form.paddel-left.open .nf-sticky-paddel').trigger('click')
				sticky_form.animate(
					{
					marginLeft:-4
					}
				,300);
				sticky_form.addClass('open')
				}
			}
		);
	
	jQuery(document).on('click','#nex-forms .input-group-addon',
		function()
			{
				jQuery(this).closest('.input_container').find('input').focus();
			}
		);	
	 	
		
		
		
		
		
		
		
		
		
		
		
	jQuery(document).on('click','.open_nex_forms_popup',
		function(e)
			{
			e.preventDefault();
			run_parent_css_reset(jQuery(this).attr('data-popup-id'))
			
			var form = jQuery(this).closest('#nex-forms').find('form');
			
			var default_values = jQuery(this).attr('data-default-values');
			
			
			
			if(default_values)
				{
				var get_defaults = default_values.split(',');
				for (var i = 0; i < get_defaults.length; i++) 
					{
						
					var get_name_val = get_defaults[i].split('=');
					var the_input = form.find('input[name="'+ get_name_val[0].trim() +'"]')
					var pre_val = get_name_val[1].trim();
					
					if(the_input.hasClass('the_slider'))
						{
						the_input.parent().find('#slider').slider({ value: parseInt(pre_val) });
						the_input.parent().find('.count-text').text(pre_val);
						the_input.parent().find( 'input' ).val(parseInt(pre_val));
						the_input.parent().find( 'input' ).trigger('change');
						}
					form.find('select[name="'+ get_name_val[0] +'"] option').attr('selected',false);
					form.find('select[name="'+ get_name_val[0] +'"] option[value="'+pre_val+'"]').attr('selected','selected');

					
					//CHECKS
					form.find('input[name="'+ get_name_val[0] +'[]"]').each(
						function()
							{
							if(jQuery(this).val()==pre_val)
								{
								var get_check = jQuery(this).parent().find('a');

								setTimeout(function(){ get_check.trigger('click') },200);
								}
							}
						)
					//INPUTS
					if(the_input.attr('type')=='text')
						{
						the_input.val(pre_val)
						}
					if(the_input.attr('type')=='hidden')
						{
						the_input.val(pre_val)
						}
					if(the_input.attr('type')=='radio')
						{
						the_input.closest('.the-radios').find('input').each(
							function()
								{
								if(jQuery(this).val()==pre_val)
									{
									var get_radio = jQuery(this).parent().find('a');
									setTimeout(function(){ get_radio.trigger('click') },200);
									}	
								}
							);
						}
						
					//CHECKS
					form.find('textarea[name="'+ get_name_val[0] +'"]').val(pre_val);

					
					}
				}
				
			jQuery(this).closest('#nex-forms').find('#nexForms_popup_'+jQuery(this).attr('data-popup-id')).modal('open');
			}
		)
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	jQuery(document).on('click','.modal-overlay, #nex-forms .modal-close', function()
			{
			jQuery.each(parent_css_resets, function(key, value)
				{
				value.element.css('position',value.position)
				});
			}
		);
		
		
	jQuery(document).on('mouseover', '.ui-state-default', function(){
			jQuery(this).addClass('ui-state-hover');
			}
		);
	jQuery(document).on('mouseleave', '.ui-state-default', function(){
			jQuery(this).removeClass('ui-state-hover');
			}
		);

	jQuery(document).on('keyup','#autocomplete',
		function()
			{
			jQuery('.ui-autocomplete').addClass('dropdown-menu');
			}
		);
	
	
	jQuery(document).on('click', '.input-group-addon.color-select', function(){
			jQuery(this).parent().addClass('open');	
			}
		);
	jQuery(document).on('click', '.selectpicker', function(){
			jQuery(this).parent().addClass('open');
			}
		);
	jQuery(document).on('click', '#star .fa', function(){
			jQuery(this).parent().find('input').trigger('change');
			}
		);	

	jQuery(document).on('click', '.bootstrap-touchspin-down, bootstrap-touchspin-up', function(){
			jQuery(this).parent().parent().find('input').trigger('change');
			}
		);	
		
	jQuery('div.ui-nex-forms-container .zero-clipboard, div.ui-nex-forms-container .field_settings').remove();
	jQuery('div.ui-nex-forms-container .grid').removeClass('grid-system')
	jQuery('div.ui-nex-forms-container .editing-field-container').removeClass('.editing-field-container')
	jQuery('div.ui-nex-forms-container #slider').html('');
	
	jQuery('div.ui-nex-forms-container #star').each(
		function()
			{
			jQuery(this).attr('data-input-name', jQuery(this).find('input').attr('name'));
			}
		);
	
	if(get_raty!='disabled')
		{
		jQuery('div.ui-nex-forms-container #star' ).raty('destroy');
		
		}
	jQuery('div.ui-nex-forms-container .bootstrap-touchspin-prefix').remove();
	jQuery('div.ui-nex-forms-container .bootstrap-select').remove();
	jQuery('div.ui-nex-forms-container .bootstrap-touchspin-postfix').remove();
	jQuery('div.ui-nex-forms-container .bootstrap-touchspin .input-group-btn').remove();
	jQuery('div.ui-nex-forms-container .bootstrap-tagsinput').remove();
	
	jQuery('div.ui-nex-forms-container .editing-field').removeClass('editing-field')
	jQuery('div.ui-nex-forms-container .editing-field-container').removeClass('.editing-field-container')
	jQuery('div.ui-nex-forms-container').find('div.trash-can').remove();
	jQuery('div.ui-nex-forms-container').find('div.draggable_object').hide();
	jQuery('div.ui-nex-forms-container').find('div.draggable_object').remove();
	jQuery('div.ui-nex-forms-container').find('div.form_field').removeClass('field');
	
	jQuery('div.ui-nex-forms-container .zero-clipboard').remove();
	
	
	jQuery('div.ui-nex-forms-container').each(
		function()
			{
			jQuery(this).find('.step').hide()
			jQuery(this).find('.step').first().show();	
			}
		);
	jQuery('div.ui-nex-forms-container .tab-pane').removeClass('tab-pane');
			
	jQuery('div.ui-nex-forms-container .form_field').each(
		function(index)
			{
			var the_element = jQuery(this);
			
			if(jQuery(this).find('.appendix_field').is('div'))
				the_element.css('z-index',1000-index);
			else
				the_element.css('z-index','');
				
			setup_ui_element(the_element);
			
			if(the_element.hasClass('material_field'))
				{
					if(the_element.find('i.material-icons').attr('class'))
						the_element.addClass('has_icon');
					else
						the_element.addClass('no_icon');
				}
			
			if(the_element.hasClass('select') || the_element.hasClass('multi-select') || the_element.hasClass('radio-group') || the_element.hasClass('check-group') || the_element.hasClass('md-select') || the_element.hasClass('md-multi-select') || the_element.hasClass('md-radio-group')  || the_element.hasClass('jq-radio-group') || the_element.hasClass('jq-check-group'))
				{
				if(the_element.hasClass('md-select'))
					{
					var the_input = the_element.find('select.the_input_element');
					}
				else
					{
					var the_input = the_element.find('.the_input_element');
					
					}	
					the_element.append('<input type="hidden" class="the_value" name="real_val__'+ the_input.attr('name') +'">'); 
				}
			
			}
		);	
	
	
	
	
	
		
	jQuery('.ui-nex-forms-container select').each(
		function()
			{
			if(jQuery(this).closest('.form_field').hasClass('md-select') && jQuery(this).closest('.form_field').hasClass('md-select'))
				jQuery(this).closest('.form_field').find('input.the_value').val(jQuery(this).closest('.form_field').find('input.select-dropdown').val());
			else
				jQuery(this).closest('.form_field').find('input.the_value').val(jQuery(this).find('option:selected').text());	
			}
		);
	
	jQuery(document).on('change','.ui-nex-forms-container select', 
		function()
			{
			if(jQuery(this).closest('.form_field').hasClass('md-select') && jQuery(this).closest('.form_field').hasClass('md-select'))
				jQuery(this).closest('.form_field').find('input.the_value').val(jQuery(this).closest('.form_field').find('input.select-dropdown').val());
			else
				jQuery(this).closest('.form_field').find('input.the_value').val(jQuery(this).find('option:selected').text());	
			}
		);
	jQuery(document).on('click','.md-radio-group .radio_check_input label',
		function()
			{
			var input = jQuery(this);
			setTimeout(	function(){
				input.closest('.form_field').find('input.the_value').val(input.html());
			},300);
			
			}
		);
	jQuery(document).on('change','.ui-nex-forms-container input[type="radio"]',
		function()
			{
			if(!jQuery(this).closest('.form_field').hasClass('md-radio-group'))
				jQuery(this).closest('.form_field').find('input.the_value').val(jQuery(this).closest('label').find('.input-label').html());
			}
		);
		
	jQuery(document).on('change','.ui-nex-forms-container input[type="checkbox"]',
		function()
			{
			var selected = '';
				jQuery(this).closest('.form_field').find('.input-inner a').each(function() {
					
					if(jQuery(this).hasClass('checked'))
						selected +=  '- ' + jQuery(this).parent().parent().find('.check-label').text() + ' ' ;
					
				});
				jQuery(this).closest('.form_field').find('input.the_value').val(selected);
			}
		);
		
	
	
	jQuery('input[type="radio"]').each(
		function()
			{
			jQuery(this).prop('checked',false);
			}
		);
	jQuery('input[type="checkbox"]').each(
		function()
			{
			jQuery(this).prop('checked',false);
			}
		);
	
	jQuery('a.checked').each(
		function()
			{
			jQuery(this).parent().find('input').prop('checked',true);
			jQuery(this).parent().find('input').trigger('change');
			}
	);
	
	
	jQuery('.color_scheme').each(
		function()
			{
			if(jQuery(this).attr('href')=='')
				jQuery(this).attr('href','#');
				
			var the_css = jQuery(this);
			var move_css = the_css.clone();
			
			jQuery('head').append(move_css)
			the_css.remove();
			
			}
		);
	
	
	Materialize.updateTextFields();
	
	jQuery(document).on('blur','textarea.materialize-textarea, input',
			function()
				{
				if(!jQuery(this).val() && (jQuery(this).attr('placeholder')==''))
					jQuery(this).parent().find('#md_label').removeClass('active');
				}
			
		);
	
	
	jQuery("input, textarea").attr('autocomplete', 'disabled');

	var sticky_form_bottom_height = jQuery('.nf-sticky-contact-form.paddel-bottom').height();
	var sticky_paddel_height = jQuery('.nf-sticky-contact-form .nf-sticky-paddel').height();
	
	var set_bottom_margin = (sticky_form_bottom_height + sticky_paddel_height+3 + jQuery('.nf-sticky-contact-form.paddel-bottom .panel-heading').height()-15);
	var set_open_margin = (sticky_form_bottom_height - sticky_paddel_height+3);
		
	var diff = set_bottom_margin - 300; 
	
	jQuery('.nf-sticky-contact-form.paddel-bottom .panel').css('overflow-x','hidden')
	
	if(set_bottom_margin>300)	
		jQuery('.nf-sticky-contact-form.paddel-bottom .panel').css('overflow-y','scroll').css('height',(300-diff+sticky_paddel_height+8)+'px');
	
	
	jQuery(document).on('click','.nf-sticky-contact-form.paddel-bottom .nf-sticky-paddel',
		function()
			{
			var sticky_form = jQuery(this).closest('.nf-sticky-contact-form');
			if(sticky_form.hasClass('open'))
				{
				sticky_form.removeClass('open');
				sticky_form.animate(
					{
					marginBottom:-300
					}
				,300);
				}
			else
				{
				sticky_form.animate(
					{
					marginBottom:0
					}
				,300);
				sticky_form.addClass('open')
				}
			}
		);
	
	
	
	
	
	
	
	
	
	
	jQuery('.popover').remove();
	
	var sticky_form_top_height = jQuery('.nf-sticky-contact-form.paddel-top').height();
	
	var set_top_margin = (sticky_form_top_height + sticky_paddel_height+ 3 + jQuery('.nf-sticky-contact-form.paddel-top .panel-heading').height()-15);
	
	
	var diff2 = set_top_margin - 300; 
	
	if(set_top_margin>300)	
		jQuery('.nf-sticky-contact-form.paddel-top .panel').css('overflow-y','scroll').css('height',(300-diff2+sticky_paddel_height+8)+'px');
	
	
	jQuery('.nf-sticky-contact-form.paddel-top .nf-sticky-paddel').click(
		function()
			{
			var sticky_form = jQuery(this).closest('.nf-sticky-contact-form');
			if(sticky_form.hasClass('open'))
				{
				sticky_form.removeClass('open');
				sticky_form.animate(
					{
					marginTop:-300
					}
				,300);
				}
			else
				{
				sticky_form.animate(
					{
					marginTop:-4
					}
				,300);
				sticky_form.addClass('open')
				}
			}
		);


(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field, textarea.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();	
			
	}
);
function IsSafari() {

  var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
 
  if(navigator.userAgent.toLowerCase().indexOf('chrome/') >-1)
  	is_safari = false;
  if(navigator.userAgent.toLowerCase().indexOf('opera/') >-1)
  	is_safari = false;
	
  return is_safari;

}			
	

function isNumber(n) {
   if(n!='')
   		{
		n = n.replace(',','');
		return !isNaN(parseFloat(n)) && isFinite(n);
		}
	return true;
}
function run_con_action(target,action){
			
	if(action=='show')
		jQuery('#'+target).show();
	if(action=='hide')
		{
		jQuery('#'+target).hide();
		var el     = jQuery('#'+target);
		var newone = el.clone();
		setup_ui_element(newone);
		   
		el.before(newone);
		el.remove();
		}
	if(action=='slideDown')
		jQuery('#'+target).slideDown('slow');
	if(action=='slideUp')
		jQuery('#'+target).slideUp('slow');
	if(action=='fadeIn')
		jQuery('#'+target).fadeIn('slow');
	if(action=='fadeOut')
		jQuery('#'+target).fadeOut('slow');
	
}
function reverse_con_action(target,action){
	if(action=='show')
		{
		jQuery('#'+target).hide();
		var el     = jQuery('#'+target);
		var newone = el.clone();
		setup_ui_element(newone);
		   
		el.before(newone);
		el.remove();
		}
	if(action=='hide')
		jQuery('#'+target).show();
	if(action=='slideDown')
		jQuery('#'+target).slideUp('slow');
	if(action=='slideUp')
		jQuery('#'+target).slideDown('slow');
	if(action=='fadeIn')
		jQuery('#'+target).fadeOut('slow');
	if(action=='fadeOut')
		jQuery('#'+target).fadeIn('slow');
}

function convert_time_to_24h(time){

var hours = Number(time.match(/^(\d+)/)[1]);
var minutes = Number(time.match(/:(\d+)/)[1]);
var AMPM = time.match(/\s(.*)$/)[1];
if(AMPM == "PM" && hours<12) hours = hours+12;
if(AMPM == "AM" && hours==12) hours = hours-12;
var sHours = hours.toString();
var sMinutes = minutes.toString();
if(hours<10) sHours = "0" + sHours;
if(minutes<10) sMinutes = "0" + sMinutes;
return sHours + ":" + sMinutes;

	
}

function run_conditions(){
	jQuery('div.ui-nex-forms-container div.form_field').find('input[type="text"], textarea').keyup(
		function()
			{
			if(jQuery(this).hasClass('has_con'))
				{
				var val = jQuery(this).val();
				jQuery('.field_'+jQuery(this).closest('.form_field').attr('id')).each(
					function()
						{
						var condition = jQuery(this).attr('data-condition');
						var action = jQuery(this).attr('data-action');
						var target = jQuery(this).attr('data-target');
						var value = jQuery(this).attr('data-value');
						switch(condition)
							{
							case 'Equal to':
								if(val==value)
									{
									run_con_action(target,action);
									}
								else
									reverse_con_action(target,action);
							break;
							case 'Greater than':
								if(isNumber)
									{
									if(parseInt(val)>parseInt(value))
										{
										run_con_action(target,action);
										}
										
									}
							break;
							case 'Less than':
								if(isNumber)
									{
									if(parseInt(val)<parseInt(value))
										{
										run_con_action(target,action);
										}
									}
							break;
							}
						}
					);
				}
			}
		);	
	jQuery(document).on('change', 'div.ui-nex-forms-container div.form_field input[type="text"], div.ui-nex-forms-container div.form_field input[type="hidden"], div.ui-nex-forms-container div.form_field textarea', function(){

			if(jQuery(this).hasClass('has_con'))
				{
				var val = jQuery(this).val();
				jQuery('.field_'+jQuery(this).closest('.form_field').attr('id')).each(
					function()
						{
						var condition = jQuery(this).attr('data-condition');
						var action = jQuery(this).attr('data-action');
						var target = jQuery(this).attr('data-target');
						var value = jQuery(this).attr('data-value');
						switch(condition)
							{
							case 'Equal to':
								if(val==value)
									{
									run_con_action(target,action);
									}
								else
									reverse_con_action(target,action);
							break;
							case 'Greater than':
								if(isNumber)
									{
									if(parseInt(val)>parseInt(value))
										{
										run_con_action(target,action);
										}
										
									}
							break;
							case 'Less than':
								if(isNumber)
									{
									if(parseInt(val)<parseInt(value))
										{
										run_con_action(target,action);
										}
									}
							break;
							}
						}
					);
				}
			}
		);
	
	
	
		
		
		jQuery(document).on('click', 'div.ui-nex-forms-container div.form_field .prettyradio a, div.ui-nex-forms-container div.form_field span.radio-label', function(){
					var the_radio = jQuery(this).parent().find('input[type="radio"]');
					if(the_radio.hasClass('has_con'))
						{
						var val = the_radio.val();
						jQuery('.field_'+the_radio.closest('.form_field').attr('id')).each(
							function()
								{
								var action = jQuery(this).attr('data-action');
								var target = jQuery(this).attr('data-target');
								var value = jQuery(this).attr('data-value');
								
								if(val==value)
									run_con_action(target,action);
								else
									reverse_con_action(target,action);
								
								}
							);
						}
					}
				);	
		
}

function setup_ui_element(obj){
	
	var save_form_progres = obj.closest('.ui-nex-forms-container').find('#nf_save_form_progress').text();
	
	
	if(save_form_progres && save_form_progres=='true')
		{
			obj.find('input[type="text"]').inputStore(
				{
				expire: 120,
				name: obj.find('input').attr("name")
				}
			);
			obj.find('input[type="radio"]').inputStore(
				{
				expire: 120,
				name: obj.find('input').attr("name")
				}
			);
			obj.find('input[type="checkbox"]').inputStore(
				{
				expire: 120,
				name: obj.find('input').attr("name")
				}
			);
			obj.find('textarea').inputStore(
				{
				expire: 120,
				name: obj.find('textarea').attr("name")
				}
			);
			
			obj.find('select').inputStore(
				{
				expire: 120,
				name: obj.find('select').attr("name")
				}
			);
		}
	
	jQuery('div.ui-nex-forms-container').find('.customcon').each(
		function()
			{
			if(obj.attr('id')==jQuery(this).attr('data-target') && (jQuery(this).attr('data-action')=='show' || jQuery(this).attr('data-action')=='slideDown' || jQuery(this).attr('data-action')=='fadeIn'))
				jQuery('div.ui-nex-forms-container #'+obj.attr('id')).hide();
			}
	);
	
	if(obj.hasClass('date') && !obj.hasClass('classic_field'))
		{
		obj.find('#datetimepicker').datetimepicker( 
				{ 
				
				minDate: (obj.find('#datetimepicker').attr('data-disable-past-dates')=='1') ? new Date() : false,
				format: (obj.find('#datetimepicker').attr('data-format')) ? obj.find('#datetimepicker').attr('data-format') : 'MM/DD/YYYY',
				locale: (obj.find('#datetimepicker').attr('data-language')) ? obj.find('#datetimepicker').attr('data-language') : 'en',
				defaultDate: new Date(),
				} 
			);	
		}	
	if(obj.hasClass('time') && !obj.hasClass('classic_field'))
		{
		obj.find('#datetimepicker input').datetimepicker(
				{
				format: (obj.find('#datetimepicker').attr('data-format')) ? obj.find('#datetimepicker').attr('data-format') : 'HH:mm',
				locale:(obj.find('#datetimepicker').attr('data-language')) ? obj.find('#datetimepicker').attr('data-language') : 'en'
				}
			);
		}
	
	
	if(obj.hasClass('jq-time-picker') || (obj.hasClass('classic_field') && obj.hasClass('time')))
		{
		obj.find('input').timepicker()
		}
	if(obj.hasClass('jq-datepicker') || (obj.hasClass('classic_field') && obj.hasClass('date')))
		{
		if((obj.find('#datetimepicker').attr('data-disable-past-dates')=='1'))
			{	
			 obj.find('#datetimepicker input').datepicker(
					{
					minDate: (obj.find('#datetimepicker').attr('data-disable-past-dates')=='1') ? new Date() : false,
					}
				
				 );
			}
		else
			{
			 obj.find('#datetimepicker input').datepicker({});
			}
		}
	
	if(obj.hasClass('md-datepicker'))
		{
			obj.find('input').bootstrapMaterialDatePicker({
				name: 'test100',
				time: false,
				clearButton:false,
				nowButton:false,
				cancelText: '<span class="fa fa-close"></span>', 
				okText: '<span class="fa fa-check"></span>', 
				format: (obj.find('#datetimepicker').attr('data-format')) ? obj.find('#datetimepicker').attr('data-format') : 'MM/DD/YYYY',
				lang : (obj.find('#datetimepicker').attr('data-language')) ? obj.find('#datetimepicker').attr('data-language') : 'en',
		  }).on('open', function(e, date)
			{
			var get_theme = jQuery(this).closest('.set_form_theme').attr('class');
			
			var set_theme = get_theme.replace('set_form_theme','');
			
			jQuery('#'+jQuery(this).attr('data-dtp')).addClass(set_theme);
			});
		  if(obj.find('#datetimepicker').attr('data-disable-past-dates')=='1')
		  	obj.find('input').bootstrapMaterialDatePicker('setMinDate', new Date());
			
		obj.find('input').bootstrapMaterialDatePicker('setDate', new Date());
		}
   if(obj.hasClass('md-time-picker'))
		{
		obj.find('input').bootstrapMaterialDatePicker({ date: false, shortTime: false, format: 'HH:mm', cancelText: '<span class="fa fa-close"></span>', 
		okText: '<span class="fa fa-check"></span>',  })
		}
	
	
	if(obj.hasClass('icon-select-group'))
		{
		obj.find('.the-icon-field-container').removeAttr('name');
		}
	
	
	if(obj.hasClass('paragraph') || obj.hasClass('heading') || obj.hasClass('html') || obj.hasClass('math_logic'))
		{
		if(obj.find('.the_input_element').attr('data-original-math-equation')!='')
			{
			var text = obj.find('.the_input_element').html();
			if(text && strstr(text,'{math_result}'))
				{
				var set_text = text.replace('{math_result}','<span class="math_result">0</span>');
				obj.find('.the_input_element').html(set_text);
				}
		
			set_up_math_logic(obj.find('.the_input_element'));
			set_up_math_logic(obj.find('.set_math_result'));
			run_math_logic(obj.find('.the_input_element'))
			}
		}
	if(obj.hasClass('digital-signature'))
		{
		obj.find('.js-signature').jqSignature();
		}
	if(obj.hasClass('nf-color-picker'))
		{
		obj.find('.colorpicker-component').colorpicker();
		}
		
	if(obj.hasClass('field-replication-enabled'))
		{
		if(!strstr(obj.find('.the_input_element').attr('name'),'['))
			obj.find('.the_input_element').attr('name',obj.find('.the_input_element').attr('name')+'[]');	
		}
	if(obj.hasClass('text') || obj.hasClass('textarea'))
		{
			if(obj.find('.the_input_element').attr('data-default-value')!='')
				obj.find('.the_input_element').val(obj.find('.the_input_element').attr('data-default-value'));
		}
	if(obj.hasClass('datetime'))
		{
		obj.find('#datetimepicker').datetimepicker( 
				{ 
				format: (obj.find('#datetimepicker').attr('data-format')) ? obj.find('#datetimepicker').attr('data-format') : 'MM/DD/YYYY hh:mm A',
				locale: (obj.find('#datetimepicker').attr('data-language')) ? obj.find('#datetimepicker').attr('data-language') : 'en'
				} 
			);	
		}
	
	
	
	
	
		
	if(obj.hasClass('touch_spinner'))
		{
		var the_spinner = obj.find("#spinner");
		the_spinner.TouchSpin({
			verticalbuttons: (the_spinner.attr('data-verticalbuttons')=='true') ? true : false,
			initval: parseFloat(the_spinner.attr('data-starting-value')),
			min:  parseFloat(the_spinner.attr('data-minimum')),
			max:  parseFloat(the_spinner.attr('data-maximum')),
			step:  parseFloat(the_spinner.attr('data-step')),
			decimals:  parseInt(the_spinner.attr('data-decimals')),
			boostat: 5,
			maxboostedstep: 10,
			postfix: (the_spinner.attr('data-postfix-icon')) ? '<span class="'+ the_spinner.attr('data-postfix-icon') +' '+ the_spinner.attr('data-postfix-class') +'">' + the_spinner.attr('data-postfix-text') + '</span>' : '',
			prefix: (the_spinner.attr('data-prefix-icon')) ? '<span class="'+ the_spinner.attr('data-prefix-icon') +' '+ the_spinner.attr('data-prefix-class') +'">' + the_spinner.attr('data-prefix-text') + '</span>' : '',
			buttondown_class:  'btn ' + the_spinner.attr('data-down-class'),
			buttonup_class: 'btn ' + the_spinner.attr('data-up-class')
		});
		}
	if(obj.hasClass('color_pallet'))
		{
		
		obj.find('#colorpalette').colorPalette().on('selectColor', function(e) {
		obj.find('#selected-color').val(e.color);
		obj.find('#selected-color').trigger('change');
		obj.find('.input-group-addon').css('background',e.color);
		});	
		}
	
	
	
	
	if(obj.hasClass('slider'))
		{
		var count_text = obj.find( "#slider" ).attr('data-starting-value');
		var the_slider = obj.find( "#slider" )
		var set_min = the_slider.attr('data-min-value');
		var set_max = the_slider.attr('data-max-value')
		var set_start = the_slider.attr('data-starting-value');
		var set_step = the_slider.attr('data-step-value')

		obj.find( "#slider" ).slider({
				range: "min",
				min: parseFloat(set_min),
				max: parseFloat(set_max),
				value: parseFloat(set_start),
				step: parseFloat(set_step),
				slide: function( event, ui ) {	
					if(nf_isFloat(set_step))
						{
						var get_step = set_step;
						get_step = get_step.split('.');
						var decimal_places = get_step[1].length;
						obj.find('.count-text').html(the_slider.attr('data-count-text').replace('{x}',parseFloat(ui.value).format(decimal_places)));
						}
					else
						{
						obj.find('.count-text').html(the_slider.attr('data-count-text').replace('{x}',parseFloat(ui.value).format(0)));
						}
					obj.find( 'input' ).val(ui.value);
					obj.find( 'input' ).trigger('change');
				},
				create: function( event, ui ) {	
					count_text = '<span class="count-text">'+ the_slider.attr('data-count-text').replace('{x}',((set_start) ? set_start : set_min)) +'</span>';	
					the_slider.find( '.ui-slider-handle' ).html( '<span id="icon" class="'+ the_slider.attr('data-dragicon') +'"></span> '+ count_text).addClass(the_slider.attr('data-dragicon-class')).removeClass('ui-state-default');
					obj.find( 'input' ).val(parseFloat(set_start));
					obj.find( 'input' ).trigger('change');
					var handle = the_slider.find( '.ui-slider-handle' );
					handle.removeClass('btn').removeClass('btn-default');
					
					handle.css('background',the_slider.attr('data-handel-background-color'))
					handle.css('border-color',the_slider.attr('data-handel-border-color'))
					handle.css('color',the_slider.attr('data-text-color'))
					
					the_slider.find('.ui-slider-range').css('background',the_slider.attr('data-fill-color'));
					
				}
				
			});
		}
	
	if(obj.hasClass('md-slider'))
		{
		var count_text = obj.find( "#slider" ).attr('data-starting-value');
		var the_slider = obj.find( "#slider" )
		var set_min = the_slider.attr('data-min-value');
		var set_max = the_slider.attr('data-max-value')
		var set_start = the_slider.attr('data-starting-value');
		var set_step = the_slider.attr('data-step-value')

		obj.find( "#slider" ).slider({
				range: "min",
				min: parseInt(set_min),
				max: parseInt(set_max),
				value: parseInt(set_start),
				step: parseInt(set_step),
				slide: function( event, ui ) {	
				
				obj.find('.count-text').html(the_slider.attr('data-count-text').replace('{x}',parseInt(ui.value).format(0)));
				
				obj.find( 'input' ).val(ui.value);
				obj.find( 'input' ).trigger('change');
				
				},
				create: function( event, ui ) {	
					count_text = '<span class="noUi-tooltip"><span class="count-text">'+ the_slider.attr('data-count-text').replace('{x}',((set_start) ? parseInt(set_start).format(0) : parseInt(set_min).format(0))) +'</span></span>';	
					the_slider.find( '.ui-slider-handle' ).html( count_text).addClass(the_slider.attr('data-dragicon-class')).removeClass('ui-state-default');
					
					the_slider.find( '.ui-slider-handle' ).addClass('noUi-handle noUi-handle-lower ').removeClass('btn').removeClass('btn-default');
					
				}
				
			});
			
		}			
	if(obj.hasClass('star-rating'))
		{
		obj.find('#star').raty({
		  size     : 24,
		  number   : parseInt(obj.find('#star').attr('data-total-stars')),
		  scoreName: format_illegal_chars(obj.find('.the_label').text()),
		  half: (obj.find('#star').attr('data-enable-half')=='false') ? false : true 
		});
		
		obj.find('#star input').attr('name', obj.find('#star').attr('data-input-name'));
		

		
		
		}
	
	if(obj.hasClass('email'))
		{
		}
	if(obj.hasClass('tags'))
		{	
		var the_tag_input = obj.find('input#tags');
		 the_tag_input.tagsinput( {maxTags: (the_tag_input.attr('data-max-tags')) ? the_tag_input.attr('data-max-tags') : '' });
		 
		obj.find('.bootstrap-tagsinput input').css('color',the_tag_input.attr('data-text-color'));
		obj.find('.bootstrap-tagsinput').css('border-color',the_tag_input.attr('data-border-color'));
		obj.find('.bootstrap-tagsinput').css('background-color',the_tag_input.attr('data-background-color'));
		}
	
	
		
	if(obj.hasClass('autocomplete'))
		{
		var items = obj.find('div.get_auto_complete_items').text();
		items = items.split('\n');
		obj.find("#autocomplete").autocomplete({
			source: items
			});	
		}
		
		
	
	if(jQuery('.field_'+obj.attr('id')).attr('data-target'))
		{
		obj.find('input[type="text"]').addClass('has_con');
		obj.find('input[type="hidden"]').addClass('has_con');
		obj.find('textarea').addClass('has_con');
		obj.find('select').addClass('has_con');
		obj.find('input[type="radio"]').addClass('has_con');
		}
	
}
function format_illegal_chars(input_value){
	
	input_value = input_value.toLowerCase();
	if(input_value=='name' || input_value=='page' || input_value=='post' || input_value=='id')
		input_value = '_'+input_value;
		
	var illigal_chars = '-+=!@#$%^&*()*{}[]:;<>,.?~`|/\'';
	
	var new_value ='';
	
    for(var i=0;i<input_value.length;i++)
		{
		if (illigal_chars.indexOf(input_value.charAt(i)) != -1)
			{
			input_value.replace(input_value.charAt(i),'');
			}
		else
			{
			if(input_value.charAt(i)==' ')

			new_value += '_';
			else
			new_value += input_value.charAt(i);
			}
		}
	return new_value;	
}


function colorToHex(color) {
	if(!color)
		return;
	
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    if(!digits)
		return '#FFF';
	
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
};

function strstr(haystack, needle, bool) {
    var pos = 0;

    haystack += "";
    pos = haystack.indexOf(needle); if (pos == -1) {
       return false;
    } else {
       return true;
    }
}


function show_nf_error(obj, error){
	obj.addClass('nf-has-error');
	obj.find('.success_msg').remove();
	var extra_padding = '';
	var input_lg = '';
	
	if(obj.hasClass('appendix_field'))
		{
			
		}
	else
		{
		if(!obj.find('.error_msg').attr('class'))
			{
			if(obj.hasClass('md-select'))
				{
				if(obj.find('i.material-icons').attr('class'))
					obj.find('.select-wrapper').parent().append('<div class="error_msg indent fadeInRight animated">'+ error +'</div>');
				else
					obj.find('.select-wrapper').parent().append('<div class="error_msg fadeInRight animated">'+ error +'</div>');
				}
			else
				{
				if(obj.find('.error_message').hasClass('input-lg'))
					input_lg='input_large';
				
				if(!obj.find('.input-group-addon').hasClass('prefix'))
					extra_padding='extra_padding';
				
				if(obj.find('i.material-icons').attr('class'))
					obj.find('.error_message').parent().after('<div class="error_msg indent fadeInRight animated">'+ error +'</div>');
				else
					{
					if(!obj.hasClass('material_field'))
						obj.find('.error_message').parent().after('<div data-toggle="tooltip" data-title="'+ error +'" title="'+ error +'" class="error_msg modern '+ input_lg +' '+ extra_padding +'"><i class="fa fa-warning"></i></div></div>');
					}
				
				
				
				jQuery('.appendix_field .error_msg').remove();
				obj.removeClass('has_success');
				obj.addClass('has_error');
				}
			jQuery('.error_msg[data-toggle="tooltip"]').tooltip_bs(); 
			}
		}
}

function hide_nf_error(obj){

	if(!obj.hasClass('has_error'))
		return;

	
	obj.removeClass('nf-has-error');
	obj.removeClass('has_error');
	
	obj.find('.input_container').removeClass('animated2').removeClass('shake');
	var extra_padding = '';
	var input_lg = '';
	if(!obj.find('.success_msg').attr('class'))
		{
			
		if(obj.find('.error_message').hasClass('input-lg'))
			input_lg='input_large';
			
		if(!obj.find('.input-group-addon').hasClass('prefix'))
			extra_padding='extra_padding';
		
		if(!obj.hasClass('radio-group') && !obj.hasClass('check-group') && !obj.hasClass('multi-image-select-group') && !obj.hasClass('single-image-select-group'))
			obj.find('.error_message').parent().after('<div class="success_msg modern '+ input_lg +' '+ extra_padding +' "><i class="fa fa-check"></i></div>');	
		
		
		obj.find('.error_msg').remove();
		
		obj.addClass('has_success');
		
		obj.find('.success_msg.modern').addClass('animated').addClass('bounceIn');
		
		jQuery('.appendix_field .success_msg').remove();
		
		setTimeout(function(){ obj.removeClass('has_success'); obj.find('.success_msg').hide(); },1750);
		}
}

function nf_get_total_steps(the_form){
	
	return the_form.find('.step').size();
}

function nf_replace_tags(the_form,obj){
	var str = obj.html();
	var re = /\{{2}(.*?)\}{2}/g;
	var found = str.match(re);
	var get_field_name = '';
	var set_field_name = '';
	var the_input = '';
	
	if(found)
		{
		
		var arrayLength = found.length;
		for (var i = 0; i < arrayLength; i++) 
			{
			get_field_name = found[i].replace('{{','').replace('}}','')
			the_input = the_form.find('[name="'+ get_field_name +'"]');
			if(the_input.attr('type')=='radio')
				set_field_name = the_form.find('[name="'+ get_field_name +'"]:checked').val();
			else if(the_input.attr('type')=='checkbox')
				{
				if(the_input.prop('checked'))
					{
					set_field_name =  the_input.closest('.form_field').find('input.the_value').val();
					}
				else
					set_field_name =  '';
				}
			else 
				set_field_name = the_form.find('[name="'+ get_field_name +'"]').val();
				
			if(set_field_name!='0')
				obj.html(obj.html().replace(found[i], '<span data-field-name="'+ get_field_name+'">' + set_field_name +'</span>' ));
			else	
				obj.html(obj.html().replace(found[i], '' ));
			}
		}
	else
		{
		var is_span = obj.find('span');
		if(is_span)
			{
			is_span.each(
				function()
					{
					get_field_name = jQuery(this).attr('data-field-name');
					if(get_field_name)
						{
						the_input = the_form.find('[name="'+ get_field_name +'"]');
						if(the_input.attr('type')=='radio')
							set_field_name = the_form.find('[name="'+ get_field_name +'"]:checked').val();
						else if(the_input.attr('type')=='checkbox')
							{
							if(the_input.prop('checked'))
								{
								set_field_name =  the_input.closest('.form_field').find('input.the_value').val()
								}
							else
								set_field_name =  '';
							}
						else 
							set_field_name = the_form.find('[name="'+ get_field_name +'"]').val();
						
						if(set_field_name!='0')	
							jQuery(this).html(set_field_name);
						else
							jQuery(this).html('');
						}
					}
				);
			}
		}
}

var file_inputs= new Array();
var file_ext= new Array();
jQuery(document).ready(
function ()
	{
	
	
	jQuery('.step input').on('keypress', function (e) {
		 if(e.which === 13){
            jQuery(this).closest('.step').find('.nex-step').trigger('click');
         }
   });
	

	jQuery(document).on('change','#nex-forms select',
		function()
			{
				var the_select = jQuery(this);
				
				if(jQuery(this).val() == 0 || jQuery(this).val()==jQuery(this).attr('data-default-selected-value'))
					{
					if(jQuery(this).closest('.form_field').hasClass('md-select'))
						show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('select.error_message').attr('data-content'))
					else
						show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('.error_message').attr('data-content'))
					
					//settings.errors++;
					}
				 else
					{
					hide_nf_error(jQuery(this).closest('.form_field'));
					}
				
			//AUTO STEP
			
			if(the_select.closest('.step').hasClass('auto-step'))
				{
					
					if(the_select.closest('.step').hasClass('last_step'))
						{
						setTimeout(function()
							{
							the_select.closest('form').submit();
							},500);	
						}
					else
						{
						setTimeout(function()
								{
								the_select.closest('.step').find('.nex-step').trigger('click');	
								},300
							)
						}
				}
					
					
			
			}
		);
		
	jQuery(document).on('blur','#nex-forms select',
		function()
			{
				if(jQuery(this).val() == 0 || jQuery(this).val()==jQuery(this).attr('data-default-selected-value'))
					{
					if(jQuery(this).closest('.form_field').hasClass('md-select'))
						show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('select.error_message').attr('data-content'))
					else
						show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('.error_message').attr('data-content'))
					
					//settings.errors++;
					}
				 else
					{
					hide_nf_error(jQuery(this).closest('.form_field'));
					}
			}
		);
	
	

	jQuery(document).on('blur','input.email',
		function()
			{
			if(!IsValidEmail(jQuery(this).val()) && jQuery(this).val()!='')
				{
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-secondary-message'));
				}
			else if(jQuery(this).hasClass('required') && jQuery(this).val()=='')
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-content'));
			else
				hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
	jQuery(document).on('blur','input.phone_number',
		function()
			{
			if(!allowedChars(jQuery(this).val(), 'tel') && jQuery(this).val()!='')
				{
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-secondary-message'));
				}
			else if(jQuery(this).hasClass('required') && jQuery(this).val()=='')
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-content'));
			else
				hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
		
	jQuery(document).on('blur','input.numbers_only',
		function()
			{
			if(!isNumber(jQuery(this).val()) && jQuery(this).val()!='')
				{
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-secondary-message'));
				}
			else if(jQuery(this).hasClass('required') && jQuery(this).val()=='')
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-content'));
			else
				hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
	
	jQuery(document).on('blur','input.text_only',
		function()
			{
			if(!allowedChars(jQuery(this).val(), 'text') && jQuery(this).val()!='') {
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-secondary-message'));
				}
			else if(jQuery(this).hasClass('required') && jQuery(this).val()=='')
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-content'));
			else
				hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
	
	jQuery(document).on('blur','input.url',
		function()
			{
			if(!validate_url(jQuery(this).val()) && jQuery(this).val()!='') {
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-secondary-message'));
				}
			else if(jQuery(this).hasClass('required') && jQuery(this).val()=='')
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-content'));
			else
				hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
	
	
	
	jQuery(document).on('blur','input[type="text"].required, input[type="password"].required, textarea.required',
		function()
			{
			if(
			!jQuery(this).hasClass('email') 
			&& !jQuery(this).hasClass('phone_number') 
			&& !jQuery(this).hasClass('numbers_only')
			&& !jQuery(this).hasClass('text_only')
			&& !jQuery(this).hasClass('url'))
			{
			
			if(jQuery(this).val()=='')
				{
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-content'));
				}
			else
				hide_nf_error(jQuery(this).closest('.form_field'));
			}
			}
			
		);
	
	jQuery(document).on('blur','input[type="text"].required, input[type="password"].required, textarea.required',
		function()
			{
			if(
			!jQuery(this).hasClass('email') 
			&& !jQuery(this).hasClass('phone_number') 
			&& !jQuery(this).hasClass('numbers_only')
			&& !jQuery(this).hasClass('text_only')
			&& !jQuery(this).hasClass('url'))
			{
			if(jQuery(this).val()=='')
				{
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).attr('data-content'));
				}
			else
				hide_nf_error(jQuery(this).closest('.form_field'));
			}
			}
		);
	
	jQuery(document).on('click','.the-radios a, .the-radios .input-label, #the-radios .input-label, .survey_fields label',	
			function(e)
				{	
				hide_nf_error(jQuery(this).closest('.form_field'));
				}
			);
	jQuery(document).on('click','#star .fa', 
			function(e)
				{
				hide_nf_error(jQuery(this).closest('.form_field'));
				}
			);
	jQuery(document).on('change','select',
			function(e)
				{
				hide_nf_error(jQuery(this).closest('.form_field'));
				}
			);
	jQuery(document).on('change','input.the_slider',
		function()
			{
			hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
	jQuery(document).on('click','.bootstrap-touchspin .btn',
		function()
			{
			hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
	jQuery(document).on('change','#tags',
		function()
			{
			hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);
	jQuery('input#selected-color').blur(
		function()
			{
			hide_nf_error(jQuery(this).closest('.form_field'));
			}
		);

	
	
	jQuery(document).on('click','.nf_step_breadcrumb ol li.visited a',
		function()
			{
			var the_form = jQuery(this).closest('.ui-nex-forms-container');
			var jump_to_step = jQuery(this).attr('data-show-step');
			var the_container = jQuery(this).closest('#nex-forms');
			
			the_form.find('.current_step').text(jump_to_step);
			

			the_form.find('input[name="ms_current_step"]').val(jump_to_step);
			setTimeout(function() {the_form.find('input[name="ms_current_step"]').trigger('change')},400);
			
			the_form.find('.step').slideUp();
			
			jQuery(this).parent().addClass('current').removeClass('visited');
			jQuery(this).parent().nextAll('li').removeClass('visited').removeClass('current');
			
			the_form.find('.step:eq('+ (jump_to_step-1) +')').slideDown();
			}
		);
	
	jQuery(document).on('click', 'div.ui-nex-forms-container .nex-step', function(e){
		
			e.preventDefault();

			
			
			
			
			var the_form = jQuery(this).closest('form');
			
			var the_container = jQuery(this).closest('#nex-forms');
			
			
			if(validate_form(jQuery(this).closest('form')))
				{
				var this_step = jQuery(this).closest('.step');
				this_step.addClass('animated').addClass('fadeOut');
				
				jQuery(this).prop('disabled',true);
				
				var the_button = jQuery(this);
			
				setTimeout(function() { the_button.prop('disabled',false); },500);
				
				setTimeout(function() { this_step.hide()},301);
				setTimeout(function() { this_step.removeClass('animated').removeClass('fadeOut') },1000)
				
				var current_step = parseInt(the_form.closest('div.ui-nex-forms-container').find('.current_step').text());
				
				var set_total_steps = parseInt(nf_get_total_steps(the_form));
				
				var get_percentage = Math.round(100/(set_total_steps));

				console.log(current_step+ '/' + (nf_get_total_steps(the_form)) + ' ' + get_percentage + '%');

				current_step = current_step+1;
				
				var set_percentage = get_percentage*(current_step-1);
				
				
				jQuery('input[name="ms_current_step"]').val(current_step);
				setTimeout(function() {jQuery('input[name="ms_current_step"]').trigger('change')},400);

				var get_next_step = the_form.closest('div.ui-nex-forms-container').find('.step:eq('+ (current_step-1) +')')	
				
				if(set_percentage>100)
					{
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage').css('width','100%');
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage span').text('100%');	
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage').addClass('total_percent');
					}
				else
					{
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage').css('width',(set_percentage)+'%');
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage span').text((set_percentage)+'%');
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage').removeClass('total_percent');	
					}
				
				
				//console.log(get_next_step.attr('data-step-num'));
				the_container.find('div.nf_step_breadcrumb ol').find('li').removeClass('current');
				the_container.find('div.nf_step_breadcrumb ol').find('li:eq('+ (parseInt(get_next_step.attr('data-step-num')) - 1) +')').addClass('current');
				
				
				
				for(var i=parseInt(get_next_step.attr('data-step-num'));i>0;i--)
					{
					the_container.find('div.nf_step_breadcrumb ol').find('li:eq('+ (i-1) +')').addClass('visited');
					}
				the_form.closest('div.ui-nex-forms-container').find('.current_step').text(current_step);
				the_container.find('div.nf_step_breadcrumb ol .current').removeClass('visited');
				
				setTimeout(function() { get_next_step.addClass('animated').addClass('fadeIn').show(); },300);
				setTimeout(function() { get_next_step.removeClass('animated').removeClass('fadeIn'); },1000)


				get_next_step.find('.form_field').each(
					function()
						{
						run_nf_reanimate(jQuery(this));
						}
					);
				
				get_next_step.find('.html_fields').each(
					function()
						{
						nf_replace_tags(the_form,jQuery(this));
						}
					);
				
				
				
				
				var scroll_to_top = true;
				
				if(the_container.find('#ms_scroll_to_top').text()=='no')
					 scroll_to_top = false;

				
				if(scroll_to_top)
					{
					var offset = jQuery(this).closest('.step').offset();
					setTimeout(function()
						{
						if(offset)
							{
							jQuery("html, body").animate(
									{
									scrollTop:offset.top-250
									},300
								);
							}
						},300);
					}
				}
			}
		);
	
	jQuery(document).on('click', 'div.ui-nex-forms-container .prev-step', function(e){
	
			e.preventDefault();
			
			
			jQuery(this).prop('disabled',true);
			
			var the_button = jQuery(this);
			
			setTimeout(function() { the_button.prop('disabled',false); },500);
			
			var the_form = jQuery(this).closest('form');
			var the_container = jQuery(this).closest('#nex-forms');
			

			var this_step = jQuery(this).closest('.step');
			this_step.addClass('animated').addClass('fadeOut');
			
			setTimeout(function() { this_step.hide()},300);
			setTimeout(function() { this_step.removeClass('animated').removeClass('fadeOut') },1000)
			
			var current_step = parseInt(the_form.closest('div.ui-nex-forms-container').find('.current_step').text());
			
			var set_total_steps = parseInt(nf_get_total_steps(the_form));
				
			var get_percentage = Math.round(100/(set_total_steps));
			
			console.log(current_step+ '/' + (nf_get_total_steps(the_form)-1) + ' ' + get_percentage + '%');
			
			the_container.find('div.nf_step_breadcrumb ol').find('li:eq('+ (current_step-1) +')').removeClass('visited').removeClass('current');
			the_container.find('div.nf_step_breadcrumb ol').find('li:eq('+ (current_step-2) +')').addClass('current').removeClass('visited');
			
			current_step = current_step-1;
			
			var set_percentage = get_percentage*(current_step-1);
			
			jQuery('input[name="ms_current_step"]').val(current_step);
			setTimeout(function() {jQuery('input[name="ms_current_step"]').trigger('change')},400);
			
			the_form.closest('div.ui-nex-forms-container').find('.current_step').text(current_step);
			var prev_step = the_form.closest('div.ui-nex-forms-container').find('.step:eq('+ (current_step-1) +')');
			
			
			if(current_step==1)
					{
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage').css('width','5%');
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage span').text('0%');	
					}
				else
					{
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage').css('width',(set_percentage)+'%');
					the_container.find('div.nf_step_breadcrumb .nf_progressbar_percentage span').text((set_percentage)+'%');	
					}
			
			
			the_container.find('div.nf_step_breadcrumb ol').find('li').removeClass('current');
			the_container.find('div.nf_step_breadcrumb ol').find('li').removeClass('visited');
			the_container.find('div.nf_step_breadcrumb ol').find('li:eq('+ (parseInt(prev_step.attr('data-step-num')) - 1) +')').addClass('current');
			
			for(var i=parseInt(prev_step.attr('data-step-num'));i>0;i--)
				{
				the_container.find('div.nf_step_breadcrumb ol').find('li:eq('+ (i-1) +')').addClass('visited');
				}
			the_container.find('div.nf_step_breadcrumb ol .current').removeClass('visited');
			setTimeout(function() { prev_step.addClass('animated').addClass('fadeIn').show(); },300);
			setTimeout(function() { prev_step.removeClass('animated').removeClass('fadeIn'); },1000)
			

				
			/*prev_step.find('.form_field').each(
					function()
						{
						run_nf_reanimate(jQuery(this));
						}
					);*/
			
			var scroll_to_top = true;
				
				if(the_container.find('#ms_scroll_to_top').text()=='no')
					 scroll_to_top = false;
				
				if(scroll_to_top)
					{
					var offset = jQuery(this).closest('.step').offset();
							setTimeout(function()
								{
								if(offset)
									{
									jQuery("html, body").animate(
											{
											scrollTop:offset.top-250
											},300
										);
									}
								},300);
					}
			}
		);
	
	
			
	jQuery('form.submit-nex-form').ajaxForm({
    data: {
       action: 'submit_nex_form',
	   paypal_return_url: jQuery('#paypal_return_url').text()
    },
    beforeSubmit: function(formData, jqForm, options) {

		 if(jqForm.closest('.nex-forms').find('.on_form_submmision').text()=='redirect')
			{
			nf_replace_tags(jqForm,jqForm.closest('.nex-forms').find('.confirmation_page'))
			}
		
		 if(validate_form(jqForm))
			{
			
			var success_msg = jqForm.closest('.nex-forms').find('.nex_success_message');	
			
			success_msg.hide();
			
			var submit_val = jqForm.find('.nex-submit').html();
			jqForm.addClass('fadeout');
			
			jqForm.prepend('<div class="nf_loading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>')
			
			jqForm.find('.nex-submit').closest('.form_field').addClass('sending');
			jqForm.find('.nex-submit').addClass('submitting');
			jqForm.find('.nex-submit').html('<span class="fa fa-refresh fa-spin"></span>&nbsp;&nbsp;'+submit_val);
			jqForm.find('.nex-submit').prop('disabled',true);
			
			var offset = jqForm.offset();
			jQuery("html, body").animate(
					{
					scrollTop:offset.top-300
					},500
				);
			
			
			jqForm.closest('#nex-forms').find('div.nf_step_breadcrumb .nf_progressbar_percentage').css('width','100%');
			jqForm.closest('#nex-forms').find('div.nf_step_breadcrumb .nf_progressbar_percentage span').text('100%');
			jqForm.closest('#nex-forms').find('div.nf_step_breadcrumb .nf_progressbar_percentage').addClass('total_percent');
			
			return true;
			}
		else
			return false;
		 
		 
    },
    success : function(responseText, statusText, xhr, $form) {
	
      if($form.closest('.nex-forms').find('.on_form_submmision').text()=='redirect')
			{
			$form.closest('.ui-nex-forms-container').slideUp('slow');
			var url = '' + $form.closest('.nex-forms').find('.confirmation_page').text()+'';    
			jQuery(location).attr('href',url);
			}
		else
			{
			$form.closest('.ui-nex-forms-container').slideUp('fast');
			//$form.removeClass('fadeout');
			$form.closest('.nex-forms').find('.nf_loading').remove();
			$form.closest('.nex-forms').find('.nex_success_message').show();
					
					var success_msg = $form.closest('.nex-forms').find('.nex_success_message');
			
					var success_icon = success_msg.find('.success_icon');
					var success_msg_box = success_msg.find('.msg_box');
					var success_msg_text = success_msg.find('.msg_text');
					
					nf_replace_tags($form,success_msg_text);
					
					success_msg.show();
					success_icon.show().addClass('animated').addClass('flipInY');
			
					success_msg_text.show().addClass('animated').addClass('fadeIn'); 
					
					
					//setTimeout(function(){ $form.removeClass('fadeout'); },1000);
					
		    jQuery('.ui-nex-forms-container').append(responseText);
			jQuery('#nf_paypal').submit();
			}
		}
	});
	}
);


function validate_form(object){
	var items;
	var set_name;
	jQuery('.ui-nex-forms-container input[type="file"]').each(
		function()
			{
			items = jQuery(this).closest('.form_field').find('div.get_file_ext').text();
			set_name = new Array(jQuery(this).attr('name'))
			set_name.push(items.split('\n'));
			file_inputs.push(set_name);
			}
		);
	var current_form = object;
	
	var formdata = {
                   radios : [], //an array of already validate radio groups
                   checkboxes : [], //an array of already validate checkboxes
                   runCnt : 0, //number of times the validation has been run
                   errors: 0
               }
	
	var defaultErrorMsgs = {
                    email : 'Not a valid email address',
                    number: 'Not a valid phone number',
                    required: 'Please enter a value',
                    text: 'Only text allowed'
                }
	
	var settings = {
                'requiredClass': 'required',
                'customRegex': false,
				'errors' : 0,
                'checkboxDefault': 0,
                'selectDefault': 0,
                'beforeValidation': null,
                'onError': null,
                'onSuccess': null,
                'beforeSubmit': null, 
                'afterSubmit': null,
                'onValidationSuccess': null,
                'onValidationFailed': null
            };
	
	settings.errors = 0;
	jQuery(current_form).find('input').each( function() {
		
		
		var input = jQuery(this);
		var val = input.val();                                                                                
		var name = input.attr('name');
		
		if(input.is('input'))
			{
			
			var type = input.attr('type');
			switch(type)
				{
				
				case 'hidden':	
					if(input.closest('.form_field').hasClass('required') && input.closest('.form_field').is(':visible')) {
						if(input.closest('.form_field').hasClass('star-rating')  && input.closest('.form_field').is(':visible'))
							{
							if(val.length < 1 || val=='')
								{
								settings.errors++;                   
								show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
								}
							else
								{
								hide_nf_error(input.closest('.form_field'));
								}
							}
					}
							
				break;
				case 'text':
					
					if(input.hasClass('required') && (input.closest('.form_field').is(':visible') && !input.closest('.form_field').hasClass('disabled'))) {
					
						if(input.hasClass('the_slider') && (val==input.parent().find('#slider').attr('data-starting-value') || val==''))
							{
							settings.errors++;
							show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
							}
						
						
						else if(input.hasClass('the_spinner') && (val==input.attr('data-starting-value') || val==''))
							{
							settings.errors++;
							show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
							}
						
						else if(input.hasClass('tags') && val=='')
							{
							settings.errors++;
							show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
							}
						
						
						
						else if(val.length < 1 || val=='')
							{
								settings.errors++;        
								show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
								break;
							}
						 else
							{
							 if((input.attr('minlength') && input.attr('minlength')!='')) {
								if(input.val().length<parseInt(input.attr('minlength')))
									{
									settings.errors++;
									show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))	
									break;
									}
								else
									{
									
									hide_nf_error(input.closest('.form_field'));
									break;
									}  
							}
							else if(input.hasClass('email') && input.is(':visible'))
								{
								if(!IsValidEmail(val))
									{   
									settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									break;
									}
								else
									{
									
									hide_nf_error(input.closest('.form_field'));
									break;
									}
								}
							else if(input.hasClass('phone_number') && input.is(':visible'))
								{
								if(!allowedChars(val, 'tel'))
									{
									settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
									break;
									} 
								else

									{
									hide_nf_error(input.closest('.form_field'));
									break;
									}  
								}
							else if(input.hasClass('numbers_only') && input.is(':visible'))
								{
								if(!isNumber(val))
									{
									settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
									break;
									} 
								else
									{
									hide_nf_error(input.closest('.form_field'));
									break;
									} 
								}
							else if(input.hasClass('text_only') && input.is(':visible'))
								{
								if(!allowedChars(val, 'text'))
									{
									settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
									break;
									} 
								else
									{
									hide_nf_error(input.closest('.form_field'));
									break;
									} 
								}
							else if(input.hasClass('url') && input.is(':visible'))
								{
								if(!validate_url(val))
									{
									settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
									break;
									} 
								else
									{
									hide_nf_error(input.closest('.form_field'));
									break;
									}  
								}
							
							}
						}
					else if((input.attr('minlength') && input.attr('minlength')!='')  && input.is(':visible')) {
								if(input.val().length<parseInt(input.attr('minlength')))
									{
									settings.errors++;
									show_nf_error(input.closest('.form_field'),input.attr('data-content'))	
									}
								break;
							}
					
				    else if(input.hasClass('email') && val!='' && input.is(':visible')) {
					   if(!IsValidEmail(val)) {  
							settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
							break;
					   }
					}
					else if(input.hasClass('phone_number') && val!='' && input.is(':visible')) {
					   if(!allowedChars(val, 'tel')) {
							settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
							break;
					   }
					}
					else if(input.hasClass('numbers_only') && val!='' && input.is(':visible')) {
					   if(!isNumber(val)) {
							settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
							break;
					   }
					}
					else if(input.hasClass('text_only') && val!='' && input.is(':visible')) {
					   if(!allowedChars(val, 'text')) {
							settings.errors++;
							show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))	
							break;
					   }
					}
					else if(input.hasClass('url') && val!='' && input.is(':visible')) {
					   if(!validate_url(val)) {
							settings.errors++;
									if(input.attr('data-secondary-message'))
										show_nf_error(input.closest('.form_field'),input.attr('data-secondary-message'))
									
							break;
					   }   
					}
				else
					hide_nf_error(input.closest('.form_field'));
				break;
				case 'password':
					if(input.hasClass('required') && input.is(':visible'))
						{						
						if(val.length < 1 || val=='')
							{
							settings.errors++;      
							show_nf_error(input.closest('.form_field'),input.attr('data-content'))
							
							}
						}
					else
						{
							hide_nf_error(input.closest('.form_field'));
						}
				break;							
				case 'file':
					if(input.closest('.form_field').hasClass('required') && input.closest('.form_field').is(':visible')) {
						
						
						if(val.length < 1 || val=='' )
							{
							settings.errors++;                               
							show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
							
							break;
							}
						 else
							{
							
							for (var i = 0; i < file_inputs.length; i++)
								{
								var fname = val;
								
								
								
							    var ext = fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
								if(input.attr('name')==file_inputs[i][0])
									{
									if(jQuery.inArray(ext,file_inputs[i][1])<0)
										{
										settings.errors++;
										if(input.closest('.form_field').find('.error_message').attr('data-secondary-message'))
											show_nf_error(input.closest('.form_field'),input.parent().parent().find('.the_input_element').attr('data-secondary-message'))
										}
									else
										{
										hide_nf_error(input.closest('.form_field'));
										break;
										}
									}
								}
							break;
							}
						}
					if(!input.closest('.form_field').hasClass('required') && input.closest('.form_field').is(':visible')) {
						
						
						if(val!='' )
							{
							
							for (var i = 0; i < file_inputs.length; i++)
								{
								var fname = val;
								
								
								
							    var ext = fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
								
								
								if(input.attr('name')==file_inputs[i][0])
									{
									//console.log(ext);
									//console.log(file_inputs[i][1]);
									if(!is_inArray(ext,file_inputs[i][1]))
										{
										settings.errors++;
										//if(input.closest('.form_field').find('.error_message').attr('data-secondary-message'))
											show_nf_error(input.closest('.form_field'),input.parent().parent().find('.the_input_element').attr('data-secondary-message'))
										}
									else
										{
										hide_nf_error(input.closest('.form_field'));
										break;
										}
									}
								}
							break;
							}
						}
					
				break;
				
				
				case 'radio':
					//avoid checking the same radio group more than once                                    
					var radioData = formdata.radios;
						if(input.closest('.form_field').hasClass('required') && input.closest('.form_field').is(':visible'))
							{
							if(radioData)
								{
								if(jQuery.inArray(name, radioData) >= 0) 
									break;
								else
									{
									var checked = false;
									input.closest('.form_field').find('input[type="radio"]').each(
										function()
											{
											if(jQuery(this).prop('checked')==true)
												checked = true;	
											}
										);
									if(!checked)
										{
										settings.errors++;
										show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
										}
									 else
										{
										hide_nf_error(input.closest('.form_field'));
										break;
										}                                           
									radioData.push(name);
									} 
								}                                
							}	
					break;
				
				 case 'checkbox':
					//avoid checking the same radio group more than once                                    
					var checkData = formdata.checkboxes;
					if(input.closest('.form_field').hasClass('required') && input.closest('.form_field').is(':visible'))
							{
							if(checkData)
								{
								if(jQuery.inArray(name, checkData) >= 0) 
									break;
								else
									{
									var checked = false;
									input.closest('.form_field').find('input[type="checkbox"]').each(
										function()
											{
											if(jQuery(this).prop('checked')==true)
												checked = true;	
											}
										);
									if(!checked)
										{
										settings.errors++;
										show_nf_error(input.closest('.form_field'),input.closest('.form_field').find('.error_message').attr('data-content'))
										}
									 else

										{
										hide_nf_error(input.closest('.form_field'));
										break;
										}                                           
									checkData.push(name);
									} 
								}                                
							}
				break;
				}
			}
		}
	);                       
	
    jQuery(current_form).find('.digital-signature-data').each( function() {	
		if(jQuery(this).hasClass('required') && jQuery(this).parent().find('.js-signature').is(':visible'))
			{
			if(jQuery(this).val() == '') {
				settings.errors++;
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('.error_message').attr('data-content'))
				}
			 else
				{
				hide_nf_error(jQuery(this).closest('.form_field'));
				}
			}
  		 }
   	);	
	
   jQuery(current_form).find('textarea').each( function() {	
		if(jQuery(this).hasClass('required') && (jQuery(this).is(':visible')  && !jQuery(this).closest('.form_field').hasClass('disabled')))
			{
			if(jQuery(this).val() == '') {
				settings.errors++;
				show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('.error_message').attr('data-content'))
				}
			else if(jQuery(this).closest('.form_field').hasClass('text_only') && jQuery(this).is(':visible'))
				{
				if(!allowedChars(jQuery(this).val(), 'text'))
					{
					settings.errors++;
					show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('.error_message').attr('data-secondary-message'))
					} 
				}
			 else
				{
				hide_nf_error(jQuery(this).closest('.form_field'));
				}
			}
  		 }
   	);
	
	jQuery(current_form).find('select').each( function() {	
		if((jQuery(this).hasClass('required') || jQuery(this).closest('.form_field').hasClass('required')) && jQuery(this).closest('.form_field').is(':visible'))
			{
				
			if(jQuery(this).val() == 0 || jQuery(this).val()==jQuery(this).attr('data-default-selected-value')) {
				if(jQuery(this).closest('.form_field').hasClass('md-select'))
					show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('select.error_message').attr('data-content'))
				else
					show_nf_error(jQuery(this).closest('.form_field'),jQuery(this).closest('.form_field').find('.error_message').attr('data-content'))
				
				settings.errors++;
				}
			 else
				{
				hide_nf_error(jQuery(this).closest('.form_field'));
				}
			}
  		 }
   	);
var the_button = jQuery(jQuery(current_form).find('.nex-submit'));
if(settings.errors == 0)
	{
	return true;
	}
else
	{
	the_button.addClass('animated').addClass('shake');
	
	jQuery(current_form).find('.nex-step').addClass('animated').addClass('shake');
	setTimeout(function(){ 
		jQuery(current_form).find('.nex-step').removeClass('animated').removeClass('shake');
		the_button.removeClass('animated').removeClass('shake');
	
	},1000);

	var error_msg = jQuery('div.error_msg').first();
	var error_offset = error_msg.offset();
	setTimeout(function(){
		if(error_offset && !error_msg.closest('.form_field').isInViewport())
			{
			jQuery("html, body").animate(
					{
					scrollTop:error_offset.top-150
					},300
				)
			}
		},300);
		
	return false;
	}

}
function isNumber(n) {
   if(n!='')
		return !isNaN(parseFloat(n)) && isFinite(n);
	
	return true;
}

function IsValidEmail(email){
  if(email!=''){
	var filter = /^([\w-\.]+)@((\[[0-9 \-]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,3})(\]?)$/;
	return filter.test(email);
  }
	return true;
}
function allowedChars(input_value, accceptedchars){
	var aChars = ' -_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	if(accceptedchars)
		{
		switch(accceptedchars)
			{
			case 'tel': aChars = '1234567890-+() '; break;
			case 'text': aChars = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';break;
			default: aChars = accceptedchars; break;
			}
		}
	var valid = false;
	var txt = input_value.toString();
	
	for(var i=0;i<txt.length;i++) {
		if (aChars.indexOf(txt.charAt(i)) != -1) {
			valid = true;
		} else {
			valid = false;
			break;
		}
	 }
	return valid;
}
function validate_url(get_url) {
        var url = get_url;
        var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (pattern.test(url))
            return true;
 
        return false;
}
;(function ( $, window, document, undefined ) {
   
}(jQuery, window, document));
! function(t) {
    "use strict";
    var e = [
        ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
        ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
        ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
        ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
        ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
        ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
        ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
        ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
    ],
        i = function(e, i) {
            e.addClass("bootstrap-colorpalette");
            var n = [];
            t.each(i, function(e, i) {
                n.push("<div>"), t.each(i, function(t, e) {
                    var i = ['<button type="button" class="btn-color" style="background-color:', e, '" data-value="', e, '" title="', e, '"></button>'].join("");
                    n.push(i)
                }), n.push("</div>")
            }), e.html(n.join(""))
        }, n = function(e) {
            e.element.on("click", function(i) {
                var n = t(i.target),
                    s = n.closest(".btn-color");
                if (s[0]) {
                    var a = s.attr("data-value");
                    e.value = a, e.element.trigger({
                        type: "selectColor",
                        color: a,
                        element: e.element
                    })
                }
            })
        }, s = function(t, s) {
            this.element = t, i(t, s && s.colors || e), n(this)
        };
    t.fn.extend({
        colorPalette: function(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("colorpalette");
                n || i.data("colorpalette", new s(i, e))
            }), this
        }
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t) {
        this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        }, this.origFormat = null, t && (void 0 !== t.toLowerCase ? this.setColor(t) : void 0 !== t.h && (this.value = t))
    };
    e.prototype = {
        constructor: e,
        _sanitizeNumber: function(t) {
            return "number" == typeof t ? t : isNaN(t) || null === t || "" === t || void 0 === t ? 1 : void 0 !== t.toLowerCase ? parseFloat(t) : 1
        },
        setColor: function(t) {
            t = t.toLowerCase(), this.value = this.stringToHSB(t) || {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            }
        },
        stringToHSB: function(e) {
            e = e.toLowerCase();
            var i = this,
                n = !1;
            return t.each(this.stringParsers, function(t, s) {
                var a = s.re.exec(e),
                    o = a && s.parse.apply(i, [a]),
                    r = s.format || "rgba";
                return o ? (n = r.match(/hsla?/) ? i.RGBtoHSB.apply(i, i.HSLtoRGB.apply(i, o)) : i.RGBtoHSB.apply(i, o), i.origFormat = r, !1) : !0
            }), n
        },
        setHue: function(t) {
            this.value.h = 1 - t
        },
        setSaturation: function(t) {
            this.value.s = t
        },
        setBrightness: function(t) {
            this.value.b = 1 - t
        },
        setAlpha: function(t) {
            this.value.a = parseInt(100 * (1 - t), 10) / 100
        },
        toRGB: function(t, e, i, n) {
            t = t || this.value.h, e = e || this.value.s, i = i || this.value.b, n = n || this.value.a;
            var s, a, o, r, l, c, d, u;
            switch (t && void 0 === e && void 0 === i && (e = t.s, i = t.v, t = t.h), r = Math.floor(6 * t), l = 6 * t - r, c = i * (1 - e), d = i * (1 - l * e), u = i * (1 - (1 - l) * e), r % 6) {
                case 0:
                    s = i, a = u, o = c;
                    break;
                case 1:
                    s = d, a = i, o = c;
                    break;
                case 2:
                    s = c, a = i, o = u;
                    break;
                case 3:
                    s = c, a = d, o = i;
                    break;
                case 4:
                    s = u, a = c, o = i;
                    break;
                case 5:
                    s = i, a = c, o = d
            }
            return {
                r: Math.floor(255 * s),
                g: Math.floor(255 * a),
                b: Math.floor(255 * o),
                a: n
            }
        },
        toHex: function(t, e, i, n) {
            var s = this.toRGB(t, e, i, n);
            return "#" + (1 << 24 | parseInt(s.r) << 16 | parseInt(s.g) << 8 | parseInt(s.b)).toString(16).substr(1)
        },
        toHSL: function(t, e, i, n) {
            t = t || this.value.h, e = e || this.value.s, i = i || this.value.b, n = n || this.value.a;
            var s = t,
                a = (2 - e) * i,
                o = e * i;
            return o /= a > 0 && 1 >= a ? a : 2 - a, a /= 2, o > 1 && (o = 1), {
                h: isNaN(s) ? 0 : s,
                s: isNaN(o) ? 0 : o,
                l: isNaN(a) ? 0 : a,
                a: isNaN(n) ? 0 : n
            }
        },
        RGBtoHSB: function(t, e, i, n) {
            t /= 255, e /= 255, i /= 255;
            var s, a, o, r;
            return o = Math.max(t, e, i), r = o - Math.min(t, e, i), s = 0 === r ? null : o === t ? (e - i) / r : o === e ? (i - t) / r + 2 : (t - e) / r + 4, s = (s + 360) % 6 * 60 / 360, a = 0 === r ? 0 : r / o, {
                h: this._sanitizeNumber(s),
                s: a,
                b: o,
                a: this._sanitizeNumber(n)
            }
        },
        HueToRGB: function(t, e, i) {
            return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
        },
        HSLtoRGB: function(t, e, i, n) {
            0 > e && (e = 0);
            var s;
            s = .5 >= i ? i * (1 + e) : i + e - i * e;
            var a = 2 * i - s,
                o = t + 1 / 3,
                r = t,
                l = t - 1 / 3,
                c = Math.round(255 * this.HueToRGB(a, s, o)),
                d = Math.round(255 * this.HueToRGB(a, s, r)),
                u = Math.round(255 * this.HueToRGB(a, s, l));
            return [c, d, u, this._sanitizeNumber(n)]
        },
        toString: function(t) {
            switch (t = t || "rgba") {
                case "rgb":
                    var e = this.toRGB();
                    return "rgb(" + e.r + "," + e.g + "," + e.b + ")";
                case "rgba":
                    var e = this.toRGB();
                    return "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
                case "hsl":
                    var i = this.toHSL();
                    return "hsl(" + Math.round(360 * i.h) + "," + Math.round(100 * i.s) + "%," + Math.round(100 * i.l) + "%)";
                case "hsla":
                    var i = this.toHSL();
                    return "hsla(" + Math.round(360 * i.h) + "," + Math.round(100 * i.s) + "%," + Math.round(100 * i.l) + "%," + i.a + ")";
                case "hex":
                    return this.toHex();
                default:
                    return !1
            }
        },
        stringParsers: [{
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1]
            }
        }, {
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), 1]
            }
        }, {
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [t[1], t[2], t[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /^([a-z]{3,})$/,
            format: "alias",
            parse: function(t) {
                var e = this.colorNameToHex(t[0]) || "#000000",
                    i = this.stringParsers[0].re.exec(e),
                    n = i && this.stringParsers[0].parse.apply(this, [i]);
                return n
            }
        }],
        colorNameToHex: function(t) {
            var e = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                "indianred ": "#cd5c5c",
                "indigo ": "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };
            return "undefined" != typeof e[t.toLowerCase()] ? e[t.toLowerCase()] : !1
        }
    };
    var i = {
        horizontal: !1,
        inline: !1,
        color: !1,
        format: !1,
        input: "input",
        container: !1,
        component: ".add-on, .input-group-addon",
        sliders: {
            saturation: {
                maxLeft: 100,
                maxTop: 100,
                callLeft: "setSaturation",
                callTop: "setBrightness"
            },
            hue: {
                maxLeft: 0,
                maxTop: 100,
                callLeft: !1,
                callTop: "setHue"
            },
            alpha: {
                maxLeft: 0,
                maxTop: 100,
                callLeft: !1,
                callTop: "setAlpha"
            }
        },
        slidersHorz: {
            saturation: {
                maxLeft: 100,
                maxTop: 100,
                callLeft: "setSaturation",
                callTop: "setBrightness"
            },
            hue: {
                maxLeft: 100,
                maxTop: 0,
                callLeft: "setHue",
                callTop: !1
            },
            alpha: {
                maxLeft: 100,
                maxTop: 0,
                callLeft: "setAlpha",
                callTop: !1
            }
        },
        template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'
    }, n = function(n, s) {
            this.element = t(n).addClass("colorpicker-element"), this.options = t.extend({}, i, this.element.data(), s), this.component = this.options.component, this.component = this.component !== !1 ? this.element.find(this.component) : !1, this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 ? t(this.container) : !1, this.input = this.element.is("input") ? this.element : this.options.input ? this.element.find(this.options.input) : !1, this.input && 0 === this.input.length && (this.input = !1), this.color = new e(this.options.color !== !1 ? this.options.color : this.getValue()), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.picker = t(this.options.template), this.picker.addClass(this.options.inline ? "colorpicker-inline colorpicker-visible" : "colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), ("rgba" === this.format || "hsla" === this.format) && this.picker.addClass("colorpicker-with-alpha"), this.picker.on("mousedown.colorpicker", t.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : t("body")), this.input !== !1 && (this.input.on({
                "keyup.colorpicker": t.proxy(this.keyup, this)
            }), this.component === !1 && this.element.on({
                "focus.colorpicker": t.proxy(this.show, this)
            }), this.options.inline === !1 && this.element.on({
                "focusout.colorpicker": t.proxy(this.hide, this)
            })), this.component !== !1 && this.component.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), this.input === !1 && this.component === !1 && this.element.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), this.update(), t(t.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    n.version = "2.0.0-beta", n.Color = e, n.prototype = {
        constructor: n,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (this.options.inline !== !1) return !1;
            var t = this.component ? this.component.offset() : this.element.offset();
            this.picker.css({
                top: t.top + (this.component ? this.component.outerHeight() : this.element.outerHeight()),
                left: t.left
            })
        },
        show: function(e) {
            return this.isDisabled() ? !1 : (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), t(window).on("resize.colorpicker", t.proxy(this.reposition, this)), !this.hasInput() && e && e.stopPropagation && e.preventDefault && (e.stopPropagation(), e.preventDefault()), this.options.inline === !1 && t(window.document).on({
                "mousedown.colorpicker": t.proxy(this.hide, this)
            }), void this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        },
        hide: function() {
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), t(window).off("resize.colorpicker", this.reposition), t(document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        },
        updateData: function(t) {
            return t = t || this.color.toString(this.format), this.element.data("color", t), t
        },
        updateInput: function(t) {
            return t = t || this.color.toString(this.format), this.input !== !1 && this.input.prop("value", t), t
        },
        updatePicker: function(t) {
            void 0 !== t && (this.color = new e(t));
            var i = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz,
                n = this.picker.find("i");
            return 0 !== n.length ? (this.options.horizontal === !1 ? (i = this.options.sliders, n.eq(1).css("top", i.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", i.alpha.maxTop * (1 - this.color.value.a))) : (i = this.options.slidersHorz, n.eq(1).css("left", i.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", i.alpha.maxLeft * (1 - this.color.value.a))), n.eq(0).css({
                top: i.saturation.maxTop - this.color.value.b * i.saturation.maxTop,
                left: this.color.value.s * i.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), t) : void 0
        },
        updateComponent: function(t) {
            if (t = t || this.color.toString(this.format), this.component !== !1) {
                var e = this.component.find("i").eq(0);
                e.length > 0 ? e.css({
                    backgroundColor: t
                }) : this.component.css({
                    backgroundColor: t
                })
            }
            return t
        },
        update: function(t) {
            var e = this.updateComponent();
            return (this.getValue(!1) !== !1 || t === !0) && (this.updateInput(e), this.updateData(e)), this.updatePicker(), e
        },
        setValue: function(t) {
            this.color = new e(t), this.update(), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: t
            })
        },
        getValue: function(t) {
            t = void 0 === t ? "#000000" : t;
            var e;
            return e = this.hasInput() ? this.input.val() : this.element.data("color"), (void 0 === e || "" === e || null === e) && (e = t), e
        },
        hasInput: function() {
            return this.input !== !1
        },
        isDisabled: function() {
            return this.hasInput() ? this.input.prop("disabled") === !0 : !1
        },
        disable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !0), !0) : !1
        },
        enable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !1), !0) : !1
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(e) {
            e.stopPropagation(), e.preventDefault();
            var i = t(e.target),
                n = i.closest("div"),
                s = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!n.is(".colorpicker")) {
                if (n.is(".colorpicker-saturation")) this.currentSlider = t.extend({}, s.saturation);
                else if (n.is(".colorpicker-hue")) this.currentSlider = t.extend({}, s.hue);
                else {
                    if (!n.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = t.extend({}, s.alpha)
                }
                var a = n.offset();
                this.currentSlider.guide = n.find("i")[0].style, this.currentSlider.left = e.pageX - a.left, this.currentSlider.top = e.pageY - a.top, this.mousePointer = {
                    left: e.pageX,
                    top: e.pageY
                }, t(document).on({
                    "mousemove.colorpicker": t.proxy(this.mousemove, this),
                    "mouseup.colorpicker": t.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(t) {
            t.stopPropagation(), t.preventDefault();
            var e = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((t.pageX || this.mousePointer.left) - this.mousePointer.left))),
                i = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((t.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = e + "px", this.currentSlider.guide.top = i + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, e / 100), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, i / 100), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(e) {
            return e.stopPropagation(), e.preventDefault(), t(document).off({
                "mousemove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup
            }), !1
        },
        keyup: function(t) {
            if (38 === t.keyCode) this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0);
            else if (40 === t.keyCode) this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0);
            else {
                var i = this.input.val();
                this.color = new e(i), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())
            }
            this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: i
            })
        }
    }, t.bscolorpicker = n, t.fn.bscolorpicker = function(e) {
        var i = arguments;
        return this.each(function() {
            var s = t(this),
                a = s.data("colorpicker"),
                o = "object" == typeof e ? e : {};
            a || "string" == typeof e ? "string" == typeof e && a[e].apply(a, Array.prototype.slice.call(i, 1)) : s.data("colorpicker", new n(this, o))
        })
    }, t.fn.bscolorpicker.constructor = n
}(window.jQuery),

function(t) {
    "use strict";
    t.fn.extend({
        maxlength: function(e, i) {
            function n(t) {
                var i = t.val(),
                    n = i.match(/\n/g),
                    a = 0,
                    o = 0;
                return e.utf8 ? (a = n ? s(n) : 0, o = s(t.val())) : (a = n ? n.length : 0, o = t.val().length), o += e.ignoreBreaks ? 0 : a
            }

            function s(t) {
                for (var e = 0, i = 0; i < t.length; i++) {
                    var n = t.charCodeAt(i);
                    128 > n ? e++ : e += n > 127 && 2048 > n ? 2 : 3
                }
                return e
            }

            function a(t, i, s) {
                var a = !0;
                return !e.alwaysShow && s - n(t) > i && (a = !1), a
            }

            function o(t, e) {
                var i = e - n(t);
                return i
            }

            function r(t) {
                t.css({
                    display: "block"
                })
            }

            function l(t) {
                t.css({
                    display: "none"
                })
            }


            function c(t, i) {
                var n = "";
                return e.message ? n = e.message.replace("%charsTyped%", i).replace("%charsRemaining%", t - i).replace("%charsTotal%", t) : (e.preText && (n += e.preText), n += e.showCharsTyped ? i : t - i, e.showMaxLength && (n += e.separator + t), e.postText && (n += e.postText)), n
            }

            function d(t, i, n, s) {
                s.html(c(n, n - t)), t > 0 ? a(i, e.threshold, n) ? r(s.removeClass(e.limitReachedClass).addClass(e.warningClass)) : l(s) : r(s.removeClass(e.warningClass).addClass(e.limitReachedClass))
            }

            function u(e) {
                var i = e[0];
                return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : {
                    width: i.offsetWidth,
                    height: i.offsetHeight
                }, e.offset())
            }

            function h(t, i) {
                var n = u(t),
                    s = t.outerWidth(),
                    a = i.outerWidth(),
                    o = i.width(),
                    r = i.height();
                switch (e.placement) {
                    case "bottom":
                        i.css({
                            top: n.top + n.height,
                            left: n.left + n.width / 2 - o / 2
                        });
                        break;
                    case "top":
                        i.css({
                            top: n.top - r,
                            left: n.left + n.width / 2 - o / 2
                        });
                        break;
                    case "left":
                        i.css({
                            top: n.top + n.height / 2 - r / 2,
                            left: n.left - o
                        });
                        break;
                    case "right":
                        i.css({
                            top: n.top + n.height / 2 - r / 2,
                            left: n.left + n.width
                        });
                        break;
                    case "bottom-right":
                        i.css({
                            top: n.top + n.height,
                            left: n.left + n.width
                        });
                        break;
                    case "top-right":
                        i.css({
                            top: n.top - r,
                            left: n.left + s
                        });
                        break;
                    case "top-left":
                        i.css({
                            top: n.top - r,
                            left: n.left - a
                        });
                        break;
                    case "bottom-left":
                        i.css({
                            top: n.top + t.outerHeight(),
                            left: n.left - a
                        });
                        break;
                    case "centered-right":
                        i.css({
                            top: n.top + r / 2,
                            left: n.left + s - a - 3
                        })
                }
            }

            function p(t) {
                return t.attr("maxlength") || t.attr("size")
            }
            var f = t("body"),
                m = {
                    alwaysShow: !1,
                    threshold: 10,
                    warningClass: "label label-success",
                    limitReachedClass: "label label-important",
                    separator: " / ",
                    preText: "",
                    postText: "",
                    set_ID: "",
                    showMaxLength: !0,
                    placement: "bottom",
                    showCharsTyped: !0,
                    validate: !1,
                    utf8: !1,
                    ignoreBreaks: !1
                };
            return t.isFunction(e) && !i && (i = e, e = {}), e = t.extend(m, e), this.each(function() {
                var i, n, s = t(this);
                t(window).resize(function() {
                    h(s, n)
                }), s.focus(function() {
                    var a = c(i, "0");
                    i = p(s), t(".bootstrap-maxlength." + e.set_ID).remove(), n = t('<span class="' + e.set_ID + ' label bootstrap-maxlength"></span>').css({
                        display: "none",
                        position: "absolute",
                        whiteSpace: "nowrap",
                        zIndex: 1099
                    }).html(a), s.is("textarea") && (s.data("maxlenghtsizex", s.outerWidth()), s.data("maxlenghtsizey", s.outerHeight()), s.mouseup(function() {
                        (s.outerWidth() !== s.data("maxlenghtsizex") || s.outerHeight() !== s.data("maxlenghtsizey")) && h(s, n), s.data("maxlenghtsizex", s.outerWidth()), s.data("maxlenghtsizey", s.outerHeight())
                    })), f.append(n);
                    var r = o(s, p(s));
                    d(r, s, i, n), h(s, n)
                }), s.blur(function() {
                    n.remove()
                }), s.keyup(function() {
                    var t = o(s, p(s)),
                        a = !0;
                    return e.validate && 0 > t ? a = !1 : d(t, s, i, n), a
                })
            })
        }
    })
}(jQuery), ! function(t) {
    "use strict";
    t.expr[":"].icontains = function(e, i, n) {
        return t(e).text().toUpperCase().indexOf(n[3].toUpperCase()) >= 0
    };
    var e = function(i, n, s) {
        s && (s.stopPropagation(), s.preventDefault()), this.$element = t(i), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = t.extend({}, t.fn.selectpicker.defaults, this.$element.data(), "object" == typeof n && n), null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.init()
    };
    e.prototype = {
        constructor: e,
        init: function() {
            var e = this,
                i = this.$element.attr("id");
            this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), void 0 !== i && (this.$button.attr("data-id", i), t('label[for="' + i + '"]').click(function(t) {
                t.preventDefault(), e.$button.focus()
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this)
        },
        createDropdown: function() {
            var e = this.multiple ? " show-tick" : "",
                i = this.autofocus ? " autofocus" : "",
                n = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                s = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>' : "",
                a = '<div class="btn-group  bootstrap-select' + e + '"><button type="button" class="btn dropdown-toggle align_left the_input_element selectpicker" data-toggle="dropdown"' + i + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu the_input_element open">' + n + s + '<ul class="dropdown-menu inner the_input_element selectpicker" role="menu"></ul></div></div>';
            return t(a)
        },
        createView: function() {
            var t = this.createDropdown(),
                e = this.createLi();
            return t.find("ul").append(e), t
        },
        reloadLi: function() {
            this.destroyLi();
            var t = this.createLi();
            this.$menu.find("ul").append(t)
        },
        destroyLi: function() {
            this.$menu.find("li").remove()
        },
        createLi: function() {
            var e = this,
                i = [],
                n = "";
            return this.$element.find("option").each(function() {
                var n = t(this),
                    s = n.attr("class") || "",
                    a = n.attr("style") || "",
                    o = n.data("content") ? n.data("content") : n.html(),
                    r = void 0 !== n.data("subtext") ? '<small class="muted text-muted">' + n.data("subtext") + "</small>" : "",
                    l = void 0 !== n.data("icon") ? '<i class="' + e.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                if ("" !== l && (n.is(":disabled") || n.parent().is(":disabled")) && (l = "<span>" + l + "</span>"), n.data("content") || (o = l + '<span class="text">' + o + r + "</span>"), e.options.hideDisabled && (n.is(":disabled") || n.parent().is(":disabled"))) i.push('<a style="min-height: 0; padding: 0"></a>');
                else if (n.parent().is("optgroup") && n.data("divider") !== !0)
                    if (0 === n.index()) {
                        var c = n.parent().attr("label"),
                            d = void 0 !== n.parent().data("subtext") ? '<small class="muted text-muted">' + n.parent().data("subtext") + "</small>" : "",
                            u = n.parent().data("icon") ? '<i class="' + n.parent().data("icon") + '"></i> ' : "";
                        c = u + '<span class="text">' + c + d + "</span>", i.push(0 !== n[0].index ? '<div class="div-contain"><div class="divider"></div></div><dt>' + c + "</dt>" + e.createA(o, "opt " + s, a) : "<dt>" + c + "</dt>" + e.createA(o, "opt " + s, a))
                    } else i.push(e.createA(o, "opt " + s, a));
                    else i.push(n.data("divider") === !0 ? '<div class="div-contain"><div class="divider"></div></div>' : t(this).data("hidden") === !0 ? "" : e.createA(o, s, a))
            }), t.each(i, function(t, e) {
                n += "<li rel=" + t + ">" + e + "</li>"
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), t(n)
        },
        createA: function(t, e, i) {
            return '<a tabindex="0" class="' + e + '" style="' + i + '">' + t + '<i class="' + this.options.iconBase + " " + this.options.tickIcon + ' icon-ok check-mark"></i></a>'
        },
        render: function(e) {
            var i = this;
            e !== !1 && this.$element.find("option").each(function(e) {
                i.setDisabled(e, t(this).is(":disabled") || t(this).parent().is(":disabled")), i.setSelected(e, t(this).is(":selected"))
            }), this.tabIndex();
            var n = this.$element.find("option:selected").map(function() {
                var e, n = t(this),
                    s = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                return e = i.options.showSubtext && n.attr("data-subtext") && !i.multiple ? ' <small class="muted text-muted">' + n.data("subtext") + "</small>" : "", n.data("content") && i.options.showContent ? n.data("content") : void 0 !== n.attr("title") ? n.attr("title") : s + n.html() + e
            }).toArray(),
                s = this.multiple ? n.join(this.options.multipleSeparator) : n[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var a = this.options.selectedTextFormat.split(">"),
                    o = this.options.hideDisabled ? ":not([disabled])" : "";
                (a.length > 1 && n.length > a[1] || 1 == a.length && n.length >= 2) && (s = this.options.countSelectedText.replace("{0}", n.length).replace("{1}", this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])' + o).length))
            }
            s || (s = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", t.trim(s)), this.$newElement.find(".filter-option").html(s)
        },
        setStyle: function(t, e) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi, ""));
            var i = t ? t : this.options.style;
            "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
        },
        liHeight: function() {
            var t = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
                e = t.addClass("open").find("> .dropdown-menu"),
                i = e.find("li > a").outerHeight(),
                n = this.options.header ? e.find(".popover-title").outerHeight() : 0,
                s = this.options.liveSearch ? e.find(".bootstrap-select-searchbox").outerHeight() : 0;
            t.remove(), this.$newElement.data("liHeight", i).data("headerHeight", n).data("searchHeight", s)
        },
        setSize: function() {
            var e, i, n, s = this,
                a = this.$menu,
                o = a.find(".inner"),
                r = this.$newElement.outerHeight(),
                l = this.$newElement.data("liHeight"),
                c = this.$newElement.data("headerHeight"),
                d = this.$newElement.data("searchHeight"),
                u = a.find("li .divider").outerHeight(!0),
                h = parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom")) + parseInt(a.css("border-top-width")) + parseInt(a.css("border-bottom-width")),
                p = this.options.hideDisabled ? ":not(.disabled)" : "",
                f = t(window),
                m = h + parseInt(a.css("margin-top")) + parseInt(a.css("margin-bottom")) + 2,
                g = function() {
                    i = s.$newElement.offset().top - f.scrollTop(), n = f.height() - i - r
                };
            if (g(), this.options.header && a.css("padding-top", 0), "auto" == this.options.size) {
                var v = function() {
                    var t;
                    g(), e = n - m, s.options.dropupAuto && s.$newElement.toggleClass("dropup", i > n && e - m < a.height()), s.$newElement.hasClass("dropup") && (e = i - m), t = a.find("li").length + a.find("dt").length > 3 ? 3 * l + m - 2 : 0, a.css({
                        "max-height": e + "px",
                        overflow: "hidden",
                        "min-height": t + "px"
                    }), o.css({
                        "max-height": e - c - d - h + "px",
                        "overflow-y": "auto",
                        "min-height": t - h + "px"
                    })
                };
                v(), t(window).resize(v), t(window).scroll(v)
            } else if (this.options.size && "auto" != this.options.size && a.find("li" + p).length > this.options.size) {
                var b = a.find("li" + p + " > *").filter(":not(.div-contain)").slice(0, this.options.size).last().parent().index(),
                    y = a.find("li").slice(0, b + 1).find(".div-contain").length;
                e = l * this.options.size + y * u + h, s.options.dropupAuto && this.$newElement.toggleClass("dropup", i > n && e < a.height()), a.css({
                    "max-height": e + c + d + "px",
                    overflow: "hidden"
                }), o.css({
                    "max-height": e - h + "px",
                    "overflow-y": "auto"
                })
            }
        },
        setWidth: function() {
            if ("auto" == this.options.width) {
                this.$menu.css("min-width", "0");
                var t = this.$newElement.clone().appendTo("body"),
                    e = t.find("> .dropdown-menu").css("width");
                t.remove(), this.$newElement.css("width", e)
            } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function() {
            var e, i, n = this,
                s = "<div />",
                a = t(s),
                o = function(t) {
                    a.addClass(t.attr("class")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), i = t.hasClass("dropup") ? 0 : t[0].offsetHeight, a.css({
                        top: e.top + i,
                        left: e.left,
                        width: t[0].offsetWidth,
                        position: "absolute"
                    })
                };
            this.$newElement.on("click", function() {
                o(t(this)), a.appendTo(n.options.container), a.toggleClass("open", !t(this).hasClass("open")), a.append(n.$menu)
            }), t(window).resize(function() {
                o(n.$newElement)
            }), t(window).on("scroll", function() {
                o(n.$newElement)

            }), t("html").on("click", function(e) {
                t(e.target).closest(n.$newElement).length < 1 && a.removeClass("open")
            })
        },
        mobile: function() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
        },
        refresh: function() {
            this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        },
        update: function() {
            this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        },
        setSelected: function(e, i) {
            null == this.$lis && (this.$lis = this.$menu.find("li")), t(this.$lis[e]).toggleClass("selected", i)
        },
        setDisabled: function(e, i) {
            null == this.$lis && (this.$lis = this.$menu.find("li")), i ? t(this.$lis[e]).addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : t(this.$lis[e]).removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
        },
        isDisabled: function() {
            return this.$element.is(":disabled")
        },
        checkDisabled: function() {
            var t = this;
            this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function() {
                return !t.isDisabled()
            })
        },
        tabIndex: function() {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
        },
        clickListener: function() {
            var e = this;
            t("body").on("touchstart.dropdown", ".dropdown-menu", function(t) {
                t.stopPropagation()
            }), this.$newElement.on("click", function() {
                e.setSize(), e.options.liveSearch || e.multiple || setTimeout(function() {
                    e.$menu.find(".selected a").focus()
                }, 10)
            }), this.$menu.on("click", "li a", function(i) {
                var n = t(this).parent().index(),
                    s = e.$element.val(),
                    a = e.$element.prop("selectedIndex");
                if (e.multiple && i.stopPropagation(), i.preventDefault(), !e.isDisabled() && !t(this).parent().hasClass("disabled")) {
                    var o = e.$element.find("option"),
                        r = o.eq(n),
                        l = r.prop("selected");
                    e.multiple ? (r.prop("selected", !l), e.setSelected(n, !l)) : (o.prop("selected", !1), r.prop("selected", !0), e.$menu.find(".selected").removeClass("selected"), e.setSelected(n, !0)), e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (s != e.$element.val() && e.multiple || a != e.$element.prop("selectedIndex") && !e.multiple) && e.$element.change()
                }
            }), this.$menu.on("click", "li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)", function(t) {
                t.target == this && (t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus())
            }), this.$menu.on("click", ".popover-title .close", function() {
                e.$button.focus()
            }), this.$searchbox.on("click", function(t) {
                t.stopPropagation()
            }), this.$element.change(function() {
                e.render(!1)
            })
        },
        liveSearchListener: function() {
            var e = this,
                i = t('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api", function() {
                e.$menu.find(".active").removeClass("active"), e.$searchbox.val() && (e.$searchbox.val(""), e.$menu.find("li").show(), i.parent().length && i.remove()), e.multiple || e.$menu.find(".selected").addClass("active"), setTimeout(function() {
                    e.$searchbox.focus()
                }, 10)
            }), this.$searchbox.on("input propertychange", function() {
                e.$searchbox.val() ? (e.$menu.find("li").show().not(":icontains(" + e.$searchbox.val() + ")").hide(), e.$menu.find("li").filter(":visible:not(.no-results)").length ? i.parent().length && i.remove() : (i.parent().length && i.remove(), i.html(e.options.noneResultsText + ' "' + e.$searchbox.val() + '"').show(), e.$menu.find("li").last().after(i))) : (e.$menu.find("li").show(), i.parent().length && i.remove()), e.$menu.find("li.active").removeClass("active"), e.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), t(this).focus()
            }), this.$menu.on("mouseenter", "a", function(i) {
                e.$menu.find(".active").removeClass("active"), t(i.currentTarget).parent().not(".disabled").addClass("active")
            }), this.$menu.on("mouseleave", "a", function() {
                e.$menu.find(".active").removeClass("active")
            })
        },
        val: function(t) {
            return void 0 !== t ? (this.$element.val(t), this.$element.change(), this.$element) : this.$element.val()
        },
        selectAll: function() {
            this.$element.find("option").prop("selected", !0).attr("selected", "selected"), this.render()
        },
        deselectAll: function() {
            this.$element.find("option").prop("selected", !1).removeAttr("selected"), this.render()
        },
        keydown: function(e) {
            var i, n, s, a, o, r, l, c, d, u, h, p, f = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
            if (i = t(this), s = i.parent(), i.is("input") && (s = i.parent().parent()), u = s.data("this"), u.options.liveSearch && (s = i.parent().parent()), u.options.container && (s = u.$menu), n = t("[role=menu] li:not(.divider) a", s), p = u.$menu.parent().hasClass("open"), !p && /([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode)) && (u.setSize(), u.$menu.parent().addClass("open"), p = u.$menu.parent().hasClass("open"), u.$searchbox.focus()), u.options.liveSearch && (/(^9$|27)/.test(e.keyCode) && p && 0 === u.$menu.find(".active").length && (e.preventDefault(), u.$menu.parent().removeClass("open"), u.$button.focus()), n = t("[role=menu] li:not(.divider):visible", s), i.val() || /(38|40)/.test(e.keyCode) || 0 === n.filter(".active").length && (n = u.$newElement.find("li").filter(":icontains(" + f[e.keyCode] + ")"))), n.length) {
                if (/(38|40)/.test(e.keyCode)) a = n.index(n.filter(":focus")), r = n.parent(":not(.disabled):visible").first().index(), l = n.parent(":not(.disabled):visible").last().index(), o = n.eq(a).parent().nextAll(":not(.disabled):visible").eq(0).index(), c = n.eq(a).parent().prevAll(":not(.disabled):visible").eq(0).index(), d = n.eq(o).parent().prevAll(":not(.disabled):visible").eq(0).index(), u.options.liveSearch && (n.each(function(e) {
                    t(this).is(":not(.disabled)") && t(this).data("index", e)
                }), a = n.index(n.filter(".active")), r = n.filter(":not(.disabled):visible").first().data("index"), l = n.filter(":not(.disabled):visible").last().data("index"), o = n.eq(a).nextAll(":not(.disabled):visible").eq(0).data("index"), c = n.eq(a).prevAll(":not(.disabled):visible").eq(0).data("index"), d = n.eq(o).prevAll(":not(.disabled):visible").eq(0).data("index")), h = i.data("prevIndex"), 38 == e.keyCode && (u.options.liveSearch && (a -= 1), a != d && a > c && (a = c), r > a && (a = r), a == h && (a = l)), 40 == e.keyCode && (u.options.liveSearch && (a += 1), -1 == a && (a = 0), a != d && o > a && (a = o), a > l && (a = l), a == h && (a = r)), i.data("prevIndex", a), u.options.liveSearch ? (e.preventDefault(), i.is(".dropdown-toggle") || (n.removeClass("active"), n.eq(a).addClass("active").find("a").focus(), i.focus())) : n.eq(a).focus();
                else if (!i.is("input")) {
                    var m, g, v = [];
                    n.each(function() {
                        t(this).parent().is(":not(.disabled)") && t.trim(t(this).text().toLowerCase()).substring(0, 1) == f[e.keyCode] && v.push(t(this).parent().index())
                    }), m = t(document).data("keycount"), m++, t(document).data("keycount", m), g = t.trim(t(":focus").text().toLowerCase()).substring(0, 1), g != f[e.keyCode] ? (m = 1, t(document).data("keycount", m)) : m >= v.length && (t(document).data("keycount", 0), m > v.length && (m = 1)), n.eq(v[m - 1]).focus()
                }
                /(13|32|^9$)/.test(e.keyCode) && p && (/(32)/.test(e.keyCode) || e.preventDefault(), u.options.liveSearch ? /(32)/.test(e.keyCode) || (u.$menu.find(".active a").click(), i.focus()) : t(":focus").click(), t(document).data("keycount", 0)), (/(^9$|27)/.test(e.keyCode) && p && (u.multiple || u.options.liveSearch) || /(27)/.test(e.keyCode) && !p) && (u.$menu.parent().removeClass("open"), u.$button.focus())
            }
        },
        hide: function() {
            this.$newElement.hide()
        },
        show: function() {
            this.$newElement.show()
        },
        destroy: function() {
            this.$newElement.remove(), this.$element.remove()
        }
    }, t.fn.selectpicker = function(i, n) {
        var s, a = arguments,
            o = this.each(function() {
                if (t(this).is("select")) {
                    var o = t(this),
                        r = o.data("selectpicker"),
                        l = "object" == typeof i && i;
                    if (r) {
                        if (l)
                            for (var c in l) r.options[c] = l[c]
                    } else o.data("selectpicker", r = new e(this, l, n)); if ("string" == typeof i) {
                        var d = i;
                        r[d] instanceof Function ? ([].shift.apply(a), s = r[d].apply(r, a)) : s = r.options[d]
                    }
                }
            });
        return void 0 !== s ? s : o
    }, t.fn.selectpicker.defaults = {
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results match",
        countSelectedText: "{0} of {1} selected",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        multipleSeparator: ", ",
        iconBase: "fa ",
        tickIcon: "fa-check"
    }, t(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", e.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", function(t) {
        t.stopPropagation()
    })
}(window.jQuery),
function(t) {
    "use strict";

    function e(e, i) {
        this.itemsArray = [], this.$element = t(e), this.$element.hide(), this.isSelect = "SELECT" === e.tagName, this.multiple = this.isSelect && e.hasAttribute("multiple"), this.objectItems = i && i.itemValue, this.placeholderText = e.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = t('<div class="bootstrap-tagsinput form-control "></div>'), this.$input = t('<input  size="' + this.inputSize + '" type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.after(this.$container), this.build(i)
    }

    function i(t, e) {
        if ("function" != typeof t[e]) {
            var i = t[e];
            t[e] = function(t) {
                return t[i]
            }
        }
    }

    function n(t, e) {
        if ("function" != typeof t[e]) {
            var i = t[e];
            t[e] = function() {
                return i
            }
        }
    }

    function s(t) {
        return t ? r.text(t).html() : ""
    }

    function a(t) {
        var e = 0;
        if (document.selection) {
            t.focus();
            var i = document.selection.createRange();
            i.moveStart("character", -t.value.length), e = i.text.length
        } else(t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart);
        return e
    }
    var o = {
        tagClass: "label label-info",
        setTagClass: "label label-info",
        setTagIcon: "fa fa-tag",
        itemValue: function(t) {
            return t ? t.toString() : t
        },
        itemText: function(t) {
            return this.itemValue(t)
        },
        freeInput: !0,
        maxTags: void 0,
        confirmKeys: [13],
        onTagExists: function(t, e) {
            e.hide().fadeIn()
        }
    };
    e.prototype = {
        constructor: e,
        add: function(e, i) {
            var n = this;
            if (!(n.options.maxTags && n.itemsArray.length >= n.options.maxTags || e !== !1 && !e)) {
                if ("object" == typeof e && !n.objectItems) throw "Can't add objects when itemValue option is not set";
                if (!e.toString().match(/^\s*$/)) {
                    if (n.isSelect && !n.multiple && n.itemsArray.length > 0 && n.remove(n.itemsArray[0]), "string" == typeof e && "INPUT" === this.$element[0].tagName) {
                        var a = e.split(",");
                        if (a.length > 1) {
                            for (var o = 0; o < a.length; o++) this.add(a[o], !0);
                            return void(i || n.pushVal())
                        }
                    }
                    var r = n.options.itemValue(e),
                        l = n.options.itemText(e),
                        c = (n.options.tagClass, t.grep(n.itemsArray, function(t) {
                            return n.options.itemValue(t) === r
                        })[0]);
                    if (c) {
                        if (n.options.onTagExists) {
                            var d = t(".tag", n.$container).filter(function() {
                                return t(this).data("item") === c
                            });
                            n.options.onTagExists(e, d)
                        }
                    } else {
                        n.itemsArray.push(e);
                        var u = t('<span class="tag label ' + this.$element.attr("data-tag-class") + '"><span id="tag-icon" class="' + this.$element.attr("data-tag-icon") + '"></span> ' + s(l) + '<span data-role="remove"></span></span>');
                        if (u.data("item", e), n.findInputWrapper().before(u), u.after(" "), n.isSelect && !t('option[value="' + escape(r) + '"]', n.$element)[0]) {
                            var h = t("<option selected>" + s(l) + "</option>");
                            h.data("item", e), h.attr("value", r), n.$element.append(h)
                        }
                        i || n.pushVal(), n.options.maxTags === n.itemsArray.length && n.$container.addClass("bootstrap-tagsinput-max"), n.$element.trigger(t.Event("itemAdded", {
                            item: e
                        }))
                    }
                }
            }
        },
        remove: function(e, i) {
            var n = this;
            n.objectItems && (e = "object" == typeof e ? t.grep(n.itemsArray, function(t) {
                return n.options.itemValue(t) == n.options.itemValue(e)
            })[0] : t.grep(n.itemsArray, function(t) {
                return n.options.itemValue(t) == e
            })[0]), e && (t(".tag", n.$container).filter(function() {
                return t(this).data("item") === e
            }).remove(), t("option", n.$element).filter(function() {
                return t(this).data("item") === e
            }).remove(), n.itemsArray.splice(t.inArray(e, n.itemsArray), 1)), i || n.pushVal(), n.options.maxTags > n.itemsArray.length && n.$container.removeClass("bootstrap-tagsinput-max"), n.$element.trigger(t.Event("itemRemoved", {
                item: e
            }))
        },
        removeAll: function() {
            var e = this;
            for (t(".tag", e.$container).remove(), t("option", e.$element).remove(); e.itemsArray.length > 0;) e.itemsArray.pop();
            e.pushVal(), e.options.maxTags && !this.isEnabled() && this.enable()
        },
        refresh: function() {
            var e = this;
            t(".tag", e.$container).each(function() {
                var i = t(this),
                    n = i.data("item"),
                    a = e.options.itemValue(n),
                    o = e.options.itemText(n),
                    r = e.options.tagClass(n);
                if (i.attr("class", null), i.addClass("tag " + s(r)), i.contents().filter(function() {
                    return 3 == this.nodeType
                })[0].nodeValue = s(o), e.isSelect) {
                    var l = t("option", e.$element).filter(function() {
                        return t(this).data("item") === n
                    });
                    l.attr("value", a)
                }
            })
        },
        items: function() {
            return this.itemsArray
        },
        pushVal: function() {
            var e = this,
                i = t.map(e.items(), function(t) {
                    return e.options.itemValue(t).toString()
                });
            e.$element.val(i, !0).trigger("change")
        },
        build: function(e) {
            var s = this;
            s.options = t.extend({}, o, e);
            var r = s.options.typeahead || {};
            s.objectItems && (s.options.freeInput = !1), i(s.options, "itemValue"), i(s.options, "itemText"), i(s.options, "tagClass"), s.options.source && (r.source = s.options.source), r.source && t.fn.typeahead && (n(r, "source"), s.$input.typeahead({
                source: function(e, i) {
                    function n(t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var o = s.options.itemText(t[n]);
                            a[o] = t[n], e.push(o)
                        }
                        i(e)
                    }
                    this.map = {};
                    var a = this.map,
                        o = r.source(e);
                    t.isFunction(o.success) ? o.success(n) : t.when(o).then(n)
                },
                updater: function(t) {
                    s.add(this.map[t])
                },
                matcher: function(t) {
                    return -1 !== t.toLowerCase().indexOf(this.query.trim().toLowerCase())
                },
                sorter: function(t) {
                    return t.sort()
                },
                highlighter: function(t) {
                    var e = new RegExp("(" + this.query + ")", "gi");
                    return t.replace(e, "<strong>$1</strong>")
                }
            })), s.$container.on("click", t.proxy(function() {
                s.$input.focus()
            }, s)), s.$container.on("keydown", "input", t.proxy(function(e) {
                var i = t(e.target),
                    n = s.findInputWrapper();
                switch (e.which) {
                    case 8:
                        if (0 === a(i[0])) {
                            var o = n.prev();
                            o && s.remove(o.data("item"))
                        }
                        break;
                    case 46:
                        if (0 === a(i[0])) {
                            var r = n.next();
                            r && s.remove(r.data("item"))
                        }
                        break;
                    case 37:
                        var l = n.prev();
                        0 === i.val().length && l[0] && (l.before(n), i.focus());
                        break;
                    case 39:
                        var c = n.next();
                        0 === i.val().length && c[0] && (c.after(n), i.focus());
                        break;
                    default:
                        s.options.freeInput && t.inArray(e.which, s.options.confirmKeys) >= 0 && (s.add(i.val()), i.val(""), e.preventDefault())
                }
                i.attr("size", Math.max(this.inputSize, i.val().length))
            }, s)), s.$container.on("click", "[data-role=remove]", t.proxy(function(e) {
                s.remove(t(e.target).closest(".tag").data("item"))
            }, s)), s.options.itemValue === o.itemValue && ("INPUT" === s.$element[0].tagName ? s.add(s.$element.val()) : t("option", s.$element).each(function() {
                s.add(t(this).attr("value"), !0)
            }))
        },
        destroy: function() {
            var t = this;
            t.$container.off("keypress", "input"), t.$container.off("click", "[role=remove]"), t.$container.remove(), t.$element.removeData("tagsinput"), t.$element.show()
        },
        focus: function() {
            this.$input.focus()
        },
        input: function() {
            return this.$input
        },
        findInputWrapper: function() {
            for (var e = this.$input[0], i = this.$container[0]; e && e.parentNode !== i;) e = e.parentNode;
            return t(e)
        }
    }, t.fn.tagsinput = function(i) {
        var n = [];
        return this.each(function() {
            var s = t(this).data("tagsinput");
            if (s) {
                var a = "";
                void 0 !== a && n.push(a)
            } else s = new e(this, i), t(this).data("tagsinput", s), n.push(s), "SELECT" === this.tagName && t("option", t(this)).attr("selected", "selected"), t(this).val(t(this).val())
        }), "string" == typeof i ? n.length > 1 ? n : n[0] : n
    }, t.fn.tagsinput.Constructor = e;
    var r = t("<div />");
    t(function() {
        t("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
    })
}(window.jQuery), + function(t) {
    "use strict";
    var e = "Microsoft Internet Explorer" == window.navigator.appName,
        i = function(e, i) {
            if (this.$element = t(e), this.$input = this.$element.find(":file"), 0 !== this.$input.length) {
                this.name = this.$input.attr("name") || i.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), 0 === this.$hidden.length && (this.$hidden = t('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileinput-preview");
                var n = this.$preview.css("height");
                "inline" != this.$preview.css("display") && "0px" != n && "none" != n && this.$preview.css("line-height", n), this.original = {
                    exists: this.$element.hasClass("fileinput-exists"),
                    preview: this.$preview.html(),
                    hiddenVal: this.$hidden.val()
                }, this.listen()
            }
        };
    i.prototype.listen = function() {
        this.$input.on("change.bs.fileinput", t.proxy(this.change, this)), t(this.$input[0].form).on("reset.bs.fileinput", t.proxy(this.reset, this)), this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput", t.proxy(this.trigger, this)), this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput", t.proxy(this.clear, this))
    }, i.prototype.change = function(e) {
        if (void 0 === e.target.files && (e.target.files = e.target && e.target.value ? [{
            name: e.target.value.replace(/^.+\\/, "")
        }] : []), 0 !== e.target.files.length) {
            this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
            var i = e.target.files[0];
            if (this.$preview.length > 0 && ("undefined" != typeof i.type ? i.type.match("image.*") : i.name.match(/\.(gif|png|jpe?g)$/i)) && "undefined" != typeof FileReader) {
                var n = new FileReader,
                    s = this.$preview,
                    a = this.$element;
                n.onload = function(n) {
                    var o = t("<img>").attr("src", n.target.result);
                    e.target.files[0].result = n.target.result, a.find(".fileinput-filename").text(i.name), "none" != s.css("max-height") && o.css("max-height", parseInt(s.css("max-height"), 10) - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10) - parseInt(s.css("border-top"), 10) - parseInt(s.css("border-bottom"), 10)), s.html(o), a.addClass("fileinput-exists").removeClass("fileinput-new"), a.trigger("change.bs.fileinput", e.target.files)
                }, n.readAsDataURL(i)
            } else this.$element.find(".fileinput-filename").text(i.name), this.$preview.text(i.name), this.$element.addClass("fileinput-exists").removeClass("fileinput-new"), this.$element.trigger("change.bs.fileinput")
        }
    }, i.prototype.clear = function(t) {
        if (t && t.preventDefault(), this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", ""), e) {
            var i = this.$input.clone(!0);
            this.$input.after(i), this.$input.remove(), this.$input = i
        } else this.$input.val("");
        this.$preview.html(""), this.$element.find(".fileinput-filename").text(""), this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), t !== !1 && (this.$input.trigger("change"), this.$element.trigger("clear.bs.fileinput"))
    }, i.prototype.reset = function() {
        this.clear(!1), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.$element.find(".fileinput-filename").text(""), this.original.exists ? this.$element.addClass("fileinput-exists").removeClass("fileinput-new") : this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), this.$element.trigger("reset.bs.fileinput")
    }, i.prototype.trigger = function(t) {
        this.$input.trigger("click"), t.preventDefault()
    }, t.fn.fileinput = function(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("fileinput");
            s || n.data("fileinput", s = new i(this, e)), "string" == typeof e && s[e]()
        })
    }, t.fn.fileinput.Constructor = i, t(document).on("click.fileinput.data-api", '[data-provides="fileinput"]', function(e) {
        var i = t(this);
        if (!i.data("fileinput")) {
            i.fileinput(i.data());
            var n = t(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
            n.length > 0 && (e.preventDefault(), n.trigger("click.bs.fileinput"))
        }
    })
}(jQuery),
(jQuery, window, document),
function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push(a);
            this.handles = s.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, n, s, a, o, r, l, c, d = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(n - d.values(e));
                (s > i || s === i && (e === d._lastChangedValue || d.values(e) === u.min)) && (s = i, a = t(this), o = e)
            }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), c = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - a.width() / 2,
                top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, n), this._animateOff = !0, !0))

        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, n, s, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), a = this._valueMin() + n * s, this._trimAlignValue(a)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var n, s, a;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, a = this._trigger("slide", t, {

                handle: this.handles[e],
                value: i,
                values: s
            }), n = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var n, s, a;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], a = 0; n.length > a; a += 1) n[a] = this._trimAlignValue(s[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, n, s, a, o = this.options.range,
                r = this.options,
                l = this,
                c = this._animateOff ? !1 : r.animate,
                d = {};
            this.options.values && this.options.values.length ? this.handles.each(function(n) {
                i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), d["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](d, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (n = this.value(), s = this._valueMin(), a = this._valueMax(), i = a !== s ? 100 * ((n - s) / (a - s)) : 0, d["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](d, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === o && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var n, s, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, r), n === !1)) return
                }
                switch (o = this.options.step, s = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        a = this._trimAlignValue(s + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        a = this._trimAlignValue(s - o)
                }
                this._slide(i, r, a)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery);


jQuery(document).ready(
function()
	{
	resize_field_appendix(10);
	setTimeout(
		function()
			{
			resize_field_appendix(100);
			},500
		);
	setTimeout(
		function()
			{
			resize_field_appendix(100);
			},1000
		);
	setTimeout(
		function()
			{
			resize_field_appendix(100);
			},2000
		);
	setTimeout(
		function()
			{
			resize_field_appendix(100);
			},4000
		);
	
	
	jQuery(document).on('click','.the-thumb',
				function()
					{
					jQuery(this).closest('.form_field').find('.the-thumb').removeClass('checked').removeClass('text-success').removeClass('text-danger');
					if(jQuery(this).hasClass('fa-thumbs-o-up'))
						jQuery(this).addClass('text-success').addClass('checked')
						
					if(jQuery(this).hasClass('fa-thumbs-o-down'))
						jQuery(this).addClass('text-danger').addClass('checked')
						
					jQuery(this).parent().find('input').trigger('click');
					}
				);
		jQuery(document).on('click','.the-smile',
				function()
					{
					jQuery(this).closest('.form_field').find('.the-smile').removeClass('checked').removeClass('text-success').removeClass('text-danger').removeClass('text-warning');
					if(jQuery(this).hasClass('fa-smile-o'))
						jQuery(this).addClass('text-success').addClass('checked')						
					if(jQuery(this).hasClass('fa-frown-o'))
						jQuery(this).addClass('text-danger').addClass('checked')
					if(jQuery(this).hasClass('fa-meh-o'))
						jQuery(this).addClass('text-warning').addClass('checked')
						
					jQuery(this).parent().find('input').trigger('click');
					}
				);
	
	jQuery('body').on('click',':not(.icon-dropdown .icon-container)',
				function()
					{
					jQuery('.icon-dropdown-opened').removeClass('icon-dropdown-opened');
					jQuery('.icon-dropdown .icon-container').hide();
					}
				);

	jQuery('.icon-select-group').each(
		function()
			{
			if(jQuery(this).attr('data-append-to') && jQuery(this).attr('data-append-to')!='')
				{	
				var field = jQuery(this).detach();
				
				var select_group = jQuery(this);
				field.addClass('appendix_field');
				field.removeClass('form_field');
				
				var set_drop_down_width = 0;
				var append_to_field = jQuery('#'+jQuery(this).attr('data-append-to'));
				
				var the_input = append_to_field.find('input');
				
				
					
				if(append_to_field.hasClass('material_field'))
					{
					if(the_input.parent().attr('class')!='input-group-md')
						the_input.wrap('<div class="input-group-md"></div>');
					
					if(!append_to_field.find('#field_container .appendix-group').is('div'))
						append_to_field.find('#field_container .input-group-md').append('<div class="appendix-group"></div>');
					
					append_to_field.find('#field_container .input-group-md .appendix-group').append(field);
					}
				else
					{
					if(the_input.parent().attr('class')!='input-group')
						the_input.wrap('<div class="input-group"></div>');
						
						
					if(jQuery(this).attr('data-appendix') && jQuery(this).attr('data-appendix')=='pre')
						{
						append_to_field.find('#field_container .input-group').prepend('<div class="input-group-addon prefix add_on_id'+ jQuery(this).attr('id') +'"></div>');
						append_to_field.find('#field_container .input-group-addon.prefix.add_on_id'+ jQuery(this).attr('id') +'').append(field);	
						}
					else
						{
						append_to_field.find('#field_container .input-group').append('<div class="input-group-addon postfix add_on_id'+ jQuery(this).attr('id') +'"></div>');
						append_to_field.find('#field_container .input-group-addon.postfix.add_on_id'+ jQuery(this).attr('id') +'').append(field);	
						}
					
					
					}
				}
			}
		);


	setTimeout(function()
		{ 
		
		jQuery('.icon-spinner').each(
			function()
				{
				var icon_spinner = jQuery(this);
				icon_spinner.find('.icon-container .icon-holder').first().trigger('click'); 	
				
				}
			);
		

		},50);
	
	function nf_spin_icon(spinner,spin){
		
		if(spin=='up')
			var obj = spinner.find('.icon-spin-next')
		else
			var obj = spinner.find('.icon-spin-prev')
		
		obj.find('span').removeClass('animated');
		obj.find('span').removeClass('pulse_icon');
		setTimeout(function(){	
			obj.find('span').addClass('animated');
			obj.find('span').addClass('pulse_icon');
		},20 );
		var select_container = obj.parent();
		var current_selection = select_container.find('.icon-container .icon-checked');	
		var selection_container = select_container.find('.icon-container');	

		if(spin=='up')
			{
			if(current_selection.next('.icon-holder').is('div'))
				current_selection.next('.icon-holder').trigger('click');
			else
				selection_container.find('.icon-holder').first().trigger('click');
			}
		else
			{
			if(current_selection.prev('.icon-holder').is('div'))
				current_selection.prev('.icon-holder').trigger('click');
			else
				selection_container.find('.icon-holder').last().trigger('click');	
			}
			
	}
	
	jQuery('.icon-spinner').on('mousewheel DOMMouseScroll', function(ev) {
         
          var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;

          ev.stopPropagation();
          ev.preventDefault();

          if (delta < 0) {
            nf_spin_icon(jQuery(this),'down');
          }
          else {
            nf_spin_icon(jQuery(this),'up');
          }
        });
 
	
	jQuery(document).on('click','.icon-spin-next',
				function()
					{
					nf_spin_icon(jQuery(this).closest('.icon-spinner')	,'up');
					}
				);
	
	jQuery(document).on('click','.icon-spin-prev',
				function()
					{
					nf_spin_icon(jQuery(this).closest('.icon-spinner'),'down');
					}
				);
	
	
	jQuery(document).on('click','div.icon-holder',
				function()
					{
					//console.log('clicked');
					var label = jQuery(this);
					
					var form_field = label.closest('.icon-select-group');
					
					var input_container = jQuery(this).closest('.input_container');
					
					var icon_container = input_container.find('.icon-container');
					var selected_icon_container = input_container.find('.selected-icon-holder');

					icon_container.css('width', icon_container.closest('.form_field').css('width')+'px');

					if(label.hasClass('default-selected-icon'))
						{
						
						
						if(jQuery(this).hasClass('icon-dropdown-opened'))
							{
							icon_container.slideUp('fast');
							label.removeClass('icon-dropdown-opened');
							}
						else
							{
							label.addClass('icon-dropdown-opened');
							icon_container.slideDown('fast');	
							}
						}
					else
						{
							var animation = 'flipInY';
							if(label.closest('.input_container').attr('data-animation'))
								animation = label.closest('.input_container').attr('data-animation');
							
							
							label.find('.icon-select').removeClass('animated');
							label.find('.icon-select').removeClass(animation);
							
							setTimeout(function(){
								label.find('.icon-select').addClass('animated');
								label.find('.icon-select').addClass(animation);
								
								
							},10);
							setTimeout(function()
								{
								if(label.hasClass('icon-checked'))
									{
									
									if(input_container.hasClass('icon-spinner'))
										input_container.find('.icon-spin-next').trigger('click');
									
									if(label.hasClass('multi-dropdown-icon-checked'))
										{
										icon_container.show();
										var unselected = label.detach();
										icon_container.find('.icon_place_holder_'+ unselected.attr('data-icon-number')).prepend(unselected);
										
										if(selected_icon_container.find('.multi-dropdown-icon-checked').length>0)
											selected_icon_container.find('.default-selected-icon').hide();
										else
											{
											selected_icon_container.find('.default-selected-icon').show();
											
											selected_icon_container.find('.default-selected-icon input').prop('checked',true)
											selected_icon_container.find('.default-selected-icon input').trigger('change');
											icon_container.hide();
											}
										}
										
									label.find('.off-icon').show();
									label.find('.on-icon').hide();
									
									label.find('.off-label').show();
									label.find('.on-label').hide();
									
									label.removeClass('icon-checked');
									
									label.removeClass('icon-checked');
									label.addClass('animated');
									
									label.find('.icon-select').removeClass(animation);
									label.find('.icon-select').addClass(animation);
									
									label.find('input').prop('checked',false);
									label.find('input').trigger('change');
									
									
									}
								else
									{
										
									
										
									label.find('input').prop('checked',true);
									label.find('input').trigger('change');
									
									if(label.find('input').attr('type')!='checkbox')
										{
										label.parent().find('.icon-holder').removeClass('icon-checked');
										label.parent().find('.off-label').show();
										label.parent().find('.on-label').hide();
										
										label.parent().find('.off-icon').show();
										label.parent().find('.on-icon').hide();
										}
									
									label.addClass('icon-checked');
									
									label.find('.on-label').show();
									label.find('.off-label').hide();
									
									label.find('.on-icon').show();
									label.find('.off-icon').hide();
									
									
									
									if(input_container.hasClass('icon-spinner') )
										{
										
										if(form_field.hasClass('appendix_field') && !form_field.hasClass('material_field'))
											{
											var label_width = 0;
											var icon_width = 0;
											
											if(!input_container.hasClass('icon-label-tip') && !input_container.hasClass('icon-label-hidden'))
												{
												label_width = label.find('.on-label').outerWidth();
												}
											
											icon_width = label.find('.on-icon span').css('font-size');
											
											input_container.css('width',(55+(parseInt(label_width)+parseInt(icon_width)))+'px')
			
								
											}
										}
									if(input_container.hasClass('icon-dropdown'))
										{
										
										
										if(!icon_container.find('.icon_place_holder_'+label.attr('data-icon-number')).is('span') && !label.hasClass('is_default_selection'))
											label.wrap('<span class="icon_place_holder_'+ label.attr('data-icon-number') +'"></span>');
										
										var selected = label.detach();
										
										if(label.find('input').attr('type')!='checkbox')
											{
											icon_container.hide();
											var default_selected = selected_icon_container.find('.icon-holder').detach();
											
											selected.addClass('default-selected-icon');
										
											default_selected.removeClass('default-selected-icon');
											
											default_selected.removeClass('icon-checked');
												
										
											label.removeClass('icon-dropdown-opened');
										
											default_selected.find('.off-label').show();
											default_selected.find('.on-label').hide();
											default_selected.find('.off-icon').show();
											default_selected.find('.on-icon').hide();
										
											if(default_selected.hasClass('is_default_selection'))
												icon_container.prepend(default_selected);
											else
												icon_container.find('.icon_place_holder_'+ default_selected.attr('data-icon-number')).prepend(default_selected);
											}
										else
											{
											if(form_field.hasClass('multi-icon-select'))
												{
												if(icon_container.find('.icon-holder').length>0)
													icon_container.show();
												else
													icon_container.hide();
												}
											
											
											selected_icon_container.find('.default-selected-icon').hide();
											selected_icon_container.find('.default-selected-icon input').prop('checked',false);
											selected_icon_container.find('.default-selected-icon input').trigger('change')
											selected.addClass('multi-dropdown-icon-checked');	
											}
										selected_icon_container.append(selected);
												
										if(form_field.hasClass('appendix_field') && !form_field.hasClass('material_field'))
											{
											var label_width = 0;
											var icon_width = 0;
											if(!input_container.hasClass('icon-label-tip') && !input_container.hasClass('icon-label-hidden'))
												{
												label_width = selected_icon_container.find('.icon-checked .icon-label').outerWidth();
												}
											
											label_width = selected_icon_container.find('.icon-checked .icon-label').outerWidth();
											icon_width = selected_icon_container.find('.icon-checked .icon-select').outerWidth();
											
											input_container.css('width',(55+(parseInt(label_width)+parseInt(icon_width)))+'px')
											}	
										}
									}
								},110);
						}
						if(icon_container.closest('.step ').hasClass('auto-step'))
							{
							
							if(icon_container.closest('.step').hasClass('last_step'))
								{
								setTimeout(function()
									{
									icon_container.closest('form').submit();
									},500);
								}
							else
								{	
								
								setTimeout(function()
									{	
									
									jQuery(this).closest('form').submit();
									
									icon_container.closest('.step ').find('.nex-step').trigger('click');	
									},300
									)
								}
						}
					}
				);
	
	
	jQuery(document).on('keyup keypress', '#nex-forms form input[type="text"]', function(e) {
	  if(e.which == 13) {
		e.preventDefault();
		return false;
	  }
	});
	
	jQuery(document).on('click','.nexf_title',
		function()
			{
			jQuery(this).parent().parent().find('input').focus();
			jQuery(this).parent().parent().find('textarea').focus();
			}
		);
	jQuery('#nex-forms input').each(
			function()
				{
				if(jQuery(this).attr('data-value'))
					jQuery(this).val(jQuery(this).attr('data-value'));
				}
			);
		jQuery('#nex-forms textarea').each(
			function()
				{
				if(jQuery(this).attr('data-value'))
					jQuery(this).val(jQuery(this).attr('data-value'));
				}
			)
	
	
	jQuery('.pre_fill_fields input').each(
		function()
			{
			var the_input = jQuery('div.ui-nex-forms-container').find('input[name="'+ jQuery(this).attr('name') +'"]')
			
			var pre_val = jQuery(this).val();
			
			
			if(the_input.hasClass('the_slider'))
				{
					the_input.parent().find('#slider').slider({ value: parseInt(pre_val) });
					the_input.parent().find('.count-text').text(pre_val);
					the_input.parent().find( 'input' ).val(parseInt(pre_val));
					the_input.parent().find( 'input' ).trigger('change');
				}
			
			jQuery('div.ui-nex-forms-container').find('select[name="'+ jQuery(this).attr('name') +'[]"] option, select[name="'+ jQuery(this).attr('name') +'"] option').each(
				function(index)
					{
					if(jQuery(this).attr('value')==pre_val)
						{
						jQuery(this).attr('selected','selected');
						jQuery('select[name="'+ jQuery(this).attr('name') +'[]"]').trigger('change');
						jQuery('select[name="'+ jQuery(this).attr('name') +'"]').trigger('change');
						jQuery(this).closest('.input_container').find('ul.dropdown-menu li:eq('+ index +')').addClass('selected');
						var setval = jQuery(this).closest('.input_container').find('ul.dropdown-menu li.selected').text();
						jQuery(this).closest('.input_container').find('button.selectpicker span.filter-option').text(setval);
						}
					else
						{
						jQuery(this).closest('.input_container').find('ul.dropdown-menu li:eq('+ index +')').removeClass('selected');
						}
					}
				)
			
			//CHECKS
			jQuery('div.ui-nex-forms-container').find('input[name="'+ jQuery(this).attr('name') +'[]"]').each(
				function()
					{
					if(jQuery(this).val()==pre_val)
						{
						var get_check = jQuery(this).parent().find('a');
						setTimeout(function(){ get_check.trigger('click') },200);
						}
					}
				)
			//INPUTS
				if(the_input.attr('type')=='text')
					{
					the_input.val(jQuery(this).val())
					}
				if(the_input.attr('type')=='hidden')
					{
					the_input.val(jQuery(this).val())
					}
				if(the_input.attr('type')=='radio')
					{
					the_input.closest('.icon-container').find('input').each(
						function()
							{
							if(jQuery(this).val()==pre_val)
								{
								var get_radio = jQuery(this).parent();
								setTimeout(function(){ get_radio.trigger('click') },200);
								}	
							}
						);
					the_input.closest('.the-radios').find('input').each(
						function()
							{
							if(jQuery(this).val()==pre_val)
								{
								var get_radio = jQuery(this).parent().find('a');
								setTimeout(function(){ get_radio.trigger('click') },200);
								}	
							}
						);
					}
				
			//CHECKS
			jQuery('div.ui-nex-forms-container').find('textarea[name="'+ jQuery(this).attr('name') +'"]').val(pre_val);
				
			}
		);
	}
);
/*!
 * Bootstrap Colorpicker v2.3.3
 * http://mjolnic.github.io/bootstrap-colorpicker/
 *
 * Originally written by (c) 2012 Stefan Petre
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 *
 */

(function(factory) {
  "use strict";
  if (typeof c_exports === 'object') {
    module.c_exports = factory(window.jQuery);
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (window.jQuery && !window.jQuery.fn.colorpicker) {
    factory(window.jQuery);
  }
}(function($) {
  'use strict';

  /**
   * Color manipulation helper class
   *
   * @param {Object|String} val
   * @param {Object} predefinedColors
   * @constructor
   */
  var Color = function(val, predefinedColors) {
    this.value = {
      h: 0,
      s: 0,
      b: 0,
      a: 1
    };
    this.origFormat = null; // original string format
    if (predefinedColors) {
      $.extend(this.colors, predefinedColors);
    }
    if (val) {
      if (val.toLowerCase !== undefined) {
        // cast to string
        val = val + '';
        this.setColor(val);
      } else if (val.h !== undefined) {
        this.value = val;
      }
    }
  };

  Color.prototype = {
    constructor: Color,
    // 140 predefined colors from the HTML Colors spec
    colors: {
      "aliceblue": "#f0f8ff",
      "antiquewhite": "#faebd7",
      "aqua": "#00ffff",
      "aquamarine": "#7fffd4",
      "azure": "#f0ffff",
      "beige": "#f5f5dc",
      "bisque": "#ffe4c4",
      "black": "#000000",
      "blanchedalmond": "#ffebcd",
      "blue": "#0000ff",
      "blueviolet": "#8a2be2",
      "brown": "#a52a2a",
      "burlywood": "#deb887",
      "cadetblue": "#5f9ea0",
      "chartreuse": "#7fff00",
      "chocolate": "#d2691e",
      "coral": "#ff7f50",
      "cornflowerblue": "#6495ed",
      "cornsilk": "#fff8dc",
      "crimson": "#dc143c",
      "cyan": "#00ffff",
      "darkblue": "#00008b",
      "darkcyan": "#008b8b",
      "darkgoldenrod": "#b8860b",
      "darkgray": "#a9a9a9",
      "darkgreen": "#006400",
      "darkkhaki": "#bdb76b",
      "darkmagenta": "#8b008b",
      "darkolivegreen": "#556b2f",
      "darkorange": "#ff8c00",
      "darkorchid": "#9932cc",
      "darkred": "#8b0000",
      "darksalmon": "#e9967a",
      "darkseagreen": "#8fbc8f",
      "darkslateblue": "#483d8b",
      "darkslategray": "#2f4f4f",
      "darkturquoise": "#00ced1",
      "darkviolet": "#9400d3",
      "deeppink": "#ff1493",
      "deepskyblue": "#00bfff",
      "dimgray": "#696969",
      "dodgerblue": "#1e90ff",
      "firebrick": "#b22222",
      "floralwhite": "#fffaf0",
      "forestgreen": "#228b22",
      "fuchsia": "#ff00ff",
      "gainsboro": "#dcdcdc",
      "ghostwhite": "#f8f8ff",
      "gold": "#ffd700",
      "goldenrod": "#daa520",
      "gray": "#808080",
      "green": "#008000",
      "greenyellow": "#adff2f",
      "honeydew": "#f0fff0",
      "hotpink": "#ff69b4",
      "indianred": "#cd5c5c",
      "indigo": "#4b0082",
      "ivory": "#fffff0",
      "khaki": "#f0e68c",
      "lavender": "#e6e6fa",
      "lavenderblush": "#fff0f5",
      "lawngreen": "#7cfc00",
      "lemonchiffon": "#fffacd",
      "lightblue": "#add8e6",
      "lightcoral": "#f08080",
      "lightcyan": "#e0ffff",
      "lightgoldenrodyellow": "#fafad2",
      "lightgrey": "#d3d3d3",
      "lightgreen": "#90ee90",
      "lightpink": "#ffb6c1",
      "lightsalmon": "#ffa07a",
      "lightseagreen": "#20b2aa",
      "lightskyblue": "#87cefa",
      "lightslategray": "#778899",
      "lightsteelblue": "#b0c4de",
      "lightyellow": "#ffffe0",
      "lime": "#00ff00",
      "limegreen": "#32cd32",
      "linen": "#faf0e6",
      "magenta": "#ff00ff",
      "maroon": "#800000",
      "mediumaquamarine": "#66cdaa",
      "mediumblue": "#0000cd",
      "mediumorchid": "#ba55d3",
      "mediumpurple": "#9370d8",
      "mediumseagreen": "#3cb371",
      "mediumslateblue": "#7b68ee",
      "mediumspringgreen": "#00fa9a",
      "mediumturquoise": "#48d1cc",
      "mediumvioletred": "#c71585",
      "midnightblue": "#191970",
      "mintcream": "#f5fffa",
      "mistyrose": "#ffe4e1",
      "moccasin": "#ffe4b5",
      "navajowhite": "#ffdead",
      "navy": "#000080",
      "oldlace": "#fdf5e6",
      "olive": "#808000",
      "olivedrab": "#6b8e23",
      "orange": "#ffa500",
      "orangered": "#ff4500",
      "orchid": "#da70d6",
      "palegoldenrod": "#eee8aa",
      "palegreen": "#98fb98",
      "paleturquoise": "#afeeee",
      "palevioletred": "#d87093",
      "papayawhip": "#ffefd5",
      "peachpuff": "#ffdab9",
      "peru": "#cd853f",
      "pink": "#ffc0cb",
      "plum": "#dda0dd",
      "powderblue": "#b0e0e6",
      "purple": "#800080",
      "red": "#ff0000",
      "rosybrown": "#bc8f8f",
      "royalblue": "#4169e1",
      "saddlebrown": "#8b4513",
      "salmon": "#fa8072",
      "sandybrown": "#f4a460",
      "seagreen": "#2e8b57",
      "seashell": "#fff5ee",
      "sienna": "#a0522d",
      "silver": "#c0c0c0",
      "skyblue": "#87ceeb",
      "slateblue": "#6a5acd",
      "slategray": "#708090",
      "snow": "#fffafa",
      "springgreen": "#00ff7f",
      "steelblue": "#4682b4",
      "tan": "#d2b48c",
      "teal": "#008080",
      "thistle": "#d8bfd8",
      "tomato": "#ff6347",
      "turquoise": "#40e0d0",
      "violet": "#ee82ee",
      "wheat": "#f5deb3",
      "white": "#ffffff",
      "whitesmoke": "#f5f5f5",
      "yellow": "#ffff00",
      "yellowgreen": "#9acd32",
      "transparent": "transparent"
    },
    _sanitizeNumber: function(val) {
      if (typeof val === 'number') {
        return val;
      }
      if (isNaN(val) || (val === null) || (val === '') || (val === undefined)) {
        return 1;
      }
      if (val === '') {
        return 0;
      }
      if (val.toLowerCase !== undefined) {
        if (val.match(/^\./)) {
          val = "0" + val;
        }
        return Math.ceil(parseFloat(val) * 100) / 100;
      }
      return 1;
    },
    isTransparent: function(strVal) {
      if (!strVal) {
        return false;
      }
      strVal = strVal.toLowerCase().trim();
      return (strVal === 'transparent') || (strVal.match(/#?00000000/)) || (strVal.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/));
    },
    rgbaIsTransparent: function(rgba) {
      return ((rgba.r === 0) && (rgba.g === 0) && (rgba.b === 0) && (rgba.a === 0));
    },
    //parse a string to HSB
    setColor: function(strVal) {
      strVal = strVal.toLowerCase().trim();
      if (strVal) {
        if (this.isTransparent(strVal)) {
          this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 0
          };
        } else {
          this.value = this.stringToHSB(strVal) || {
            h: 0,
            s: 0,
            b: 0,
            a: 1
          }; // if parser fails, defaults to black
        }
      }
    },
    stringToHSB: function(strVal) {
      strVal = strVal.toLowerCase();
      var alias;
      if (typeof this.colors[strVal] !== 'undefined') {
        strVal = this.colors[strVal];
        alias = 'alias';
      }
      var that = this,
        result = false;
      $.each(this.stringParsers, function(i, parser) {
        var match = parser.re.exec(strVal),
          values = match && parser.parse.apply(that, [match]),
          format = alias || parser.format || 'rgba';
        if (values) {
          if (format.match(/hsla?/)) {
            result = that.RGBtoHSB.apply(that, that.HSLtoRGB.apply(that, values));
          } else {
            result = that.RGBtoHSB.apply(that, values);
          }
          that.origFormat = format;
          return false;
        }
        return true;
      });
      return result;
    },
    setHue: function(h) {
      this.value.h = 1 - h;
    },
    setSaturation: function(s) {
      this.value.s = s;
    },
    setBrightness: function(b) {
      this.value.b = 1 - b;
    },
    setAlpha: function(a) {
      this.value.a = Math.round((parseInt((1 - a) * 100, 10) / 100) * 100) / 100;
    },
    toRGB: function(h, s, b, a) {
      if (!h) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
      }
      h *= 360;
      var R, G, B, X, C;
      h = (h % 360) / 60;
      C = b * s;
      X = C * (1 - Math.abs(h % 2 - 1));
      R = G = B = b - C;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];
      return {
        r: Math.round(R * 255),
        g: Math.round(G * 255),
        b: Math.round(B * 255),
        a: a || this.value.a
      };
    },
    toHex: function(h, s, b, a) {
      var rgb = this.toRGB(h, s, b, a);
      if (this.rgbaIsTransparent(rgb)) {
        return 'transparent';
      }
      return '#' + ((1 << 24) | (parseInt(rgb.r) << 16) | (parseInt(rgb.g) << 8) | parseInt(rgb.b)).toString(16).substr(1);
    },
    toHSL: function(h, s, b, a) {
      h = h || this.value.h;
      s = s || this.value.s;
      b = b || this.value.b;
      a = a || this.value.a;

      var H = h,
        L = (2 - s) * b,
        S = s * b;
      if (L > 0 && L <= 1) {
        S /= L;
      } else {
        S /= 2 - L;
      }
      L /= 2;
      if (S > 1) {
        S = 1;
      }
      return {
        h: isNaN(H) ? 0 : H,
        s: isNaN(S) ? 0 : S,
        l: isNaN(L) ? 0 : L,
        a: isNaN(a) ? 0 : a

      };
    },
    toAlias: function(r, g, b, a) {
      var rgb = this.toHex(r, g, b, a);
      for (var alias in this.colors) {
        if (this.colors[alias] === rgb) {
          return alias;
        }
      }
      return false;
    },
    RGBtoHSB: function(r, g, b, a) {
      r /= 255;
      g /= 255;
      b /= 255;

      var H, S, V, C;
      V = Math.max(r, g, b);
      C = V - Math.min(r, g, b);
      H = (C === 0 ? null :
        V === r ? (g - b) / C :
        V === g ? (b - r) / C + 2 :
        (r - g) / C + 4
      );
      H = ((H + 360) % 6) * 60 / 360;
      S = C === 0 ? 0 : C / V;
      return {
        h: this._sanitizeNumber(H),
        s: S,
        b: V,
        a: this._sanitizeNumber(a)
      };
    },
    HueToRGB: function(p, q, h) {
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
      if ((h * 6) < 1) {
        return p + (q - p) * h * 6;
      } else if ((h * 2) < 1) {
        return q;
      } else if ((h * 3) < 2) {
        return p + (q - p) * ((2 / 3) - h) * 6;
      } else {
        return p;
      }
    },
    HSLtoRGB: function(h, s, l, a) {
      if (s < 0) {
        s = 0;
      }
      var q;
      if (l <= 0.5) {
        q = l * (1 + s);
      } else {
        q = l + s - (l * s);
      }

      var p = 2 * l - q;

      var tr = h + (1 / 3);
      var tg = h;
      var tb = h - (1 / 3);

      var r = Math.round(this.HueToRGB(p, q, tr) * 255);
      var g = Math.round(this.HueToRGB(p, q, tg) * 255);
      var b = Math.round(this.HueToRGB(p, q, tb) * 255);
      return [r, g, b, this._sanitizeNumber(a)];
    },
    toString: function(format) {
      format = format || 'rgba';
      var c = false;
      switch (format) {
        case 'rgb':
          {
            c = this.toRGB();
            if (this.rgbaIsTransparent(c)) {
              return 'transparent';
            }
            return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
          }
          break;
        case 'rgba':
          {
            c = this.toRGB();
            return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')';
          }
          break;
        case 'hsl':
          {
            c = this.toHSL();
            return 'hsl(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%)';
          }
          break;
        case 'hsla':
          {
            c = this.toHSL();
            return 'hsla(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%,' + c.a + ')';
          }
          break;
        case 'hex':
          {
            return this.toHex();
          }
          break;
        case 'alias':
          return this.toAlias() || this.toHex();
        default:
          {
            return c;
          }
          break;
      }
    },
    // a set of RE's that can match strings and generate color tuples.
    // from John Resig color plugin
    // https://github.com/jquery/jquery-color/
    stringParsers: [{
      re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          1
        ];
      }
    }, {
      re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          1
        ];
      }
    }, {
      re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'hsl',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'hsla',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1], 16),
          parseInt(execResult[2], 16),
          parseInt(execResult[3], 16),
          1
        ];
      }
    }, {
      re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1] + execResult[1], 16),
          parseInt(execResult[2] + execResult[2], 16),
          parseInt(execResult[3] + execResult[3], 16),
          1
        ];
      }
    }],
    colorNameToHex: function(name) {
      if (typeof this.colors[name.toLowerCase()] !== 'undefined') {
        return this.colors[name.toLowerCase()];
      }
      return false;
    }
  };

  /*
   * Default plugin options
   */
  var defaults = {
    horizontal: false, // horizontal mode layout ?
    inline: false, //forces to show the colorpicker as an inline element
    color: false, //forces a color
    format: false, //forces a format
    input: 'input', // children input selector
    container: false, // container selector
    component: '.add-on, .input-group-addon', // children component selector
    sliders: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setHue'
      },
      alpha: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setAlpha'
      }
    },
    slidersHorz: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setHue',
        callTop: false
      },
      alpha: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setAlpha',
        callTop: false
      }
    },
    template: '<div class="colorpicker dropdown-menu">' +
      '<div class="colorpicker-saturation"><i><b></b></i></div>' +
      '<div class="colorpicker-hue"><i></i></div>' +
      '<div class="colorpicker-alpha"><i></i></div>' +
      '<div class="colorpicker-color"><div /></div>' +
      '<div class="colorpicker-selectors"></div>' +
      '</div>',
    align: 'right',
    customClass: null,
    colorSelectors: null
  };

  /**
   * Colorpicker component class
   *
   * @param {Object|String} element
   * @param {Object} options
   * @constructor
   */
  var Colorpicker = function(element, options) {
    this.element = $(element).addClass('colorpicker-element');
    this.options = $.extend(true, {}, defaults, this.element.data(), options);
    this.component = this.options.component;
    this.component = (this.component !== false) ? this.element.find(this.component) : false;
    if (this.component && (this.component.length === 0)) {
      this.component = false;
    }
    this.container = (this.options.container === true) ? this.element : this.options.container;
    this.container = (this.container !== false) ? $(this.container) : false;

    // Is the element an input? Should we search inside for any input?
    this.input = this.element.is('input') ? this.element : (this.options.input ?
      this.element.find(this.options.input) : false);
    if (this.input && (this.input.length === 0)) {
      this.input = false;
    }
    // Set HSB color
    this.color = new Color(this.options.color !== false ? this.options.color : this.getValue(), this.options.colorSelectors);
    this.format = this.options.format !== false ? this.options.format : this.color.origFormat;

    if (this.options.color !== false) {
      this.updateInput(this.color);
      this.updateData(this.color);
    }

    // Setup picker
    this.picker = $(this.options.template);
    if (this.options.customClass) {
      this.picker.addClass(this.options.customClass);
    }
    if (this.options.inline) {
      this.picker.addClass('colorpicker-inline colorpicker-visible');
    } else {
      this.picker.addClass('colorpicker-hidden');
    }
    if (this.options.horizontal) {
      this.picker.addClass('colorpicker-horizontal');
    }
    if (this.format === 'rgba' || this.format === 'hsla' || this.options.format === false) {
      this.picker.addClass('colorpicker-with-alpha');
    }
    if (this.options.align === 'right') {
      this.picker.addClass('colorpicker-right');
    }
    if (this.options.inline === true) {
      this.picker.addClass('colorpicker-no-arrow');
    }
    if (this.options.colorSelectors) {
      var colorpicker = this;
      $.each(this.options.colorSelectors, function(name, color) {
        var $btn = $('<i />').css('background-color', color).data('class', name);
        $btn.click(function() {
          colorpicker.setValue($(this).css('background-color'));
        });
        colorpicker.picker.find('.colorpicker-selectors').append($btn);
      });
      this.picker.find('.colorpicker-selectors').show();
    }
    this.picker.on('mousedown.colorpicker touchstart.colorpicker', $.proxy(this.mousedown, this));
    this.picker.appendTo(this.container ? this.container : $('body'));

    // Bind events
    if (this.input !== false) {
      this.input.on({
        'keyup.colorpicker': $.proxy(this.keyup, this)
      });
      this.input.on({
        'change.colorpicker': $.proxy(this.change, this)
      });
      if (this.component === false) {
        this.element.on({
          'focus.colorpicker': $.proxy(this.show, this)
        });
      }
      if (this.options.inline === false) {
        this.element.on({
          'focusout.colorpicker': $.proxy(this.hide, this)
        });
      }
    }

    if (this.component !== false) {
      this.component.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    if ((this.input === false) && (this.component === false)) {
      this.element.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    // for HTML5 input[type='color']
    if ((this.input !== false) && (this.component !== false) && (this.input.attr('type') === 'color')) {

      this.input.on({
        'click.colorpicker': $.proxy(this.show, this),
        'focus.colorpicker': $.proxy(this.show, this)
      });
    }
    this.update();

    $($.proxy(function() {
      this.element.trigger('create');
    }, this));
  };

  Colorpicker.Color = Color;

  Colorpicker.prototype = {
    constructor: Colorpicker,
    destroy: function() {
      this.picker.remove();
      this.element.removeData('colorpicker', 'color').off('.colorpicker');
      if (this.input !== false) {
        this.input.off('.colorpicker');
      }
      if (this.component !== false) {
        this.component.off('.colorpicker');
      }
      this.element.removeClass('colorpicker-element');
      this.element.trigger({
        type: 'destroy'
      });
    },
    reposition: function() {
      if (this.options.inline !== false || this.options.container) {
        return false;
      }
      var type = this.container && this.container[0] !== document.body ? 'position' : 'offset';
      var element = this.component || this.element;
      var offset = element[type]();
      if (this.options.align === 'right') {
        offset.left -= this.picker.outerWidth() - element.outerWidth();
      }
      this.picker.css({
        top: offset.top + element.outerHeight(),
        left: offset.left
      });
    },
    show: function(e) {
      if (this.isDisabled()) {
        return false;
      }
      this.picker.addClass('colorpicker-visible').removeClass('colorpicker-hidden');
      this.reposition();
      $(window).on('resize.colorpicker', $.proxy(this.reposition, this));
      if (e && (!this.hasInput() || this.input.attr('type') === 'color')) {
        if (e.stopPropagation && e.preventDefault) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
      if ((this.component || !this.input) && (this.options.inline === false)) {
        $(window.document).on({
          'mousedown.colorpicker': $.proxy(this.hide, this)
        });
      }
      this.element.trigger({
        type: 'showPicker',
        color: this.color
      });
    },
    hide: function() {
      this.picker.addClass('colorpicker-hidden').removeClass('colorpicker-visible');
      $(window).off('resize.colorpicker', this.reposition);
      $(document).off({
        'mousedown.colorpicker': this.hide
      });
      this.update();
      this.element.trigger({
        type: 'hidePicker',
        color: this.color
      });
    },
    updateData: function(val) {
      val = val || this.color.toString(this.format);
      this.element.data('color', val);
      return val;
    },
    updateInput: function(val) {
      val = val || this.color.toString(this.format);
      if (this.input !== false) {
        if (this.options.colorSelectors) {
          var color = new Color(val, this.options.colorSelectors);
          var alias = color.toAlias();
          if (typeof this.options.colorSelectors[alias] !== 'undefined') {
            val = alias;
          }
        }
        this.input.prop('value', val);
      }
      return val;
    },
    updatePicker: function(val) {
      if (val !== undefined) {
        this.color = new Color(val, this.options.colorSelectors);
      }
      var sl = (this.options.horizontal === false) ? this.options.sliders : this.options.slidersHorz;
      var icns = this.picker.find('i');
      if (icns.length === 0) {
        return;
      }
      if (this.options.horizontal === false) {
        sl = this.options.sliders;
        icns.eq(1).css('top', sl.hue.maxTop * (1 - this.color.value.h)).end()
          .eq(2).css('top', sl.alpha.maxTop * (1 - this.color.value.a));
      } else {
        sl = this.options.slidersHorz;
        icns.eq(1).css('left', sl.hue.maxLeft * (1 - this.color.value.h)).end()
          .eq(2).css('left', sl.alpha.maxLeft * (1 - this.color.value.a));
      }
      icns.eq(0).css({
        'top': sl.saturation.maxTop - this.color.value.b * sl.saturation.maxTop,
        'left': this.color.value.s * sl.saturation.maxLeft
      });
      this.picker.find('.colorpicker-saturation').css('backgroundColor', this.color.toHex(this.color.value.h, 1, 1, 1));
      this.picker.find('.colorpicker-alpha').css('backgroundColor', this.color.toHex());
      this.picker.find('.colorpicker-color, .colorpicker-color div').css('backgroundColor', this.color.toString(this.format));
      return val;
    },
    updateComponent: function(val) {
      val = val || this.color.toString(this.format);
      if (this.component !== false) {
        var icn = this.component.find('i').eq(0);
        if (icn.length > 0) {
          icn.css({
            'backgroundColor': val
          });
        } else {
          this.component.css({
            'backgroundColor': val
          });
        }
      }

      return val;
    },
    update: function(force) {
      var val;
      if ((this.getValue(false) !== false) || (force === true)) {
        // Update input/data only if the current value is not empty
        val = this.updateComponent();
        this.updateInput(val);
        this.updateData(val);
        this.updatePicker(); // only update picker if value is not empty
      }
      return val;

    },
    setValue: function(val) { // set color manually
      this.color = new Color(val, this.options.colorSelectors);
      this.update(true);
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: val
      });
    },
    getValue: function(defaultValue) {
      defaultValue = (defaultValue === undefined) ? '#000000' : defaultValue;
      var val;
      if (this.hasInput()) {
        val = this.input.val();
      } else {
        val = this.element.data('color');
      }
      if ((val === undefined) || (val === '') || (val === null)) {
        // if not defined or empty, return default
        val = defaultValue;
      }
      return val;
    },
    hasInput: function() {
      return (this.input !== false);
    },
    isDisabled: function() {
      if (this.hasInput()) {
        return (this.input.prop('disabled') === true);
      }
      return false;
    },
    disable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', true);
        this.element.trigger({
          type: 'disable',
          color: this.color,
          value: this.getValue()
        });
        return true;
      }
      return false;
    },
    enable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', false);
        this.element.trigger({
          type: 'enable',
          color: this.color,
          value: this.getValue()
        });
        return true;
      }
      return false;
    },
    currentSlider: null,
    mousePointer: {
      left: 0,
      top: 0
    },
    mousedown: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();

      var target = $(e.target);

      //detect the slider and set the limits and callbacks
      var zone = target.closest('div');
      var sl = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
      if (!zone.is('.colorpicker')) {
        if (zone.is('.colorpicker-saturation')) {
          this.currentSlider = $.extend({}, sl.saturation);
        } else if (zone.is('.colorpicker-hue')) {
          this.currentSlider = $.extend({}, sl.hue);
        } else if (zone.is('.colorpicker-alpha')) {
          this.currentSlider = $.extend({}, sl.alpha);
        } else {
          return false;
        }
        var offset = zone.offset();
        //reference to guide's style

        this.currentSlider.guide = zone.find('i')[0].style;
        this.currentSlider.left = e.pageX - offset.left;
        this.currentSlider.top = e.pageY - offset.top;
        this.mousePointer = {
          left: e.pageX,
          top: e.pageY
        };
        //trigger mousemove to move the guide to the current position
        $(document).on({
          'mousemove.colorpicker': $.proxy(this.mousemove, this),
          'touchmove.colorpicker': $.proxy(this.mousemove, this),
          'mouseup.colorpicker': $.proxy(this.mouseup, this),
          'touchend.colorpicker': $.proxy(this.mouseup, this)
        }).trigger('mousemove');
      }
      return false;
    },
    mousemove: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();
      var left = Math.max(
        0,
        Math.min(
          this.currentSlider.maxLeft,
          this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left)
        )
      );
      var top = Math.max(
        0,
        Math.min(
          this.currentSlider.maxTop,
          this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)
        )
      );
      this.currentSlider.guide.left = left + 'px';
      this.currentSlider.guide.top = top + 'px';
      if (this.currentSlider.callLeft) {
        this.color[this.currentSlider.callLeft].call(this.color, left / this.currentSlider.maxLeft);
      }
      if (this.currentSlider.callTop) {
        this.color[this.currentSlider.callTop].call(this.color, top / this.currentSlider.maxTop);
      }
      // Change format dynamically
      // Only occurs if user choose the dynamic format by
      // setting option format to false
      if (this.currentSlider.callTop === 'setAlpha' && this.options.format === false) {

        // Converting from hex / rgb to rgba
        if (this.color.value.a !== 1) {
          this.format = 'rgba';
          this.color.origFormat = 'rgba';
        }

        // Converting from rgba to hex
        else {
          this.format = 'hex';
          this.color.origFormat = 'hex';
        }
      }
      this.update(true);

      this.element.trigger({
        type: 'changeColor',
        color: this.color
      });
      return false;
    },
    mouseup: function(e) {
      e.stopPropagation();
      e.preventDefault();
      $(document).off({
        'mousemove.colorpicker': this.mousemove,
        'touchmove.colorpicker': this.mousemove,
        'mouseup.colorpicker': this.mouseup,
        'touchend.colorpicker': this.mouseup
      });
      return false;
    },
    change: function(e) {
      this.keyup(e);
    },
    keyup: function(e) {
      if ((e.keyCode === 38)) {
        if (this.color.value.a < 1) {
          this.color.value.a = Math.round((this.color.value.a + 0.01) * 100) / 100;
        }
        this.update(true);
      } else if ((e.keyCode === 40)) {
        if (this.color.value.a > 0) {
          this.color.value.a = Math.round((this.color.value.a - 0.01) * 100) / 100;
        }
        this.update(true);
      } else {
        this.color = new Color(this.input.val(), this.options.colorSelectors);
        // Change format dynamically
        // Only occurs if user choose the dynamic format by
        // setting option format to false
        if (this.color.origFormat && this.options.format === false) {
          this.format = this.color.origFormat;
        }
        if (this.getValue(false) !== false) {
          this.updateData();
          this.updateComponent();
          this.updatePicker();
        }
      }
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: this.input.val()
      });
    }
  };

  $.colorpicker = Colorpicker;

  $.fn.colorpicker = function(option) {
    var pickerArgs = arguments,
      rv = null;

    var $returnValue = this.each(function() {
      var $this = $(this),
        inst = $this.data('colorpicker'),
        options = ((typeof option === 'object') ? option : {});
      if ((!inst) && (typeof option !== 'string')) {
        $this.data('colorpicker', new Colorpicker(this, options));
      } else {
        if (typeof option === 'string') {
          rv = inst[option].apply(inst, Array.prototype.slice.call(pickerArgs, 1));
        }
      }
    });
    if (option === 'getValue') {
      return rv;
    }
    return $returnValue;
  };

  $.fn.colorpicker.constructor = Colorpicker;

}));

function resend_nf_email(){
	//console.log('running');
	//jQuery('.nf_resend_email').submit();
	nf_ajax_url
	var data = 	
		{
		action	 			: 'nf_resend_email',
		nex_forms_Id		: jQuery('#resend_email_nex_forms_Id').text(),
		entry_Id			: jQuery('#resend_email_entry_Id').text(),
		resend_email		: 1
		};
	jQuery.post(jQuery('#nf_ajax_url').text(), data, function(response){});
}
function nf_isFloat(n){
    return n != "" && !isNaN(n) && Math.round(n) != n;
}


function nf_countAllCharacters(str) {
  var a = str.split("");
  var obj = {};
  a.forEach(function(s){
    var count=0;
    for(var j=0;j<a.length;j++){
      if(s==a[j]){
        count+=1;
      }
      obj[a[j]]=count;
    }
  });
  return obj;
}



/*! jq-signature.min.js, v1.0.1, minified 2015-09-04 */!function(a,b,c){"use strict";function d(a,b){this.element=a,this.$element=c(this.element),this.canvas=!1,this.$canvas=!1,this.ctx=!1,this.drawing=!1,this.currentPos={x:0,y:0},this.lastPos=this.currentPos,this._data=this.$element.data(),this.settings=c.extend({},f,b,this._data),this.init()}a.requestAnimFrame=function(b){return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimaitonFrame||function(b){a.setTimeout(b,1e3/60)}}();var e="jqSignature",f={lineColor:"#222222",lineWidth:1,border:"1px dashed #AAAAAA",background:"#FFFFFF",width:258,height:100,autoFit:!1},g="<canvas></canvas>";d.prototype={init:function(){this.$canvas=c(g).appendTo(this.$element),this.$canvas.attr({width:this.settings.width,height:this.settings.height}),this.$canvas.css({boxSizing:"border-box",width:this.settings.width+"px",height:this.settings.height+"px",border:this.settings.border,background:this.settings.background,cursor:"crosshair"}),this.settings.autoFit===!0&&this._resizeCanvas(),this.canvas=this.$canvas[0],this._resetCanvas(),this.$canvas.on("mousedown touchstart",c.proxy(function(a){this.drawing=!0,this.lastPos=this.currentPos=this._getPosition(a)},this)),this.$canvas.on("mousemove touchmove",c.proxy(function(a){this.currentPos=this._getPosition(a)},this)),this.$canvas.on("mouseup touchend",c.proxy(function(a){this.drawing=!1;var b=c.Event("jq.signature.changed");this.$element.trigger(b)},this)),c(b).on("touchstart touchmove touchend",c.proxy(function(a){a.target===this.canvas&&a.preventDefault()},this));var d=this;!function e(){a.requestAnimFrame(e),d._renderCanvas()}()},clearCanvas:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this._resetCanvas()},getDataURL:function(){return this.canvas.toDataURL()},_getPosition:function(a){var b,c,d;return d=this.canvas.getBoundingClientRect(),a=a.originalEvent,-1!==a.type.indexOf("touch")?(b=a.touches[0].clientX-d.left,c=a.touches[0].clientY-d.top):(b=a.clientX-d.left,c=a.clientY-d.top),{x:b,y:c}},_renderCanvas:function(){this.drawing&&(this.ctx.beginPath(),this.ctx.moveTo(this.lastPos.x,this.lastPos.y),this.ctx.lineTo(this.currentPos.x,this.currentPos.y),this.ctx.stroke(),this.lastPos=this.currentPos)},_resetCanvas:function(){this.ctx=this.canvas.getContext("2d"),this.ctx.strokeStyle=this.settings.lineColor,this.ctx.lineWidth=this.settings.lineWidth},_resizeCanvas:function(){var a=this.$element.outerWidth();this.$canvas.attr("width",a),this.$canvas.css("width",a+"px")}},c.fn[e]=function(a){var b=arguments;if(void 0===a||"object"==typeof a)return this.each(function(){c.data(this,"plugin_"+e)||c.data(this,"plugin_"+e,new d(this,a))});if("string"==typeof a&&"_"!==a[0]&&"init"!==a){var f;return this.each(function(){var g=c.data(this,"plugin_"+e);g instanceof d&&"function"==typeof g[a]&&(f=g[a].apply(g,Array.prototype.slice.call(b,1))),"destroy"===a&&c.data(this,"plugin_"+e,null)}),void 0!==f?f:this}}}(window,document,jQuery);


