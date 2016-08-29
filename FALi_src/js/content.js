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

  //渲染完页面后使用jQuery 调整宽度
  var allWidth = $("#fali_wrapper").width();
  $("#fali_head_high_fanli").width(allWidth * 0.25 - 6);

  $("#fali_content").width(allWidth-2);
  $("#fali_float_qushi,#fali_float_coupon,#fali_float_simple_fanli,#fali_float_high_fanli").width(allWidth-2);


  $("#fali_head_qushi").hover(function(){
    $("#fali_float_qushi").show();
    $(this).addClass("fali_head_visited");
  },function(){
    $("#fali_float_qushi").hide();
    $(this).removeClass("fali_head_visited");
  });
  $("#fali_float_qushi").hover(function(){
    $("#fali_head_qushi").addClass("fali_head_visited");
    $(this).show();
  },function(){
    $("#fali_head_qushi").removeClass("fali_head_visited");
    $(this).hide();
  });


  $("#fali_head_coupon").hover(function(){
    $("#fali_float_coupon").show();
    $(this).addClass("fali_head_visited");
  },function(){
    $("#fali_float_coupon").hide();
    $(this).removeClass("fali_head_visited");
  });
  $("#fali_float_coupon").hover(function(){
    $("#fali_head_coupon").addClass("fali_head_visited");
    $(this).show();
  },function(){
    $("#fali_head_coupon").removeClass("fali_head_visited");
    $(this).hide();
  });


  $("#fali_head_simple_fanli").hover(function(){
    $("#fali_float_simple_fanli").show();
    $(this).addClass("fali_head_visited");
  },function(){
    $("#fali_float_simple_fanli").hide();
    $(this).removeClass("fali_head_visited");
  });
  $("#fali_float_simple_fanli").hover(function(){
    $("#fali_head_simple_fanli").addClass("fali_head_visited");
    $(this).show();
  },function(){
    $("#fali_head_simple_fanli").removeClass("fali_head_visited");
    $(this).hide();
  });


  $("#fali_head_high_fanli").hover(function(){
    $("#fali_float_high_fanli").show();
    $(this).addClass("fali_head_visited");
  },function(){
    $("#fali_float_high_fanli").hide();
    $(this).removeClass("fali_head_visited");
  });
  $("#fali_float_high_fanli").hover(function(){
    $("#fali_head_high_fanli").addClass("fali_head_visited");
    $(this).show();
  },function(){
    $("#fali_head_high_fanli").removeClass("fali_head_visited");
    $(this).hide();
  });


  //复制链接
  var clipboard = new Clipboard('.copy_url');
});

//"use strict";
var author_url = "http://www.quanweiwei.cn";  //作者主页
var taokezhushou_url = "http://zhushou3.taokezhushou.com/"; //淘客助手API根网址

//URL工具类通过页面URL获取参数信息
var FALiUtils = {
  //获取url中的参数
  getUrlParam:function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
  },
  getItemId:function(){
    return this.getUrlParam('id');
  },
  strCount: function(source_str,count_str) { //统计字符出现次数
		// 用正则匹配将各个字符从字符串中替换掉，直接用正则匹配的match().length获取每个字符出现的次数
		source_str = source_str.replace(/(\s{2,}|\n)/gim,"");//去除空格
    var reg = new RegExp(count_str,"gim");
    var result = source_str.match(reg).length;
		return result;
	},
  getSellerId:function(){
    var pageData = $(document.body).html(); //获取本页面源码
    var sellerId = pageData.match(/sellerId=(\d+)&/im)[1];
    return sellerId;
  }

};
var faliUtils = Object.create(FALiUtils); //实例化FALiUtils对象

//获取各个数据，渲染网页
/***********fali_logo start***********/
var fali_head_logo_a_div = React.DOM.div({id:'fali_head_logo_a_div'},"F•ALi");
var fali_head_logo_a = React.DOM.a({href:author_url,target:'_blank'},fali_head_logo_a_div);
var fali_head_logo = React.DOM.div({id:'fali_head_logo'},fali_head_logo_a);


