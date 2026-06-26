import config from './config.js';
import { el } from './main.js';

// Показываем цвет проигрыша
export function showLoseFeedback() {
    el.balanceElement.style.backgroundColor = 'red';
    setTimeout(() => {
        el.balanceElement.style.backgroundColor = 'transparent';
    }, config.game.FEEDBACK_DURATION);
}