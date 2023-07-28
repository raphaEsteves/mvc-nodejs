import app from './index.js';

const PORT = process.env.PORT || 5500;

app.listen(PORT, ()=> {console.log(`Server ON.\nhttp://localhost:${PORT}`)});
