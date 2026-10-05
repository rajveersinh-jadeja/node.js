const Student = require('../models/Student');

const home = (req, res) => res.redirect('/students');

const list = async (req, res) => {
    const students = await Student.find().sort({ name: 1 });
    res.render('students', { students });
};

const add = (req, res) => res.render('add', { student: {} });

const create = async (req, res) => {
    const student = new Student(req.body);
    await student.save();

    req.flash('success', `${student.name} was added`);
    res.redirect('/students');
};

const details = async (req, res) => {
    const id = req.params.id;
    const student = await Student.findOne({ _id: id });
    res.render('details', { student });
};

const edit = async (req, res) => {
    const id = req.params.id;
    const student = await Student.findOne({ _id: id });
    res.render('edit', { student });
};

const update = async (req, res) => {
    const id = req.params.id;
    await Student.updateOne({ _id: id }, req.body);

    req.flash('success', 'Student was updated');
    res.redirect('/students');
};

const remove = async (req, res) => {
    const id = req.params.id;
    const student = await Student.findOne({ _id: id });

    if (student) {
        await Student.deleteOne({ _id: id });
        req.flash('success', `${student.name} was deleted`);
    }

    res.redirect('/students');
};

module.exports = { home, list, add, create, details, edit, update, remove };