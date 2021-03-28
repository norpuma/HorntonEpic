/*
    Ethereal Protagonist
    Incarnate Protagonist
*/

function createEtherealProtagonist(gender){
    let localProtagonist = new Protagonist("You", "Your", gender)
    localProtagonist.set()
    setProtagonist(localProtagonist)
}

function createIncarnateProtagonist(standardName, standardNamePossessive, gender){
    let localProtagonist = new Protagonist(standardName, standardNamePossessive, gender)
    setProtagonist(localProtagonist)
}
