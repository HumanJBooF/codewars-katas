// The idea for this Kata came from 9gag today.here

// You'll have to translate a string to Pilot's alphabet(NATO phonetic alphabet) wiki.

// Like this:

// Input: If you can read

// Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// Some notes

// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.



const to_nato = words => {
    let arr = [];
    words.toLowerCase().split('').map(val => {
        switch (val) {
            case "a":
                return arr.push("Alfa");
            case "b":
                return arr.push("Bravo");
            case "c":
                return arr.push("Charlie");
            case "d":
                return arr.push("Delta");
            case "e":
                return arr.push("Echo");
            case "f":
                return arr.push("Foxtrot");
            case "g":
                return arr.push("Golf");
            case "h":
                return arr.push("Hotel");
            case "i":
                return arr.push("India");
            case "j":
                return arr.push("Juliett");
            case "k":
                return arr.push("Kilo");
            case "l":
                return arr.push("Lima");
            case "m":
                return arr.push("Mike");
            case "n":
                return arr.push("November");
            case "o":
                return arr.push("Oscar");
            case "p":
                return arr.push("Papa");
            case "q":
                return arr.push("Quebec");
            case "r":
                return arr.push("Romeo");
            case "s":
                return arr.push("Sierra");
            case "t":
                return arr.push("Tango");
            case "u":
                return arr.push("Uniform");
            case "v":
                return arr.push("Victor");
            case "w":
                return arr.push("Whiskey");
            case "x":
                return arr.push("Xray");
            case "y":
                return arr.push("Yankee");
            case "z":
                return arr.push("Zulu");
            case ' ':
                return null;
            default:
                return arr.push(val);
        }
    })
    return arr.join(' ');
}