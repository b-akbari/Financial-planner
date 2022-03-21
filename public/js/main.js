var xValues = [];
var yValues = [];

let revenueMonthlyIn=document.querySelectorAll('.monthlyIn')
let revArr=[];
revenueMonthlyIn.forEach(month=>revArr.push(parseInt(month.innerText)))
let revLength=revArr.length

let AnnualPercentChange=document.querySelectorAll('.annualP')
let revAPCArr=[]; //Revenue annual percent change array
AnnualPercentChange.forEach(month=>revAPCArr.push(parseInt(month.innerText)))

let ExpenseMonthlyOut=document.querySelectorAll('.monthlyExpense')
let expArr=[];
ExpenseMonthlyOut.forEach(month=>expArr.push(parseInt(month.innerText)))
let expLength=expArr.length;

let ExpenseAnnualChange=document.querySelectorAll('.monthlyExpChange')
let expAPCArr=[];
ExpenseAnnualChange.forEach(month=>expAPCArr.push(parseInt(month.innerText)))

let months=document.querySelector('#months').innerText
months=parseInt(months)
let goal=document.querySelector('#GoalCap').innerText
goal=parseInt(goal);
let prevYVal=document.querySelector('#StartingCapital').innerText;
prevYVal=parseInt(prevYVal);

let goalArr=[];

console.log(revAPCArr);

for(i=1;i<months+1;i++){
  xValues.push(i);
  goalArr.push(goal);
  let monthlySumRev=0;
  let monthlySumExp=0
  for(z=0;z<revLength;z++){
    if(revArr[z]!=0){
      if(revAPCArr[z]!=0){
        monthlySumRev+= revArr[z]*(1+((i-1)*revAPCArr[z]/1200) ); // (APC/12)/100=apc/1200
      } else{
        monthlySumRev+= revArr[z];
      }
    }
  }
  for(z=0;z<expLength;z++){
    if(expArr[z]!=0){
      if(expAPCArr[z]!=0){
        monthlySumExp+= expArr[z]*(1+((i-1)*expAPCArr[z]/1200));
      } else{
        monthlySumExp+= expArr[z];
      }
    }
  }
  yValues.push(prevYVal+monthlySumRev-monthlySumExp);
  prevYVal=yValues[i-1];
}


let maxY=Math.max(...yValues);
maxY=Math.ceil(maxY/1000)*1000;

let minY=Math.min(...yValues);
minY=Math.floor(minY/1000)*1000;

if(minY>0){
  minY=0;
}
if(maxY<0){
  maxY=0;
}
if(maxY==0 && minY==0){
  maxY=goal;
  minY=0;
}

function getMonth() {
  var x = document.getElementById("myNumber").value;
  document.getElementById("demo").innerHTML = x;
}


new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        label:'capital worth',
        fill: false,
        lineTension: 1,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
        },
        {label:'Goal',
          fill: false,
          lineTension: 1,
          backgroundColor: "rgba(0,255,0,1.0)",
          borderColor: "rgba(0,255,0,0.1)",
          data: goalArr,
        },

  
    ]
  }
  ,
  options: {
    plugins:{
      title:{
        display:true,
        text:'Portfolio Projection'
      }
    },
    responsive:true,
    legend: {
      display: true

    },
    scales: {
      yAxes: [
        {ticks:{min:minY, max:maxY}
      }],
    }
  }
});



