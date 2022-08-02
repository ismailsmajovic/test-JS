/*
Преузми податке помоћу асинхронизованог јавасцрипт-а (преузимање или асинхронизација/чекање) из овог АПИ-ја
//хттпс://рекрес.ин/апи/усерс, где треба да додате КУЕРИ парам који се зове страница и његова вредност треба да буде 2
//Након што успешно преузмете податке, мапирајте тај низ у низ само са подацима корисника
*/

//const BASe_URl ='https://reqres.in/api/users/';




const thirdTask = async () => {
    const prvi = await fetch("https://reqres.in/api/users?page=2");
    const korisnici = await prvi.json();
    return korisnici;
}

thirdTask()
     //.then((arg2) => arg2)
    //.then((arg)=> console.log(arg))
    //.catch(()=> `this is problem`);

    .then((arg1) => arg1)
    .then((arg2) => console.log(arg2.data))
    .catch(() => `Ovo je problem.`)
    

    