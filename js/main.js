var branch_canvas = document.getElementById("branch");

var stage = branch_canvas.getContext("2d");

stage.strokeRect(40, 100, 500, 300);
stage.fillStyle = "red";
stage.fillRect(40, 100, 500, 300);
stage.fillStyle = "white"
stage.fillRect(190, 100, 50, 300);
stage.fillRect(40, 225, 500, 50);

stage.strokeRect(600, 100, 500, 300);
stage.fillStyle = "black";
stage.fillRect(600, 100, 500, 100);
stage.fillStyle = "red"
stage.fillRect(600, 200, 500, 100);
stage.fillStyle = "yellow"
stage.fillRect(600, 300, 500, 100);

stage.strokeRect(40, 500, 500, 300);
stage.fillStyle = "green";
stage.fillRect(40, 500, 166.66, 300);
stage.fillStyle = "white"
stage.fillRect(206.66, 500, 166.66, 300);
stage.fillStyle = "red"
stage.fillRect(373.32, 500, 166.66, 300);

stage.strokeRect(600, 500, 500, 300);
stage.fillStyle = "red";
stage.beginPath();
stage.arc(850, 650, 100, 0, Math.PI * 2);
stage.closePath();
stage.fill();