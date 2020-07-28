$(document).ready(function () {
    $("#ordernow").click(function () {
        $('.modal-body').load('OrderForm.html', function () {
            $('#myModal').modal({ show: true });
            //$('#myModal').modal('show');
        });
    });

    $("#messenger").click(function () {
        var win = window.open('http://m.me/112536423857236', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });

   
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}