function convert(nbr) {

    if (nbr > 1000)
        console.log("vive le Javascript");
    else {
        nbr = nbr.toString();
        for (let i = 0; i < nbr.length; i++) {
            console.log(nbr.charCodeAt(i));
        }

    }

}
// convert(100);