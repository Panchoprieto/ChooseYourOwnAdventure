// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    levels: {

        start: {
            music: "../music/mcMenu.mp3",
            background_image: "../img/mcStart.png",
            message: "Embark on your journey but keep in mind your actions have consequences.",
            choices: [
                {
                    text: "Let's Begin",
                    nextLevel: "one",
                },
            ]
        },
        

        one: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftOne.jpg",
            message: "You spawn in a new world near a cave entrance and a forest. Where do you go?",
            choices: [
                {
                    text: "Enter the Cave",
                    nextLevel: "cave",
                },
                
                {
                    text: "Go into the Forest ",
                    nextLevel: "forest",
                },
            ]
        },
        

        cave: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "How do you intend to mine for resources?",
            choices: [
                {
                    text: "My fists",
                    nextLevel: "hands",
                },

                {
                    text: "Shoot",
                    nextLevel: "gb",
                },
            ]
        },
        
        gb: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "Go back?",
            choices: [
                {
                    text: "yes",
                    nextLevel: "one",
                },

                {
                    text: "No",
                    nextLevel: "hands",
                },
            ]
        },
        
        hands: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "You collect nothing but dirt and gravel with the occasional flint",
            choices: [
                {
                    text: "No Iron?",
                    nextLevel: "iron",
                },
            ]
        },
        
        iron: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "You dont have a pickaxe.",
            choices: [
                {
                    text: "I fail to see the problem",
                    nextLevel: "fail",
                },
            ]
        },
        
        fail: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "Go back",
            choices: [
                {
                    text: "No",
                    nextLevel: "no",
                },

                {
                    text: "Okay",
                    nextLevel: "one",
                },
            ]
        },
        
        no: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "How do you intend to mine?",
            choices: [
                {
                    text: "and if I don't want to mine?",
                    nextLevel: "mine",
                },
            ]
        },
        
        mine: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "Oh look a creeper",
            choices: [
                {
                    text: "What?",
                    nextLevel: "boom",
                },
            ]
        },
        
        boom: {
            music: "../music/mcCave.mp3",
            message: "Your stubbornness caused you to be ill-prepared for combat and thus you were blown up by a hostile mob.",
            choices: [
                {
                    text: "Try again",
                    nextLevel: "startTwo",
                },
            ]
        },
        
        startTwo: {
            music: "../music/mcMenu.mp3",
            background_image: "../img/mcStart.png",
            message: "Embark on your journey but keep in mind your actions have consequences.",
            choices: [
                {
                    text: "Let's Begin",
                    nextLevel: "oneTwo",
                },
            ]
        },
        
        oneTwo: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftOne.jpg",
            message: "You spawn in a new world near a cave entrance and a forest. Where do you go?",
            choices: [
                {
                    text: "Enter the Cave",
                    nextLevel: "caveTwo",
                },
                
                {
                    text: "Go into the Forest ",
                    nextLevel: "forest",
                },
            ]
        },
        
        caveTwo: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "Did you not learn your lesson from before?",
            choices: [
                {
                    text: "no",
                    nextLevel: "noTwo",
                },

                {
                    text: "You're right I'm sorry",
                    nextLevel: "sorry",
                },
            ]
        },
        
        sorry: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "That's right, now restart before I tell your mom you're playing Minecraft past 8:30",
            choices: [
                {
                    text: "Yes sir",
                    nextLevel: "oneTwo",
                },
            ]
        },
        
        noTwo: {
            music: "../music/mcCave.mp3",
            background_image: "../img/minecraftCave.png",
            message: "You're done.",
            choices: [
                {
                    text: "What?",
                    nextLevel: "gameEndBad",
                },
            ]
        },
        
        
        
        forest: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftForest.jpg",
            message: "You gathered up plenty of wood. what next?",
            choices: [
                {
                    text: "build a house",
                    nextLevel: "house",
                },

                {
                    text: "go mine in the cave",
                    nextLevel: "cavemine",
                },
            ]
        },
        
        house: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftForest.png",
            message: "Would you not rather go mine?",
            choices: [
                {
                    text: "No, I want a house",
                    nextLevel: "houseTwo",
                },

                {
                    text: "okay fine",
                    nextLevel: "cavemine",
                },
            ]
        },
        
        houseTwo: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftHouse.png",
            message: "You built a house, what comes next?",
            choices: [
                {
                    text: "expand the house",
                    nextLevel: "expand",
                },

                {
                    text: "go mine",
                    nextLevel: "cavemine",
                },
            ]
        },
        
        expand: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftHouse.png",
            message: "Really?",
            choices: [
                {
                    text: "What's the problem with that?",
                    nextLevel: "expandTwo",
                },

                {
                    text: "Nah, let's mine",
                    nextLevel: "cavemine",
                },
            ]
        },
        
        expandTwo: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftSM.jpg",
            message: "You made a small mansion.",
            choices: [
                {
                    text: "Expand more",
                    nextLevel: "expandThree",
                },
            ]
        },
        
        expandThree: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftCastle.jpg",
            message: "You weren't satisfied with a small mansion? Fine here's a full-blown castle.",
            choices: [
                {
                    text: "expand",
                    nextLevel: "expandFour",
                },
            ]
        },
        
        expandFour: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftVillage.png",
            message: "You don't even need that much room, but that's none of my business. Here's a village.",
            choices: [
                {
                    text: "Perfect",
                    nextLevel: "perfect",
                },
            ]
        },
        
        perfect: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftVillage.png",
            message: "What now?",
            choices: [
                {
                    text: "Run my barren village like a democracy",
                    nextLevel: "run",
                },
            ]
        },
        
        run: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftVillage.png",
            message: "Really?",
            choices: [
                {
                    text: "No, I'm making it a communist state",
                    nextLevel: "commie",
                },
            ]
        },
        
        commie: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftVillage.png",
            message: "Have fun with that.",
            choices: [
                {
                    text: "I Will",
                    nextLevel: "gameEndNeutral",
                },
            ]
        },
        
        
        cavemine: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftCave.png",
            message: "You go mining in the cave and manage to find enough diamonds to make yourself a full set of diamond armor.",
            choices: [
                {
                    text: "Lets go fight the Ender Dragon",
                    nextLevel: "endDragon",
                },
            ]
        },
        
        endDragon: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftCave.png",
            message: "Are you sure?",
            choices: [
                {
                    text: "yes",
                    nextLevel: "fight",
                },
            ]
        },
        
        fight: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftEnd.png",
            message: "You somehow made your way to the end and have come face to face with the Ender Dragon.",
            choices: [
                {
                    text: "Use my sword",
                    nextLevel: "gameEndGoodbad",
                },

                {
                    text: "Use my bow",
                    nextLevel: "gameEndGoodGood",
                },
            ]
        },
        
        
        
        gameEndGoodGood: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftEndGood.png",
            message: "You did it, you beat the dragon and won! Care to try your hand at another route?",
            choices: [
                {
                    text: "try again",
                    nextLevel: "start",
                },
            ]
        },
        
        gameEndGoodbad: {
            message: "You got launched by the dragon as soon as you got close and fell into the void",
            choices: [
                {
                    text: "try again",
                    nextLevel: "start",
                },
            ]
        },
        
        gameEndNeutral: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecraftVillage.png",
            message: "Start again?",
            choices: [
                {
                    text: "try again",
                    nextLevel: "start",
                },
            ]
        },
        
        gameEndBad: {
            music: "../music/mcAll.mp3",
            background_image: "../img/minecratBadEnd.png",
            message: "Minecraft has crashed!",
            choices: [
                {
                    text: "Try again",
                    nextLevel: "start",
                },
            ]
        },
        
    }
};








{
//Don't mind me just here to make thinds easier
// : {
//             background_image: "",
//             music: "",
//             message: "",
//             choices: [
//                 {
//                     text: "",
//                     nextLevel: "",
//                 },
//                 {
//                     text: "",
//                     nextLevel: "",
//                 },
//             ]
//         },


// music: "/music/mcCave.mp3",
//             background_image: "/img/minecraftCave.png",
}