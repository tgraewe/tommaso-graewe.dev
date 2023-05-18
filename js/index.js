function sendEmail(){
    var params = {
        name: document.getElementsById("name").value , 
        email: document.getElementsById("email").value ,
        message: document.getElementsById("message").value ,
    }


const service_id = "service_zda2bjs";
const template_id = "template_fadk9td";

emailjs
    .send(service_id, template_id, params)
    .then(
        res=>{
            document.getElementsById("name").value = "";
            document.getElementsById("email").value = "";
            document.getElementsById("message").value = "";
            console.log(res);
            alert("your message sent successfully");
    })
    .catch((err)=>console.log(err));

}