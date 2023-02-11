const db = require('../models');
const path = require('path');
const fs = require('fs');
const { Op } = require('sequelize');
const Model = db.projects;

const Create = async (req, res) => {
  try {
    const { title, description } = req.body;
    // const FileName = req.body.fileName+path.extname(req.file.originalname);
    const model = new Model({
      title,
      description,
      // image: FileName,
    });
    await model.save();
    const data = await Model.findAll();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const FindAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';
    let offset = limit * page;
    let totalRows, totalPage, data;
    if (search !== '') {
      totalRows = await Model.count({
        where: {
          title: {
            [Op.like]: '%' + search + '%',
          },
        },
      });
      if (offset > totalRows) {
        offset = 0;
      }
      totalPage = Math.ceil(totalRows / limit);
      data = await Model.findAll({
        where: {
          title: {
            [Op.like]: '%' + search + '%',
          },
        },
        offset: offset,
        limit: limit,
      });
    } else {
      totalRows = await Model.count();
      totalPage = Math.ceil(totalRows / limit);
      data = await Model.findAll({
        offset: offset,
        limit: limit,
      });
    }
    res.status(200).json({
      data,
      page,
      limit,
      totalRows,
      totalPage,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const Update = async (req, res) => {
  try {
    const { title, description } = req.body;
    const model = await Model.findByPk(req.params.id);
    await Model.update(
      {
        title,
        description,
      },
      {
        where: {
          id: model.id,
        },
      }
    );
    const totalRows = await Model.count();
    const limit = 10;
    const totalPage = Math.ceil(totalRows / limit);
    data = await Model.findAll({
      offset: 0,
      limit,
    });
    res.status(200).json({
      data,
      page: 0,
      limit,
      totalRows,
      totalPage,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPhotoImage = async (req, res) => {
  res.download('./images/' + req.params.path);
};
const Delete = async (req, res) => {
  try {
    // const model = await Model.findByPk(req.params.id);
    // fs.unlinkSync(`./images/${model.image}`);
    await Model.destroy({
      where: {
        id: req.params.id,
      },
    });
    const data = await Model.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getById = async (req, res) => {
  try {
    const model = await Model.findByPk(req.params.id);
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const GetAll = async (req, res) => {
  try {
    const data = await Model.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  Create,
  FindAll,
  getPhotoImage,
  Delete,
  getById,
  GetAll,
  Update,
};
