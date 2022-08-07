window.addEventListener('load', function () {
    var sj = document.querySelector('.sjh');//手机号码
    var dx = document.querySelector('.dxyzm');//QQ验证码
    var dr = document.querySelector('.drmm');//登入密码
    var qr = document.querySelector('.qrmm');//确认密码
    var yes = document.querySelector('.yes');//同意协议注册
    var regsj = /^[0-9]{11,11}$/;//手机号码要求
    var regdx = /^[0-9]{6,11}$/;//短信验证码要求
    var regmm = /^[a-zA-Z0-9?!~_+.]{8,16}/;//密码要求

    regexp(sj, regsj);//当按下手机框时调用
    regexp(dx, regdx);//当按下QQ框时调用
    regexp(dr, regmm);//当按下登入密码框时调用
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (ele.value == '') {

            } else {
                if (reg.test(this.value)) {
                    this.nextElementSibling.className = 'success';
                    this.nextElementSibling.innerHTML = '<i class="success-icon"></i> 正确';
                }
                else {
                    this.nextElementSibling.className = 'error';
                    this.nextElementSibling.innerHTML = '<i class="error-icon"></i>格式不正确，请重新输入';

                }
            }
        }
    }


    //判断密码是否一致
    qr.onblur = function () {
        if (qr.value == '') {

        }
        else {
            if (qr.value === dr.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success-icon"></i> 正确';
            }
            else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error-icon"></i>与上述密码不符，请重新输入';
            }
        }
    }

})