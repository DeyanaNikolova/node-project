function logout() {
    window.location.href = '/connection';
}

let selectedTitle = null;

function remove(title) {
    selectedTitle = title;
    const http = new XMLHttpRequest();
    http.addEventListener("load", removeListener);
    http.open("DELETE", "/product?title=" + title);
    http.send();
}

function removeListener() {
    // console.log(this.responseText);

    let rows = document.getElementById('productsTableId').rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].childNodes[1].innerText === selectedTitle) {
            rows[i].remove();
        }
    }
}

function update(title) {
    let rows = document.getElementById('productsTableId').rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].childNodes[1].innerText === title) {
            document.getElementById('title').value = rows[i].childNodes[1].innerText;
            document.getElementById('price').value = rows[i].childNodes[3].innerText;
            document.getElementById('amount').value = rows[i].childNodes[5].innerText;
        }
    }
    let postAction = document.getElementById('postActionId');
    console.log(postAction);
    postAction.value = 'update';
}

