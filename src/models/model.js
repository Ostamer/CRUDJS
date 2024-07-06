module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    lastName: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    middleName: {
      type: Sequelize.STRING
    }
  });

  return User;
};