/***********fali_qushi start 价格趋势开始***********/
chrome.runtime.sendMessage(
  {type:"gajax",url:"http://s.etao.com/detail/"+faliUtils.getItemId()+".html"},
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
          day_item = day_item.substr(6).replace(/-/g,"/");
          day_item_array.push(day_item);
          var price_item = day_price_item_array[1]; //价格
          price_item = Number(price_item);
          price_item_array.push(price_item);
        }
        //console.log(price_item_array);
        //图表
        $('#fali_float_qushi').highcharts({
            colors: ['#EB4F38', '#DDDF00', '#058DC7', '#50B432', '#24CBE5', '#64E572',
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
                categories: day_item_array,
                gridLineWidth: 1,
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
        price = priceExp.exec(pageData)[1];
        if(null!=price){
          var price =  Number(price) ;
          var price_array = new Array();
          price_array.push(price);

          var date = new Date();
          var day = date.getUTCFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
          var day_array = new Array();
          day_array.push(day);
          //图表
          $('#fali_float_qushi').highcharts({
              colors: ['#EB4F38', '#DDDF00', '#058DC7', '#50B432', '#24CBE5', '#64E572',
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
                  categories: day_array,
                  gridLineWidth: 1,
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
                data: price_array
              }]
          });
        }
      }
    }
  });

var fali_head_qushi_title = React.DOM.span({id:'fali_head_qushi_title'},'价格趋势');
var fali_head_qushi = React.DOM.div({id:'fali_head_qushi',className:'no-left-border'},fali_head_qushi_title);

/*************fali_head_coupon start 优惠券开始***********/

var fali_head_coupon_count = React.createClass({
  displayName:"fali_head_coupon_count",

  getInitialState: function getInitialState() { //初始化优惠券数量 0
    return { couponCount: 0};
  },
  getCouponInfo: function getCouponInfo() { //获取优惠券信息
    chrome.runtime.sendMessage( //使用taokezhushou api 获取店铺优惠券 activity_id
      {type:"gajax",url:taokezhushou_url+"api/v1/coupons_base/"+faliUtils.getSellerId()+"?item_id="+faliUtils.getItemId()},
      function(response_taoke){

        if("ok"==response_taoke.msg && 200==response_taoke.data.status &&response_taoke.data.data.length > 0){
          var coupons_count = response_taoke.data.data.length; //获取 activity_id 的数量 每个activity_id 代表一个优惠券名称
          if(coupons_count > 0){
            $("#getting_coupon").hide(); //隐藏正在获取优惠券的提示
          }

          for(var i = 0 ; i<coupons_count; i++){
            var activity_id = response_taoke.data.data[i]["activity_id"];
            //console.log(activity_id);
            chrome.runtime.sendMessage({type:"gajax",url:"http://shop.m.taobao.com/shop/coupon.htm?seller_id="+faliUtils.getSellerId()+"&activity_id="+activity_id},
              function(response_coupon){
                if("ok"==response_coupon.msg){
                  var pageData=response_coupon.data.replace(/(\s{2,}|\n)/gim,""); //获取 页面代码，去掉空格
                  var reg = new RegExp("已领用");
                  if(reg.test(response_coupon.data)){ //有优惠券可用
                    var regdata = new RegExp('<dt>(.*?)元优惠券</dt><dd>剩<span class="rest">(.*?)</span>张（已领用<span class="count">(.*?)</span>张）</dd><dd>单笔满(.*?)元可用，每人限领(.*?) 张</dd><dd>有效期:(.*?)至(.*?)</dd>');
                    var coupon_info_array = regdata.exec(pageData);

                    var coupon_amount = coupon_info_array[1]; //优惠券金额
                    var coupon_rest = coupon_info_array[2]; //优惠券剩余数量
                    var coupon_receive = coupon_info_array[3]; //已领取数量
                    var coupon_applyAmount = coupon_info_array[4]; //满多少使用的金额
                    var coupon_limit = coupon_info_array[5]; //限领数量
                    var coupon_startTime = coupon_info_array[6].replace(/\-/g,"/").substr(5); //优惠券开始使用日期
                    var coupon_endTime = coupon_info_array[7].replace(/\-/g,"/").substr(5); //优惠券到期日期

                    var coupon_receive_url = response_coupon.url;

                    $("#fali_float_coupon_table_tbody").append("<tr>"+
                                                                "<td width=\'22%\'>"+ "满" + coupon_applyAmount + "减" + coupon_amount + "</td>"+
                                                                "<td width=\'22%\'>"+ coupon_startTime +" ~ "+ coupon_endTime +"</td>"+
                                                                "<td width=\'12%\'>"+ coupon_receive + "</td>" +
                                                                "<td width=\'12%\'>"+ coupon_rest + "</td>" +
                                                                "<td width=\'10%\'>"+ coupon_limit + "</td>" +
                                                                "<td width=\'11%\'>"+ "<a href=\""+ coupon_receive_url +"\" target=\"_blank\">领取</a>" + "</td>" +
                                                                "<td width=\'11%\'>"+ "<a class=\"copy_url\" data-clipboard-text=\"" + coupon_receive_url + "\" href=\"javascript:void(0);\">复制</a>" + "</td>" +
                                                                "</tr>");

                  }else{//无优惠券可用 返回DELETE给API 删除 activity_id
                    chrome.runtime.sendMessage({type:"pajax",postdata:{_method:"DELETE"},url:taokezhushou_url+"api/v1/coupons_base/"+activity_id});
                    //$("#fali_float_coupon_table_tbody").append("<tr><td colspan=\"8\"> 该张商品优惠券已经过期！</td></tr>");
                  }

                  var source = $("#fali_float_coupon_table_tbody").html();
                  var coupons_num = faliUtils.strCount(source,"领取");
                  $("#fali_head_coupon_count").html(" "+ coupons_num +"张");  //修改优惠券标题中的 优惠券数量
                }
              });
          }

        }else{
          $("#getting_coupon").hide(); //隐藏正在获取优惠券的提示
          $("#fali_float_coupon_table_tbody").append("<tr><td colspan=\"8\"> 该商品没有优惠券！</td></tr>");
        }
      }
    );
  },
  //componentWillMount会在组件render之前执行，并且永远都只执行一次。
  componentWillMount: function componentWillMount(){
    this.getCouponInfo();
  },
  //这个方法会在组件加载完毕之后立即执行。在这个时候之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
  componentDidMount: function componentDidMount() {

  },
  //在组件从DOM unmount后立即执行.
  componentWillUnmount: function componentWillUnmount() {

  },
  render: function render() {
    return React.createElement(
      "span",
      {id:'fali_head_coupon_count'},
      " ",
      this.state.couponCount,
      "张"
    );
  }
});
var fali_head_coupon_title = React.DOM.span({id:'fali_head_coupon_title'},'优惠券',React.createElement(fali_head_coupon_count, null));
var fali_head_coupon = React.DOM.div({id:'fali_head_coupon',className:'no-left-border'},fali_head_coupon_title);

