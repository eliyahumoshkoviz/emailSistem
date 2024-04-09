const { Flags } = require('../utility')

const flagIsExist = (req, res, next) => {
  try {
    const options = Object.keys(Flags);
    const regex = new RegExp(`^(${options.join("|")})$`);
    const isValidOption = regex.test(req.params.flag);
    
    if (!isValidOption) throw { code: 400, message: 'Invalid option!' };

    next();
  } catch (err) {
    res.status(err.code ?? 400).send(err.message);
    console.error(err.message);
  }
}

module.exports = { flagIsExist };