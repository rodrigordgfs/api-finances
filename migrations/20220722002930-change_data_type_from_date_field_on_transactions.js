module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Transactions", "date", {
        type: Sequelize.DATEONLY,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.changeColumn("Transactions", "date", {
        type: Sequelize.DATE,
      }),
    ]);
  },
};
