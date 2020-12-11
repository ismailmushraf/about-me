function changeColor() {
    if (document.getElementById('toggle').checked) { // White Mode
        document.getElementById('my-body').style.backgroundColor = "#5CDB95";
        document.getElementById('name').style.color = "#FC4445";
        document.getElementById('desc').style.color = "#2F2FA2";
        document.getElementById('border').style.borderBottomColor = "gray";
        var cols = document.getElementsByClassName('cmd-line');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "white";
        }
        cols = document.getElementsByClassName('input');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "#2F2FA2";
        } 
    } else { // Dark Mode
        document.getElementById('my-body').style.backgroundColor = "rgb(25, 25, 25)";
        document.getElementById('name').style.color = "red";
        document.getElementById('desc').style.color = "#4AF626";
        document.getElementById('border').style.borderBottomColor = "rgba(0,255,0,.75)";
        var cols = document.getElementsByClassName('cmd-line');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "rgba(255,255,255,.75)";
        }
        cols = document.getElementsByClassName('input');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "#4AF626";
        }
    }
} 