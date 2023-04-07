// Hoisting

// Function Declaration

function movie() {
    console.log('The Matrix')
}

movie()

// Function Expression

const car = function () {
    console.log('Tesla')
}

car()

const truck = car    // Constante truck virou car

truck()

