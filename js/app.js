document.addEventListener("DOMContentLoaded", () => {
	const body = document.querySelector('body')

    function removeAll(items,itemClass) {   
        if (typeof items == 'string') {
          items = document.querySelectorAll(items)
        }
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          item.classList.remove(itemClass)
        }
    }

    menuToggle()
    function menuToggle() {
        const burger = document.querySelector('.burger')
        const menu = document.querySelector('.menu')

        burger.addEventListener('click', () => {
            burger.classList.toggle('_active')
            menu.classList.toggle('_show')
            body.classList.toggle('_lock')
        })
    }

    const mainSlider = new Swiper('.main-slider', {
  
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // simulateTouch: false,
	autoplay: {
		delay: 2000,
	},

    breakpoints: {
        1200: {

        },
        700: {

        },
        400: {

        }
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper__arrow-next',
        prevEl: '.swiper__arrow-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });

    const popularSlider = new Swiper('.popular__slider', {
  
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
	// autoplay: {
	// 	delay: 2000,
	// }, 

    breakpoints: {
        450: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        670: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },

    navigation: {
        nextEl: '.popular__slider-arrow_next',
        prevEl: '.popular__slider-arrow_prev',
    },
    });

    const worksSlider1 = new Swiper('.works-slider_1', {
        slidesPerView: 1.5,
        spaceBetween: 16,
        observer: true,
        observeParents: true,

        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 26,
            },
        },

        pagination: {
            el: '.works-slider__pagination_1',
            clickable: true,
        },
    });

    const worksSlider2 = new Swiper('.works-slider_2', {
        slidesPerView: 1.5,
        spaceBetween: 16,
        observer: true,
        observeParents: true,
    
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 26,
            },
        },
    
        pagination: {
            el: '.works-slider__pagination_2',
            clickable: true,
        },
    });

    const studentsSlider = new Swiper('.students-section-slider', {
    
        slidesPerView: 1.5,
        spaceBetween: 32,
        loop: true,
        speed: 2000,
        // centeredSlides: true,
        autoplay: {
            duration: 5000,
        	delay: 2000,
        }, 
    
        breakpoints: {
            450: {
                slidesPerView: 2,
                centeredSlides: true,
            },
            670: {
                slidesPerView: 3,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                // spaceBetween: 32,
                // allowTouchMove: false,
            },
        },
    
        // navigation: {
        //     nextEl: '.popular__slider-arrow_next',
        //     prevEl: '.popular__slider-arrow_prev',
        // },
    });

    headerFixed()
    function headerFixed() {
        const header = document.querySelector('.header')
        const headerHeight = header.scrollHeight
        let headerMain = false

        window.addEventListener('scroll', () => {

            if (header.classList.contains('header_page-main')) {
                headerMain = true
            }

            if (pageYOffset > 200) {
                header.classList.add('_fixed')
                body.style.paddingTop = headerHeight + 'px'
                if (headerMain == true) {
                    header.classList.remove('header_page-main')
                }
            }
            else {
                header.classList.remove('_fixed')
                body.style.paddingTop = 0
                if (headerMain == true) {
                    header.classList.add('header_page-main')
                }
            }
        })
    }

    accordion()
    function accordion() {
        const accHeaderElems = document.querySelectorAll('.accordion__header')
        const accBodyElems = document.querySelectorAll('.accordion__body')

        for (let i = 0; i < accBodyElems.length; i++) {
            const accBody = accBodyElems[i];
            accBody.style.maxHeight = 0
        }

        for (let i = 0; i < accHeaderElems.length; i++) {
            const accHeader = accHeaderElems[i];
            accHeader.addEventListener('click', () => {
                const accParent = accHeader.parentElement
                const accBody = accHeader.nextElementSibling

                accHeader.classList.toggle('_show')

                if (accHeader.classList.contains('_show')) {
                    accBody.style.maxHeight = 'none'
                }
                else {
                    accBody.style.maxHeight = 0
                }
            })
        }
    }

    if (document.querySelector('.filter__more_mobile')) { filterAccordionMobile() }
    function filterAccordionMobile() {
        const btn = document.querySelector('.filter__more_mobile')
        const filter = document.querySelector('.filter__body')

        btn.addEventListener('click', () => {
            btn.classList.toggle('filter_show')

            if (btn.classList.contains('filter_show')) {
                filter.style.maxHeight = filter.scrollHeight + 'px'
            }
            else {
                filter.style.maxHeight = 0
            }
        })
    }

    if (document.querySelector('.filter__more')) { filterAccordion() }
    function filterAccordion() {
        const btn = document.querySelector('.filter__more')
        const btnText = btn.querySelector('.filter__more-text')
        const selectElems = document.querySelectorAll('.filter__select')

        btn.addEventListener('click', () => {
            btn.classList.toggle('filter_show')
            
            for (let i = 7; i < selectElems.length; i++) {
                const select = selectElems[i];
                
                if (btn.classList.contains('filter_show')) {
                    select.style.display = 'block'
                }
                else {
                    select.style.display = 'none'
                }
            }
            
            if (btn.classList.contains('filter_show')) {
                btnText.innerHTML = 'Close'    
            }
            else {
                btnText.innerText = 'More'
            }
        })
    }

    tabs()
    function tabs() {
        const tabBtnElems = document.querySelectorAll('.tabs-btn')

        for (let i = 0; i < tabBtnElems.length; i++) {
            const tabBtn = tabBtnElems[i];
            tabBtn.addEventListener('click', () => {
                const tabData = tabBtn.dataset.tabsHeader
                const tabParent = tabBtn.closest('.tabs')
                const tabBody = tabParent.querySelector(`[data-tabs-body="${tabData}"]`)

                removeAll(tabParent.querySelectorAll('.tabs__body'), '_active')
                tabBody.classList.add('_active')

                removeAll(tabParent.querySelectorAll('.tabs-btn'), '_active')
                tabBtn.classList.add('_active')
            })
        }
    }

    setLike()
    function setLike() {
        const likeElems = document.querySelectorAll('.estim-like')
        for (let i = 0; i < likeElems.length; i++) {
            const like = likeElems[i];
            like.addEventListener('click', () => {
                like.classList.toggle('_full')
            })
        }
    }

    function formSubmit() {

    }

})

