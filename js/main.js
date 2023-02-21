      // Second Step of the Project: Fetching the User's Profile Data


// Initializing the Github Constructor from github.js to use it here: in our main.js
const github = new Github(); 

// Defining Search Input
const searchInput = document.getElementById('form-input');

// Search Input Event Listener
searchInput.addEventListener('keyup', (e) => {
    var inputUser = e.target.value;
    
  // Http call with getUser() to return the inputed user's profile data in json form to the console and validating
    if(inputUser !== ''){
        
    } 
});
