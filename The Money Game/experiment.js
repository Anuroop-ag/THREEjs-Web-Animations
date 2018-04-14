
var test;
var text,text1;
var plane;
var kl=1;
var rotate=0;
var purseanime=1;
var group,animegroup;
var xval,yval,zval;
var choice=1;
var pursechoice=(Math.floor(Math.random()*13)+1);
// var pursechoice=4;
var plane1,plane2,plane3,plane4,plane5,plane6,plane7,plane8,plane9;
var theboundary=[];
var rupee_500c1;
var geometry1,geometry2,geometry3,geometry4,geometry5,geometry6,geometry7,geometry8,geometry9,geometry10;
var score=0;
var thehammer;
var purse,purse2,purse3_top,purse3_bottom;
var firsthit=0,hit=0;
var topanimation=0;
var change=1;
var text2,text3;
var scorel2=0;
var learn1;
var text16;



function learnitems(){

                                    // var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    // var materialArray = [materialSide ];
                                    // var loader = new THREE.FontLoader();

                                    //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                    //     var textGeom = new THREE.TextGeometry("The Money Game", 
                                    //     {
                                    //         size: 0.3, height: 0,
                                    //         font: font, weight: "normal", style: "normal"
                                    //     });  
                                    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                    //     learn1 = new THREE.Mesh(textGeom, textMaterial );
                                    //     learn1.position.set(0,2,6.01);
                                    //     learn1.visible=false;
                                    //     PIEaddElement(learn1);
                                        
                                    //     // PIEsetClick(learntext1);
                                    //     // PIEdragElement(textMesh1);
                                    //     // PIEsetDrag(textMesh1,myMainDrag);
                                    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
                                    //     PIErender();
                                    // });


                                    var geometry = new THREE.PlaneGeometry( 30, 25 );
                                    var material = new THREE.MeshBasicMaterial( {color: 0x081F26, side: THREE.DoubleSide} );
                                    plane11 = new THREE.Mesh( geometry, material );
                                    plane11.position.set(0,0,6);
                                    plane11.receiveShadow=false;
                                    plane11.visible=false;
                                    
                                    PIEaddElement(plane11);

                                    geometry4 = new THREE.PlaneGeometry(3,1.5);
                                    rupee_200l3 = createMesh(geometry4,"200rupees.jpg");
                                    rupee_200l3.position.set(4.5,-3.2,6.01);
                                    rupee_200l3.rotation.z=3.14/2;

                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_200l3.visible=false;
                                    PIEaddElement(rupee_200l3);


                                    geometry7 = new THREE.PlaneGeometry(2.8,1.5);
                                    rupee_100l3 = createMesh(geometry7,"100rupee.jpg");
                                    rupee_100l3.position.set(2.5,-3.3,6.01);
                                    rupee_100l3.rotation.z=3.14/2;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_100l3.visible=false;
                                    PIEaddElement(rupee_100l3);



                                    geometry6 = new THREE.PlaneGeometry(2.5,1.3);
                                    rupee_50l3 = createMesh(geometry6,"50rupee.png");
                                    rupee_50l3.position.set(0.5,-3.4,6.01);
                                    rupee_50l3.rotation.z=3.14/2;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_50l3.visible=false;
                                    PIEaddElement(rupee_50l3);



                                    geometry5 = new THREE.PlaneGeometry(2.4,1.5);
                                    rupee_10l3 = createMesh(geometry5,"10rupee.jpg");
                                    rupee_10l3.position.set(-1,-3.5,6.01);
                                    rupee_10l3.rotation.z=3.14/2;
                                   
                                    rupee_10l3.visible=false;
                                    PIEaddElement(rupee_10l3);


                                   
                                    // geometry7 = new THREE.PlaneGeometry(4.5,2);
                                    // rupee_100 = createMesh(geometry7,"100rupee.jpg");
                                    // rupee_100.position.set(-3,4.5,-1);
                                    // // rupee_100.rotation.z=3.14;
                                    
                                    // // spring.material.color.setHex(0x666666);
                                    // rupee_100.visible=false;
                                    // PIEaddElement(rupee_100);


                                    geometry8 = new THREE.PlaneGeometry(0.75,0.75);
                                    rupee_1l3 = createMesh(geometry8,"1rupee.png");
                                    rupee_1l3.position.set(-2.5,-2,6.01);
                                    rupee_1l3.visible=false;
                                    PIEaddElement(rupee_1l3);


                                    geometry9 = new THREE.PlaneGeometry(1,1);
                                    rupee_5l3 = createMesh(geometry9,"5rupee.png");
                                    rupee_5l3.position.set(-2.5,-4.1,6.01);
                                    rupee_5l3.visible=false;
                                    PIEaddElement(rupee_5l3);


                                    geometry9 = new THREE.PlaneGeometry(3.4,1.5);
                                    rupee_500l3 = createMesh(geometry9,"500rupee.jpg");
                                    rupee_500l3.position.set(6.5,-3,6.01);
                                    rupee_500l3.rotation.z=3.14/2;
                                    rupee_500l3.visible=false;
                                    PIEaddElement(rupee_500l3);

                                    geometry10 = new THREE.PlaneGeometry(0.8,0.8);
                                    rupee_2l3 = createMesh(geometry10,"2rupee.png");
                                    rupee_2l3.position.set(-2.5,-3,6.01);
                                    rupee_2l3.visible=false;
                                    PIEaddElement(rupee_2l3);


                                    

                                   
                                    PIErender();
                                    // learn();

}



function textarea(){

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("The Money Game!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text16 = new THREE.Mesh(textGeom, textMaterial );
                                        text16.position.set(-2,4,6.01);
                                        
                                        PIEaddElement(text16);
                                        text16.visible=false;
                                        PIEsetClick(text16);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry( " TASK: Count The Total Amount Shown. ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text17 = new THREE.Mesh(textGeom, textMaterial );
                                        text17.position.set(-4,3,6.01);
                                        
                                        PIEaddElement(text17);
                                        text17.visible=false;
                                        PIEsetClick(text17);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry( " For Example: The total Amount shown below is : ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text18 = new THREE.Mesh(textGeom, textMaterial );
                                        text18.position.set(-6,1,6.01);
                                        
                                        PIEaddElement(text18);
                                        text18.visible=false;
                                        PIEsetClick(text18);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry( "1 + 2 + 5 + 10 + 50 + 100 + 200 + 500 = 868 ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text19 = new THREE.Mesh(textGeom, textMaterial );
                                        text19.position.set(-5,-0.5,6.01);
                                        
                                        PIEaddElement(text19);
                                        text19.visible=false;
                                        PIEsetClick(text19);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     // text16.visible=true;

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Hit The Jar!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text = new THREE.Mesh(textGeom, textMaterial );
                                        text.position.set(0,5,0);
                                        
                                        PIEaddElement(text);
                                        text.visible=true;
                                        PIEsetClick(text);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Count The Money and Submit Your Answer --> ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text2 = new THREE.Mesh(textGeom, textMaterial );
                                        text2.position.set(-1,5,0);
                                        
                                        PIEaddElement(text2);
                                        text2.visible=false;
                                        PIEsetClick(text2);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("That's the Right Amount! ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text3 = new THREE.Mesh(textGeom, textMaterial );
                                        text3.position.set(-6,-2,5.02);
                                        
                                        PIEaddElement(text3);
                                        text3.visible=false;
                                        PIEsetClick(text3);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                      loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Click Next!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text15 = new THREE.Mesh(textGeom, textMaterial );
                                        text15.position.set(-6,-2.5,5.02);
                                        PIEaddElement(text15);
                                        text15.visible=false;
                                        PIEsetClick(text15);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("That's Right! ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text4 = new THREE.Mesh(textGeom, textMaterial );
                                        text4.position.set(2.5,5,0);
                                        
                                        PIEaddElement(text4);
                                        text4.visible=false;
                                        PIEsetClick(text4);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Click Next!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        text14 = new THREE.Mesh(textGeom, textMaterial );
                                        text14.position.set(2.5,4,0);
                                        PIEaddElement(text14);
                                        text14.visible=false;
                                        PIEsetClick(text14);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });
                                     

                                    var materialSi = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSi ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Click the Currency to Buy: ", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text5 = new THREE.Mesh(textGeom, textMaterial );
                                        text5.position.set(6,2,5.02);
                                        
                                        PIEaddElement(text5);
                                        text5.visible=false;
                                        PIEsetClick(text5);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Cotton Candy ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text6 = new THREE.Mesh(textGeom, textMaterial );
                                        text6.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text6);
                                        text6.visible=false;
                                        PIEsetClick(text6);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Cupcake ", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text7 = new THREE.Mesh(textGeom, textMaterial );
                                        text7.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text7);
                                        text7.visible=false;
                                        PIEsetClick(text7);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Lollipop", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text8 = new THREE.Mesh(textGeom, textMaterial );
                                        text8.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text8);
                                        text8.visible=false;
                                        PIEsetClick(text8);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Cookie", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text9 = new THREE.Mesh(textGeom, textMaterial );
                                        text9.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text9);
                                        text9.visible=false;
                                        PIEsetClick(text9);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Cake", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text10 = new THREE.Mesh(textGeom, textMaterial );
                                        text10.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text10);
                                        text10.visible=false;
                                        PIEsetClick(text10);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                          
                                      loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Cone", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text11 = new THREE.Mesh(textGeom, textMaterial );
                                        text11.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text11);
                                        text11.visible=false;
                                        PIEsetClick(text11);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                      loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Chocolate Bar", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text12 = new THREE.Mesh(textGeom, textMaterial );
                                        text12.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text11);
                                        text12.visible=false;
                                        PIEsetClick(text12);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                      loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Burger", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        text13 = new THREE.Mesh(textGeom, textMaterial );
                                        text13.position.set(7,1,5.02);
                                        
                                        PIEaddElement(text11);
                                        text13.visible=false;
                                        PIEsetClick(text13);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                      



}



                                    // cotton.visible=false;
                                    
                                    // PIErender();
                                    // cottonprice.visible=false;
                                    // PIErender();
                                    // cupcake.visible=false;
                                    // PIErender();
                                    // cupcakeprice.visible=false;
                                    // PIErender();
                                    // lollipop.visible=false;
                                    // PIErender();
                                    // lollipopprice.visible=false;
                                    // PIErender();
                                    // cookie.visible=false;
                                    // PIErender();
                                    // cookieprice.visible=false;
                                    // PIErender();
                                    // cake.visible=false;
                                    // PIErender();
                                    // cakeprice.visible=false;
                                    // PIErender();
                                    // cone.visible=false;
                                    // PIErender();
                                    // coneprice.visible=false;
                                    // PIErender();
                                    // bar.visible=false;
                                    // PIErender();
                                    // barprice.visible=false;
                                    // PIErender();
                                    // burger.visible=false;
                                    // PIErender();
                                    // burgerprice.visible=false;
                                    // PIErender();
                                    // rupee_200l2.visible=false;
                                    // PIErender();
                                    // rupee_100l2.visible=false;
                                    // PIErender();
                                    // rupee_50l2.visible=false;
                                    // PIErender();
                                    // rupee_10l2.visible=false;
                                    // PIErender();
                                    // rupee_1l2.visible=false;
                                    // PIErender();
                                    // rupee_5l2.visible=false;
                                    // PIErender();
                                    // rupee_500l2.visible=false;
                                    // PIErender();
                                    // rupee_2l2.visible=false;
                                    // PIErender();
                                    // keeper.visible=false;
                                    // PIErender();
                                    // computer.visible=false;
                                    // PIErender();

function purseclick(){

	purseanime=1;
	// pursechoice=(Math.floor(Math.random()*12)+1);
	// PIEstartAnimation();

}

function planes(){

    plane1.position.set(-13,0,-2);
    plane3.position.set(13,0,-2);
    plane4.position.set(0,7,-2);
    plane5.position.set(0,3,-40 );
    plane6.position.set(0,-18,-19);
    plane6.visible=true;
    plane9.position.set(0,-20,-5);
    plane9.visible=false;
    thehammer.position.set(-3,-1,0);
    thehammer.visible=true;


                                    purse.position.set(0,1,0);
                                    purse.rotation.y=-0;
                                    purse.rotation.x=-0.1;
                                    purse.visible=true;

                                    purse2.position.set(0,1,0);
                                    purse2.visible=false;
                                    
                                    purse3_top.position.set(0,1.5,0);
                                    purse3_top.visible=false;
                                    
                                    purse3_bottom.position.set(0,-0.3,1);
                                    purse3_bottom.visible=false;
                                    
                                    PIErender();


}

