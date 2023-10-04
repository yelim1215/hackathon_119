// Converts XML to JSON
function XMLtoJSON() {
  var me = this;

  me.fromFile = function (xml, rstr) {
    var xhttp = window.XMLHttpRequest;
    if (xhttp) {
      xhttp = new XMLHttpRequest();
      xhttp.open("GET", xml, false);
      xhttp.send(null);
    }

    var json_str = jsontoStr(setJsonObj(xhttp.responseXML));

    return typeof rstr == "undefined" ? JSON.parse(json_str) : json_str;
  };
  me.fromStr = function (xml, rstr) {
    if (window.DOMParser) {
      var getxml = new DOMParser();
      var xmlDoc = getxml.parseFromString(xml, "text/xml");
      var json_str = jsontoStr(setJsonObj(xmlDoc));
      return typeof rstr === "undefined" ? JSON.parse(json_str) : json_str;
    } else {
      // DOMParser를 지원하지 않는 브라우저의 경우 오류 처리
      console.error("이 브라우저는 DOMParser를 지원하지 않습니다.");
      return null; // 또는 오류 처리 방법을 선택하여 반환
    }
    // if (window.DOMParser) {
    //   var getxml = new DOMParser();
    //   var xmlDoc = getxml.parseFromString(xml, "text/xml");
    // } else {
    //   // for Internet Explorer
    //   var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //   xmlDoc.async = "false";
    // }
    // var json_str = jsontoStr(setJsonObj(xmlDoc));
    // return typeof rstr == "undefined" ? JSON.parse(json_str) : json_str;
  };

  var setJsonObj = function (xml) {
    var js_obj = {};
    if (xml.nodeType === 1) {
      if (xml.attributes.length > 0) {
        js_obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          js_obj["@attributes"][attribute.nodeName] = attribute.value;
        }
      }
    } else if (xml.nodeType === 3) {
      js_obj = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof js_obj[nodeName] == "undefined") {
          js_obj[nodeName] = setJsonObj(item);
        } else {
          if (typeof js_obj[nodeName].push == "undefined") {
            var old = js_obj[nodeName];
            js_obj[nodeName] = [];
            js_obj[nodeName].push(old);
          }
          js_obj[nodeName].push(setJsonObj(item));
        }
      }
    }
    return js_obj;
  };

  var jsontoStr = function (js_obj) {
    var rejsn = JSON.stringify(js_obj, undefined, 2)
      .replace(/(\\t|\\r|\\n)/g, "")
      .replace(/"",[\n\t\r\s]+""[,]*/g, "")
      .replace(/(\n[\t\s\r]*\n)/g, "")
      .replace(/[\s\t]{2,}""[,]{0,1}/g, "")
      .replace(/"[\s\t]{1,}"[,]{0,1}/g, "")
      .replace(/\[[\t\s]*\]/g, '""');
    return rejsn.indexOf('"parsererror": {') === -1
      ? rejsn
      : "Invalid XML format";
  };
}
export default XMLtoJSON;
