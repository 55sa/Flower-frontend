const mode = 0;

const host_local = "http://localhost:1095";
const host_remote = "";

function getHost() {
    return (mode == 0) ? host_local : host_remote;
}

let configuration = {loggedIn: false, hosts: getHost(), token: ""};