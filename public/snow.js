/**
 * snow.js — lightweight canvas snowflake VFX
 * Usage: <canvas id="snow"></canvas>
 *        <script src="snow.js"></script>
 *
 * Respects prefers-reduced-motion — pauses animation when set.
 */
(function () {
  const canvas = document.getElementById('snow');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  /* ── Config ── */
  const COUNT      = 120;    // number of flakes
  const MIN_R      = 1.2;
  const MAX_R      = 3.6;
  const MIN_SPEED  = 0.4;
  const MAX_SPEED  = 1.1;
  const DRIFT      = 0.35;   // horizontal sway amplitude
  const OPACITY_LO = 0.25;
  const OPACITY_HI = 0.85;

  let W, H, flakes = [], raf;

  /* ── Flake factory ── */
  function mkFlake(reset) {
    return {
      x:    Math.random() * W,
      y:    reset ? -8 : Math.random() * H,
      r:    MIN_R + Math.random() * (MAX_R - MIN_R),
      vy:   MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
      vx:   (Math.random() - 0.5) * 0.4,
      sway: Math.random() * Math.PI * 2,   // phase offset for sine drift
      swaySpeed: 0.008 + Math.random() * 0.012,
      opacity: OPACITY_LO + Math.random() * (OPACITY_HI - OPACITY_LO),
    };
  }

  function init() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    flakes = Array.from({ length: COUNT }, () => mkFlake(false));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const f of flakes) {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 240, 255, ${f.opacity})`;
      ctx.fill();
    }
  }

  function update() {
    for (const f of flakes) {
      f.sway += f.swaySpeed;
      f.x += f.vx + Math.sin(f.sway) * DRIFT;
      f.y += f.vy;

      /* wrap horizontally */
      if (f.x < -f.r)     f.x = W + f.r;
      if (f.x > W + f.r)  f.x = -f.r;

      /* recycle when off the bottom */
      if (f.y > H + f.r) {
        Object.assign(f, mkFlake(true));
      }
    }
  }

  function loop() {
    update();
    draw();
    raf = requestAnimationFrame(loop);
  }

  /* ── Reduced-motion support ── */
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function applyMotion() {
    if (mq.matches) {
      cancelAnimationFrame(raf);
      /* draw a single static frame of flakes */
      draw();
    } else {
      cancelAnimationFrame(raf);
      loop();
    }
  }
  mq.addEventListener('change', applyMotion);

  /* ── Resize ── */
  window.addEventListener('resize', () => {
    init();
    applyMotion();
  }, { passive: true });

  /* ── Boot ── */
  init();
  applyMotion();
})();