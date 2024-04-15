const express = require("express"),
  router = express.Router();
const { getChat } = require("../BL/services/chat.service");


const { auth } = require('../middlewares/auth')

router.post("/", auth, async (req, res) => {
  const { subject, content, to, user } = req.body;
  try {
    res.send({ _id: "fghjk5678", subject, content, to, from: user.email })

  } catch (err) {
    res.status(400).send(arr.msg || arr.message || "wrong")
  }
});


router.get("/:chatId", async (req, res) => {

  const populate = {
    toPopulate: false,
    fromPopulate: true
  }

  try {
    const result = await getChat(req.params.chatId, "", populate);
    res.send(result);

  } catch (err) {
    res.status(err?.code ?? 400).send(err.message);
    console.error(err.message)
  }
});


//updata status
router.put("/:emailId", async (req, res) => { })

//delete all send arr in body
router.delete("/", async (req, res) => { });
router.delete("/:id", async (req, res) => { });

module.exports = router;
