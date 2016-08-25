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

//URL工具类通过页面URL获取参数信息
var URLUtils = {
  //获取url中的参数
  getUrlParam:function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
  }
};
var urlUtils = Object.create(URLUtils); //实例化urlUtils对象

//获取各个数据，渲染网页
"use strict";
var author_url = "http://www.quanweiwei.cn";  //作者主页
var logo_src = "http://www.kanhaody.com/FALi/logo.png"; //logo

//fali_logo start
var fali_head_logo_a_img = React.DOM.img({src:logo_src,alt:'网购返利助手',title:'网购返利助手'});
var fali_head_logo_a = React.DOM.a({href:author_url,target:'_blank'},fali_head_logo_a_img);
var fali_head_logo = React.DOM.div({id:'fali_head_logo'},fali_head_logo_a);

//fali_qushi start 价格趋势开始
chrome.runtime.sendMessage(
  {type:"gajax",url:"http://s.etao.com/detail/"+urlUtils.getUrlParam('id')+".html"},
  function(response){
    if("ok"== response.msg){
      var pageData=response.data.replace(/(\s{2,}|\n)/gim,""); //获取etao 页面代码，去掉空格
      var date_prices = pageData.match(/points.*\[(.*)\]};/m);
      if(null != date_prices){
        var date_prices = date_prices[0]; //获取到第一个匹配到的串 包含了日期  和 价格。
        date_prices=date_prices.replace("points : [[","");
        date_prices=date_prices.replace("]]};","");
        var day_price_array=date_prices.split("],["); //格式：  '2016-08-24',58 的数组

        var day_item_array =  new Array();  //2016-08-24  日期数组
        var price_item_array = new Array(); // 单日价格数组

        for (var index in day_price_array){
          var day_price_item_array = day_price_array[index].split(","); //将每个 '2016-08-24',58 类型的串分割
          var day_item = day_price_item_array[0].replace(/'/g,""); //日期  格式为 2016-08-25
          day_item_array.push(day_item);
          var price_item = day_price_item_array[1]; //价格
          price_item = Number(price_item);
          price_item_array.push(price_item);
        }
        console.log(price_item_array);
        //图表
        $('#fali_float_qushi').highcharts({
            colors: ['#ED561B', '#DDDF00', '#058DC7', '#50B432', '#24CBE5', '#64E572',
                '#FF9655', '#FFF263', '#6AF9C4'],
            title: {
                text: '近期价格趋势',
                x: -20 //center
            },
            subtitle: {
                text: '数据来源:etao.com',
                x: -20
            },
            xAxis: {
                categories: day_item_array
            },
            yAxis: {
                title: {
                    text: '价格（元）'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '元'
            },
            series: [{
              name: '价格',
              data: price_item_array
            }]
        });
      }else{
        var priceExp=new RegExp("<span class='original-price del'>￥(.*?)</span>","g"),
        price = priceExp.exec(pageData);
        if(null!=price){
          //图表
        }
      }
    }

  });


var fali_head_qushi = React.DOM.div({id:'fali_head_qushi'},'价格趋势');


//fali_head start
var fali_head = React.DOM.div({id:'fali_head'},fali_head_logo,fali_head_qushi); //DIV : id=fal_head ,内部包含： logo 价格趋势 普通返利 高额返利 加群赞助 5个块

//fali_content start
var fali_content = React.DOM.div({id:'fali_content'},'fali_content');

//fali_float_qushi div start,浮动显示价格趋势的div块，是fali_wrapper的子块
var fali_float_qushi = React.DOM.div({id:'fali_float_qushi'},'fali_float_qushi');

//fali_float_simple_fanli div start,浮动显示普通返利的div块，是fali_wrapper的子块
var fali_float_simple_fanli = React.DOM.div({id:'fali_float_simple_fanli'},'fali_float_simple_fanli');

//fali_float_high_fanli div start,浮动显示高额返利的div块，是fali_wrapper的子块
var fali_float_high_fanli = React.DOM.div({id:'fali_float_high_fanli'},'fali_float_high_fanli');

//fali_float_qq_donate div start,浮动显示qq群和捐助的div块，是fali_wrapper的子块
var fali_float_qq_donate = React.DOM.div({id:'fali_float_qq_donate'},'fali_float_qq_donate');

var faliElements = React.createClass({
  displayName: "faliElements",

  render: function render() {
    return React.createElement("div",{id: 'fali_wrapper'},fali_head,fali_content,fali_float_qushi,fali_float_simple_fanli,fali_float_high_fanli,fali_float_qq_donate);   //创建fali_wrapper 包裹DIV
  }
});
//根据淘宝，天猫，阿里旅行等网址不同，查找网页对应位置添加 DIV 区块。
function addDivElement(){
  ReactDOM.render(React.createElement(faliElements),
    document.getElementById('fali')
  );
}
