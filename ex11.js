func = function(chaine) {
    uc = chaine.charAt(0).toUpperCase();
    reste = chaine.substr(1, chaine.length);
    console.log(uc + reste);

}

func("qlqmots");