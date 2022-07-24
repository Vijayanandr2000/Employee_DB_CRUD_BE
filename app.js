const express = require('express');
const serverConfig = require('./config/server.config');
const db = require('./models');

const app = express();

app.use(express.json());

db.sequelize.sync({force: true}).then(()=>{
    console.log(`DB Table's are updated`);
}).catch(err=>{
    console.log(err.message)
})

app.get('/',(req,res)=>{
    res.send('SERVER SIDE IS STARTED');
})

require('./routes/employee')(app)

app.listen(serverConfig.PORT,async() => {
    console.log(`server starts in PORT ${serverConfig.PORT}`);
});