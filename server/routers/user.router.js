const { getChatsUser } = require("../BL/services/user.service");
const { Flags } = require('../utility')


const express = require("express"),
  router = express.Router();

router.post("/", async (req, res) => { });

const getChatsUserByFlag = async (flag) => {

  const options = Object.keys(Flags);
  const regex = new RegExp(`^(${options.join("|")})$`);

  const isValidOption = regex.test(flag);

  try {
    return result = await getChatsUser( "6612dfae354a5e11d696b00c" , "", Flags[flag],
      populate = {
        chats: true,
        users: false,
      });
  } catch (error) {
    console.error(error)
  }
}


router.get("/:flag", async (req, res) => {
  const result = await getChatsUserByFlag(req.params.flag)
  res.send(result);
});




router.put("/:id", async (req, res) => { });

router.delete("/:id", async (req, res) => { });

module.exports = router;
