function spupof(chaine) {
    chaine = chaine.toLowerCase();
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var table = [];
    for (var i = 0; i < chaine.length; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (chaine[i] == alphabet[j]) {

                if (chaine[i] == "z") {
                    table.push("a");
                } else {
                    table.push(alphabet[j + 1]);
                }



            }
        }

    }
    console.log(table.join(""));
}
spupof("AAA");