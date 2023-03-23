const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/home', (req,res) => {
    let param = req.query.id
    console.log(param);

    return res.status(200).json({
        status:true,
        message:'Success'
    })
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});