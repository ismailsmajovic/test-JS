/*2. Корпа за куповину.
// Постоји низ објеката са свим производима које је неко купио.
//У објекту производа имамо име,
// цена по јединици и количина јединица. Ваш посао је да прођете кроз низ,
// и направимо нови низ објеката
// са именом два пара кључ/вредност и укупном ценом за тај производ.
// Након што сте урадили посао са новим низом, потребно је да збројите све цене
// сваки производ и вратите укупну вредност суме, и додајте ФИКСНИХ 320 трошкова испоруке.
// После свега тога треба да одштампате
// у конзоли следећа изјава: 'Имате ${нум оф продуцтс} у корпи,
//цена испоруке је ${схиппинг цост}, ваш укупни износ је ${тотал}'*/


const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];
/*
  const findSize =(array)=>{
       //const novi = array.length;
        const cenaposte = 360;
    const noviNiz = array.map((objekat)=>{
        return{
            name: objekat.name,
            price:objekat.name * amount
        }
        
    });
    const noviNiz2 = noviNiz.reduce((prev, curr)=>{
         return prev + curr
    })
    return noviNiz2;

    
  }

  console.log(findSize(CART_DATA))
*/

const secondTask = (arr) => {
    const duzina = arr.length;
    const cenaPoste = 360;
    const imeCene = arr.map((value) => {
        return {
            name: value.name, totalPrice: value.price * value.amount
        }
    });
    const sum = imeCene.map((value) => value.totalPrice).reduce((prevValue, currValue) => prevValue + currValue, 360)
    // return sum;
    return `You got ${duzina} in cart, shipping cost is ${cenaPoste}, your total is ${sum}`
};

console.log(secondTask(CART_DATA));

/* 
const secondTask = (arr) => {
    const len = arr.length;
    const shippingCost = 320;
    const namePrice = arr.map((value) => {
        return {
            name: value.name, totalPrice: value.price * value.amount
        }
    });
    const sum = namePrice.map((value) => value.totalPrice).reduce((prevValue, currValue) => prevValue + currValue, 320)
    // return sum;
    return `You got ${len} in cart, shipping cost is ${shippingCost}, your total is ${sum}`
};

console.log(secondTask(CART_DATA));
*/


