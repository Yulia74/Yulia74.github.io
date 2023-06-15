//ввод данных
//x = prompt();
//x = document.getElementById("text").value;
document.getElementById("text").value = '123'
//логика
//вызов функций app()
//x = x + 2

//вывод данных
//alert
//console.log
//document.getElementById("message1").innerText = message;

function app() {
    var message = document.getElementById("text").value
    document.getElementById("message1").innerText = message
    document.getElementById("text").value = ''
    //console.log(message)
}

