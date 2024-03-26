const { getEmailsUser } = require("../BL/services/user.service");

const express = require("express"),
  router = express.Router();

router.post("/", async (req, res) => {});

router.get("/inbox", async (req, res) => {
  const result = await getEmailsUser(req.headers.user._id, "emails");
  res.send(result);
});

router.get("/sent", async (req, res) => {
  const result = await getEmailsUser(
    req.headers.user._id,
    { emails: { $elemMatch: { email: { _id: "65fc1fd487ef1fde13aaa0d7" } } } },
    "emails"
  );
  res.send(result);
});

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

module.exports = router;