function resetting(){



                                    rupee_2000c1.position.set(-3,4.5,-1);

                                    rupee_200c1.position.set(-3,4.5,-1);
                                    
                                    rupee_10c1.position.set(-3,4.5,-1);
                                    
                                    rupee_50c1.position.set(-3,4.5,-1);
                                    
                                    rupee_100c1.position.set(-3,4.5,-1);
                                    
                                    rupee_1c1.position.set(-3,4.5,-1);
                                    
                                    rupee_5c1.position.set(-3,4.5,-1);

                                    rupee_500c1.position.set(-3,4.5,-1);
                                    
                                    rupee_2c1.position.set(-3,4.5,-1);


                                    rupee_2000c2.position.set(-3,4.5,-1);
                                   
                                    rupee_200c2.position.set(-3,4.5,-1);
                                   
                                    rupee_10c2.position.set(-3,4.5,-1);
                                   
                                    rupee_50c2.position.set(-3,4.5,-1);
                                   
                                    rupee_100c2.position.set(-3,4.5,-1);
                                   
                                    rupee_1c2.position.set(-3,4.5,-1);
                                   
                                    rupee_5c2.position.set(-3,4.5,-1);
                                    
                                    rupee_500c2.position.set(-3,4.5,-1);
                                    
                                    rupee_2c2.position.set(-3,4.5,-1);
                                    

                                    
                                    
                                    rupee_2000.position.set(-3,4.5,-1);
                                    
                                    rupee_200.position.set(-3,4.5,-1);
                                    
                                    rupee_10.position.set(-3,4.5,-1);
                                    
                                    rupee_50.position.set(-3,4.5,-1);
                                    
                                    rupee_100.position.set(-3,4.5,-1);
                                    
                                    rupee_1.position.set(-3,4.5,-1);
                                    
                                    rupee_5.position.set(-3,4.5,-1);
                                    
                                    rupee_500.position.set(-3,4.5,-1);
                                    
                                    rupee_2.position.set(-3,4.5,-1);
                                    
                                    table.position.set(0,-1.3,-0.1);
                                    


                                    
}

function planebackground(){

									// geometry11 = new THREE.PlaneGeometry(5,4);
         //                            tray1 = createMesh(geometry11,"tray.jpg");
         //                            tray1.position.set(-4,-3,-2);
                                    
         //                            // spring.material.color.setHex(0x666666);
         //                            tray1.visible=true;
         //                            PIEaddElement(tray1);

                                    var geometry = new THREE.PlaneGeometry( 30, 19 );
								    var material = new THREE.MeshBasicMaterial( {color: 0x00b3b3, side: THREE.DoubleSide} );
								    plane1 = new THREE.Mesh( geometry, material );
								    plane1.position.set(-13,0,-2);
								    plane1.receiveShadow=false;
                                    plane1.visible=true;
                                    plane1.rotation.y=1.4;
								    PIEaddElement(plane1);


								    // var geometry = new THREE.PlaneGeometry( 2.2, 8 );
								    // var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
								    // plane2 = new THREE.Mesh( geometry, material );
								    // plane2.position.set(-8,-4.5,-2);
								    // plane2.receiveShadow=true;
								    // PIEaddElement(plane2);
                                    // 661400

								    var geometry = new THREE.PlaneGeometry( 30, 19 );
								    var material = new THREE.MeshBasicMaterial( {color: 0x00b3b3, side: THREE.DoubleSide} );
								    plane3 = new THREE.Mesh( geometry, material );
								    plane3.position.set(13,0,-2);
								    plane3.receiveShadow=false;
                                    plane3.visible=true;
                                    plane3.rotation.y=-1.4;
								    PIEaddElement(plane3);

                                    var geometry = new THREE.PlaneGeometry( 17, 14 );
                                    var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
                                    plane4 = new THREE.Mesh( geometry, material );
                                    plane4.position.set(0,7,-2);
                                    plane4.receiveShadow=false;
                                    plane4.visible=true;
                                    plane4.rotation.x=-1.5;
                                    PIEaddElement(plane4);

                                    var geometry = new THREE.PlaneGeometry( 70, 50 );
                                    var material = new THREE.MeshBasicMaterial( {color: 0x081F26, side: THREE.DoubleSide} );
                                    plane5 = new THREE.Mesh( geometry, material );
                                    plane5.position.set(0,3,-40 );
                                    plane5.receiveShadow=false;
                                    plane5.visible=true;
                                    // plane5.rotation.x=-1.5;
                                    PIEaddElement(plane5);
// 


                                    // var geometry = new THREE.PlaneGeometry( 20,20);
                                    // var material = new THREE.MeshBasicMaterial( {color: 0x661400, side: THREE.DoubleSide} );
                                    // plane7 = new THREE.Mesh( geometry, material );
                                    // plane7.position.set(-12,3,2);
                                    // plane7.receiveShadow=false;
                                    // plane7.visible=true;
                                    // plane7.rotation.y=1.83;
                                    // // plane7.rotation.z=0.2;
                                    // PIEaddElement(plane7);

                                    var geometry = new THREE.PlaneGeometry( 40, 16 );
                                    // var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
                                    // plane6 = new THREE.Mesh( geometry, material );
                                   
                                    // plane6.rotation.x=-1.63;

                                    // geometry1 = new THREE.PlaneGeometry(,3);
                                    plane6 = createMesh(geometry,"floor2.jpg");
                                    plane6.position.set(0,-18,-19);
                                    plane6.receiveShadow=false;
                                    plane6.visible=true;
                                    // plane6.rotation.x=0.5;
                                    PIEaddElement(plane6);
                                    PIErender();


                                    var geometry = new THREE.PlaneGeometry( 40, 25 );
                                    // var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
                                    // plane6 = new THREE.Mesh( geometry, material );
                                   
                                    // plane6.rotation.x=-1.63;

                                    // geometry1 = new THREE.PlaneGeometry(,3);
                                    plane9 = createMesh(geometry,"floor2.jpg");
                                    plane9.position.set(0,-20,-5);
                                    plane9.receiveShadow=false;
                                    plane9.visible=false;
                                    // plane6.rotation.x=0.5;
                                    PIEaddElement(plane9);
                                    PIErender();

								        //the hammer
								    loader=new THREE.JSONLoader();
								    loader.load("hammer1.json", function(geometry, materials) {
								        thehammer = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
								        thehammer.scale.y = 0.3;
								        thehammer.scale.z=thehammer.scale.x = 0.2;
								        // thehammer.translation = geometry.center();
								        // thehammer.castShadow=thehammer.receiveShadow=true;
								        thehammer.position.set(-3,-1,0);
								        PIEaddElement(thehammer);
								        for(var i=0; i<3; i++){
								            thehammer.material.materials[i].opacity=1;
								            thehammer.material.materials[i].transparent=true;
								        }
								        thehammer.rotation.set(-Math.PI/2,0, 0);
								        thehammer.mass=2, thehammer.velocity=5;
								        PIEdragElement(thehammer);
								    	PIEsetDrag(thehammer, hamdrag);
								        PIErender();
								    });
								    


                                    // geometry3 = new THREE.PlaneGeometry(6,3.2);
                                    // thehammer = createMesh(geometry3,"hammer.png");
                                    // thehammer.position.set(-3,4.5,-1);
                                    // thehammer.rotation.z=0;
                                    // thehammer.rotation.set(-Math.PI/2,0, 0);
                                    
                                    // // spring.material.color.setHex(0x666666);
                                    // rupee_2000c1.visible=false;
                                    // PIEaddElement(rupee_2000c1);
								    // tex=new THREE.TextureLoader();
								    // tex.load("woodred.jpg", function(texture){
								    //     geometry=new THREE.BoxGeometry(0.05, 0.35, 3.1);
								    //     material=new THREE.MeshPhongMaterial({map:texture});
								    //     for(var i=0; i<2; i++){
								    //         theboundary[i]=new THREE.Mesh(geometry, material);
								    //         PIEaddElement(theboundary[i]);
								    //     }
								    //     theboundary[0].position.set(-2, 0.2, 0);
								    //     theboundary[1].position.set(2, 0.2, 0);

								    //     geometry=new THREE.BoxGeometry(0.05, 0.35, 4);
								    //     for(var i=2; i<4; i++){
								    //         theboundary[i]=new THREE.Mesh(geometry, material);
								    //         PIEaddElement(theboundary[i]);
								    //         theboundary[i].rotation.y=Math.PI/2;
								    //     }
								    //     theboundary[2].position.set(0, 0.2, -1.5);
								    //     theboundary[3].position.set(0, 0.2, 1.5);

								    //     geometry=new THREE.BoxGeometry(4, 0.05, 3.1);
								    //     theboundary[4]=new THREE.Mesh(geometry, material);
								    //     PIEaddElement(theboundary[4]);

								    //     PIErender();
								    // });

								    


}

function duplicates1(){



									geometry3 = new THREE.PlaneGeometry(6,3.2);
                                    rupee_2000c1 = createMesh(geometry3,"2000rupee.png");
                                    rupee_2000c1.position.set(-3,4.5,-1);
                                    rupee_2000c1.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_2000c1.visible=false;
                                    PIEaddElement(rupee_2000c1);

                                    geometry4 = new THREE.PlaneGeometry(4,2.5);
                                    rupee_200c1 = createMesh(geometry4,"200rupees.jpg");
                                    rupee_200c1.position.set(-3,4.5,-1);
                                    rupee_200c1.rotation.z=0;

                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_200c1.visible=false;
                                    PIEaddElement(rupee_200c1);


                                    geometry5 = new THREE.PlaneGeometry(2.4,1.5);
                                    rupee_10c1 = createMesh(geometry5,"10rupee.jpg");
                                    rupee_10c1.position.set(-3,4.5,-1);
                                    // rupee_10c1.rotation.z=3.14;
                                    rupee_10c1.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_10c1.visible=false;
                                    PIEaddElement(rupee_10c1);


                                    geometry6 = new THREE.PlaneGeometry(4,2);
                                    rupee_50c1 = createMesh(geometry6,"50rupee.png");
                                    rupee_50c1.position.set(-3,4.5,-1);
                                    rupee_50c1.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_50c1.visible=false;
                                    PIEaddElement(rupee_50c1);

                                    geometry7 = new THREE.PlaneGeometry(1.6,2.8);
                                    rupee_100c1 = createMesh(geometry7,"100rupeeinvert.jpg");
                                    rupee_100c1.position.set(-3,4.5,-1);
                                    rupee_100c1.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_100c1.visible=false;
                                    PIEaddElement(rupee_100c1);


                                    geometry8 = new THREE.PlaneGeometry(1,1);
                                    rupee_1c1 = createMesh(geometry8,"1rupee.png");
                                    rupee_1c1.position.set(-3,4.5,-1);
                                    rupee_1c1.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_1c1.visible=false;
                                    PIEaddElement(rupee_1c1);


                                    geometry9 = new THREE.PlaneGeometry(1.3,1.3);
                                    rupee_5c1 = createMesh(geometry9,"5rupee.png");
                                    rupee_5c1.position.set(-3,4.5,-1);
                                    rupee_5c1.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_5c1.visible=false;
                                    PIEaddElement(rupee_5c1);


                                    geometry9 = new THREE.PlaneGeometry(5,2);
                                    rupee_500c1 = createMesh(geometry9,"500rupee.jpg");
                                    rupee_500c1.position.set(-3,4.5,-1);
                                    rupee_500c1.rotation.z=0;
                                    rupee_500c1.visible=false;
                                    PIEaddElement(rupee_500c1);

                                    geometry10 = new THREE.PlaneGeometry(1.1,1.1);
                                    rupee_2c1 = createMesh(geometry10,"2rupee.png");
                                    rupee_2c1.position.set(-3,4.5,-1);
                                    rupee_2c1.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_2c1.visible=false;
                                    PIEaddElement(rupee_2c1);

                                    // group.add(purse);
                                    group.add(rupee_2000c1);
                                    group.add(rupee_500c1);
                                    group.add(rupee_200c1);
                                    group.add(rupee_100c1);
                                    group.add(rupee_50c1);
                                    group.add(rupee_10c1);
                                    group.add(rupee_5c1);
                                    group.add(rupee_2c1);
                                    group.add(rupee_1c1);
                                    PIEaddElement(group);
                                    // group.position.set(-3,4,1);
                                    // group.rotation.z=0.4;
                                    group.visible=true;

}