// document.addEventListener("DOMContentLoaded", function () {

// /*FAQ */

// $('.faq-item').click(function () {
// 	$(this).toggleClass('active'); // 1
// });
// /*END FAQ*/



// $('.btn-filter').click(function () {
// 	$('.input__wrap:last-child').toggleClass('dropdown--input'); // 1
// });



// $('.tab__link').click(function () {
// 	var id = $(this).attr('data-tab'),
// 		content = $('.tab-content[data-tab="' + id + '"]');

// 	$('.tab__link.active').removeClass('active'); // 1
// 	$(this).addClass('active'); // 2

// 	$('.tab-content.active').removeClass('active'); // 3
// 	content.addClass('active'); // 4
// });

// $('.message-tab').click(function () {
// 	var id = $(this).attr('data-tab'),
// 		content = $('.find-consultant__messages[data-tab="' + id + '"]');

// 	$('.message-tab.active').removeClass('active'); // 1
// 	$(this).addClass('active'); // 2

// 	$('.find-consultant__messages.active').removeClass('active'); // 3
// 	content.addClass('active'); // 4
// });
// // Слайдер главного экрана
// var swiper = new Swiper('.main-screen__offer', {
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	allowTouchMove: false,
// 	autoplay: {
// 		delay: 5000,
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 15,
// 			loop: true,
// 		},
// 		1300: {
// 			slidesPerView: 1,
// 			spaceBetween: 30,
// 			loop: true,
// 			allowTouchMove: false,
// 		},
// 	}
// });



