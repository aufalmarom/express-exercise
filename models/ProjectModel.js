module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Project;
};
