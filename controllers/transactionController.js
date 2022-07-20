const { Transaction } = require("../models");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  const transactions = await Transaction.findAll();
  res.status(200).json(transactions);
});

router.get("/:id", async (req, res) => {
  const transactions = await Transaction.findByPk(req.params.id);
  res.status(200).json(transactions);
});

router.post("/", async (req, res) => {
  await Transaction.create(req.body);
  res.status(201).json({ message: "Transaction created successfully" });
});

router.patch("/:id", async (req, res) => {
  await Transaction.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json({ message: "Transaction updated successfully" });
});

router.delete("/:id", async (req, res) => {
  await Transaction.destroy({
    where: { id: req.params.id },
  });
  res.status(204).json({ message: "Transaction deleted successfully" });
});

module.exports = router;
