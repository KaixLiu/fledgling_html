window.addEventListener('load', function () {
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var focus = document.querySelector('.focus');
    //第一个功能鼠标经过轮播图左右按钮离开，离开时隐藏
    focus.addEventListener('mouseover', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(times);
        times = null;
    })
    //隐藏
    focus.addEventListener('mouseout', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        times = setInterval(function () {
            next.click();
        }, 2000)
    })

    //第二个功能，小圆点
    var imgul = document.querySelector('.imgul');//获取背景图片ul
    var nav = document.querySelector('.focus-nav');//获取小圆点ul
    var focusWidth = focus.offsetWidth;//图片宽度
    var cicrle = 0;
    var num = 0;
    for (var i = 0; i < imgul.children.length; i++) {//有多少个背景图片
        var li = document.createElement('li');//就创建多少个li

        li.setAttribute('index', i);
        nav.appendChild(li);//然后添加到小圆点ul的后面

        // 小圆点排他思想
        li.addEventListener('click', function () {
            //干掉所有人
            for (var i = 0; i < nav.children.length; i++) {
                nav.children[i].className = '';
            }
            //随下自己
            this.className = 'selected';
            //点击小圆圈移动图片ul
            //ul的移动距离为小圆圈的索引号*图片宽度
            var index = this.getAttribute('index');
            //当我们点击了摸个li就把该索引号给num
            num = index;
            cicrle = index;
            animate(imgul, -index * focusWidth);
        })
    }
    nav.children[0].className = 'selected';


    //复制第一张图片到最后
    var first = imgul.children[0].cloneNode(true);
    imgul.appendChild(first);
    next.addEventListener('click', function () {
        if (num == imgul.children.length - 1) {
            imgul.style.left = 0;
            num = 0;
        }
        num++;
        animate(imgul, -num * focusWidth);
        cicrle++;
        if (cicrle == nav.children.length) {
            cicrle = 0;
        }
        circleCang();
    })
    prev.addEventListener('click', function () {
        if (num == 0) {
            num = imgul.children.length - 1;
            imgul.style.left = -(nav.children.length - 1) * focusWidth + 'px';

        }
        num--;
        animate(imgul, -num * focusWidth);
        cicrle--;
        if (cicrle < 0) {
            cicrle = nav.children.length - 1;
        }
        circleCang();

    })
    function circleCang() {
        for (i = 0; i < nav.children.length; i++) {
            nav.children[i].className = '';
        }
        nav.children[cicrle].className = 'selected';
    }
    var times =setInterval(function () {
        next.click();
    }, 2000)



})                                       