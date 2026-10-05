const express = require('express');
const router = express.Router();
const student = require('../controllers/studentController');
const isAuthenticated = require('../middleware/authMiddleware');

router.get('/', student.home);

router.get('/students', isAuthenticated, student.list);

router.get('/students/add', isAuthenticated, student.add);
router.post('/students/add', isAuthenticated, student.create);

router.get('/students/edit/:id', isAuthenticated, student.edit);
router.post('/students/edit/:id', isAuthenticated, student.update);

router.post('/students/delete/:id', isAuthenticated, student.remove);

router.get('/students/:id', isAuthenticated, student.details);

module.exports = router;