function calculateResult(){
    const n =document.getElementById("subjects").value;
    let total=0;
    let i;
    for(i=0;i<=n;i++){
        let x=prompt("Enter the marks of subject "+(i+1));
        total+=x;

    }
    let average=total/n;
    let grade;
    if(average>=90){
        grade="A+";
    }
    else if(average>=80){
        grade="A";
    }
    else if(average>=70){
        grade="B";
    }
    else if(average>=60){
        grade="C";
    }
    else{
        grade="D";
    }
    let r;
    if(average>=40){
        r="Pass";
    }
    else{
        r="Fail";
    }
    let result=document.getElementById("result").innerHTML="Total Marks: "+total+"<br>"+"Average Marks: "+average+"<br>"+"Grade: "+grade+"<br>"+"Result: "+r;
}