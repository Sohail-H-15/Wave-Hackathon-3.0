// ==========================================
// Animated Gradient Mesh Background (for entire page)
// ==========================================

class AnimatedGradientMesh {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;

        this.setupCanvas();
        this.animate();
    }

    setupCanvas() {
        this.canvas.id = 'gradient-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0';
        this.canvas.style.pointerEvents = 'none';
        document.body.insertBefore(this.canvas, document.body.firstChild);

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    drawGradientMesh() {
        const w = this.canvas.width;
        const h = this.canvas.height;

        // Create multiple gradient layers that move smoothly
        const gradient1 = this.ctx.createRadialGradient(
            w * 0.3 + Math.sin(this.time * 0.0005) * 150,
            h * 0.3 + Math.cos(this.time * 0.0007) * 150,
            0,
            w * 0.3,
            h * 0.3,
            w * 0.6
        );
        gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.12)');
        gradient1.addColorStop(1, 'rgba(99, 102, 241, 0)');

        const gradient2 = this.ctx.createRadialGradient(
            w * 0.7 + Math.cos(this.time * 0.0006) * 120,
            h * 0.6 + Math.sin(this.time * 0.0005) * 120,
            0,
            w * 0.7,
            h * 0.6,
            w * 0.5
        );
        gradient2.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
        gradient2.addColorStop(1, 'rgba(6, 182, 212, 0)');

        const gradient3 = this.ctx.createRadialGradient(
            w * 0.5 + Math.sin(this.time * 0.0004) * 180,
            h * 0.8 + Math.cos(this.time * 0.0005) * 100,
            0,
            w * 0.5,
            h * 0.8,
            w * 0.4
        );
        gradient3.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
        gradient3.addColorStop(1, 'rgba(59, 130, 246, 0)');

        this.ctx.fillStyle = gradient1;
        this.ctx.fillRect(0, 0, w, h);

        this.ctx.fillStyle = gradient2;
        this.ctx.fillRect(0, 0, w, h);

        this.ctx.fillStyle = gradient3;
        this.ctx.fillRect(0, 0, w, h);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawGradientMesh();
        this.time += 16;
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the animations
document.addEventListener('DOMContentLoaded', () => {
    new AnimatedGradientMesh();
});
