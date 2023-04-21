import registerDirectives from './directives';
import { init } from './hydration';
export { store } from './store';

/**
 * Initialize the Interactivity API.
 */
document.addEventListener('DOMContentLoaded', async () => {
	registerDirectives();
	await init();
	// eslint-disable-next-line no-console
	console.log('Interactivity API started');
});
