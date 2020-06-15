const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// get all articles
router.get('/', (req, res, next) => {
    Article.find()
        .then(articles => res.send(articles))
        .catch(err => res.status(404).send(err))
});

// get 1 article by id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Article.findById({
            _id: id
        })
        .then(article => {
            if (!article) return res.status(404).send(`Article not found`);
            return res.send(article);
        })
        .catch(err => res.status(400).send(err))
});

// post new article
router.post("/add", (req, res, next) => {
    if (req.body.title === '' || req.body.article === '' || req.body.authorname === '') {
        return res.redirect('/');
    }
    Article.create(req.body)
        .then(article => {
            return res.status(201).send('Article created successfully')
            // return res.redirect('/');
        })
        .catch(err => res.status(400).send(err))
});

// get 1 article by id and update
router.put('/update/:id', (req, res, next) => {
    const id = req.params.id;

    Article.findByIdAndUpdate({
            _id: id
        }, req.body, {
            new: true,
            runValidators: true
        })
        .then(article => {
            if (!article) return res.status(404).send(`Article not found`)
            return res.send(`Article updated successfully`)
        })
        .catch(err => res.status(400).send(err))
});

// delete article by id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Article.findByIdAndDelete({
            _id: id
        })
        .then(article => {
            if (!article) return res.status(404).send(`Article not found`);
            return res.send('Article deleted successfully');
        })
        .catch(err => res.status(400).send(err))
});

module.exports = router;