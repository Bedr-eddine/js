function strToWordtab(str, delim) {

    if (typeof str != "string" || typeof delim != "string" || str == null || delim == null) {
        return null
    } else {
        let tableeau = str.split(delim);
        return tableeau;
    }


}
// let stri = strToWordtab("122 334 34", " ");
// console.log(stri);