const db = require("../models");
const Op = db.Sequelize.Op;
const { User } = require("../models");
// exports.createNewUser = (req, res) => {
//   const { lastName, firstName, middleName } = req.body;
//   User.create({
//     lastName: lastName,
//     firstName: firstName,
//     middleName: middleName
//   })
//     .then(data => {
//       res.status(201).send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while creating the User."
//       });
//     });
// };
// controller.js

exports.createNewUser = async function(req, res) {
  try {
    const userData = req.body;
    const newUser = new User(userData); // Использование User как конструктора
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

exports.getAllUsers = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: "User not found" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving User with id=" + id });
    });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "User was updated successfully." });
      } else {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating User with id=" + id });
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "User was deleted successfully!" });
      } else {
        res.status(404).send({ message: `Cannot delete User with id=${id}. Maybe User was not found!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Could not delete User with id=" + id });
    });
};