/**
 * script.js
 * Linktree Clone — Interactivity
 *
 * Features:
 *  1. Staggered entrance animation for link buttons
 *  2. Ripple effect on button click
 */

document.addEventListener('DOMContentLoaded', () => {
  initEntranceAnimations();
  initRippleEffect();
});

/* ============================================================
   1. STAGGERED ENTRANCE ANIMATIONS
   Each button fades in and slides up with a delay based on
   its position in the list, creating a cascading effect.
   ============================================================ */
function initEntranceAnimations() {
  const buttons = document.querySelectorAll('.link-btn');

  buttons.forEach((btn, index) => {
    // Stagger: each button waits 60ms more than the previous
    const delay = 80 + index * 60;

    btn.style.transitionDelay = `${delay}ms`;

    // Trigger reflow so the initial state is painted before animating
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        btn.classList.add('visible');
      });
    });

    // Remove the delay after animation so hover transitions feel instant
    btn.addEventListener('transitionend', () => {
      btn.style.transitionDelay = '0ms';
    }, { once: true });
  });

  // Also animate profile section
  const profile = document.querySelector('.profile');
  if (profile) {
    profile.style.opacity = '0';
    profile.style.transform = 'translateY(-12px)';
    profile.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        profile.style.opacity = '1';
        profile.style.transform = 'translateY(0)';
      });
    });
  }
}

/* ============================================================
   2. RIPPLE EFFECT
   On click, a circle expands from the point of click and
   fades out — giving Material-style tactile feedback.
   ============================================================ */
function initRippleEffect() {
  const buttons = document.querySelectorAll('.link-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
      `;

      btn.appendChild(ripple);

      // Remove ripple element after animation completes
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}
