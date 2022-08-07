/// <reference path="jquery.min.js"/>
/*------------------------------------------------------------/
功能：设置列表中表项获取鼠标焦点时的背景色
参数：li_col【可选】 鼠标所在表项行的背景色
返回：原调用对象
示例：$("ul").focusColor("red");
/------------------------------------------------------------*/
; (function($){
    $.fn.extend ({
        "focusColor":function(li_col){
            var def_col="#ccc";
            var lst_col="#fff";
            li_col=(li_col == undefined)? def_col : li_col;
            $(this) .find("li").each(function(){
                $(this).mouseover(function(){
                    $(this).css("background-color",li_col);
                }).mouseout(function(){
                    $(this).css("background-color","#fff");
                })
            })
            return $(this);
        }
    });
})(jQuery);