function duplicates2(){
									geometry3 = new THREE.PlaneGeometry(6,3.2);
                                    rupee_2000c2 = createMesh(geometry3,"2000rupee.png");
                                    rupee_2000c2.position.set(-3,4.5,-1);
                                    rupee_2000c2.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_2000c2.visible=false;
                                    PIEaddElement(rupee_2000c2);

                                    geometry4 = new THREE.PlaneGeometry(4,2.5);
                                    rupee_200c2 = createMesh(geometry4,"200rupees.jpg");
                                    rupee_200c2.position.set(-3,4.5,-1);
                                    rupee_200c2.rotation.z=0;

                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_200c2.visible=false;
                                    PIEaddElement(rupee_200c2);


                                    geometry5 = new THREE.PlaneGeometry(2.4,1.5);
                                    rupee_10c2 = createMesh(geometry5,"10rupee.jpg");
                                    rupee_10c2.position.set(-3,4.5,-1);
                                    rupee_10c2.rotation.z=0;
                                    // rupee_10c2.rotation.z=3.14;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_10c2.visible=false;
                                    PIEaddElement(rupee_10c2);


                                    geometry6 = new THREE.PlaneGeometry(4,2);
                                    rupee_50c2 = createMesh(geometry6,"50rupee.png");
                                    rupee_50c2.position.set(-3,4.5,-1);
                                    rupee_50c2.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_50c2.visible=false;
                                    PIEaddElement(rupee_50c2);

                                    geometry7 = new THREE.PlaneGeometry(2.8,1.5);
                                    rupee_100c2 = createMesh(geometry7,"100rupee.jpg");
                                    rupee_100c2.position.set(-3,4.5,-1);
                                    rupee_100c2.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_100c2.visible=false;
                                    PIEaddElement(rupee_100c2);


                                    geometry8 = new THREE.PlaneGeometry(1,1);
                                    rupee_1c2 = createMesh(geometry8,"1rupee.png");
                                    rupee_1c2.position.set(-3,4.5,-1);
                                    rupee_1c2.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_1c2.visible=false;
                                    PIEaddElement(rupee_1c2);


                                    geometry9 = new THREE.PlaneGeometry(1.3,1.3);
                                    rupee_5c2 = createMesh(geometry9,"5rupee.png");
                                    rupee_5c2.position.set(-3,4.5,-1);
                                    rupee_5c2.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_5c2.visible=false;
                                    PIEaddElement(rupee_5c2);


                                    geometry9 = new THREE.PlaneGeometry(5,2);
                                    rupee_500c2 = createMesh(geometry9,"500rupee.jpg");
                                    rupee_500c2.position.set(-3,4.5,-1);
                                    rupee_500c2.rotation.z=0;
                                    rupee_500c2.visible=false;

                                    PIEaddElement(rupee_500c2);

                                    geometry10 = new THREE.PlaneGeometry(1.1,1.1);
                                    rupee_2c2 = createMesh(geometry10,"2rupee.png");
                                    rupee_2c2.position.set(-3,4.5,-1);
                                    // rupee_2c2.rotation.z=0;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_2c2.visible=false;
                                    PIEaddElement(rupee_2c2);

                                    // group.add(purse);
                                    group.add(rupee_2000c2);
                                    group.add(rupee_500c2);
                                    group.add(rupee_200c2);
                                    group.add(rupee_100c2);
                                    group.add(rupee_50c2);
                                    group.add(rupee_10c2);
                                    group.add(rupee_5c2);
                                    group.add(rupee_2c2);
                                    group.add(rupee_1c2);
                                    PIEaddElement(group);
                                    // group.position.set(-3,4,1);
                                    // group.rotation.z=0.4;
                                    group.visible=true;



}


function items(){

                                    var geometry = new THREE.PlaneGeometry( 30, 25 );
                                    var material = new THREE.MeshBasicMaterial( {color: 0x261a0d, side: THREE.DoubleSide} );
                                    plane10 = new THREE.Mesh( geometry, material );
                                    plane10.position.set(0,0,5);
                                    plane10.receiveShadow=false;
                                    plane10.visible=false;
                                    
                                    PIEaddElement(plane10);


                                    var geometry = new THREE.PlaneGeometry( 30, 10 );
                                    var material = new THREE.MeshBasicMaterial( {color: 0x1a0600, side: THREE.DoubleSide} );
                                    plane18 = new THREE.Mesh( geometry, material );
                                    plane18.position.set(0,4,5);
                                    plane18.receiveShadow=false;
                                    plane18.visible=false;
                                    
                                    PIEaddElement(plane18);



                                    // geometry1 = new THREE.PlaneGeometry(24,10);
                                    // wall = createMesh(geometry1,"menuwall.jpg");
                                    // wall.position.set(0,4,5.01);
                                    // wall.visible=false;
                                    // PIEaddElement(wall);

                                    // geometry1 = new THREE.PlaneGeometry(22,16);
                                    // textura = createMesh(geometry1,"texture.jpg");
                                    // textura.position.set(0,-5,5);
                                    
                                    // textura.visible=true;
                                    // PIEaddElement(textura);


                                    geometry1 = new THREE.PlaneGeometry(2,2);
                                    cotton = createMesh(geometry1,"cotton.png");
                                    cotton.position.set(-1.5,4,5.01);
                                    // cone.rotation.y=-0;
                                    // cone.rotation.x=-0.1;
                                    // purse.rotation.z=3.14;

                                    // spring.material.color.setHex(0x666666);
                                    cotton.visible=false;
                                    PIEaddElement(cotton);


                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    cottonprice = createMesh(geometry1,"pricetag.png");
                                    cottonprice.position.set(-2,3,5.01);
                                    cottonprice.visible=false;
                                    PIEaddElement(cottonprice);

                                    var materialSi = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSi ];
                                    var loader = new THREE.FontLoader();


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 5", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price1 = new THREE.Mesh(textGeom, textMaterial );
                                        price1.position.set(-2.2,2.8,5.03);
                                        
                                        PIEaddElement(price1);
                                        price1.visible=false;
                                        PIEsetClick(price1);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    geometry1 = new THREE.PlaneGeometry(1.8,2);
                                    cupcake = createMesh(geometry1,"cupcake.png");
                                    cupcake.position.set(1,4,5.01);
                                   
                                    cupcake.visible=false;
                                    PIEaddElement(cupcake);

                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    cupcakeprice = createMesh(geometry1,"pricetag.png");
                                    cupcakeprice.position.set(1,3,5.01);
                                    cupcakeprice.visible=false;
                                    PIEaddElement(cupcakeprice);

                                       loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 50", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price2 = new THREE.Mesh(textGeom, textMaterial );
                                        price2.position.set(0.8,2.8,5.03);
                                        
                                        PIEaddElement(price2);
                                        price2.visible=false;
                                        PIEsetClick(price2);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    geometry1 = new THREE.PlaneGeometry(2,2);
                                    lollipop = createMesh(geometry1,"lollipop.png");
                                    lollipop.position.set(4,4,5.01);
                                   
                                    lollipop.visible=false;
                                    PIEaddElement(lollipop);

                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    lollipopprice = createMesh(geometry1,"pricetag.png");
                                    lollipopprice.position.set(4,3,5.01);
                                    lollipopprice.visible=false;
                                    PIEaddElement(lollipopprice);


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 1", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price3 = new THREE.Mesh(textGeom, textMaterial );
                                        price3.position.set(3.8,2.8,5.03);
                                        
                                        PIEaddElement(price3);
                                        price3.visible=false;
                                        PIEsetClick(price3);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });
                                   
                                    geometry1 = new THREE.PlaneGeometry(2,2);
                                    cookie = createMesh(geometry1,"cookie.png");
                                    cookie.position.set(-2,1.5,5.01);
                                    cookie.visible=false;
                                    PIEaddElement(cookie);

                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    cookieprice = createMesh(geometry1,"pricetag.png");
                                    cookieprice.position.set(-2,0.5,5.01);
                                    cookieprice.visible=false;
                                    PIEaddElement(cookieprice);


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 2", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price4 = new THREE.Mesh(textGeom, textMaterial );
                                        price4.position.set(-2.2,0.3,5.03);
                                        
                                        PIEaddElement(price4);
                                        price4.visible=false;
                                        PIEsetClick(price4);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    geometry1 = new THREE.PlaneGeometry(1.8,2.2);
                                    cake = createMesh(geometry1,"cake.png");
                                    cake.position.set(1,1.5,5.01);
                                   
                                    cake.visible=false;
                                    PIEaddElement(cake);

                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    cakeprice = createMesh(geometry1,"pricetag.png");
                                    cakeprice.position.set(1,0.5,5.01);
                                    cakeprice.visible=false;
                                    PIEaddElement(cakeprice);

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 200", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price5 = new THREE.Mesh(textGeom, textMaterial );
                                        price5.position.set(0.6,0.3,5.03);
                                        
                                        PIEaddElement(price5);
                                        price5.visible=false;
                                        PIEsetClick(price5);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    geometry1 = new THREE.PlaneGeometry(2,2);
                                    cone = createMesh(geometry1,"cone.png");
                                    cone.position.set(4,1.5,5.01);
                                   
                                    cone.visible=false;
                                    PIEaddElement(cone);

                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    coneprice = createMesh(geometry1,"pricetag.png");
                                    coneprice.position.set(4,0.5,5.01);
                                    coneprice.visible=false;
                                    PIEaddElement(coneprice);


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 10", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price6 = new THREE.Mesh(textGeom, textMaterial );
                                        price6.position.set(3.8,0.3,5.03);
                                        
                                        PIEaddElement(price6);
                                        price6.visible=false;
                                        PIEsetClick(price6);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    geometry1 = new THREE.PlaneGeometry(2,2);
                                    bar = createMesh(geometry1,"bar.png");
                                    bar.position.set(-5.25,4,5.01);
                                   
                                    bar.visible=false;
                                    PIEaddElement(bar);

                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    barprice = createMesh(geometry1,"pricetag.png");
                                    barprice.position.set(-5,3,5.01);
                                    barprice.visible=false;
                                    PIEaddElement(barprice);


                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 10", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price7 = new THREE.Mesh(textGeom, textMaterial );
                                        price7.position.set(-5.2,2.8,5.03);
                                        
                                        PIEaddElement(price7);
                                        price7.visible=false;
                                        PIEsetClick(price7);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    geometry1 = new THREE.PlaneGeometry(2.4,2);
                                    burger = createMesh(geometry1,"burger.png");
                                    burger.position.set(-5,1.5,5.01);
                                   
                                    burger.visible=false;
                                    PIEaddElement(burger);
                                    geometry1 = new THREE.PlaneGeometry(2.5,0.75);
                                    burgerprice = createMesh(geometry1,"pricetag.png");
                                    burgerprice.position.set(-5,0.5,5.01);
                                    burgerprice.visible=false;
                                    PIEaddElement(burgerprice);

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Rs 500", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                                        price8 = new THREE.Mesh(textGeom, textMaterial );
                                        price8.position.set(-5.4,0.3,5.03);
                                        
                                        PIEaddElement(price8);
                                        price8.visible=false;
                                        PIEsetClick(price8);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                   

                                    geometry4 = new THREE.PlaneGeometry(3,1.5);
                                    rupee_200l2 = createMesh(geometry4,"200rupees.jpg");
                                    rupee_200l2.position.set(6.5,-3.2,5.01);
                                    rupee_200l2.rotation.z=3.14/2;

                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_200l2.visible=false;
                                    PIEaddElement(rupee_200l2);


                                    geometry7 = new THREE.PlaneGeometry(2.8,1.5);
                                    rupee_100l2 = createMesh(geometry7,"100rupee.jpg");
                                    rupee_100l2.position.set(4.5,-3.3,5.01);
                                    rupee_100l2.rotation.z=3.14/2;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_100l2.visible=false;
                                    PIEaddElement(rupee_100l2);



                                    geometry6 = new THREE.PlaneGeometry(2.5,1.3);
                                    rupee_50l2 = createMesh(geometry6,"50rupee.png");
                                    rupee_50l2.position.set(2.5,-3.4,5.01);
                                    rupee_50l2.rotation.z=3.14/2;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_50l2.visible=false;
                                    PIEaddElement(rupee_50l2);



                                    geometry5 = new THREE.PlaneGeometry(2.4,1.5);
                                    rupee_10l2 = createMesh(geometry5,"10rupee.jpg");
                                    rupee_10l2.position.set(1,-3.5,5.01);
                                    rupee_10l2.rotation.z=3.14/2;
                                   
                                    rupee_10l2.visible=false;
                                    PIEaddElement(rupee_10l2);


                                   
                                    // geometry7 = new THREE.PlaneGeometry(4.5,2);
                                    // rupee_100 = createMesh(geometry7,"100rupee.jpg");
                                    // rupee_100.position.set(-3,4.5,-1);
                                    // // rupee_100.rotation.z=3.14;
                                    
                                    // // spring.material.color.setHex(0x666666);
                                    // rupee_100.visible=false;
                                    // PIEaddElement(rupee_100);


                                    geometry8 = new THREE.PlaneGeometry(0.75,0.75);
                                    rupee_1l2 = createMesh(geometry8,"1rupee.png");
                                    rupee_1l2.position.set(-0.5,-2,5.01);
                                    rupee_1l2.visible=false;
                                    PIEaddElement(rupee_1l2);


                                    geometry9 = new THREE.PlaneGeometry(1,1);
                                    rupee_5l2 = createMesh(geometry9,"5rupee.png");
                                    rupee_5l2.position.set(-0.5,-4.1,5.01);
                                    rupee_5l2.visible=false;
                                    PIEaddElement(rupee_5l2);


                                    geometry9 = new THREE.PlaneGeometry(3.4,1.5);
                                    rupee_500l2 = createMesh(geometry9,"500rupee.jpg");
                                    rupee_500l2.position.set(8.5,-3,5.01);
                                    rupee_500l2.rotation.z=3.14/2;
                                    rupee_500l2.visible=false;
                                    PIEaddElement(rupee_500l2);

                                    geometry10 = new THREE.PlaneGeometry(0.8,0.8);
                                    rupee_2l2 = createMesh(geometry10,"2rupee.png");
                                    rupee_2l2.position.set(-0.5,-3,5.01);
                                    rupee_2l2.visible=false;
                                    PIEaddElement(rupee_2l2);


                                    geometry10 = new THREE.PlaneGeometry(8,6);
                                    keeper = createMesh(geometry10,"keeper.png");
                                    keeper.position.set(-6,-2,5.01);
                                    keeper.visible=false;
                                    PIEaddElement(keeper);

                                    geometry10 = new THREE.PlaneGeometry(2,2);
                                    computer = createMesh(geometry10,"computer.png");
                                    computer.position.set(-7.9,-1.9,5.01);
                                    computer.visible=false;
                                    PIEaddElement(computer);

                                    PIEsetClick(rupee_500l2,rupee_500l2_click);
                                    PIEsetClick(rupee_200l2,rupee_200l2_click);
                                    PIEsetClick(rupee_100l2,rupee_100l2_click);
                                    PIEsetClick(rupee_50l2,rupee_50l2_click);
                                    PIEsetClick(rupee_10l2,rupee_10l2_click);
                                    PIEsetClick(rupee_5l2,rupee_5l2_click);
                                    PIEsetClick(rupee_2l2,rupee_2l2_click);
                                    PIEsetClick(rupee_1l2,rupee_1l2_click);

                                    // geometry11 = new THREE.PlaneGeometry(10,1.5);
                                    // table = createMesh(geometry11,"table.png");
                                    // table.position.set(0,-1.3,-0.1);
                                    // table.rotation.y=0;
                                    // table.rotation.x=-1;
                                    // // purse.rotation.x=-0.2;
                                    // // table.rotation.z=3.14;

                                    // spring.material.color.setHex(0x666666);
                                    // table.visible=true;
                                    // PIEaddElement(table);
                                    PIErender();


}

