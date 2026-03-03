/**
 * script.js — Kolosal Ops Linktree
 * 1. Staggered entrance animation for link buttons
 * 2. Ripple effect on click
 */

document.addEventListener('DOMContentLoaded', () => {
  initEntranceAnimations();
  initRippleEffect();
});

/* ── 1. Staggered entrance animations ──────────────────────── */
function initEntranceAnimations() {
  // Animate profile in from above
  const profile = document.querySelector('.profile');
  if (profile) {
    profile.style.cssText = 'opacity:0; transform:translateY(-10px); transition:opacity 0.45s ease, transform 0.45s ease;';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      profile.style.opacity = '1';
      profile.style.transform = 'translateY(0)';
    }));
  }

  // Stagger each link button
  const buttons = document.querySelectorAll('.link-btn');
  buttons.forEach((btn, i) => {
    const delay = 80 + i * 55;
    btn.style.transitionDelay = `${delay}ms`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      btn.classList.add('visible');
    }));
    btn.addEventListener('transitionend', () => {
      btn.style.transitionDelay = '0ms';
    }, { once: true });
  });

  // Fade in categories slightly staggered
  const categories = document.querySelectorAll('.category');
  categories.forEach((cat, i) => {
    cat.style.cssText = `opacity:0; transform:translateY(10px); transition:opacity 0.4s ease ${100 + i * 40}ms, transform 0.4s ease ${100 + i * 40}ms;`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      cat.style.opacity = '1';
      cat.style.transform = 'translateY(0)';
    }));
  });
}

/* ── 2. Ripple on click ─────────────────────────────────────── */
function initRippleEffect() {
  document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}
