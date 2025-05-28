function ageGroupCasssifier() {
      let ageValue = document.getElementById("ageInput").value;
      let age = parseInt(ageValue);
      let result = document.getElementById("ageGroupResult");

      if (age >= 0 && age <= 12) {
        result.textContent = "You are classified as Child.";
      }
      else if (age >= 13 && age < 18) {
        result.textContent = "You are classified as Teen";
      }
      else if (age >= 18 && age < 65) {
        result.textContent = "You are classified as Adult";
      } 
      else if (age >= 65) {
        result.textContent = "You are classified as Senior";
      } 
      
    }