function rupee_500l2_click(){
    if(scorel2==500)
    {
        text3.visible=true;
        text15.visible=true;
        PIErender();
        choice=1;
        nextaccept=1;
        // next();
    }

}

function rupee_200l2_click(){
    if(scorel2==200)
    {
        text3.visible=true;
        text15.visible=true;

        PIErender();
        choice=1;
        
        nextaccept=1;
        // next();


    }
}

function rupee_100l2_click(){
    if(scorel2==100)
    {
        text3.visible=true;
        text15.visible=true;

        PIErender();
        choice=1;
        
        nextaccept=1;
        // next();


    }
}
function rupee_50l2_click(){
    if(scorel2==50)
    {
        text3.visible=true;
        text15.visible=true;

        PIErender();
        choice=1;
        
        nextaccept=1;
        // next();


    }
}

function rupee_10l2_click(){
    if(scorel2==10)
    {
        text3.visible=true;
        text15.visible=true;

        PIErender();
        choice=1;
        
        nextaccept=1;
        // next();


    }
}

function rupee_5l2_click(){
    if(scorel2==5)
    {
        text3.visible=true;
        text15.visible=true;

        PIErender();
        choice=1;
        nextaccept=1;
        // next();

    }
}

function rupee_2l2_click(){
    if(scorel2==2)
    {
        text3.visible=true;
        text15.visible=true;

        PIErender();
        choice=1;
        nextaccept=1;
        // next();

    }
}

function rupee_1l2_click(){
    if(scorel2==1)
    {
        text3.visible=true;
        text15.visible=true;

        PIErender();
        choice=1;
        nextaccept=1;
        // next();

    }
}


                                                                                            function selectl2score(){
                                                                                                        
                                                                                                        text6.visible=false;
                                                                                                        text7.visible=false;
                                                                                                        text8.visible=false;
                                                                                                        text9.visible=false;
                                                                                                        text10.visible=false;
                                                                                                        text11.visible=false;
                                                                                                        text12.visible=false;
                                                                                                        text13.visible=false;
                                                                                                        text5.visible=true;
                                                                                                        price1.visible=true;
                                                                                                        price2.visible=true;
                                                                                                        price3.visible=true;
                                                                                                        price4.visible=true;
                                                                                                        price5.visible=true;
                                                                                                        price6.visible=true;
                                                                                                        price7.visible=true;
                                                                                                        price8.visible=true;

                                                                                                selector=(Math.floor(Math.random()*7)+1);
                                                                                                if(selector==1){
                                                                                                    
                                                                                                    text8.visible=true;
                                                                                                    price3.visible=true;
                                                                                                    scorel2=1;

                                                                                                }else if(selector==2){
                                                                                                    scorel2=2;
                                                                                                    text9.visible=true;

                                                                                                }else if(selector==3){
                                                                                                    scorel2=5;
                                                                                                    text6.visible=true;
                                                                                                    price1.visible=true;
                                                                                                }else if(selector==4){
                                                                                                    scorel2=10;
                                                                                                    text11.visible=true;

                                                                                                }else if(selector==5){
                                                                                                    scorel2=50;
                                                                                                    text7.visible=true;
                                                                                                    price2.visible=true;

                                                                                                }else if(selector==6){
                                                                                                    text12.visible=true;
                                                                                                    scorel2=100;
                                                                                                }else if(selector==7){

                                                                                                    scorel2=200;
                                                                                                    text10.visible=true;

                                                                                                }
                                                                                                else{
                                                                                                        text13.visible=true;
                                                                                                        scorel2=500;
                                                                                                }


                                                                                            }





function initialiseScene(){

		PIEhideControlElement();
        textarea();
        planebackground();
        items();
        learnitems();
        
                                    

                                    geometry1 = new THREE.PlaneGeometry(3.5,5);
                                    purse = createMesh(geometry1,"money_jar.png");
                                    purse.position.set(0,1,0);
                                    purse.rotation.y=-0;
                                    purse.rotation.x=-0.1;
                                    // purse.rotation.z=3.14;

                                    // spring.material.color.setHex(0x666666);
                                    purse.visible=true;
                                    PIEaddElement(purse);
                                    PIEsetClick(purse,purseclick);
                                    PIErender();
                                    geometry1 = new THREE.PlaneGeometry(3.5,4.9);
                                    purse2 = createMesh(geometry1,"broken.png");
                                    purse2.position.set(0,1,0);
                                    purse2.rotation.y=-0;
                                    purse2.rotation.x=0;
                                    purse2.rotation.z=0;

                                    // spring.material.color.setHex(0x666666);
                                    purse2.visible=false;
                                    PIEaddElement(purse2);
                                    // PIEsetClick(purse2,purseclick);
                                    PIErender();
                                    geometry1 = new THREE.PlaneGeometry(3,3);
                                    purse3_top = createMesh(geometry1,"broken_top.png");
                                    purse3_top.position.set(0,1.5,0);
                                    purse3_top.rotation.z=0;
                                    purse3_top.rotation.x=0;
                                    purse3_top.visible=false;
                                    PIEaddElement(purse3_top);
                                    // PIEsetClick(purse2,purseclick);
                                    PIErender();
                                    geometry1 = new THREE.PlaneGeometry(3.5,2.5);
                                    purse3_bottom = createMesh(geometry1,"broken_bottom.png");
                                    purse3_bottom.position.set(0,-0.3,1);
                                    purse3_bottom.rotation.y=0;
                                    purse3_bottom.rotation.x=0;
                                    purse3_bottom.visible=false;
                                    
                                    PIEaddElement(purse3_bottom);
                                    // PIEsetClick(purse3_bottom,purseclick);
                                    PIErender();


                                    // geometry2 = new THREE.PlaneGeometry(1,1);
                                    // coin = createMesh(geometry2,"coin.png");
                                    // coin.position.set(-4,-0.15,2);
                                    // // purse.rotation.y=-0;
                                    // // purse.rotation.x=-0.4;
                                    // // purse.rotation.z=0.5;

                                    // // spring.material.color.setHex(0x666666);
                                    // coin.visible=true;
                                    // PIEaddElement(coin);


                                    geometry3 = new THREE.PlaneGeometry(6,3.2);
                                    rupee_2000 = createMesh(geometry3,"2000rupee.png");
                                    rupee_2000.position.set(-3,4.5,-1);
                                    // rupee_2000.rotation.x=-1.1;
                                    // rupee_2000.rotation.z=0.1;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_2000.visible=false;
                                    PIEaddElement(rupee_2000);

                                    geometry4 = new THREE.PlaneGeometry(4,2.5);
                                    rupee_200 = createMesh(geometry4,"200rupees.jpg");
                                    rupee_200.position.set(-3,4.5,-1);
                                    // rupee_200.rotation.z=3.14;

                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_200.visible=false;
                                    PIEaddElement(rupee_200);


                                    geometry5 = new THREE.PlaneGeometry(2.4,1.5);
                                    rupee_10 = createMesh(geometry5,"10rupee.jpg");
                                    rupee_10.position.set(-3,4.5,-1);
                                    // purse.rotation.z=3.14;
                                    // rupee_10.rotation.z=3.14;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_10.visible=false;
                                    PIEaddElement(rupee_10);


                                    geometry6 = new THREE.PlaneGeometry(4,2);
                                    rupee_50 = createMesh(geometry6,"50rupee.png");
                                    rupee_50.position.set(-3,4.5,-1);
                                    // rupee_50.rotation.z=3.14;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_50.visible=false;
                                    PIEaddElement(rupee_50);

                                    geometry7 = new THREE.PlaneGeometry(2.8,1.6);
                                    rupee_100 = createMesh(geometry7,"100rupee.jpg");
                                    rupee_100.position.set(-3,4.5,-1);
                                    // rupee_100.rotation.z=3.14;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_100.visible=false;
                                    PIEaddElement(rupee_100);


                                    geometry8 = new THREE.PlaneGeometry(1,1);
                                    rupee_1 = createMesh(geometry8,"1rupee.png");
                                    rupee_1.position.set(-3,4.5,-1);
                                    // rupee_1.rotation.z=3.14;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_1.visible=false;
                                    PIEaddElement(rupee_1);


                                    geometry9 = new THREE.PlaneGeometry(1.3,1.3);
                                    rupee_5 = createMesh(geometry9,"5rupee.png");
                                    rupee_5.position.set(-3,4.5,-1);
                                    // rupee_5.rotation.z=3.14;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_5.visible=false;
                                    PIEaddElement(rupee_5);


                                    geometry9 = new THREE.PlaneGeometry(5,2);
                                    rupee_500 = createMesh(geometry9,"500rupee.jpg");
                                    rupee_500.position.set(-3,4.5,-1);
                                    // rupee_500.rotation.z=3.14;
                                    rupee_500.visible=false;
                                    PIEaddElement(rupee_500);

                                    geometry10 = new THREE.PlaneGeometry(1.1,1.1);
                                    rupee_2 = createMesh(geometry10,"2rupee.png");
                                    rupee_2.position.set(-3,4.5,-1);
                                    // rupee_2.rotation.z=3.14;
                                    
                                    // spring.material.color.setHex(0x666666);
                                    rupee_2.visible=false;
                                    PIEaddElement(rupee_2);

                                    geometry11 = new THREE.PlaneGeometry(10,1.5);
                                    table = createMesh(geometry11,"table.png");
                                    table.position.set(0,-1.3,-0.1);
                                    table.rotation.y=0;
                                    table.rotation.x=-1;
                                    // purse.rotation.x=-0.2;
                                    // table.rotation.z=3.14;

                                    // spring.material.color.setHex(0x666666);
                                    table.visible=true;
                                    PIEaddElement(table);
                                    PIErender();
                                    // PIEsetClick(purse,purseclick);


                                    group=new THREE.Group();
                                    
                                    // group.add(purse);
                                    group.add(rupee_2000);
                                    group.add(rupee_500);
                                    group.add(rupee_200);
                                    group.add(rupee_100);
                                    group.add(rupee_50);
                                    group.add(rupee_10);
                                    group.add(rupee_5);
                                    group.add(rupee_2);
                                    group.add(rupee_1);
                                    duplicates1();
        							duplicates2();
                                    PIEaddElement(group);

                                    // group.position.set(-3,4,1);
                                    // group.rotation.z=0.4;
                                    group.visible=true;

                                    // text1.visible=false;
                                    // animegroup=new THREE.Group();
                                    // animegroup.add(purse3_bottom);
                                    // animegroup.add(table);
                                    // PIEaddElement(group);


                                    // PIEsetClick(group,purseclick);

// var geometry = new THREE.PlaneGeometry( 5, 0.1, 0 );
// var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
// plane1 = new THREE.Mesh( geometry, material );
// plane1.position.set(-11,3,0);
// plane1.receiveShadow=true;
// PIEaddElement(plane1);



   




}


