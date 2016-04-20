var express = require('express'),
    activityService = require('../services/activity');
var router = express.Router();

/* GET all activity documents */
router.get('/', function(req, res) {
    activityService.getAll(function(err, docs) {
        if (err) {
            res.status(405).send(err);
            return;
        }
        res.status(200).send(docs);
    });
});

/* GET activity document by id */
router.get('/:id', function(req, res) {
    activityService.getById(req.params.id, function(err, doc) {
        if (err) {
            res.status(405).send(err);
            return;
        }
        res.status(200).send(doc);
    });
});

/* POST a new activity document */
router.post('/', function(req, res) {
    activityService.create(req.body, function(err) {
        if (err) {
            res.status(405).send(err);
            return;
        }
    });
    res.status(200).send('Create activity: Ok.');
});

/* PUT an activity document */
router.put('/:id', function(req, res) {
    activityService.update(req.body, function(err) {
        if (err) {
            res.status(405).send(err);
            return;
        }
    });
    res.status(200).send('Update activity: Ok.');
});

module.exports = router;
