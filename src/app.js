import express from 'express';
import apiRoutes from './routes/api.routes.js';
import viewRoutes from './routes/view.routes.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('./src/public'));

// The API routes are prefixed with /api, while the view routes are at the root level
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

export default app;
