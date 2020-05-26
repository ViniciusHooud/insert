/* Codigo abre a conexão com o MySQL aqui */

let sql = "insert";

var carro = { nome: "Meu carro", tipo: "1.0" };

connection.query(sql, carro, function (erro, resultado) {
    if (erro) throw erro;
    console.log("Carro salvo com sucesso, id:" + results.insertId);
});

connection.end();