//fali_head_simple_fanli start 普通返利界面开始
var fali_head_simple_fanli_title = React.DOM.span({id:'fali_head_simple_fanli_title'},'普通返利');
var fali_head_simple_fanli_percent = React.DOM.span({id:'fali_head_simple_fanli_percent'},' 0%');
var fali_head_simple_fanli = React.DOM.div({id:'fali_head_simple_fanli',className:'no-left-border'},fali_head_simple_fanli_title,fali_head_simple_fanli_percent);

//fali_head_high_fanli start 高额返利界面开始
var fali_head_high_fanli_title = React.DOM.span({id:'fali_head_high_fanli_title'},'高额返利');
var fali_head_high_fanli_percent = React.DOM.span({id:'fali_head_high_fanli_percent'},' 0%');
var fali_head_high_fanli = React.DOM.div({id:'fali_head_high_fanli',className:'no-left-border'},fali_head_high_fanli_title,fali_head_high_fanli_percent);


//fali_head start
var fali_head = React.DOM.div({id:'fali_head'},fali_head_logo,fali_head_qushi,fali_head_coupon,fali_head_simple_fanli,fali_head_high_fanli); //DIV : id=fal_head ,内部包含： logo 价格趋势 普通返利 高额返利 加群赞助 5个块

//fali_content start
var fali_content = React.DOM.div({id:'fali_content',className:'no-top-border'},'fali_content');

//fali_float_qushi div start,浮动显示价格趋势的div块，是fali_wrapper的子块
var fali_float_qushi = React.DOM.div({id:'fali_float_qushi'});

