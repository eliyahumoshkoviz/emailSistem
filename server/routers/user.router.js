const { getChatsUser } = require("../BL/services/user.service");
const { flagIsExist } = require('../middlewares/checkParams');
const { Flags } = require('../utility')
const { auth } = require('../middlewares/auth');
const { populate } = require("../DL/models/user.model");


const express = require("express"),
  router = express.Router();


router.get("/:flag", auth, flagIsExist, async (req, res) => {
  const { _id } = req.headers.user;
  try {
    const populate = {
      chats: true,
      users: false
    }
    const result = await getChatsUser(_id, "", Flags[req.params.flag], populate);
    res.send(result);
  } catch (err) {
    res.status(err?.code ?? 400).send(err.message);
    console.error(err.message)
  }
});



router.post("/", async (req, res) => { });



router.put("/:id", async (req, res) => { });

router.delete("/:id", async (req, res) => { });

module.exports = router;
