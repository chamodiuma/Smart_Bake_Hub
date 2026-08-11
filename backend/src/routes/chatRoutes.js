const express = require('express');
const router = express.Router();
const {
    initSession,
    getMessages,
    sendMessage,
    triggerBotReply,
    requestAdmin,
    getActiveSessions,
    sendAdminReply,
    closeSession
} = require('../controllers/chatController');

// Customer Routes
router.post('/init', initSession);
router.get('/:session_id/messages', getMessages);
router.post('/:session_id/send', sendMessage);
router.post('/:session_id/bot-reply', triggerBotReply);
router.post('/:session_id/request-admin', requestAdmin);

// Admin Routes (Would normally be protected by auth middleware)
router.get('/admin/sessions', getActiveSessions);
router.post('/admin/:session_id/reply', sendAdminReply);
router.post('/admin/:session_id/close', closeSession);

module.exports = router;
