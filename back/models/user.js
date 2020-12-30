module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, // 필수
        unique: true, // 고유
      },
      nickname: { type: DataTypes.STRING(30), allowNull: false },
      password: { type: DataTypes.STRING(100), allowNull: false },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  User.associate = (db) => {};
  return User;
};