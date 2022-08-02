const pretvaranje = ()=>{
    const unos = prompt('unesite temperaturu: u C');

   const nesto = unos * 1.8 + 32

   return nesto
}

document.write(pretvaranje())

