// Initializing the UI constructor from github.js to use it here: in our main.js
const ui = new UI(); 

// Initializing the Github constructor from github.js to use it here: in our main.js
const github = new Github(); 

// Defining Search Input
const searchInput = document.getElementById('profile-search-input');

searchInput.addEventListener('keyup', (e) => {
    var inputUser = e.target.value;
    
      // Third Step of the Project: Display the Profile with validation


    if(inputUser !== ''){
        // HTTP call
        github.getUser(inputUser)
          .then(data => {
            // Validating
            if(data.profile.message === 'Not Found') {
              // Show Alert

            } else {
              // Show profile
              ui.showProfile(data.profile);
            }
        })
    } else {
      // Clear Profile
      
    }
});
