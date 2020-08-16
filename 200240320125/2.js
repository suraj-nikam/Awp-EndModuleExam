function login() {
    let username = document.querySelector('input1').value;
    let password = document.querySelector('input2').value;
    const newElement = document.createElement("#refusername").cloneNode(true);
    newElement.children[0].innerhtml = username;
    newElement.children[1].innerhtml = password;
    const commentbox = document.querySelector('#username');
    const commentbox1 = document.querySelector('#username');
    commentbox.insertBefore(newElement, commentbox.firstchild);
    commentbox1.insertBefore(newElement, commentbox.firstchild);
    document.querySelector('input1').value = "";
    document.querySelector('input2').value = "";

}