// Menu Data
const menuData = {
    hamburguesas: [
        {
            name: "TRANKI",
            price: "$85.00",
            //description: "Carne de res a la parrilla, queso, lechuga, tomate, cebolla y salsas especiales",
            ingredients: "150 gr Carne de Res, Cebolla Sazonada, Aderezos, Tocino, Vegetales, Jalapeño, Queso"
        },
        {
            name: "HAWAI",
            price: "$90.00",
           // description: "Doble porción de carne, doble queso, con todos los ingredientes",
            ingredients: "150 gr Carne de Res, Piña, Cebolla Sazonada, Aderezos, Tocino, Vegetales, Jalapeño, Queso"
        },
        {
            name:"CHAMPI",
            price: "$90.00",
            //description: "Carne a la parrilla con salsa BBQ, aros de cebolla, queso y tocino",
            ingredients: "150 gr Carne de Res, Champiñones, Cebolla Sazonada, Aderezos, Tocino, Vegetales, Jalapeño, Queso"
        },
        {
            name: "ONION BBQ",
            price: "$95.00",
            //description: "Carne premium, queso azul, champiñones salteados, cebolla caramelizada",
            ingredients: "150 gr Carne de Res, Aros de Cebolla, Cebolla Sazonada, Aderezo BBQ, Tocino, Vegetales, Jalapeño, Queso"
        },
        {
            name: "NORTEÑITA",
            price: "$100.00",
            //description: "Medallón vegetal, queso, verduras frescas y salsas",
            ingredients: "150 gr Carne de Res, Salchicha, Guacamole, Cebolla Sazonada, Aderezos, Tocino, Vegetales, Jalapeño, Queso"
        },
        {
            name: "JALAPEÑO CRUNCH",
            price: "$100.00",
            //description: "Medallón vegetal, queso, verduras frescas y salsas",
            ingredients: "150 gr Carne de Res, Tiras Empanizadas De Jalapeño Crunch, Aguacate, Cebolla Sazonada, Aderezos, Tocino, Vegetales, Jalapeño, Queso"
        },
        {
            name: "4x4",
            price: "$120.00",
            //description: "Medallón vegetal, queso, verduras frescas y salsas",
            ingredients: "300 gr Carne de Res, Cebolla Sazonada, Aderezos, Doble Tocino, Vegetales, Jalapeño, Queso"
        },
        {
            name: "SINALOENSE",
            price: "$130.00",
            //description: "Medallón vegetal, queso, verduras frescas y salsas",
            ingredients: "150 gr Camarones Empanizados, Cebolla Sazonada, Aderezos, Vegetales, Queso"
        }
    ],
    hotdogs: [
        {
            name: "Hot Dog Clásico",
            price: "$60.00",
            //description: "Salchicha premium, pan suave, cebolla, mostaza y ketchup",
            ingredients: "Salchicha, tocino, aderezos, cebolla sazonada, jalapeño."
        },
        {
            name: "Hot Dog Hawai",
            price: "$65.00",
            //description: "Salchicha premium con queso derretido, tocino y papas fritas",
            ingredients: "Salchicha, tocino, Piña, aderezos, queso, cebolla sazonada, jalapeño."
        },
        {
            name: "Hot Dog Champi",
            price: "$65.00",
            //description: "Salchicha, queso, tocino, jalapeños, cebolla y todas las salsas",
            ingredients: "Salchicha, Champiñones, tocino, aderezos, queso, cebolla sazonada, jalapeño."
        },
        {
            name: "Hot Dog Jalapeño Crunch",
            price: "$65.00",
            //description: "Salchicha con piña, tocino, queso y salsa especial",
            ingredients: "Salchicha, tocino,  Tiras Empanizadas de Jalapeño Crunch, aderezos, queso, champiñones, cebolla sazonada."
        }
    ],
    alitas: [
        {
            name: "Alitas (6 piezas)",
            price: "$9.99",
            description: "Alitas crujientes bañadas en salsa buffalo picante",
            ingredients: "6 alitas, salsa buffalo, apio, aderezo ranch"
        },
        {
            name: "Alitas Buffalo (12 piezas)",
            price: "$17.99",
            description: "Docena de alitas con salsa buffalo",
            ingredients: "12 alitas, salsa buffalo, apio, aderezo ranch"
        },
        {
            name: "Alitas BBQ (6 piezas)",
            price: "$9.99",
            description: "Alitas con salsa BBQ dulce y ahumada",
            ingredients: "6 alitas, salsa BBQ, papas fritas"
        },
        {
            name: "Alitas Miel Mostaza (6 piezas)",
            price: "$9.99",
            description: "Alitas con salsa de miel y mostaza",
            ingredients: "6 alitas, salsa miel mostaza, apio"
        },
        {
            name: "Alitas Picantes (6 piezas)",
            price: "$9.99",
            description: "Alitas extra picantes para los amantes del picante",
            ingredients: "6 alitas, salsa picante especial, apio, aderezo azul"
        },
        {
            name: "Alitas Mix (24 piezas)",
            price: "$32.99",
            description: "Combo de 24 alitas con 3 sabores diferentes",
            ingredients: "24 alitas, 3 sabores a elegir, apio, aderezos"
        }
    ],
    papas: [
        {
            name: "Papas Sencillas",
            price: "$55.00",
          //  description: "Papas fritas crujientes y doradas",
            ingredients: "Papas frescas, sal, aceite, catsup y salsa"
        },
        {
            name: "Papas con Queso",
            price: "$60.00",
           // description: "Papas fritas cubiertas con queso derretido",
            ingredients: "Papas fritas, queso, catsup, salsa"
        },
        {
            name: "Papas Gajo",
            price: "$65.00",
           // description: "Papas Gajo fritas crujientes y doradas",
            ingredients: "Papas Gajo frescas, sal, catsup, salsa"
        },
        {
            name: "Salchipapas",
            price: "$65.00",
           // description: "Papas con salchichas, crujientes",
            ingredients: "Papas fritas, salchichas, sal, catsup, salsa "
        },
        {
            name: "Salchipapas con queso",
            price: "$70.00",
           // description: "Porción grande para compartir",
            ingredients: "Papas fritas, salchichas, queso, catsup, salsa"
        },
        {
            name: "Aros de Cebolla",
            price:"60.00",
            ingredients:"Aros de cebolla, aderezo ranch"
        },
        {
            name: "Boneless con Papas",
            price: "100.00",
            ingredients: "Papas fritas, sal, Boneless, catsup, salsa"
        }
    ],
    nachos: [
        {
            name: "Nachos Sencillos",
            price: "$60.00",
            ingredients: "Tostaditas de maíz, queso, frijoles, pico de gallo, jalapeño."
        },
        {
            name: "Nachos Especiales",
            price: "$80.00",        
            ingredients: "Tostaditas de maíz, carne de res, queso, frijoles, pico de gallo, guacamole, jalapeño."
        }
    ],
    bebidas: [
        {
            name: "Refresco (500ml)",
            price: "$2.99",
            description: "Refresco de cola, naranja, limón o toronja",
            ingredients: "Refresco de tu elección"
        },
        {
            name: "Refresco (750ml)",
            price: "$3.99",
            description: "Refresco grande de cola, naranja, limón o toronja",
            ingredients: "Refresco de tu elección"
        },
        {
            name: "Agua Natural",
            price: "$1.99",
            description: "Agua purificada",
            ingredients: "Agua purificada"
        },
        {
            name: "Agua de Sabor",
            price: "$2.99",
            description: "Agua fresca de horchata, jamaica o tamarindo",
            ingredients: "Agua fresca natural"
        },
        {
            name: "Jugo Natural",
            price: "$3.99",
            description: "Jugo de naranja, manzana o piña",
            ingredients: "Jugo 100% natural"
        },
        {
            name: "Café",
            price: "$2.99",
            description: "Café americano caliente",
            ingredients: "Café 100% arábica"
        },
        {
            name: "Café con Leche",
            price: "$3.99",
            description: "Café con leche espumada",
            ingredients: "Café, leche, azúcar"
        },
        {
            name: "Limonada",
            price: "$3.99",
            description: "Limonada natural con menta",
            ingredients: "Limón, agua, azúcar, menta"
        }
    ]
};

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (navbar) {
        if (currentScroll > 80) {
            navbar.style.boxShadow = '0 4px 24px rgba(44, 24, 16, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(44, 24, 16, 0.08)';
        }
    }
    lastScroll = currentScroll;
});

