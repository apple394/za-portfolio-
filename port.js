
        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
        
        // Typewriter effect
        document.addEventListener('DOMContentLoaded', function() {
            const typed = new Typed('#typed', {
                strings: ["Full Stack Web Developer.", "UI/UX Designer.", "Problem Solver.", "Tech Enthusiast."],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        });
        
        // Generate random code background
        const codeBg = document.getElementById('codeBg');
        const codeLines = [
            'const express = require("express");',
            'app.get("/", (req, res) => {',
            'res.send("Hello World");',
            '});',
            'app.listen(3000);',
            'function add(a, b) {',
            'return a + b;',
            '}',
            'console.log(add(2,3));',
            'import React from "react";',
            'export default function App() {',
            'return <div>Hello</div>;',
            '}',
            'SELECT * FROM users;',
            'UPDATE users SET name="John" WHERE id=1;',
            'DELETE FROM users WHERE id=5;',
            'INSERT INTO users (name) VALUES ("Alice");',
            'for(let i=0; i<10; i++) {',
            'console.log(i);',
            '}',
            'while(true) {',
            'console.log("loop");',
            '}',
            'document.querySelector("button").addEventListener("click", () => {',
            'alert("Clicked!");',
            '});'
        ];
        
        for (let i = 0; i < 50; i++) {
            const codeElement = document.createElement('span');
            codeElement.textContent = codeLines[Math.floor(Math.random() * codeLines.length)];
            codeElement.style.left = `${Math.random() * 100}%`;
            codeElement.style.top = `${Math.random() * 100}%`;
            codeElement.style.opacity = Math.random() * 0.5;
            codeElement.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
            codeBg.appendChild(codeElement);
        }
        
        // Simple 3D rotation effect for avatar
        const avatarContainer = document.getElementById('avatarContainer');
        
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            avatarContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        // Reset rotation when mouse leaves
        document.addEventListener('mouseleave', () => {
            avatarContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!menu.classList.contains('hidden')) {
                        menuBtn.classList.remove('open');
                        menu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Add scroll animation effects
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.perspective, .floating, .hover-3d');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
    

        
        // Create particles for background
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('particles-container');
            const particleCount = window.innerWidth < 768 ? 20 : 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 2px and 8px
                const size = Math.random() * 6 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                
                // Random animation
                const duration = Math.random() * 20 + 10;
                particle.style.animation = `float ${duration}s ease-in-out infinite`;
                
                container.appendChild(particle);
            }
            
            // Add 3D tilt effect to cards on mouse move
            const cards = document.querySelectorAll('.project-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    // Reset to initial rotation
                    if (card.classList.contains('float-animation')) {
                        card.style.transform = 'rotateY(-5deg) rotateX(5deg)';
                    } else if (card.classList.contains('float-animation-2')) {
                        card.style.transform = 'rotateY(0deg) rotateX(8deg)';
                    } else {
                        card.style.transform = 'rotateY(5deg) rotateX(5deg)';
                    }
                });
            });
        });
    
        
  const form = document.getElementById('contactForm'); // form ka ID yeh hona chahiye

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const response = await fetch('https://your-backend-url/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert(result.message || 'Message sent successfully!');
      form.reset();
    } catch (error) {
      alert('Error sending message. Please try again later.');
    }
  });

