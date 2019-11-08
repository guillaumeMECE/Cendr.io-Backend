
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */
// TODO IMPORT
const { Read, CreateAshtray, DeleteAshtray, Update } = require('@controllers');

// AUTH IMPORT
const { RegisterUser, LoginUser } = require('@controllers');

// QUESTION IMPORT
const { CreateQuestion, ReadQuestions, ReadQuestion, UpdateQuestion, DeleteQuestion } = require('@controllers');

// USER QUESTION IMPORT
const { CreateUserQuestion, ReadUserQuestions, ReadUserQuestion, UpdateUserQuestion, DeleteUserQuestion } = require('@controllers');

/**
 * Routes
 */
// AUTH ROUTES
router.post('/register', RegisterUser);
router.post('/login', LoginUser);

// TODO ROUTES
router.get('/all', Read);
router.post('/ashtray/create', CreateAshtray);
router.delete('/ashtray/delete/:id', DeleteAshtray);
router.patch('/update/:id', Update);

// QUESTION ROUTES 
router.post('/question/add', CreateQuestion);
router.get('/question/read',ReadQuestions);
router.get('/question/read/:id',ReadQuestion);
router.patch('/question/update/:id',UpdateQuestion);
router.delete('/question/delete/:id',DeleteQuestion);

// USER QUESTION ROUTES 
router.post('/user/question/add', CreateUserQuestion);
router.get('/user/question/read',ReadUserQuestions);
router.get('/user/question/read/:id',ReadUserQuestion);
router.patch('/user/question/update/:id',UpdateUserQuestion);
router.delete('/user/question/delete/:id',DeleteUserQuestion);

module.exports = router;
