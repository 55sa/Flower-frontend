

async function login() {    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let customer = {username: username, password: password}
    localStorage.setItem('username', username);
    let request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
         body: JSON.stringify(customer)
      };
      try {
        let response = await fetch("https://final-4oj9.onrender.com" + "/signin", request);
        if(response.status == 200) {  
            alert("The login was successful!");
            const token = await response.text();
            configuration.token = token;
            configuration.loggedIn = true;
            localStorage.setItem('token', token);
            location.href = "index.html";

        } else {
            console.log(`response status:${response.status}`);            
            alert("Something went wrong!");
        }
      }
      catch(error) {
        console.log(error);        
        alert("Something went wrong!");
      }    
}