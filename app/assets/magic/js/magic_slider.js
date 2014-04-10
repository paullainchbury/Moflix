/*
 * Magic Slider  v2.1
 *
 * Copyright 2014, LambertGroup
 * 
 */

(function($) {
	
	
	function css_easings(val) {
		var return_str='cubic-bezier(0.250, 0.250, 0.750, 0.750)';
		switch (val) {
			case 'linear':
				return_str='cubic-bezier(0.250, 0.250, 0.750, 0.750)';
				break;
			case 'swing':
				return_str='cubic-bezier(0.250, 0.100, 0.250, 1.000)'; //the same
				break;
			case 'ease':
				return_str='cubic-bezier(0.250, 0.100, 0.250, 1.000)'; //the same
				break;
			case 'ease-in':
				return_str='cubic-bezier(0.420, 0.000, 1.000, 1.000)';
				break;
			case 'ease-out':
				return_str='cubic-bezier(0.000, 0.000, 0.580, 1.000)';
				break;
			case 'ease-in-out':
				return_str='cubic-bezier(0.420, 0.000, 0.580, 1.000)';
				break;/**/
			case 'easeInQuad':
				return_str='cubic-bezier(0.550, 0.085, 0.680, 0.530)';
	 			break;
			case 'easeOutQuad':
				return_str='cubic-bezier(0.250, 0.460, 0.450, 0.940)';
				break;
			case 'easeInOutQuad':
				return_str='cubic-bezier(0.455, 0.030, 0.515, 0.955)';
            case 'easeInCubic':
				return_str='cubic-bezier(0.550, 0.055, 0.675, 0.190)';
				break;
			case 'easeOutCubic':
				return_str='cubic-bezier(0.215, 0.610, 0.355, 1.000)';
				break;	
			case 'easeInOutCubic':
				return_str='cubic-bezier(0.645, 0.045, 0.355, 1.000)';
				break;
			case 'easeInQuart':
				return_str='cubic-bezier(0.895, 0.030, 0.685, 0.220)';
				break;
			case 'easeOutQuart':
				return_str='cubic-bezier(0.165, 0.840, 0.440, 1.000)';
				break;	
			case 'easeInOutQuart':
				return_str='cubic-bezier(0.770, 0.000, 0.175, 1.000)';
				break;
			case 'easeInQuint':
				return_str='cubic-bezier(0.755, 0.050, 0.855, 0.060)';
				break;
			case 'easeOutQuint':
				return_str='cubic-bezier(0.230, 1.000, 0.320, 1.000)';
				break;	
			case 'easeInOutQuint':
				return_str='cubic-bezier(0.860, 0.000, 0.070, 1.000)';
				break;
			case 'easeInSine':
				return_str='cubic-bezier(0.470, 0.000, 0.745, 0.715)';
				break;
			case 'easeOutSine':
				return_str='cubic-bezier(0.390, 0.575, 0.565, 1.000)';
				break;		
			case 'easeInOutSine':
				return_str='cubic-bezier(0.445, 0.050, 0.550, 0.950)';
				break;				
			case 'easeInExpo':
				return_str='cubic-bezier(0.950, 0.050, 0.795, 0.035)';
				break;
			case 'easeOutExpo':
				return_str='cubic-bezier(0.190, 1.000, 0.220, 1.000)';
				break;	
			case 'easeInOutExpo':
				return_str='cubic-bezier(1.000, 0.000, 0.000, 1.000)';
				break;				
			case 'easeInCirc':
				return_str='cubic-bezier(0.600, 0.040, 0.980, 0.335)';
				break;
			case 'easeOutCirc':
				return_str='cubic-bezier(0.075, 0.820, 0.165, 1.000)';
				break;	
			case 'easeInOutCirc':
				return_str='cubic-bezier(0.785, 0.135, 0.150, 0.860)';
				break;				
			case 'easeInBack':
				return_str='cubic-bezier(0.600, -0.280, 0.735, 0.045)';
				break;
			case 'easeOutBack':
				return_str='cubic-bezier(0.175, 0.885, 0.320, 1.275)';
				break;
			case 'easeInOutBack':
				return_str='cubic-bezier(0.680, -0.550, 0.265, 1.550)';
				break;							
		}
		
		return return_str;
	}	

	function animate_singular_text(elem,current_obj,options) {
		  var ver_ie=getInternetExplorerVersion();
		  //elem.stop();
		  if (options.responsive) {
			  newCss='';
			  if (elem.css('font-size').lastIndexOf('px')!=-1) {
				  fontSize=elem.css('font-size').substr(0,elem.css('font-size').lastIndexOf('px'));
				  //alert (fontSize+'  -   '+fontSize/(options.origWidth/options.width));
				  newCss+='font-size:'+fontSize/(options.origWidth/options.width)+'px;';
				  
			  } else if (elem.css('font-size').lastIndexOf('em')!=-1) {
				  fontSize=elem.css('font-size').substr(0,elem.css('font-size').lastIndexOf('em'));
				  newCss+='font-size:'+fontSize/(options.origWidth/options.width)+'em;';
			  }
			  
			  if (elem.css('line-height').lastIndexOf('px')!=-1) {
				  lineHeight=elem.css('line-height').substr(0,elem.css('line-height').lastIndexOf('px'));
				  newCss+='line-height:'+lineHeight/(options.origWidth/options.width)+'px;';
			  } else if (elem.css('line-height').lastIndexOf('em')!=-1) {
				  lineHeight=elem.css('line-height').substr(0,elem.css('line-height').lastIndexOf('em'));
				  newCss+='line-height:'+lineHeight/(options.origWidth/options.width)+'em;';
			  }
			  
			  elem.wrapInner('<div class="newFS" style="'+newCss+'" />');
			  
		  }
		  
		  //is iframe
		  theIframe = elem.find('iframe:first');
		  if (theIframe.width()!=null) {
				 if (options.responsive) {
						 theW=theIframe.width();
						 theH=theIframe.height();
						 if (current_obj.iFrameArr[elem.index()]=='' || current_obj.iFrameArr[elem.index()]==undefined) {
							current_obj.iFrameArr[elem.index()]=theW+";"+theH;
						 }
						 iFrameDimensions=current_obj.iFrameArr[elem.index()].split(";");
			 
						 theIframe.css({
							 width:parseInt(iFrameDimensions[0]/(options.origWidth/options.width),10),
							 height:parseInt(iFrameDimensions[1]/(options.origWidth/options.width),10)
						 });
			     }
				 /*theIframe.click(function() {
					alert ("click"); 
				 });*/
		  }
  
		  var leftPos;
		  var topPos;
		  var curLeftPos;
		  var curTopPos;
		  var opacity_aux;
		  var leftIntermediatePos;
		  var topIntermediatePos;

		  leftPos=elem.attr('data-final-left');
		  topPos=elem.attr('data-final-top');
		  if (options.responsive) {
			  leftPos=parseInt(leftPos/(options.origWidth/options.width),10);
			  topPos=parseInt(topPos/(options.origWidth/options.width),10);
		  }

			  var easing_aux=options.defaultEasing;
			  if (elem.attr('data-easing')!='' && elem.attr('data-easing')!=undefined) {
				  easing_aux=elem.attr('data-easing');
			  }
			  
			  opacity_aux=1;
			  if (current_obj.isVideoPlaying==true)
				 opacity_aux=0;
			  
			  //alert (current_obj.isVideoPlaying);	 
			  /*if (ver_ie!=-1 && ver_ie<9) {
				  elem.css({'opacity':1 });
			  }*/
			  
			  cur_skew="0deg,0deg";
			  if (elem.attr('data-final-skew')!=undefined && elem.attr('data-final-skew')!=''){
				  cur_skew=elem.attr('data-final-skew');
			  }	
			  
			  cur_scale="1";
			  if (elem.attr('data-final-scale')!=undefined && elem.attr('data-final-scale')!=''){
				  cur_scale=elem.attr('data-final-scale');
			  }		  
			  //alert ((leftPos-curLeftPos)+"---"+(topPos-curTopPos));
			  if (ver_ie!=-1 && ver_ie<10) {
					  elem.
					  stop()
					  .animate({
							  opacity: opacity_aux,
							  left:leftPos+'px',
							  top: topPos+'px'
							}, elem.attr('data-duration')*1000, easing_aux ,function() {
								//alert ("complete");
								
							  elem.css({
									"-webkit-transform": "skew("+cur_skew+") scale("+cur_scale+")",
									"-moz-transform":"skew("+cur_skew+") scale("+cur_scale+")",
									"-ms-transform":"skew("+cur_skew+") scale("+cur_scale+")",
									"-o-transform": "skew("+cur_skew+") scale("+cur_scale+")",
									"transform": "skew("+cur_skew+") scale("+cur_scale+")"
							  });									
								
							  if (current_obj.isVideoPlaying==true) {
								 var alltexts = $(current_obj.currentImg.attr('data-text-id')).children();
								 alltexts.css("opacity",0);
							  }
		
							  //intermediate move
							   if (elem.attr('data-intermediate-left')!=undefined && elem.attr('data-intermediate-left')!='') {
								  leftIntermediatePos=elem.attr('data-intermediate-left');
								  topIntermediatePos=elem.attr('data-intermediate-top');
								  
								  //alert (leftIntermediatePos);
								  if (options.responsive) {
									  leftIntermediatePos=parseInt(leftIntermediatePos/(options.origWidth/options.width),10);
									  topIntermediatePos=parseInt(topIntermediatePos/(options.origWidth/options.width),10);
								  }									  
								  
							  

								  current_obj.timeouts_arr[current_obj.timeouts_arr.length]=setTimeout(function() {
										cur_skew="0deg,0deg";
										if (elem.attr('data-intermediate-skew')!=undefined && elem.attr('data-intermediate-skew')!=''){
											cur_skew=elem.attr('data-intermediate-skew');
										}				
										
										cur_scale="1";
										if (elem.attr('data-intermediate-scale')!=undefined && elem.attr('data-intermediate-scale')!=''){
											cur_scale=elem.attr('data-intermediate-scale');
										}
										elem.
										stop()
										.animate({
												opacity: opacity_aux,
												left:leftIntermediatePos+'px',
												top: topIntermediatePos+'px'
											  }, elem.attr('data-intermediate-duration')*1000, elem.attr('data-intermediate-easing') ,function() {
												  //alert ("complete");
												  elem.css({
														"-webkit-transform": "skew("+cur_skew+") scale("+cur_scale+")",
														"-moz-transform":"skew("+cur_skew+") scale("+cur_scale+")",
														"-ms-transform":"skew("+cur_skew+") scale("+cur_scale+")",
														"-o-transform": "skew("+cur_skew+") scale("+cur_scale+")",
														"transform": "skew("+cur_skew+") scale("+cur_scale+")"
												  });												  
											  });						  
								  }, (elem.attr('data-intermediate-delay')*1000));  

								  //intermediate opacity IE8
								  if (ver_ie==8 && elem.find('img:first').is('img')) {
									  elem.find('img:first').animate({
										  opacity: opacity_aux
										}, elem.attr('data-intermediate-duration')*1000, elem.attr('data-intermediate-easing') ,function() {
											//complete
										});
								  }								   
		
							   }
							});	
							
					  //initial opacity IE8
					  if (ver_ie==8 && elem.find('img:first').is('img')) {
						  elem.find('img:first').animate({
							  opacity: opacity_aux
							}, elem.attr('data-duration')*1000, easing_aux ,function() {
								//complete
							});
					  }										  
			  } else {
				  elem.css({
						"opacity": opacity_aux,
					
						"-webkit-transform": "translate("+leftPos+"px,"+topPos+"px) skew("+cur_skew+") scale("+cur_scale+")",
						"-moz-transform":"translate("+leftPos+"px,"+topPos+"px) skew("+cur_skew+") scale("+cur_scale+")",
						"-ms-transform":"translate("+leftPos+"px,"+topPos+"px) skew("+cur_skew+") scale("+cur_scale+")",
						"-o-transform": "translate("+leftPos+"px,"+topPos+"px) skew("+cur_skew+") scale("+cur_scale+")",
						"transform": "translate("+leftPos+"px,"+topPos+"px) skew("+cur_skew+") scale("+cur_scale+")",
						  
						"-webkit-transition-duration":elem.attr('data-duration')+"s",
						"-moz-transition-duration":elem.attr('data-duration')+"s",
						"-ms-transition-duration":elem.attr('data-duration')+"s",
						"-o-transition-duration":elem.attr('data-duration')+"s",
						"transition-duration":elem.attr('data-duration')+"s",
						
						"-webkit-transition-timing-function":css_easings(easing_aux),
						"-moz-transition-timing-function":css_easings(easing_aux),
						"-ms-transition-timing-function":css_easings(easing_aux),
						"-o-transition-timing-function":css_easings(easing_aux),
						"transition-timing-function":css_easings(easing_aux)
				  });
				  
				   //intermediate move
				  if (elem.attr('data-intermediate-left')!=undefined && elem.attr('data-intermediate-left')!='') {
					  leftIntermediatePos=elem.attr('data-intermediate-left');
					  topIntermediatePos=elem.attr('data-intermediate-top');
					  if (options.responsive) {
						  leftIntermediatePos=parseInt(leftIntermediatePos/(options.origWidth/options.width),10);
						  topIntermediatePos=parseInt(topIntermediatePos/(options.origWidth/options.width),10);
					  }
							  
					  
					  current_obj.timeouts_arr[current_obj.timeouts_arr.length]=setTimeout(function() { 
							  cur_skew="0deg,0deg";
							  if (elem.attr('data-intermediate-skew')!=undefined && elem.attr('data-intermediate-skew')!=''){
								  cur_skew=elem.attr('data-intermediate-skew');
							  }				
							  
							  cur_scale="1";
							  if (elem.attr('data-intermediate-scale')!=undefined && elem.attr('data-intermediate-scale')!=''){
								  cur_scale=elem.attr('data-intermediate-scale');
							  }				
					  
							  elem.css({
								  "-webkit-transform": "translate("+leftIntermediatePos+"px,"+topIntermediatePos+"px) skew("+cur_skew+") scale("+cur_scale+")",
								  "-moz-transform":"translate("+leftIntermediatePos+"px,"+topIntermediatePos+"px) skew("+cur_skew+") scale("+cur_scale+")",
								  "-ms-transform":"translate("+leftIntermediatePos+"px,"+topIntermediatePos+"px) skew("+cur_skew+") scale("+cur_scale+")",
								  "-o-transform": "translate("+leftIntermediatePos+"px,"+topIntermediatePos+"px) skew("+cur_skew+") scale("+cur_scale+")",
								  "transform": "translate("+leftIntermediatePos+"px,"+topIntermediatePos+"px) skew("+cur_skew+") scale("+cur_scale+")",
									
								  "-webkit-transition-duration":elem.attr('data-intermediate-duration')+"s",
								  "-moz-transition-duration":elem.attr('data-intermediate-duration')+"s",
								  "-ms-transition-duration":elem.attr('data-intermediate-duration')+"s",
								  "-o-transition-duration":elem.attr('data-intermediate-duration')+"s",
								  "transition-duration":elem.attr('data-intermediate-duration')+"s",
								  
								  "-webkit-transition-timing-function":css_easings(elem.attr('data-intermediate-easing')),
								  "-moz-transition-timing-function":css_easings(elem.attr('data-intermediate-easing')),
								  "-ms-transition-timing-function":css_easings(elem.attr('data-intermediate-easing')),
								  "-o-transition-timing-function":css_easings(elem.attr('data-intermediate-easing')),
								  "transition-timing-function":css_easings(elem.attr('data-intermediate-easing'))
							  });	
					  }, ((parseFloat(elem.attr('data-duration'))+parseFloat(elem.attr('data-intermediate-delay')))*1000));
				  }
				  
				  
				  
				  /*//rotate
				  if (ver_ie==-1 || (ver_ie!=-1 && ver_ie>=9) ) {
					  if (elem.attr('data-rotate')!=undefined && elem.attr('data-rotate')!='' && elem.attr('data-rotate')=='true') {
							rotDuration=0.5;
							if (elem.attr('data-rotate-duration')!=undefined && elem.attr('data-rotate-duration')!='') {
								rotDuration=elem.attr('data-rotate-duration');
							}
							current_obj.rotationDurationArr[elem.index()]=rotDuration;
							current_obj.rotationFunctionsArr[elem.index()] = function (){
								if (current_obj.rotationFunctionsArr.length && current_obj.rotationDurationArr[elem.index()]!=undefined && current_obj.rotationDurationArr[elem.index()]!='') {
								  elem.rotate({
									  angle:0, 
									  animateTo:360, 
									  duration:current_obj.rotationDurationArr[elem.index()]*1000,
									  callback: current_obj.rotationFunctionsArr[elem.index()],
									  easing:function(x, t, b, c, d) { return (t/d)*c ; }
								   });
								}
							}
							
							current_obj.timeouts_arr[current_obj.timeouts_arr.length]=setTimeout(function() { 
								   current_obj.rotationFunctionsArr[elem.index()]();		
							}, (parseFloat(elem.attr('data-duration'))*1000));					  
									
					  }
				  }*/						  
				  
				  
			  }	
			 

	};
    
    
    
    
	function animate_texts(current_obj,curImg,options,magic_slider_the,magic_slider_container,bannerControls,isPrevious) {
		//jQuery.fx.off = false;
		/*if (!isPrevious)
			$(curImg.attr('data-text-id')).css("display","block");*/
		var ver_ie=getInternetExplorerVersion();
		$(current_obj.currentImg.attr('data-text-id')).css("display","block");
		var thetexts = $(curImg.attr('data-text-id')).children();
		var theLeft;
		var theTop;


		var i=0;
		currentText_arr=Array();
		
		if (isPrevious) {
			$('.newFS', magic_slider_container ).contents().unwrap();
		}
		thetexts.each(function() {
			currentText_arr[i] = $(this);
			var currentText=currentText_arr[i];
			//currentText.css({'display':'block'});
			
			
			if (isPrevious) {
				currentText.css({
					"display":"none",
					"opacity":0
			  	});					
			} else {
				currentText.css({'display':'block'});
			}
			
			
			  theLeft=currentText.attr('data-initial-left');
			  theTop=currentText.attr('data-initial-top');
			  if (options.responsive) {
					theLeft=parseInt(theLeft/(options.origWidth/options.width),10);
					theTop=parseInt(theTop/(options.origWidth/options.width),10);
			  }		  
	
			  cur_skew="0deg,0deg";
			  if (currentText.attr('data-initial-skew')!=undefined && currentText.attr('data-initial-skew')!=''){
				  cur_skew=currentText.attr('data-initial-skew');
			  }
			  
			  cur_scale="1";
			  if (currentText.attr('data-initial-scale')!=undefined && currentText.attr('data-initial-scale')!=''){
				  cur_scale=currentText.attr('data-initial-scale');
			  }	
			  
			  if (ver_ie!=-1 && ver_ie<10) {
					currentText.css({
							"opacity":parseFloat(currentText.attr('data-fade-start'))/100,
							"left":theLeft+"px",
							"top":theTop+"px",
							"-webkit-transform": "skew("+cur_skew+") scale("+cur_scale+")",
							"-moz-transform":"skew("+cur_skew+") scale("+cur_scale+")",
							"-ms-transform":"skew("+cur_skew+") scale("+cur_scale+")",
							"-o-transform": "skew("+cur_skew+") scale("+cur_scale+")",
							"transform": "skew("+cur_skew+") scale("+cur_scale+")"
					  });	
					  	//currentText.fadeTo(250, 0.15);		  
						if (ver_ie==8 && currentText.find('img:first').is('img')) {
							currentText.find('img:first').css("opacity",parseFloat(currentText.attr('data-fade-start'))/100);
						}
						//alert (currentText.css("opacity"));
			  } else {
					  currentText.css({
							/*"left":"0px",
							"top":"0px",*/
							"opacity":parseFloat(currentText.attr('data-fade-start'))/100,
							"-webkit-transform": "translate("+theLeft+"px,"+theTop+"px) skew("+cur_skew+") scale("+cur_scale+")",
							"-moz-transform":"translate("+theLeft+"px,"+theTop+"px) skew("+cur_skew+") scale("+cur_scale+")",
							"-ms-transform":"translate("+theLeft+"px,"+theTop+"px) skew("+cur_skew+") scale("+cur_scale+")",
							"-o-transform": "translate("+theLeft+"px,"+theTop+"px) skew("+cur_skew+") scale("+cur_scale+")",
							"transform": "translate("+theLeft+"px,"+theTop+"px) skew("+cur_skew+") scale("+cur_scale+")",
							"-webkit-transition-duration":"0s",
							"-moz-transition-duration":"0s",
							"-ms-transition-duration":"0s",
							"-o-transition-duration":"0s",
							"transition-duration":"0s"			
					  });
			  }
			  //alert ( currentText.css('left') );

			if (!isPrevious) {			
					current_obj.timeouts_arr[current_obj.timeouts_arr.length]=setTimeout(function() { animate_singular_text(currentText,current_obj,options);}, (currentText.attr('data-delay')*1000));
					//setTimeout(function() { animate_singular_text(currentText,current_obj,options);}, (currentText.attr('data-delay')*1000));
			}
			
			i++;
		});
	};
	
	
	function animate_continuous_singular_text(elem,current_obj,options) {
			var curLeft=parseInt(elem.css('margin-left').substr(0,elem.css('margin-left').lastIndexOf('px')),10);
			var curTop=parseInt(elem.css('margin-top').substr(0,elem.css('margin-top').lastIndexOf('px')),10);
			var theLeft=0;
			var theTop=0;
			/*var theLeft=parseInt(elem.attr('data-final-left')/(options.origWidth/options.width),10);
			var theTop=parseInt(elem.attr('data-final-top')/(options.origWidth/options.width),10);*/
			//alert (curLeft+' --- '+parseInt(elem.attr('data-final-left')/(options.origWidth/options.width),10)+' --- '+parseInt(elem.attr('data-continuous-left')/(options.origWidth/options.width),10));
			if (elem.attr('data-final-left') != elem.attr('data-continuous-left')) {
				if ( curLeft>=(theLeft-2) && curLeft<=(theLeft+2) ) {
					theLeft=parseInt(elem.attr('data-continuous-left')/(options.origWidth/options.width),10)-parseInt(elem.attr('data-final-left')/(options.origWidth/options.width),10);
					theTop=parseInt(elem.attr('data-continuous-top')/(options.origWidth/options.width),10)-parseInt(elem.attr('data-final-top')/(options.origWidth/options.width),10);
				}
			} else {
				if (elem.attr('data-final-top') != elem.attr('data-continuous-top')) {
					if ( curTop>=(theTop-2) && curTop<=(theTop+2) ) {
						theLeft=parseInt(elem.attr('data-continuous-left')/(options.origWidth/options.width),10)-parseInt(elem.attr('data-final-left')/(options.origWidth/options.width),10);
						theTop=parseInt(elem.attr('data-continuous-top')/(options.origWidth/options.width),10)-parseInt(elem.attr('data-final-top')/(options.origWidth/options.width),10);
					}
				}
			}
			elem.stop().animate({
			  'margin-left':theLeft+'px',
			  'margin-top': theTop+'px'
			}, elem.attr('data-continuous-duration')*1000, elem.attr('data-continuous-easing') ,function() {
				//animation complete
			});	

	}		
	
	
	
	function animate_exit_texts(current_obj,options,magic_slider_the,bannerControls) {
		//jQuery.fx.off = false;
		var ver_ie=getInternetExplorerVersion();
		var thetexts = $(current_obj.currentImg.attr('data-text-id')).children();
		var i=0;
		currentText_arr=Array();
		thetexts.each(function() {
			currentText_arr[i] = $(this);
			var currentText=currentText_arr[i];
			//alert (currentText.attr('data-exit-left'));
			//alert ('ss  --  '+currentText.attr('data-exit-left')+'   ---   '+currentText_arr[i]);
			//exit left
			var cur_exit_left=options.defaultExitLeft;
			if (currentText.attr('data-exit-left')!=undefined && currentText.attr('data-exit-left')!=''){
				cur_exit_left=parseInt(currentText.attr('data-exit-left')/(options.origWidth/options.width),10);
			}
			//exit top
			var cur_exit_top=options.defaultExitTop;
			if (currentText.attr('data-exit-top')!=undefined && currentText.attr('data-exit-top')!=''){
				cur_exit_top=parseInt(currentText.attr('data-exit-top')/(options.origWidth/options.width),10);
			}
			//exit duration
			var cur_exit_duration=options.defaultExitDuration;
			if (currentText.attr('data-exit-duration')!=undefined && currentText.attr('data-exit-duration')!=''){
				cur_exit_duration=parseFloat(currentText.attr('data-exit-duration'));
			}
			//exit delay
			var cur_exit_delay=options.defaultExitDelay;
			if (currentText.attr('data-exit-delay')!=undefined && currentText.attr('data-exit-delay')!=''){
				cur_exit_delay=parseFloat(currentText.attr('data-exit-delay'));
			}
			//exit fade
			var cur_exit_fade=options.defaultExitFade;
			if (currentText.attr('data-exit-fade')!=undefined && currentText.attr('data-exit-fade')!=''){
				cur_exit_fade=parseFloat(currentText.attr('data-exit-fade'));
			}
			//exit easing
			var cur_exit_easing=options.defaultExitEasing;
			if (currentText.attr('data-exit-easing')!=undefined && currentText.attr('data-exit-easing')!=''){
				cur_exit_easing=currentText.attr('data-exit-easing');
			}
			

			//alert (cur_skew+' -- '+currentText.attr('data-exit-skew')+'  --  '+cur_exit_duration);
			
			var cur_exit_off=options.defaultExitOFF.toString();
			if (currentText.attr('data-exit-off')!=undefined && currentText.attr('data-exit-off')!=''){
				cur_exit_off=currentText.attr('data-exit-off');
			}
			if (options.fadeSlides) {
				cur_exit_off='false';
			}
			if (cur_exit_off=='true') {
				cur_exit_duration=0;
			}
			
	
			var easing_aux=options.defaultExitEasing;
			if (currentText.attr('data-exit-easing')!='' && currentText.attr('data-exit-easing')!=undefined) {
				easing_aux=currentText.attr('data-exit-easing');
			}
			//easing_aux=css_easings(easing_aux);
			
			//alert ('cur_exit_left: '+cur_exit_left+'  ---  cur_exit_top: '+cur_exit_top+'  ---  cur_exit_fade: '+cur_exit_fade+'  ---  cur_exit_duration: '+cur_exit_duration+'  ---  cur_exit_easing: '+cur_exit_easing+'  ---  cur_exit_delay: '+cur_exit_delay);
			//alert (parseInt(currentText.attr('data-final-top')/(options.origWidth/options.width),10)+' == '+parseInt(currentText.css('top').substr(0,currentText.css('top').lastIndexOf('px')),10));
			//alert (parseInt(currentText.attr('data-final-top')/(options.origWidth/options.width),10)+'  ==  '+parseInt(currentText.css('top').substr(0,currentText.css('top').lastIndexOf('px')),10));
			//alert (cur_exit_duration);
			
		  //is iframe
		  theIframe = currentText.find('iframe:first');
		  if (theIframe.width()!=null) {
			  theIframe[0].src=theIframe[0].src;
		  }
			
			if (cur_exit_duration>0/* && parseInt(currentText.attr('data-final-top')/(options.origWidth/options.width),10)==parseInt(currentText.css('top').substr(0,currentText.css('top').lastIndexOf('px')),10)*/) {
				//currentText.css({'display':'block'});

						current_obj.timeouts_arr[current_obj.timeouts_arr.length]=setTimeout(function() {
							cur_skew="0deg,0deg";
							if (currentText.attr('data-exit-skew')!=undefined && currentText.attr('data-exit-skew')!=''){
								cur_skew=currentText.attr('data-exit-skew');
							}	
							
							cur_scale="1";
							if (currentText.attr('data-exit-scale')!=undefined && currentText.attr('data-exit-scale')!=''){
								cur_scale=currentText.attr('data-exit-scale');
							}						
							if (ver_ie!=-1 && ver_ie<10) {
								  currentText.
								  stop()
								  .animate({
										  opacity: cur_exit_fade,
										  left:cur_exit_left+'px',
										  top: cur_exit_top+'px'
										}, cur_exit_duration*1000, easing_aux ,function() {
											//alert ("complete");
											
										  currentText.css({
												"-webkit-transform": "skew("+cur_skew+") scale("+cur_scale+")",
												"-moz-transform":"skew("+cur_skew+") scale("+cur_scale+")",
												"-ms-transform":"skew("+cur_skew+") scale("+cur_scale+")",
												"-o-transform": "skew("+cur_skew+") scale("+cur_scale+")",
												"transform": "skew("+cur_skew+") scale("+cur_scale+")"
										  });									
			
										});				  

								  //exit opacity IE8
								  if (ver_ie==8 && currentText.find('img:first').is('img')) {
									  currentText.find('img:first').animate({
										  opacity: cur_exit_fade
										}, cur_exit_duration*1000, easing_aux ,function() {
											//complete
										});
								  }	

							} else {
								currentText.css({
				  
									  "opacity": cur_exit_fade,
									  "-webkit-transform": "translate("+cur_exit_left+"px,"+cur_exit_top+"px) skew("+cur_skew+") scale("+cur_scale+")",
									  "-moz-transform":"translate("+cur_exit_left+"px,"+cur_exit_top+"px) skew("+cur_skew+") scale("+cur_scale+")",
									  "-ms-transform": "translate("+cur_exit_left+"px,"+cur_exit_top+"px) skew("+cur_skew+") scale("+cur_scale+")",
									  "-o-transform": "translate("+cur_exit_left+"px,"+cur_exit_top+"px) skew("+cur_skew+") scale("+cur_scale+")",
									  "transform": "translate("+cur_exit_left+"px,"+cur_exit_top+"px) skew("+cur_skew+") scale("+cur_scale+")",
										
									  "-webkit-transition-duration":cur_exit_duration+"s",
									  "-moz-transition-duration":cur_exit_duration+"s",
									  "-ms-transition-duration":cur_exit_duration+"s",
									  "-o-transition-duration":cur_exit_duration+"s",
									  "transition-duration":cur_exit_duration+"s",
									  
									  "-webkit-transition-timing-function":css_easings(easing_aux),
									  "-moz-transition-timing-function":css_easings(easing_aux),
									  "-ms-transition-timing-function":css_easings(easing_aux),
									  "-o-transition-timing-function":css_easings(easing_aux),
									  "transition-timing-function":css_easings(easing_aux)
							   });						
						
							//alert (cur_exit_duration+'  --  '+currentText);
							}
						
						}, (cur_exit_delay*1000));
				
			} else {
				if (cur_exit_off=='false'){
					currentText.css({'display':'none'});
				}
			}
            	
            i++;
        });		
	};	
	
	

	
	
	function clear_all_timeouts(timeoutsArr) {
		  if (timeoutsArr) for (var i in timeoutsArr) if (timeoutsArr[i]) clearTimeout(timeoutsArr[i]);
		  //timeoutsArr = [];
		  timeoutsArr.length = 0;
	}
	
	function clear_all_intervals(intervalsArr) {
		  if (intervalsArr) for (var i in intervalsArr) if (intervalsArr[i]) clearInterval(intervalsArr[i]);
		  //intervalsArr = [];
		  intervalsArr.length = 0;
	} 	
	
	function clear_all_rotations(rotationsArr,current_obj) {
		  if (rotationsArr) 
		  	for (var i in rotationsArr) 
				if (rotationsArr[i]) {
					rotationsArr[i]=function () { };
				}
 //rotationsArr[i]=function () { };
		  //rotationsArr = [];
		  rotationsArr.length = 0;
		  current_obj.rotationDurationArr.length = 0;
		  //rotationsArr.splice(0, rotationsArr.length);
	} 	
		
	
	function initialPositioning(cur_i,options, magic_slider_container,origImgsDimensions,imgs) {
		var ver_ie=getInternetExplorerVersion();
		if (cur_i==-1)
			cur_i=0;
			
		var mycurImage=$(imgs[cur_i]);
		var cur_horizontalPosition=options.horizontalPosition;
	    if (mycurImage.attr('data-horizontalPosition')!=undefined && mycurImage.attr('data-horizontalPosition')!='') {
           cur_horizontalPosition=mycurImage.attr('data-horizontalPosition');
        }		
		
		var cur_verticalPosition=options.verticalPosition;
	    if (mycurImage.attr('data-verticalPosition')!=undefined && mycurImage.attr('data-verticalPosition')!='') {
           cur_verticalPosition=mycurImage.attr('data-verticalPosition');
        }	
		
		var cur_initialZoom=options.initialZoom;
	    if (mycurImage.attr('data-initialZoom')!=undefined && mycurImage.attr('data-initialZoom')!='') {
           cur_initialZoom=Number(mycurImage.attr('data-initialZoom'));
        }
		
		var cur_finalZoom=options.finalZoom;
	    if (mycurImage.attr('data-finalZoom')!=undefined && mycurImage.attr('data-finalZoom')!='') {
           cur_finalZoom=Number(mycurImage.attr('data-finalZoom'));
        }
		
		var origDim=origImgsDimensions[cur_i].split(";");
		//alert (origDim[0]+'  ---  '+origDim[1]);
		if (options.responsive) {	
			origDim[0]=origDim[0]/(options.origWidth/options.width);
			origDim[1]=origDim[1]/(options.origWidth/options.width);
		}
		
		if (options.width100Proc && options.height100Proc) {
			if (origDim[1]*Math.min(cur_finalZoom,cur_initialZoom)<options.height) {
				newH=options.height/Math.min(cur_finalZoom,cur_initialZoom);
				newW=newH*(origDim[0]/origDim[1])
				origDim[0]=newW;
				origDim[1]=newH;
			}
		}
		
		
		
		var imgCurInside = $('#contentHolderUnit_'+cur_i, magic_slider_container).find('img:first');
		var finalWidth=parseInt(cur_finalZoom*origDim[0],10);
		var finalHeight=parseInt(cur_finalZoom*origDim[1],10);
		
		imgCurInside.css({
			"width":parseInt(cur_initialZoom*origDim[0],10)+"px",
			"height":parseInt(cur_initialZoom*origDim[1],10)+"px"
		});

		
		var cur_left=0;
		switch(cur_horizontalPosition)
		{
		case 'left':
			cur_left=0;
			break;
		case 'center':
			cur_left=(options.width-parseInt(cur_initialZoom*origDim[0],10))/2;
			break;	
		case 'right':
			cur_left=options.width-parseInt(cur_initialZoom*origDim[0],10);
			break;				  
		default:
			cur_left=0;
		}	
		
		var cur_top=0;
		switch(cur_verticalPosition)
		{
		case 'top':
			cur_top=-2;
			break;
		case 'center':
			cur_top=(options.height-parseInt(cur_initialZoom*origDim[1],10))/2;
			break;			
		case 'bottom':
			cur_top=options.height-parseInt(cur_initialZoom*origDim[1],10)+2;
			break;
		default:
			cur_top=0;
		}
		
		

		imgCurInside.css({
			"left":parseInt(cur_left,10)+"px",
			"top":parseInt(cur_top,10)+"px",
			"opacity":options.initialOpacity
		});
		
		if (ver_ie==-1 || (ver_ie!=-1 && ver_ie>=10)) {
			imgCurInside.css({
				"-webkit-transform-origin":cur_horizontalPosition+" "+cur_verticalPosition,
				"-moz-transform-origin":cur_horizontalPosition+" "+cur_verticalPosition,
				"-ms-transform-origin":cur_horizontalPosition+" "+cur_verticalPosition,
				"-o-transform-origin":cur_horizontalPosition+" "+cur_verticalPosition,
				"transform-origin":cur_horizontalPosition+" "+cur_verticalPosition
			});
			
		}


	}
	
	
	function magic_slider_reset_animate_image(current_obj,options,imgs) {
		//alert (current_obj.current_img_no+'  --  '+current_obj.previous_current_img_no);
		var ver_ie=getInternetExplorerVersion();
		var myImage=$(imgs[current_obj.previous_current_img_no]);
		var current_initialZoom=options.initialZoom;
		if (myImage.attr('data-initialZoom')!=undefined && myImage.attr('data-initialZoom')!='') {
		   current_initialZoom=Number(myImage.attr('data-initialZoom'));
		}	
		var current_finalZoom=options.finalZoom;
		if (myImage.attr('data-finalZoom')!=undefined && myImage.attr('data-finalZoom')!='') {
		   current_finalZoom=Number(myImage.attr('data-finalZoom'));
		}
		
		
		if (current_initialZoom!=current_finalZoom) {
			if (ver_ie!=-1 && ver_ie<10) {
				clearInterval(current_obj.msiInterval);
				current_obj.previous_imgInside.css("filter",'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=1, M12=0, M21=0, M22=1, Dx=0, Dy=0)');
			} else {
			  current_obj.previous_imgInside.css({
				  "-webkit-transition-duration":"0s",
				  "-moz-transition-duration":"0s",
				  "-ms-transition-duration":"0s",
				  "-o-transition-duration":"0s",
				  "transition-duration":"0s",
				  "-webkit-transform":"scale(1)",
				  "-moz-transform":"scale(1)",
				  "-ms-transform":"scale(1)",
				  "-o-transform":"scale(1)",
				  "transform":"scale(1)"
			  });
			  //current_obj.previous_imgInside.addClass("noTransition");

			}
		}
	}
	
	
	function magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs) {
		var myImage=$(imgs[current_obj.current_img_no]);
		var ver_ie=getInternetExplorerVersion();

		var current_horizontalPosition=options.horizontalPosition;
		if (myImage.attr('data-horizontalPosition')!=undefined && myImage.attr('data-horizontalPosition')!='') {
		   current_horizontalPosition=myImage.attr('data-horizontalPosition');
		}	
		var current_verticalPosition=options.verticalPosition;
		if (myImage.attr('data-verticalPosition')!=undefined && myImage.attr('data-verticalPosition')!='') {
		   current_verticalPosition=myImage.attr('data-verticalPosition');
		}			
		
		var current_duration=options.duration;
		if (myImage.attr('data-duration')!=undefined && myImage.attr('data-duration')!='') {
		   current_duration=Number(myImage.attr('data-duration'));
		}		
		
		var current_initialZoom=options.initialZoom;
		if (myImage.attr('data-initialZoom')!=undefined && myImage.attr('data-initialZoom')!='') {
		   current_initialZoom=Number(myImage.attr('data-initialZoom'));
		}	
		var current_finalZoom=options.finalZoom;
		if (myImage.attr('data-finalZoom')!=undefined && myImage.attr('data-finalZoom')!='') {
		   current_finalZoom=Number(myImage.attr('data-finalZoom'));
		}
		

		current_obj.current_imgInside = $('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).find('img:first');
		current_obj.previous_imgInside = $('#contentHolderUnit_'+current_obj.previous_current_img_no, magic_slider_container).find('img:first');

		var origCurDim=origImgsDimensions[current_obj.current_img_no].split(";");
		if (options.responsive) {	
			origCurDim[0]=origCurDim[0]/(options.origWidth/options.width);
			origCurDim[1]=origCurDim[1]/(options.origWidth/options.width);
		}		
		
		if (current_initialZoom!=current_finalZoom) {
						if (ver_ie!=-1 && ver_ie<10) {
							if (options.width100Proc)
								current_duration=current_duration+options.durationIEfix;
							current_obj.curZoom=1;
							zoomStep=0;
							current_obj.cur_marginLeft=0;
							current_obj.cur_marginTop=0;

							if (ver_ie!=-1 && ver_ie<10) {
								clearInterval(current_obj.msiInterval);
								//current_obj.previous_imgInside.css("filter",'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=1, M12=0, M21=0, M22=1, Dx=0, Dy=0)');		
								//magic_slider_reset_animate_image(current_obj,options,imgs);	
							}
							
							current_obj.msiInitialTime=(new Date).getTime();
		
							current_obj.msiInterval=setInterval(function() {
								
								
								nowx = (new Date).getTime();
								if ( (nowx-current_obj.msiInitialTime) > (current_duration*1000) ) {
									clearInterval(current_obj.msiInterval);
								} else {
									zoomStep=(nowx-current_obj.msiInitialTime)*Math.abs(current_initialZoom-current_finalZoom)/(current_duration*1000);
									if (current_initialZoom<=current_finalZoom)
										current_obj.curZoom=1+zoomStep;
									else
										current_obj.curZoom=1-zoomStep;
								
									
									if (current_horizontalPosition=='center') {
										current_obj.cur_marginLeft=(1-current_obj.curZoom)*current_initialZoom*origCurDim[0]/2;	
									} else if (current_horizontalPosition=='right') {
										current_obj.cur_marginLeft=(1-current_obj.curZoom)*current_initialZoom*origCurDim[0];
									}
									
									
									if (current_verticalPosition=='center') {
										current_obj.cur_marginTop=(1-current_obj.curZoom)*current_initialZoom*origCurDim[1]/2;	
									} else if (current_verticalPosition=='bottom') {
										current_obj.cur_marginTop=(1-current_obj.curZoom)*current_initialZoom*origCurDim[1];
									}								
		
									current_obj.current_imgInside.css({filter:'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11='+current_obj.curZoom+', M12=0, M21=0, M22='+current_obj.curZoom+', Dx=' + current_obj.cur_marginLeft + ',Dy=' + current_obj.cur_marginTop + ')'});
								}
							}, 25);
						} else {
							
								rotate_aux="";
								if (ver_ie!=-1 && ver_ie>=11) {
									 rotate_aux=" rotate(0.1deg)";
								}
								zoomVal=current_finalZoom/current_initialZoom;
								var easing_aux=options.zoomEasing;
								if (myImage.attr('data-zoomEasing')!='' && myImage.attr('data-zoomEasing')!=undefined) {
									easing_aux=myImage.attr('data-zoomEasing');
								}
								//current_obj.current_imgInside.removeClass("noTransition");
								current_obj.current_imgInside.css({
									"-webkit-transition-duration":current_duration+"s",
									"-moz-transition-duration":current_duration+"s",
									"-ms-transition-duration":current_duration+"s",
									"-o-transition-duration":current_duration+"s",
									"transition-duration":current_duration+"s",
									"-webkit-transition-timing-function":css_easings(easing_aux),
									"-moz-transition-timing-function":css_easings(easing_aux),
									"-ms-transition-timing-function":css_easings(easing_aux),
									"-o-transition-timing-function":css_easings(easing_aux),
									"transition-timing-function":css_easings(easing_aux),
									"-webkit-transform":"scale("+zoomVal+")"+rotate_aux+"",
									"-moz-transform":"scale("+zoomVal+")"+rotate_aux+"",
									"-ms-transform":"scale("+zoomVal+")"+rotate_aux+"",
									"-o-transform":"scale("+zoomVal+")",
									"transform":"scale("+zoomVal+")"+rotate_aux+"",
									"perspective":"0",
									"-webkit-perspective":"0"
								});
		
		
						}
		} else {
			if (ver_ie!=-1 && ver_ie<10) {
				clearInterval(current_obj.msiInterval);
				current_obj.current_imgInside.css("filter",'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=1, M12=0, M21=0, M22=1, Dx=0, Dy=0)');
			}
		}

	}
	
	
	//circ
	function the_arc(current_obj,options) {
			nowx = (new Date).getTime();
			if (!current_obj.mouseOverBanner && options.showCircleTimer) {	 
				current_obj.ctx.clearRect(0,0,current_obj.canvas.width,current_obj.canvas.height);
  	            
                current_obj.ctx.beginPath();
                current_obj.ctx.globalAlpha=options.behindCircleAlpha/100;
                current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, 2 * Math.PI, false);
                current_obj.ctx.lineWidth = options.circleLineWidth+2;
                current_obj.ctx.strokeStyle = options.behindCircleColor;
                current_obj.ctx.stroke();
                

                current_obj.ctx.beginPath();
                current_obj.ctx.globalAlpha=options.circleAlpha/100;
                current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, ((current_obj.timeElapsed+nowx)-current_obj.arcInitialTime)/1000*2/current_obj.autoPlay*Math.PI,  false);
                current_obj.ctx.lineWidth = options.circleLineWidth;
                current_obj.ctx.strokeStyle = options.circleColor;
                current_obj.ctx.stroke();
             }
    }
	
	
	
    // navigation
	function magic_slider_navigation(direction,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb){
		var ver_ie=getInternetExplorerVersion();
		var navigateAllowed=true;
		if ((!options.loop && current_obj.current_img_no+direction>=current_obj.total_images) || (!options.loop && current_obj.current_img_no+direction<0))
			navigateAllowed=false;				
		
		if (navigateAllowed && !current_obj.slideIsRunning && current_obj.firstLoadingComplete) {
			$('.magic_slider_texts', magic_slider_container).css({'display':'none'});
			current_obj.slideIsRunning=true;
			clear_all_timeouts(current_obj.timeouts_arr);
			clear_all_intervals(current_obj.continuouseIntervalIDs);
			clear_all_rotations(current_obj.rotationFunctionsArr,current_obj);			
			//bgPrevNo=current_obj.previous_current_img_no;
			//jQuery.fx.off = true;
			//alert ((current_obj.currentImg.attr('data-text-id')));
			//$(current_obj.currentImg.attr('data-text-id')).children().css({'opacity':0.5});
			//$(current_obj.currentImg.attr('data-text-id')).children().clearQueue();		
			
			animate_exit_texts(current_obj,options,magic_slider_the,bannerControls);
	
			//$('.newFS', magic_slider_container ).contents().unwrap();
			current_obj.arcInitialTime=(new Date).getTime();
			current_obj.timeElapsed=0;			
			if (options.showCircleTimer) {
					clearInterval(current_obj.intervalID);

					current_obj.ctx.clearRect(0,0,current_obj.canvas.width,current_obj.canvas.height);
					current_obj.ctx.beginPath();
					current_obj.ctx.globalAlpha=options.behindCircleAlpha/100;
					current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, 2 * Math.PI, false);
					current_obj.ctx.lineWidth = options.circleLineWidth+2;
					current_obj.ctx.strokeStyle = options.behindCircleColor;
					current_obj.ctx.stroke();            
					
					
					current_obj.ctx.beginPath();
					current_obj.ctx.globalAlpha=options.circleAlpha/100;
					current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, 0,  false);
					current_obj.ctx.lineWidth = options.circleLineWidth;
					current_obj.ctx.strokeStyle = options.circleColor;
					current_obj.ctx.stroke();	
							
					current_obj.intervalID=setInterval(function(){the_arc(current_obj,options)}, 125);
			}
			
		    if (!current_obj.bottomNavClicked) {
				current_obj.previous_current_img_no=current_obj.current_img_no;
			}
			current_obj.bottomNavClicked=false;

			//$(current_obj.currentImg.attr('data-text-id')).css("display","none"); // from old version 2.0
			
			
			//deactivate previous
			if (options.skin=="bullets") {
               $(bottomNavButs[current_obj.current_img_no]).removeClass('bottomNavButtonON');
            }
            //thumbs deactivate previous
            if (options.skin!="bullets") {
               $(thumbsHolder_Thumbs[current_obj.current_img_no]).removeClass('thumbsHolder_ThumbON');
			}

			magic_slider_playOver.css('display','none');
			
			
			//set current img
			if (current_obj.current_img_no+direction>=current_obj.total_images) {
				current_obj.current_img_no=0;
			} else if (current_obj.current_img_no+direction<0) {
				current_obj.current_img_no=current_obj.total_images-1;
			} else {
				current_obj.current_img_no+=direction;
			}
			
			set_autoPlay(imgs,current_obj,options);


			if (options.skin=="bullets") {
			   $(bottomNavButs[current_obj.current_img_no]).addClass('bottomNavButtonON');
			}
			
			
			//thumbs activate current
			if (options.skin!="bullets") {
			   $(thumbsHolder_Thumbs[current_obj.current_img_no]).addClass('thumbsHolder_ThumbON');
			   //auto scroll carousel if needed
			   currentCarouselLeft=magic_slider_thumbsHolder.css('left').substr(0,magic_slider_thumbsHolder.css('left').lastIndexOf('px'));
			   if (current_obj.current_img_no===0 || current_obj.current_img_no===current_obj.total_images-1) {
				  carouselScroll(0,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb,current_obj);
			   } else {
				 carouselScroll(1001,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb,current_obj);
			  }
            }			

			
				setTimeout(function(){
					  current_obj.currentImg = $(imgs[current_obj.current_img_no]);
					  magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs);	
			    },100);			
			
			if (options.fadeSlides) {
				$('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).css({
					'opacity':1,
					'z-index':0,
					'display':'block'
				});
				$('#contentHolderUnit_'+current_obj.previous_current_img_no, magic_slider_container).css({
					'z-index':1,
					'display':'block'
				});
				
				

				
				//alert ( $('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).html() );
				$('#contentHolderUnit_'+current_obj.previous_current_img_no, magic_slider_container).animate({
					'opacity':0
				  }, options.scrollSlideDuration*1000, options.scrollSlideEasing, function() {
					// Animation complete.
					  current_obj.slideIsRunning=false;
					  if (options.fadeSlides) {
						$('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).css({
							'z-index':1
						});		
						$('#contentHolderUnit_'+current_obj.previous_current_img_no, magic_slider_container).css({
							'z-index':0,
							'display':'none'
						});
					  }
					  
					  ////magic_slider_reset_animate_image(current_obj,options,imgs);
					  /*current_obj.currentImg = $(imgs[current_obj.current_img_no]);
					  magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs);*/
					  
					  if (current_obj.currentImg.attr('data-video')=='true')
						magic_slider_playOver.css('display','block');
	
					  //reinit content to stop videos
					  //if ($(imgs[current_obj.previous_current_img_no]).attr('data-video')=='true')
							$('#contentHolderUnit_'+current_obj.previous_current_img_no, magic_slider_container).html($(imgs[current_obj.previous_current_img_no]).html());
							
							
					  //reposition previous image
					  initialPositioning(current_obj.previous_current_img_no,options, magic_slider_container,current_obj.origImgsDimensions,imgs);
	
					  clear_all_timeouts(current_obj.timeouts_arr);
					  //reposition previous texts
					  animate_texts(current_obj,$(imgs[current_obj.previous_current_img_no]),options,magic_slider_the,magic_slider_container,bannerControls,true);
					  //position current texts				  
					  animate_texts(current_obj,current_obj.currentImg,options,magic_slider_the,magic_slider_container,bannerControls,false);
					  //alert (current_obj.previous_current_img_no+'   ----   '+current_obj.current_img_no);	
					  //alert ("complete");
					  if (ver_ie!=-1 && ver_ie<10) {
						  //clearInterval(current_obj.msiInterval);
						  current_obj.previous_imgInside.css("filter",'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=1, M12=0, M21=0, M22=1, Dx=0, Dy=0)');		
						  //magic_slider_reset_animate_image(current_obj,options,imgs);	
					  }

					  
				});			
			} else {
				magic_slider_contentHolder.animate({
					'left':+(-1)*current_obj.current_img_no*options.width+'px'
				  }, options.scrollSlideDuration*1000, options.scrollSlideEasing, function() {
					// Animation complete.
					  current_obj.slideIsRunning=false;
					  /*magic_slider_reset_animate_image(current_obj,options,imgs);
					  current_obj.currentImg = $(imgs[current_obj.current_img_no]);
					  magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs);*/
					  
					  if (current_obj.currentImg.attr('data-video')=='true')
						magic_slider_playOver.css('display','block');
	
					  //reinit content to stop videos
					  //if ($(imgs[current_obj.previous_current_img_no]).attr('data-video')=='true')
							$('#contentHolderUnit_'+current_obj.previous_current_img_no, magic_slider_container).html($(imgs[current_obj.previous_current_img_no]).html());
					  
					  //reposition previous image
					  initialPositioning(current_obj.previous_current_img_no,options, magic_slider_container,current_obj.origImgsDimensions,imgs);
	
					  clear_all_timeouts(current_obj.timeouts_arr);
					  //reposition previous texts
					  animate_texts(current_obj,$(imgs[current_obj.previous_current_img_no]),options,magic_slider_the,magic_slider_container,bannerControls,true);
					  //position current texts				  
					  animate_texts(current_obj,current_obj.currentImg,options,magic_slider_the,magic_slider_container,bannerControls,false);
						
					  //alert ("complete");
					  if (ver_ie!=-1 && ver_ie<10) {
						  //clearInterval(current_obj.msiInterval);
						  current_obj.previous_imgInside.css("filter",'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=1, M12=0, M21=0, M22=1, Dx=0, Dy=0)');		
						  //magic_slider_reset_animate_image(current_obj,options,imgs);	
					  }					  
					  
			  
				});
			}


