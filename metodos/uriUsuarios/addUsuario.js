const addUsuario = (app, lista) => {
    app.post('/usuarios', (req, res) => {
    const {nome, numero} = req.body
    const usuario = {nome, numero}
    lista.push(usuario)
    return res.json(usuario)
})}
module.exports = addUsuario