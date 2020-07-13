const searchForm = document.querySelector("#seacher_main")
const styleInput = searchForm.querySelector("input:first-child")
const removeSpan = searchForm.querySelector("span")
//添加图片搜索div
function getFile() { 
    var addDiv = '<div class="fileDiv"><div class="dargFile"><p>拖拽图片到这里</p></div><a href="javascript:;" class="a-upload"><input type="file" name="" id="">选择文件</a><span onclick="cancelDiv()">❌</span></div>'
    searchForm.insertAdjacentHTML("beforeend", addDiv)//在id="searchForm"的后面之前添加新的div
    removeSpan.remove()//移除相机图像span
    styleInput.style.border = "3px solid #4e6ef2"//设定选中 border样式
    styleInput.placeholder = "在此处粘贴图片网址"//添加input的属性
    //创建鼠标按下事件
    
}
//删除对应元素
function cancelDiv() {
    //remove图片搜索框
    var needRemove = document.querySelector(".fileDiv")
    needRemove && searchForm.removeChild(needRemove)
    //在第一个input标签后面加入相机标签
    styleInput.insertAdjacentElement("afterend", removeSpan)
    //恢复boder样式
    styleInput.style.border = "3px solid rgb(181, 182, 184)" 
    //消除input默认text
    styleInput.placeholder = ""
}

window.onmousedown = function(){
    //存在图片搜索框就删除，否则不操作
    document.querySelector(".fileDiv") && cancelDiv()
}