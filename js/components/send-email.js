function sendMail(params){
    var tempParams ={
        from_name: document.getElementById("nome").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_c99ewws','template_g28hc9p',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}