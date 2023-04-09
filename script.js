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
if (password === "") {
    errorMessage.innerText = "Пожалуйста, введите пароль";
    return false;
  } else {
    errorMessage.innerText = "";
    // здесь можно добавить код для проверки пароля
    // и переадресации пользователя на другую страницу
  }
}
