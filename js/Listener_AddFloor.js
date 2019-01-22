<!--2018齐鲁软件大赛 山东大学 HaskyBoy 智能家居设计-->
var point_AddFloor;
		var point1_Floor,point2_Floor;
		var FloorLine1,FloorLine2;
		
		function onMouseMove_AddFloor(){
				mouse.x = ( (event.clientX - mainCanvas.getBoundingClientRect().left) / mainCanvas.offsetWidth ) * 2 - 1; 
				mouse.y = - ( (event.clientY - mainCanvas.getBoundingClientRect().top) / mainCanvas.offsetHeight ) * 2 + 1;
				raycaster.setFromCamera( mouse, camera2D );
				var points = raycaster.intersectObject(ground,false);
				var p2 = points[0].point;//获得鼠标在场景坐标的位置
				
				
				//checkpoints辅助线  生成水平或竖直的辅助线
				if(HelperOpen){
					if(helperLine2){
						linegroup.remove(helperLine2);
					}
					if(helperLine3){
						linegroup.remove(helperLine3);
					}
					//检查p2和checkpoint各点的角度是否再radius误差内，如果在，修正p2坐标，break跳出for循环（待定）  并重新计算r
					for(var i = 0;i<checkpoints.length;i++){
						
						var r2 = RotateRadius(checkpoints[i],p2);
						//水平辅助线
						if(Math.abs(r2)<helperRadius||Math.abs(r2-Math.PI)<helperRadius){
							p2.z = checkpoints[i].z;
							if(creating){
								r = RotateRadius(point1_Floor,p2);
							}
							//生成辅助线
							var p3 = new THREE.Vector3(-10,2,p2.z);
							var p4 = new THREE.Vector3(10,2,p2.z);
							helperLine2 = createLine(p3,p4,0x00ff00,false,2.1);
							helperLine2.scale.x = 10;
							//scene.add(helperLine2);
							linegroup.add(helperLine2);
							break;
						}
					}
					for(var i = 0;i<checkpoints.length;i++){
						
						var r2 = RotateRadius(checkpoints[i],p2);

						//竖直辅助线
						if(Math.abs(r2-Math.PI/2)<helperRadius||Math.abs(r2+Math.PI/2)<helperRadius){
							p2.x = checkpoints[i].x;
							if(creating){
								r = RotateRadius(point1_Floor,p2);
							}
							//生成辅助线
							var p5 = new THREE.Vector3(p2.x,2,-10);
							var p6 = new THREE.Vector3(p2.x,2,10);
							helperLine3 = createLine(p5,p6,0x0000ff,false,2.1);
							helperLine3.scale.z = 10;
							linegroup.add(helperLine3);
							break;
						}
					}
				}
				//checkpoints辅助线
				
				//先有点p1才能触发
				if(creating){
					
					var r = RotateRadius(point1_Floor,p2);
					
					if(helperLine){
						linegroup.remove(helperLine);
					}
					//p1的辅助线
					if(HelperOpen){
						//水平辅助线 z相同
						if(Math.abs(r)<helperRadius||Math.abs(r-Math.PI)<helperRadius){
							p2.z = point1_Floor.z;
							if(Math.abs(r)>Math.PI/2){
								r = Math.PI;
							}else{
								r = 0;
							}
							
							var p3 = new THREE.Vector3(-10,2,point1_Floor.z);
							var p4 = new THREE.Vector3(10,2,point1_Floor.z);
							
							helperLine = createLine(p3,p4,0x87CEFF,false,2.1);
							helperLine.scale.x = 10;

							//scene.add(helperLine);
							linegroup.add(helperLine);
							
						}else if(Math.abs(r-Math.PI/2)<helperRadius||Math.abs(r+Math.PI/2)<helperRadius){
							//竖直辅助线 x相同
							p2.x = point1_Floor.x;
							if(r>0){
								r = Math.PI/2;
							}else{
								r = -Math.PI/2;
							}
						
							var p3 = new THREE.Vector3(point1_Floor.x,2,-10);
							var p4 = new THREE.Vector3(point1_Floor.x,2,10);
							
							helperLine = createLine(p3,p4,0x87CEFF,false,2.1);
							helperLine.scale.z = 10;
							linegroup.add(helperLine);
						}
					
					}
					//p1的辅助线end
				

				point_AddFloor = p2;
				
				
				var dx = p2.x - point1_Floor.x;
				var dz = p2.z - point1_Floor.z;
				
				var nx = 0.1
				var nz;
				if(dx * dz < 0 ){
					nz = -0.1;
				}else{
					nz = 0.1;
				}
				
				var p1 = new THREE.Vector3();
				p1.copy(point1_Floor);

				
				var p3 = new THREE.Vector3( p2.x , 2 , p1.z );
				var p4 = new THREE.Vector3( p1.x , 2 , p2.z );

				var geometry = new THREE.Geometry();
				geometry.vertices.push(p1,p3,p2,p4,p1);
				
				if(line1){
					linegroup.remove(line1);
				}
				line1 = createLine2(geometry,0x000000);
				linegroup.add(line1);

			}else{
				point_AddFloor = p2;
			}
		}
		//在p1和p2横坐标或纵坐标相同时不允许创建墙
		function onMouseDown_AddFloor(){
			p = point_AddFloor;
			//左键点击有效
			if(event.button==0){
				if(!creating){//生成p1
					point1_Floor = p;
					creating = true;		
				}else{
				//已经有p1，再次点击创建p2
					//creating = false;
					point2 = p;
					var r = RotateRadius(point1_Floor,point2);
					
					
				//checkpoints辅助线
				if(HelperOpen){
					for(var i = 0;i<checkpoints.length;i++){	
						var r2 = RotateRadius(checkpoints[i],p);
						//水平辅助线
						if(Math.abs(r2)<helperRadius||Math.abs(r2-Math.PI)<helperRadius){
							p.z = checkpoints[i].z;
							r = RotateRadius(point1_Floor,p);
							break;
						}
					}
					for(var i = 0;i<checkpoints.length;i++){		
						var r2 = RotateRadius(checkpoints[i],p);
						//竖直辅助线
						if(Math.abs(r2-Math.PI/2)<helperRadius||Math.abs(r2+Math.PI/2)<helperRadius){
							p.x = checkpoints[i].x;
							r = RotateRadius(point1_Floor,p);
							break;
						}
					}
				}
				//checkpoints辅助线end
					
					if(point2.x == point1_Floor.x || point2.z == point1_Floor.z){
						return;
					}else{

						var dx = point2.x - point1_Floor.x;
						var dz = point2.z - point1_Floor.z;

						var p1 = new THREE.Vector3();
						p1.copy(point1_Floor);
						var p2 = new THREE.Vector3();
						p2.copy(point2);

						RoomIndex = RoomIndex + 1;

						//创建地板
						createFloor(p1,p2);
					
						disposeLine(true);
						//继续创建下一个墙
						point1_Floor = point2;
					}
				}
			}else{//右键点击取消
			//取消p1
				creating = false;
				disposeLine(true);
			}
		}