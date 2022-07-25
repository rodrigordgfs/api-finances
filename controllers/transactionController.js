const { Transaction } = require("../models");
const { Router } = require("express");
const moment = require("moment");

const router = Router();

router.get("/", async (req, res) => {
  const { user } = req.query;
  if (!user) {
    return res.status(400).json({
      error: "É necessário o parametro Usuário!",
    });
  }
  const transactions = await Transaction.findAll({ where: { user } });
  res.status(200).json(transactions);
});

router.get("/:id", async (req, res) => {
  const transactions = await Transaction.findByPk(req.params.id);
  res.status(200).json(transactions);
});

router.post("/", async (req, res) => {
  let { amount, category, date, title, type, repeat, user } = req.body;
  repeat = repeat || 0;
  try {
    for (let i = 0; i <= repeat; i++) {
      if (i !== 0) {
        date = moment(date).add(1, "M").format("YYYY-MM-DD");
      }
      await Transaction.create({ amount, category, date, title, type, user });
    }
    res.status(201).json({ message: "Transaction created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
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
