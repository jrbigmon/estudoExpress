const homePage = (app) => {
    app.get('/', (req, res) => {
        res.send('HomePage')
    })
}
module.exports = homePage