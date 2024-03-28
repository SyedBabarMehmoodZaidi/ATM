#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 30000; //Dollar

let myPin = 1234;

console.log("Welcome To Code With Babar Mehmood - ATM Machine")
let pinAnswer = await inquirer.prompt(
[
    {
    name:"pin",
    message:"Enter your pin number",
    type:"number"
}
]

    )

    if(pinAnswer.pin === myPin){
        console.log("Correct Pin Code, Login Successful!")
    
   let operationAns= await inquirer.prompt([{

        name:"operation",
        message:"please select option",
        type:"list",
        choices:["withdraw","check balance","fast cash"]
    }])

    if(operationAns.operation === "withdraw"){
let amountAns = await inquirer.prompt([{
    name:"amount",
    message:"enter your amount",
    type: "number" 
}])



//  myBalance -= amountAns.amount
//  console.log("your remaining balance is:"+" "+myBalance)
    

 if(amountAns.amount > myBalance){
    console.log("Insufficient Balance")
}else{
    myBalance -=amountAns.amount
    console.log("your remaining balance is:"+" "+myBalance)
}

}

    

   else if(operationAns.operation === "check balance"){
        console.log("your balance is:"+" "+ myBalance)
    }

    if(operationAns.operation === "fast cash"){
        let amountAns = await inquirer.prompt([{
            name:"fastcash",
            message:"select your amount",
            type: "list",
            choices:["5000","10000","20000","30000","40000","50000"]
   
        }])

        
    // myBalance -= amountAns.fastcash;
    // console.log("transaction successfull")
    // console.log("your remaining balance is:"+" "+myBalance)
    

    if(amountAns.fastcash > myBalance){
        console.log("Insufficient Balance")
    }else{
        myBalance -=amountAns.fastcash
    console.log("transaction successfull")
        console.log("your remaining balance is:"+" "+myBalance)
    }
    }

    
    }

    
    else{
        console.log("Incorrect pin code, Try Again!")
   }





























