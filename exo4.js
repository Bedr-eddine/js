function printUntil(max) {
    let i = 0;
    if (max < 0) {
        console.log("boulet!");
        return false;
    } else {
        while (i <= max) {
            console.log(i);
            i++;
            return true;
        }
    }
}

printUntil(-3);
printUntil(5);