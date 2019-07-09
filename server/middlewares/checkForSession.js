module.exports = (req, res, next) => {
    const { session } = req;
    if(!session.user){ //If session's user does not exist
        session.user = {username: "", cart: [], total: 0}
    }

    next();
}