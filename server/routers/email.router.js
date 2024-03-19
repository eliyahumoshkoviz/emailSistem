const express = require("express"),
  router = express.Router();

router.post("/", async (req, res) => {
  // const = {}
});
router.post("/draft", async (req, res) => {});

router.get("/", async (req, res) => {});
router.get("/:emailId", async (req, res) => {});
router.get("/favorites", async (req, res) => {});
router.get("/draft", async (req, res) => {});
router.get("/deleted", async (req, res) => {});

//updata status
router.put("/:emailId", async (req, res) => {})

//delete all send arr in body
router.delete("/", async (req, res) => {});
router.delete("/:id", async (req, res) => {});

module.exports = router;
