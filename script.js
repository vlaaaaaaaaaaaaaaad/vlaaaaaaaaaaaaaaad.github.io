function checkPassword() {
    var password = document.getElementById("password").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var passwords = this.responseText.split("\n");
            if (passwords.includes(password)) {
                window.location.href = "https://gpt-4-chat-ui.vladantonienko.repl.co/";
            } else {
                document.getElementById("error-message").innerHTML = "Неверный пароль, попробуйте еще раз!";
            }
        }
    };
    xhttp.open("GET", "passwords.txt", true);
    xhttp.send();
}
const {PythonShell} = require('javascript-shell');
const path = require('path');

PythonShell.run(path.join(__dirname, 'filename.py'), null, function (err) {
  if (err) throw err;
  console.log('Function executed successfully!');
});