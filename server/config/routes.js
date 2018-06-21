var control = require('../controller/control.js');

module.exports = function(app){
    app.get('/tasks',control.retrieve_all);
    app.get('/retrieve/:id',control.retrieve_id);
    app.post('/create',control.create_task);
    app.put('/update/:id',control.update_task);
    app.delete('/destroy/:id',control.delete_task);
}