var firstInstall = window.localStorage.firstInstall;
if(typeof firstInstall == 'undefined'){
	chrome.tabs.create({url:"http://www.taokezhushou.com?from=plugin",selected:true});
	window.localStorage.firstInstall = "true";
}
if (typeof window.localStorage.hidePlugin == 'undefined') {
	window.localStorage.hidePlugin = 'false';
}
if (typeof window.localStorage.keyPlugin == 'undefined') {
	window.localStorage.keyPlugin = 90;
}
if (typeof window.localStorage.dwzServer == 'undefined') {
	window.localStorage.dwzServer = 'baidu';
}
if (typeof window.localStorage.applyReason == 'undefined') {
	window.localStorage.applyReason = '【淘客助手】网站会员申请贵店推广计划，望通过，祝合作愉快！谢谢！';
}
if (typeof window.localStorage.uuid == 'undefined') {
	window.localStorage.uuid = randomString(32);
}

var date = new Date();
if(date.getTime() - window.localStorage.hideTimestamp > 1000 * 86400 * 7){
    window.localStorage.setItem('hidePlugin', 'false');
}

function randomString(len) {
　　len = len || 32;
　　var $chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch(request.type){
            case 'gajax':
                $.ajax({
                    type:'GET',
                    url:request.url,
                    success:function(data){
                        sendResponse({
                            msg: 'ok',
                            data: data,
														url: request.url
                        });
                    },
                    error:function(data){
                        sendResponse({
                            msg: 'error',
                            data: null
                        });
                    }
                });
                return true;
            case 'pajax':
                $.ajax({
                    type:'POST',
                    url:request.url,
                    data:request.postdata,
                    success:function(data){
                        sendResponse({
                            msg: 'ok',
                            data: data
                        });
                    },
                    error:function(){
                        sendResponse({
                            msg: 'error',
                            data: null
                        });
                    }
                });
                return true;
            case 'cookie':
                chrome.cookies.get({
                    url: request.url,
                    name: request.name
                },function(cookies){
                    if (cookies != null) {
                        sendResponse({
                            msg: 'ok',
                            data: cookies.value
                        });
                    } else {
                        sendResponse({
                            msg: "error"
                        });
                    }
                });
                return true;
            case 'setting':
                sendResponse({
                    hidePlugin: window.localStorage.hidePlugin,
                    keyPlugin: window.localStorage.keyPlugin,
                    dwzServer: window.localStorage.dwzServer,
                    applyReason: window.localStorage.applyReason,
                    uuid: window.localStorage.uuid
                });
                return true;
        }
    }
);

chrome.alarms.create('notifications', {periodInMinutes: 10});
chrome.alarms.onAlarm.addListener(function(alarm){
	switch(alarm.name){
		case 'notifications':
            $.ajax({
                type: 'GET',
                url: 'http://alarms.taokezhushou.com/api/v1/notification?version=3.0&uuid=' + window.localStorage.uuid,
                success:function(response){
                    if(response.hasOwnProperty('status') && response.status == 200 && response.items.length > 0 ){
                        for(var i in response.items){
                            chrome.notifications.create('', response.items[i].options, function(notificationId){
                                window.localStorage.setItem(notificationId, response.items[i].href);
                            });
                        }
                    }
                }
            });
			break;
	}
});

chrome.notifications.onClicked.addListener(function(notificationId){
    chrome.tabs.create({url: window.localStorage.getItem(notificationId) ,selected:true});
});

chrome.notifications.onButtonClicked.addListener(function(bnotificationIdb){
    chrome.tabs.create({url: window.localStorage.getItem(notificationId) ,selected:true});
});

chrome.notifications.onClosed.addListener(function(bnotificationIdb){
    window.localStorage.removeItem(bnotificationIdb);
});
