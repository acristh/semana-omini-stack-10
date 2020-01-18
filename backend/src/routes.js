const { Router } = require('express');

const routes = Router();

routes.get('/users', (req, res) => {
    console.log(req.body);
    
    return res.json({
        message:'Hello OminiStack 10'
    });
});

module.exports = routes;