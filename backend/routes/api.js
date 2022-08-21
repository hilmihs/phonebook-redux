var express = require('express');
var router = express.Router();
const { Response } = require('../helpers/util');
const { Sequelize } = require('../models/index');
var models = require('../models/index')

/* GET users listing. */
router.get('/phonebooks/', async function (req, res, next) {
  const { name, phone } = req.query
  let wheres = {}
  let search = {}
  if (req.query) {
    if (name) {
      search['name'] = { [Sequelize.Op.iLike]: '%' + name + '%'}
    }
    if (phone) {
      search['phone'] = { [Sequelize.Op.iLike]: '%' + phone + '%' }
    }
    wheres['where'] = search
  }
  console.log(wheres)
  try {
    const data = await models.Phonebook.findAll(wheres)
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e, "UNSUCCESFUL"))
  }


});

router.post('/phonebooks/', async function (req, res, next) {
  try {
    const { name, phone } = req.body
    const data = await models.Phonebook.create({ name, phone })
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e, "UNSUCCESFUL"))
  }
});

router.put('/phonebooks/:id', async function (req, res, next) {
  try {
    const { name, phone } = req.body
    const data = await models.Phonebook.update({
      name,
      phone
    }, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
    res.json(new Response(data[1]))
  } catch (e) {
    res.status(500).json(new Response(e, "UNSUCCESFUL"))
  }
});
router.delete('/phonebooks/:id', async function (req, res, next) {
  try {
    const deletedRows = await models.Phonebook.findOne({
      where: {
        id: req.params.id
      }
    })
    const data = await models.Phonebook.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(new Response(deletedRows))
  } catch (e) {
    res.status(500).json(new Response(e, "UNSUCCESFUL"))
    console.log(e)
  }


});
module.exports = router;