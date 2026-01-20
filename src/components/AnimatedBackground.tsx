import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      maxOpacity: number;
      delay: number;
      progress: number;
    }> = [];

    for (let i = 0; i < 5; i++) {
      shootingStars.push({
        x: Math.random() * canvas.width + canvas.width * 0.2,
        y: -Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 3 + 2,
        opacity: 0,
        maxOpacity: Math.random() * 0.2 + 0.3,
        delay: Math.random() * 5000,
        progress: 0,
      });
    }

    let startTime = Date.now();

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      const currentTime = Date.now() - startTime;

      shootingStars.forEach((star) => {
        if (currentTime < star.delay) return;

        star.progress += 0.01;

        if (star.progress < 0.3) {
          star.opacity = (star.progress / 0.3) * star.maxOpacity;
        } else if (star.progress > 0.7) {
          star.opacity = ((1 - star.progress) / 0.3) * star.maxOpacity;
        } else {
          star.opacity = star.maxOpacity;
        }

        star.x -= star.speed;
        star.y += star.speed;

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x + star.length * 0.7,
          star.y - star.length * 0.7
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length * 0.7, star.y - star.length * 0.7);
        ctx.stroke();

        if (star.x < -star.length || star.y > canvas.height + star.length || star.progress >= 1) {
          star.x = Math.random() * canvas.width + canvas.width * 0.2;
          star.y = -Math.random() * canvas.height * 0.5;
          star.progress = 0;
          star.delay = currentTime + Math.random() * 3000 + 2000;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
