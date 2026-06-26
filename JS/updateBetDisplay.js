import { state } from './state.js';
import { el } from './main.js';

export function updateBetDisplay() {
    el.betValueElement.textContent = state.currentBet;
}