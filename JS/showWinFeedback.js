import config from './config.js';
import { el } from './main.js';

// Показываем цвет выигрыша
export function showWinFeedback() {
    el.balanceElement.style.backgroundColor = 'green';
    setTimeout(() => {
        el.balanceElement.style.backgroundColor = 'transparent';
    }, config.game.FEEDBACK_DURATION);
}