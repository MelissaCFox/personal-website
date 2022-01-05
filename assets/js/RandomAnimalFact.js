const animalFacts = [
    "Binturong urine is often described as reminiscent of buttered popcorn or corn chips!",
    "A lion's roar can be heard up to 5 miles away!",
    "Brown bears can smell food up to 20 miles away and up to 3 feet underground!",
    "Giant Anteaters can eat over 30,000 insects a day!",
    "Clouded leopards have ankles that can rotate nearly 180 degrees, allowing them to climb down trees head first!",
    "Cheetah spots are less dense than surrounding fur, which helps with thermoregulation!",
    "Tigers typically sleep 16 hours a day!",
    "Lions are the only truly social cats!",
    "Moose are excellent swimmers - sometimes swimming more than 10 miles at a time!",
    "Reindeer have tendons in their feet that snap and audibly click when they walk!",
    "Musk Ox males have skulls that are 3 inches thick!",
    "Musk ox fur (qiviut) is warmer than wool and softer than cashmere!"
]

const animalFactContainer = document.querySelector("#animalFact")

const RandomAnimalFact = () => {
    animalFactContainer.innerHTML = animalFacts[Math.floor(Math.random()*animalFacts.length)]
}

RandomAnimalFact()