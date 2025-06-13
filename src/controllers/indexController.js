class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the Node.js Demo Application!');
    }
}

module.exports = IndexController;