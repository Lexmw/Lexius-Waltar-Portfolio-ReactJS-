const App = require('./server');
const PORT = process.env.PORT || 3000;

App.listen(PORT, () => console.log(`server is listening on http://localhost:${PORT}`));