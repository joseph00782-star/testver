
class LottoDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.numbers = new Set();
    }

    generateNumbers() {
        this.numbers.clear();
        while (this.numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            this.numbers.add(randomNumber);
        }
        this.render();
        return Array.from(this.numbers).sort((a, b) => a - b);
    }

    render() {
        const sortedNumbers = Array.from(this.numbers).sort((a, b) => a - b);
        this.shadowRoot.innerHTML = `
            <style>
                .lotto-numbers {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    perspective: 1000px;
                }
                .number-circle {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    font-weight: 700;
                    color: white;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    animation: flipIn 0.8s ease-out;
                    transform-style: preserve-3d;
                }
                .number-circle:nth-child(1) { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }
                .number-circle:nth-child(2) { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
                .number-circle:nth-child(3) { background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%); }
                .number-circle:nth-child(4) { background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%); }
                .number-circle:nth-child(5) { background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%); }
                .number-circle:nth-child(6) { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }

                @keyframes flipIn {
                    from {
                        transform: rotateY(90deg);
                    }
                    to {
                        transform: rotateY(0deg);
                    }
                }
            </style>
            <div class="lotto-numbers">
                ${sortedNumbers.map(num => `<div class="number-circle">${num}</div>`).join('')}
            </div>
        `;
    }
}

customElements.define('lotto-display', LottoDisplay);

document.addEventListener('DOMContentLoaded', () => {
    const lottoDisplay = document.querySelector('lotto-display');
    const generateBtn = document.getElementById('generate-btn');
    const historyList = document.getElementById('history-list');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;
    const history = [];

    // Theme Logic
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeBtn.textContent = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeBtn.textContent = isDark ? '☀️' : '🌙';
    });

    const updateHistory = () => {
        historyList.innerHTML = '';
        history.forEach(numbers => {
            const li = document.createElement('li');
            li.textContent = numbers.join(', ');
            historyList.appendChild(li);
        });
    };

    const generateAndRecord = () => {
        const newNumbers = lottoDisplay.generateNumbers();
        if (newNumbers.length > 0) {
            history.unshift(newNumbers);
            if (history.length > 10) { // Limit history to 10 entries
                history.pop();
            }
            updateHistory();
        }
    };

    generateBtn.addEventListener('click', generateAndRecord);

    // Generate initial numbers
    generateAndRecord();
});
