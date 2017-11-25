


    var characters = [
          {
            "name": "rick",
            "hp": 150,
            "attack": 10,
            "counter-attack": 20,
            "container": $("<div class='character' value='rick'>"),
            "picture": "assets/images/rick.jpg",
         },

         {
            "name": "spike",
            "hp": 100,
            "attack": 5,
            "counter-attack": 5,
            "container": $("<div class='character' value='spike'>"),
            "picture": "assets/images/spikezom.jpg",
        },

         {
            "name": "governor",
            "hp": 180,
            "attack": 15,
            "counter-attack": 10,
            "container": $("<div class='character' value='governor'>"),
            "picture": "assets/images/governor.jpg",
        },

        {
            "name": "negan",
            "hp": 200,
            "attack": 20,
            "counter-attack": 15,
            "container": $("<div class='character' value='negan'>"),
            "picture": "assets/images/negan.jpg",
        },
    ]
         

    console.log(characters[1].picture);
  
$(document).ready(function () {

    var characterId = ["#rick", "#spike", "#governor", "#negan"];
    var yourCharacter;
    var characterChosen;
    var enemieCharacter;
    var enemieCharacterChosen;
    var defender;
    var healthPoints;
    var attack;

    begin();
    
    displayCharacter();


        function createCharacter (i, location) {
         $(characters[i].container).empty();
        var char = characters[i].container;
        var charName = $("<p class='charName'>").text(characters[i].name);
        var pic = $("<img>").attr('src', characters[i].picture);
        var charHp = $("<p class='charHp'>").text("HP: " + characters[i].hp);
        var charDiv = char.append(charName).append(pic).append(charHp);
        $(charDiv).appendTo(location);
    };

    function displayCharacter () {
        for (var j = 0; j < characters.length; j++) {
            createCharacter(j, "#character-select");
        }
    };

    $("#character-select").on("click", function() {
        characterChosen = this.value;
        if (!enemieCharacterChosen) {
            displayCharacter(j, "#enemiesToAttack");
        }
    });

    function restart() {
        yourCharacter = "";
        yourCharacterChosen = false;
        characterValue = "";
        enemieCharacter = "";
        enemieCharacterChosen = false;
        defender = "";
        healthPoints = "";
        attack = "";
    };
    

    function begin() {
        $(".chbutton").on("click", function () {
            characterValue = this.value;
            if (characterValue === "rick") {
                yourCharacter = characters.rick;
                console.log(yourCharacter);
                $("#rick").appendTo("#character-chosen");
                $("#spike").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#governor").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#negan").addClass("ebutton").appendTo("#enemiesToAttack");
            } else if (characterValue === "spike") {
                yourCharacter = characters.spike;
                $("#spike").appendTo(".character-chosen");
                $("#rick").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#governor").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#negan").addClass("ebutton").appendTo("#enemiesToAttack");
            } else if (characterValue === "governor") {
                yourCharacter = characters.governor;
                $("#governor").appendTo(".character-chosen");
                $("#rick").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#spike").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#negan").addClass("ebutton").appendTo("#enemiesToAttack");
            } else if (characterValue === "negan") {
                yourCharacter = characters.negan;
                $("#negan").appendTo(".character-chosen");
                $("#rick").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#spike").addClass("ebutton").appendTo("#enemiesToAttack");
                $("#governor").addClass("ebutton").appendTo("#enemiesToAttack");
            }

            console.log(characterValue);

        });
    }; 


    $("#restart").on("click", function () {
        restart();
    });
});