var i;
function hamdrag(ele,newpos){

ele.position.set(newpos.x,newpos.y,newpos.z);
if(ele.position.x > -2.2 && ele.position.y>-1 && ele.position.y<2.5 && ele.position.x<2 && firsthit==0 && hit==0){
    purse.visible=false;
    purse2.visible=true;
    thehammer.position.set(-4,0,1);
    hit=1;


    // rotate=1;
    // PIEstartAnimation();
    // purse2.rotation.z=0;

}else if(ele.position.x > -2.2 && ele.position.y>-1 && ele.position.y<2.5 && ele.position.x<2 && firsthit==1){

        purse2.visible=false;
        thehammer.visible=false;
        purse3_bottom.visible=true;
        topanimation=1;
        text.visible=false;
          plane6.visible=false;
    // plane9.visible=true;
    PIErender();
        // // kl=1;
        PIEstartAnimation();
        // purse3_top.visible=true;

}else if((ele.position.x < -3 || ele.position.x >2) && hit==1 ){
    firsthit=1;
    hit=0;
    
}

}
function tableanime(dt){

var x=table.position.x;
var y=table.position.y;
var z=table.position.z;

var x1=purse3_bottom.position.x;
var y1=purse3_bottom.position.y;
var z1=purse3_bottom.position.z;

var x2=plane1.position.x;
var y2=plane1.position.y;
var z2=plane1.position.z;

var x3=plane3.position.x;
var y3=plane3.position.y;
var z3=plane3.position.z;

var x4=plane4.position.x;
var y4=plane4.position.y;
var z4=plane4.position.z;

// var x5=plane5.position.x;
// var y5=plane5.position.y;
// var z5=plane5.position.z;

var x6=plane6.position.x;
var y6=plane6.position.y;
var z6=plane6.position.z;

var x7=plane9.position.x;
var y7=plane9.position.y;
var z7=plane9.position.z;
plane9.visible=true;
PIErender();

// var size1=3.5-(0.1*dt);
// var size2=3.5-(0.1*dt);
// PIEremoveElement(purse3_top);

// 									geometry1 = new THREE.PlaneGeometry(size1,size2);
//                                     purse3_top = createMesh(geometry1,"broken_top.png");
//                                     purse3_top.position.set(0,3,0);
//                                     purse3_top.rotation.z=0;
//                                     purse3_top.rotation.x=0;
//                                     purse3_top.visible=true;
//                                     PIEaddElement(purse3_top);

//                                     PIErender();

if(y7<-2){
    y7=y7+(0.004*(dt));

    plane9.position.set(x7,y7,z7);


}else{
    PIEstopAnimation();
    firsthit=0;
    hit=0;
}

if(y<10){
    y=y+(0.003*(dt));
    y1=y1+(0.003*(dt));
    x2=x2-(0.007*(dt));
    y2=y2+(0.004*dt);

    x3=x3+(0.007*(dt));
    y3=y3+(0.005*dt);
    y4=y4+(0.006*(dt));
    y7=y7+(0.007*(dt));
    // y5=y5+(0.0065*(dt));
    // y6=y6+(0.011*dt);
    table.position.set(x,y,z);
    purse3_bottom.position.set(x1,y1,z1);
    plane1.position.set(x2,y2,z2);
    // plane1.rotation.y=plane1.rotation.y+(0.011*dt);
    plane3.position.set(x3,y3,z3);
    // plane3.rotation.y=-1.5;
    plane4.position.set(x4,y4,z4);
    // plane4.rotation.x=-1.53;
    // plane5.position.set(x5,y5,z5);
    // plane6.position.set(x6,y6,z6);
    // 
}else{
    plane6.visible=false;
    text2.visible=true;
    // text16.visible=true;
    // text.visible=false;
    // plane9.visible=true;
    PIErender();
}

}

function topanime(dt){

var x=purse3_top.position.x;
var y=purse3_top.position.y;
var z=purse3_top.position.z;


if(purse3_top.rotation.z>-2){

purse3_top.visible=true;
purse3_top.rotation.z=purse3_top.rotation.z-(0.006*(dt));
// purse3_top.position.z=purse3_top.position.z-(0.01*dt);



}else{
    // topanimation=0;
// pursechoice==4;

}

// if(y>0){

//     y=y-(0.002*dt);
//     purse3_top.position.set(x,y,z);
// }

}


function handleChange(row, col, value)
{
    /* Set current Table to Copy Table */
    PIEtableSelect("Copy Table");
    /* copy cell content to Copy Table */
    PIEupdateTableCell(row, col, value);
}


function loadExperimentElements(){
    var loader, tex, material, geometry;

    PIEsetExperimentTitle("The Money Game");
    PIEsetDeveloperName("Anuroop Gubbala");
 
    initialiseHelp();
    initialiseInfo();
    initialiseControls();
    initialiseScene();

    PIEsetAreaOfInterest(-7, 7, 7, -7);
    // PIEscene.background=new THREE.Color( 0xffa64d );
    PIEscene.background=new THREE.Color(0x232020);
    // PIEscene.background=new THREE.Color(0x661400);
    

    // var controls=new THREE.OrbitControls(PIEcamera,PIErenderer.domElement);
    // controls.addEventListener('change',PIErender);
           
    PIErender();
    // next();
    PIEstartAnimation();

    
}



function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       PIErender();
       return mesh;

}

function invisible(){

                                rupee_2000.visible=false;
                                rupee_100.visible=false;
                                rupee_100c1.visible=false;
                                rupee_100c2.visible=false;
                                rupee_200.visible=false;
                                rupee_200c1.visible=false;
                                rupee_200c2.visible=false;
                                rupee_500.visible=false;
                                rupee_500c1.visible=false;
                                rupee_500c2.visible=false;
                                rupee_5.visible=false;
                                rupee_5c1.visible=false;
                                rupee_5c2.visible=false;
                                rupee_2.visible=false;
                                rupee_2c1.visible=false;
                                rupee_2c2.visible=false;
                                rupee_1.visible=false;
                                rupee_1c1.visible=false;
                                rupee_1c2.visible=false;
                                rupee_10.visible=false;
                                rupee_10c1.visible=false;
                                rupee_10c2.visible=false;
                                rupee_50.visible=false;
                                rupee_50c1.visible=false;
                                rupee_50c2.visible=false;
                                
}



