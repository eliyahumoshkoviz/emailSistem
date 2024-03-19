
//this function called When the user wants to perform actions 
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];
    try {
        let details = jwt.verify(token, SECRET);
        req.body.auth = {
            email: details.email
        }
        next();

    } catch (error) {
        res.send(error).sendStatus(401)
    }
}