if (current_obj.autoPlay>0 && current_obj.total_images>1 && !current_obj.mouseOverBanner) {
						  //alert (current_obj.autoPlay-options.scrollSlideDuration);
						  //clearTimeout(current_obj.timeoutID);
						  current_obj.timeoutID=setTimeout(function(){ magic_slider_navigation(1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb)},current_obj.autoPlay*1000);
					  }			
			
			
			
		} // if navigateAllowed
		
	};
	




		function resizeImg(imageToResize,arrayID,current_obj,options,isBg) {
			var origDim=current_obj.origImgsDimensions[arrayID].split(";");
			if (options.responsive) {	
				origDim[0]=origDim[0]/(options.origWidth/options.width);
				origDim[1]=origDim[1]/(options.origWidth/options.width);
			}
			
			imageToResize.width(origDim[0]);
			imageToResize.height(origDim[1]);
			
			//center bg image for w&H 100%
			if (isBg && options.width100Proc && options.height100Proc) {				
				//alert (imageToResize.attr('src'));
				imageToResize.css({
					'position':'relative',
					'left':parseInt(options.width-imageToResize.width(),10)+"px",
					'top':parseInt(options.height-imageToResize.height(),10)+"px"
				});
				//alert (imageToResize.height()+'  --  '+options.height+'    /    '+imageToResize.width()+'  --   '+options.width);
			}
		}
		
		
		function resizeRepositionUnitContent(arrayID,current_obj,options,imgs,magic_slider_container,magic_slider_the,bannerControls) {
			if (options.responsive) {
				imgInside = $('#contentHolderUnit_'+arrayID, magic_slider_container).find('img:first');
				if (imgInside.width()!=null) {
					resizeImg(imgInside,arrayID,current_obj,options,true);
				}
				
				textIdChildren = $($(imgs[arrayID]).attr('data-text-id')).children();
				k=-1;
				textIdChildren.each(function() {
					k++;
					//alert ( $(this).attr('id') );
					imgInside = $(this).find('img:first');
					if (imgInside.width()!=null) {
						resizeImg(imgInside,($(imgs[arrayID]).attr('data-text-id')+'-'+k),current_obj,options,false);
					}
				});
				
				//reposition text
				$($(imgs[arrayID]).attr('data-text-id')).css({
					'width':options.width+'px',
					'left':parseInt(arrayID*options.width,10),
					'top':bannerControls.css('top')
				});
			}
		}







    function carouselScroll(direction,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb,current_obj) {
		currentCarouselLeft=magic_slider_thumbsHolder.css('left').substr(0,magic_slider_thumbsHolder.css('left').lastIndexOf('px'));
		if (direction===1 || direction===-1) {
			current_obj.isCarouselScrolling=true;
			magic_slider_thumbsHolder.css('opacity','0.5');
			magic_slider_thumbsHolder.animate({
			    opacity: 1,
			    left: '+='+direction*current_obj.carouselStep
			  }, 500, 'easeOutCubic', function() {
			      // Animation complete.
				  disableCarouselNav(current_obj,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb);						  
				  current_obj.isCarouselScrolling=false;
			});				
		} else {
				if ( currentCarouselLeft != (-1) * Math.floor( current_obj.current_img_no/options.numberOfThumbsPerScreen )*current_obj.carouselStep) {
					current_obj.isCarouselScrolling=true;
					magic_slider_thumbsHolder.css('opacity','0.5');
					magic_slider_thumbsHolder.animate({
					    opacity: 1,
					    left: (-1) * Math.floor( current_obj.current_img_no/options.numberOfThumbsPerScreen )*current_obj.carouselStep
					  }, 500, 'easeOutCubic', function() {
					      // Animation complete.
						  disableCarouselNav(current_obj,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb);						  
						  current_obj.isCarouselScrolling=false;
					});
				}
		}
	
		
	};
	
	function disableCarouselNav(current_obj,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb) {
		currentCarouselLeft=magic_slider_thumbsHolder.css('left').substr(0,magic_slider_thumbsHolder.css('left').lastIndexOf('px'));
		if (currentCarouselLeft <0 ) {
			if (magic_slider_carouselLeftNav.hasClass('carouselLeftNavDisabled'))
				magic_slider_carouselLeftNav.removeClass('carouselLeftNavDisabled');
		} else {
			magic_slider_carouselLeftNav.addClass('carouselLeftNavDisabled');
		}		
		
		if (Math.abs(currentCarouselLeft-current_obj.carouselStep)<(thumbsHolder_Thumb.width()+current_obj.thumbMarginLeft)*current_obj.total_images) {
			if (magic_slider_carouselRightNav.hasClass('carouselRightNavDisabled'))
				magic_slider_carouselRightNav.removeClass('carouselRightNavDisabled');
		} else {
			magic_slider_carouselRightNav.addClass('carouselRightNavDisabled');
		}				
	};




			function rearangethumbs(current_obj,options,magic_slider_container,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb,magic_slider_thumbsHolderVisibleWrapper,magic_slider_thumbsHolderWrapper) {
						//thumbs
						
						if (options.skin!="bullets") {
							magic_slider_thumbsHolderWrapper.css({
								"top":options.height+"px",
								"margin-top":parseInt(options.thumbsWrapperMarginTop/(options.origWidth/options.width),10)+"px",
								"height":parseInt(options.origthumbsHolderWrapperH/(options.origWidth/options.width),10)+"px"
							});

							bgTopCorrection=0;

							magic_slider_carouselLeftNav.css('background-position','0px '+((magic_slider_thumbsHolderWrapper.height()-options.origthumbsHolderWrapperH)/2+bgTopCorrection)+'px');
							magic_slider_carouselRightNav.css('background-position','0px '+((magic_slider_thumbsHolderWrapper.height()-options.origthumbsHolderWrapperH)/2+bgTopCorrection)+'px');
							
							magic_slider_thumbsHolderVisibleWrapper.css('width',options.width-magic_slider_carouselLeftNav.width()-magic_slider_carouselRightNav.width());
							options.origWidthThumbsHolderVisibleWrapper=options.origWidth-magic_slider_carouselLeftNav.width()-magic_slider_carouselRightNav.width()	;				
							

							thumbsHolder_Thumbs.css({
								'width':parseInt(options.origThumbW/(options.origWidthThumbsHolderVisibleWrapper/magic_slider_thumbsHolderVisibleWrapper.width()),10)+'px',
								'height':parseInt(options.origThumbH/(options.origWidthThumbsHolderVisibleWrapper/magic_slider_thumbsHolderVisibleWrapper.width()),10)+'px'
	
							});
							
							
							if (options.numberOfThumbsPerScreen >= current_obj.total_images) {
								magic_slider_thumbsHolderVisibleWrapper.css('left',parseInt((magic_slider_thumbsHolderWrapper.width() - (thumbsHolder_Thumb.width()+current_obj.thumbMarginLeft)*current_obj.total_images)/2,10)+'px');
							}							
							
							
							var imageInside = $('.thumbsHolder_ThumbOFF', magic_slider_container).find('img:first');

							imageInside.css({
								"width":thumbsHolder_Thumbs.width()+"px",
								"height":thumbsHolder_Thumbs.height()+"px",
								"margin-top":parseInt((magic_slider_thumbsHolderWrapper.height()-thumbsHolder_Thumbs.height())/2,10)+"px"
							});
							
							
							
							current_obj.thumbMarginLeft=Math.floor( (magic_slider_thumbsHolderWrapper.width()-magic_slider_carouselLeftNav.width()-magic_slider_carouselRightNav.width()-thumbsHolder_Thumb.width()*options.numberOfThumbsPerScreen)/(options.numberOfThumbsPerScreen-1) );
							thumb_i=-1;
							magic_slider_thumbsHolder.children().each(function() {
								thumb_i++;
								theThumb = $(this);
								theThumb.css('background-position','center '+(options.thumbsOnMarginTop/(options.origWidth/options.width))+'px');
								if ( thumb_i<=0 ) {
									theThumb.css('margin-left',Math.floor( ( magic_slider_thumbsHolderWrapper.width()-magic_slider_carouselLeftNav.width()-magic_slider_carouselRightNav.width()-(current_obj.thumbMarginLeft+theThumb.width())*(options.numberOfThumbsPerScreen-1) - theThumb.width() )/2 )+'px');
								} else {
									theThumb.css('margin-left',current_obj.thumbMarginLeft+'px');		
								}
							});

							current_obj.carouselStep=(thumbsHolder_Thumb.width()+current_obj.thumbMarginLeft)*options.numberOfThumbsPerScreen;

						}				
			}






			function doResize(current_obj,options,imgs,magic_slider_the,bannerControls,magic_slider_contentHolderVisibleWrapper,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,bottomNavButs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb,magic_slider_leftNav,bottomNavBut,magic_slider_bottomNav,magic_slider_thumbsHolderVisibleWrapper,magic_slider_thumbsHolderWrapper,magic_slider_rightNav) {
					$('.magic_slider_texts', magic_slider_container).css({'display':'none'});
					if (options.fadeSlides) {

						$('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).css({
							'z-index':0,
							'display':'none'
						});
					  }
					
					
					if (options.width100Proc && options.height100Proc && !options.setAsBg) {
						var bodyOverflow_initial=$('body').css('overflow');
						$('body').css('overflow','hidden');
					}
					var newTextLeft=0;
					
					/*responsiveWidth=magic_slider_the.parent().parent().width();
					responsiveHeight=magic_slider_the.parent().parent().height();*/
					if (options.enableTouchScreen && options.fadeSlides) {
						responsiveWidth=magic_slider_the.parent().parent().parent().width();
						responsiveHeight=magic_slider_the.parent().parent().parent().height();
					} else {
						responsiveWidth=magic_slider_the.parent().parent().width();
						responsiveHeight=magic_slider_the.parent().parent().height();						
					}					
					
					
					
					if (options.responsiveRelativeToBrowser) {
						responsiveWidth=$(window).width();
						responsiveHeight=$(window).height();
					}
					

					if (options.width100Proc) {
						options.width=responsiveWidth;
					}
					
					if (options.height100Proc) {
						options.height=responsiveHeight;
					}

					if (options.origWidth!=responsiveWidth || options.width100Proc) {
						if (options.origWidth>responsiveWidth || options.width100Proc) {
							options.width=responsiveWidth;
						} else if (!options.width100Proc) {
							options.width=options.origWidth;
						}
						if (!options.height100Proc)
							options.height=options.width/current_obj.bannerRatio;
							
						if (options.enableTouchScreen && options.responsive && options.fadeSlides) {
							//options.width-=1;							
						}

						
						//set banner size
						magic_slider_container.width(options.width);
						magic_slider_container.height(options.height);
						
						magic_slider_contentHolderVisibleWrapper.width(options.width);
						magic_slider_contentHolderVisibleWrapper.height(options.height);
						
						magic_slider_contentHolder.width(options.width);
						magic_slider_contentHolder.height(options.height);
						
						bannerControls.css('margin-top',parseInt((options.height-magic_slider_leftNav.height())/2,10)+'px');
						
						for (i=0; i<current_obj.total_images; i++) {
							resizeRepositionUnitContent(i,current_obj,options,imgs,magic_slider_container,magic_slider_the,bannerControls);													
						}						

						
						////magic_slider_reset_animate_image(current_obj,options,imgs);
						contentHolderUnit = $('.contentHolderUnit', magic_slider_container);
						contentHolderUnit.width(options.width);
						contentHolderUnit.height(options.height);
						
						if (options.enableTouchScreen && options.fadeSlides) {
							magic_slider_container.parent().width(options.width+1);
							magic_slider_container.parent().height(options.height);
						}						

						holderWidth=options.width*current_obj.total_images;
						for (i=0; i<current_obj.total_images; i++) {
							initialPositioning(i,options, magic_slider_container,current_obj.origImgsDimensions,imgs);
							if (options.fadeSlides) {
								newTextLeft=0;
							} else {
								newTextLeft=parseInt(i*options.width,10);
							}
							//reposition text
							$($(imgs[i]).attr('data-text-id')).css({
								'width':magic_slider_the.width()+'px',
								'left':newTextLeft,
								'top':bannerControls.css('top')
							});
													
						}

						
	
						magic_slider_contentHolder.width(holderWidth);

						if (options.skin=="bullets") {
							magic_slider_bottomNav.css({
								"left":parseInt((magic_slider_container.width()-magic_slider_bottomNav.width())/2,10)+"px",
								"top":options.height+"px"
							});
							if (options.width100Proc && options.height100Proc) {
								// nothing
							} else {
								magic_slider_bottomNav.css('margin-top',parseInt(options.thumbsWrapperMarginTop/(options.origWidth/options.width),10)+'px');
							}
						} else {
							rearangethumbs(current_obj,options,magic_slider_container,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb,magic_slider_thumbsHolderVisibleWrapper,magic_slider_thumbsHolderWrapper);
						}
						

		 
		 
						//playover
						magic_slider_playOver.css({
							'left':parseInt((options.width-magic_slider_playOver.width())/2,10)+'px',
							'top':parseInt((options.height-magic_slider_playOver.height())/2,10)+'px'
						});
	
						
						clearTimeout(current_obj.timeoutID);
						
						clear_all_intervals(current_obj.continuouseIntervalIDs);
						
						if (current_obj.total_images>1) {
							//$(current_obj.currentImg.attr('data-text-id')).children().clearQueue();		
						    //$(current_obj.currentImg.attr('data-text-id')).css("display","none");
							//magic_slider_navigation(1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb);	
							
							//reposition previous texts
							magic_slider_rightNav.click(); 
						} else {
						  $('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).html($(imgs[current_obj.previous_current_img_no]).html());
					  
						  //reposition previous image
						  initialPositioning(current_obj.current_img_no,options, magic_slider_container,current_obj.origImgsDimensions,imgs);
		
						  clear_all_timeouts(current_obj.timeouts_arr);
						  
						  $('.newFS', magic_slider_container ).contents().unwrap();

						  //position current texts				  
						  animate_texts(current_obj,current_obj.currentImg,options,magic_slider_the,magic_slider_container,bannerControls,false);		

						  if (options.fadeSlides) {
							  $('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).css({
								  'opacity':1,
								  'z-index':0,
								  'display':'block'
							  });
						  }
						  setTimeout(function(){
								magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs);
						  },100);
						  
						}
						
						
					}
					
					if (options.width100Proc && options.height100Proc && !options.setAsBg) {
						$('body').css('overflow',bodyOverflow_initial);
					}
			}	
			
			
			
	function getInternetExplorerVersion()
	// -1 - not IE
	// 7,8,9 etc
	{
	   var rv = -1; // Return value assumes failure.
	   if (navigator.appName == 'Microsoft Internet Explorer')
	   {
		  var ua = navigator.userAgent;
		  var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		  if (re.exec(ua) != null)
			 rv = parseFloat( RegExp.$1 );
	   }
	   else if (navigator.appName == 'Netscape')
	   {
		 var ua = navigator.userAgent;
		 var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		 if (re.exec(ua) != null)
		   rv = parseFloat( RegExp.$1 );
	   }
	   return parseInt(rv,10);
	}	
	
	
	function set_autoPlay(imgs,current_obj,options) {
		current_obj.autoPlay=options.autoPlay;
		if ($(imgs[current_obj.current_img_no]).attr('data-autoPlay')!=undefined && $(imgs[current_obj.current_img_no]).attr('data-autoPlay')!='') {
			//alert ('data-autoPlay:'+$(imgs[current_obj.current_img_no]).attr('data-autoPlay'));
			current_obj.autoPlay=$(imgs[current_obj.current_img_no]).attr('data-autoPlay');
		}
		//alert (current_obj.current_img_no+'  ---  '+current_obj.autoPlay);
	}


	
	$.fn.magic_slider = function(options) {

		var options = $.extend({},$.fn.magic_slider.defaults, options);

		return this.each(function() {
			var magic_slider_the = $(this);
					responsiveWidth=magic_slider_the.parent().width();
					responsiveHeight=magic_slider_the.parent().height();
					if (options.responsiveRelativeToBrowser) {
						responsiveWidth=$(window).width();
						responsiveHeight=$(window).height();
					}			
					options.origWidth=options.width;
					if (options.width100Proc)
						options.width=responsiveWidth;
					
					options.origHeight=options.height;
					if (options.height100Proc) {
						options.height=responsiveHeight;
					}
						
					if (options.responsive && (options.origWidth!=responsiveWidth || options.width100Proc)) {
						if (options.origWidth>responsiveWidth || options.width100Proc) {
							options.width=responsiveWidth;
						} else {
							options.width=options.origWidth;
						}
						if (!options.height100Proc)
							options.height=options.width/(options.origWidth/options.origHeight);	
					}
					
					if (options.enableTouchScreen && options.responsive && options.fadeSlides) {
						//options.width-=1;
					}

				
			
			//the controllers
			var magic_slider_wrap = $('<div></div>').addClass('magic_slider').addClass(options.skin);
			var bannerControlsDef = $('<div class="bannerControls">   <div class="leftNav"></div>   <div class="rightNav"></div>      </div>  <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div>   <div class="playOver"></div>  <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <canvas class="mycanvas"></canvas>');
			magic_slider_the.wrap(magic_slider_wrap);
			magic_slider_the.after(bannerControlsDef);
			

			
			//the elements
			var magic_slider_container = magic_slider_the.parent('.magic_slider');
			if (options.setAsBg) {
				magic_slider_container.wrap('<div class="setAsBg" />');
			}			
			var bannerControls = $('.bannerControls', magic_slider_container);
			
			
			var magic_slider_contentHolderVisibleWrapper = $('.contentHolderVisibleWrapper', magic_slider_container);
			var magic_slider_contentHolder = $('.contentHolder', magic_slider_container);			
			
			
			var bottomNav_aux=$('<div class="bottomNav"></div>');
			
			magic_slider_the.after(bottomNav_aux);
			 
			if (!options.showAllControllers)
				bannerControls.css("display","none");			
			

			
			
			var magic_slider_leftNav = $('.leftNav', magic_slider_container);
			var magic_slider_rightNav = $('.rightNav', magic_slider_container);
			magic_slider_leftNav.css("display","none");
			magic_slider_rightNav.css("display","none");			
			if (options.showNavArrows) {
				if (options.showOnInitNavArrows) {
					magic_slider_leftNav.css("display","block");
					magic_slider_rightNav.css("display","block");
				}
			}
			
			var magic_slider_bottomNav = $('.bottomNav', magic_slider_container);
			var magic_slider_bottomOverThumb;
			if (options.skin=="bullets") {
				magic_slider_bottomNav.css({
					"display":"block",
					"top":options.height+"px"
				});
				if (options.width100Proc && options.height100Proc) {
					magic_slider_bottomNav.css("margin-top",options.thumbsWrapperMarginTop+'px');
				} else {
					magic_slider_bottomNav.css("margin-top",options.thumbsWrapperMarginTop/(options.origWidth/options.width)+'px');
				}
			}
			
			if (!options.showBottomNav) {
				magic_slider_bottomNav.css("display","none");
			}
			if (!options.showOnInitBottomNav) {
				magic_slider_bottomNav.css("left","-5000px");
			}
			



            //thumbs
			var magic_slider_thumbsHolderWrapper = $('.thumbsHolderWrapper', magic_slider_container);
            var magic_slider_thumbsHolderVisibleWrapper = $('.thumbsHolderVisibleWrapper', magic_slider_container);
			var magic_slider_thumbsHolder = $('.thumbsHolder', magic_slider_container);
			
			var magic_slider_carouselLeftNav;
			var magic_slider_carouselRightNav;
			magic_slider_carouselLeftNav=$('<div class="carouselLeftNav"></div>');
			magic_slider_carouselRightNav=$('<div class="carouselRightNav"></div>');
			magic_slider_thumbsHolderWrapper.append(magic_slider_carouselLeftNav);
			magic_slider_thumbsHolderWrapper.append(magic_slider_carouselRightNav);
			magic_slider_carouselRightNav.css('right','0');
			
			magic_slider_thumbsHolder.css('width',magic_slider_carouselLeftNav.width()+'px');
			
			if (!options.showBottomNav || !options.showOnInitBottomNav) {
				magic_slider_thumbsHolderWrapper.css({
					"opacity":0,
					"display":"none"
				});
			}
				
				
			if (options.skin!="bullets") {
					magic_slider_thumbsHolderWrapper.css('margin-top',parseInt(options.thumbsWrapperMarginTop/(options.origWidth/options.width),10)+'px');
			}
			
			var ver_ie=getInternetExplorerVersion();

			
			
			if (options.enableTouchScreen) {
				if (options.fadeSlides) {
					var randomNo=Math.floor(Math.random()*100000);
					
					magic_slider_container.wrap('<div id="zoominoutParent_'+randomNo+'" style="position:relative;" />');
					$('#zoominoutParent_'+randomNo).width(options.width+1);
					$('#zoominoutParent_'+randomNo).height(options.height);	
				}
				
				
				if (ver_ie!=-1 && ver_ie==9 && options.fadeSlides && options.skin=="bullets") {
					//nothing
				} else {	
					magic_slider_contentHolder.css('cursor','url('+options.absUrl+'skins/hand.cur),url('+options.absUrl+'skins/hand.cur),move');
					magic_slider_container.css('cursor','url('+options.absUrl+'skins/hand.cur),url('+options.absUrl+'skins/hand.cur),move');
				}
				magic_slider_contentHolder.css('left','0');
				if (options.fadeSlides) {
					if (ver_ie!=-1 && ver_ie==9 && options.fadeSlides && options.skin=="bullets") {
						//nothing
					} else {
							magic_slider_container.draggable({ 
								axis: 'x',
								containment: "parent",
								distance:10,
								/*revert: true,
								distance:10,*/
								start: function(event, ui) {
									origLeft=parseInt($(this).css('left'),10);
									magic_slider_playOver.css('display','none');
								},
								stop: function(event, ui) {
									if (!current_obj.slideIsRunning) {
										finalLeft=parseInt($(this).css('left'),10);
										if (origLeft<finalLeft) {
											magic_slider_leftNav.click();
										} else {
											magic_slider_rightNav.click();	
										}
										//alert (direction+' -- '+origLeft+ ' < '+finalLeft);
										//alert (origLeft+ ' < '+finalLeft);
										$(this).css('left','0px');
									}
								}
							});
					}
				} else  {
						magic_slider_contentHolder.draggable({ 
							axis: 'x',
							distance:10,
							disabled: true,
							start: function(event, ui) {
								origLeft=parseInt($(this).css('left'),10);
								magic_slider_playOver.css('display','none');
							},
							stop: function(event, ui) {
								if (!current_obj.slideIsRunning) {
									finalLeft=parseInt($(this).css('left'),10);
									if (origLeft<finalLeft) {
										magic_slider_leftNav.click();
									} else {	
										magic_slider_rightNav.click();	
									}
								}
							}
						});					
				}
		
			}
			
			
			
			
			//the vars
			var magic_slider_playOver=$('.playOver', magic_slider_container);
			magic_slider_playOver.css({
				'left':parseInt((options.width-magic_slider_playOver.width())/2,10)+'px',
				'top':parseInt((options.height-magic_slider_playOver.height())/2,10)+'px'
			});

			var current_obj = {
					total_images:0,
					current_img_no:0,
					currentImg:0,
					previous_current_img_no:0,
					autoPlay:false,
					slideIsRunning:false,
					mouseOverBanner:false,
					isVideoPlaying:false,
					bottomNavClicked:false,
					current_imgInside:'',
					previous_imgInside:'',
					windowWidth:0,
					carouselStep:0,
					thumbMarginLeft:0,
					timeoutID:'',
					intervalID:'',
					arcInitialTime:(new Date).getTime(),
					timeElapsed:0,
					origImgsDimensionsBGS:Array(),
					origImgsDimensions:Array(),
					canvas:'',
					ctx:'',
					timeouts_arr:Array(),
					continuouseIntervalIDs:Array(),
					rotationFunctionsArr:Array(),
					rotationDurationArr:Array(),
					iFrameArr:Array(),
					bannerRatio:options.origWidth/options.origHeight,
					msiInterval:'',
					msiInitialTime:(new Date).getTime(),
					curZoom:0,
					cur_marginLeft:0,
					cur_marginTop:0,
					firstLoadingComplete:false
				};
			
							
			current_obj.canvas = $('.mycanvas', magic_slider_container)[0];
			current_obj.canvas.width=2*options.circleRadius+4*options.circleLineWidth;
			current_obj.canvas.height=2*options.circleRadius+4*options.circleLineWidth;
			
			current_obj.autoPlay=options.autoPlay;
			
			
			if (ver_ie!=-1 && ver_ie<9) {
			   options.showCircleTimer=false;
			}
			if (options.showCircleTimer) {				
				current_obj.ctx = current_obj.canvas.getContext('2d');
			}
 				
			var origImgsDimensions=new Array();

			
			var previousBottomHovered=0;
			var i = 0;

			
			//set banner size
			magic_slider_container.width(options.width);
			magic_slider_container.height(options.height);
			
			magic_slider_contentHolderVisibleWrapper.width(options.width);
			magic_slider_contentHolderVisibleWrapper.height(options.height);
			
			magic_slider_contentHolder.width(options.width);
			magic_slider_contentHolder.height(options.height);

			bannerControls.css('margin-top',parseInt((options.height-magic_slider_leftNav.height())/2,10)+'px');
			


			
			//get images
			var theul=magic_slider_the.find('ul:first');
			
			current_obj.total_images=0;
			var imgs = theul.children();
			var content_HolderUnit;
			var holderWidth=0;
			var bottomNavBut;
			var bottomNavWidth=0;
			var bottomNavMarginTop=0;
			var imgInside;
			var thumbsHolder_Thumb;
			var thumbsHolder_MarginTop=0;
			var myopacity=0;
			var newTextLeft=0;
			var emptyImg='<img src="'+options.absUrl+'skins/empty.png" alt="" width="1" height="1" />';
			imgs.each(function() {
	            current_obj.currentImg = $(this);
	            if(!current_obj.currentImg.is('li')){
	            	current_obj.currentImg = current_obj.currentImg.find('li:first');
	            }

	            	
	            if(current_obj.currentImg.is('li')){
	            	current_obj.total_images++;
					myzindex=0;
					mydisplay='none';
					if (current_obj.total_images==1) {
						myzindex=1;
						mydisplay='block';
					}
	            	content_HolderUnit = $('<div class="contentHolderUnit" rel="'+ (current_obj.total_images-1) +'" id="contentHolderUnit_'+ (current_obj.total_images-1) +'">'+current_obj.currentImg.html()+'</div>');
					if (options.fadeSlides) {
						content_HolderUnit.css({
							'position':'absolute',
							'top':0,
							'left':0,
							'z-index':myzindex,
							'display':mydisplay
						});
					} else {
						content_HolderUnit.css({
							'position':'relative',
							'float':'left'
						});
					}
	            	content_HolderUnit.width(options.width);
	            	content_HolderUnit.height(options.height);
	            	magic_slider_contentHolder.append(content_HolderUnit);
	            	holderWidth=holderWidth+options.width;
					
	            	imgInside = $('#contentHolderUnit_'+(current_obj.total_images-1), magic_slider_container).find('img:first');
					//alert (imgInside.width()+';'+imgInside.height());
	            	if (imgInside.width()!=null) {
						current_obj.origImgsDimensions[current_obj.total_images-1]=imgInside.width()+';'+imgInside.height();
						if (options.responsive && options.origWidth!=responsiveWidth) {
							resizeImg(imgInside,(current_obj.total_images-1),current_obj,options,true);
						}
					} else {
						$('#contentHolderUnit_'+(current_obj.total_images-1), magic_slider_container).prepend(emptyImg);
						current_obj.origImgsDimensions[current_obj.total_images-1]="1;1";
					}					
	            	
	            	current_obj.current_img_no=current_obj.total_images-1;
	            	imgInside = $('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).find('img:first');
	            	origImgsDimensions[current_obj.total_images-1]=imgInside.width()+';'+imgInside.height();
	            	initialPositioning((current_obj.total_images-1),options, magic_slider_container,current_obj.origImgsDimensions,imgs);
//alert (current_obj.origImgsDimensions[current_obj.total_images-1]+' ---  '+origImgsDimensions[current_obj.total_images-1]);	            	
		            //generate bottomNav
		            if (options.skin=="bullets") {
		                       bottomNavBut = $('<div class="bottomNavButtonOFF" rel="'+ (current_obj.total_images-1) +'"></div>');
		                       magic_slider_bottomNav.append(bottomNavBut);
		            
		            
		                       bottomNavWidth+=parseInt(bottomNavBut.css('padding-left').substring(0, bottomNavBut.css('padding-left').length-2),10)+bottomNavBut.width();
                               bottomNavMarginTop=parseInt((magic_slider_bottomNav.height()-parseInt(bottomNavBut.css('height').substring(0, bottomNavBut.css('height').length-2)))/2,10);
                               bottomNavBut.css('margin-top',bottomNavMarginTop+'px');
							   
                   }
                   

		            //thumbs generate thumbsHolder
              if (options.skin!="bullets") {
					image_name=$(imgs[current_obj.total_images-1]).attr('data-bottom-thumb');
					thumbsHolder_Thumb = $('<div class="thumbsHolder_ThumbOFF" rel="'+ (current_obj.total_images-1) +'"><img src="'+ image_name + '"></div>');
		            magic_slider_thumbsHolder.append(thumbsHolder_Thumb);
		            if (options.origThumbW==0) {

					   	if (options.numberOfThumbsPerScreen==0) {
							options.numberOfThumbsPerScreen=Math.floor((options.origWidth-magic_slider_carouselLeftNav.width()-magic_slider_carouselRightNav.width())/thumbsHolder_Thumb.width());
						}
						options.origThumbW=thumbsHolder_Thumb.width();
						options.origThumbH=thumbsHolder_Thumb.height();
						options.origthumbsHolderWrapperH=magic_slider_thumbsHolderWrapper.height();
						current_obj.thumbMarginLeft=Math.floor( (options.origWidth-magic_slider_carouselLeftNav.width()-magic_slider_carouselRightNav.width()-thumbsHolder_Thumb.width()*options.numberOfThumbsPerScreen)/(options.numberOfThumbsPerScreen-1) );
                    }


		            magic_slider_thumbsHolder.css('width',magic_slider_thumbsHolder.width()+current_obj.thumbMarginLeft+thumbsHolder_Thumb.width()+'px');
	            
		            thumbsHolder_MarginTop=parseInt((magic_slider_thumbsHolderWrapper.height()-parseInt(thumbsHolder_Thumb.css('height').substring(0, thumbsHolder_Thumb.css('height').length-2)))/2,10);

                }
           
                   
                   
		            
		            if (options.fadeSlides) {
						newTextLeft=0;
					} else {
						newTextLeft=parseInt((current_obj.total_images-1)*options.width,10);
					}
					magic_slider_contentHolder.append($(current_obj.currentImg.attr('data-text-id')));
					$(current_obj.currentImg.attr('data-text-id')).css({
						'width':magic_slider_the.width()+'px',
						'left':newTextLeft,
						'top':bannerControls.css('top')
					});
					
					var textIdChildren = $(current_obj.currentImg.attr('data-text-id')).children();
					var k=-1;
					textIdChildren.each(function() {
						k++;
						//alert ( $(this).attr('id') );
						imgInside = $(this).find('img:first');
						if (imgInside.width()!=null) {
							current_obj.origImgsDimensions[current_obj.currentImg.attr('data-text-id')+'-'+k]=imgInside.width()+';'+imgInside.height();
							if (options.responsive && options.origWidth!=responsiveWidth) {	
								resizeImg(imgInside,(current_obj.currentImg.attr('data-text-id')+'-'+k),current_obj,options,false);
							}
						} else {
							current_obj.origImgsDimensions[current_obj.currentImg.attr('data-text-id')+'-'+k]=null;
						}
					});					
					
	            }	            

	        });		
			magic_slider_contentHolder.width(holderWidth);
			
			magic_slider_bottomNav.width(bottomNavWidth);
			if (options.showOnInitBottomNav) {
				magic_slider_bottomNav.css("left",parseInt((magic_slider_container.width()-bottomNavWidth)/2,10)+'px');
			}	
			

			//thumbs
        if (options.skin!="bullets") {
			magic_slider_thumbsHolderVisibleWrapper.css({
				'width':(options.origWidth-magic_slider_carouselLeftNav.width()-magic_slider_carouselRightNav.width()),
				'left':magic_slider_carouselLeftNav.width()+'px'
			});
			
			
			current_obj.carouselStep=(thumbsHolder_Thumb.width()+current_obj.thumbMarginLeft)*options.numberOfThumbsPerScreen;
			//disable left nav
			magic_slider_carouselLeftNav.addClass('carouselLeftNavDisabled');
			
			//disable right nav and center thumbs
			if (options.numberOfThumbsPerScreen >= current_obj.total_images) {
				magic_slider_carouselRightNav.addClass('carouselRightNavDisabled');
				magic_slider_carouselLeftNav.css('display','none');
				magic_slider_carouselRightNav.css('display','none');
				magic_slider_thumbsHolderVisibleWrapper.css('left',parseInt((magic_slider_thumbsHolderWrapper.width() - (thumbsHolder_Thumb.width()+current_obj.thumbMarginLeft)*current_obj.total_images)/2,10)+'px');
			}
			
			magic_slider_thumbsHolderWrapper.css("top",options.height+'px');
		    

			var img_inside = $('.thumbsHolder_ThumbOFF', magic_slider_container).find('img:first');
			img_inside.css("margin-top",thumbsHolder_MarginTop+"px");
			options.origthumbsHolder_MarginTop=thumbsHolder_MarginTop;

         }

		var thumbsHolder_Thumbs=$('.thumbsHolder_ThumbOFF', magic_slider_container);
		rearangethumbs(current_obj,options,magic_slider_container,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb,magic_slider_thumbsHolderVisibleWrapper,magic_slider_thumbsHolderWrapper);		 
			
			//for youtube iframes
			$("iframe", magic_slider_container).each(function(){
			      var ifr_source = $(this).attr('src');
				  var wmode = "?wmode=transparent";
				  if ( ifr_source.indexOf('?')!=-1 )
				  	wmode = "&wmode=transparent";
			      $(this).attr('src',ifr_source+wmode);
			});
			
			
			
			
	        //initialize first number image
			current_obj.current_img_no=0;
 			/*if (options.fadeSlides) {
				  $('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).css({
					  'z-index':1
				  });
			}*/			
			
	        
	        
			current_obj.currentImg = $(imgs[0]);
			var firstImg=magic_slider_container.find('img:first');
			

			var paused = "no";
			

			
			//pause on hover
			magic_slider_container.mouseover(function() {

        if (options.pauseOnMouseOver && current_obj.total_images>1 && current_obj.firstLoadingComplete) {	
					current_obj.mouseOverBanner=true;
					clearTimeout(current_obj.timeoutID);
					nowx = (new Date).getTime();
					current_obj.timeElapsed=current_obj.timeElapsed+(nowx-current_obj.arcInitialTime);
				}
				
				
				if (options.autoHideNavArrows && options.showNavArrows) {
					magic_slider_leftNav.css("display","block");
					magic_slider_rightNav.css("display","block");
				}
        if (options.autoHideBottomNav && options.showBottomNav) {
				    if (options.skin=="bullets") {
					   magic_slider_bottomNav.css({
						   "display":"block",
						   "left":parseInt((magic_slider_container.width()-bottomNavWidth)/2,10)+"px"
					   });
                     } else {
						 	if (options.thumbsWrapperMarginTop<0 && current_obj.isVideoPlaying) {
                       			//nothing
							} else {
								if (options.showBottomNav) {
									magic_slider_thumbsHolderWrapper.css({
										"display":"block"
									});									
									magic_slider_thumbsHolderWrapper
									.stop()
									.animate({
										opacity:1
									}, 500, 'swing', function() {
									 //complete
									});
								}								
							}
                     }
	
				}				
			});
			
			magic_slider_container.mouseleave(function() {
				if (options.pauseOnMouseOver && current_obj.total_images>1 && current_obj.firstLoadingComplete) {		
					current_obj.mouseOverBanner=false;
					nowx = (new Date).getTime();
				}	
				
				
				if (options.autoHideNavArrows && options.showNavArrows && !current_obj.isVideoPlaying) {
					magic_slider_leftNav.css("display","none");
					magic_slider_rightNav.css("display","none");
				}
				if (options.autoHideBottomNav && options.showBottomNav) {
				   if (options.skin=="bullets") {
       					magic_slider_bottomNav.css("display","none");
				   } else	 {
           				magic_slider_thumbsHolderWrapper
									.stop()
									.animate({
										opacity:0
									}, 300, 'swing', function() {
									 //complete
									});
				   }
				}	
                			
				if (current_obj.autoPlay>0 && current_obj.total_images>1 && !current_obj.isVideoPlaying && options.pauseOnMouseOver && current_obj.firstLoadingComplete) {
					clearTimeout(current_obj.timeoutID);

					
				    current_obj.arcInitialTime = (new Date).getTime();
					var new_delay = parseInt(current_obj.autoPlay*1000-((current_obj.timeElapsed+nowx)-current_obj.arcInitialTime),10);
					current_obj.timeoutID=setTimeout(function(){ magic_slider_navigation(1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb)},new_delay);
				}
			});
			
			
			var contentHolderUnit=$('.contentHolderUnit', magic_slider_contentHolder);
			if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Android') == -1) {
				contentHolderUnit.css("z-index","1");
			} else if (navigator.userAgent.indexOf('Chrome') != -1 && navigator.userAgent.indexOf('Android') == -1) {
				contentHolderUnit.css("z-index","1");
			}
			contentHolderUnit.click(function() {
				var i=$(this).attr('rel');
				//alert (i+' -- '+current_obj.current_img_no);
				if ($(imgs[current_obj.current_img_no]).attr('data-video')=='true') {
					if (i!=current_obj.current_img_no) {
						current_obj.isVideoPlaying=false;
					} else {
						clearTimeout(current_obj.timeoutID);
						////magic_slider_reset_animate_image(current_obj,options,imgs);
		
						imgInside = $(this).find('img:first');
						imgInside.css('display','none');
						magic_slider_playOver.css('display','none');
						var texts = $(current_obj.currentImg.attr('data-text-id')).children();
				        texts.css("opacity",0);
                        current_obj.isVideoPlaying=true;
						
						if (options.thumbsWrapperMarginTop<0) {
                       			magic_slider_thumbsHolderWrapper.css("display","none");
 								if (options.skin=="bullets") {
					   				magic_slider_bottomNav.css("display","none");								
								}					
						}
						if (options.showCircleTimer) {
								clearInterval(current_obj.intervalID);

								current_obj.ctx.clearRect(0,0,current_obj.canvas.width,current_obj.canvas.height);
								current_obj.ctx.beginPath();
								current_obj.ctx.globalAlpha=0;
								current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, 0, false);
								current_obj.ctx.lineWidth = options.circleLineWidth+2;
								current_obj.ctx.strokeStyle = options.behindCircleColor;
								current_obj.ctx.stroke();            
								
								
								current_obj.ctx.beginPath();
								current_obj.ctx.globalAlpha=0;
								current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, 0,  false);
								current_obj.ctx.lineWidth = options.circleLineWidth;
								current_obj.ctx.strokeStyle = options.circleColor;
								current_obj.ctx.stroke();	

						}						
					}
				}

				var mycurImg=$(imgs[current_obj.current_img_no]);
				if (mycurImg.attr('data-link')!=undefined && i==current_obj.current_img_no && mycurImg.attr('data-link')!='') {
					var cur_target=options.target;
					
					if (mycurImg.attr('data-target')!=undefined && mycurImg.attr('data-target')!=''){
						cur_target=mycurImg.attr('data-target');
					}
					
					if (cur_target=="_blank")
						window.open(mycurImg.attr('data-link'));
					else
						window.location = mycurImg.attr('data-link');
				}
			});
			
			
			magic_slider_playOver.click(function() {
				magic_slider_playOver.css('display','none');						
				clearTimeout(current_obj.timeoutID);
				////magic_slider_reset_animate_image(current_obj,options,imgs);
				
				imgInside = $('#contentHolderUnit_'+current_obj.current_img_no, magic_slider_container).find('img:first');
				imgInside.css('display','none');
				var all_texts = $(current_obj.currentImg.attr('data-text-id')).children();
				all_texts.css("opacity",0);
				current_obj.isVideoPlaying=true;	
				
						if (options.thumbsWrapperMarginTop<0) {
                       			magic_slider_thumbsHolderWrapper.css("display","none");
								if (options.skin=="bullets") {
					   				magic_slider_bottomNav.css("display","none");								
								}								
						}					

						if (options.showCircleTimer) {
								clearInterval(current_obj.intervalID);

								current_obj.ctx.clearRect(0,0,current_obj.canvas.width,current_obj.canvas.height);
								current_obj.ctx.beginPath();
								current_obj.ctx.globalAlpha=0;
								current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, 0, false);
								current_obj.ctx.lineWidth = options.circleLineWidth+2;
								current_obj.ctx.strokeStyle = options.behindCircleColor;
								current_obj.ctx.stroke();            
								
								
								current_obj.ctx.beginPath();
								current_obj.ctx.globalAlpha=0;
								current_obj.ctx.arc(options.circleRadius+2*options.circleLineWidth, options.circleRadius+2*options.circleLineWidth, options.circleRadius, 0, 0,  false);
								current_obj.ctx.lineWidth = options.circleLineWidth;
								current_obj.ctx.strokeStyle = options.circleColor;
								current_obj.ctx.stroke();	

						}					
			});			
			
			
			
			//controllers
			magic_slider_leftNav.click(function() {
				if (!current_obj.slideIsRunning) {
					current_obj.isVideoPlaying=false;
					
					if (options.showBottomNav) {
						magic_slider_thumbsHolderWrapper.css({
							"opacity":1,
							"display":"block"
						});
						
						if (options.skin=="bullets") {
					   		magic_slider_bottomNav.css("display","block");								
						}						
					}

					
					clearTimeout(current_obj.timeoutID);
					magic_slider_navigation(-1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb);
				}
			});
			magic_slider_rightNav.click(function() {
				if (!current_obj.slideIsRunning) {
					current_obj.isVideoPlaying=false;
					
					if (options.showBottomNav) {
						magic_slider_thumbsHolderWrapper.css({
							"opacity":1,
							"display":"block"
						});
						if (options.skin=="bullets") {
					   		magic_slider_bottomNav.css("display","block");								
						}						
					}					
					
					clearTimeout(current_obj.timeoutID);
					magic_slider_navigation(1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb);
				}
			});
			
			
			
			
			
			
			
			
			
			
			
			var TO = false;
			$(window).resize(function() {
				var ver_ie=getInternetExplorerVersion();
				doResizeNow=true;
				/*if (navigator.userAgent.indexOf('Android') != -1) {
					if (options.windowOrientationScreenSize0==0 && window.orientation==0)
						options.windowOrientationScreenSize0=$(window).width();
						
					if (options.windowOrientationScreenSize90==0 && window.orientation==90)
						options.windowOrientationScreenSize90=$(window).height();	
						
					if (options.windowOrientationScreenSize_90==0 && window.orientation==-90)
						options.windowOrientationScreenSize_90=$(window).height();						
					
					if (options.windowOrientationScreenSize0 && window.orientation==0 && $(window).width()>options.windowOrientationScreenSize0)	
						doResizeNow=false;

					if (options.windowOrientationScreenSize90 && window.orientation==90 && $(window).height()>options.windowOrientationScreenSize90)	
						doResizeNow=false;
						
					if (options.windowOrientationScreenSize_90 && window.orientation==-90 && $(window).height()>options.windowOrientationScreenSize_90)	
						doResizeNow=false;	
						
						
					if (current_obj.windowWidth==0) {
						doResizeNow=false;
						current_obj.windowWidth=$(window).width();
					}

				}*/
				if (ver_ie!=-1 && ver_ie==9 && current_obj.windowWidth==0)
					doResizeNow=false;
				
				
				if (current_obj.windowWidth==$(window).width()) {
					doResizeNow=false;
					/*if (options.windowCurOrientation!=window.orientation && navigator.userAgent.indexOf('Android') != -1) {
						options.windowCurOrientation=window.orientation;
						doResizeNow=true;
					}*/
				} else
					current_obj.windowWidth=$(window).width();
				
				
				
				if (options.responsive && doResizeNow && !current_obj.slideIsRunning) {
					 if(TO !== false)
						clearTimeout(TO);
					 
					
					 TO = setTimeout(function(){ doResize(current_obj,options,imgs,magic_slider_the,bannerControls,magic_slider_contentHolderVisibleWrapper,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,bottomNavButs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb,magic_slider_leftNav,bottomNavBut,magic_slider_bottomNav,magic_slider_thumbsHolderVisibleWrapper,magic_slider_thumbsHolderWrapper,magic_slider_rightNav) }, 300); //200 is time in miliseconds
				}
			});



			//bottom nav
			var bottomNavButs=$('.bottomNavButtonOFF', magic_slider_container);
            if (options.skin=="bullets") {
			
			
			bottomNavButs.click(function() {
				if (!current_obj.slideIsRunning && current_obj.firstLoadingComplete) {
					current_obj.isVideoPlaying=false;
					
					var currentBut=$(this);
					var i=currentBut.attr('rel');
					if (current_obj.current_img_no!=i) {
							//deactivate previous 
							$(bottomNavButs[current_obj.current_img_no]).removeClass('bottomNavButtonON');
							current_obj.previous_current_img_no=current_obj.current_img_no;
							current_obj.bottomNavClicked=true;
							
		
							current_obj.current_img_no=i-1;
							clearTimeout(current_obj.timeoutID);
							
							magic_slider_navigation(1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb);
					}
				}
			});
			
			bottomNavButs.mouseenter(function() {
				var currentBut=$(this);
				var i=currentBut.attr('rel');
				
				
				
				if (options.showPreviewThumbs) {
					magic_slider_bottomOverThumb = $('<div class="bottomOverThumb"></div>');
					currentBut.append(magic_slider_bottomOverThumb);
					var image_name=$(imgs[i]).attr('data-bottom-thumb');
					var previous_image=$(imgs[previousBottomHovered]).attr('data-bottom-thumb');
					var thumb_marginLeft=80; //80 thumb width, 4 border
					var thumb_marginLeftFinal=-80;
					if (previousBottomHovered>i) {
					   thumb_marginLeft=-80;
					   thumb_marginLeftFinal=80;
		             }
					var thumb_marginTop=-80;
					magic_slider_bottomOverThumb.html('');
                    magic_slider_bottomOverThumb.html('<div class="innerBottomOverThumb"><img src="'+ previous_image + '"style="margin:0px;" id="oldThumb"><img src="'+ image_name + '" style="margin-top:'+thumb_marginTop+'px; margin-left:'+thumb_marginLeft+'px;" id="newThumb"></div>');
                    $('#newThumb')
                         .stop()
                         .animate({
                            marginLeft:'0px'
                          },150,function(){
                                magic_slider_bottomOverThumb.html('<div class="innerBottomOverThumb"><img src="'+ image_name + '"></div>'); //opera fix
                          });                    
                    $('#oldThumb')
                         .stop()
                         .animate({
                            marginLeft:thumb_marginLeftFinal+'px'
                          },150,function(){
                                //
                          });
					previousBottomHovered=i;
				}
				
				currentBut.addClass('bottomNavButtonON');
			});
			
			bottomNavButs.mouseleave(function() {
				var currentBut=$(this);
				var i=currentBut.attr('rel');

				if (options.showPreviewThumbs) {
					magic_slider_bottomOverThumb.remove();
				}				
				
				if (current_obj.current_img_no!=i)
					currentBut.removeClass('bottomNavButtonON');
			});			
			
            } //if (options.skin=="bullets") {





			//thumbs bottom nav
			thumbsHolder_Thumbs.mousedown(function() {
				if (!current_obj.slideIsRunning && current_obj.firstLoadingComplete) {
					arrowClicked=true;
				    current_obj.isVideoPlaying=false;
					var currentBut=$(this);
					var i=currentBut.attr('rel');
					if (current_obj.current_img_no!=i) {
						//deactivate previous 
						$(thumbsHolder_Thumbs[current_obj.current_img_no]).removeClass('thumbsHolder_ThumbON');
						current_obj.previous_current_img_no=current_obj.current_img_no;
						current_obj.bottomNavClicked=true;
						
						current_obj.current_img_no=i-1;
						clearTimeout(current_obj.timeoutID);
						
						magic_slider_navigation(1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb);
					}
				}
			});
			thumbsHolder_Thumbs.mouseup(function() {
				arrowClicked=false;
			});				
			
			thumbsHolder_Thumbs.mouseenter(function() {
				var currentBut=$(this);
				var i=currentBut.attr('rel');
				
				currentBut.addClass('thumbsHolder_ThumbON');
			});
			
			thumbsHolder_Thumbs.mouseleave(function() {
				var currentBut=$(this);
				var i=currentBut.attr('rel');

				if (current_obj.current_img_no!=i)
					currentBut.removeClass('thumbsHolder_ThumbON');
			});	
			
			
			//carousel controllers
			magic_slider_carouselLeftNav.click(function() {
				if (!current_obj.isCarouselScrolling) {
					currentCarouselLeft=magic_slider_thumbsHolder.css('left').substr(0,magic_slider_thumbsHolder.css('left').lastIndexOf('px'));

					if (currentCarouselLeft <0 ) 
						carouselScroll(1,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb,current_obj);
				}
			});
			
			
			magic_slider_carouselRightNav.click(function() {
				if (!current_obj.isCarouselScrolling) {
					currentCarouselLeft=magic_slider_thumbsHolder.css('left').substr(0,magic_slider_thumbsHolder.css('left').lastIndexOf('px'));
					if (Math.abs(currentCarouselLeft-current_obj.carouselStep)<(thumbsHolder_Thumb.width()+current_obj.thumbMarginLeft)*current_obj.total_images) 
						carouselScroll(-1,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,options,thumbsHolder_Thumb,current_obj);
				}
			});




			//first start autoplay
			if (options.skin=="bullets") {
			   $(bottomNavButs[current_obj.current_img_no]).addClass('bottomNavButtonON');
			}
			//thumbs
			$(thumbsHolder_Thumbs[current_obj.current_img_no]).addClass('thumbsHolder_ThumbON');
			


			set_autoPlay(imgs,current_obj,options);
			/*if (firstImg[0].complete) {
				$('.myloader', magic_slider_container).css('display','none');
				magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs);
				//generate the text for first image
				animate_texts(current_obj,current_obj.currentImg,options,magic_slider_the,magic_slider_container,bannerControls,false);		 
			} else {
			firstImg.load(function() {
				$('.myloader', magic_slider_container).css('display','none');
				magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs);
				//generate the text for first image
				animate_texts(current_obj,current_obj.currentImg,options,magic_slider_the,magic_slider_container,bannerControls,false);
			});
			}*/

			setTimeout (function () {
				$('.myloader', magic_slider_container).css('display','none');
	
				
				current_obj.firstLoadingComplete=true;
				if (options.enableTouchScreen && !options.fadeSlides) {
					magic_slider_contentHolder.draggable( "option", "disabled", false );
				}				
				
				if (current_obj.total_images>1) {
					current_obj.arcInitialTime = (new Date).getTime();
					current_obj.mouseOverBanner=false;
					current_obj.timeElapsed=0;						
				}				

				magic_slider_animate_image(current_obj,options, magic_slider_container,origImgsDimensions,imgs);
				//generate the text for first image
				animate_texts(current_obj,current_obj.currentImg,options,magic_slider_the,magic_slider_container,bannerControls,false);
				
				if (current_obj.autoPlay>0 && current_obj.total_images>1) {
					clearTimeout(current_obj.timeoutID);
					if (options.showCircleTimer) {
						current_obj.intervalID=setInterval(function(){the_arc(current_obj,options)}, 125);
					}
					current_obj.timeoutID=setTimeout(function(){ magic_slider_navigation(1,current_obj,options,bottomNavButs,imgs,magic_slider_the,bannerControls,magic_slider_contentHolder,magic_slider_container,magic_slider_playOver,origImgsDimensions,thumbsHolder_Thumbs,magic_slider_thumbsHolder,magic_slider_carouselLeftNav,magic_slider_carouselRightNav,thumbsHolder_Thumb)},current_obj.autoPlay*1000);
					
				}				
				
			}, options.myloaderTime*1000 );
			
		 	
			


			if ($(imgs[current_obj.current_img_no]).attr('data-video')=='true')
				magic_slider_playOver.css('display','block');
			
			
		});
	};

	
	//
	// plugin skins
	//
	$.fn.magic_slider.defaults = {
			skin: 'bullets',
			width:918,
			height:382,
			width100Proc:false,
			height100Proc:false,			
			autoPlay:10,
			fadeSlides:true,
			loop:true,
			setAsBg:false,
			
			horizontalPosition:'center',
			verticalPosition:'center',
			initialZoom:1,
			finalZoom:0.8,
			zoomEasing:'ease',
			duration:20,
			durationIEfix:30,

			initialOpacity:1,
			
			target:"_blank",
			
			pauseOnMouseOver:true,
			showCircleTimer:true,
			showCircleTimerIE8IE7:false,
			circleRadius:10,
			circleLineWidth:4,
			circleColor: "#FF0000",
			circleAlpha: 100,
			behindCircleColor: "#000000",
			behindCircleAlpha: 50,
			responsive:true,
			responsiveRelativeToBrowser:true,
			
			numberOfThumbsPerScreen:0,
				
			thumbsOnMarginTop:20,
			thumbsWrapperMarginTop:20,
			showAllControllers:true,
			showNavArrows:true,
			showOnInitNavArrows:true, // o1
			autoHideNavArrows:true, // o1
			showBottomNav:true,
			showOnInitBottomNav:true, // o2
			autoHideBottomNav:false, // o2
			showPreviewThumbs:true,
			enableTouchScreen:true,
			absUrl:'',
			
			
			
			
			scrollSlideDuration:0.8,
			scrollSlideEasing:'easeOutQuad',
			
			defaultEasing:'swing', //texts/elements over image Easing
			//hideElementsOnPreviousSlide:true,
			myloaderTime:2,
			defaultExitLeft:0,
			defaultExitTop:0,
			defaultExitDuration:0,
			defaultExitDelay:0,
			defaultExitFade:1,
			defaultExitEasing:'swing',
			defaultExitOFF:false,	
			
					
			
			
			origWidth:0,
			origHeight:0,
			origThumbW:0,
			origThumbH:0,
			origthumbsHolderWrapperH:0,
			origthumbsHolder_MarginTop:0,
			windowOrientationScreenSize0:0,
			windowOrientationScreenSize90:0,
			windowOrientationScreenSize_90:0,
			windowCurOrientation:0
			
	};

})(jQuery);
