// try catch (If dos erros)

try {
    // Executa algo
    // consulta API , Banco de dados, arquivos...
    console.log("Consultando banco de dados...")
    // con.select ("clientes") // Pontos de falha

    throw 'Erro 1032 ao conectar com o banco de dados.' // dispara o erro
} catch (error) {
    // erro
    alert("Erro de Execução genérico") // Mostra para o cliente
    console.error(error) // E mostra o erro no console
} finally {
    // sempre executa ao final (opcional)
    console.log("Execução final")
}