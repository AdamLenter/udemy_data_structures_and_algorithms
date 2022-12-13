
const disneyCharacters = {
    head: mickey, 
    tail: pluto, 
    length: 4
}

const mickey = {
    name: "Mickey Mouse", 
    characterType: "Mouse", 
    definingFeatures: ["big ears", "yellow shoes", "squeaky voice"], 
    previousCharacter: null, //Present in doubly linked lists only
    nextCharacter: donald
}

const donald = {
    name: "Donald Duck", 
    characterType: "Duck", 
    definingFeatures: ["beret", "blue shirt", "no pants"], 
    previousCharacter: mickey, //See above
    nextCharacter: minnie
}

const minnie = {
    name: "Minnie Mouse", 
    characterType: "Mouse", 
    definingFeatures: ["big ears", "hair bow", "polka dot dress"], 
    previousCharacter: donald, //See comment above
    nextCharacter: goofy
}

const goofy = {
    name: "Goofy", 
    characterType: "Dog(?)", 
    definingFeatures: ["blue hat", "orange shirt", "guh hyuk guh hyuk"], 
    previousCharacter: mickey, //See comment above above
    nextCharacter: pluto
}

const pluto = {
    name: "Minnie Mouse", 
    characterType: "Mouse", 
    definingFeatures: ["big ears", "hair bow", "polka dot dress"], 
    previousCharacter: mickey, //See above
    nextCharacter: goofy
}





