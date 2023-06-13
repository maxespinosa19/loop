// const total=1000000;


// for (let i =0; i<= total ; i++ ) {
//     console.log(i);
// }

function firstLoop(total){
    
    for(let i =0; i <= total; i++) {
     console.log(i);
    }

}
function fingerLoop(){

    const totalFinger = 10;
    
    for (let i = 0; i < totalFinger; i++) {
        let sentence = ' i have '+(i+1)+' fingers '
        console.log (sentence);
    }
}

function arrayLoop() {

    const prime = [2,3,5,7,11,13,17,19,23,29,31,37, 41, 43, 47];
    for (let i = 0; i < prime.length; i++) {
        const result = prime[i];

        
        console.log(result);

    }

}
arrayLoop();