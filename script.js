function getDay(){
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const dayOfYear = Math.floor(diff / (24 * 60 * 60 * 1000));
    return dayOfYear;
  }
  
  const currentYear = new Date().getFullYear();
  const numOfDays = (365+(new Date(currentYear, 1, 29).getDate() === 29?1:0));
  const dayOfYear = getDay();
  let text = "It is New Year's Eve ";
  let daysTil = numOfDays-dayOfYear;
  
  if(dayOfYear < numOfDays){
    for(let i=0; i<daysTil; i++){
      text += "Eve "
    }
  } else {
    text += "Day";
  }
  
  document.getElementById("output_box").innerHTML = text;
