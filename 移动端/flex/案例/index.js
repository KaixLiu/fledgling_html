window.addEventListener('load', function () {
    var imgul = document.querySelector('.imgul');//图片盒子
    var nav = document.querySelector('.nav-xx');//小圆点
    var focus = document.querySelector('.focus');//最大盒子

    var w = focus.offsetWidth;//最大盒子的宽度
    var num = 0;


    //复制第一张图片给最后一张图片
    var first = imgul.children[1].cloneNode(true);
    imgul.appendChild(first);
    var time = setInterval(function () {

        num++;
        var translatex = -num * w;//移动距离
        imgul.style.transition = 'all,.3s';//动画过度效果
        imgul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000)
    //等着过渡完成再去判断transitionend
    imgul.addEventListener('transitionend', function () {
        if (num >= 3) {
            num = 0;
            imgul.style.transition = 'none';//取消过渡效果让他立即还原
            var translatex = -num * w;//计算新的移动距离
            imgul.style.transform = 'translateX(' + translatex + 'px)';
        }
        else if (num < 0) {//向前滚动
            num = 2;//第三张索引号
            imgul.style.transition = 'none';
            var translatex = -num * w;
            imgul.style.transform = 'translateX(' + translatex + 'px)';
        }
        //小圆点跟随
        //把带有current选出来去掉remove
        nav.querySelector('.current').classList.remove('current');
        //让当前索引号的小li加上current
        nav.children[num].classList.add('current');
    })
    var startX = 0;
    var moveX = 0;
    imgul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(time);
    });
    imgul.addEventListener('touchmove', function (e) {
        //计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        //移动盒子
        var translatex = -num * w + moveX;
        //手指拨动不需要动画效果
        imgul.style.transition = 'none';
        imgul.style.transform = 'translateX(' + translatex + 'px)';
    });
    imgul.addEventListener('touchend', function (e) {
        if (Math.abs(moveX) > 50) {
            if (moveX > 0) {
                num--;
            }
            else {
                num++;
            }
            var translatex = -num * w;
            imgul.style.transition = 'all,.3s';
            imgul.style.transform = 'translateX(' + translatex + 'px)';
        }
        else {
            var translatex = -num * w;
            imgul.style.transition = 'all,.3s';
            imgul.style.transform = 'translateX(' + translatex + 'px)';
        }
    })


    //返回顶部
    var goback = document.querySelector('.goback');
    var jj = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= jj.offsetTop) {
            goback.style.display = 'block';
        }
        else {
            goback.style.display = 'none';
        }

    });
    goback.addEventListener('click',function(){
        window.scroll(0,0);
    })
})