class UserController {
    getUser(req, res) {
        // Logic to fetch user details
        res.send("User details");
    }

    updateUser(req, res) {
        // Logic to update user information
        res.send("User updated");
    }
}

module.exports = UserController;