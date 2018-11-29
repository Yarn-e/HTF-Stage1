let pressedKeys = [];

function postKeyPad(){
    
    var body = JSON.stringify({
          "sequence" : "1,2,3,4,5"
        });
    
    
    fetch("http://involved-htf-js-2018-prod.azurewebsites.net/api/challenge/1", 
      {
        method: "POST",
        headers:{
            "Content-Type":  "application/json",
            "Accept": "application/json",
            "x-team" : "test",
            
        },
        body: body
      })
    .then(function(response) {
    return response;
  }).then(data => console.log(data));
}
postKeyPad();

function addInputToArray(){
    
}


$(".btnKeyPad").on("click", () => {
    console.log(this.value);
})

