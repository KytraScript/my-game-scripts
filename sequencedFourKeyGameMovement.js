let moveRight =  [ [9,3,7,1] , [3,9,1,7] ];  //required sequence to move player one step to the right
let moveLeft  =  [ [1,7,3,9] , [7,1,9,3] ];  //required sequence to move player one step to the left
let moveUp    =  [ [7,9,1,3] , [9,7,3,1] ];  //required sequence to move player one step up
let moveDown  =  [ [3,1,9,7] , [1,3,7,9] ];  //required sequence to move player one step back

let arr = [];

const reducer = (acc, curr) => acc + curr;  //reducer used with arr.reduce() to sum values within array

function playerInput(num){

    if (arr.indexOf(num) >= 0){ //checks for duplicate entries in a string of key presses

        arr = [];
        console.log('CANNOT HAVE DUPLICATE ENTRIES IN STRING OF FOUR KEY PRESSES\n');
        return;
    }

    arr.push(num);

    if (arr.length === 2){
        if (arr[0] + arr[1] === 10){ //checks if first two key presses will create a valid input if allowed to continue

            arr = [];
            console.log('73, 37, 19, 91 are not valid starting pairs. START OVER\n');
            return;
        }
    }

    else if (arr.length === 3){
        if (arr[0] + arr[2] === 10){ //checks if first three key presses will create a valid input if allowed to continue

            arr = [];
            console.log('793, 397, 139, 931 are not valid key pairs. START OVER\n');
            return;
        }
    }

    else if (arr.length === 4 && (arr.reduce(reducer) === 20)){ //checks for validity of the four key string of inputs

        let validEntry = arr;
        arr = [];
        console.log(validEntry);
        console.log('This entry is valid: TRANSLATE TO MOVEMENT\n');
        return validEntry;
    }

}



playerInput(1);
playerInput(9);
//player inputs invalid 2 key string and input is rejected and reset
playerInput(7);
playerInput(1);
playerInput(9);
playerInput(3);
//should log a valid entry for move left
playerInput(7);
playerInput(9);
playerInput(3);
//793 is not a valid entry and this will cancel inputs
playerInput(7);
playerInput(9);
playerInput(1);
playerInput(3);
//player corrects input for move forward and provides the correct sequence
playerInput(7);
playerInput(7);
//player inputs duplicates and input is rejected
playerInput(7);
playerInput(9);
playerInput(7);
//player inputs duplicates before key press string is complete. input is rejected.
playerInput(1);
playerInput(3);
playerInput(7);
playerInput(9);
//player input is accepted and player moves down.


