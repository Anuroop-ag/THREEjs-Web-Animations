else if(nextchecker==1){
        
        plus4.visible=false;
        if(tri_1){


            if(tri_1.position.x>-10){

                tri_1.position.x=tri_1.position.x-(0.005*dt);
                tri_1.position.z=3;
                
                }

                else if(tri_1.position.y<3)
                                        
                {
                    tri_1.position.y=tri_1.position.y+(0.005*dt);

                }else{

                    if(tri_2.position.x>-10)
                    {

                            tri_2.position.x=tri_2.position.x-(0.005*dt);
                            // pent_2.position.y=pent_2.position.y+(0.004*dt);

                            tri_2.position.z=3;
                    }else if(tri_2.position.y<2.5)
                            {tri_2.position.y=tri_2.position.y+(0.005*dt);


                     }else{
                                
                            
                            if(tri_3.position.x>-10)
                            {

                            tri_3.position.x=tri_3.position.x-(0.005*dt);
                            // pent_3.position.y=pent_3.position.y+(0.002*dt);

                            tri_3.position.z=3;
                            }
                            else if(tri_3.position.y<2)
                            {

                                tri_3.position.y=tri_3.position.y+(0.005*dt);

                            }else{
                                
                            
                            
                                                                                                            if(lastanswer)PIEremoveElement(lastanswer);
                                                                                                            var materialSide21 = new THREE.MeshBasicMaterial( { color: 0x366B0E} );
                                                                                                            var materialArray = [materialSide21 ];
                                                                                                            var loader = new THREE.FontLoader();

                                                                                                             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                                                
                                                                                                                var textGeom = new THREE.TextGeometry(perimeter+"m", 
                                                                                                                {
                                                                                                                    size: 0.2, height: 0,
                                                                                                                    font: font, weight: "normal", style: "normal"
                                                                                                                });  
                                                                                                            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                                                                                                                lastanswer = new THREE.Mesh(textGeom, textMaterial );
                                                                                                                lastanswer.position.set(-9,2.5,3);
                                                                                                                
                                                                                                                PIEaddElement(lastanswer);
                                                                                                                // q2.visible=false;
                                                                                                                lastanswer.visible=true;
                                                                                                                
                                                                                                                // PIEdragElement(textMesh1);
                                                                                                                // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                                // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                                PIErender();
                                                                                                            });
                                                                                                            PIEstopAnimation();





                    }                       

            

            }


            }
        











        }



    







                }