  
// Creating Github Key Constructor and Fetching User API 
class Github {
    constructor () {
        this.client_id = 'd9c7b0d37cb99690d92c';
        this.client_secret = 'd44ace50d440199636818ca75b902f4e3965315f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }
    
    // Gets user data in json 
    async getUser(user){
        // client stuff was for the api to know Ive registered and then allows me to access its data
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
        &sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // await basically just returns stuff in an async function, 
        // so in this case you get (because it returns) the profileResponse's json 
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

      return {
        profile,
        repos
      }
    }
}



