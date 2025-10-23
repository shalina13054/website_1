document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const address = document.getElementById('address').value.trim();
      if (name && email && address) {
        window.location.href = 'thankyou.html';
      } else {
        alert('Please fill in all required fields!');
      }
    });
  }

  if (window.location.pathname.includes('thankyou.html')) {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const confetti = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 0.05 + 0.02
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fcb69f';
      confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      });
      update();
    }

    function update() {
      confetti.forEach(c => {
        c.y += c.d * 20;
        if (c.y > canvas.height) c.y = 0;
      });
    }

    setInterval(draw, 50);
  }
});
