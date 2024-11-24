import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
    
    res.cookie('isAuthenticated', false);
    res.cookie('login', '');
    res.cookie('userId', '');
    res.send('Cookie has been set');
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'connection.html'));
});

export default router;