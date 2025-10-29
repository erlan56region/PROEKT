<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ITCOFE | Архитекторы цифрового будущего</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        /* Все стили остаются без изменений, так как в них не было критических ошибок */
        :root {
            --primary: #0A0A0A;
            --secondary: #00F5FF;
            --accent: #FF2E63;
            --neon-blue: #00F5FF;
            --neon-pink: #FF2E63;
            --neon-purple: #9D4EDD;
            --dark-bg: #0A0A0A;
            --card-bg: rgba(30, 30, 30, 0.7);
            --glass: rgba(255, 255, 255, 0.05);
            --glass-border: rgba(255, 255, 255, 0.1);
            --gradient-primary: linear-gradient(135deg, #00F5FF 0%, #9D4EDD 50%, #FF2E63 100%);
            --gradient-secondary: linear-gradient(135deg, #FF2E63 0%, #00F5FF 100%);
            --neon-glow-blue: 0 0 20px rgba(0, 245, 255, 0.7);
            --neon-glow-pink: 0 0 20px rgba(255, 46, 99, 0.7);
            --section-spacing: 120px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background: var(--dark-bg);
            color: white;
            line-height: 1.6;
            overflow-x: hidden;
            position: relative;
        }

        /* Все остальные стили остаются без изменений */
        /* ... */

    </style>
</head>
<body>
    <!-- Индикатор загрузки -->
    <div class="loader" id="pageLoader">
        <div class="loader-content">
            <div class="loader-logo">ITCOFE</div>
            <div class="loader-bar">
                <div class="loader-progress" id="loaderProgress"></div>
            </div>
        </div>
    </div>

    <!-- Анимированный фон -->
    <div class="animated-bg"></div>
    <div class="grid-overlay"></div>

    <!-- Навигация -->
    <nav>
        <div class="container nav-container">
            <a href="#" class="logo">
                ITCOFE
                <div class="logo-dot"></div>
            </a>
            <ul class="nav-links">
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#tech">Технологии</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <!-- Мобильное меню -->
    <div class="mobile-menu" id="mobileMenu">
        <ul class="mobile-nav-links">
            <li><a href="#projects">Проекты</a></li>
            <li><a href="#tech">Технологии</a></li>
            <li><a href="#contact">Контакты</a></li>
        </ul>
    </div>
    <div class="menu-overlay" id="menuOverlay"></div>

    <!-- Герой секция -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <i class="fas fa-rocket"></i>
                    Инновации с 2010 года
                </div>
                <h1 class="hero-title">Архитекторы цифрового будущего</h1>
                <p class="hero-subtitle">Создаем технологии, которые переопределяют возможности человечества. От квантовых вычислений до нейроинтерфейсов — мы строим будущее, о котором другие только мечтают.</p>
                <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                    <a href="#projects" class="btn">Исследовать проекты <i class="fas fa-arrow-right"></i></a>
                    <a href="#contact" class="btn btn-outline">Присоединиться к нам</a>
                </div>
                <div class="hero-stats">
                    <div class="stat">
                        <div class="stat-value">$30B+</div>
                        <div class="stat-label">Капитализация</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">150+</div>
                        <div class="stat-label">Проектов</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">15</div>
                        <div class="stat-label">Лет инноваций</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Проекты -->
    <section id="projects">
        <div class="container">
            <div class="section-header">
                <div class="section-label">Наши инновации</div>
                <h2 class="section-title">Прорывные проекты</h2>
                <p class="section-subtitle">Технологии, которые меняют правила игры в глобальном масштабе</p>
            </div>
            
            <div class="projects-grid">
                <!-- Проект 1 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Quantum Nexus">
                    </div>
                    <div class="project-content">
                        <span class="project-category">Квантовые вычисления</span>
                        <h3 class="project-title">Quantum Nexus</h3>
                        <p class="project-description">Первая в мире коммерческая квантовая сеть, обеспечивающая мгновенную передачу данных на любые расстояния.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Квантовая запутанность</span>
                            <span class="tech-tag">QKD</span>
                            <span class="tech-tag">Квантовые процессоры</span>
                        </div>
                    </div>
                </div>
                
                <!-- Проект 2 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="NeuraLink AI">
                    </div>
                    <div class="project-content">
                        <span class="project-category">Искусственный интеллект</span>
                        <h3 class="project-title">NeuraLink AI</h3>
                        <p class="project-description">Когнитивная платформа, способная обучаться и адаптироваться в реальном времени без дополнительного программирования.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Глубокое обучение</span>
                            <span class="tech-tag">Нейросети</span>
                            <span class="tech-tag">AGI</span>
                        </div>
                    </div>
                </div>
                
                <!-- Проект 3 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="BioSync">
                    </div>
                    <div class="project-content">
                        <span class="project-category">Биотехнологии</span>
                        <h3 class="project-title">BioSync Implants</h3>
                        <p class="project-description">Биосовместимые импланты, усиливающие когнитивные способности и обеспечивающие прямой интерфейс мозг-компьютер.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Нейроинтерфейсы</span>
                            <span class="tech-tag">Биосенсоры</span>
                            <span class="tech-tag">Нанотехнологии</span>
                        </div>
                    </div>
                </div>
                
                <!-- Проект 4 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="EcoSphere">
                    </div>
                    <div class="project-content">
                        <span class="project-category">Устойчивые технологии</span>
                        <h3 class="project-title">EcoSphere AI</h3>
                        <p class="project-description">Глобальная система мониторинга и оптимизации климата с предиктивной аналитикой экологических изменений.</p>
                        <div class="project-tech">
                            <span class="tech-tag">AI Аналитика</span>
                            <span class="tech-tag">IoT Сенсоры</span>
                            <span class="tech-tag">Климатическое моделирование</span>
                        </div>
                    </div>
                </div>
                
                <!-- Проект 5 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="SpaceNet">
                    </div>
                    <div class="project-content">
                        <span class="project-category">Космические технологии</span>
                        <h3 class="project-title">SpaceNet Constellation</h3>
                        <p class="project-description">Спутниковая сеть нового поколения, обеспечивающая глобальный охват интернетом со скоростью 10 Гбит/с.</p>
                        <div class="project-tech">
                            <span class="tech-tag">LEO Спутники</span>
                            <span class="tech-tag">Квантовая связь</span>
                            <span class="tech-tag">Фотонные вычисления</span>
                        </div>
                    </div>
                </div>
                
                <!-- Проект 6 -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="MetaCore">
                    </div>
                    <div class="project-content">
                        <span class="project-category">Метавселенные</span>
                        <h3 class="project-title">MetaCore Platform</h3>
                        <p class="project-description">Децентрализованная платформа для создания и взаимодействия с фотореалистичными метавселенными.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Web3</span>
                            <span class="tech-tag">VR/AR</span>
                            <span class="tech-tag">Blockchain</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Технологии -->
    <section id="tech">
        <div class="container">
            <div class="section-header">
                <div class="section-label">Наш арсенал</div>
                <h2 class="section-title">Передовые технологии</h2>
                <p class="section-subtitle">Инструменты и платформы, которые позволяют нам создавать будущее</p>
            </div>
            
            <div class="tech-grid">
                <div class="tech-card">
                    <div class="tech-icon">
                        <i class="fas fa-atom"></i>
                    </div>
                    <h3 class="tech-name">Квантовые вычисления</h3>
                    <p class="tech-description">Используем квантовые процессоры для решения задач, недоступных классическим компьютерам</p>
                </div>
                
                <div class="tech-card">
                    <div class="tech-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="tech-name">Искусственный интеллект</h3>
                    <p class="tech-description">Самообучающиеся системы, способные к творческому мышлению и решению сложных проблем</p>
                </div>
                
                <div class="tech-card">
                    <div class="tech-icon">
                        <i class="fas fa-dna"></i>
                    </div>
                    <h3 class="tech-name">Биотехнологии</h3>
                    <p class="tech-description">Синтез биологии и технологий для создания революционных медицинских решений</p>
                </div>
                
                <div class="tech-card">
                    <div class="tech-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3 class="tech-name">Космические технологии</h3>
                    <p class="tech-description">Разработка систем для освоения космоса и создания инфраструктуры за пределами Земли</p>
                </div>
                
                <div class="tech-card">
                    <div class="tech-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="tech-name">Кибербезопасность</h3>
                    <p class="tech-description">Квантово-устойчивые системы защиты для цифровой инфраструктуры будущего</p>
                </div>
                
                <div class="tech-card">
                    <div class="tech-icon">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <h3 class="tech-name">Web3 & Blockchain</h3>
                    <p class="tech-description">Децентрализованные системы для создания прозрачной и безопасной цифровой экономики</p>
                </div>
            </div>
            
            <div class="tech-showcase">
                <div class="section-header">
                    <div class="section-label">Лаборатории будущего</div>
                    <h2 class="section-title">Исследовательские центры</h2>
                    <p class="section-subtitle">15 научно-исследовательских центров по всему миру, где рождаются прорывные технологии</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px;">
                    <div style="background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--glass-border);">
                        <h4 style="font-size: 1.3rem; margin-bottom: 15px; color: var(--neon-blue);">Центр квантовых исследований</h4>
                        <p style="color: rgba(255, 255, 255, 0.7);">Калифорния, США - Разработка квантовых алгоритмов и создание квантовых процессоров</p>
                    </div>
                    
                    <div style="background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--glass-border);">
                        <h4 style="font-size: 1.3rem; margin-bottom: 15px; color: var(--neon-blue);">Лаборатория нейроинтерфейсов</h4>
                        <p style="color: rgba(255, 255, 255, 0.7);">Цюрих, Швейцария - Исследования в области прямого взаимодействия мозг-компьютер</p>
                    </div>
                    
                    <div style="background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--glass-border);">
                        <h4 style="font-size: 1.3rem; margin-bottom: 15px; color: var(--neon-blue);">Институт космических технологий</h4>
                        <p style="color: rgba(255, 255, 255, 0.7);">Токио, Япония - Разработка систем для освоения Луны и Марса</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Контакты -->
    <section id="contact">
        <div class="container">
            <div class="section-header">
                <div class="section-label">Свяжитесь с нами</div>
                <h2 class="section-title">Начните сотрудничество</h2>
                <p class="section-subtitle">Готовы изменить будущее вместе с нами? Мы всегда открыты для новых вызовов</p>
            </div>
            
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Главный офис</h4>
                            <p>Innovation District, Tech City</p>
                            <p>Silicon Valley, CA 94025</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Телефон</h4>
                            <p>+1 (650) 123-4567</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <p>innovation@itcofe.com</p>
                        </div>
                    </div>
                    
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <label for="name">Ваше имя</label>
                        <input type="text" id="name" class="form-control" placeholder="Введите ваше имя" required>
                        <div class="form-error" id="nameError">Пожалуйста, введите ваше имя</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="Введите ваш email" required>
                        <div class="form-error" id="emailError">Пожалуйста, введите корректный email</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Тема</label>
                        <input type="text" id="subject" class="form-control" placeholder="Тема сообщения" required>
                        <div class="form-error" id="subjectError">Пожалуйста, введите тему сообщения</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Сообщение</label>
                        <textarea id="message" class="form-control" placeholder="Опишите ваш проект или идею" required></textarea>
                        <div class="form-error" id="messageError">Пожалуйста, введите ваше сообщение</div>
                    </div>
                    
                    <button type="submit" class="btn" style="align-self: flex-start;">Отправить заявку <i class="fas fa-paper-plane"></i></button>
                    
                    <div class="form-success" id="formSuccess">
                        <i class="fas fa-check-circle"></i> Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Футер -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>ITCOFE</h3>
                    <p>Создаем технологии, которые определяют будущее человечества. 15 лет инноваций, 150+ прорывных проектов, бесконечные возможности.</p>
                </div>
                
                <div class="footer-column">
                    <h4>Компания</h4>
                    <ul class="footer-links">
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Команда</a></li>
                        <li><a href="#">Карьера</a></li>
                        <li><a href="#">Новости</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4>Ресурсы</h4>
                    <ul class="footer-links">
                        <li><a href="#">Исследования</a></li>
                        <li><a href="#">Публикации</a></li>
                        <li><a href="#">Технологии</a></li>
                        <li><a href="#">Форум</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4>Правовая информация</h4>
                    <ul class="footer-links">
                        <li><a href="#">Политика конфиденциальности</a></li>
                        <li><a href="#">Условия использования</a></li>
                        <li><a href="#">Патенты</a></li>
                        <li><a href="#">Лицензии</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 ITCOFE Technologies. Все права защищены. Капитализация: $30+ млрд.</p>
            </div>
        </div>
    </footer>

    <!-- Кнопка "Наверх" -->
    <a href="#" class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
    </a>

    <script>
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

        // Параллакс эффект для фона
        document.addEventListener('mousemove', (e) => {
            const bg = document.querySelector('.animated-bg');
            if (bg) {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                bg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
            }
        });

        // Анимация появления элементов при скролле
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Наблюдаем за элементами
            document.querySelectorAll('.project-card, .tech-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        }

        // Изменение навигации при скролле
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const scrollToTop = document.getElementById('scrollToTop');
            
            if (window.scrollY > 100) {
                if (nav) {
                    nav.style.background = 'rgba(10, 10, 10, 0.95)';
                    nav.style.backdropFilter = 'blur(30px)';
                }
                if (scrollToTop) {
                    scrollToTop.classList.add('active');
                }
            } else {
                if (nav) {
                    nav.style.background = 'rgba(10, 10, 10, 0.9)';
                    nav.style.backdropFilter = 'blur(20px)';
                }
                if (scrollToTop) {
                    scrollToTop.classList.remove('active');
                }
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
                    if (nameError) nameError.style.display = 'block';
                    isValid = false;
                } else {
                    if (nameError) nameError.style.display = 'none';
                }
                
                // Валидация email
                const email = document.getElementById('email');
                const emailError = document.getElementById('emailError');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email && !emailRegex.test(email.value.trim())) {
                    if (emailError) emailError.style.display = 'block';
                    isValid = false;
                } else {
                    if (emailError) emailError.style.display = 'none';
                }
                
                // Валидация темы
                const subject = document.getElementById('subject');
                const subjectError = document.getElementById('subjectError');
                if (subject && subject.value.trim() === '') {
                    if (subjectError) subjectError.style.display = 'block';
                    isValid = false;
                } else {
                    if (subjectError) subjectError.style.display = 'none';
                }
                
                // Валидация сообщения
                const message = document.getElementById('message');
                const messageError = document.getElementById('messageError');
                if (message && message.value.trim() === '') {
                    if (messageError) messageError.style.display = 'block';
                    isValid = false;
                } else {
                    if (messageError) messageError.style.display = 'none';
                }
                
                // Если форма валидна, показываем сообщение об успехе
                if (isValid) {
                    const formSuccess = document.getElementById('formSuccess');
                    if (formSuccess) {
                        formSuccess.style.display = 'block';
                    }
                    
                    // Очищаем форму
                    contactForm.reset();
                    
                    // Скрываем сообщение об успехе через 5 секунд
                    setTimeout(() => {
                        if (formSuccess) {
                            formSuccess.style.display = 'none';
                        }
                    }, 5000);
                }
            });
        }
    </script>
</body>
</html>
