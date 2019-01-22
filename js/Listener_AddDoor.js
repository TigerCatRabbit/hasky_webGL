<!--2018齐鲁软件大赛 山东大学 HaskyBoy 智能家居设计-->

		
		var NowDoorIndex = 0;
		function AddDoor(obj){
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
			LoadList("Door");
			creating = false;
			removeAllListener();
			mainCanvas.addEventListener( 'mousemove', onMouseMove_AddDoor, false );
			mainCanvas.addEventListener( 'mousedown', onMouseDown_AddDoor, false );
			showFurItem(true);
		}
		
		var doorDirection = 0;
		function ChangeDoorDirection(Plus){
			if(Plus){
				doorDirection = (doorDirection+1)%4;
			}else{
				doorDirection = (doorDirection+3)%4;
			}
			
			console.log(doorDirection);
			
			if(DoorLine){
				//scene.remove(DoorLine);
				linegroup.remove(DoorLine);
			}
			DoorLine = createDoor(point_Door,LastDirectionIsHorizon);	
			//scene.add(DoorLine);
			linegroup.add(DoorLine);
		}
		
		document.onkeydown=function(event){
			if(event.key=='e'||event.key=='E'){
				ChangeDoorDirection(true);
			}
			if(event.key=='q'||event.key=='Q'){
				ChangeDoorDirection(false);
			}
        }; 
		
		//返回门的轮廓线
		var LastDirectionIsHorizon;//记录最后一个方向是否为水平
		function createDoor(p,Horizon){
			var x = p.x , z = p.z;
			var r = 1,h = 2;
			var Ispp1 = false;//圆心是否为pp1
			var thetaRotate;//要旋转的角度
			//水平
			var pp1,pp2,p1,p2,p3,p4;
			
			if(Horizon){
				pp1 = new THREE.Vector3(x-r/2,h,z);
				pp2 = new THREE.Vector3(x+r/2,h,z);
				p1 = new THREE.Vector3(x-r/2,h,z-r);
				p2 = new THREE.Vector3(x+r/2,h,z-r);
				p3 = new THREE.Vector3(x-r/2,h,z+r);
				p4 = new THREE.Vector3(x+r/2,h,z+r);
				switch(doorDirection){
					case 0:
						Ispp1 = true;
						thetaRotate = -Math.PI/2;
						break;
					case 1:
						Ispp1 = false;
						thetaRotate = Math.PI;
						break;
					case 2:
						Ispp1 = true;
						thetaRotate = 0;
						break;
					case 3:
						Ispp1 = false;
						thetaRotate = Math.PI/2;
						break;
				}
			}else{//竖直
				pp1 = new THREE.Vector3(x,h,z-r/2);
				pp2 = new THREE.Vector3(x,h,z+r/2);
				p1 = new THREE.Vector3(x-r,h,z-r/2);
				p2 = new THREE.Vector3(x+r,h,z-r/2);
				p3 = new THREE.Vector3(x-r,h,z+r/2);
				p4 = new THREE.Vector3(x+r,h,z+r/2);
				
				switch(doorDirection){
					case 0:
						Ispp1 = true;
						thetaRotate = Math.PI/2;
						break;
					case 1:
						Ispp1 = true;
						thetaRotate = 0;
						break;
					case 2:
						Ispp1 = false;
						thetaRotate = Math.PI;
						break;
					case 3:
						Ispp1 = false;
						thetaRotate = -Math.PI/2;
						break;
				}
			}

			//CircleGeometry(半径，段数，起始角度/默认为0==三点钟方向/，圆弧角度)
			var geometry = new THREE.CircleGeometry(r,32,0,Math.PI/2);
			geometry.vertices.push(geometry.vertices[0]);
			geometry.rotateX(Math.PI/2);
			var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
			var line = new THREE.Line(geometry, material); 
			
			
			
			if(Horizon){
				switch(doorDirection){
					case 0:
						line.position.set(x+r/2,h,z);
						break;
					case 1:
						line.position.set(x+r/2,h,z);
						break;
					case 2:
						line.position.set(x-r/2,h,z);
						break;
					case 3:
						line.position.set(x-r/2,h,z);
						break;
				}
				LastDirectionIsHorizon = true;
			}else{
				switch(doorDirection){
					case 0:
						line.position.set(x,h,z+r/2);
						break;
					case 1:
						line.position.set(x,h,z-r/2);
						break;
					case 2:
						line.position.set(x,h,z+r/2);
						break;
					case 3:
						line.position.set(x,h,z-r/2);
						break;
					
				}
				LastDirectionIsHorizon = false;
			}
			
			line.rotateY(thetaRotate);
			
			return line;
		}

		
		//返回门
		function createDoor2(p,h){
			var Doorheight = -0.3;
			var height = 2;
			var length = 0.8;
			var width = 0.8;
			if(h){
				var geometry = new THREE.CubeGeometry( length , height , width );
			}else{
				var geometry = new THREE.CubeGeometry( width , height , length );
			}
			
			var material = new THREE.MeshBasicMaterial({color: 0x0000ff});
			var cube = new THREE.Mesh(geometry, material); 
			
			cube.position.x = p.x;
			cube.position.y = Doorheight;
			cube.position.z = p.z;
			return cube;
		}
		
		
		var DoorLine;
		var NowH2 = true;//记录当前辅助线为水平还是垂直
		//添加水平与竖直辅助
		var HelperOpen_Door_horizon = true;//水平吸附
		var HelperOpen_Door_vertical = true;//垂直吸附
		var point_Door;
		function onMouseMove_AddDoor(){
			mouse.x = ( (event.clientX - mainCanvas.getBoundingClientRect().left) / mainCanvas.offsetWidth ) * 2 - 1; 
            mouse.y = - ( (event.clientY - mainCanvas.getBoundingClientRect().top) / mainCanvas.offsetHeight ) * 2 + 1;
			raycaster.setFromCamera( mouse, camera2D );
			var points = raycaster.intersectObject(ground,false);
			point_Door = points[0].point;
			
			
				if(helperLine2){
					//scene.remove(helperLine2);
					linegroup.remove(helperLine2);
				}
				if(helperLine3){
					//scene.remove(helperLine3);
					linegroup.remove(helperLine3);
				}
				if(DoorLine){
					//scene.remove(DoorLine);
					linegroup.remove(DoorLine);
				}
				//检查p2和checkpoint各点的角度是否再radius误差内，如果在，修正p2坐标，break跳出for循环（待定）  并重新计算r
				if(HelperOpen_Door_horizon){
					for(var i = 0;i<checkpoints.length;i++){
						
						var r2 = RotateRadius(checkpoints[i],point_Door);
						//水平辅助线
						if(Math.abs(r2)<helperRadius||Math.abs(r2-Math.PI)<helperRadius){
							point_Door.z = checkpoints[i].z;
							//生成辅助线
							var p3 = new THREE.Vector3(-10,2,point_Door.z);
							var p4 = new THREE.Vector3(10,2,point_Door.z);
							helperLine2 = createLine(p3,p4,0x00ff00,false,2.1);
							helperLine2.scale.x = 10;
							//scene.add(helperLine2);
							linegroup.add(helperLine2);

							//生成轮廓线
							DoorLine = createDoor(point_Door,true);			
							//scene.add(DoorLine);
							linegroup.add(DoorLine);
							
							NowH2 = true;					
							return;
						}
					}
				}
				if(HelperOpen_Door_vertical){
					for(var i = 0;i<checkpoints.length;i++){
						
						var r2 = RotateRadius(checkpoints[i],point_Door);

						//竖直辅助线
						if(Math.abs(r2-Math.PI/2)<helperRadius||Math.abs(r2+Math.PI/2)<helperRadius){
							point_Door.x = checkpoints[i].x;
							//生成辅助线
							var p5 = new THREE.Vector3(point_Door.x,2,-10);
							var p6 = new THREE.Vector3(point_Door.x,2,10);
							helperLine3 = createLine(p5,p6,0x0000ff,false,2.1);
							helperLine3.scale.z = 10;
							//scene.add(helperLine3);
							linegroup.add(helperLine3);
							
							//生成窗轮廓线
							DoorLine = createDoor(point_Door,false);	
							//scene.add(DoorLine);
							linegroup.add(DoorLine);
							
							NowH2 = false;
							return;
						}
					}
				}
		}
		
		var DoorLine2;//门的轮廓线，添加后应该一直存在
		function onMouseDown_AddDoor(){
			if(event.button==0){
			
			
			
			var res = getWall(point_Door);//注意返回的是Walls2对象 {obj:**,p1:**,p2:**}
			var NowWall;
			
			if(DoorLine){
				//scene.remove(DoorLine);
				linegroup.remove(DoorLine);
			}
			for(var i =0;i<res.length;i++){
				NowWall = res[i];
			if(NowWall){
				//保存轮廓线
				DoorLine2 = DoorLine.clone();
				//scene.add(DoorLine2);
				linegroup.add(DoorLine2);
			
				var point1 = new THREE.Vector3();
				var point2 = new THREE.Vector3();
				//记录p1,p2
				point1.copy(NowWall.p1);
				point2.copy(NowWall.p2);

				
				if(NowH2){
					var doorframe = createDoor2(point_Door,true);
				}else{
					var doorframe = createDoor2(point_Door,false);
				}
				
				var bsp1 = new ThreeBSP(NowWall.obj);
				var bsp2 = new ThreeBSP(doorframe);
				
				var resultBSP = bsp1.subtract(bsp2);
				var result = resultBSP.toMesh();
				//更新模型的面和顶点的数据
				result.geometry.computeFaceNormals();
				result.geometry.computeVertexNormals();

				var material3 = new THREE.MeshLambertMaterial({color: 0xCCCCCC});
				result.material = material3;
				//result.material = NowWall.obj.material.clone();
				//console.log(NowWall);
				
				result.position.copy(NowWall.obj.position);
				result.rotation.copy(NowWall.obj.rotation);
				result.scale.copy(NowWall.obj.scale);
				
				var box = NowWall.obj.children[0];
				result.add(box);
				NowWall.obj.remove(box);
				
				scene.add(result);
				
				//删除旧的墙
				DeleteWall(NowWall.obj);
				//记录新墙
				Walls.add(result);
				Walls2.push({
					obj:result,
					p1:point1,
					p2:point2			
				});
				checkpoints.push(point1);
				checkpoints.push(point2);
				
				if(NowH2){
					LoadItem("door",NowDoorIndex,doorframe.position,false);
					//LoadItem("door",0,doorframe.position,false);
				}else{
					LoadItem("door",NowDoorIndex,doorframe.position,true);
					//LoadItem("door",0,doorframe.position,true);
				}

			}
			}
			}
		}