import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

export const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getStarCount = () => {
      // Reduce star count on mobile
      return window.innerWidth < 768 ? 40 : 100;
    };

    const initStars = () => {
      const starCount = getStarCount();
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 1.5,
        vx: (Math.random() * 50 - 25) / 60, // Slower movement on mobile
        vy: (Math.random() * 50 - 25) / 60
      }));
    };

    const drawStar = (star: Star) => {
      if (!ctx) return;
      
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.radius
      );
      gradient.addColorStop(0, '#80a94b');
      gradient.addColorStop(1, 'rgba(128, 169, 75, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 0.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const connectStars = (star1: Star, star2: Star, distance: number) => {
      if (!ctx) return;
      const opacity = (1 - distance / 150) * 0.8;
      ctx.lineWidth = window.innerWidth < 768 ? 1 : 2; // Thinner lines on mobile
      
      const gradient = ctx.createLinearGradient(star1.x, star1.y, star2.x, star2.y);
      gradient.addColorStop(0, `rgba(128, 169, 75, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(128, 169, 75, ${opacity * 1.5})`);
      gradient.addColorStop(1, `rgba(128, 169, 75, ${opacity})`);
      
      ctx.strokeStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(star1.x, star1.y);
      ctx.lineTo(star2.x, star2.y);
      ctx.stroke();
    };

    const calculateDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = "lighter";
      
      // Adjust connection distance for mobile
      const connectionDistance = window.innerWidth < 768 ? 100 : 150;
      
      starsRef.current.forEach(star => {
        starsRef.current.forEach(otherStar => {
          const distance = calculateDistance(star, otherStar);
          if (distance < connectionDistance) {
            connectStars(star, otherStar, distance);
          }
        });
        
        const mouseDistance = calculateDistance(star, mouseRef.current);
        if (mouseDistance < connectionDistance) {
          connectStars(star, mouseRef.current, mouseDistance);
        }
      });

      starsRef.current.forEach(star => {
        drawStar(star);
      });
    };

    const update = () => {
      if (!canvas) return;
      starsRef.current.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;
        
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
      });
    };

    const animate = () => {
      draw();
      update();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    initStars();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initStars();
    });
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-60 dark:opacity-80"
    />
  );
};