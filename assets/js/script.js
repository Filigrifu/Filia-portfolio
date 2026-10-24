/**
 * Cosmic Aurora Portfolio - Interaction Scripts
 * - Video transition handling with animations/transition.mp4
 * - Header visibility toggle (hidden on full-screen #home, visible on scroll)
 * - Navigation active link tracking with white glow effect (#ffffff)
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header.cosmic-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const homeSection = document.getElementById('home');
  const exploreBtn = document.getElementById('explore-btn');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainNav = document.getElementById('main-nav');
  
  let isTransitioning = false;

  // ==========================================================================
  // COSMIC AUDIO SYNTHESIZER (Pure Web Audio API - Sci-Fi Technology Soundscapes)
  // ==========================================================================
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // 1. Sleek Futuristic Holographic Click (High-tech interface tap)
  function playCosmicClick() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // A. Tactical Sub-Punch (gives realistic physical high-tech feedback)
    const oscPunch = ctx.createOscillator();
    const gainPunch = ctx.createGain();
    oscPunch.type = 'sine';
    oscPunch.frequency.setValueAtTime(180, now);
    oscPunch.frequency.exponentialRampToValueAtTime(50, now + 0.035);

    gainPunch.gain.setValueAtTime(0.16, now);
    gainPunch.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    oscPunch.connect(gainPunch);
    gainPunch.connect(ctx.destination);
    oscPunch.start(now);
    oscPunch.stop(now + 0.04);

    // B. Holographic Laser Resonance (Cosmic sci-fi chirp)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1350, now);
    osc.frequency.exponentialRampToValueAtTime(360, now + 0.05);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1050, now);
    filter.Q.setValueAtTime(3.2, now);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.055);

    // C. Ethereal Overtone Shimmer
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(2600, now);
    osc2.frequency.exponentialRampToValueAtTime(780, now + 0.03);

    gain2.gain.setValueAtTime(0.06, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.start(now);
    osc2.stop(now + 0.035);
  }

  // 2. Cosmic Camera Shutter Sound (Mechanical-Crystal Energy Pulse)
  function playCosmicShutter() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Sub kick punch
    const oscPunch = ctx.createOscillator();
    const gainPunch = ctx.createGain();
    oscPunch.type = 'triangle';
    oscPunch.frequency.setValueAtTime(150, now);
    oscPunch.frequency.exponentialRampToValueAtTime(40, now + 0.08);

    gainPunch.gain.setValueAtTime(0.18, now);
    gainPunch.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    oscPunch.connect(gainPunch);
    gainPunch.connect(ctx.destination);
    oscPunch.start(now);
    oscPunch.stop(now + 0.09);

    // High energy crystal snap
    const oscSnap = ctx.createOscillator();
    const gainSnap = ctx.createGain();
    oscSnap.type = 'sine';
    oscSnap.frequency.setValueAtTime(1750, now);
    oscSnap.frequency.exponentialRampToValueAtTime(380, now + 0.075);

    gainSnap.gain.setValueAtTime(0.16, now);
    gainSnap.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

    oscSnap.connect(gainSnap);
    gainSnap.connect(ctx.destination);
    oscSnap.start(now);
    oscSnap.stop(now + 0.08);

    // Holographic crystal release at 0.06s
    const oscRelease = ctx.createOscillator();
    const gainRelease = ctx.createGain();
    oscRelease.type = 'sine';
    oscRelease.frequency.setValueAtTime(850, now + 0.06);
    oscRelease.frequency.exponentialRampToValueAtTime(260, now + 0.13);

    gainRelease.gain.setValueAtTime(0.1, now + 0.06);
    gainRelease.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

    oscRelease.connect(gainRelease);
    gainRelease.connect(ctx.destination);
    oscRelease.start(now + 0.06);
    oscRelease.stop(now + 0.14);
  }

  // 3. Cosmic Toggle Sound (Rising/Falling Resonance Chime)
  function playCosmicToggle(isOn) {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const freq1 = isOn ? 523.25 : 783.99; // C5 or G5
    const freq2 = isOn ? 783.99 : 523.25; // G5 or C5

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq1, now);
    gain1.gain.setValueAtTime(0.09, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.11);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq2, now + 0.06);
    gain2.gain.setValueAtTime(0.11, now + 0.06);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.06);
    osc2.stop(now + 0.21);
  }

  // 4. Cosmic Download Sound (Ascending Warp Chime)
  function playCosmicDownload() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const notes = [587.33, 783.99, 1046.50]; // D5, G5, C6
    notes.forEach((freq, idx) => {
      const t = now + idx * 0.055;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.05, t + 0.14);

      gain.gain.setValueAtTime(0.09, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.16);
    });
  }

  // 5. Cosmic Countdown Beep (3-2-1)
  function playCosmicCountdownBeep(count) {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const freq = count === 1 ? 880 : 587.33; // Higher tone on 1
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  // Global Cosmic Audio Dispatcher
  // Strictly restricted to ONLY:
  // 1. Explore button (#explore-btn, .hero-cta)
  // 2. Photo Booth controls (#snap-btn, #filter-toggle-btn, #download-strip-btn, .booth-btn)
  // 3. Works Cards (.work-card, .viewer-arrow)
  // 4. Contact Flip Card (flipping the email card)
  let lastCosmicClickTime = 0;
  function triggerCosmicClickSound(e) {
    const target = e.target;
    if (!target) return;

    // Do NOT play sound when typing/clicking inside text inputs or textarea
    if (target.closest('input, textarea')) return;

    // Do NOT play sound if clicking the native mailto link directly without flipping
    if (target.closest('#contact-direct-email')) return;

    // 1. Explore
    const isExplore = !!target.closest('#explore-btn, .hero-cta');

    // 2. Photo Booth
    const isPhotoBooth = !!target.closest('.booth-btn, #filter-toggle-btn, #snap-btn, #download-strip-btn');

    // 3. Works Cards
    const isWorksCards = !!target.closest('.work-card, .viewer-arrow');

    // 4. Contact Email Flip Card
    let isEmailFlip = false;
    const contactFlipper = document.getElementById('contact-flipper');
    if (contactFlipper) {
      const isFront = !!target.closest('#contact-front-card');
      const isBackFlipTrigger = !!target.closest('.contact-back') && !target.closest('.retro-message-box');
      if (isFront || isBackFlipTrigger) {
        isEmailFlip = true;
      }
    }

    if (!isExplore && !isPhotoBooth && !isWorksCards && !isEmailFlip) {
      return; // All other buttons, nav links, chevrons, etc. remain completely silent
    }

    // Debounce to prevent duplicate triggers from pointerdown + click on the same physical interaction
    const now = performance.now();
    if (now - lastCosmicClickTime < 35) return;
    lastCosmicClickTime = now;

    playCosmicClick();
  }

  // Use capture: true so that elements inside allowed areas reliably trigger sound
  document.addEventListener('pointerdown', triggerCosmicClickSound, { capture: true, passive: true });
  document.addEventListener('click', triggerCosmicClickSound, { capture: true, passive: true });

  // Dynamic Starry Night animation system for Home hero
  function buildStarField(section) {
    if (!section) return;

    // Use existing star-field or create inside starry-night-container
    let field = section.querySelector('.star-field');
    if (!field) {
      field = document.createElement('div');
      field.className = 'star-field';
      field.id = 'home-star-field';
      field.setAttribute('aria-hidden', 'true');
      const container = section.querySelector('.starry-night-container');
      if (container) {
        container.appendChild(field);
      } else {
        section.appendChild(field);
      }
    }
    field.innerHTML = '';

    const crossSvg = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" fill="currentColor"/></svg>';

    // 1. Precise artwork stars (Aligns and animates the prominent 4-point stars from the background)
    const keyArtworkStars = [
      { x: 9.1,  y: 8.2,  size: 24, dur: 4.2, delay: 0,   anim: 'twinkle-sparkle' },
      { x: 44.2, y: 45.8, size: 26, dur: 3.8, delay: 1.2, anim: 'twinkle-pulse' },
      { x: 5.2,  y: 57.9, size: 22, dur: 4.6, delay: 2.1, anim: 'twinkle-sparkle' },
      { x: 56.4, y: 79.2, size: 24, dur: 4.0, delay: 0.8, anim: 'twinkle-pulse' },
      { x: 69.8, y: 57.4, size: 18, dur: 3.5, delay: 1.7, anim: 'twinkle-flicker' },
      { x: 87.2, y: 74.5, size: 26, dur: 4.4, delay: 2.8, anim: 'twinkle-sparkle' },
      { x: 61.5, y: 7.2,  size: 18, dur: 3.2, delay: 0.5, anim: 'twinkle-pulse' },
      { x: 91.5, y: 3.2,  size: 20, dur: 3.9, delay: 1.9, anim: 'twinkle-flicker' },
      { x: 94.2, y: 27.1, size: 18, dur: 4.5, delay: 3.0, anim: 'twinkle-slow' }
    ];

    keyArtworkStars.forEach(s => {
      const star = document.createElement('span');
      star.className = `star star-cross artwork-star ${s.anim}`;
      star.style.left = `${s.x}%`;
      star.style.top = `${s.y}%`;
      star.style.width = `${s.size}px`;
      star.style.height = `${s.size}px`;
      star.style.setProperty('--dur', `${s.dur}s`);
      star.style.setProperty('--delay', `${s.delay}s`);
      star.innerHTML = crossSvg;
      field.appendChild(star);
    });

    // 2. Dynamic twinkling stars across the night sky (lightweight count for mobile)
    const animTypes = ['twinkle-pulse', 'twinkle-flicker', 'twinkle-slow', 'twinkle-sparkle'];
    const tintClasses = ['', '', 'cyan-tint', 'violet-tint', 'gold-tint'];

    const isMobile = window.innerWidth <= 768;
    const totalStars = isMobile ? 22 : 75;
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement('span');
      const isCross = Math.random() < 0.22;
      const anim = animTypes[Math.floor(Math.random() * animTypes.length)];
      const tint = tintClasses[Math.floor(Math.random() * tintClasses.length)];

      if (isCross) {
        const size = Math.floor(10 + Math.random() * 12);
        star.className = `star star-cross ${anim} ${tint}`.trim();
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.innerHTML = crossSvg;
      } else {
        const size = (1.8 + Math.random() * 3.2).toFixed(1);
        star.className = `star star-dot ${anim} ${tint}`.trim();
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
      }

      const posX = (Math.random() * 99).toFixed(1);
      const posY = (Math.random() * 88).toFixed(1);
      const dur = (2.2 + Math.random() * 4.5).toFixed(1);
      const delay = (-Math.random() * 8).toFixed(1);

      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.setProperty('--dur', `${dur}s`);
      star.style.setProperty('--delay', `${delay}s`);

      field.appendChild(star);
    }

    // 3. Subtle celestial parallax on cursor move
    const container = section.querySelector('.starry-night-container');
    if (container && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let rafId = null;
      let targetX = 0, targetY = 0;
      let currentX = 0, currentY = 0;

      section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = normX * 14;
        targetY = normY * 14;

        if (!rafId) {
          rafId = requestAnimationFrame(function updateParallax() {
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;
            container.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
            if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
              rafId = requestAnimationFrame(updateParallax);
            } else {
              rafId = null;
            }
          });
        }
      }, { passive: true });

      section.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
      }, { passive: true });
    }
  }
  buildStarField(homeSection);

  // Typewriting effect for Home section text
  let homeTypewriterTimeout = null;

  function runHomeTypewriter() {
    const titleEl = document.getElementById('typewriter-title');
    const subtitleEl = document.getElementById('typewriter-subtitle');
    const titleCursor = document.querySelector('.title-cursor');
    const subtitleCursor = document.querySelector('.subtitle-cursor');
    const heroAction = document.querySelector('.hero-action');

    if (!titleEl || !subtitleEl) return;

    const fullTitle = 'WELCOME';
    const fullSubtitle = 'to Fili’s Portfolio';

    // Clear any active typing timer
    if (homeTypewriterTimeout) {
      clearTimeout(homeTypewriterTimeout);
      homeTypewriterTimeout = null;
    }

    // Accessibility check: Skip animation if reduced motion preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      titleEl.textContent = fullTitle;
      subtitleEl.textContent = fullSubtitle;
      if (titleCursor) titleCursor.classList.add('hidden');
      if (subtitleCursor) subtitleCursor.classList.add('hidden');
      if (heroAction) heroAction.classList.add('visible');
      return;
    }

    // Reset text & cursors and hide button until typing completes
    titleEl.textContent = '';
    subtitleEl.textContent = '';
    if (heroAction) heroAction.classList.remove('visible');
    if (titleCursor) titleCursor.classList.remove('hidden');
    if (subtitleCursor) subtitleCursor.classList.add('hidden');

    let titleIndex = 0;
    let subtitleIndex = 0;

    function typeTitle() {
      if (titleIndex < fullTitle.length) {
        titleEl.textContent += fullTitle.charAt(titleIndex);
        titleIndex++;
        homeTypewriterTimeout = setTimeout(typeTitle, 80);
      } else {
        // Pause briefly before subtitle begins
        homeTypewriterTimeout = setTimeout(() => {
          if (titleCursor) titleCursor.classList.add('hidden');
          if (subtitleCursor) subtitleCursor.classList.remove('hidden');
          typeSubtitle();
        }, 280);
      }
    }

    function typeSubtitle() {
      if (subtitleIndex < fullSubtitle.length) {
        subtitleEl.textContent += fullSubtitle.charAt(subtitleIndex);
        subtitleIndex++;
        homeTypewriterTimeout = setTimeout(typeSubtitle, 55);
      } else {
        // All text has finished typing: reveal Explore button smoothly
        homeTypewriterTimeout = setTimeout(() => {
          if (heroAction) {
            heroAction.classList.add('visible');
          }
        }, 350);
      }
    }

    // Start typing after initial load/transition
    homeTypewriterTimeout = setTimeout(typeTitle, 220);
  }

  runHomeTypewriter();

  // Glow bloom overlay (bursts light from click coordinates to full screen)
  const glowOverlay = document.createElement('div');
  glowOverlay.className = 'glow-transition';
  glowOverlay.setAttribute('aria-hidden', 'true');
  glowOverlay.innerHTML =
    '<div class="gt-radial-wave"></div><div class="gt-radial-burst"></div><div class="gt-white"></div>';
  document.body.appendChild(glowOverlay);

  const BLOOM_MS = 380;    // radial burst expands and covers the screen in pure white
  const HOLD_MS = 60;      // brief pause on pure white
  const DIM_MS = 850;      // white dims away, About appears

  // 1. Home -> click-burst glow -> white -> dim -> target page
  function playTransition(targetId = '#about', clickEvent = null) {
    if (isTransitioning) return;
    isTransitioning = true;

    // Ambil koordinat tepat dari titik layar yang diklik
    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;

    if (clickEvent && typeof clickEvent.clientX === 'number') {
      originX = clickEvent.clientX;
      originY = clickEvent.clientY;
    }

    glowOverlay.style.setProperty('--click-x', `${originX}px`);
    glowOverlay.style.setProperty('--click-y', `${originY}px`);

    document.body.classList.add('charging');
    glowOverlay.dataset.state = 'in';

    setTimeout(() => {
      const target = document.querySelector(targetId);
      if (target) {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo({ top: target.offsetTop, behavior: 'instant' });
        document.documentElement.style.scrollBehavior = '';
        if (targetId === '#about') {
          updateAboutStep(0);
        }
      }
      handleHeaderVisibility();
      handleScrollSpy();

      setTimeout(() => {
        glowOverlay.dataset.state = 'out';
        document.body.classList.remove('charging');

        setTimeout(() => {
          glowOverlay.dataset.state = '';
          isTransitioning = false;
        }, DIM_MS);
      }, HOLD_MS);
    }, BLOOM_MS);
  }

  let isSmoothScrolling = false;
  // Helper for smooth scrolling between sections
  function scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      isSmoothScrolling = true;
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      setTimeout(() => {
        isSmoothScrolling = false;
        handleHeaderVisibility();
        handleScrollSpy();
      }, 700);
    }
  }

  // Click anywhere on the Home page to play the transition from that click point
  if (homeSection) {
    homeSection.style.cursor = 'pointer';
    homeSection.addEventListener('click', (e) => {
      // Do not trigger transition if clicked on header, hamburger button, or navigation
      if (e.target.closest('header, button, a, #hamburger-btn, #main-nav')) return;
      e.preventDefault();
      playTransition('#about', e);
    });
  }

  // Trigger transition from explore button
  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      playTransition('#about', e);
    });
  }


  // 2. Header Visibility: hidden on fullscreen #home, visible on all other sections (About, Works, Playground, Contact)
  function handleHeaderVisibility() {
    if (!header || !homeSection) return;

    // Only show header & hamburger button when away from Home
    if (window.scrollY < homeSection.offsetHeight * 0.5) {
      header.classList.remove('visible-header');
      header.classList.add('hidden-header');
    } else {
      header.classList.remove('hidden-header');
      header.classList.add('visible-header');
    }
  }

  // 3. Active Nav Link Tracking (ScrollSpy)
  function handleScrollSpy() {
    let currentSectionId = '';

    // If currently on Home hero screen
    if (isOnHome()) {
      currentSectionId = 'home';
    } else {
      const scrollPosition = window.scrollY + 160;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });
    }

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  // Initial check on load
  handleHeaderVisibility();
  handleScrollSpy();

  // Is the viewer still on the fullscreen Home page?
  function isOnHome() {
    return homeSection && window.scrollY < homeSection.offsetHeight * 0.5;
  }

  // Is the viewer currently on the About section?
  function isOnAbout() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return false;
    const aboutTop = aboutSection.offsetTop;
    const aboutHeight = aboutSection.offsetHeight;
    return window.scrollY >= aboutTop - 60 && window.scrollY < aboutTop + aboutHeight - 60;
  }

  // Is the viewer at the top edge of About (Step 0) where scrolling up returns to Home?
  function isAtTopOfAbout() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return false;
    const aboutTop = aboutSection.offsetTop;
    return currentAboutStep === 0 && window.scrollY <= aboutTop + 45;
  }

  // About Section: Scroll-Based Content Transitions (3 Steps)
  const aboutSection = document.getElementById('about');
  const aboutPhotoBoxes = document.querySelectorAll('.about-photo-frame .profile-photo-box');
  const aboutStepContents = document.querySelectorAll('.about-step-content');
  const aboutUpBtn = document.getElementById('about-up-btn');
  const aboutDownBtn = document.getElementById('about-down-btn');
  
  let currentAboutStep = 0;
  let isSteppingAbout = false;
  let aboutStepCooldownTimer = null;

  function updateAboutStep(step) {
    currentAboutStep = step;

    // Transition photo showcase boxes with directional states
    aboutPhotoBoxes.forEach((box, i) => {
      box.classList.remove('active', 'passed', 'upcoming');
      if (i === step) {
        box.classList.add('active');
      } else if (i < step) {
        box.classList.add('passed');
      } else {
        box.classList.add('upcoming');
      }
    });

    // Transition text content articles with directional states
    aboutStepContents.forEach((content, i) => {
      content.classList.remove('active', 'passed', 'upcoming');
      if (i === step) {
        content.classList.add('active');
      } else if (i < step) {
        content.classList.add('passed');
      } else {
        content.classList.add('upcoming');
      }
    });
  }

  function goToAboutStep(targetStep) {
    if (!aboutSection) return;
    const aboutTop = aboutSection.offsetTop;
    const stepHeight = window.innerHeight;

    isSteppingAbout = true;
    isSmoothScrolling = true;
    updateAboutStep(targetStep);

    window.scrollTo({
      top: aboutTop + targetStep * stepHeight,
      behavior: 'smooth'
    });

    if (aboutStepCooldownTimer) clearTimeout(aboutStepCooldownTimer);
    aboutStepCooldownTimer = setTimeout(() => {
      isSteppingAbout = false;
      isSmoothScrolling = false;
    }, 650);
  }

  function handleAboutScroll() {
    if (!aboutSection || isSteppingAbout) return;
    const rect = aboutSection.getBoundingClientRect();
    const scrollableDistance = aboutSection.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
    
    let targetStep = 0;
    if (progress >= 0.55) {
      targetStep = 2;
    } else if (progress >= 0.22) {
      targetStep = 1;
    } else {
      targetStep = 0;
    }

    if (targetStep !== currentAboutStep) {
      updateAboutStep(targetStep);
    }
  }

  // Upward Glowing Chevron Indicator click handler (Scroll Up)
  if (aboutUpBtn) {
    aboutUpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!aboutSection || isSteppingAbout) return;

      if (currentAboutStep === 2) {
        goToAboutStep(1);
      } else if (currentAboutStep === 1) {
        goToAboutStep(0);
      } else {
        // Step 0 -> Return to Home
        playBottomUpTransition();
      }
    });
  }

  // Downward Glowing Chevron Indicator click handler (Scroll Down)
  if (aboutDownBtn) {
    aboutDownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!aboutSection || isSteppingAbout) return;

      if (currentAboutStep === 0) {
        goToAboutStep(1);
      } else if (currentAboutStep === 1) {
        goToAboutStep(2);
      } else {
        isSteppingAbout = true;
        scrollToSection('#works');
        setTimeout(() => { isSteppingAbout = false; }, 750);
      }
    });
  }

  handleAboutScroll();

  let lastScrollY = window.scrollY;
  // Scroll listeners
  window.addEventListener('scroll', () => {
    handleHeaderVisibility();
    handleScrollSpy();
    handleAboutScroll();

    // Guard on Home: if any native scroll drift begins from Home towards About, lock it & play aurora transition
    if (isOnHome() && !isTransitioning && !isSmoothScrolling && window.scrollY > 15) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.style.scrollBehavior = '';
      playTransition('#about');
      return;
    }

    // Guard on About -> Home: eliminate native slide when crossing above About
    if (!isTransitioning && !isSmoothScrolling) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        if (window.scrollY < aboutTop - 10 && window.scrollY > 20) {
          document.documentElement.style.scrollBehavior = 'auto';
          window.scrollTo({ top: aboutTop, behavior: 'instant' });
          document.documentElement.style.scrollBehavior = '';
          playBottomUpTransition();
          return;
        }
      }
    }
    lastScrollY = window.scrollY;
  }, { passive: true });

  // Overlay untuk transisi kembali ke Home dari nav link (memancar dari tombol/tulisan Home)
  const homeReturnOverlay = document.createElement('div');
  homeReturnOverlay.className = 'home-return-transition';
  homeReturnOverlay.setAttribute('aria-hidden', 'true');
  homeReturnOverlay.innerHTML = '<div class="hrt-radial-burst"></div><div class="hrt-solid-white"></div>';
  document.body.appendChild(homeReturnOverlay);

  // Overlay untuk transisi putih fade in dari bawah ke atas (saat slide/scroll dari About ke Home)
  const bottomUpOverlay = document.createElement('div');
  bottomUpOverlay.className = 'bottom-up-transition';
  bottomUpOverlay.setAttribute('aria-hidden', 'true');
  bottomUpOverlay.innerHTML = '<div class="but-wave"></div><div class="but-solid"></div>';
  document.body.appendChild(bottomUpOverlay);

  // 1b. Transisi Kembali ke Home (Memancar dari tulisan/tombol Home di header)
  function playHomeReturnTransition(sourceElement) {
    if (isTransitioning) return;
    isTransitioning = true;

    // Ambil posisi persis tombol Home di layar
    if (sourceElement) {
      const rect = sourceElement.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;
      homeReturnOverlay.style.setProperty('--origin-x', `${originX}px`);
      homeReturnOverlay.style.setProperty('--origin-y', `${originY}px`);
    }

    homeReturnOverlay.dataset.state = 'in';

    setTimeout(() => {
      // Pindahkan layar langsung ke paling atas (#home) saat layar tertutup putih penuh
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.style.scrollBehavior = '';
      handleHeaderVisibility();
      handleScrollSpy();

      setTimeout(() => {
        homeReturnOverlay.dataset.state = 'out';
        runHomeTypewriter();
        setTimeout(() => {
          homeReturnOverlay.dataset.state = '';
          isTransitioning = false;
        }, 850);
      }, 60);
    }, 380);
  }

  // 1c. Transisi Putih Fade In dari Bawah ke Atas (saat slide/scroll dari About ke Home)
  function playBottomUpTransition() {
    if (isTransitioning) return;
    isTransitioning = true;

    bottomUpOverlay.dataset.state = 'in';

    setTimeout(() => {
      // Pindahkan layar langsung ke paling atas (#home) saat layar tertutup putih penuh
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.style.scrollBehavior = '';
      handleHeaderVisibility();
      handleScrollSpy();

      setTimeout(() => {
        bottomUpOverlay.dataset.state = 'out';
        runHomeTypewriter();
        setTimeout(() => {
          bottomUpOverlay.dataset.state = '';
          isTransitioning = false;
        }, 850);
      }, 60);
    }, 380);
  }

  // Mobile Hamburger Navigation Toggle Logic
  function closeMobileMenu() {
    if (hamburgerBtn && mainNav) {
      hamburgerBtn.classList.remove('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('menu-open');
      document.body.classList.remove('menu-locked');
    }
  }

  function openMobileMenu() {
    if (hamburgerBtn && mainNav) {
      handleScrollSpy(); // Freshly sync which section is active so it glows
      hamburgerBtn.classList.add('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mainNav.classList.add('menu-open');
      document.body.classList.add('menu-locked');
    }
  }

  function toggleMobileMenu() {
    if (!hamburgerBtn || !mainNav) return;
    const isOpen = hamburgerBtn.classList.contains('is-active');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mainNav || !hamburgerBtn) return;
    if (mainNav.classList.contains('menu-open')) {
      if (!mainNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Close mobile menu when resizing back to desktop (> 768px)
  window.addEventListener('resize', () => {
    handleHeaderVisibility();
    if (window.innerWidth > 768 && mainNav && mainNav.classList.contains('menu-open')) {
      closeMobileMenu();
    }
  });

  // Header logo click: close mobile menu if open
  const headerLogo = document.querySelector('.header-logo');
  if (headerLogo) {
    headerLogo.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // Nav link clicks
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetHref = link.getAttribute('href');
      if (targetHref && targetHref.startsWith('#')) {
        e.preventDefault();
        
        // Always close mobile navigation drawer when a link is clicked
        closeMobileMenu();

        // Kasus 1: Sedang di Home, mau keluar ke section lain -> transisi aurora glow ke About
        if (isOnHome() && targetHref !== '#home') {
          playTransition(targetHref, e);
        }
        // Kasus 2: Sedang di luar Home, mengklik 'Home'
        else if (!isOnHome() && targetHref === '#home') {
          // Jika sedang di About, gunakan transisi fade in bawah ke atas; dari halaman lain memancar dari tombol Home
          if (isOnAbout()) {
            playBottomUpTransition();
          } else {
            playHomeReturnTransition(link);
          }
        }
        // Kasus 3: Navigasi biasa antar section di bawah (About, Works, Playground, Contact)
        else {
          if (targetHref === '#about') {
            goToAboutStep(0);
          } else {
            scrollToSection(targetHref);
          }
        }
      }
    });
  });

  // Scrolling between Home, About steps, and other sections (mouse wheel / trackpad)
  window.addEventListener('wheel', (e) => {
    if (isTransitioning || isSteppingAbout) {
      e.preventDefault();
      return;
    }

    // 1. On Home: prevent native sliding completely; scroll down triggers glowing transition in-place
    if (isOnHome()) {
      e.preventDefault();
      if (e.deltaY > 5) {
        playTransition('#about', e);
      }
      return;
    }

    // 2. Inside About: smooth step-by-step scrolling per content
    if (isOnAbout()) {
      // Scroll Down inside About
      if (e.deltaY > 12) {
        e.preventDefault();
        if (currentAboutStep === 0) {
          goToAboutStep(1);
        } else if (currentAboutStep === 1) {
          goToAboutStep(2);
        } else if (currentAboutStep === 2) {
          isSteppingAbout = true;
          scrollToSection('#works');
          setTimeout(() => { isSteppingAbout = false; }, 750);
        }
        return;
      }

      // Scroll Up inside About
      if (e.deltaY < -12) {
        e.preventDefault();
        if (currentAboutStep === 2) {
          goToAboutStep(1);
        } else if (currentAboutStep === 1) {
          goToAboutStep(0);
        } else if (currentAboutStep === 0 && isAtTopOfAbout()) {
          playBottomUpTransition();
        }
        return;
      }
    }
  }, { passive: false });

  // Touch swipe handling (swipe up on Home -> About, swipe down on About -> Home, step per content in About)
  let touchStartX = window.innerWidth / 2;
  let touchStartY = window.innerHeight / 2;
  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isTransitioning || isSteppingAbout) {
      e.preventDefault();
      return;
    }

    const touchDeltaY = touchStartY - e.touches[0].clientY;

    // Swiping on Home: prevent native sliding, swipe up (touchDeltaY > 15) triggers transition in-place
    if (isOnHome()) {
      e.preventDefault();
      if (touchDeltaY > 15) {
        playTransition('#about', { clientX: touchStartX, clientY: touchStartY });
      }
      return;
    }

    // Swiping inside About: smooth step-by-step scrolling per content
    if (isOnAbout()) {
      // Swipe up (scroll down)
      if (touchDeltaY > 25) {
        e.preventDefault();
        if (currentAboutStep === 0) {
          goToAboutStep(1);
        } else if (currentAboutStep === 1) {
          goToAboutStep(2);
        } else if (currentAboutStep === 2) {
          isSteppingAbout = true;
          scrollToSection('#works');
          setTimeout(() => { isSteppingAbout = false; }, 750);
        }
        return;
      }

      // Swipe down (scroll up)
      if (touchDeltaY < -25) {
        e.preventDefault();
        if (currentAboutStep === 2) {
          goToAboutStep(1);
        } else if (currentAboutStep === 1) {
          goToAboutStep(0);
        } else if (currentAboutStep === 0 && isAtTopOfAbout()) {
          playBottomUpTransition();
        }
        return;
      }
    }
  }, { passive: false });

  // Keyboard: arrow down / page down / space, arrow up / page up
  window.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
      if (isOnHome() || isTransitioning) {
        e.preventDefault();
        if (!isTransitioning) playTransition('#about');
        return;
      }

      if (isOnAbout() && !isSteppingAbout) {
        e.preventDefault();
        if (currentAboutStep === 0) goToAboutStep(1);
        else if (currentAboutStep === 1) goToAboutStep(2);
        else if (currentAboutStep === 2) {
          isSteppingAbout = true;
          scrollToSection('#works');
          setTimeout(() => { isSteppingAbout = false; }, 750);
        }
        return;
      }
    }

    if (['ArrowUp', 'PageUp'].includes(e.key)) {
      if (isOnAbout() && !isSteppingAbout) {
        e.preventDefault();
        if (currentAboutStep === 2) goToAboutStep(1);
        else if (currentAboutStep === 1) goToAboutStep(0);
        else if (currentAboutStep === 0 && isAtTopOfAbout() && !isTransitioning) {
          playBottomUpTransition();
        }
        return;
      }
    }
  });

  // 4. Works Project Showcase & Gallery Modal Viewer
  const viewer = document.getElementById('work-viewer');
  const viewerFrame = document.getElementById('viewer-frame');
  const viewerImg = document.getElementById('viewer-img');
  const viewerPrev = document.getElementById('viewer-prev');
  const viewerNext = document.getElementById('viewer-next');
  
  let currentProjectGallery = [];
  let currentSlideIndex = 0;
  let currentProjectTitle = '';

  function updateViewerSlide(index) {
    if (!currentProjectGallery.length) return;
    currentSlideIndex = ((index % currentProjectGallery.length) + currentProjectGallery.length) % currentProjectGallery.length;
    const imgUrl = currentProjectGallery[currentSlideIndex];
    if (viewerImg) {
      viewerImg.src = imgUrl;
      viewerImg.alt = `${currentProjectTitle} - Image ${currentSlideIndex + 1} of ${currentProjectGallery.length}`;
    } else if (viewerFrame) {
      viewerFrame.style.backgroundImage = `url('${imgUrl}')`;
    }
    if (viewerFrame) {
      viewerFrame.setAttribute('aria-label', `${currentProjectTitle} - Image ${currentSlideIndex + 1} of ${currentProjectGallery.length}`);
    }
  }

  function openProjectGallery(card) {
    if (!viewer || !card) return;
    
    let gallery = [];
    try {
      gallery = JSON.parse(card.dataset.gallery || '[]');
    } catch (e) {
      gallery = [];
    }
    
    // Fallback if data-gallery is empty
    if (!gallery.length && card.dataset.image) {
      gallery = [card.dataset.image];
    }

    currentProjectGallery = gallery;
    currentSlideIndex = 0;
    currentProjectTitle = card.querySelector('.work-title')?.textContent || 'Project';
    
    updateViewerSlide(0);
    viewer.showModal();
  }

  if (viewer) {
    document.querySelectorAll('.work-card').forEach((card) => {
      card.addEventListener('click', () => {
        openProjectGallery(card);
      });
      card.addEventListener('mouseenter', () => card.classList.add('selected'));
      card.addEventListener('mouseleave', () => card.classList.remove('selected'));
      card.addEventListener('focus', () => card.classList.add('selected'));
      card.addEventListener('blur', () => card.classList.remove('selected'));
    });

    viewerPrev?.addEventListener('click', (e) => {
      e.stopPropagation();
      updateViewerSlide(currentSlideIndex - 1);
    });

    viewerNext?.addEventListener('click', (e) => {
      e.stopPropagation();
      updateViewerSlide(currentSlideIndex + 1);
    });

    // Click outside frame closes viewer
    viewer.addEventListener('click', (e) => {
      if (e.target === viewer) viewer.close();
    });

    viewer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') updateViewerSlide(currentSlideIndex - 1);
      if (e.key === 'ArrowRight') updateViewerSlide(currentSlideIndex + 1);
    });
  }

  // 5. Playground: Photo Booth Logic (On-Demand Camera 4-Photo Session)
  const snapBtn = document.getElementById('snap-btn');
  const downloadStripBtn = document.getElementById('download-strip-btn');
  const filterToggleBtn = document.getElementById('filter-toggle-btn');
  let selectiveFilterActive = true; // Default ON: Grayscale with Green and Purple preserved

  if (filterToggleBtn) {
    filterToggleBtn.addEventListener('click', () => {
      selectiveFilterActive = !selectiveFilterActive;
      playCosmicToggle(selectiveFilterActive);
      filterToggleBtn.classList.toggle('active', selectiveFilterActive);
      filterToggleBtn.setAttribute('title', selectiveFilterActive ? 'Filter: Green & Purple Only (Grayscale Others)' : 'Filter: Off (Normal Color)');
    });
  }

  let webcamFeed = document.querySelector('.webcam-feed');
  if (!webcamFeed) {
    webcamFeed = document.createElement('video');
    webcamFeed.className = 'webcam-feed';
    webcamFeed.setAttribute('playsinline', '');
    webcamFeed.muted = true;
  }

  const frames = [
    document.getElementById('frame-1'),
    document.getElementById('frame-2'),
    document.getElementById('frame-3'),
    document.getElementById('frame-4')
  ];

  let isCapturing = false;
  let capturedPhotos = [];
  let livePreviewAnim = null;

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Run 3-2-1 countdown inside the active frame
  async function runCountdown(frameElement) {
    const cd = document.createElement('div');
    cd.className = 'frame-countdown';
    frameElement.appendChild(cd);

    for (let count = 3; count >= 1; count--) {
      playCosmicCountdownBeep(count);
      cd.textContent = count;
      cd.style.animation = 'none';
      void cd.offsetWidth; // trigger reflow
      cd.style.animation = 'countPulse 0.75s ease-out forwards';
      await wait(750);
    }

    cd.remove();
  }

  // Trigger camera flash effect on the frame
  function triggerFlash(frameElement) {
    playCosmicShutter();
    const flash = document.createElement('div');
    flash.className = 'frame-flash flashing';
    frameElement.appendChild(flash);
    setTimeout(() => flash.remove(), 400);
  }

  // Selective Color Filter: Keep all Greens & Purples, Grayscale everything else
  function applySelectiveGreenPurpleFilter(ctx, width, height) {
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    const len = data.length;

    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const d = max - min;

      // Fast check for low saturation (achromatic gray/black/white)
      if (d < 22) {
        const gray = (r * 77 + g * 150 + b * 29) >> 8;
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
        continue;
      }

      let h;
      if (max === r) {
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
      } else if (max === g) {
        h = ((b - r) / d + 2) * 60;
      } else {
        h = ((r - g) / d + 4) * 60;
      }

      // Green range: 65° to 170° (Lime, Emerald, Mint, Olive, Jade, Forest)
      const isGreen = (h >= 65 && h <= 170);

      // Purple range: 250° to 335° (Violet, Lavender, Lilac, Magenta, Deep Purple, Plum)
      const isPurple = (h >= 250 && h <= 335);

      if (isGreen || isPurple) {
        // Keep color + slight vibrance boost (+12%) so greens and purples pop against the monochrome
        const gray = (r * 77 + g * 150 + b * 29) >> 8;
        data[i] = Math.min(255, Math.max(0, gray + Math.round(1.15 * (r - gray))));
        data[i + 1] = Math.min(255, Math.max(0, gray + Math.round(1.15 * (g - gray))));
        data[i + 2] = Math.min(255, Math.max(0, gray + Math.round(1.15 * (b - gray))));
      } else {
        // All other colors (skin tone, red, yellow, orange, blue, etc.) turn grayscale
        const gray = (r * 77 + g * 150 + b * 29) >> 8;
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  // Start live filter preview rendering on canvas
  function startLiveCanvasPreview(targetFrame) {
    let canvasFeed = document.querySelector('.webcam-canvas-feed');
    if (!canvasFeed) {
      canvasFeed = document.createElement('canvas');
      canvasFeed.className = 'webcam-canvas-feed';
    }
    targetFrame.appendChild(canvasFeed);
    canvasFeed.style.display = 'block';

    const isMobile = window.innerWidth <= 768;
    canvasFeed.width = isMobile ? 180 : 300;
    canvasFeed.height = Math.round((isMobile ? 180 : 300) / (isMobile ? 1.2 : 0.95));
    const pCtx = canvasFeed.getContext('2d', { willReadFrequently: true });

    let lastFrameTime = 0;
    const targetFpsInterval = isMobile ? 33 : 0; // ~30 FPS throttle on mobile to keep device cool

    function renderLoop(timestamp) {
      if (!isCapturing && !webcamFeed.srcObject) return;

      if (isMobile && timestamp && (timestamp - lastFrameTime < targetFpsInterval)) {
        livePreviewAnim = requestAnimationFrame(renderLoop);
        return;
      }
      lastFrameTime = timestamp || 0;

      if (webcamFeed.readyState >= 2 && webcamFeed.videoWidth && webcamFeed.videoHeight) {
        const targetAspect = canvasFeed.width / canvasFeed.height;
        const videoW = webcamFeed.videoWidth;
        const videoH = webcamFeed.videoHeight;
        const videoAspect = videoW / videoH;

        let sx = 0, sy = 0, sw = videoW, sh = videoH;
        if (videoAspect > targetAspect) {
          sw = Math.round(videoH * targetAspect);
          sx = Math.round((videoW - sw) / 2);
        } else {
          sh = Math.round(videoW / targetAspect);
          sy = Math.round((videoH - sh) / 2);
        }

        pCtx.save();
        pCtx.translate(canvasFeed.width, 0);
        pCtx.scale(-1, 1); // mirror selfie
        pCtx.drawImage(webcamFeed, sx, sy, sw, sh, 0, 0, canvasFeed.width, canvasFeed.height);
        pCtx.restore();

        if (selectiveFilterActive) {
          applySelectiveGreenPurpleFilter(pCtx, canvasFeed.width, canvasFeed.height);
        }
      }
      livePreviewAnim = requestAnimationFrame(renderLoop);
    }
    cancelAnimationFrame(livePreviewAnim);
    livePreviewAnim = requestAnimationFrame(renderLoop);
  }

  // Stop live filter preview and cleanup canvas
  function stopLiveCanvasPreview() {
    if (livePreviewAnim) {
      cancelAnimationFrame(livePreviewAnim);
      livePreviewAnim = null;
    }
    const canvasFeed = document.querySelector('.webcam-canvas-feed');
    if (canvasFeed) {
      canvasFeed.style.display = 'none';
      if (canvasFeed.parentElement) {
        canvasFeed.parentElement.removeChild(canvasFeed);
      }
    }
  }

  // Capture frame with aspect ratio matching the active frame (1.2 / 1 on mobile, 1 / 1.05 on desktop)
  function captureCurrentFrame(hasLiveVideo) {
    const isMobile = window.innerWidth <= 768;
    const canvas = document.createElement('canvas');
    if (isMobile) {
      canvas.width = 600;
      canvas.height = 500; // 1.2 / 1 matching mobile vertical frame
    } else {
      canvas.width = 600;
      canvas.height = 630; // 1 / 1.05 desktop
    }
    const ctx = canvas.getContext('2d');

    if (hasLiveVideo && webcamFeed && webcamFeed.videoWidth && webcamFeed.videoHeight) {
      const targetAspect = canvas.width / canvas.height;
      const videoW = webcamFeed.videoWidth;
      const videoH = webcamFeed.videoHeight;
      const videoAspect = videoW / videoH;

      let sx = 0, sy = 0, sw = videoW, sh = videoH;
      if (videoAspect > targetAspect) {
        // Video is wider than frame: crop horizontal sides equally
        sw = Math.round(videoH * targetAspect);
        sx = Math.round((videoW - sw) / 2);
      } else {
        // Video is taller than frame: crop top/bottom
        sh = Math.round(videoW / targetAspect);
        sy = Math.round((videoH - sh) / 2);
      }

      ctx.save();
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1); // mirror selfie
      ctx.drawImage(webcamFeed, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Apply Selective Green & Purple Filter to captured photo
      if (selectiveFilterActive) {
        applySelectiveGreenPurpleFilter(ctx, canvas.width, canvas.height);
      }
    } else {
      // Artistic sample photobooth artwork showcasing selective color (green & purple preserved against monochrome)
      ctx.fillStyle = '#16161a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Monochrome geometric grid
      ctx.strokeStyle = '#26262c';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Vibrant Purple neon flare (Purple is preserved in selective filter!)
      const pGrad = ctx.createRadialGradient(canvas.width * 0.28, canvas.height * 0.42, 10, canvas.width * 0.28, canvas.height * 0.42, 150);
      pGrad.addColorStop(0, '#c026d3');
      pGrad.addColorStop(0.5, '#9333ea');
      pGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = pGrad;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.28, canvas.height * 0.42, 150, 0, Math.PI * 2);
      ctx.fill();

      // Vibrant Emerald Green flare (Green is preserved in selective filter!)
      const gGrad = ctx.createRadialGradient(canvas.width * 0.74, canvas.height * 0.58, 10, canvas.width * 0.74, canvas.height * 0.58, 140);
      gGrad.addColorStop(0, '#00ffd5');
      gGrad.addColorStop(0.5, '#059669');
      gGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = gGrad;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.74, canvas.height * 0.58, 140, 0, Math.PI * 2);
      ctx.fill();

      // Monochrome retro title and badge
      ctx.fillStyle = '#f4f4f5';
      ctx.font = '700 26px "Chakra Petch", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`SNAP #${capturedPhotos.length + 1}`, canvas.width / 2, canvas.height / 2 - 8);

      ctx.fillStyle = '#00ffd5';
      ctx.font = '700 13px "Chakra Petch", sans-serif';
      ctx.fillText('SELECTIVE FILTER: GREEN & PURPLE', canvas.width / 2, canvas.height / 2 + 24);

      if (selectiveFilterActive) {
        applySelectiveGreenPurpleFilter(ctx, canvas.width, canvas.height);
      }
    }

    return canvas.toDataURL('image/png');
  }

  // Trigger 4-set photo session on camera button click
  if (snapBtn) {
    snapBtn.addEventListener('click', async () => {
      if (isCapturing) return;
      playCosmicClick();
      isCapturing = true;
      snapBtn.classList.add('capturing');

      // Clear previous photos from frames
      capturedPhotos = [];
      frames.forEach((f) => {
        if (!f) return;
        f.style.backgroundImage = '';
        f.classList.remove('has-photo', 'active-frame');
      });

      let stream = null;
      let hasLiveVideo = false;

      // 1. OPEN CAMERA ON DEMAND
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: 'user',
              width: { ideal: 1280 },
              height: { ideal: 720 }
            },
            audio: false
          });
          webcamFeed.srcObject = stream;
          webcamFeed.style.display = 'none'; // Render live filtered preview via canvasFeed
          await webcamFeed.play();
          hasLiveVideo = true;
        }
      } catch (err) {
        console.warn('Webcam permission not granted or device not found:', err);
      }

      // 2. TAKE FOUR SET PHOTOS SEQUENTIALLY
      try {
        for (let i = 0; i < frames.length; i++) {
          const frame = frames[i];
          if (!frame) continue;

          // Attach live video / canvas feed into the current active frame
          if (hasLiveVideo) {
            startLiveCanvasPreview(frame);
          }
          frame.classList.add('active-frame');

          // Countdown 3, 2, 1
          await runCountdown(frame);

          // Stop live preview right before flash
          if (hasLiveVideo) {
            stopLiveCanvasPreview();
          }

          // Flash effect
          triggerFlash(frame);

          // Capture un-stretched photo with selective color filter applied
          const photoData = captureCurrentFrame(hasLiveVideo);
          capturedPhotos.push(photoData);

          // Render captured photo on the frame
          frame.style.backgroundImage = `url('${photoData}')`;
          frame.classList.add('has-photo');
          frame.classList.remove('active-frame');

          // Pause briefly between shots for pose adjustment
          if (i < frames.length - 1) {
            await wait(450);
          }
        }
      } finally {
        // 3. STOP CAMERA IMMEDIATELY AFTER 4TH PHOTO
        stopLiveCanvasPreview();

        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        if (webcamFeed) {
          webcamFeed.srcObject = null;
          webcamFeed.style.display = 'none';
          if (webcamFeed.parentElement) {
            webcamFeed.parentElement.removeChild(webcamFeed);
          }
        }

        isCapturing = false;
        snapBtn.classList.remove('capturing');
      }
    });
  }

  // Download film strip without stretching
  if (downloadStripBtn) {
    downloadStripBtn.addEventListener('click', () => {
      if (!capturedPhotos.length) {
        playCosmicClick();
        alert('Please take photos using the camera button first!');
        return;
      }
      playCosmicDownload();

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        // Vertical photo strip bookmark download for mobile phone
        const stripCanvas = document.createElement('canvas');
        stripCanvas.width = 440;
        const frameW = 360;
        const frameH = 300; // 360 / 1.2 = 300px matching mobile frame
        const frameX = 40;
        const gap = 20;
        const topMargin = 36;
        const bottomArea = 76;
        stripCanvas.height = topMargin + 4 * frameH + 3 * gap + bottomArea;
        const sCtx = stripCanvas.getContext('2d');

        // Teal filmstrip background
        sCtx.fillStyle = '#008f8c';
        sCtx.fillRect(0, 0, stripCanvas.width, stripCanvas.height);

        // Sprocket holes at bottom (4 holes)
        sCtx.fillStyle = '#0d0918';
        for (let i = 0; i < 4; i++) {
          const x = 55 + i * 85;
          sCtx.fillRect(x, stripCanvas.height - 34, 45, 18);
        }

        let loadedImages = 0;
        const totalImages = frames.length;

        frames.forEach((f, idx) => {
          const frameY = topMargin + idx * (frameH + gap);
          // Dark background for each window
          sCtx.fillStyle = '#0d0918';
          sCtx.fillRect(frameX, frameY, frameW, frameH);

          const photoData = capturedPhotos[idx];
          if (photoData) {
            const img = new Image();
            img.onload = () => {
              sCtx.drawImage(img, frameX, frameY, frameW, frameH);
              loadedImages++;
              if (loadedImages === totalImages) {
                // Add subtle watermark text
                sCtx.fillStyle = 'rgba(15, 10, 28, 0.6)';
                sCtx.font = '700 13px "Chakra Petch", sans-serif';
                sCtx.textAlign = 'center';
                sCtx.fillText('FILI PHOTO BOOTH // 2026', stripCanvas.width / 2, stripCanvas.height - 44);

                // Trigger download
                const link = document.createElement('a');
                link.download = 'fili-photo-strip.png';
                link.href = stripCanvas.toDataURL('image/png');
                link.click();
              }
            };
            img.src = photoData;
          } else {
            loadedImages++;
          }
        });
        return;
      }

      // Horizontal film strip (Desktop)
      const stripCanvas = document.createElement('canvas');
      stripCanvas.width = 1200;
      // Exact aspect ratio for 4 frames:
      // 4 frames of width 256px and height 294px (256 * 1.15 = 294.4px)
      // frame gap = 32px, left/right margin = 40px (40 + 4*256 + 3*32 + 40 = 1200px)
      // top/bottom margin = 48px => height = 294 + 96 = 390px
      stripCanvas.height = 390;
      const sCtx = stripCanvas.getContext('2d');

      // Teal filmstrip frame background matching UI
      sCtx.fillStyle = '#008f8c';
      sCtx.fillRect(0, 0, stripCanvas.width, stripCanvas.height);

      // Bottom sprocket holes only (12 holes matching reference)
      sCtx.fillStyle = '#0d0918';
      for (let i = 0; i < 12; i++) {
        const x = 45 + i * 93;
        sCtx.fillRect(x, stripCanvas.height - 36, 42, 22);
      }

      const frameW = 256;
      const frameH = 294; // Exact 1 / 1.15 aspect ratio
      const frameY = 48;

      let loadedImages = 0;
      const totalImages = frames.length;

      frames.forEach((f, idx) => {
        const frameX = 40 + idx * (frameW + 32);
        // Dark background for each window
        sCtx.fillStyle = '#0d0918';
        sCtx.fillRect(frameX, frameY, frameW, frameH);

        const photoData = capturedPhotos[idx];
        if (photoData) {
          const img = new Image();
          img.onload = () => {
            sCtx.drawImage(img, frameX, frameY, frameW, frameH);
            loadedImages++;
            if (loadedImages === totalImages) {
              // Add subtle watermark text
              sCtx.fillStyle = 'rgba(15, 10, 28, 0.6)';
              sCtx.font = '700 13px "Chakra Petch", sans-serif';
              sCtx.textAlign = 'right';
              sCtx.fillText('FILI PHOTO BOOTH // 2026', stripCanvas.width - 40, stripCanvas.height - 14);

              // Trigger download
              const link = document.createElement('a');
              link.download = 'fili-photo-strip.png';
              link.href = stripCanvas.toDataURL('image/png');
              link.click();
            }
          };
          img.src = photoData;
        } else {
          loadedImages++;
        }
      });
    });
  }

  // 6. Contact Section: 3D Flip Card
  const contactFlipper = document.getElementById('contact-flipper');
  const contactFrontCard = document.getElementById('contact-front-card');
  const directEmailLink = document.getElementById('contact-direct-email');
  const messageForm = document.getElementById('contact-message-form');

  if (contactFrontCard && contactFlipper) {
    contactFrontCard.addEventListener('click', (e) => {
      // Don't flip if directly clicking email link to write native email
      if (e.target === directEmailLink) return;
      contactFlipper.classList.add('flipped');
    });
  }

  // Click anywhere outside the message box to flip back
  const contactBack = contactFlipper?.querySelector('.contact-back');
  if (contactBack && contactFlipper) {
    contactBack.addEventListener('click', (e) => {
      // Don't flip back if clicking inside the message box or interactive elements
      if (e.target.closest('.retro-message-box')) return;
      contactFlipper.classList.remove('flipped');
    });
  }

  // Click outside flip card in contact section to flip back
  const contactSection = document.getElementById('contact');
  if (contactSection && contactFlipper) {
    contactSection.addEventListener('click', (e) => {
      if (!contactFlipper.classList.contains('flipped')) return;
      if (!e.target.closest('.contact-flip-wrapper')) {
        contactFlipper.classList.remove('flipped');
        playCosmicClick();
      }
    });
  }

  // Escape key to flip back
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactFlipper?.classList.contains('flipped')) {
      contactFlipper.classList.remove('flipped');
    }
  });

  if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('msg-name').value;
      const email = document.getElementById('msg-email').value;
      const text = document.getElementById('msg-text').value;

      // Direct to mailto or alert confirmation
      const subject = encodeURIComponent(`Portfolio Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${text}`);
      window.location.href = `mailto:Frifurareany@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        messageForm.reset();
        contactFlipper.classList.remove('flipped');
      }, 1000);
    });
  }

  // Focus inner input or textarea when clicking on the wrapper box
  document.querySelectorAll('.retro-input-wrapper').forEach((wrapper) => {
    wrapper.addEventListener('click', (e) => {
      const field = wrapper.querySelector('input, textarea');
      if (field && e.target !== field) {
        field.focus();
      }
    });
  });
});
