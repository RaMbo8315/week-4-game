


    var characters = {
        rick: {
            "name": "rick",
            "hp": 150,
            "attack": 10,
            "counter-attack": 20,
            "container": $("<div>"),
            "picture": "assets/images/rick.jpg",
        },

        spike: {
            "name": "spike",
            "hp": 100,
            "attack": 5,
            "counter-attack": 5,
            "container": $("<div>"),
            "picture": "assets/images/spike.jpg",
        },

        governor: {
            "name": "governor",
            "hp": 180,
            "attack": 15,
            "counter-attack": 10,
            "container": $("<div>"),
            "picture": "assets/images/governor.jpg",
        },

        negan: {
            "name": "negan",
            "hp": 200,
            "attack": 20,
            "counter-attack": 15,
            "container": $("<div>"),
            "picture": "assets/images/negan.jpg",
        },
    }

    console.log(characters.negan.hp);



    begin();
$(document).ready(function () {

    var characterId = ["#rick", "#spike", "#governor", "#negan"];
    var yourCharacter;
    var characterChosen;
    var characterValue;
    var enemieCharacter;
    var enemieCharacterChosen;
    var defender;
    var healthPoints;
    var attack;

        function createCharacter (i, location) {
         $(characters[i].container).empty();
        var char = character[i].container;
        var charName = $("<p>").text(characters[i].name);
        var pic = $("<image>").attr('src', characters[i].picture);
        var charHp =  $("<p>").text(characters[i].hp);
        char.append(charName).append(pic).append(charHp);
        $(charDiv).appendTo(location);
    };

    createCharacter(1, "#character-select");

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
    };
        $("#rick").removeClass("ebutton").appendTo("#character-select");
        $("#spike").removeClass("ebutton").appendTo("#character-select");
        $("#governor").removeClass("ebutton").appendTo("#character-select");
        $("#negan").removeClass("ebutton").appendTo("#character-select");
        $("#character-chosen, #enemiesToAttack, #defender").empty();
    }

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
