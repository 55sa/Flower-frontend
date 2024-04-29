const mode = 0;

const host_local = "https://final-4oj9.onrender.com";
const host_remote = "";

function getHost() {
    return (mode == 0) ? host_local : host_remote;
}

let configuration = {loggedIn: false, hosts: getHost(), token: ""};