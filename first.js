const firstZADtak= ()=>{
    let broj = prompt('unesite broj');

    if (+broj) {
        return console.log(broj * broj)
    }else {
        return console.log('greska')
    }
}

firstZADtak();
