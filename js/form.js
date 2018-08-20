function register_inf (){
    var reg_inf={};
    reg_inf.account=$("#reg_account").val();
    reg_inf.name=$("#reg_name").val();
    reg_inf.stuno=$("#reg_stu_no").val();
    reg_inf.college=$("#reg_college").val();
    reg_inf.phone=$("#reg_phone").val();
    reg_inf.password=$("#reg_password").val();

    return reg_inf;
}

function login_inf(){
    var log_inf={};
    log_inf.account=$("#log_account").val();
    log_inf.password=$("#log_password").val();
    return log_inf;
}
