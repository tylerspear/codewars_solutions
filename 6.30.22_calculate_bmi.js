function bmi(weight, height) {
    let index = weight/(height * height)
    if(index <= 18.5){
      return "Underweight"
    } 
    else if(index <= 25){
      return "Normal"
    }
    else if(index <= 30) {
      return "Overweight"
    }
    else {
      return "Obese" 
    }
}