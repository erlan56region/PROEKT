// Индикатор загрузки
window.addEventListener('load', function() {
    const loader = document.getElementById('pageLoader');
    const progress = document.getElementById('loaderProgress');
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        } else {
            width += 5;
            progress.style.width = width + '%';
        }
    }, 50);
});

// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

if (mobileMenuBtn && mobileMenu && menuOverlay) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    menuOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Изменение навигации при скролле
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollToTop = document.getElementById('scrollToTop');
    
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.backdropFilter = 'blur(30px)';
        if (scrollToTop) scrollToTop.classList.add('active');
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
        nav.style.backdropFilter = 'blur(20px)';
        if (scrollToTop) scrollToTop.classList.remove('active');
    }
});

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Валидация формы
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Валидация имени
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name && name.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else if (nameError) {
            nameError.style.display = 'none';
        }
        
        // Валидация email
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email.value.trim())) {
            emailError.style.display = 'block';
            isValid = false;
        } else if (emailError) {
            emailError.style.display = 'none';
        }

        // Валидация сообщения
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message && message.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else if (messageError) {
            messageError.style.display = 'none';
        }
        
        // Если форма валидна, показываем сообщение об успехе
        if (isValid) {
            const formSuccess = document.getElementById('formSuccess');
            if (formSuccess) {
                formSuccess.style.display = 'block';
                
                // Очищаем форму
                contactForm.reset();
                
                // Скрываем сообщение об успехе через 5 секунд
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        }
    });
}
