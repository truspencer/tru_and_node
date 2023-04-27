console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Tru",
    hometown: "BROOKLYN!!!",
    favoriteColors: ["purple", " aqua blue", " gold", " burgandy"]
}


function introduceMe (personObj){
    let me = meObj.name
    let home = meObj.hometown
    let color = meObj.favoriteColors
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"
    return `Hi my name is ${me}, and I'm from ${home}. \n My favorite colors are ${color}`
    // print out: "My favorite colors are {your favorite colors}"

};
console.log (introduceMe());
