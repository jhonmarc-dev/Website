window.addEventListener('load', function() {
    gsap.registerPlugin(ScrollTrigger);

    const customCursor = document.getElementById('custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-badge, .info-item-box');

    document.addEventListener('mousemove', (e) => {
        gsap.to(customCursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: 'power2.out',
        });
    });

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(customCursor, {
                width: 40,
                height: 40,
                border: '2px solid white',
                duration: 0.3,
                ease: 'power2.out',
            });
        });
        element.addEventListener('mouseleave', () => {
            gsap.to(customCursor, {
                width: 20,
                height: 20,
                border: '2px solid var(--accent-color)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });
    });

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6c5ce7"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#8a7cfb",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    gsap.set('.animated-line', { y: '100%' });
    gsap.set('.hero-subtitle', { opacity: 0, y: 20 });
    gsap.set('.hero-info-text', { opacity: 0 });

    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTimeline.to('.animated-line', {
        y: '0%',
        stagger: 0.2,
        duration: 1
    })
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.5')
    .to('.hero-info-text', {
        opacity: 1,
        duration: 1
    }, '-=0.5');

    gsap.utils.toArray('.info-item-box').forEach(box => {
        gsap.from(box, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: box,
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true,
            },
        });
    });

    gsap.utils.toArray('.social-icons a').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { scale: 1.2, duration: 0.2, overwrite: 'auto' });
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { scale: 1, duration: 0.2, overwrite: 'auto' });
        });
    });

    const projectLinkButton = document.querySelector('.project-link-button');
    if (projectLinkButton) {
        projectLinkButton.addEventListener('mouseenter', () => {
            gsap.to(projectLinkButton, { scale: 1.05, duration: 0.3, backgroundColor: 'var(--accent-color)', color: 'var(--primary-bg)' });
        });
        projectLinkButton.addEventListener('mouseleave', () => {
            gsap.to(projectLinkButton, { scale: 1, duration: 0.3, backgroundColor: 'transparent', color: 'var(--accent-color)' });
        });
    }
});
