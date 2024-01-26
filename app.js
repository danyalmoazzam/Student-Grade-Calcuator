
const calcy = () =>{
  let eng = document.getElementById('eng').value;
  let maths = document.getElementById('maths').value;
  let comp = document.getElementById('comp').value;
  let phy = document.getElementById('phy').value;
  let grades = "";


  let totalGrades = (parseFloat(eng) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy)).toFixed(2);

  let perc =(((totalGrades/800) * 100).toFixed(2));
  
  if(perc <= 100  && perc >= 80){
    grades = 'A';
  }else if(perc <= 79  && perc >= 60){
     grades = 'B';
  }else if(perc <= 59  && perc >= 40){
     grades = 'C';
  }else{
     grades = 'F';
  }

  if(perc >= 39.5){
    document.getElementById('showData').innerHTML = ` Out of 800 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}.  `
    document.getElementById('result').innerHTML = ` PASS `
  }
  else{
    document.getElementById('showData').innerHTML = ` Out of 800 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. `
    document.getElementById('result').innerHTML = ` FAIL `
  }

  
}