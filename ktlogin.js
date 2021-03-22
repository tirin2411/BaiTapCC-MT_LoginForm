function validate() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
      
    if(u== "") {
        alert("Vui lòng nhập tên đăng nhập!");
        return false;
    }
    else if(p == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    else if(u=="admin" && p=="admin"){
        alert("Đăng nhập thành công! Xin chào "+u+"!");
    }
    else
    alert("Đăng nhập không thành công!");
    return true;
}