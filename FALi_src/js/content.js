$(function(){
  //在 对应页面 类选择器.tb-meta 插入DIV块。 三目运算符
  -1!=window.location.href.indexOf("detail.tmall.com")||
  -1!=window.location.href.indexOf("detail.yao.95095.com")||
  -1!=window.location.href.indexOf("world.tmall.com")?
  ($(".tb-meta").prepend('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("item.taobao.com")?
  ($(".tb-meta").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("world.taobao.com")?
  ($("#J_TbcPresale").before('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("detail.ju.taobao.com")?
  ($(".description").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("detail.tmall.hk")?
  ($(".tm-fcs-panel").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("items.alitrip.com")?
  ($(".detail-ind").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("hotel.alitrip.com")?
  ($(".hotel-meta").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("item.alitrip.com")?
  ($(".tb-meta").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("detail.alitrip.hk")?
  ($(".tm-fcs-panel").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  -1!=window.location.href.indexOf("tuan.alitrip.com")?
  ($(".tm-ind-panel").after('<div id="fali" style="margin-top:10px;margin-bottom:5px"></div>')):
  1;
  addDivElement();
});

//获取各个数据，渲染网页
"use strict";
var author_url = "http://www.quanweiwei.cn";
var logo_src = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png";

var faliElements = React.createClass({
  displayName: "faliElements",
  render: function render() {
    return React.createElement(
      "div",
      {id: 'fali-wrapper'},
      React.createElement(   //顶部head DIV，显示功能。
        "div",
        {id: 'fali-head'},
        React.createElement(   //logo
          "div",
          {id: 'fali-logo'},
          React.createElement(         //logo 超链接
            "a",
            {href: 'author_url'},
            React.DOM.img(
              {id: 'logo',
               src:logo_src}
              )
            )
          ),
        React.createElement(   //价格趋势
          "div",
          {id: 'fali-qushi'},
          "qushi"
          ),
        ),
      React.createElement(   //下面 content DIV，显示一些广告信息。
        "div",
        {id: 'fali-content'},
        "world")
    );
  }
});
//根据淘宝，天猫，阿里旅行等网址不同，查找网页对应位置添加 DIV 区块。
function addDivElement(){
  ReactDOM.render(React.createElement(faliElements),
    document.getElementById('fali')
  );
}
