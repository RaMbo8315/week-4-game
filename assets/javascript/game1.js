$(document).ready(function () {



    var characters = {
        rick: {
            "hp": 150,
            "attack": 10,
        },

        spike: {
            "hp": 100,
            "attack": 5,
        },

        governor: {
            hp: 180,
            attack: 15,
            picture:"..assets/images/negan.jpg",
        },

        negan: {
            hp: 200,
            attack: 20,
            picture:"..assets/images/negan.jpg",
        },
    }

    console.log(characters.negan.picture);

// console.log(characters.spike);
    var characterImage ;
    var characterId = ["#rick", "#spike", "#governor", "#negan"];
    var yourCharacter;
    var characterChosen;
    var characterValue;
    var enemieCharacter;
    var enemieCharacterChosen;
    var defender;
    var healthPoints;
    var attack;


    $("#rick").append(characters.rick["hp"]);
    $("#spike").append(characters.spike["hp"]);
    $("#governor").append(characters.governor["hp"]);
    $("#negan").append(characters.negan["hp"]);

    function restart() {
        yourCharacter = "";
        yourCharacterChosen = false;
        characterValue = "";
        enemieCharacter = "";
        enemieCharacterChosen = false;
        defender = "";
        healthPoints = "";
        attack = "";
        $("#rick").appendTo("#character-select");
        $("#character-chosen, #enemiesToAttack, #defender").empty();
    }

    $(".chbutton").on("click", function begin() {
        characterValue = this.value;
        if (characterValue === "rick") {
           yourCharacter = characters.rick;
           console.log(yourCharacter);
           $("#rick").appendTo("#character-chosen");
           $("#spike").addClass("ebutton").appendTo("#enemiesToAttack");
           $("#governor").addClass("ebutton").appendTo("#enemiesToAttack");
           $("#negan").addClass("ebutton").appendTo("#enemiesToAttack");
        }

        else if (characterValue === "spike") {
            yourCharacter = characters.spike;
            $("#spike").appendTo(".character-chosen");
            $("#rick").addClass("ebutton").appendTo("#enemiesToAttack");
            $("#governor").addClass("ebutton").appendTo("#enemiesToAttack");
            $("#negan").addClass("ebutton").appendTo("#enemiesToAttack");
        }

        else if (characterValue === "governor") {
            yourCharacter = characters.governor;
            $("#governor").appendTo(".character-chosen");
            $("#rick").addClass("ebutton").appendTo("#enemiesToAttack");
            $("#spike").addClass("ebutton").appendTo("#enemiesToAttack");
            $("#negan").addClass("ebutton").appendTo("#enemiesToAttack");
        }

        else if (characterValue === "negan") {
            yourCharacter = characters.negan;
            $("#negan").appendTo(".character-chosen");
            $("#rick").addClass("ebutton").appendTo("#enemiesToAttack");
            $("#spike").addClass("ebutton").appendTo("#enemiesToAttack");
            $("#governor").addClass("ebutton").appendTo("#enemiesToAttack");
        }

        console.log(characterValue);
        
    })

    $("#restart").on("click", function () {
        restart();
        begin();
    });




});