function checkout()
{
    var payment = document.forms["order_status_form"]["payment"].value;
    var cardholder = document.forms["order_status_form"]["cardholder"].value;
    var cardnumber = document.forms["order_status_form"]["cardnumber"].value;
    var date = document.forms["order_status_form"]["date"].value;
    var verification = document.forms["order_status_form"]["verification"].value;
    var zipcode = document.forms["order_status_form"]["zipcode"].value;

    if (payment == null || cardholder == null || cardnumber == null || 
    date == null || verification == null || zipcode == null)
    {
        alert("Please fill out the form");
        return false;
    }

    if (payment.trim() == "" || cardholder.trim() == "" || cardnumber.trim() == "" || 
        date.trim() == "" || verification.trim() == "" || zipcode.trim() == "")
        {
            alert("Please fill out the form");
            return false;
        }
}

function populatePrice()
{
    var sessionStorage = window.sessionStorage;
    document.getElementById("cardspan").innerHTML = "Pay $" + sessionStorage.getItem("cost")  +  " with credit card";
    document.getElementById("paypalspan").innerHTML = "Pay $" + sessionStorage.getItem("cost") + " with credit card";
} 
populatePrice();