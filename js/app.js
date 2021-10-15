
document.addEventListener("DOMContentLoaded", function() {

/*FAQ */

$('.faq-item').click(function() {
	$(this).toggleClass('active'); // 1
 });
 /*END FAQ*/

 

 $('.btn-filter').click(function() {
	$('.input__wrap:last-child').toggleClass('dropdown--input'); // 1
 });



	$('.tab__link').click(function() {
		var id = $(this).attr('data-tab'),
			content = $('.tab-content[data-tab="'+ id +'"]');
		
		$('.tab__link.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2
		
		$('.tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	 });

	 $('.message-tab').click(function() {
		var id = $(this).attr('data-tab'),
			content = $('.find-consultant__messages[data-tab="'+ id +'"]');
		
		$('.message-tab.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2
		
		$('.find-consultant__messages.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	 });	 
	// Слайдер главного экрана
	var swiper = new Swiper('.main-screen__offer', {
		slidesPerView: 1,
		spaceBetween: 10,
		allowTouchMove: false,
		autoplay: {
		  delay: 5000,
		},
		breakpoints: {
		  320: {
			slidesPerView: 1,
      		spaceBetween: 15,
			  loop: true,
		  },
		  1300: {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			allowTouchMove: false,
		  },
		}
	  });



	// Слайдер для категорий
	var swiper = new Swiper('.popular-categories__slider', {
		slidesPerView: 1,
		onlyExternal: true,
		spaceBetween: 10,
		// init: false,
		pagination: {
		  el: '.testimonials-swiper-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.popular-categories__wrapper .category-swiper-next',
			prevEl: '.popular-categories__wrapper .category-swiper-prev',
		},

		breakpoints: {
		  320: {
			slidesPerView: 1,
      		spaceBetween: 15,
			  centeredSlides: 'true',
			  loop: true,
		  },
		  568: {
			slidesPerView: 1,
			spaceBetween: 20,
			centeredSlides: 'false',
			loop: false,
		  },
		  768: {
			slidesPerView: 3,
			spaceBetween: 10,
			allowTouchMove: false,
			loop: true,
		  },
		  1020: {
			slidesPerView: 3,
			spaceBetween: 30,
			allowTouchMove: false,
			loop: false,
		  },
		  1024: {
			slidesPerView: 4,
			spaceBetween: 30,
			allowTouchMove: false,
			loop: false,
		  },
		  1025: {
			slidesPerView: 5,
			spaceBetween: 30,
			allowTouchMove: false,
			loop: true,
		  },
		}
	  });


	// Слайдер how-work
	var swiper = new Swiper('.how-work__slider', {
		slidesPerView: 4,
		spaceBetween: 10,
		observer: true,
observeParents: true,
		// init: false,
		pagination: {
		  el: '.testimonials-swiper-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.category-swiper-next',
			prevEl: '.category-swiper-prev',
		},

		breakpoints: {
		  320: {
			slidesPerView: 1,
      		spaceBetween: 10,
			centeredSlides: 'true',
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
		  	},
		  },
		  768: {
			slidesPerView: 2,
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
		  	},
		  },
		  1024: {
			slidesPerView: 4,
			spaceBetween: 30,
			allowTouchMove: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
		  	},
		  },
		}
	  });
	  
	 
	 
	  // Слайдер students 
	  var swiper = new Swiper('.studenten__wrap', {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  //autoplay: {
			//  delay: 5000,
			//},
		  // init: false,
		  pagination: {
			el: '.testimonials-swiper-pagination',
			clickable: true,
		  },
		  navigation: {
			  nextEl: '.category-swiper-next',
			  prevEl: '.category-swiper-prev',
		  },
  
		  breakpoints: {
			320: {
			  slidesPerView: 1,
				spaceBetween: 26,
				centeredSlides: 'true',
		
			},
			768: {
				slidesPerView: 2,
				  spaceBetween: 26,
			},
			1024: {
				slidesPerView: 4,
				  spaceBetween: 0,
			},
			1300: {
				slidesPerView: 'auto',
			  spaceBetween: 0,
			  loop: true,
			  speed: 3000,
			  autoplay: {
				enabled: true,
				delay: 0,
			 },
			},
		  }
		});





$('.toggleMenu').click(function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('stop');
  });

  $('.main-menu__link').click(function () {
    $('.header__menu ').removeClass('active');
    $('body').removeClass('stop');
    $('.toggleMenu').removeClass('active');
  });
	var d = document;

	// фиксированное меню при скроле
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('.header').addClass('header--fixed');
			document.querySelector('main').style.marginTop = document.querySelector('.header').getBoundingClientRect().height + 'px'
		}
		else {
			$('.header').removeClass('header--fixed');
			document.querySelector('main').style.marginTop = 0;
		}
	});

	// Скрытие мобильного меню и модалок

	function findCloseBtns(){
		let closeBtns = document.querySelectorAll('.close');
		
		for (let i = 0; i < closeBtns.length; i++) {
			setUpClose(closeBtns[i]);
		}
	}

	function setUpClose(closeBtn) {
		closeBtn.addEventListener('click', function(e){
			e.preventDefault();
			menuBurger.classList.remove('header__burger--active');
			d.querySelector('.header__nav').classList.remove('header__nav--active');
			d.querySelector('body').classList.remove('stop');
			d.querySelector('.modal').classList.remove('modal--active');
		})
	}
	
	findCloseBtns();



	// Модальные окна скрипт открытия
	function findBtnModal(){
		let btnsModal = document.querySelectorAll('.btn--modal');
		
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModal(btnsModal[i]);
		}
	}

	function setUpBtnModal(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal').classList.add('modal--active');
			d.querySelector('body').classList.add('stop');
		})
	}
	
	findBtnModal();


	// Вызов модалки с заказом
	function findBtnModalOrder(){
		let btnsModal = document.querySelectorAll('.btn--modal-order');
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModalOrder(btnsModal[i]);
		}
	}

	function setUpBtnModalOrder(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal .modal-window--order').classList.add('modal-window--active');
		})
	}
	
	findBtnModalOrder();

	// Вызов с политикой конфиденциальности
	function findBtnModalPrivacy(){
		let btnsModal = document.querySelectorAll('.btn--modal-privacy');
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModalPrivacy(btnsModal[i]);
		}
	}

	function setUpBtnModalPrivacy(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal .modal-window--privacy').classList.add('modal-window--active');
		})
	}
	
	findBtnModalPrivacy();



	


	// Ленивая загрузка изображений

	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	  img.setAttribute('src', img.getAttribute('data-src'));
	  img.onload = function() {
	 img.removeAttribute('data-src');
	  };
	});




	// Куки
	function setCookie(c_name,value,exdays){
        var exdate=new Date();
           	exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()) + "; path=/";
        document.cookie=c_name + "=" + c_value;
   	}

    function getMyCookie(name) {
        var c = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            if (c) return c[2];
            else return "";
    }

  





	  // FAQ
	  function findFaq(){
			let faqBoxes = document.querySelectorAll('.faq-box')

			for(i = 0; i <= faqBoxes.length-1; i++){
				setupFaq(faqBoxes[i]);
			}
		}

		function setupFaq(faq){
			faq.addEventListener('click', function(e) {
				e.preventDefault();
				if(this.classList.contains('active')){
					this.classList.remove('active');
				}else{
					let activeElem = this.closest('.faq').querySelector('.faq-box.active');
					if(activeElem){
						activeElem.classList.remove('active');
					}
					this.classList.add('active');
				}
			});
		}
		findFaq();


});
