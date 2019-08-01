//动态创建并添加h5标签，适合添加多个同名标签，返回值便于后续设置属性
function createElement(fElement, cElementStr, num) {
	var cElements = [];
	for(var i = 0; i < num; i++) {
		var tempCElement = document.createElement(cElementStr);
		fElement.appendChild(tempCElement);
		cElements.push(tempCElement);
	}
	return cElements;
}