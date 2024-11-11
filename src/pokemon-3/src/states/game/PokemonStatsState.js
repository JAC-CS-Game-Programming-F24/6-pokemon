import PokemonStatsPanel from '../../user-interface/PokemonStatsPanel.js';
import State from '../../../lib/State.js';
import Input from '../../../lib/Input.js';
import { input, stateStack } from '../../globals.js';

export default class PokemonStatsState extends State {
	constructor(pokemon) {
		super();

		this.panel = new PokemonStatsPanel(pokemon);
	}

	update() {
		if (input.isKeyPressed(Input.KEYS.ESCAPE)) {
			stateStack.pop();
		}
	}

	render() {
		this.panel.render();
	}
}
