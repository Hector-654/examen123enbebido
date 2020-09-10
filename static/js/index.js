//https://www.eclipse.org/paho/clients/js/

function SUMA() {
	var a,b;
	//a = "1000";
	//b = "4000";
	var cd1 = parseFloat(document.getElementById('cd1').value);
	var cd2 = parseFloat(document.getElementById('cd2').value);
	
	message =new Paho.MQTT.Message("S"+" "+ cd1+ " " + cd2);
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
  
}
function RESTA(){
	var a,b;
	//a = "1000";
	//b = "4000";
	var cd1 = parseFloat(document.getElementById('cd1').value);
	var cd2 = parseFloat(document.getElementById('cd2').value);
	
	message =new Paho.MQTT.Message("R"+" "+ cd1+" " + cd2);
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "654hector1@gmail.com",
    password: "naruto798199429",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("654hector1@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "654hector1@gmail.com/kop";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
	//console.log("mensaje del sensor:"+message.payloadString);
	text=(message.payloadString);
	 console.log(text)
	 document.getElementById("n1").innerHTML = text;
	
	

  
  }
  
  
