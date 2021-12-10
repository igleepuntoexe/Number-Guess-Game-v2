/*Welcome to the Guess the Number Game. Made by @Igleepuntoexe on GitHub. 
If you have any questions, you can consult me through my gmail: adriiglesias2016@gmail.com 
or you can talk to me through discord, my username is: igle.exe # 8778. Thanks for reading this little snippet <3*/

//Declaration of variables for the name and options
alert("Welcome to the Game of Guess the Number gentleman, before continuing tell me your name")
let name = prompt("Tell me your name")
alert("Choose an option")
let opt = Number(prompt("1) Easy level / 2) Middle level / 3) Hard level / 4) IA vs Human / 5) Exit"))
//We create an array in which we will enter the numbers that we enter in the prompts on lines 20, 47 and 71 and also for the IA vs human
let data = []
//We create a new array to which we are going to add the numbers that exceed the limit
let ndata = []
//Create a variable attempts to limit the number of failures in the levels and we set it to 1
let attempt = 1
//Now we make an if which is where the whole process is going to take place
if (opt == 1){
    /*We declare the variable "random" so that it gives us a random number that we can work with and we put the Math.floor on it 
    to give us a number without decimals.*/
    let random = Math.floor(Math.random(1,10)*10);
    alert("Welcome to the Easy Level")
    //We indicate that the code is executed until the attempts are 3 or less than 3
    while(attempt <= 3){
        //Here we indicate in which number of attempts in which the contestant is
        let num = Number(prompt("This is your try number: " + attempt + "º. Tell me a number between 1 and 10:"))
        if (num <= 10){
            if (num < random){
                alert("The number is higher");
                //We do data.push(num) to add the numbers to the array
                data.push(num)
            }else if(num > random){
                alert("The number is lower");
                //We do data.push(num) to add the numbers to the array
                data.push(num)
            }else if(num == random){
                //We do data.push(num) to add the numbers to the array
                data.push(num)
                alert("You got it!")
                alert("Congratulations " + name + ". You are the best <3")
                /*Now what we do is that the numbers entered in the array appear and by putting 
                "date [date.lenght - 1]" the last position of the array will automatically appear, 
                which in this case would be the last number that is correct/guessed*/
                alert("You used these numbers to find the solution " + data + ", and the correcty number was " + data[data.length -1])
                //Here we indicate the exceeded number entered by the user
                alert("Invalid number used: " + ndata)
                //We add the break so that when we guess the number it does not continue executing
                break;
            }
            //Doing this we add the attempts
            attempt++
        //We do 2 more Else If in case the entered number exceeds the limit
        }else if (num > 10 && num <= 50){
            alert("That number is not valid for this level. Better go to the Middle Level")
            //We do ndata.push(num) to add the numbers to the array
            ndata.push(num)
        }else if (num > 50){
            alert("That number is not valid for this level. Better go to the Hard Level")
            //We do ndata.push(num) to add the numbers to the array
            ndata.push(num)
        }

        //If you pass the attempts, we will get this message with the correct answer and the numbers exceeded
        if(attempt > 3){
            alert("The correct number is: " + random + " and these numbers: " + ndata + " exceed the limits")
        }
    }
}else if(opt == 2){
    /*We declare the variable "random" so that it gives us a random number that we can work with and we put the Math.floor on it 
    to give us a number without decimals.*/
    let random = Math.floor(Math.random(1,50)*50);
    alert("Welcome to the Middle Level")
    //We indicate that the code is executed until the attempts are 5 or less than 5
    while(attempt <= 5){
        //Here we indicate in which number of attempts in which the contestant is
        let num = Number(prompt("This is your try number: " + attempt + "º. Tell me a number between 1 and 50:"))
        if (num <= 50){
            if (num < random){
                alert("The number is higher:");
                //We do data.push(num) to add the numbers to the array
                data.push(num)
            }else if(num > random){
                alert("The number is lower");
                //We do data.push(num) to add the numbers to the array
                data.push(num)
            }else if(num == random){
                data.push(num)
                alert("You got it!")
                alert("Congratulations " + name + ". You are the best <3")
                /*Now what we do is that the numbers entered in the array appear and by putting 
                "date [date.lenght - 1]" the last position of the array will automatically appear, 
                which in this case would be the last number that is correct/guessed*/
                alert("You used these numbers to find the solution " + data + ", and the correcty number was " + data[data.length -1])
                //Here we indicate the exceeded number entered by the user
                alert("Invalid number used: " + ndata)
                //We add the break so that when we guess the number it does not continue executing
                break;
            }
            //Doing this we add the attempts
            attempt++

        //We do 1 more Else If in case the entered number exceeds the limit
        }else if (num > 50){
            alert("That number is not valid for this level. Better go to the Hard Level")
            //We do ndata.push(num) to add the numbers to the array
            ndata.push(num)
        }

        //If you pass the attempts, we will get this message with the correct answer and the numbers exceeded
        if(attempt > 5){
            alert("The correct number is: " + random + " and these numbers: " + ndata + " exceed the limits")
        }
    }
}else if(opt == 3){
     /*We declare the variable "random" so that it gives us a random number that we can work with and we put the Math.floor on it 
    to give us a number without decimals.*/
    let random = Math.floor(Math.random(1,100)*100)
    alert("Welcome to the Hard Level")
    //We indicate that the code is executed until the attempts are 8 or less than 8
    while(attempt <= 8){
        //Here we indicate in which number of attempts in which the contestant is
        let num = Number(prompt("This is your try number: " + attempt + "º. Tell me a number between 1 and 100:"))
        if (num <= 100){ 
            if (num < random){
                alert("The number is higher")
                //We do data.push(num) to add the numbers to the array
                data.push(num)
            }else if(num > random){
                alert("The number is lower")
                //We do data.push(num) to add the numbers to the array
                data.push(num)
            }else if(num == random){
                alert("You got it!")
                //We do data.push(num) to add the numbers to the array
                data.push(num)
                alert("Congratulations " + name + ". You are the best <3")
                /*Now what we do is that the numbers entered in the array appear and by putting 
                "date [date.lenght - 1]" the last position of the array will automatically appear, 
                which in this case would be the last number that is correct/guessed*/
                alert("You used these numbers to find the solution " + data + ", and the correcty number was " + data[data.length -1])
                //Here we indicate the exceeded number entered by the user
                alert("Invalid number used: " + ndata)
                //We add the break so that when we guess the number it does not continue executing
                break;
            }
            //Doing this we add the attempts
            attempt++

        //We do 1 more Else If in case the entered number exceeds the limit
        }else if(num > 100){
            alert("The number exceeds the limit")
            //We do ndata.push(num) to add the numbers to the array
            ndata.push(num)
        }

        //If you pass the attempts, we will get this message with the correct answer and the numbers exceeded
        if(attempt > 8){
            alert("The correct number is: " + random + " and these numbers: " + ndata + " exceed the limits")
        }
    }
}else if(opt == 4){
    alert("Welcome to IA vs Human")
    alert("You have to think of a number and the IA will put random numbers until it finds it to indicate that it has found" + 
    "it put an = to indicate that the number is less put a < and to indicate that the number is greater put a >")
    while(true){
        let random = Math.floor(Math.random(1,10)*10);
        let caracter = prompt("Is this your number? " + random)
        //To indicate to the IA that the number it has chosen randomly is the correct one, we put an "="
        if(caracter == "="){
            alert("The IA guessed the message")
            //We do data.push(num) to add the numbers to the array
            data.push(random)
            /*Now what we do is that the numbers entered in the array appear and by putting 
            "date [date.lenght - 1]" the last position of the array will automatically appear, 
            which in this case would be the last number that is correct/guessed*/
            alert("The IA use this numbers to find the solution " + data + ", and the correcty number was " + data[data.length -1])
            //We add the break so that when we guess the number it does not continue executing
            break;
        }else if(caracter == "<"){ //To tell the IA that the number it has chosen randomly is the lowest we think we put a "<"
            alert("The number is lower")
            //We do data.push(num) to add the numbers to the array
            data.push(random)
        }else if(caracter == ">"){ //To indicate to the IA that the number it has chosen randomly is the highest we think we put a ">"
            alert("The number is higher")
            //We do data.push(num) to add the numbers to the array
            data.push(random)
        }
    }
}else if(opt == 5){
    alert("Bye Bye")
}else if(opt > 5){
    alert("Option doesn't exist")
}
