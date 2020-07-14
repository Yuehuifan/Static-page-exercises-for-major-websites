let eleFooter = document.querySelector(".footer")
let eleinput = document.querySelector("#searchDiv")
let visitnews = document.querySelector("#visitNews")
window.onwheel = function(e){
    if(e.deltaY>0){
        eleFooter.style.display = 'none'
    }else{
        eleFooter.style.display = 'block'
    }
}
var that
//定义显示内容事件
class Content{
    constructor(id){
        that = this
        this.spans = document.querySelectorAll(id)
        this.content = document.querySelectorAll(".contentD")
        this.init()
    }
    //初始化点击事件
    init(){
        this.spans.forEach((ele, index)=>{
            ele.addEventListener("click", this.change)
            ele.index = index
            this.content.index = index
        })
    }
    //改变类名称
    change(){
        //每点击前清除所有类名称
        that.clearclass()
        that.spans[this.index].className = 'channel_border'
        that.content[this.index].style.display = 'block'
    }
    //清除类名称
    clearclass(){
        this.spans.forEach((ele,index)=>{
            ele.className = ''
            that.content[index].style.display = 'none'
        })
    }
}
var a = new Content("#channel span")