function updateExperimentElements(t, dt)
        {       
            // PIEstopAnimation();

            // PIEremoveElement(nline);
               	var time  = t/1000;



               	if((time >= 0.5) && (kl==1)){

                    PIErender();

                    PIEstopAnimation();
                    kl=0;
                

       			 }

                if(kl == 0){

                    // if(rotate==1 && count<10){
                    //     purse3_top.rotation.z=(0.001*dt);
                    //     count++;
                    //  }else{
                    //     purse3_top.rotation.z=-(0.001*dt);
                    //     count++;
                    // }


            if(topanimation==1){

                topanime(dt);
                tableanime(dt);

            }else if(topanimation==0){
                PIEstopAnimation();
            
            }

     	          if(choice==1){


           
                	

                	if(purseanime==1){


                		// if(thehammer.position.x){ 

                  //     	// purse.rotation.z=purse.rotation.z-(0.001*(dt));
                  //      //  rupee_2000.rotation.z=rupee_2000.rotation.z-(0.001*(dt));
                  //      //  rupee_200.rotation.z=rupee_200.rotation.z-(0.001*(dt));
                  //      //  rupee_500.rotation.z=rupee_500.rotation.z-(0.001*(dt));
                  //      //  rupee_100.rotation.z=rupee_100.rotation.z-(0.001*(dt));
                  //      //  rupee_50.rotation.z=rupee_50.rotation.z-(0.001*(dt));
                  //      //  rupee_10.rotation.z=rupee_10.rotation.z-(0.001*(dt));
                  //      //  rupee_5.rotation.z=rupee_5.rotation.z-(0.001*(dt));
                  //      //  rupee_2.rotation.z=rupee_2.rotation.z-(0.001*(dt));
                  //      //  rupee_1.rotation.z=rupee_1.rotation.z-(0.001*(dt));



                  // 		}else{

                  			purseanime=0;
                  		
                  			

                  		}else{

                  			// purseanime=0;
                  			
           
                  			
                  			if(pursechoice==1){
                  			// rupee_100.position.set(xval,yval,zval);
                  			// rupee_2000.position.set(xval,yval,zval);
                  			// rupee_10.position.set(xval,yval,zval);
                  			// rupee_1.position.set(xval,yval,zval);
                  				score=2165;
                                rupee_2000_move(dt);
                  				rupee_100_move(dt);
                  				
                  				// rupee_2000_move(dt);
                  				
                  				// rupee_500_move(dt);
                  				
                  				// rupee_500c1_move(dt);
                  				
                  				// rupee_500c2_move(dt);
                  				
                  				rupee_2_move(dt);
                  				
                  				rupee_2c2_move(dt);
                  				
                  				rupee_1c1_move(dt);
                  				
                  				// rupee_1c2_move(dt);
                  				
                  				// rupee_5c1_move(dt);
                  				
                  				// rupee_5c2_move(dt);
                  				
                  				// rupee_2c1_move(dt);
                  				
                  				// rupee_10c1_move(dt);
                  				
                  				rupee_10c2_move(dt);
                  				
                  				// rupee_100c1_move(dt);
                  				
                  				rupee_50c1_move(dt);
                  				
                  				// rupee_50c2_move(dt);
                  				
                  				// rupee_200_move(dt);
                  				
                  				// rupee_200c1_move(dt);



                  				
                  			}else if(pursechoice==2){
                  				score=2283;
                                rupee_2000_move(dt);
                  				// rupee_50_move(dt);
                  				// rupee_50c1_move(dt);
                  				// rupee_10_move(dt);
                  				rupee_5_move(dt);
                  				// rupee_500c1_move(dt);
                  				// rupee_500c2_move(dt);
                  				// rupee_1_move(dt);
                  				// rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				rupee_5c1_move(dt);
                  				// rupee_5c2_move(dt);
                  				// rupee_2c1_move(dt);
                  				// rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				rupee_10c2_move(dt);
                  				// rupee_100c1_move(dt);
                  				rupee_50c2_move(dt);
                  				rupee_200_move(dt);
                  				// rupee_200c1_move(dt);

                  			}else if(pursechoice==3){
                  				score=2668;
                                rupee_2000_move(dt);
                  				rupee_50_move(dt);
                  				// rupee_50c1_move(dt);
                  				// rupee_10_move(dt);
                  				// rupee_5_move(dt);
                  				rupee_500c1_move(dt);
                  				// rupee_500c2_move(dt);
                  				rupee_1_move(dt);
                  				rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				// rupee_2c2_move(dt);
                  				rupee_5c1_move(dt);
                  				// rupee_5c2_move(dt);
                  				// rupee_2c1_move(dt);
                  				// rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				// rupee_10c2_move(dt);
                  				rupee_100c1_move(dt);
                  				// rupee_50c2_move(dt);
                  				// rupee_200_move(dt);
                  				// rupee_200c1_move(dt);

                  			}else if(pursechoice==4){

                  				score=2738;
 								
                  				rupee_2000_move(dt);

                  				rupee_50_move(dt);
                  				// rupee_50c1_move(dt);
                  				rupee_10_move(dt);
                  				rupee_5_move(dt);
                  				rupee_500c1_move(dt);
                  				// rupee_500c2_move(dt);
                  				// rupee_1_move(dt);
                  				// rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				rupee_5c1_move(dt);
                  				rupee_5c2_move(dt);
                  				// rupee_2c1_move(dt);
                  				// rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				// rupee_10c2_move(dt);
                  				rupee_100c1_move(dt);
                  				rupee_50c2_move(dt);
                  				// rupee_200_move(dt);
                  				// rupee_200c1_move(dt);

                  			}else if(pursechoice==5){

                  				score=3129;
                  				rupee_50_move(dt);
                  				rupee_50c2_move(dt);
                  				
                  				rupee_10_move(dt);
                  				rupee_5_move(dt);
                  				rupee_5c1_move(dt);
                  				rupee_2c1_move(dt);
                  				rupee_2_move(dt);
                  				rupee_1_move(dt);
                  				rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				
                  				
                  				rupee_500c1_move(dt);
                  				rupee_500c2_move(dt);
                  				rupee_2000_move(dt);

                  		

                  			}
                  			else if(pursechoice==6){
                  				score=3623;

                                rupee_1_move(dt);
                                rupee_1c2_move(dt);

                                rupee_2c2_move(dt);
                                rupee_2_move(dt);
                                rupee_2c1_move(dt);
                                
                                rupee_5_move(dt);
                                
                                rupee_10_move(dt);
                                
                                rupee_50_move(dt);
                                rupee_50c2_move(dt);
                  				
                                rupee_100_move(dt);

                                rupee_200_move(dt);
                                rupee_200c1_move(dt);
                                
                                rupee_500c1_move(dt);
                                rupee_500c2_move(dt);
                  				
                                rupee_2000_move(dt);
                  				
                  			}else if(pursechoice==7){
                                score= 3582;
                                rupee_1_move(dt);
                                rupee_1c1_move(dt);
                                rupee_1c2_move(dt);

                                rupee_2c1_move(dt);
                                rupee_2_move(dt);

                                rupee_5_move(dt);

                                rupee_10_move(dt);
                                rupee_10c1_move(dt);

                                rupee_50_move(dt);
                                rupee_50c1_move(dt);
                                rupee_50c2_move(dt);

                  				
                                rupee_100_move(dt);

                  				

                  				
                                rupee_100c1_move(dt);
                  				
                  				rupee_200_move(dt);

                  				rupee_500c1_move(dt);
                  				rupee_500c2_move(dt);

                                rupee_2000_move(dt);
                  				
                  				
                  			}else if(pursechoice==8){

                                score=1394;
                                rupee_500c1_move(dt);
                  				rupee_500_move(dt);
                  				rupee_100_move(dt);
                                rupee_100c1_move(dt);

                  				rupee_50_move(dt);
                  				rupee_50c1_move(dt);
                  				
                                rupee_10_move(dt);
                  				rupee_5_move(dt);
                  				
                  				// rupee_500c2_move(dt);
                  				rupee_1_move(dt);
                  				rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				// rupee_5c1_move(dt);
                  				// rupee_5c2_move(dt);
                  				rupee_2c1_move(dt);
                  				rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				rupee_10c2_move(dt);
                  				
                  				rupee_50c2_move(dt);
                  				// rupee_200_move(dt);
                  				// rupee_200c1_move(dt);
                  			}
                  			else if(pursechoice==9){
                  				// rupee_500_move(dt);
                  				// rupee_100_move(dt);

                  				// rupee_2000_move(dt);
                                score=34;
                  				// rupee_50_move(dt);
                  				// rupee_50c1_move(dt);
                  				// rupee_10_move(dt);
                  				rupee_5_move(dt);
                  				// rupee_500c1_move(dt);
                  				// rupee_500c2_move(dt);
                  				rupee_1_move(dt);
                  				rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				rupee_5c1_move(dt);
                  				rupee_5c2_move(dt);
                  				rupee_2c1_move(dt);
                  				rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				// rupee_10c2_move(dt);
                  				// rupee_100c1_move(dt);
                  				// rupee_50c2_move(dt);
                  				// rupee_200_move(dt);
                  				// rupee_200c1_move(dt);
                  			}else if(pursechoice==10){

                  				// rupee_500_move(dt);
                  				// rupee_100_move(dt);
                                score=2284;
                  				rupee_2000_move(dt);

                  				rupee_50_move(dt);
                  				// rupee_50c1_move(dt);
                  				// rupee_10_move(dt);
                  				rupee_5_move(dt);
                  				// rupee_500c1_move(dt);
                  				// rupee_500c2_move(dt);
                  				rupee_1_move(dt);
                  				rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				rupee_5c1_move(dt);
                  				rupee_5c2_move(dt);
                  				rupee_2c1_move(dt);
                  				rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				// rupee_10c2_move(dt);
                  				// rupee_100c1_move(dt);
                  				// rupee_50c2_move(dt);
                  				rupee_200_move(dt);
                  				// rupee_200c1_move(dt);


                  			}else if(pursechoice==11){
                                score=834;
                  				// rupee_500_move(dt);
                  				rupee_100_move(dt);

                  				// rupee_2000_move(dt);

                  				// rupee_50_move(dt);
                  				// rupee_50c1_move(dt);
                  				// rupee_10_move(dt);
                  				rupee_5_move(dt);
                  				// rupee_500c1_move(dt);
                  				rupee_500c2_move(dt);
                  				rupee_1_move(dt);
                  				rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				rupee_5c1_move(dt);
                  				rupee_5c2_move(dt);
                  				rupee_2c1_move(dt);
                  				rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				// rupee_10c2_move(dt);
                  				// rupee_100c1_move(dt);
                  				// rupee_50c2_move(dt);
                  				rupee_200_move(dt);
                  				// rupee_200c1_move(dt);
                  			}else{

                  				score=234;

                  				// rupee_2000_move(dt);

                  				rupee_50_move(dt);
                  				
                  				rupee_5_move(dt);
                  				
                  				rupee_1_move(dt);
                  				rupee_1c1_move(dt);
                  				rupee_1c2_move(dt);
                  				rupee_2c2_move(dt);
                  				rupee_5c1_move(dt);
                  				rupee_5c2_move(dt);
                  				rupee_2c1_move(dt);
                  				rupee_2_move(dt);
                  				rupee_10c1_move(dt);
                  				// rupee_10c2_move(dt);
                  				rupee_100c1_move(dt);
                  				rupee_50c2_move(dt);
                  				// rupee_200_move(dt);
                  				// rupee_200c1_move(dt);
                  			}

                  		}

                  	}

      }

  }


          		






function rupee_2000_move(dt){

	xval=rupee_2000.position.x;
    yval=rupee_2000.position.y;
    zval=rupee_2000.position.z;
    rupee_2000.visible=true;

    if(yval>0){
    yval=yval-(0.01*dt);
    xval=xval+(0.026*dt);
	rupee_2000.position.set(xval,yval,zval);
	}




}

function rupee_500_move(dt){

	xval=rupee_500.position.x;
    yval=rupee_500.position.y;
    zval=rupee_500.position.z;
    rupee_500.visible=true;
    

	if(yval>-6){

		yval=yval-(0.01*dt);
		xval=xval+(0.011*dt);
	rupee_500.position.set(xval,yval,zval);
	}


}



function rupee_500c1_move(dt){

	xval=rupee_500c1.position.x;
    yval=rupee_500c1.position.y;
    zval=rupee_500c1.position.z;
    rupee_500c1.visible=true;
    

	if(yval>-4){

		yval=yval-(0.01*dt);
		xval=xval+(0.013*dt);
	rupee_500c1.position.set(xval,yval,zval);
	}


}



function rupee_500c2_move(dt){

	xval=rupee_500c2.position.x;
    yval=rupee_500c2.position.y;
    zval=rupee_500c2.position.z;
    rupee_500c2.visible=true;
    

	if(yval>-2){

		yval=yval-(0.01*dt);
		xval=xval+(0.016*dt);
	rupee_500c2.position.set(xval,yval,zval);
	}


}

function rupee_200_move(dt){

	xval=rupee_200.position.x;
    yval=rupee_200.position.y;
    zval=rupee_200.position.z;
    rupee_200.visible=true;

    if(yval>-2){
    yval=yval-(0.01*dt);
    xval=xval+(0.006*dt);
	rupee_200.position.set(xval,yval,zval);
	}




}


function rupee_200c1_move(dt){

	xval=rupee_200c1.position.x;
    yval=rupee_200c1.position.y;
    zval=rupee_200c1.position.z;
    rupee_200c1.visible=true;

    if(yval>-6){
    yval=yval-(0.01*dt);
    // xval=xval+(0.006*dt);
    xval=xval+(0.0044*dt);

	rupee_200c1.position.set(xval,yval,zval);
	}else{
		PIEstopAnimation();
	}




}


function rupee_100_move(dt){

	xval=rupee_100.position.x;
    yval=rupee_100.position.y;
    zval=rupee_100.position.z;
    yval=yval-(0.01*dt);
    rupee_100.visible=true;

	if(yval>-6){
	rupee_100.position.set(xval,yval,zval);
	}


}


function rupee_100c1_move(dt){

	xval=rupee_100c1.position.x;
    yval=rupee_100c1.position.y;
    zval=rupee_100c1.position.z;
    rupee_100c1.visible=true;

	if(yval>-4){
    yval=yval-(0.01*dt);
    xval=xval+(0.0083*dt);
 
	rupee_100c1.position.set(xval,yval,zval);
	}


}


function rupee_50_move(dt){

	xval=rupee_50.position.x;
    yval=rupee_50.position.y;
    zval=rupee_50.position.z;
    rupee_50.visible=true;

    if(yval>-2){
    yval=yval-(0.01*dt);

	rupee_50.position.set(xval,yval,zval);
	}




}


function rupee_50c1_move(dt){

	xval=rupee_50c1.position.x;
    yval=rupee_50c1.position.y;
    zval=rupee_50c1.position.z;
    rupee_50c1.visible=true;

    if(yval>0){
    yval=yval-(0.01*dt);
    xval=xval+(0.012*dt);
	rupee_50c1.position.set(xval,yval,zval);
	}

}

function rupee_50c2_move(dt){

	xval=rupee_50c2.position.x;
    yval=rupee_50c2.position.y;
    zval=rupee_50c2.position.z;
    rupee_50c2.visible=true;

    if(yval>0){
    yval=yval-(0.01*dt);

	rupee_50c2.position.set(xval,yval,zval);
	}




}



function rupee_10_move(dt){

	xval=rupee_10.position.x;
    yval=rupee_10.position.y;
    zval=rupee_10.position.z;
    rupee_10.visible=true;

    if(yval>-4.5){
    yval=yval-(0.01*dt);
    // xval=xval-(0.004*dt);
	rupee_10.position.set(xval,yval,zval);
	}

	




}

function rupee_10c1_move(dt){

	xval=rupee_10c1.position.x;
    yval=rupee_10c1.position.y;
    zval=rupee_10c1.position.z;
    rupee_10c1.visible=true;

    if(yval>-4){
    yval=yval-(0.01*dt);
    xval=xval+(0.0044*dt);
	rupee_10c1.position.set(xval,yval,zval);
	
	}


}


function rupee_10c2_move(dt){

	xval=rupee_10c2.position.x;
    yval=rupee_10c2.position.y;
    zval=rupee_10c2.position.z;
    rupee_10c2.visible=true;

    if(yval>-6){
    yval=yval-(0.01*dt);
    xval=xval+(0.0041*dt);
	rupee_10c2.position.set(xval,yval,zval);
	
	}


}




