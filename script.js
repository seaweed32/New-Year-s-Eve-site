function getDay(){
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const dayOfYear = Math.floor(diff / (24 * 60 * 60 * 1000));
    return dayOfYear;
  }
  
  const dayOfYear = getDay();
  let text = "It is New Year's ";
  let daysTil = 365-dayOfYear;
  
  if(dayOfYear < 365){
    for(let i=0; i<daysTil; i++){
      text += "Eve "
    }
  } else {
    text += "Day";
  }
  
  document.getElementById("output_box").innerHTML = "text";
