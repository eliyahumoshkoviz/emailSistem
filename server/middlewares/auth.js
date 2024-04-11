
//this function called When the user wants to perform actions 
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];
    try {
        // let user = jwt.verify(token, SECRET);
        let user = {_id:"6617bd20bc41e1762883a8e5",email: "eli@gmail.com"};
        req.headers.user = user;
        next();

    } catch {
        res.sendStatus(401)
    }
}

module.exports = {auth};