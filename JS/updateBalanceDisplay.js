import { state } from './state.js';
import { el } from './main.js';

export function updateBalanceDisplay() {
    el.balanceElement.textContent = `Ваш текущий баланс: ${state.balance}`;
}