function rupee_5_move(dt){

	xval=rupee_5.position.x;
    yval=rupee_5.position.y;
    zval=rupee_5.position.z;
    rupee_5.visible=true;

    if(yval>-4){
    yval=yval-(0.01*dt);
    xval=xval-(0.009*dt);
	rupee_5.position.set(xval,yval,zval);

	}
	



}


function rupee_5c1_move(dt){

	xval=rupee_5c1.position.x;
    yval=rupee_5c1.position.y;
    zval=rupee_5c1.position.z;
    rupee_5c1.visible=true;

    if(yval>-2){
    yval=yval-(0.01*dt);
    xval=xval-(0.012*dt);
	rupee_5c1.position.set(xval,yval,zval);

	}
	



}

function rupee_5c2_move(dt){

	xval=rupee_5c2.position.x;
    yval=rupee_5c2.position.y;
    zval=rupee_5c2.position.z;
    rupee_5c2.visible=true;

    if(yval>0){
    yval=yval-(0.01*dt);
    xval=xval-(0.012*dt);
	rupee_5c2.position.set(xval,yval,zval);

	}
	



}





function rupee_2_move(dt){

	xval=rupee_2.position.x;
    yval=rupee_2.position.y;
    zval=rupee_2.position.z;
    rupee_2.visible=true;

    if(yval>-2){
    yval=yval-(0.01*dt);
    xval=xval-(0.0076*dt);
	rupee_2.position.set(xval,yval,zval);

	}
	



}





function rupee_2c1_move(dt){

	xval=rupee_2c1.position.x;
    yval=rupee_2c1.position.y;
    zval=rupee_2c1.position.z;
    rupee_2c1.visible=true;

    if(yval>-4){
    yval=yval-(0.01*dt);
    xval=xval-(0.006*dt);
	rupee_2c1.position.set(xval,yval,zval);

	}
	



}

function rupee_2c2_move(dt){

	xval=rupee_2c2.position.x;
    yval=rupee_2c2.position.y;
    zval=rupee_2c2.position.z;
    rupee_2c2.visible=true;

    if(yval>0){
    yval=yval-(0.01*dt);
    xval=xval-(0.015*dt);
	rupee_2c2.position.set(xval,yval,zval);

	}
	



}



function rupee_1_move(dt){

	xval=rupee_1.position.x;
    yval=rupee_1.position.y;
    zval=rupee_1.position.z;
    rupee_1.visible=true;

    if(yval>-6){
    yval=yval-(0.01*dt);
    xval=xval-(0.0072*dt);
	rupee_1.position.set(xval,yval,zval);

	}
	



}


function rupee_1c1_move(dt){

	xval=rupee_1c1.position.x;
    yval=rupee_1c1.position.y;
    zval=rupee_1c1.position.z;
    rupee_1c1.visible=true;

    if(yval>-6){
    yval=yval-(0.01*dt);
    xval=xval-(0.005*dt);
	rupee_1c1.position.set(xval,yval,zval);

	}
	



}

function rupee_1c2_move(dt){

	xval=rupee_1c2.position.x;
    yval=rupee_1c2.position.y;
    zval=rupee_1c2.position.z;
    rupee_1c2.visible=true;

    if(yval>-6){
    yval=yval-(0.01*dt);
    xval=xval-(0.0061*dt);
	rupee_1c2.position.set(xval,yval,zval);

	}
}
	














//orbit control config
// function camnotify(){
//     if(orbitcam.enabled){
//         PIEchangeDisplayCheckbox("Camera Control", false);
//         orbitcam.enabled=false;
//     }
//     else{
//         orbitcam.enabled=true;
//         PIEchangeDisplayCheckbox("Camera Control", true);
//     }
// }





function PIEremoveElement(b){
    var a;
    var c;
    PIEscene.remove(b);
    c=false;
    for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--)
        {if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){
            PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true

            }
        }

    }



var ans=0;

function next(){
	// choice=1;




if(nextaccept==1){


    
    if(choice==1){                  
                                    invisible();
                                    planes();
                                    resetting();

                                    text.visible=true;  
                                                                                                        text2.visible=false;
                                                                                                        text3.visible=false;
                                                                                                        text5.visible=false;
                                                                                                        price1.visible=false;
                                                                                                        price2.visible=false;
                                                                                                        price3.visible=false;
                                                                                                        price4.visible=false;
                                                                                                        price5.visible=false;
                                                                                                        price6.visible=false;
                                                                                                        price7.visible=false;
                                                                                                        price8.visible=false;
                                                                                                        text6.visible=false;
                                                                                                        text7.visible=false;
                                                                                                        text8.visible=false;
                                                                                                        text9.visible=false;
                                                                                                        text10.visible=false;
                                                                                                        text11.visible=false;
                                                                                                        text12.visible=false;
                                                                                                        text13.visible=false;
                                                                                                        text14.visible=false;
                                                                                                        text15.visible=false;
                                                                                                        text4.visible=false;

                                    plane10.visible=false;
                                    plane18.visible=false;
                                    // wall.visible=false;
                                    PIErender();
                                    cotton.visible=false;
                                    
                                    PIErender();
                                    cottonprice.visible=false;
                                    PIErender();
                                    cupcake.visible=false;
                                    PIErender();
                                    cupcakeprice.visible=false;
                                    PIErender();
                                    lollipop.visible=false;
                                    PIErender();
                                    lollipopprice.visible=false;
                                    PIErender();
                                    cookie.visible=false;
                                    PIErender();
                                    cookieprice.visible=false;
                                    PIErender();
                                    cake.visible=false;
                                    PIErender();
                                    cakeprice.visible=false;
                                    PIErender();
                                    cone.visible=false;
                                    PIErender();
                                    coneprice.visible=false;
                                    PIErender();
                                    bar.visible=false;
                                    PIErender();
                                    barprice.visible=false;
                                    PIErender();
                                    burger.visible=false;
                                    PIErender();
                                    burgerprice.visible=false;
                                    PIErender();
                                    rupee_200l2.visible=false;
                                    PIErender();
                                    rupee_100l2.visible=false;
                                    PIErender();
                                    rupee_50l2.visible=false;
                                    PIErender();
                                    rupee_10l2.visible=false;
                                    PIErender();
                                    rupee_1l2.visible=false;
                                    PIErender();
                                    rupee_5l2.visible=false;
                                    PIErender();
                                    rupee_500l2.visible=false;
                                    PIErender();
                                    rupee_2l2.visible=false;
                                    PIErender();
                                    keeper.visible=false;
                                    PIErender();
                                    computer.visible=false;
                                    PIErender();

                                    pursechoice=(Math.floor(Math.random()*13)+1);



    }


else if(choice==2){                      
                                    selectl2score();

                                    plane10.visible=true;
                                    plane18.visible=true;
                                    // wall.visible=true;
                                    PIErender();
                                    cotton.visible=true;
                                    
                                    PIErender();
                                    cottonprice.visible=true;
                                    PIErender();
                                    cupcake.visible=true;
                                    PIErender();
                                    cupcakeprice.visible=true;
                                    PIErender();
                                    lollipop.visible=true;
                                    PIErender();
                                    lollipopprice.visible=true;
                                    PIErender();
                                    cookie.visible=true;
                                    PIErender();
                                    cookieprice.visible=true;
                                    PIErender();
                                    cake.visible=true;
                                    PIErender();
                                    cakeprice.visible=true;
                                    PIErender();
                                    cone.visible=true;
                                    PIErender();
                                    coneprice.visible=true;
                                    PIErender();
                                    bar.visible=true;
                                    PIErender();
                                    barprice.visible=true;
                                    PIErender();
                                    burger.visible=true;
                                    PIErender();
                                    burgerprice.visible=true;
                                    PIErender();
                                    rupee_200l2.visible=true;
                                    PIErender();
                                    rupee_100l2.visible=true;
                                    PIErender();
                                    rupee_50l2.visible=true;
                                    PIErender();
                                    rupee_10l2.visible=true;
                                    PIErender();
                                    rupee_1l2.visible=true;
                                    PIErender();
                                    rupee_5l2.visible=true;
                                    PIErender();
                                    rupee_500l2.visible=true;
                                    PIErender();
                                    rupee_2l2.visible=true;
                                    PIErender();
                                    keeper.visible=true;
                                    PIErender();
                                    computer.visible=true;
                                    PIErender();
                                   

                                    

}

// pursechoice=(Math.floor(Math.random()*13)+1);
            
            // PIEstartAnimation();

            // submission=1;
 nextaccept=0;       
}

    

}


function notification()
{

    text2.visible=false;

}
var nextaccept=0;
function answerchecker(){

if(choice==1){

 var submit_answer=PIEgetInputText("Answer");
 if(submit_answer==score)
 {
    text2.visible=false;
    text4.visible=true;
    text14.visible=true;
    PIErender();
    score=0;
    nextaccept=1;
    choice=2;
 }else{
    
    text.visible=false;
    PIErender();
 }
 
}

}





function initialiseControls(){ 

 PIEaddInputCommand("Next",next); 
 PIEaddInputText("Answer","Enter",answerchecker);
 PIEaddInputCommand("Submit",notification);
 PIEaddInputCommand("Learn",learn);
 PIEaddInputCommand("Close Learn", closelearn);
 

}


function initialiseOtherVariables(){
    
}

function resetExperiment(){

choice=1;
nextaccept=1;
hit=0;
firsthit=0;
next();




}

function learn(){
    plane11.visible=true;
    rupee_200l3.visible=true;
    rupee_100l3.visible=true;
    rupee_50l3.visible=true;
    rupee_10l3.visible=true;
    rupee_5l3.visible=true;
    rupee_1l3.visible=true;
    rupee_500l3.visible=true;
    rupee_2l3.visible=true;
    

    // 
    text16.visible=true;
    text17.visible=true;
    text18.visible=true;
    text19.visible=true;
    PIErender();
}

function closelearn(){

     plane11.visible=false;
    rupee_200l3.visible=false;
    rupee_100l3.visible=false;
    rupee_50l3.visible=false;
    rupee_10l3.visible=false;
    rupee_5l3.visible=false;
    rupee_1l3.visible=false;
    rupee_500l3.visible=false;
    rupee_2l3.visible=false;
    

    // 
    text16.visible=false;
    text17.visible=false;
    text18.visible=false;
    text19.visible=false;
    PIErender();
}











//           ---------------------------------------------------------------------------------------------------------------------------------    -------------------------  -->





function PIEremoveElement(b){
    var a;
    var c;
    PIEscene.remove(b);
    c=false;
    for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--)
        {if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){
            PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true

            }
        }

    }


var PIEtableData = [];
var PIEtableRows = [];
var PIEtableNames = [];
var PIEtables = [];
var PIEcurrentTable;
var PIEdraggedTable;
var PIEtableChangeHandlers = [];



