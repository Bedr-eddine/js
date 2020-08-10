function colle(x, y) {
    let space = "";
    for (v = 0; v < x - 2; v++) {
        space += " "
    }
    if (y == 1) {
        let col = "";
        for (i = 0; i < x - 2; i++) {
            col += "-";
        }
        console.log("o" + col + "o");
    } else if (x == 1) {
        console.log("o");
        for (i = 0; i < y - 2; i++) {
            console.log("|");
        }
        console.log("o");
    } else {
        let col = "";
        for (i = 0; i < x - 2; i++) {
            col += "-";
        }
        console.log("o" + col + "o");
        for (i = 0; i < y - 2; i++) {

            console.log("|" + space + "|");
        }
        col = "";
        for (i = 0; i < x - 2; i++) {
            col += "-";
        }
        console.log("o" + col + "o");

    }

}
colle(9, 8);