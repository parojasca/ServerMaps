const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'cloudpak',
    port: 3306
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log('logueado');
    } else {
        console.log('no Logueado' + JSON.stringify(err, undefined, 2));
    }
});
app.listen(3000, () => console.log('express ejecutandose'));

app.get('/parques', (res, req) => {
    mysqlConnection.query('SELECT idParque,nombreParque FROM cloudpak.parque', (err, rows, fields) => {
        if (!err) {
            console.log(rows);
        } else {
            console.log(err);
        }
    })
});