var istatus = document.querySelector('#status');
var btn = document.querySelector('#btn')

var check = 0;
btn.addEventListener('click', function () {
    if (check == 0) {
        btn.innerHTML = "Remove Friend";
        istatus.innerHTML = "Friends";
        istatus.style.color = 'green';
        check = 1;
    }
    else {
        btn.innerHTML = "Add Friend";
        istatus.innerHTML = "Stranger";
        istatus.style.color = 'red';
        check = 0;
    }
})