import { state } from './state.js';
import config from './config.js';
import { showWinFeedback } from './showWinFeedback.js'
import { showLoseFeedback } from './showLoseFeedback.js'
import { updateBalanceDisplay } from './updateBalanceDisplay.js';

export function playGame(onWin, onLose) {
    // Проверка достаточности средств
    if (state.balance < state.currentBet) {
        alert('Недостаточно средств для игры!');
        return false;
    }
    // Проверка на то, сделана ли ставка
    if (state.currentBet === 0) {
        alert('Вам нужно сделать ставку!');
        return false;
    }

    // Списываем ставку с баланса
    state.balance -= state.currentBet;

    // Определяем результат игры
    const isWin = Math.random() >= config.game.WIN_PROBABILITY;

    if (isWin) {
        // Выигрыш: возвращаем ставку и добавляем выигрыш
        state.balance += state.currentBet * config.game.WIN_MULTIPLIER;
        showWinFeedback();
        if (onWin) onWin();
    } else {
        // Проигрыш: ставка уже списана
        showLoseFeedback();
        if (onLose) onLose();
    }

    // Обновляем отображение баланса
    updateBalanceDisplay();

    return isWin;
}