// // Слайдер для категорий
// var swiper = new Swiper('.popular-categories__slider', {
// 	slidesPerView: 1,
// 	onlyExternal: true,
// 	spaceBetween: 10,
// 	// init: false,
// 	pagination: {
// 		el: '.testimonials-swiper-pagination',
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: '.popular-categories__wrapper .category-swiper-next',
// 		prevEl: '.popular-categories__wrapper .category-swiper-prev',
// 	},

// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 15,
// 			centeredSlides: 'true',
// 			loop: true,
// 		},
// 		568: {
// 			slidesPerView: 1,
// 			spaceBetween: 20,
// 			centeredSlides: 'false',
// 			loop: false,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 			spaceBetween: 10,
// 			allowTouchMove: false,
// 			loop: true,
// 		},
// 		1020: {
// 			slidesPerView: 3,
// 			spaceBetween: 30,
// 			allowTouchMove: false,
// 			loop: false,
// 		},
// 		1024: {
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 			allowTouchMove: false,
// 			loop: false,
// 		},
// 		1025: {
// 			slidesPerView: 5,
// 			spaceBetween: 30,
// 			allowTouchMove: false,
// 			loop: true,
// 		},
// 	}
// });


// // Слайдер how-work
// var swiper = new Swiper('.how-work__slider', {
// 	slidesPerView: 4,
// 	spaceBetween: 10,
// 	observer: true,
// 	observeParents: true,
// 	// init: false,
// 	pagination: {
// 		el: '.testimonials-swiper-pagination',
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: '.category-swiper-next',
// 		prevEl: '.category-swiper-prev',
// 	},

// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 			centeredSlides: 'true',
// 			pagination: {
// 				el: ".swiper-pagination",
// 				clickable: true,
// 			},
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 30,
// 			pagination: {
// 				el: ".swiper-pagination",
// 				clickable: true,
// 			},
// 		},
// 		1024: {
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 			allowTouchMove: false,
// 			pagination: {
// 				el: ".swiper-pagination",
// 				clickable: true,
// 			},
// 		},
// 	}
// });



// // Слайдер students 
// var swiper = new Swiper('.studenten__wrap', {
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	//autoplay: {
// 	//  delay: 5000,
// 	//},
// 	// init: false,
// 	pagination: {
// 		el: '.testimonials-swiper-pagination',
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: '.category-swiper-next',
// 		prevEl: '.category-swiper-prev',
// 	},

// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 26,
// 			centeredSlides: 'true',

// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 26,
// 		},
// 		1024: {
// 			slidesPerView: 4,
// 			spaceBetween: 0,
// 		},
// 		1300: {
// 			slidesPerView: 'auto',
// 			spaceBetween: 0,
// 			loop: true,
// 			speed: 3000,
// 			autoplay: {
// 				enabled: true,
// 				delay: 0,
// 			},
// 		},
// 	}
// });

// const univerSlider = new Swiper('.univers__slider', {
  
//   slidesPerView: 1, // Кол-во показываемых слайдов
//   spaceBetween: 0, // Расстояние между слайдами
//   loop: true, // Бесконечный слайдер
//   //   freeMode: true, // Слайдеры не зафиксированны
// //   autoplay: {
// // 	// delay: 5000,
// //   },

//   pagination: {
//     el: '.univers__slider-pagination',
// 	clickable: true,
//   }
// });





// $('.toggleMenu').click(function () {
// 	$(this).toggleClass('active');
// 	$('.menu').toggleClass('active');
// 	$('body').toggleClass('stop');
// });

// $('.main-menu__link').click(function () {
// 	$('.menu ').removeClass('active');
// 	$('body').removeClass('stop');
// 	$('.toggleMenu').removeClass('active');
// });
// var d = document;

// // фиксированное меню при скроле
// $(window).scroll(function () {
// 	let headerHeight = document.querySelector('.header').getBoundingClientRect().height
// 	const sidebar = document.querySelector('.profile-sidebar ul')
// 	const header = document.querySelector('.header')

// 	if ($(window).scrollTop() > 200) {
// 		$('.header').addClass('header--fixed');

