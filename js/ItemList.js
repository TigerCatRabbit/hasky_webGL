

	//记录所有可用的模型及修正数据
	var WindowsList = [
	
	{ name : "window01" , path : "window/" , scale : { x : 0.0085 , y : 0.0095 , z : 0.01} , position : { x : 0, y : -0.5 , z :0 } },
	{ name : "window02" , path : "window/" , scale : { x : 0.0085 , y : 0.0095 , z : 0.01} , position : { x : 0, y : -0.5 , z :0 } },
	{ name : "window03" , path : "window/" , scale : { x : 0.0085 , y : 0.0095 , z : 0.01} , position : { x : 0, y : -0.5 , z :0 } }
	
	];
	
	var DoorsList = [
	
	{ name : "door01" , path : "door/", scale : { x : 0.02 , y : 0.02 , z : 0.02} , position : { x : 0, y : +0.15 , z :0 } },
	{ name : "door02" , path : "door/", scale : { x : 0.02 , y : 0.02 , z : 0.02} , position : { x : 0, y : +0.15 , z :0 } },
	{ name : "door03" , path : "door/", scale : { x : 0.02 , y : 0.02 , z : 0.02} , position : { x : 0, y : +0.15 , z :0 } },
	{ name : "door04" , path : "door/", scale : { x : 0.02 , y : 0.02 , z : 0.02} , position : { x : 0, y : +0.15 , z :0 } },
	{ name : "door05" , path : "door/", scale : { x : 0.02 , y : 0.02 , z : 0.02} , position : { x : 0, y : +0.15 , z :0 } }
	
	];
	
	var FursList = [
	
	{ name : "chair01" , path : "", scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -1 , z : 0 } , type : "chair" , ajust:{ x : false , y : false , z : true } },
	{ name : "chair03" , path : "chair/" , scale : { x : 0.001 , y : 0.001 , z : 0.001 } , position:{ x : 0 , y : -1 , z : 0 } , type:"chair" , ajust : { x : false , y : false , z : true }},
	{ name : "table08" , path : "chair/" , scale : { x : 0.025 , y : 0.025 , z : 0.025 } , position:{ x : 0 , y : -0.4 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "chair04" , path : "chair/" , scale : { x : 0.001 , y : 0.001 , z : 0.001 } , position:{ x : 0 , y : -1 , z : 0 } , type:"chair" , ajust : { x : false , y : false , z : true }},
	{ name : "chair06" , path : "chair/" , scale : { x : 0.001 , y : 0.001 , z : 0.001 } , position:{ x : 0 , y : -1 , z : 0 } , type:"chair" , ajust : { x : false , y : false , z : true }},
	{ name : "chair07" , path : "chair/" , scale : { x : 0.001 , y : 0.001 , z : 0.001 } , position:{ x : 0 , y : -1 , z : 0 } , type:"chair" , ajust : { x : false , y : false , z : true }},
	{ name : "chair08" , path : "chair/", scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -1 , z : 0 } , type : "chair" , ajust:{ x : false , y : false , z : true } },
	{ name : "chair09" , path : "chair/", scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -1 , z : 0 } , type : "chair" , ajust:{ x : false , y : false , z : true } },
	{ name : "table" , path : "chair/" , scale : { x : 0.0012 , y : 0.0012 , z : 0.0012 } , position:{ x : 0 , y : -1 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "table02" , path : "chair/" , scale : { x : 0.025 , y : 0.025 , z : 0.025 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "table03" , path : "chair/" , scale : { x : 0.025 , y : 0.025 , z : 0.025 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "table04" , path : "chair/" , scale : { x : 0.025 , y : 0.025 , z : 0.025 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "table05" , path : "chair/" , scale : { x : 0.025 , y : 0.025 , z : 0.025 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "chair10" , path : "chair/" , scale : { x : 0.008 , y : 0.008 , z : 0.008 } , position:{ x : 0 , y : -0.95 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "chair11" , path : "chair/" , scale : { x : 0.013 , y : 0.013 , z : 0.013 } , position:{ x : 0 , y : -0.5 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "chair12" , path : "chair/" , scale : { x : 0.013 , y : 0.013 , z : 0.013 } , position:{ x : 0 , y : -0.5 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "chair13" , path : "chair/" , scale : { x : 0.008 , y : 0.008 , z : 0.008 } , position:{ x : 0 , y : -0.95 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "chair14" , path : "chair/" , scale : { x : 0.013 , y : 0.013 , z : 0.013 } , position:{ x : 0 , y : -0.5 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	
	{ name : "table06" , path : "chair/" , scale : { x : 0.013 , y : 0.013 , z : 0.013 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "table07" , path : "chair/" , scale : { x : 0.025 , y : 0.025 , z : 0.025 } , position:{ x : 0 , y : -0.4 , z : 0 } , type:"chair",ajust : { x : false , y : false , z : false }},
	{ name : "chair05" , path : "chair/" , scale : { x : 0.001 , y : 0.001 , z : 0.001 } , position:{ x : 0 , y : -1 , z : 0 } , type:"chair" , ajust : { x : false , y : false , z : true }},
	
	{ name : "light01" , path : "light/" , scale : { x : 0.3 , y : 0.3 , z : 0.3 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light02" , path : "light/" , scale : { x : 0.003 , y : 0.003 , z : 0.003 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light03" , path : "light/" , scale : { x : 0.003 , y : 0.003 , z : 0.003 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light04" , path : "light/" , scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light05" , path : "light/" , scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light06" , path : "light/" , scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light07" , path : "light/" , scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light08" , path : "light/" , scale : { x : 0.003 , y : 0.003 , z : 0.003 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	{ name : "light09" , path : "light/" , scale : { x : 0.003 , y : 0.003 , z : 0.003 } , position:{ x : 0 , y : -0.3 , z : 0 } , type:"light",ajust : { x : true , y : false , z : true }},
	
	{ name : "bed15" , path : "bed/" , scale : { x : 0.026 , y : 0.026 , z : 0.026 } , position:{ x : 0 , y : -1 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "bed16" , path : "bed/" , scale : { x : 0.026 , y : 0.026 , z : 0.026 } , position:{ x : 0 , y : -1 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "bed17" , path : "bed/" , scale : { x : 0.026 , y : 0.026 , z : 0.026 } , position:{ x : 0 , y : -1 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "bed01" , path : "bed/" , scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"bed",ajust : { x : true , y : false , z : true }},
	{ name : "bed02" , path : "bed/" , scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"bed",ajust : { x : true , y : false , z : true }},
	{ name : "bed03" , path : "bed/" , scale : { x : 0.03 , y : 0.03 , z : 0.03 } , position:{ x : 0 , y : -0.6 , z : 0 } , type:"bed",ajust : { x : true , y : false , z : true }},
	{ name : "bed04" , path : "bed/" , scale : { x : 0.00013 , y : 0.00013 , z : 0.00013 } , position:{ x : 0 , y : -0.5 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "bed05" , path : "bed/" , scale : { x : 0.00012 , y : 0.00012 , z : 0.00012 } , position:{ x : 0 , y : -0.4 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "bed06" , path : "bed/" , scale : { x : 0.00012 , y : 0.00012 , z : 0.00012 } , position:{ x : 0 , y : -0.4 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "bed07" , path : "bed/" , scale : { x : 0.00012 , y : 0.00012 , z : 0.00012 } , position:{ x : 0 , y : -0.4 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "bed08" , path : "bed/" , scale : { x : 0.00012 , y : 0.00012 , z : 0.00012 } , position:{ x : 0 , y : -0.4 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk01" , path : "bed/" , scale : { x : 0.005 , y : 0.005 , z : 0.005 } , position:{ x : 0 , y : -0.75 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk02" , path : "bed/" , scale : { x : 0.005 , y : 0.005 , z : 0.005 } , position:{ x : 0 , y : -0.75 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk03" , path : "bed/" , scale : { x : 0.005 , y : 0.005 , z : 0.005 } , position:{ x : 0 , y : -0.75 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk04" , path : "bed/" , scale : { x : 0.005 , y : 0.005 , z : 0.005 } , position:{ x : 0 , y : -0.75 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk05" , path : "bed/" , scale : { x : 0.005 , y : 0.005 , z : 0.005 } , position:{ x : 0 , y : -0.75 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk06" , path : "bed/" , scale : { x : 0.005 , y : 0.005 , z : 0.005 } , position:{ x : 0 , y : -0.75 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk07" , path : "bed/" , scale : { x : 0.02 , y : 0.02 , z : 0.02 } , position:{ x : 0 , y : -0.8 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk08" , path : "bed/" , scale : { x : 0.02 , y : 0.02 , z : 0.02 } , position:{ x : 0 , y : -0.8 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }},
	{ name : "desk09" , path : "bed/" , scale : { x : 0.0015 , y : 0.0015 , z : 0.0015 } , position:{ x : 0 , y : -0.7 , z : 0 } , type:"bed",ajust : { x : false , y : false , z : false }}
	
	
	];
	
	var WallPaperList = [
	{ name : "wallpaper01" },
	{ name : "wallpaper02" },
	{ name : "wallpaper03" },
	{ name : "wallpaper04" },
	{ name : "wallpaper05" },
	{ name : "wallpaper06" },
	{ name : "wallpaper07" },
	{ name : "wallpaper08" },
	{ name : "wallpaper09" },
	{ name : "wallpaper10" },
	{ name : "wallpaper11" },
	{ name : "wallpaper12" },
	{ name : "wallpaper13" },
	{ name : "wallpaper14" },
	{ name : "wallpaper15" },
	{ name : "wallpaper16" },
	{ name : "wallpaper17" },
	{ name : "wallpaper18" },
	{ name : "wallpaper19" },
	{ name : "wallpaper20" },
	{ name : "wallpaper21" },
	{ name : "wallpaper22" },
	{ name : "wallpaper23" },
	{ name : "wallpaper24" },
	{ name : "wallpaper25" },
	{ name : "wallpaper26" },
	{ name : "wallpaper27" },
	{ name : "wallpaper28" },
	{ name : "wallpaper29" },
	{ name : "wallpaper30" },
	{ name : "wallpaper31" },
	{ name : "wallpaper32" },
	{ name : "wallpaper33" },
	{ name : "wallpaper34" }
	];
	
	var FloorList = [
	{ name : "floor01" },
	{ name : "floor02" },
	{ name : "floor03" },
	{ name : "floor04" },
	{ name : "floor05" },
	{ name : "floor06" },
	{ name : "floor07" },
	{ name : "floor08" },
	{ name : "floor09" },
	{ name : "floor10" },
	{ name : "floor11" },
	{ name : "floor12" },
	{ name : "floor13" },
	{ name : "floor14" },
	{ name : "floor15" },
	{ name : "floor16" },
	{ name : "floor17" },
	{ name : "floor18" },
	{ name : "floor19" },
	{ name : "floor20" },
	{ name : "floor21" }
	];