const listarTodosUsuarios = (app, lista) => {
    app.get('/usuarios', (req, res) => {
    console.log('Client in User Page')
    return res.json(lista)
})}
module.exports = listarTodosUsuarios;