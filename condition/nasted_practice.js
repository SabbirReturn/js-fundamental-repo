let myScore = 85;
let friendScore =33;
if(myScore>80){
    if(friendScore> 80){
        console.log("Go for a lunch")
    }
    else{
        if(friendScore<80 & friendScore>=60){
            console.log("Good luck next time");
        }
        else{
            if(friendScore<60 & friendScore>=40){
                console.log("Friend's message unseen");
            }
            else{
                console.log("Block your friend")
            }
        }
    }
}
else{
    console.log("Go to home and sleep and act sad");
}
