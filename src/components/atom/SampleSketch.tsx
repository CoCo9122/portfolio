import type React from "react";
import { useEffect, useRef } from "react";
declare const p5: any;

// 描画処理
const sketch = (p: any) => {
	const seed = 8;
	let t: number;
	let num: number;
	let radius: number;
	let mySize: number;
	const sizes = [];
	const stars: {
		x: number;
		y: number;
		size: number;
		brightness: number;
		vx: number;
		vy: number;
	}[] = [];
	const cursorGlow = { x: 0, y: 0, alpha: 0 };

	const v_planet: any[] = [];

	p.setup = () => {
		mySize = p.min(p.windowWidth, p.windowHeight);
		p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
		p.background("#202020");

		num = p.int(5);
		radius = mySize * 0.75;
		for (let a = 0; a < p.TAU; a += p.TAU / num) {
			sizes.push(p.random(0.1, 0.5));
		}
		t = 0;

		for (let i = 0; i < 300; i++) {
			stars.push({
				x: p.random(-p.width, p.width),
				y: p.random(-p.height, p.height),
				size: p.random(1, 5),
				brightness: p.random(150, 255),
				vx: 0,
				vy: 0,
			});
		}
	};

	p.draw = () => {
		p.randomSeed(seed);
		p.background("#202020");
		drawStars();
		drawPlanets();
		drawCursorGlow();
	};

	const drawPlanets = () => {
		for (let i = 0; i < num; i++) {
			const a = (p.TAU / num) * i;
			const x = (radius * p.sin(a + t)) / p.random(5, 3) / 1.0;
			const y = (radius * p.cos(a + t)) / p.random(3, 5) / 1.0;
			v_planet[i] = p.createVector(x, y);
		}
		p.push();
		for (let q = 0; q < 1 / 5; q += 2 * p.random(0.01, 0.02)) {
			for (let j = 0; j < 1; j++) {
				const n = p.noise(q * t, j * t, p.frameCount * 0.01);
				p.rotateX(p.random(p.TAU) + p.sin(-t) / 5 + q);
				p.rotateY(p.random(p.TAU) + p.cos(t) / 5 + q);
				p.rotateZ(p.random(p.TAU) + p.sin(-t) / 5 + q);
				p.noStroke();
				p.fill("#f0f0f0");

				for (let i = 0; i < num; i += 8) {
					const d = p.random(radius / 2, radius / 4) / 1;
					p.push();
					p.rotateX(p.random(p.TAU) + p.sin(t));
					p.rotateY(p.random(p.TAU) + p.cos(-t) + n / 100);
					p.rotateZ(p.random(p.TAU) + 2 * p.sin(2 * t));
					const z_plus = (1.25 * p.random(-d, d)) / 1;
					p.torus(z_plus, p.random(1), 100, 100);
					p.pop();
				}
				for (let i = 0; i < num; i += 4) {
					const d = (1.5 + p.sin(t)) * p.random(radius / 2, radius / 4);
					const x_plus = (0.5 * p.random(-d, d)) / 1;
					const y_plus = (0.5 * p.random(-d, d)) / 1;
					const z_plus = (0.5 * p.random(-d, d)) / 1;
					p.stroke("#f0f0f0");
					p.strokeWeight(p.random(0.5));
					p.noFill();
					p.push();
					p.translate(v_planet[i].x + x_plus, v_planet[i].y + y_plus, z_plus);
					p.rotateX(p.random(p.TAU) + t);
					p.rotateY(p.random(-p.TAU) + t);
					p.rotateZ(p.random(p.PI) + t);
					p.sphere(p.random(12));
					p.pop();
				}
			}
		}
		p.pop();

		t += (p.random(2, 1) * p.random(0.001, 0.005)) / 1;
	};

	const drawStars = () => {
		p.push();
		p.rotateZ(p.frameCount * 0.0005);

		for (const s of stars) {
			const flicker = p.sin(p.frameCount * 0.05 + s.x * 0.01) * 50;
			const brightness = p.constrain(s.brightness + flicker, 150, 255);

			p.fill(255, brightness);
			p.noStroke();
			p.circle(s.x, s.y, s.size);

			const d = p.dist(s.x, s.y, cursorGlow.x, cursorGlow.y);
			if (d < 100) {
				const angle = p.atan2(s.y - cursorGlow.y, s.x - cursorGlow.x);
				s.vx += p.cos(angle) * 0.5;
				s.vy += p.sin(angle) * 0.5;
			}

			s.x += s.vx;
			s.y += s.vy;
			s.vx *= 0.95;
			s.vy *= 0.95;
		}
		p.pop();
	};

	const drawCursorGlow = () => {
		cursorGlow.x = p.lerp(cursorGlow.x, p.mouseX - p.width / 2, 0.2);
		cursorGlow.y = p.lerp(cursorGlow.y, p.mouseY - p.height / 2, 0.2);
		cursorGlow.alpha = p.lerp(cursorGlow.alpha, 100, 0.1);

		p.noStroke();
		p.fill(255, 150, 50, cursorGlow.alpha);
		p.circle(cursorGlow.x, cursorGlow.y, 80);
	};
};

// p5.jsのスケッチコンポーネント
const SampleSketch: React.FC = () => {
	const sketchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (sketchRef.current) {
			new p5(sketch, sketchRef.current); // p5.jsのキャンバスを生成
		}
	}, []);

	return (
		<div
			ref={sketchRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: -1,
			}}
		></div>
	);
};

export default SampleSketch;
