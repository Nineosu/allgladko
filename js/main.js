document.addEventListener('DOMContentLoaded', function () {
    const moneyBlock = document.querySelector('.fourth-section__money');
    const strelkaImg = document.querySelector('.fourth-section__img-strelka');

    if (moneyBlock) {
        moneyBlock.addEventListener('mouseenter', function () {
            strelkaImg.classList.add('visible');
        });
    
        moneyBlock.addEventListener('mouseleave', function () {
            strelkaImg.classList.remove('visible');
        });
    }


    const woman = document.querySelector('.fifth-section__woman');
    const womanText = document.querySelector('.fifth-section__text-mw');
    const man = document.querySelector('.fifth-section__man');
    const manText = document.querySelector('.fifth-section__text-mw.men-nav__all');

    const womanServices = document.querySelector('.fifth-section__woman-services');
    const manServices = document.querySelector('.fifth-section__man-services');

    // const womanMoney = document.querySelector('.fifth-section__money');
    // const manMoney = document.querySelector('.fifth-section__money-text.margin-auto2');

    // const womanMoneyAbon = document.querySelector('.fifth-section__money-abon-text');
    // const manMoneyAbon = document.querySelector('.fifth-section__money-abon-text');

    // const womanUslugiText = document.querySelector('.fifth-section__wrapper-first .fifth-section__uslugi-text');
    // const manUslugiText = document.querySelector('.fifth-section__wrapper-second .fifth-section__uslugi-text');

    // const hrLine = document.querySelector('.fifth-section__hr');

    if (woman) {
        woman.addEventListener('click', function (e) {
            womanServices.style.display = 'block';
            womanText.classList.add('text-mw-picked');
            manText.classList.remove('text-mw-picked');
            manServices.style.display = 'none';

            // womanMoney.style.display = 'block';
            // manMoney.style.display = 'none';

            // womanMoneyAbon.style.display = 'block';
            // manMoneyAbon.style.display = 'none';

            // womanUslugiText.innerHTML = "Верхняя губа / Ареолы / Бакенбарды / Линия<br> живота / Подбородок";

            // Скрыть линию hr
            // hrLine.style.display = 'none';
        });
    }
    if (man) {
        man.addEventListener('click', function () {
            womanServices.style.display = 'none';
            manText.classList.add('text-mw-picked');
            womanText.classList.remove('text-mw-picked');
            manServices.style.display = 'block';

            // womanMoney.style.display = 'none';
            // manMoney.style.display = 'block';

            // womanMoneyAbon.style.display = 'none';
            // manMoneyAbon.style.display = 'block';

            // manUslugiText.innerHTML = "Межбровье / Виски / Уши / Верхняя губа и<br> ноздри /Подбородок / Ареолы / Пальцы";
        });
    }

    const reviewsSlider = new Swiper('.sixth-section__cards', {
        slidesPerView: 1,
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
          nextEl: '.sixth-section__cards-next',
          prevEl: '.sixth-section__cards-prev',
        },

        breakpoints: {
            700: {
                slidesPerView: 2.2
            },
            994: {
                slidesPerView: 3
            }
        }
    });

    const specialistsSlider = new Swiper('.ninth-section__cards', {
        slidesPerView: 1.2,
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
          nextEl: '.ninth-section__cards-next',
          prevEl: '.ninth-section__cards-prev',
        },

        breakpoints: {
            700: {
                slidesPerView: 3.2
            },
            994: {
                slidesPerView: 3
            }
        }
    });

    const reviewsBtns = document.querySelectorAll('.reviews-btn')
        reviewsBlock = document.querySelector('.sixth-section__container'),
        specialistsBtns = document.querySelectorAll('.specialists-btn'),
        specialsitsBlock = document.querySelector('.ninth-section__container');

    if (document.querySelector('.reviews-btn')) {

        btnsVisibility(reviewsBlock, reviewsBtns, 'btn-visible');
        btnsVisibility(specialsitsBlock, specialistsBtns, 'btn-visible');

        function btnsVisibility(wrapper, btns, activeClass) {
            wrapper.addEventListener('mouseover', () => {
                btns.forEach(item => {
                    item.classList.add(activeClass);
                })
            });
            wrapper.addEventListener('mouseout', () => {
                btns.forEach(item => {
                    item.classList.remove(activeClass)
                })
            })
        }
    }

    // select

    const selectorBlocks = document.querySelectorAll('.blog-block__wrapper');

    selectorBlocks.forEach(item => {
        const selectorItem = item.querySelector('.blog-block__select');
        const selectorList = item.querySelector('.blog-block__list');

        selectorItem.addEventListener('click', () => {
            item.querySelector('.blog-block__select-img').classList.toggle('arrow-up');
            selectorList.classList.toggle('list-opened');
        });
    });

    // modal

    if (document.querySelector('.modal__callback')) {
        const modalCallback = document.querySelector('.modal__callback'),
          modalClose = modalCallback.querySelectorAll('.modal__callback-close'),
          modalForm = modalCallback.querySelector('.callback-form'),
          modalContent = modalCallback.querySelector('.modal__callback-main'),
          modalAfter = modalCallback.querySelector('.modal__callback-after'),
          modalBtns = document.querySelectorAll('.modalCallbackOpen');
          

        modalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modalCallback.classList.add('modal-show');
                modalContent.classList.add('modal-show');
            });
        });

        modalClose.forEach(close => {
            close.addEventListener('click', () => {
                modalCallback.classList.remove('modal-show');
                modalContent.classList.add('modal-show');
                modalAfter.classList.remove('modal-after-show');
            })
        })
        
        modalCallback.addEventListener('click', (e) => {
            if (e.target == modalCallback) {
                modalCallback.classList.remove('modal-show');
                modalContent.classList.add('modal-show');
                modalAfter.classList.remove('modal-after-show');
            }
        });

        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            modalContent.classList.remove('modal-show');
            modalAfter.classList.add('modal-after-show');
        });
    }

});


/* document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.querySelector('.main-section__mobile-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menu = document.querySelector('.menu');

    mobileMenuBtn.addEventListener('click', function() {
        menuOverlay.classList.toggle('visible');
        menu.classList.toggle('visible');
    });
}); */