/**Plan:
 * 1. Сделать локальное хранилище;
 * 2. При выигрыше показывать одну картинку, при проигрыше - другую;
**/

import { updateBalanceDisplay } from './updateBalanceDisplay.js';
import { updateBetDisplay } from './updateBetDisplay.js'
import { playGame } from './playGame.js'
import { getRandomResult } from './getRandomResult.js'
import { showGameResult } from './showGameResult.js'
import { showWinFeedback } from './showWinFeedback.js'
import { showLoseFeedback } from './showLoseFeedback.js'
import { decreaseBet } from './decreaseBet.js'
import { increaseBet } from './increaseBet.js'
import config from './config.js';
import { state } from './state.js';
import selectors from './selectors.js'


// Элементы DOM
const el = {
    balanceElement: document.querySelector('.casino__balance'),
    playButton: document.querySelector('.casino__play'),
    betPlusButton: document.querySelector('.casino__bet-plus'),
    betMinusButton: document.querySelector('.casino__bet-minus'),
    betValueElement: document.querySelector('.casino__bet-value'),
    gameResultElement: document.querySelector('.casino__result'),
}

export { el };


// Инициализация интерфейса
updateBalanceDisplay();
updateBetDisplay();

// Обработчики событий
el.betMinusButton.addEventListener('click', decreaseBet);
el.betPlusButton.addEventListener('click', increaseBet);
el.playButton.addEventListener('click', () => {
    playGame(
        () => { // onWin
            const winResult = getRandomResult(config.messages.win);
            showGameResult(winResult, true);
        },
        () => { // onLose
            const loseResult = getRandomResult(config.messages.lose);
            showGameResult(loseResult, false);
        }
    );
});