//fali_float_qq_donate div start,浮动显示qq群和捐助的div块，是fali_wrapper的子块
var fali_float_coupon_table_thead_tr_th07 = React.DOM.th({width:'11%'},'链接');
var fali_float_coupon_table_thead_tr_th06 = React.DOM.th({width:'11%'},'领取');
var fali_float_coupon_table_thead_tr_th05 = React.DOM.th({width:'10%'},'限领');
var fali_float_coupon_table_thead_tr_th04 = React.DOM.th({width:'12%'},'剩余');
var fali_float_coupon_table_thead_tr_th03 = React.DOM.th({width:'12%'},'已领');
var fali_float_coupon_table_thead_tr_th02 = React.DOM.th({width:'22%'},'有效期');
var fali_float_coupon_table_thead_tr_th01 = React.DOM.th({width:'22%'},'优惠券');
var fali_float_coupon_table_thead_tr = React.DOM.tr(null,fali_float_coupon_table_thead_tr_th01,fali_float_coupon_table_thead_tr_th02,
fali_float_coupon_table_thead_tr_th03,fali_float_coupon_table_thead_tr_th04,fali_float_coupon_table_thead_tr_th05,fali_float_coupon_table_thead_tr_th06,fali_float_coupon_table_thead_tr_th07);

var fali_float_coupon_table_thead = React.DOM.thead({id:'fali_float_coupon_table_thead'},fali_float_coupon_table_thead_tr);
var fali_float_coupon_table_tbody_tr_td_getting_coupon = React.DOM.span({id:'fali_float_coupon_table_tbody_tr_td_getting_coupon'},'优惠券正在获取中');
var fali_float_coupon_table_tbody_tr_td = React.DOM.td({id:'getting_coupon',colSpan:'8'},fali_float_coupon_table_tbody_tr_td_getting_coupon);
var fali_float_coupon_table_tbody_tr = React.DOM.tr(null,fali_float_coupon_table_tbody_tr_td);
var fali_float_coupon_table_tbody = React.DOM.tbody({id:'fali_float_coupon_table_tbody'},fali_float_coupon_table_tbody_tr);
var fali_float_coupon_table = React.DOM.table({width:'98%'},fali_float_coupon_table_thead,fali_float_coupon_table_tbody);
var fali_float_coupon = React.DOM.div({id:'fali_float_coupon'},fali_float_coupon_table);

