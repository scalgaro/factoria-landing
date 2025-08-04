// Función para animar la barra de progreso
function animateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.getElementById('progress-percentage');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + '%';
        progressText.textContent = Math.round(progress);
        
        if (progress >= 100) {
            setTimeout(() => {
                progress = 0;
                progressFill.style.width = '0%';
                progressText.textContent = '0';
            }, 2000);
        }
    }, 500);
}

// Función para crear partículas flotantes
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.animationName = 'float';
        particle.style.animationIterationCount = 'infinite';
        particle.style.animationTimingFunction = 'linear';
        
        particlesContainer.appendChild(particle);
    }
}

// Función para agregar efectos de hover a las características
function addFeatureHoverEffects() {
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-8px) scale(1.05)';
            feature.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.2)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0) scale(1)';
            feature.style.boxShadow = 'none';
        });
    });
}

// Función para agregar efectos de click a los enlaces sociales
function addSocialLinkEffects() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Crear efecto de onda
            const ripple = document.createElement('span');
            const rect = link.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            
            link.style.position = 'relative';
            link.style.overflow = 'hidden';
            link.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Función para agregar animación de escritura al título
function typeWriterEffect() {
    const title = document.querySelector('h1');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        title.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Función para agregar animación de aparición a los elementos
function addStaggeredAnimation() {
    const elements = document.querySelectorAll('.subtitle, .progress-bar, .features, .contact-info');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 800 + (index * 200));
    });
}

// Función para agregar efecto de parallax suave
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.particles');
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    });
}

// Función para agregar animación de contador
function animateCounter() {
    const counters = document.querySelectorAll('.feature span');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        counter.textContent = '';
        
        let i = 0;
        const counterInterval = setInterval(() => {
            counter.textContent += target.charAt(i);
            i++;
            if (i >= target.length) {
                clearInterval(counterInterval);
            }
        }, 50);
    });
}

// Función principal que inicializa todas las animaciones
function initAnimations() {
    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
        animateProgress();
        createParticles();
        addFeatureHoverEffects();
        addSocialLinkEffects();
        addStaggeredAnimation();
        addParallaxEffect();
        
        // Animar contadores después de un delay
        setTimeout(() => {
            animateCounter();
        }, 1500);
    }, 100);
}

// Agregar estilos CSS para la animación de ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initAnimations);

// Agregar efecto de vibración al icono cuando se hace click
document.querySelector('.icon-container').addEventListener('click', function() {
    this.style.animation = 'none';
    this.offsetHeight; // Trigger reflow
    this.style.animation = 'pulse 2s infinite, shake 0.5s ease-in-out';
    
    setTimeout(() => {
        this.style.animation = 'pulse 2s infinite';
    }, 500);
});

// Agregar estilos para la animación de shake
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyle);

// Función para cambiar el color de fondo gradualmente
function changeBackgroundColor() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        document.body.style.background = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 10000); // Cambiar cada 10 segundos
}

// Inicializar cambio de color de fondo
changeBackgroundColor(); 