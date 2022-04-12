const listarUsuario = (app, lista) => {
    app.get('/usuarios/:id', (req, res) => {
    const {id} = req.params
    return res.json(lista[id])
})}
module.exports = listarUsuario;