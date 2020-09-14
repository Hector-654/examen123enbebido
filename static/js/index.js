//https://www.eclipse.org/paho/clients/js/



function suma(){
	var num1=Number(document.getElementById('n1').value);
	var num2=Number(document.getElementById('n2').value);
	
	message =new Paho.MQTT.Message("Sum"+" "+ num1+" "+ num2);
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
	
	var res=num1+num2;
	
	document.getElementById('res').value=res;
	console.log("la suma es:...."+res);
}

function resta(){
	var num1=Number(document.getElementById('n1').value);
	var num2=Number(document.getElementById('n2').value);
	
	message =new Paho.MQTT.Message("Res"+" "+ num1+" "+ num2);
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
	
	var res=num1-num2;
	document.getElementById('res').value=res;
	console.log("la resta es:...."+res);
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
	text=(message.payloadString);
	console.log(text)
	document.getElementById("res2").innerHTML = text;
 
	//console.log("mensaje del sensor:"+message.payloadString);
	
	

  
  }
  
  
