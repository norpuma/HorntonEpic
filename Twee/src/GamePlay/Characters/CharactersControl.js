var characters = []
State.variables.characters = characters

var protagonist = undefined
function setProtagonist(protagonistChar){
    protagonist = protagonistChar
    State.variables.protagonist = protagonist
}
setProtagonist(new Protagonist("You", Gender.MALE))

var testChar = new BaseCharacter("Melissa", Gender.FEMALE)

const PROTAGONIST = "PROTAGONIST"
const TEST_CHAR = "TEST_CHAR"
function getCharacterByName(id){
    switch(id){
        case PROTAGONIST:
            return protagonist
        case TEST_CHAR:
            return testChar
    }
}

// TODO: Implement functions that find characters according to some specific criteria.
// function getCharacterByTrait(){}
// function getCharacterByName(){

