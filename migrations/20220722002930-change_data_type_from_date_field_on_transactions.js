module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Transactions", "date", {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.changeColumn("Transactions", "date", {
        type: Sequelize.DATE,
        allowNull: false,
      }),
    ]);
  },
};
