const pressedKeys = [];

function postKeyPad(){
    
    var bodybeforejson = pressedKeys.join(",");
    console.log(bodybeforejson);
    var body = JSON.stringify({
        "sequence" : bodybeforejson});
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

function addInputToArray(getal){
    pressedKeys.push(getal);
    $("#passcode").val(pressedKeys.join(","));
    console.log(pressedKeys);
}

$(document).ready(() => {
    $(".btnKeyPad").on("click", (elem) => {
    addInputToArray(elem.target.value);
})
    $("#submit").on("click", () => {
        postKeyPad();
    })
})

