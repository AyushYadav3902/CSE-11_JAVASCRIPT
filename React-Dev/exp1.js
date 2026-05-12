function calculateResult(){

    const n = document.getElementById("subjects").value;

    let total = 0;
    let i;
    for(i = 0; i < n; i++){
        let x = parseFloat(prompt("Enter the subject number" + (i+1)));
        total += x;
    }

    let average = total/n;

    let grade;
    if(average > 90){
        grade = 'A+';
    }
    if(average <= 90 && average > 80){
        grade = 'A';
    }
    if(average <= 80 && average > 70){
        grade = 'B';
    }
    if(average <= 70 && average > 60){
        grade = 'C';
    }
    if(average <= 60 && average > 50){
        grade = 'D';
    }




    let r ;
    if(average > 40){
        r = "pass";
    }
    else{
        r = "fail";
    }

    let result=document.getElementById("result").innerHTML="Total MArks"+total+"<br/>"+"Average Marks"+average+"<br/>"+"Grade"+grade+"<br/>"+"result"+r;
}