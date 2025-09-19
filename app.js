// ABOUT STACK 
// function hello(){
//     console.log("Hello func");
// }
// function demo(){
//     console.log("Demo func");
//     hello();
// }
// console.log("Start");
// demo();
// console.log("End");

function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans= two()+one();
    console.log(ans);
}
three();


// JS is single thread
// JS-----BROWSER(to wait)








// CALLBACK HELL (BCZ OF NESTING)
// -------------------------------------------------------------------------
h1=document.querySelector("h1");

function changeColor(color,delay,ncc)
{
    setTimeout(()=>{
        h1.style.color=color;
        if(ncc) ncc();

    },delay);
};

changeColor("red",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("pink",1000,()=>{
                changeColor("purple",1000)
            });
        });
    });
});



// ---------------------------------------------------------------------------
function db(data,success,failure){
    let is=Math.floor(Math.random()*10)+1;
    if(is>4) success();
    else failure();

}

//  Proper nested structure
db("A",
  () => {
    console.log("data A is saved");

    //  call db("B") inside success of A
    db("B",
      () => {
        console.log("data B is saved");

        //  you can keep nesting further if needed
        db("C",
          () => console.log("data C is saved"),
          () => console.log("weak connection at C")
        );
      },
      () => console.log("weak connection at B")
    );
  },
  () => console.log("weak connection at A")
);



// PROMISES 

