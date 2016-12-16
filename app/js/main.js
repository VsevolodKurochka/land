$(document).ready(function(){

		// VARIABLES
		var nav               = $('.vnav'),
				header_menu_name 	= 'vnav-menu',
				header_menu 			= $('.' + header_menu_name),
				body 							= $("body"),
				visibility        = "in visible",
				active            = "active",
		 		backdrop = $("<div />", {
					class: "vmodal-backdrop fade"
				});
		//MENU
			$(window).scroll(function(){
				if ( $(this).scrollTop() > nav.outerHeight() ){
					nav.addClass("fixed");
				}else{
					nav.removeClass("fixed");
				}
			});
			//SCRIPTS
			function toggler(){
				header_menu.toggleClass(active);
				body.toggleClass(active);
			}
			$("[data-menu]").click(function(){
				var menu_href = $(this).attr("data-menu");
				$("[data-menu]").not($(this)).removeClass(active);
				$(this).toggleClass(active);
				toggler();
			});
			$('.anchor-menu').click(function(){
				var href = $(this).attr('href');
				$('body,html').animate({
					scrollTop: $(href).offset().top
				},2000);
				$("[data-menu]").removeClass(active);
				toggler();
				return false;
			});
		// SCROLL TO BLOCK
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		
		$('[data-modal="vmodal"]').click(function(){
			var thisTarget = $(this).attr("data-modal-target");
			if ( thisTarget ) {
				$(thisTarget).addClass(visibility);
				body.append(backdrop).addClass("vmodal-open");
				backdrop.addClass(visibility);
			}else{
				console.log("Need attribtue [data-modal-target].");
			}
		});
		$('[data-close="vmodal"]').click(function(){
			$(this).closest(".vmodal").removeClass(visibility);
			backdrop.removeClass(visibility);
			body.removeClass("vmodal-open");
		});
		$(window).click(function(e){
			if ( backdrop.length > 0 ) {
				if ( $(e.target).is(".vmodal") ) {
					$(".vmodal.in").removeClass(visibility);
					backdrop.removeClass(visibility);
					body.removeClass("vmodal-open");
				}
			}
		});
		function videoModal(){
			this.player = new Uppod({
				m:"video",
				uid:"videoModal",
				file:"https://www.youtube.com/watch?v=eE49AhHUL84"
			});
		}
		$("#video-play").click(function(){
			videoModal();
		});
		$("#modalvideo .vmodal-close").click(function(){
			$("#videoModal").html('');
		});

		$('.owl-carousel').owlCarousel({
				items: 1,
		    loop: true,
		    nav: true,
		    navText: ['','']
		});
		$(".fancybox").fancybox({
			helpers : {
        overlay : {
            css : {
                'background' : 'rgba(58, 42, 45, 0.95)'
            }
        }
    	}
		});
		var noChecked = $('.checkbox:not(:checked)').length;
		console.log(noChecked);
		if ( noChecked > 0 ) {
			$(".mechanism").addClass('pause');
		}
		// $(".checkbox").click(function(){

		// 	if ( $(this).is(":checked") ) {
		// 		if ( noChecked > 0 ){
		// 			$('.mechanism').addClass('pause');
		// 		}else{
		// 			$('.mechanism').removeClass('pause');
		// 		}
		// 		console.log("Станет синим" + " sdsd"  + noChecked);
		// 	}
		// 	else if( $(this).is(":not(:checked)") ){
		// 		$('.mechanism').addClass('pause');
		//     console.log("Станет желтым" + " sdsd"  + noChecked);
  //     }

		// });
		$("[data-checked]").click(function(){
			var checked = $(this).attr('data-checked');
			$(".mechanism").toggleClass("mechanism-" + $(this).attr('id') );
			if ( checked == 'checked' ){
				$(this).attr('data-checked', 'unchecked');
				if ( $("[data-checked='unchecked']").length > 0 ) {
					$('.mechanism').addClass('pause');
				}else{
					$('.mechanism').removeClass('pause');
				}
			}else{
				$(this).attr('data-checked', 'checked');
				if ( $("[data-checked='unchecked']").length > 0 ) {
					$('.mechanism').addClass('pause');
				}else{
					$('.mechanism').removeClass('pause');
				}
			}
		});
		

		
		
		//DEVELOPE
		// var widthDevice = $(window).width();
		// $(".development").html(widthDevice);
});	