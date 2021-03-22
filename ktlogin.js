function validate() {
    var u = document.getElementById("txtusername").value;
    var p = document.getElementById("txtpassword").value;
      
    if(u== "") {
        alert("Vui lòng nhập tên đăng nhập!");
        return false;
    }
    else if(p == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    else if(u=="admin" && p=="admin"){
        window.location='/home.html';
    }
    else{
        alert("Đăng nhập không thành công!");
        return false;
    }
}