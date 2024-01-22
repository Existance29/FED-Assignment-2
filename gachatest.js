
//this dictionary contains the chances for different items
var dict = {
    "common1":30,
    "common2":30,
    "uncommon":20,
    "rare":10,
    "epic":5,
    "ultra rare":0.05,
    "?":0.01
}

function pull(){
    //generate a random float from 0-1, multiply by 1000 and divide it by 100.
    //This allows values to be generated from 1-100, with 2 decimal places
    var chance = Math.floor(Math.random() * 10000)*0.01
    var push = 0
    //iterate through dictionary
    for (const [key, value] of Object.entries(dict)) {
        //check which chance bracket the random value belongs to
        if (chance < push+value){
            //return the item
            console.log(chance)
            window.alert(key)
            return key
        }
        push += value
      }
}