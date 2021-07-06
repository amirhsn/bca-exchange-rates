const apiData = require('./process');
'use strict';

exports.response = (res)=>{
    apiData.then((response)=>{
         res.json(response);
         res.end();
    });
}
