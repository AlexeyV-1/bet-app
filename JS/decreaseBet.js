import config from './config.js';
import { state } from './state.js';
import { updateBetDisplay } from './updateBetDisplay.js'

export function decreaseBet() {
    if (state.currentBet >= config.game.BET_STEP) {
        state.currentBet -= config.game.BET_STEP;
        updateBetDisplay();
    }
}