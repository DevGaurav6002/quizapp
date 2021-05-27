const option1 = document.querySelector(".o-1");
const option2 = document.querySelector(".o-2");
const option3 = document.querySelector(".o-3");
const option4 = document.querySelector(".o-4");
const submit = document.querySelector(".btn");

const ops = [
    option1,
    option2,
    option3,
    option4
]

const op1 = option1.value;
const op2 = option2.value;
const op3 = option3.value;
const op4 = option4.value;
const checked = "";

const opsv = [op1 , op2 , op3 , op4 ];

submit.addEventListener("click" , checkAns);
 
function checkAns(e) {
     let inc = 0;
e.preventDefault();
const myval = ops.filter(ops =>  {
       let back = document.querySelector(".q-1");
    if(ops.checked == true && ops.value == "Java script") 
    {
      back.style.backgroundColor = "rgba(32, 255, 32, 0.637)";
      inc++;
    }
    else if(ops.checked == true && ops.value != "Java script"){
        back.style.backgroundColor = "rgba(206, 32, 32, 0.637)";
    }
});
console.log(inc);
}
