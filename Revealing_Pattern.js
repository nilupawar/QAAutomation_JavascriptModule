
var obj = (function () {

    function showFirstMessage(firstName) {
        console.log(`My first name is : ${firstName}`);
    }

    function showLastName(lastName) {
        console.log(`My last name is : ${lastName} `);
    }

    return {
        showFirstMessage : showFirstMessage,
        showLastName: showLastName
    }
})();


obj.showFirstMessage("Nilesh");
obj.showLastName("Pawar")
