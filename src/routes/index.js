const { Router } = require('express');
const router = Router();
const stadiumController = require('../controllers/stadiumController');

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

router.get('/api/list', stadiumController.list);

router.get('/api/list/:id', stadiumController.show);

router.post('/api/list', stadiumController.add);

router.put('/api/list/:id', stadiumController.update);

router.delete('/api/list/:id', stadiumController.delete);


module.exports = router;