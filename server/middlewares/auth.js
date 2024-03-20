
//this function called When the user wants to perform actions 
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];
    try {
        // let user = jwt.verify(token, SECRET);
        let user = {_id:"345678",email: "eli@gmail.com"};
        req.body.user = user;
        next();

    } catch {
        res.sendStatus(401)
    }
}

module.exports = {auth};