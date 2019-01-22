		
		
		
		function AddWallpaper(obj){
			LoadList("Wallpaper");
			var $temp = $(obj);
			if(LastBtn){//还原上一个按钮
				LastBtn.css("background-color",'#222831');
				if(!LastBtn.is($temp)){//不是同一个按钮
					LastBtn  = $temp;
					LastBtn.css("background-color",'#7971ea');
				}else{//是同一个按钮
					console.log("get");
					ChangeTo2D();
					showFurItem(false);
					LastBtn = null;
					return;
				}
			}else{//这是第一个按钮
				LastBtn  = $temp;
				LastBtn.css("background-color",'#7971ea');
			}
			creating = false;
			removeAllListener();
			mainCanvas.addEventListener( 'mousedown', onMouseDown_ChangeWallpaper, false );
			showFurItem(true);
		}
	
		var mIndex = 1;//更改的墙对应的materialIndex
		var thisWall;//记录最后一个更改壁纸的墙
		var WallpaperReapeatX = 4;
		var WallpaperReapeatY = 4;
		function SizeX(plus){
			if(AjustType=="wallpaper"){
				if(plus){
					WallpaperReapeatX = WallpaperReapeatX + 1;
				}else{
					WallpaperReapeatX = Math.abs(WallpaperReapeatX - 1);
				}
				updateWallpaper();
			}
			if(AjustType=="floor"){
				if(plus){
					FloorReapeatX = FloorReapeatX + 1;
				}else{
					FloorReapeatX = Math.abs(FloorReapeatX - 1);
				}
				updateFloor();
			}
		}
		function SizeY(plus){
			if(AjustType=="wallpaper"){
				if(plus){
					WallpaperReapeatY = WallpaperReapeatY + 1;
				}else{
					WallpaperReapeatY = Math.abs(WallpaperReapeatY - 1);
				}
				updateWallpaper();
			}
			if(AjustType=="floor"){
				if(plus){
					FloorReapeatY = FloorReapeatY + 1;
				}else{
					FloorReapeatY = Math.abs(FloorReapeatY - 1);
				}
				updateFloor();
			}
		}
		var LastWallpaper;
		function onMouseDown_ChangeWallpaper(){
			mIndex = 1;
			if(event.button==0){
				mouse.x = ( (event.clientX - mainCanvas.getBoundingClientRect().left) / mainCanvas.offsetWidth ) * 2 - 1; 
				mouse.y = - ( (event.clientY - mainCanvas.getBoundingClientRect().top) / mainCanvas.offsetHeight ) * 2 + 1;
				raycaster.setFromCamera( mouse, camera3D );
				var Choosed = raycaster.intersectObjects( Walls.children,false);
					//数组不为空
					if(Choosed.length>0){
	
							var material1 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
							var path = 'image/wallpaper/'+NowWallpaper+'.jpg';
							var texture2= new THREE.TextureLoader().load(path);
							texture2.name = NowWallpaper;
							
							texture2.wrapS = THREE.RepeatWrapping;
							texture2.wrapT = THREE.RepeatWrapping;
							texture2.repeat.set(WallpaperReapeatX,WallpaperReapeatY);
							texture2.needsUpdate = true;        
							
							var material2 = new THREE.MeshBasicMaterial({map:texture2});
							var materials = [];
							var faceIndex = Choosed[0].faceIndex;
							
							if(!Choosed[0].object.material.length){//这面墙未添加过墙纸
								
								//这面墙还没有添加过任何壁纸
								materials.push(material1);
								materials.push(material2);
								Choosed[0].object.material = materials;
								for(var i =0;i<Choosed[0].object.geometry.faces.length;i++){
									Choosed[0].object.geometry.faces[i].materialIndex = 0;
								}
							}else{//这面墙上已有壁纸
								var same = false;
								for(var i=0;i<Choosed[0].object.material.length;i++){
									if(Choosed[0].object.material[i].map){
										if(material2.map.name==Choosed[0].object.material[i].map.name){
											same = true;//现在的墙纸已添加
											Choosed[0].object.material[i].map = material2.map;
											mIndex = i;
										}
									}
								}
								if(!same){
									//向materials添加限制的壁纸
									Choosed[0].object.material.push(material2.clone());
									mIndex = Choosed[0].object.material.length - 1;
								}
							}
							
							//寻找所有通向的face，将materialIndex设为mIndex
							LastWallpaper = Choosed;
							AjustType = "wallpaper";
							for(var i =0;i<Choosed[0].object.geometry.faces.length;i++){
								if(Normalequals(Choosed[0].face.normal,Choosed[0].object.geometry.faces[i].normal)){
									Choosed[0].object.geometry.faces[i].materialIndex = mIndex;
								}
							}
							
							Choosed[0].object.geometry.groupsNeedUpdate = true;//告知渲染器更新几何体
							
							
							
							
							thisWall = Choosed[0].object;
					}else{
						thisWall = null;
					}
					
			//右键取消选择
			}else if(event.button==2){
				thisWall = null;
			}
			

			console.log(mIndex);
		}
		
		
		function updateWallpaper(){
			if(LastWallpaper){
				var Choosed = LastWallpaper;
				var material1 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
				var path = 'image/wallpaper/'+NowWallpaper+'.jpg';
				var texture2= new THREE.TextureLoader().load(path);
				texture2.name = NowWallpaper;
							
				texture2.wrapS = THREE.RepeatWrapping;
				texture2.wrapT = THREE.RepeatWrapping;
				texture2.repeat.set(WallpaperReapeatX,WallpaperReapeatY);
				texture2.needsUpdate = true;        
							
				var material2 = new THREE.MeshBasicMaterial({map:texture2});
				var materials = [];
				var faceIndex = Choosed[0].faceIndex;
							
				if(!Choosed[0].object.material.length){//这面墙未添加过墙纸
				//这面墙还没有添加过任何壁纸
					materials.push(material1);
					materials.push(material2);
					Choosed[0].object.material = materials;
					for(var i =0;i<Choosed[0].object.geometry.faces.length;i++){
						Choosed[0].object.geometry.faces[i].materialIndex = 0;
					}
				}else{//这面墙上已有壁纸
					var same = false;
					for(var i=0;i<Choosed[0].object.material.length;i++){
						if(Choosed[0].object.material[i].map){
							if(material2.map.name==Choosed[0].object.material[i].map.name){
								same = true;//现在的墙纸已添加
								Choosed[0].object.material[i].map = material2.map;
							}
						}
					}
						if(!same){
							//向materials添加限制的壁纸
							Choosed[0].object.material.push(material2);
							mIndex = Choosed[0].object.material.length - 1;
						}
				}
							
				//寻找所有通向的face，将materialIndex设为mIndex
				for(var i =0;i<Choosed[0].object.geometry.faces.length;i++){
					if(Normalequals(Choosed[0].face.normal,Choosed[0].object.geometry.faces[i].normal)){
						Choosed[0].object.geometry.faces[i].materialIndex = mIndex;
					}
				}
				Choosed[0].object.geometry.groupsNeedUpdate = true;//告知渲染器更新几何体
			}
		}
		//检查两个单位向量是否相等（大致）
		function Normalequals(v1,v2){
			var x1 = Math.round(v1.x*100)/100;
			var x2 = Math.round(v2.x*100)/100;
			var y1 = Math.round(v1.y*100)/100;
			var y2 = Math.round(v2.y*100)/100;
			var z1 = Math.round(v1.z*100)/100;
			var z2 = Math.round(v2.z*100)/100;
			
			if(x1==x2&&y1==y2&&z1==z2){
				return true;
			}else{
				return false;
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		