// 		if (!header.classList.contains('header-main')) {
// 			document.querySelector('body').style.paddingTop = headerHeight + 'px'
// 		}

// 		if (sidebar) {
// 			sidebar.style.top = headerHeight + 42 + 'px'
// 		}
// 	} else {
// 		$('.header').removeClass('header--fixed');
		
// 		if (!header.classList.contains('header-main')) {
// 			document.querySelector('body').style.paddingTop = 0;
// 		}

// 		if (sidebar) {
// 			sidebar.style.top = 0
// 		}
// 	}
// });

// // Скрытие мобильного меню и модалок

// function findCloseBtns() {
// 	let closeBtns = document.querySelectorAll('.close');

// 	for (let i = 0; i < closeBtns.length; i++) {
// 		setUpClose(closeBtns[i]);
// 	}
// }

// function setUpClose(closeBtn) {
// 	closeBtn.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		menuBurger.classList.remove('header__burger--active');
// 		d.querySelector('.header__nav').classList.remove('header__nav--active');
// 		d.querySelector('body').classList.remove('stop');
// 		d.querySelector('.modal').classList.remove('modal--active');
// 	})
// }

// findCloseBtns();



// // Модальные окна скрипт открытия
// function findBtnModal() {
// 	let btnsModal = document.querySelectorAll('.btn--modal');

// 	for (let i = 0; i < btnsModal.length; i++) {
// 		setUpBtnModal(btnsModal[i]);
// 	}
// }

// function setUpBtnModal(btnModal) {
// 	btnModal.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		d.querySelector('.modal').classList.add('modal--active');
// 		d.querySelector('body').classList.add('stop');
// 	})
// }

// findBtnModal();


// // Вызов модалки с заказом
// function findBtnModalOrder() {
// 	let btnsModal = document.querySelectorAll('.btn--modal-order');
// 	for (let i = 0; i < btnsModal.length; i++) {
// 		setUpBtnModalOrder(btnsModal[i]);
// 	}
// }

// function setUpBtnModalOrder(btnModal) {
// 	btnModal.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		d.querySelector('.modal .modal-window--order').classList.add('modal-window--active');
// 	})
// }

// findBtnModalOrder();

// // Вызов с политикой конфиденциальности
// function findBtnModalPrivacy() {
// 	let btnsModal = document.querySelectorAll('.btn--modal-privacy');
// 	for (let i = 0; i < btnsModal.length; i++) {
// 		setUpBtnModalPrivacy(btnsModal[i]);
// 	}
// }

// function setUpBtnModalPrivacy(btnModal) {
// 	btnModal.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		d.querySelector('.modal .modal-window--privacy').classList.add('modal-window--active');
// 	})
// }

// findBtnModalPrivacy();

// // Ленивая загрузка изображений

// [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
// 	img.setAttribute('src', img.getAttribute('data-src'));
// 	img.onload = function () {
// 		img.removeAttribute('data-src');
// 	};
// });

// // Куки
// function setCookie(c_name, value, exdays) {
// 	var exdate = new Date();
// 	exdate.setDate(exdate.getDate() + exdays);
// 	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString()) + "; path=/";
// 	document.cookie = c_name + "=" + c_value;
// }

// function getMyCookie(name) {
// 	var c = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
// 	if (c) return c[2];
// 	else return "";
// }

// // FAQ
// function findFaq() {
// 	let faqBoxes = document.querySelectorAll('.faq-box')

// 	for (i = 0; i <= faqBoxes.length - 1; i++) {
// 		setupFaq(faqBoxes[i]);
// 	}
// }

// function setupFaq(faq) {
// 	faq.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		if (this.classList.contains('active')) {
// 			this.classList.remove('active');
// 		} else {
// 			let activeElem = this.closest('.faq').querySelector('.faq-box.active');
// 			if (activeElem) {
// 				activeElem.classList.remove('active');
// 			}
// 			this.classList.add('active');
// 		}
// 	});
// }
// findFaq();


// });