$(document).ready(function () {
    $('#toogle-create').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#toogle-signin').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#logon').click(function () {
        var user = $('#name').val();
        var pw = $('#pw').val();
        console.log('user', user);
        console.log('pw', pw);
        if (user === 'Patrick' && pw === '123') {
            localStorage.setItem("loggedInUser", JSON.stringify({ user: user, pw: pw }));
            logInCheck();
        } else {
            alert('Wrong username or password')
            return false;
        }

    });
    
    $('#logout').click(function () {
        localStorage.setItem("loggedInUser", null);
        logInCheck();
        
    });

    $('#forgot').click(function () {
        alert('Too bad, we have not created a solution for the problem, yet!');
        return false;
    });

    $('#create').click(function () {
        var user = { name: $('#create-name').val(), email: $('#create-email').val(), pw: $('#create-pw').val() }
        var users = JSON.parse(localStorage.getItem("users"));
        if (users === null) {
            users = [];
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        return false;
    });


    function logInCheck() {
        var localUsers = JSON.parse(localStorage.getItem("users"));
        var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser != null) {
            $('.loggedin-page').show();
            $('.login-page').hide();
            if(localUsers != null){
                var userList = $("#userlist");
                userList.empty();
                for(i=0; i<localUsers.length; i++){
                    $("<li class=\"message\"><a >"+localUsers[i].name+"</a></li>").appendTo(userList);
                    $("<li class=\"message\"><a >"+localUsers[i].email+"</a></li></br>").appendTo(userList);
                }
            }
           
        } else {
            $('.loggedin-page').hide();
            $('.login-page').show();

        }
    }

    logInCheck();
});