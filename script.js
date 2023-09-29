document.addEventListener('DOMContentLoaded', (event) => {
    
    const calculateButton = document.getElementById('calculate-button');
    const result = document.getElementById('result');
  
    
    calculateButton.addEventListener('click', function() {
      
      const birthYear = parseInt(document.getElementById('birth-year-input').value);
  
      
      if (isNaN(birthYear)) {
        result.innerHTML = 'Please enter a valid year.';
        return;
      }
  
      
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;
  
      
      result.innerHTML = `You will be ${age} years old this year.`;
    });
  });
  