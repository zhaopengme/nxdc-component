require(['./config'],function(){
    require(['jquery','utils'],function($){
        require(['bootstrap','search'],function(){		
			$(".ndp-search-wrapper[name=plain]").search({
				placeholder:"请输入字符"
			}).val("hello");//设置input 显示的值
			
			$(".ndp-search-wrapper[name=dis]").search({
				disabled:true
			}).val("你好 zhongguo1");
			
			$(".ndp-search-wrapper[name=mix]").search({
				type:2,
				dropList:[1,2,3,4,5,6,7,8,9,10,11,12]
			}).on("SCOPE_CHANGE",function(e){
				//前置下拉菜单 更新
				console.log(e.originalEvent.data);//{index:索引，value:值}
			});	
			
			$(".ndp-search-wrapper[name=mix2]").search({
				type:2,
				dropList:[{text:"china"},{text:"USA"},{text:"德国"}],
				disabled:true
			}).on("INPUT_CHANGE",function(e){
				console.log(e.originalEvent.data);// {text:string}  输入框选中内容发生改变
			});
			
			
			
			$(".ndp-search-wrapper[name=plain2]").search({
				type:3,
				dropList:[{text:"china"},{text:"USA"},{text:"德国"}],
			}).on("input_change",function(e){
				console.log(e.originalEvent.data);
			}).on("do_search",function(e){
				//用户输入内容，回车 或者点击搜索(放大镜) 触发这个事件
				console.log(e.originalEvent.data);//数据
			});
			
			$(".ndp-search-wrapper[name=mixall]").search({
				type:4,
				dropList:["china","usa","world"],
				dropList:[{text:"china"},{text:"USA"},{text:"德国"}],
			}).on("input_change",function(e){
				console.log(e.originalEvent.data);
			}).on("do_search",function(e){
				//用户输入内容，回车 或者点击搜索(放大镜) 触发这个事件
				console.log(e.originalEvent.data);//数据
			});			
			
        });
    });
});