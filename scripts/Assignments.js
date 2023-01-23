import { getPets, getWalkers, getCities} from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

const findCity = (pet, citiesArray) => {
    let petsCity = ""
    for(const city of citiesArray){
        if(city.id === pet.cityId){
            petsCity = city.name
        }
    }
    return petsCity
}

export const Assignments = () => {
    let assignmentHTML = "<ul>"
    

    for (const currentPet of pets) {
        const currentPetsCity = findCity(currentPet, cities)
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetsCity}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

