/**Plan:
 * 1. Сделать локальное хранилище;
 * 2. При выигрыше показывать одну картинку, при проигрыше - другую;
 * 3. Выводить разные слова при проигрыше и выигрыше! Сделать массив с выигрышем и проигрышем;
 * 4. Сделать проверку на ставку, что ничего не будет показываться, пока ставка не сделана;
**/

// Массивы:
const winMessages = ['Сегодня ты счастливчик!', 'Удача на твоей стороне!', 'Слава победителю!'];
const loseMessages = ['Не сегодня!', 'Попробуй еще раз!', 'У тебя все получится!'];

// Константы
const BET_STEP = 10;
const WIN_MULTIPLIER = 2;
const WIN_PROBABILITY = 0.5;
const FEEDBACK_DURATION = 3000;

// Переменные состояния
let balance = 100;
let currentBet = 0;

// Элементы DOM
const balanceElement = document.querySelector('.casino__balance');
const playButton = document.querySelector('.casino__play');
const betPlusButton = document.querySelector('.casino__bet-plus');
const betMinusButton = document.querySelector('.casino__bet-minus');
const betValueElement = document.querySelector('.casino__bet-value');
const gameResultElement = document.querySelector('.casino__result');

// Инициализация интерфейса
updateBalanceDisplay();
updateBetDisplay();

// Обработчики событий
betMinusButton.addEventListener('click', decreaseBet);
betPlusButton.addEventListener('click', increaseBet);
playButton.addEventListener('click', () => {
    playGame(
        () => { // onWin
            const winResult = getRandomResult(winMessages);
            showGameResult(winResult, true);
        },
        () => { // onLose
            const loseResult = getRandomResult(loseMessages);
            showGameResult(loseResult, false);
        }
    );
});

// Функции
function updateBalanceDisplay() {
    balanceElement.textContent = `Ваш текущий баланс: ${balance}`;
}

function updateBetDisplay() {
    betValueElement.textContent = currentBet;
}

function decreaseBet() {
    if (currentBet >= BET_STEP) {
        currentBet -= BET_STEP;
        updateBetDisplay();
    }
}

function increaseBet() {
    if (currentBet + BET_STEP <= balance) {
        currentBet += BET_STEP;
        updateBetDisplay();
    }
}

function playGame(onWin, onLose) {
    // Проверка достаточности средств
    if (balance < currentBet) {
        alert('Недостаточно средств для игры!');
        return false;
    }
    // Проверка на то, сделана ли ставка
    if (currentBet === 0) {
        alert('Вам нужно сделать ставку!');
        return false;
    }

    // Списываем ставку с баланса
    balance -= currentBet;

    // Определяем результат игры
    const isWin = Math.random() >= WIN_PROBABILITY;

    if (isWin) {
        // Выигрыш: возвращаем ставку и добавляем выигрыш
        balance += currentBet * WIN_MULTIPLIER;
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

// Показываем цвет выигрыша
function showWinFeedback() {
    balanceElement.style.backgroundColor = 'green';
    setTimeout(() => {
        balanceElement.style.backgroundColor = 'transparent';
    }, FEEDBACK_DURATION);
}

// Показываем цвет проигрыша
function showLoseFeedback() {
    balanceElement.style.backgroundColor = 'red';
    setTimeout(() => {
        balanceElement.style.backgroundColor = 'transparent';
    }, FEEDBACK_DURATION);
}

function getRandomResult(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function showGameResult(message, isWin) {
    gameResultElement.textContent = message;
    gameResultElement.style.display = 'block';
    gameResultElement.style.color = isWin ? 'green' : 'red';
    gameResultElement.style.fontWeight = 'bold';
    gameResultElement.style.padding = '10px';
    gameResultElement.style.borderRadius = '5px';
    gameResultElement.style.backgroundColor = isWin ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)';

    setTimeout(() => {
        gameResultElement.style.display = 'none';
    }, 3000);
}




