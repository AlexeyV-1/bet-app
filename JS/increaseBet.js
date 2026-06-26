import config from './config.js';
import { state } from './state.js';
import { updateBetDisplay } from './updateBetDisplay.js'

export function increaseBet() {
    if (state.currentBet + config.game.BET_STEP <= state.balance) {
        state.currentBet += config.game.BET_STEP;
        updateBetDisplay();
    }
}