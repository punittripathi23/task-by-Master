function factorialsInt(number) {
    let fectora = 1 ;
    for (i = number; i > 0; i--){
        fectora *= i;
    } return fectora;
}
console.log(factorialsInt(5));