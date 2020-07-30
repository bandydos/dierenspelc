$(document).ready(() => {
    $('#p-message').hide();
    $('#table-animals').hide();
    $('#btn-submit').click(() => {
        const animals = getAnimals();
        console.log(animals);

        if (checkAnimal()) {
            succeed();
        }
        else {
            fail();
        }
    })
})

var animals = [];

const getAnimals = () => {
    const iAnimal = document.getElementById('input-animal').value;
    animals.push(iAnimal);

    return animals;
}

const checkLetters = (lastAnimal, newAnimal) => {
    if (lastAnimal[lastAnimal.length - 1] == newAnimal[0]) {
        return true;
    }

    return false;
}

const checkUnique = (newAnimal) => {
    for (let i = 0; i < animals.length - 1; i++) { // l-1 for last new insertion.
        if (newAnimal == animals[i]) {
            return false;
        }
    }

    return true;
}

// Expansion: get possible animals from server.
const acceptedAnimals = ['aap', 'paard', 'dromedaris', 'slang', 'papegaai', 'gorilla', 'arend']; // Example animals.

const checkAccepted = (newAnimal) => {
    for (let i = 0; i < acceptedAnimals.length; i++) {
        if (newAnimal == acceptedAnimals[i]) {
            return true;
        }
    }

    return false;
}

const checkAnimal = () => {
    const lastAnimal = animals[animals.length - 2];
    const newAnimal = animals[animals.length - 1];

    if (animals.length < 2 && checkAccepted(newAnimal)) { // When there is only 1 animal in array.
        return true;
    }
    if (animals.length > 1) {
        if (checkLetters(lastAnimal, newAnimal) && checkUnique(newAnimal) && checkAccepted(newAnimal)) {
            return true;
        }
    }

    return false;
}


const succeed = () => {
    $('#table-animals tbody tr').remove();
    $('#p-message').hide();
    $('#table-animals').show();
    for (let i = 0; i < animals.length; i++) {
        $('#tbody-animals').append(`<tr><td>${i + 1}</td><td>${animals[i]}</td></tr>`);
    }
}

const fail = () => {
    $('#table-animals tbody tr').remove();
    $('#table-animals').hide();
    $('#p-message').show();
    $('#p-message').text('Double or unacceptable animal / wrong letter.')

    animals = [];
}