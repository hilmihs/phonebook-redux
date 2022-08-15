var express = require('express');
var router = express.Router();
const { Response } = require('../helpers/util')
var models = require('../models/index')
/* GET users listing. */
router.get('/phonebooks/', async function (req, res, next) {
  const {name, phone} = req.query
  let wheres = {}
  let search = {}
  if (req.query) {
    if (name) {
      search['name'] = name
    }
    if (phone) {
      search['phone'] = phone
    }
  wheres['where'] = search
  }
  try {
    const data = await models.Phonebook.findAll(wheres)
    res.json(data)
  } catch (e) {
    res.status(500).json(new Response(e,"UNSUCCESFUL"))
  }


});

router.post('/phonebooks/', async function (req, res, next) {
  try {
    const { name, phone } = req.body
    const data = await models.Phonebook.create({ name, phone})
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e,"UNSUCCESFUL"))
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
    res.status(500).json(new Response(e,"UNSUCCESFUL"))
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
    res.json(new Response(deletedRows, deletedRows && data ? "SUCCESS" :"UNSUCCESFUL"))
  } catch (e) {
    res.status(500).json(new Response(e,"UNSUCCESFUL"))
    console.log(e)
  }


});
module.exports = router;