const net = require("net", "./constants"); //we are using net from net library

// establishes a connection with the game server
const connect = function() { //requirements to establish a connnection,
  const conn = net.createConnection({ //establishes connection
    host: '10.0.2.15', //objects
    port: 50541,
  });

  conn.setEncoding("utf8"); //conn stores the connect details
  
  conn.on("connect", () => { //this is an event , on acts as an event listener. whenever it happens it goes ahead and executes the function next to it.
    // code that does something when the connection is first established //event
    //we need a console log
    
    console.log('Successfully Connected!');
    conn.write('Name: PAR');
    // conn.write('Move: up')
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  //   conn.on('end', () => {
  //     console.log('you ded cuz you idled');
  //   });


  return conn;
};

console.log("Connecting ...");
exports.connect = connect; //exporting the connect function and everything inside
