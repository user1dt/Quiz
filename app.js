document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get selected options
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    var q3Answer = document.querySelector('input[name="q3"]:checked').value;
    var q4Answer = document.querySelector('input[name="q4"]:checked').value;
    var q5Answer = document.querySelector('input[name="q5"]:checked').value;
  
    // Calculate score
    var score = 0;
    if (q1Answer === 'blue whale') {
      score++;
    }
    if (q2Answer === 'snake') {
      score++;
    }
    if (q3Answer === 'bat') {
      score++;      
    }
    if (q4Answer === 'kangroo') {
      score++;
    }
    if(q5Answer === 'parrot') {
      score++;
    }
  
    // Display result
    var resultElement = document.getElementById('result');
    resultElement.textContent = `You scored ${score}/5.`;
  });
  