//fali_float_simple_fanli div start,浮动显示普通返利的div块，是fali_wrapper的子块
var fali_float_simple_fanli_content_top = React.createClass({
  displayName:"fali_float_simple_fanli_content_top",

  getSimpleFanliInfo: function getSimpleFanliInfo() { //获取返利基本信息
    chrome.runtime.sendMessage({type:"gajax",url:"http://pub.alimama.com/items/search.json?q="+encodeURIComponent("http://item.taobao.com/item.htm?id="+faliUtils.getItemId())+"&perPageSize=50"},
    function(response_simplefanli){
      //console.log(response_simplefanli.data.data.pageList[0]);
      var new_fanliRate =  0; //普通返利比例
      var new_fanliCommFee =  0; //单比返利金额
      var new_fanliTotalNum =  0; //普通返利推广量
      var new_fanliTotalFee =  0; //普通返利推广返利总金额

      if("ok"==response_simplefanli.msg){
        if(response_simplefanli.data.hasOwnProperty("data")&&response_simplefanli.data.data.hasOwnProperty("pageList")&&null!=response_simplefanli.data.data.pageList){
          //console.log(response_simplefanli.data.data.pageList[0]);
          new_fanliRate =  response_simplefanli.data.data.pageList[0].tkRate; //普通返利比例
          new_fanliCommFee =  response_simplefanli.data.data.pageList[0].tkCommFee; //单比返利金额
          new_fanliTotalNum =  response_simplefanli.data.data.pageList[0].totalNum; //普通返利推广量
          new_fanliTotalFee =  response_simplefanli.data.data.pageList[0].totalFee; //普通返利推广返利总金额

          $("#fali_head_simple_fanli_percent").html(" " + new_fanliRate + "%");
        }
      }
      var fanli_fl_li_simplefanliUrl = "http://pub.alimama.com/promo/search/index.htm?q="+encodeURIComponent("http://item.taobao.com/item.htm?id="+faliUtils.getItemId());
      var fanli_fl_li01 = React.DOM.li({id:'fanli_fl_li01'},"返利比例：",React.DOM.span({id:"fanli_fl_li_fanliRate"},new_fanliRate,"%"),"(￥",new_fanliCommFee,")");
      var fanli_fl_li02 = React.DOM.li({id:'fanli_fl_li02'},"月返数量：",React.DOM.span({id:"fanli_fl_li_fanliTotalNum"},new_fanliTotalNum)," 单");
      var fanli_fl_li03 = React.DOM.li({id:'fanli_fl_li03'},"月返金额：",React.DOM.span({id:"fanli_fl_li_fanliTotalFee"},new_fanliTotalFee)," 元");
      var fanli_fl_li04 = React.DOM.li({id:'fanli_fl_li04'},"返利链接：",React.DOM.a({id:"fanli_fl_li_simplefanliUrl",href:fanli_fl_li_simplefanliUrl,target:"_blank"},"生成链接"));

      var fanli_fl_ul = React.createClass({
        displayName: "fanli_fl_ul",

        render: function render() {
          return React.createElement(
            "ul",
            {id:'fanli_fl_ul'},
            fanli_fl_li01,
            fanli_fl_li02,
            fanli_fl_li04,
            fanli_fl_li03
          );
        }
      });

      ReactDOM.render(React.createElement(fanli_fl_ul, null), document.getElementById('fali_float_simple_fanli_content_top'));

    });
  },
  //componentWillMount会在组件render之前执行，并且永远都只执行一次。
  componentWillMount: function componentWillMount(){
    this.getSimpleFanliInfo();
  },

  //这个方法会在组件加载完毕之后立即执行。在这个时候之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
  componentDidMount: function componentDidMount() {

  },

  render: function render() {
    return React.createElement(
      "div",
      {id:'fali_float_simple_fanli_content_top',className:'clearfix'}
    );
  }
});
//ReactDOM.render(React.createElement(fali_float_simple_fanli_content_top, null), document.getElementById('fali_float_simple_fanli_content_top'));