function PIEtableDragStart(b) {
    var a;
    var c;
    PIEdraggedTable = b.target;
    a = window.getComputedStyle(PIEdraggedTable, null);
    c = (parseInt(a.getPropertyValue("left")) - b.clientX) + "," + (parseInt(a.getPropertyValue("top")) - b.clientY);
    b.dataTransfer.setData("Text", c);
    b.dataTransfer.dropEffect = "move";
    b.dataTransfer.setData("aTable", c);
    return (false)
}
function PIEtableDrop(a) {
    var b;
    if (PIEdraggedTable != null) {
        b = a.dataTransfer.getData("Text").split(",");
        PIEdraggedTable.style.left = (a.clientX + parseInt(b[0], 10)) + "px";
        PIEdraggedTable.style.top = (a.clientY + parseInt(b[1], 10)) + "px";
        PIEdraggedTable = null;
        a.stopPropagation();
        a.preventDefault();
        return false
    }
}
function PIEtableDragEnter(a) {
    a.preventDefault();
    return (false)
}
function PIEtableDragOver(a) {
    a.preventDefault();
    return (false)
}
function PIEtableSetInputChange(a) {
    var b;
    var d;
    var c;
    PIEtableChangeHandlers[PIEcurrentTable] = a;
    for (b = 0; (b < PIEtableRows[PIEcurrentTable].length); b++) {
        for (d = 0; (d < PIEtableData[PIEcurrentTable][b].length); d++) {
            if ((PIEtableData[PIEcurrentTable][b][d] != null) && (PIEtableData[PIEcurrentTable][b][d].children.length > 0)) {
                c = PIEtableData[PIEcurrentTable][b][d].children[0];
                c.addEventListener("change", PIEtableInputChange, false)
            }
        }
    }
}
function PIEtableInputChange(a) {
    a.preventDefault();
    PIEtableInputHandleEvent(a, PIEtableChangeHandlers);
    return (false)
}
function PIEtableInputHandleEvent(d, g) {
    var f;
    var e;
    var h;
    var c;
    var a;
    var b;
    var i;
    i = false;
    f = d.target;
    for (e = 0; (i == false) && (e < PIEtables.length); e++) {
        for (h = 0; (i == false) && (h < PIEtableRows[e].length); h++) {
            for (c = 0; (i == false) && (c < PIEtableData[e][h].length); c++) {
                if ((PIEtableData[e][h][c] != null) && (f == PIEtableData[e][h][c].children[0])) {
                    i = true
                }
            }
        }
    }
    if (i == true) {
        e--;
        h--;
        c--;
        if (g[e] != null) {
            g[e](h, c, f.value)
        }
    }
}
function PIEtableSelect(c) {
    var a;
    var b;
    PIEcurrentTable = 0;
    for (a = 0; (a < PIEtableNames.length); a++) {
        if (c == PIEtableNames[a]) {
            PIEcurrentTable = a
        }
    }
}
function PIEcreateTable(i, n, g, d) {
    var c;
    var b;
    var m;
    var f;
    var a;
    var h;
    var l;
    var k;
    var j;
    var e;
    PIEtableChangeHandlers.push(null);
    PIEtableNames.push(i);
    PIEtableRows.push(new Array(0));
    PIEtableData.push(new Array(0));
    PIEtableChangeHandlers.push(null);
    PIEcurrentTable = PIEtableNames.length - 1;
    c = document.createElement("div");
    c.draggable = true;
    c.addEventListener("dragstart", PIEtableDragStart, false);
    c.style.border = "2px solid white";
    c.style.borderRadius = "10px";
    c.style.display = "inline-block";
    c.style.position = "absolute";
    c.style.top = "20px";
    c.style.color = "white";
    document.body.appendChild(c);
    b = document.createElement("div");
    b.style.display = "inline-block";
    b.style.width = "100%";
    b.style.padding = "0px";
    c.appendChild(b);
    m = document.createElement("p");
    m.style.display = "inline-block";
    m.style.width = "100%";
    m.style.margin = "auto";
    m.style.border = "2 px solid white";
    m.style.borderRadius = "10px";
    m.style.backgroundColor = "#0020AA";
    b.appendChild(m);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "../PIE/images/TableAdd.png";
    a.alt = "add";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "../PIE/images/TableDelete.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    a = document.createElement("span");
    a.style.padding = "5px";
    a.style.margin = "auto";
    a.style.align = "center";
    a.innerHTML = "<b>" + i + "</b>";
    m.appendChild(a);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    f.style.align = "right";
    f.addEventListener("click", PIEtoggleTable, false);
    m.appendChild(f);
    a = document.createElement("img");
    a.src = "../PIE/images/TableFold.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f.appendChild(a);
    a = document.createElement("div");
    h = document.createElement("table");
    h.style.display = "inline-block";
    h.style.border = "1px solid white";
    h.style.borderRadius = "10px";
    h.style.padding = "0px";
    h.style.backgroundColor = "#0040BB";
    PIEtables.push(h);
    a.appendChild(h);
    c.appendChild(a);
    for (j = 0; j < n; j++) {
        for (e = 0; e < g; e++) {
            if (j == 0) {
                k = PIEcreateTableCell(j, e, d)
            } else {
                k = PIEcreateTableCell(j, e, false)
            }
        }
    }
    PIEupdateTable(PIEtables[PIEcurrentTable])
}
function PIEtoggleTable(e) {
    var g;
    var c;
    var a;
    var h;
    var f;
    var d;
    var b;
    e = e || window.event;
    e.defaultPrevented = true;
    g = null;
    if (e.target) {
        g = e.target
    } else {
        if (e.srcElement) {
            g = e.srcElement
        }
    }
    if (g != null) {
        if (g.nodeType == 3) {
            g = g.parentNode
        }
        a = ((g.parentNode).parentNode).parentNode;
        h = a.children;
        for (d = 0; (d < h.length); d++) {
            f = h[d].children;
            for (b = 0; (b < f.length); b++) {
                if (f[b].nodeName == "TABLE") {
                    c = f[b];
                    if (c.style.display == "inline-block") {
                        c.style.display = "none"
                    } else {
                        c.style.display = "inline-block"
                    }
                }
            }
        }
    }
}
function PIEupdateTable() {
    var c;
    var d;
    var a;
    var b;
    PIEtables[PIEcurrentTable].innerHTML = "";
    for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
        a = PIEtableRows[PIEcurrentTable][c];
        PIEtables[PIEcurrentTable].appendChild(a);
        for (d = 0; (d < PIEtableData[PIEcurrentTable][c].length); d++) {
            b = PIEtableData[PIEcurrentTable][c][d];
            a.appendChild(b)
        }
    }
}
function PIEexpandCell(a) {
    if ((a.target.size + 6) < a.target.value.length) {
        a.target.size = a.target.value.length - 6
    }
}
function PIEcreateInputElement(b, c) {
    var a;
    a = document.createElement("input");
    a.style.color = "#FFFFFF";
    a.style.backgroundColor = "#0060CC";
    a.style.border = "2px solid red";
    if (b >= 7) {
        a.size = (b - 6)
    } else {
        a.size = 1
    }
    a.addEventListener("keyup", PIEexpandCell, false);
    if (PIEtableChangeHandlers[PIEcurrentTable] != null) {
        a.addEventListener("change", PIEtableInputChange, false)
    }
    a.addEventListener("change", PIEtableInputChange, false);
    a.value = c;
    return (a)
}
function PIEsetColumnInput(a, b, e) {
    var d;
    var c;
    for (c = 0; (c < PIEtableRows[PIEcurrentTable].length) && (PIEtableRows[PIEcurrentTable][c] != null); c++) {
        if (PIEtableData[PIEcurrentTable][c].length > a) {
            if (PIEtableData[PIEcurrentTable][c][a] != null) {
                PIEtableData[PIEcurrentTable][c][a].innerHTML = "";
                PIEtableData[PIEcurrentTable][c][a].appendChild(PIEcreateInputElement(b, e))
            }
        }
    }
}
function PIEsetRowInput(e, a, d) {
    var c;
    var b;
    if ((PIEtableRows[PIEcurrentTable].length > e) && (PIEtableRows[PIEcurrentTable][e] != null)) {
        for (b = 0; (b < PIEtableData[PIEcurrentTable][e].length); b++) {
            if (PIEtableData[PIEcurrentTable][e][b] != null) {
                PIEtableData[PIEcurrentTable][e][b].innerHTML = "";
                PIEtableData[PIEcurrentTable][e][b].appendChild(PIEcreateInputElement(a, d))
            }
        }
    }
}
function PIEsetCellInput(e, a, b, d) {
    var c;
    while (PIEtableRows[PIEcurrentTable].length <= e) {
        PIEtableRows[PIEcurrentTable].push(null);
        PIEtableData[PIEcurrentTable].push(new Array(0))
    }
    if (PIEtableRows[PIEcurrentTable][e] == null) {
        PIEtableRows[PIEcurrentTable][e] = document.createElement("tr")
    }
    while (PIEtableData[PIEcurrentTable][e].length <= a) {
        PIEtableData[PIEcurrentTable][e].push(null)
    }
    if (PIEtableData[PIEcurrentTable][e][a] == null) {
        PIEtableData[PIEcurrentTable][e][a] = document.createElement("td")
    }
    PIEtableData[PIEcurrentTable][e][a].innerHTML = "";
    c = PIEcreateInputElement(b, d);
    PIEtableData[PIEcurrentTable][e][a].appendChild(c)
}
function PIEcreateTableCell(c, b, d) {
    var a;
    a = (d == true) ? "th" : "td";
    while (PIEtableRows[PIEcurrentTable].length <= c) {
        PIEtableRows[PIEcurrentTable].push(null);
        PIEtableData[PIEcurrentTable].push(new Array(0))
    }
    if (PIEtableRows[PIEcurrentTable][c] == null) {
        PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
    }
    while (PIEtableData[PIEcurrentTable][c].length <= b) {
        PIEtableData[PIEcurrentTable][c].push(null)
    }
    if (PIEtableData[PIEcurrentTable][c][b] == null) {
        PIEtableData[PIEcurrentTable][c][b] = document.createElement(a)
    } else {
        PIEtableData[PIEcurrentTable][c][b].innerHTML = ""
    }
}
function PIEupdateTableRow(c, a) {
    var b;
    for (b = 0; b < a.length; b++) {
        PIEupdateTableCell(c, b, a[b])
    }
}
function PIEupdateTableColumn(b, a) {
    var c;
    for (c = 0; c < a.length; c++) {
        PIEupdateTableCell(c, b, a[b])
    }
}
function PIEupdateTableCell(c, a, b) {
    while (PIEtableRows[PIEcurrentTable].length <= c) {
        PIEtableRows[PIEcurrentTable].push(null);
        PIEtableData[PIEcurrentTable].push(new Array(0))
    }
    if (PIEtableRows[PIEcurrentTable][c] == null) {
        PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
    }
    while (PIEtableData[PIEcurrentTable][c].length <= a) {
        PIEtableData[PIEcurrentTable][c].push(null)
    }
    if (PIEtableData[PIEcurrentTable][c][a] == null) {
        PIEtableData[PIEcurrentTable][c][a] = document.createElement("td")
    }
    if (PIEtableData[PIEcurrentTable][c][a].children.length == 0) {
        PIEtableData[PIEcurrentTable][c][a].innerHTML = b
    } else {
        PIEtableData[PIEcurrentTable][c][a].children[0].value = b
    }
}
function PIEsetTableRowStyle(d, a, c) {
    var b;
    if (d < PIEtableRows[PIEcurrentTable].length) {
        for (b = 0; (b < PIEtableData[PIEcurrentTable][d].length); b++) {
            PIEsetTableCellStyle(d, b, a, c)
        }
    }
}
function PIEsetTableColumnStyle(a, b, d) {
    var c;
    for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
        if (a < PIEtableData[PIEcurrentTable][c].length) {
            PIEsetTableCellStyle(c, a, b, d)
        }
    }
}
function PIEsetTableCellStyle(d, a, b, c) {
    if (d < PIEtableRows[PIEcurrentTable].length) {
        if (a < PIEtableData[PIEcurrentTable][rowI].length) {
            if (b == "color") {
                PIEtableData[PIEcurrentTable][d][a].style.color = c
            } else {
                if (b == "backgroundColor") {
                    PIEtableData[PIEcurrentTable][d][a].style.backgroundColor = c
                } else {
                    if (b == "margin") {
                        PIEtableData[PIEcurrentTable][d][a].style.margin = c
                    } else {
                        if (b == "padding") {
                            PIEtableData[PIEcurrentTable][d][a].style.padding = c
                        } else {
                            if (b == "border") {
                                PIEtableData[PIEcurrentTable][d][a].style.border = c
                            }
                        }
                    }
                }
            }
        }
    }
}


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>The Money Game</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment is question and answer based activity.It is divided into two Subactivities.</p>";
    helpContent = helpContent + "<p>Subactivity 1: Here student breaks the jar and counts the money fallen from it.Submission of the right amount into the text input leads to  SubActivity 2.</p>";
    helpContent = helpContent + "<p>SubActivity 2: Here the Student has to click the right currency note corresponding to the displayed Question.</p>";
    helpContent = helpContent + "<h3>Setup stage</h3>";


    // helpContent = helpContent + "<p>The objects missed by student are also highlighted.</p>";

    helpContent = helpContent + "<p>The control panel consists of next button.This button enables the student to go to next question.</p>";
    helpContent = helpContent + "<p>This button enables only after completing the current quesstion.</p>";
    helpContent = helpContent + "<p>Also the Learn option teaching the game to the student via an Example.</p>";

    // helpContent = helpContent + "<p></p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment is about identifiying the right amount of currency value and also identifying the currency notes.</p>";
    // infoContent = infoContent + "<h3>Sh</h3>";
    // infoContent = infoContent +  .</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}



