const express = require("express"),
  router = express.Router();

const { auth } = require('../middlewares/auth')

router.post("/", auth, async (req, res) => {
  const { subject, content, to, user } = req.body;
  try {
    res.send({_id: "fghjk5678", subject, content, to, from: user.email})

  } catch (err) {
    res.status(400).send(arr.msg || arr.message || "wrong")
  }
});
router.post("/draft", async (req, res) => { });

router.get("/", async (req, res) => {

});
router.get("/:emailId", async (req, res) => { });
router.get("/favorites", async (req, res) => { });
router.get("/draft", async (req, res) => { });
router.get("/deleted", async (req, res) => { });

//updata status
router.put("/:emailId", async (req, res) => { })

//delete all send arr in body
router.delete("/", async (req, res) => { });
router.delete("/:id", async (req, res) => { });

module.exports = router;
