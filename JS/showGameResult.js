import { el } from './main.js';

export function showGameResult(message, isWin) {
    el.gameResultElement.textContent = message;
    el.gameResultElement.style.display = 'block';
    el.gameResultElement.style.color = isWin ? 'green' : 'red';
    el.gameResultElement.style.fontWeight = 'bold';
    el.gameResultElement.style.padding = '10px';
    el.gameResultElement.style.borderRadius = '5px';
    el.gameResultElement.style.backgroundColor = isWin ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)';

    setTimeout(() => {
        el.gameResultElement.style.display = 'none';
    }, 3000);
}