// Create an array of objects containing numbers 1 to 90 with unique IDs
const numbers = Array.from({
    length: 90
}, (_, i) => ({
    id: i + 1,
    number: i + 1
}));

// Get the number grid container
const numEl = document.getElementById('num-btn');
const numberGrid = document.getElementById('number-grid');

// Create the number grid
numbers.forEach(item => {
    const numberCell = document.createElement('div');
    numberCell.className = 'number-cell';
    numberCell.id = 'cell' + item.id;
    numberCell.textContent = item.number;
    numberCell.dataset.id = item.id;
    numberGrid.appendChild(numberCell);
});

const numbersArray = Array.from({
    length: 90
}, (_, i) => i + 1);

// Function to pick a unique random number
function pickNumber() {
    if (numbersArray.length === 0) {
        alert("All numbers have been picked!");
        restart();
        return;
    }
    const randomIndex = Math.floor(Math.random() * numbersArray.length);
    const pickedNumber = numbersArray.splice(randomIndex, 1)[0];

    numEl.textContent = pickedNumber;

    let numcell = document.getElementById('cell' + pickedNumber);
    numcell.style.backgroundColor = "#339966";
}

function restart() {
    const userConfirmed = confirm("Are you sure you want to Re-Start the game?");
    if (userConfirmed) {
        location.reload();
    }
}