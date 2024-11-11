import Fonts from '../lib/Fonts.js';
import Input from '../lib/Input.js';
import Images from '../lib/Images.js';
import StateMachine from '../lib/StateMachine.js';
import Timer from '../lib/Timer.js';

export const canvas = document.createElement('canvas');
export const context =
	canvas.getContext('2d') || new CanvasRenderingContext2D();
export const CANVAS_WIDTH = 480;
export const CANVAS_HEIGHT = 352;

const resizeCanvas = () => {
	const scaleX = window.innerWidth / CANVAS_WIDTH;
	const scaleY = window.innerHeight / CANVAS_HEIGHT;
	const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

	canvas.style.width = `${CANVAS_WIDTH * scale}px`;
	canvas.style.height = `${CANVAS_HEIGHT * scale}px`;
};

// Listen for canvas resize events
window.addEventListener('resize', resizeCanvas);

resizeCanvas(); // Call once to scale initially

export const images = new Images(context);
export const fonts = new Fonts();
export const input = new Input(canvas);
export const stateMachine = new StateMachine();
export const timer = new Timer();

export const DEBUG = false;
