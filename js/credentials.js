function checkLogin()
{
    var name = document.forms["login_form"]["name"].value;
    var password = document.forms["login_form"]["password"].value;
    var login_type = document.forms["login_form"]["login_type"].value;

    if (login_type != null && login_type == "chef")
    {
        document.forms["login_form"].action = "inactive_chef.html"
    }
    else if(login_type != null && login_type == "customer")
    {
        document.forms["login_form"].action = "customize.html"
    }

    if (name == null || name.trim() == "" || password == null || password.trim() == "" || login_type == null || login_type == "")
    {
        alert("Please Fill All Required Field");
        return false;
    }
}

function checkSignup()
{
    var name = document.forms["signup_form"]["name"].value;
    var password = document.forms["signup_form"]["password"].value;
    var password_check = document.forms["signup_form"]["check_password"].value;
    var email = document.forms["signup_form"]["email"].value;
    var login_type = document.forms["signup_form"]["login_type"].value;

    if (name == null || name.trim() == "" || 
    password == null || password.trim() == "" || 
    password_check == null || password_check.trim() == "" ||
    email == null || email.trim() == "" ||
    login_type == null || login_type == "")
    {
        alert("Please Fill All Required Field");
        return false;
    }

    if (password != password_check)
    {
        alert("Password does not match");
        return false;
    }
}

function checkCustomize()
{
    var food_type = document.forms["customize_form"]["foodtype"].value;
    var location = document.forms["customize_form"]["location"].value;
    var time = document.forms["customize_form"]["time"].value;
    var phone = document.forms["customize_form"]["telephone"].value;

    if (food_type == null || food_type.trim() == "" || 
    location == null || location.trim() == "" || 
    time == null || time.trim() == "" ||
    phone == null || phone.trim() == "")
    {
        alert("Please Fill All Required Field");
        return false;
    }
}

function checkChefs()
{
    var chef = document.forms["list_form"]["chef"].value;

    if (chef == null || chef.trim() == "") 
    {
        alert("Please Pick A Chef");
        return false;
    }
}