var fali_float_simple_fanli_content_bottom = React.createClass({
  displayName:"fali_float_simple_fanli_content_bottom",

  getSimpleFanliPlanInfo: function getSimpleFanliPlanInfo() { //获取淘客返利计划
    chrome.runtime.sendMessage({type:"gajax",url:""},
    function(response_simplefanliplan){
      if("ok"==response_simplefanliplan.msg){

      }

    });
  },

  //componentWillMount会在组件render之前执行，并且永远都只执行一次。
  componentWillMount: function componentWillMount(){
    this.getSimpleFanliPlanInfo();
  },

  render: function render() {
    var fali_float_simple_fanli_table_thead_tr_th07 = React.DOM.th({width:'10%'},'操作');
    var fali_float_simple_fanli_table_thead_tr_th06 = React.DOM.th({width:'10%'},'详情');
    var fali_float_simple_fanli_table_thead_tr_th05 = React.DOM.th({width:'16%'},'单品返利');
    var fali_float_simple_fanli_table_thead_tr_th04 = React.DOM.th({width:'16%'},'平均返利');
    var fali_float_simple_fanli_table_thead_tr_th03 = React.DOM.th({width:'15%'},'人工审核');
    var fali_float_simple_fanli_table_thead_tr_th02 = React.DOM.th({width:'10%'},'类型');
    var fali_float_simple_fanli_table_thead_tr_th01 = React.DOM.th({width:'23%'},'返利计划');
    var fali_float_simple_fanli_table_thead_tr = React.DOM.tr(null,fali_float_simple_fanli_table_thead_tr_th01,fali_float_simple_fanli_table_thead_tr_th02,
    fali_float_simple_fanli_table_thead_tr_th03,fali_float_simple_fanli_table_thead_tr_th04,fali_float_simple_fanli_table_thead_tr_th05,fali_float_simple_fanli_table_thead_tr_th06,fali_float_simple_fanli_table_thead_tr_th07);

    var fali_float_simple_fanli_table_thead = React.DOM.thead({id:'fali_float_simple_fanli_table_thead'},fali_float_simple_fanli_table_thead_tr);


    var fali_float_simple_fanli_table_tbody_tr = React.createClass({ //判断用户是否登录了淘宝联盟账号,提示 点击登录淘宝联盟后刷新本页面查看返利计划
      displayName:"fali_float_simple_fanli_table_tbody_tr",

      componentDidMount: function componentDidMount(){
        chrome.runtime.sendMessage({type:"gajax",url:"http://pub.alimama.com/shopdetail/campaigns.json?oriMemberId="+faliUtils.getSellerId()+"&_input_charset=utf-8"},
        function(response_simplefanli){
          if("ok"==response_simplefanli.msg){
            console.log(response_simplefanli);
            if(false != response_simplefanli.data.hasOwnProperty("info")){ //已登陆淘宝联盟
              if(response_simplefanli.data.hasOwnProperty("data")&&null!=response_simplefanli.data.data&&response_simplefanli.data.data.hasOwnProperty("campaignList")&&response_simplefanli.data.data.campaignList.length>0){
                //有返利计划
                $("#fali_float_simple_fanli_table_tbody_tr").remove();
                for(var i = 0 ; i<response_simplefanli.data.data.campaignList.length;i++){
                  var planName = response_simplefanli.data.data.campaignList[i].campaignName;
                  var avgfanliRate = response_simplefanli.data.data.campaignList[i].avgCommissionToString;
                  var shopKeeperId = response_simplefanli.data.data.campaignList[i].shopKeeperId;
                  var campaignId = response_simplefanli.data.data.campaignList[i].campaignId;
                }

              }else{
                //没有返利计划
                $("#fali_float_simple_fanli_table_tbody_tr td").html("该商品没有返利计划");
              }
            }
          }

        });
      },

      render: function render() {
        var fali_float_simple_fanli_table_tbody_tr_td_loading_a = React.DOM.a({id:'fali_float_simple_fanli_table_tbody_tr_td_loading_a',target:'_blank',href:'http://pub.alimama.com/myunion.htm'},
                                                                              '点击登录淘宝联盟后刷新本页面查看返利计划');
        var fali_float_simple_fanli_table_tbody_tr_td_loading = React.DOM.td({colSpan:'8'},fali_float_simple_fanli_table_tbody_tr_td_loading_a);

        return React.createElement(
          "tr",
          {id:'fali_float_simple_fanli_table_tbody_tr'},
          fali_float_simple_fanli_table_tbody_tr_td_loading
        );
      }
    });

    var fali_float_simple_fanli_table_tbody = React.DOM.tbody({id:'fali_float_simple_fanli_table_tbody'},React.createElement(fali_float_simple_fanli_table_tbody_tr, null));

    var fali_float_simple_fanli_table = React.DOM.table({width:'100%'},fali_float_simple_fanli_table_thead,fali_float_simple_fanli_table_tbody);

    return React.createElement(
      "div",
      {id:'fali_float_simple_fanli_content_bottom',className:'clearfix'},
      fali_float_simple_fanli_table
    );
  }
});

var fali_float_simple_fanli_content = React.DOM.div({id:'fali_float_simple_fanli_content'},
                                                    React.createElement(fali_float_simple_fanli_content_top, null),
                                                    React.createElement(fali_float_simple_fanli_content_bottom, null));

var fali_float_simple_fanli = React.DOM.div({id:'fali_float_simple_fanli'},fali_float_simple_fanli_content);

//fali_float_high_fanli div start,浮动显示高额返利的div块，是fali_wrapper的子块
var fali_float_high_fanli = React.DOM.div({id:'fali_float_high_fanli'},'fali_float_high_fanli');


var faliElements = React.createClass({
  displayName: "faliElements",

  render: function render() {
    return React.createElement("div",{id: 'fali_wrapper'},fali_head,fali_content,fali_float_qushi,fali_float_coupon,fali_float_simple_fanli,fali_float_high_fanli);   //创建fali_wrapper 包裹DIV
  }
});
//根据淘宝，天猫，阿里旅行等网址不同，查找网页对应位置添加 DIV 区块。
function addDivElement(){
  ReactDOM.render(React.createElement(faliElements),
    document.getElementById('fali')
  );
}
