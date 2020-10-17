    // Create Dino Constructor
    const Dino = function(object, image) {
        this.object = object;
        this.image = image;   
    }
    // Create Dino Objects
    // get JSON file and build constructor    
    var tiles = ["initial"];
    var getFile = function (callback, UserData) {        
        $.getJSON("dino.json")
        .done(function(data) {
            const Dinosaur = data;
            // Create Dino Objects
            for(i = 0; i < 8; i++) {
                let name = Dinosaur["Dinos"][i];
                tiles[i] = new Dino(name, 'images/'+ name.species + '.png');
            }
            
            tiles.splice(4,0,new Human(UserData))
            callback();
        });   
    }; 
    // Create Human Object
    const Human = function(object) {
        this.name = object.name;
        this.heightFeet = object.heightFeet;
        this.heightInches = object.heightInches;
        this.weight = object.weight;
        this.diet = object.diet;
    }
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
// first fact: comparing weights
Dino.prototype.weightFact = function() {
    let weightRatio= Math.round(this.object.weight / tiles[4].weight).toFixed(2);
    if (weightRatio > 1) {
        return `${this.object.species} used to weigh around ${weightRatio} times more than you!!`;
    } else {
        return `You are ${1 / weightRatio} times heavier than ${this.object.species} was`;
    }
};
// second fact: comparing heights
Dino.prototype.heightFact = function() {
    let heightRatio = this.object.height / (tiles[4].heightFeet*12 + tiles[4].heightInches);
    heightRatio = Math.round(heightRatio).toFixed(2);
    if (heightRatio > 1) {
        return `${this.object.species} was around ${heightRatio} times taller than you!!`
    } else {
        return `You are ${1 / heightRatio} times larger than ${this.object.species} used to be`;
    }
}
// third fact: comparing diet
Dino.prototype.dietFact = function() {
    if (tiles[4].diet === this.object.diet) {
        return `Just like you, ${this.object.species} was also ${this.object.diet}`;
    } else {
        return `Unlike you, ${this.object.species} was ${this.object.diet}`;
    }
}

// fourth fact: timeperiod
Dino.prototype.timeFact = function() {
    return `${this.object.species} existed in the ${this.object.when} time period`;
}

// fifth fact: location related
Dino.prototype.locationFact = function() {
    return `The prime location where ${this.object.species} was found was ${this.object.location}`;
}

// sixth fact: given fact
Dino.prototype.givenFact = function() {
    return this.object.fact;
}
Dino.prototype.getfact = function() {
    let randomNumber = Math.ceil(Math.random() * 6);
    switch(randomNumber) {
        case 1:
            console.log(this); 
            return(this.weightFact());
        case 2:
            console.log(this);  
            return(this.heightFact());
        case 3:
            console.log(this);
            return(this.dietFact());
        case 4:
            console.log(this);
            return(this.timeFact());
        case 5:
            console.log(this);
            return(this.locationFact());
        case 6:
            console.log(this);
            return(this.givenFact());
    }
}
    // Generate Tiles for each Dino in Array
    var innerHTML = function() {
        let grid = document.getElementById("grid");
        let hide = document.getElementById("dino-compare");
        let msg = document.getElementById("grid").textContent;
        // Remove form
        hide.style.display = "none";
        for (let index = 0; index < 9; index++) {
            if (index === 4) {
                msg+=`
                <div class="grid-item">
                <h4>${tiles[index].name}</h4>
                    <img src="./images/human.png">
                </div>`;
                continue;
            }
            msg+=`
            <div class="grid-item">
                <h4>${tiles[index].object.species}</h4>
                <img src="./images/${tiles[index].object.species}.png">
                <p>${tiles[index].getfact()}
            </div>`;
        }
        grid.innerHTML = msg;
    }     

    // Remove form from screen

// Initial web
// On button click, prepare and display infographic
document.getElementById("btn").onclick = function() {
    let human = (function() {
        return {
            name: document.querySelector('#name').value,
            heightFeet: parseInt(document.querySelector('#feet').value),
            heightInches: parseInt(document.querySelector('#inches').value),
            weight: parseInt(document.querySelector('#weight').value),
            diet: document.querySelector('#diet').value
        }
    })();
    getFile(innerHTML, human);

}