// Modal functionality
const modal = document.getElementById('menuModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

// Open modal when clicking on menu card
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        openModal(category);
    });
});

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

function openModal(category) {
    if (!menuData[category]) return;
    
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    modalTitle.textContent = categoryName;
    
    modalBody.innerHTML = '';
    
    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <div class="menu-item-header">
                <h3 class="menu-item-name">${item.name}</h3>
                <span class="menu-item-price">${item.price}</span>
            </div>`;
            if(item.description != null){
                menuItem.innerHTML += ` <p class="menu-item-description">${item.description}</p>`;
            }

        menuItem.innerHTML +=`<p class="menu-item-ingredients">${item.ingredients}</p>
        `;
        
        modalBody.appendChild(menuItem);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu cards
document.querySelectorAll('.tech-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe contact info items
document.querySelectorAll('.tech-info').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe promo cards
document.querySelectorAll('.promo-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe evento cards
document.querySelectorAll('.evento-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Hero carousel
(function initHeroCarousel() {
    const track = document.querySelector('.hero-carousel .carousel-track');
    const items = document.querySelectorAll('.hero-carousel .carousel-item');
    const dots = document.querySelectorAll('.hero-carousel .carousel-dot');
    const prevBtn = document.querySelector('.hero-carousel .carousel-control.prev');
    const nextBtn = document.querySelector('.hero-carousel .carousel-control.next');

    if (!track || items.length === 0) return;

    let currentIndex = 0;
    let autoTimer = null;
    const AUTO_INTERVAL = 6000;

    function setActive(index) {
        items.forEach((item, i) => {
            item.classList.toggle('is-active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === index);
        });
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function next() {
        const index = (currentIndex + 1) % items.length;
        setActive(index);
    }

    function prev() {
        const index = (currentIndex - 1 + items.length) % items.length;
        setActive(index);
    }

    function startAuto() {
        stopAuto();
        autoTimer = setInterval(next, AUTO_INTERVAL);
    }

    function stopAuto() {
        if (autoTimer) {
            clearInterval(autoTimer);
            autoTimer = null;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            next();
            startAuto();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prev();
            startAuto();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'), 10);
            if (!isNaN(index)) {
                setActive(index);
                startAuto();
            }
        });
    });

    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        heroCarousel.addEventListener('mouseenter', stopAuto);
        heroCarousel.addEventListener('mouseleave', startAuto);
    }

    setActive(0);
    startAuto();
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 80);
});

console.log('Clamatitos · Bar familiar');
