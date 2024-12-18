let selectedLogin = null;

function remove(login) {
    selectedLogin = login;
    const http = new XMLHttpRequest();
    http.addEventListener("load", removeListener);
    http.open("DELETE", "/users/" + login);
    http.send();
}

function removeListener() {
    let rows = document.getElementById('usersTableId').rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].childNodes[5].innerText === selectedLogin) {
            rows[i].remove();
        }
    }
}

function update(login) {
    
    let rows = document.getElementById('usersTableId').rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].childNodes[5].innerText === login) {
            document.getElementById('firstName').value = rows[i].childNodes[1].innerText;
            document.getElementById('lastName').value = rows[i].childNodes[3].innerText;
            document.getElementById('login').value = rows[i].childNodes[5].innerText;
            document.getElementById('role').value = rows[i].childNodes[7].innerText;

        }
    }
    let postAction = document.getElementById('postActionIdUsers');
    console.log(postAction);
    postAction.value = 'update';
}

