'use strict';

module.exports = function(app) {
    let todoList = require('../../controllers/todoListController');
    let userHandles = require('../../controllers/userController');

    // todoList Routes
    app.route('/api/tasks')
        .get(userHandles.loginRequired,todoList.list_all_tasks)
        .post(userHandles.loginRequired,todoList.create_a_task);

    app.route('/api/tasks/:taskId')
        .get(userHandles.loginRequired,todoList.read_a_task)
        .put(userHandles.loginRequired,todoList.update_a_task)
        .delete(userHandles.loginRequired,todoList.delete_a_task);

    app.route('/api/auth/register')
        .post(userHandles.register);

    app.route('/api/auth/verify')
        .post(userHandles.verify);

    app.route('/api/auth/avatar')
        .post(userHandles.loginRequired,userHandles.update_avatar);

    app.route('/api/auth/password/:id')
        .put(userHandles.loginRequired,userHandles.update_password);


    app.route('/auth/:email')
        .put(userHandles.update_active);

    app.route('/auth/profile/:id')
        .put(userHandles.loginRequired,userHandles.update_profile)
        .get(userHandles.loginRequired,userHandles.profile);
};
