const listarTodosUsuarios = (app, lista) => {
    app.get('/usuarios', (req, res) => {
    console.log('Cliente na pag de contato')
    return res.json(lista)
})}
module.exports = listarTodosUsuarios;