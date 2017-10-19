import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './light-bootstrap-dashboard.css';

var defApiInfos = [
  {id: "0",name:"Content Player"  ,status:"OK"          ,code:200,responseTime:"340ms", updateTime:"8 hour ago"},
  {id: "1",name:"Data Extract"    ,status:"OK"          ,code:200,responseTime:"523ms", updateTime:"4 hour ago"},
  {id: "2",name:"Ecommerce"       ,status:"Unauthorized",code:409,responseTime:"2341ms",updateTime:"1 hour ago"},
  {id: "3",name:"Hiring"          ,status:"OK"          ,code:200,responseTime:"543ms", updateTime:"4 hour ago"},
  {id: "4",name:"Hiring Connector",status:"Not Modified",code:301,responseTime:"58ms",  updateTime:"4 hour ago"},
];

ReactDOM.render(<App apiInfos={defApiInfos}/>, document.getElementById('root'));
registerServiceWorker();
