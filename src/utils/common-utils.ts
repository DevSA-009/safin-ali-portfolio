import { SetListenerInRefArg } from '@/types/types';

export const getGreeting = (): string => {
	const currentTime = new Date();
	const currentHour = currentTime.getHours();

	let greeting: string;

	switch (true) {
		case currentHour < 12 && currentHour > 6:
			greeting = 'morning!';
			break;
		case currentHour < 18 && currentHour > 6:
			greeting = 'afternoon!';
			break;
		case currentHour < 21 && currentHour > 6:
			greeting = 'evening!';
			break;
		default:
			greeting = 'night!'
			break;

	}

	return greeting;
}

/**
 *
 * return css string for chip only color name.
 *
 * @param colorName - color name css `red-500`
 * @returns
 */
export const chipColorCSSGen = (colorName: string) => {
	return `text-${colorName} border-${colorName} shadow-${colorName}/25`
}

/**
 * Adds or removes an event listener to an element referenced by a React ref.
 *
 * @param {SetListenerInRefArg} options - Configuration object for the event listener.
 * @param {HTMLElement} options.ref - A reference to the DOM element using a React ref.
 * @param {keyof DocumentEventMap} options.event - The event type to listen for (e.g., "click", "scroll").
 * @param {(e: unknown) => unknown} [options.cb] - The callback function to be invoked when the event occurs.
 *   If omitted, a no-op function is assigned for removal.
 * @param {'add' | 'remove'} [options.type='add'] - Specifies whether to add or remove the event listener (defaults to "add").
 * @throws {Error} - Throws an error if the provided `cb` is not a function or is undefined (for "add" type).
 *
 */
export const setEventsListenerInRef = ({
	ref: element,
	event,
	cb,
	type = 'add',
}: SetListenerInRefArg) => {

	if (type === 'remove') {
		cb = () => { } // Assign a no-op function for removal
		element?.removeEventListener(event, cb)
		return
	}

	if (cb !== Function && !cb) throw new Error('Callback Function Needed');

	element?.addEventListener(event, cb)
}