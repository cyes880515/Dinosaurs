    $.getJSON("dino.json", function(data) {
        const Dinosaur = data;        
        console.log(Dinosaur);
    })
    // Create Dino Constructor
    function Dino(name, species,image) {
        this.name = name;
        this.species = species;
        this.image = image;
    }
    // Create Dino Objects
    let anklyosaurus = new Dino('anklyosaurus', 'herbavor','url("https://upload.cc/i1/2020/09/12/G3dnvu.png")');
    let brachiosaurus = new Dino('brachiosaurus', 'herbavor','url("https://upload.cc/i1/2020/09/12/xKHZvE.png")');
    let elasmosaurus = new Dino('elasmosaurus', 'carnivor','url("https://upload.cc/i1/2020/09/12/xjMRGY.png")');
    let pteranodon = new Dino('pteranodon', 'carnivor','url("https://upload.cc/i1/2020/09/12/Clm8wg.png")');
    let stegosaurus = new Dino('stegosaurus', 'herbavor','url("https://upload.cc/i1/2020/09/12/1QmBDN.png")');
    let triceratops = new Dino('triceratops', 'herbavor','url("https://upload.cc/i1/2020/09/12/9JHyaG.png")');
    let tyrannosaurusRex = new Dino('tyrannosaurusRex', 'herbavor','url("https://upload.cc/i1/2020/09/12/3ogRLA.png")');
    let pigeon = new Dino('pigeon', 'omnivor','url("https://upload.cc/i1/2020/09/12/7UCK2k.png")');
    // Create Human Object
    let human = new Dino('', '','url("https://upload.cc/i1/2020/09/12/hfKSz0.png")');
    // Use IIFE to get human data from form
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    const tiles = [
        anklyosaurus,
        brachiosaurus,
        elasmosaurus,
        pteranodon,
        human,
        stegosaurus,
        triceratops,
        tyrannosaurusRex,
        pigeon
     ]
    // Rearrange the Array    
    function Rearrange(array) {
        for (let i = array.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            if ((i === 4) || (j === 4)) continue;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
    var btn = document.getElementById("btn");
    btn.onclick = function() {
        let hide = document.getElementById("dino-compare");
        let name = document.getElementById("name");
        let gird = document.getElementById("grid");
        // Remove form
        hide.style.display = "none";
        // Add grid into the web
        grid.style.margin = "0 auto";
        grid.style.width = "1000px";
        grid.style.height = "800px";
        grid.innerHTML =`
        <div class="grid-item">></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>`;
        // Rearrange the array
        Rearrange(tiles);
        // Fill in Random dinosaur data and image
        for(i = 0; i<tiles.length;i++) {
            let s = document.getElementsByClassName("grid-item");
            s[i].innerHTML = tiles[i].name + tiles[i].species;
            s[i].style.backgroundImage = tiles[i].image;
            s[i].style.fontFamily = "'Oswald', sans-serif";
        }
    }