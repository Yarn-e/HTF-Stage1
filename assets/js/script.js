const pressedKeys = [];

/**
 * Checks the passcode with the API
 *
 * @param passcode
 *   The json passcode.
 *   
 * @returns {Promise<Response>}
 */
function postPassCode(passcode) {
    return fetch("http://involved-htf-js-2018-prod.azurewebsites.net/api/challenge/1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-team": "lawyer"
        },
        body: passcode
    }).then((response) => {
        return response;
    }).then((data) => {
        return data;
    })
}

/**
 * Checks the passCode and shows a response to the user.
 *
 * @returns {Promise<void>}
 */
async function checkPassCode() {
    let code = pressedKeys.join(",");
    let parsedCode = JSON.stringify({"sequence": code});

    let response = await postPassCode(parsedCode);
    let responseText = "Bad passcode!";
    if (response.ok) {
        $('#passcode').addClass("text-good");
        responseText = "Good passcode!";
    } else {
        $('#passcode').addClass("text-bad");
    }

    $('#passcode').val(responseText);
}

function addInputToArray(getal) {
    pressedKeys.push(getal);
    $("#passcode").val(pressedKeys.join(" "));
}

$(document).ready(() => {
    $(".btnKeyPad").on("click", (elem) => {
        addInputToArray(elem.target.value);
    });
    $("#submit").on("click", () => {
        checkPassCode();
    })
});

