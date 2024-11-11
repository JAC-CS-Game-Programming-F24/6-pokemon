import State from '../../../lib/State.js';
import Input from '../../../lib/Input.js';
import { input, stateStack } from '../../globals.js';
import Map from '../../services/Map.js';
import PokemonStatsState from './PokemonStatsState.js';

export default class PlayState extends State {
	constructor(mapDefinition) {
		super();

		this.map = new Map(mapDefinition);
	}

	enter() {
		stateStack.push(new PokemonStatsState(this.map.player.party[0]));
	}

	update(dt) {
		this.map.update(dt);

		if (input.isKeyPressed(Input.KEYS.ESCAPE)) {
			stateStack.push(new PokemonStatsState(this.map.player.party[0]));
		}
	}

	render() {
		this.map.render();
	}
}
