$(function(){
addDivElement();
});

//获取各个数据，渲染网页
"use strict";
var RenderElements = React.createClass({
  displayName: "RenderElements",
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});

//根据淘宝，天猫，阿里旅行等网址不同，查找网页对应位置添加 DIV 区块。
function addDivElement(){
  ReactDOM.render(React.createElement(RenderElements, { name: "John" }),
  document.getElementById('J_SiteNav')
  );
}
