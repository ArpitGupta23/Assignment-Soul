$(document).ready(function () {
    $("#messenger-copyrightsec").click(function () {
        var win = window.open('http://m.me/112536423857236', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });


    $("#insta-copyrightsec").click(function () {
        var win = window.open('https://www.instagram.com/assignmentsoul/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        });

    $("#fb-page-link").click(function () {
        var win = window.open('https://www.facebook.com/Assignment-Soul-112536423857236/', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });
});