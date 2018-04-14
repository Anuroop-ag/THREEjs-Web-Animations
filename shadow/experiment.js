

var thehammer,cube2;
var orbitcam, clock;
var theball, ballradius, ballmass, ballvelocity;
var thefloor, pole;
var theboundary;
var fric;
var velpanel, font, thevel, heading;
var hitonce, counter;
var x, y, z, theta, x1, z1;
var mew_friction;
var kl = 1;
var xval=-3.5,yval=0.9,zval=2,yvalbox=-4.5,stringy=-2.8,yvalspring=-1.70;
var xval2=1.5,yval2=-3,zval2=2;
var endx=-1,endy=0.6,endz=0;
var v=0,topstring=-1;
var line,line4,line3,line5,line6;
var cube3,fr=1,text4;
var arrowHelperfr,arrowHelperT;
var stars,spring,tension=0;
var length1=1.5,length2=1;
var change=1,ttext,t3,t1,t0,t6,block1;
var t2;
var text2,deletemass2=1;
var invert_mass_checker=1;
var notif;
var conclude1,conclude3,conclude4,conclude2,conclude5,conclude6;
var blue,yellow,red,green;
var redtext;
var geometry; 
var materialFront1;
var materialArray1;
var materialSide1;
var gem;
var gem1=1;
var fbd1,fbd2,nline,nliney;
var cubeMaterial;
var area,texttest,texttest2;
// function test(){
//     PIEstartAnimation();
//     PIEstopAnimation();
// }
//does what it says
var starting;
var plane;
var basic;
var perimeter;
var t0;
var pos=1;
var c=1;
var line;
var score=0;
var result;
var rope;
var tri_1,tri_2,tri_3;
var quad_1,quad_2,quad_3,quad_4;
var pent_1,pent_2,pent_3,pent_4,pent_5;
var hex_1,hex_2,hex_3,hex_4,hex_5,hex_6;
var n;
var ele1,ele2,popup;
var ball;
var topc;
var plane32;
var checkbox1,boxedge1;
var prog1,prog2,prog3,prog4;
var poptick1,poptick2,poptick3,poptick4,poptick5;
var score_display,score_number,q1,q2,l1,l2,info1,info2;
var plane1,plane2,plane3,plane9,plane10,plane4,plane5;
var geometry1,fbd2,geometry2,tick,geometry3,geometry4,fbd5,fbd6,geometry10;
var kl=1;
var shadowsofa;
var choice;
var correct;
var obj1=obj2=obj3=obj4=obj5=obj6=obj7=obj8=obj9=0;
var object1=object2=object3=object4=object5=object6=object7=object8=0;
var hammershadow,hammershadow1,hammerclick;
var gasc=chairc=bedc=lampc=panc=lampc=gasc=clockc=hammerc=0;
var submission=1;
var chairchecker=bedchecker=tablechecker=sofachecker=lampchecker=clockchecker=panchecker=gaschecker=hammerchecker=0;
var finalcheckervar=0;
var clickable=1;
var notclick1,notclick2,notclick3,notclick4,notclick5,notclick6,notclick7,notclick8,notclick9,notclick10;
var correct2;
var bedc1=lampc1=0;
// var texture = new THREE.TextureLoader().load( 'farm.png' );
// texture.wrapS=THREE.RepeatWrapping;
// texture.wrapT=THREE.RepeatWrapping;

// var texture2 = new THREE.TextureLoader().load( 'topgrass.png' );


function textarea(){


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("You are Right", 
                                        {
                                            size: 0.4, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        correct = new THREE.Mesh(textGeom, textMaterial );
                                        correct.position.set(-2,5,0);
                                        
                                        PIEaddElement(correct);
                                        correct.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Click Next!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        correct2 = new THREE.Mesh(textGeom, textMaterial );
                                        correct2.position.set(2,5,0);
                                        
                                        PIEaddElement(correct2);
                                        correct2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot  object 1", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick1 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick1.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick1);
                                        notclick1.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot object 2", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick2 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick2.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick2);
                                        notclick2.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                      var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot object 3", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick3 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick3.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick3);
                                        notclick3.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                      var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot  object 4", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick4 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick4.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick4);
                                        notclick4.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot  object 5", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick5 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick5.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick5);
                                        notclick5.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                        var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot  object 6", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick6 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick6.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick6);
                                        notclick6.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops! You forgot  object 7", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick7 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick7.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick7);
                                        notclick7.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot  object 8", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick8 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick8.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick8);
                                        notclick8.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot  object 9", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick9 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick9.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick9);
                                        notclick9.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Oops!You forgot  object 2 and object 5", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        notclick10 = new THREE.Mesh(textGeom, textMaterial );
                                        notclick10.position.set(-2,5,0);
                                        
                                        PIEaddElement(notclick10);
                                        notclick10.visible=false;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Click on the object to test the shadow here:", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info1 = new THREE.Mesh(textGeom, textMaterial );
                                        info1.position.set(5.5,4,0);
                                        
                                        PIEaddElement(info1);
                                        info1.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Which object has this Shadow:", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-11,3,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Click the Objects that match the displayed shadow and Click Next.", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-12,5,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Question:", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-11,3.5,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 1", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-3.8,1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 2", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-1,1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                      var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 3", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(2.6,1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });
                                     


                                     var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 4", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-3.8,-1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 5", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-1,-1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                      var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 6", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(2.6,-1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });
                                     

                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 4", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-3.8,-1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 5", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-1,-1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 6", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(2.6,-1.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 7", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-3.8,-4.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 8", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(-0.7,-4.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    var materialSide1 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                    var materialArray = [materialSide1 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Object 9", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                                        info2 = new THREE.Mesh(textGeom, textMaterial );
                                        info2.position.set(2.6,-4.7,0);
                                        
                                        PIEaddElement(info2);
                                        info2.visible=true;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });
                                     


}

function initialiseScene(){

PIEhideControlElement();
        textarea();
                                    

                                    geometry10 = new THREE.PlaneGeometry(1,1);
                                    poptick1 = createMesh(geometry10,"tick.png");
                                    poptick1.position.set(-2.75,5.25,0);
                                    // spring.material.color.setHex(0x666666);
                                    poptick1.visible=false;
                                    PIEaddElement(poptick1);

var geometry = new THREE.PlaneGeometry( 5, 0.1, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
plane4 = new THREE.Mesh( geometry, material );
plane4.position.set(-11,3,-4.99);
plane4.receiveShadow=true;
PIEaddElement(plane4);

var geometry = new THREE.PlaneGeometry( 0.1, 6, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
plane5 = new THREE.Mesh( geometry, material );
plane5.position.set(-8.5,0,-4.99);
plane5.receiveShadow=true;
PIEaddElement(plane5);
   

var geometry = new THREE.PlaneGeometry( 0.1, 6, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
plane6 = new THREE.Mesh( geometry, material );
plane6.position.set(-13.5,0,-4.99);
plane6.receiveShadow=true;
PIEaddElement(plane6);
   
var geometry = new THREE.PlaneGeometry( 5, 0.1, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
plane9 = new THREE.Mesh( geometry, material );
plane9.position.set(-11,-3,-4.99);
plane9.receiveShadow=true;
PIEaddElement(plane9);


var geometry = new THREE.PlaneGeometry( 5, 6, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
plane1 = new THREE.Mesh( geometry, material );
plane1.position.set(-11,0,-5);
plane1.receiveShadow=true;
PIEaddElement(plane1);

var geometry = new THREE.PlaneGeometry( 0.1, 18, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
plane2 = new THREE.Mesh( geometry, material );
plane2.position.set(6,0,-5);
plane2.receiveShadow=true;
PIEaddElement(plane2);


var geometry = new THREE.PlaneGeometry( 3.5, 3, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
plane3 = new THREE.Mesh( geometry, material );
plane3.position.set(8.2,2.4,-5);
// plane2.receiveShadow;
PIEaddElement(plane3);




    geometry100 = new THREE.PlaneGeometry(1,1);
    bulbglow = createMesh(geometry100,"bulbglow.png");
    bulbglow.position.set(9,-2.5,5);
    // spring.material.color.setHex(0x666666);
    // shadowsofa.visible=false;
    PIEaddElement(bulbglow);
    PIErender();

    geometry1 = new THREE.PlaneGeometry(2,2);
    shadowsofa = createMesh(geometry1,"shadowsofa.png");
    shadowsofa.position.set(-7.4,0,5);
    // spring.material.color.setHex(0x666666);
   
    PIEaddElement(shadowsofa);
    PIErender();
    shadowsofa.visible=false;


    bedshadow1=createMesh(geometry1,"lampshadow.png");
    bedshadow1.position.set(-7.4,0,5);
    bedshadow1.visible=false;
    PIEaddElement(bedshadow1);


    tableshadow1=createMesh(geometry1,"tableshadow.png");
    tableshadow1.position.set(-7.4,0,5);
    tableshadow1.visible=false;
    PIEaddElement(tableshadow1);
    PIErender();


    chairshadow1=createMesh(geometry1,"chairshadow.png");
    chairshadow1.position.set(-7.4,0,5);
    chairshadow1.visible=false;
    PIEaddElement(chairshadow1);
    PIErender();


    lampshadow1=createMesh(geometry1,"lampshadow.png");
    lampshadow1.position.set(-7.4,0,5);
    lampshadow1.visible=false;
    PIEaddElement(lampshadow1);
    PIErender();


    clockshadow1=createMesh(geometry1,"clockshadow.png");
    clockshadow1.position.set(-7.4,0,5);
    clockshadow1.visible=false;
    PIEaddElement(clockshadow1);
    PIErender();


    panshadow1=createMesh(geometry1,"panshadow.png");
    panshadow1.position.set(-7.4,0,5);
    panshadow1.visible=false;
    PIEaddElement(panshadow1);
    PIErender();

    gasshadow1=createMesh(geometry1,"gasshadow.png");
    gasshadow1.position.set(-7.4,0,5);
    gasshadow1.visible=false;
    PIEaddElement(gasshadow1);
    PIErender();

    hammershadow1=createMesh(geometry1,"hammershadow.png");
    hammershadow1.position.set(-7.4,0,5);
    hammershadow1.visible=false;
    PIEaddElement(hammershadow1);
    PIErender();


    // geometry2 = new THREE.PlaneGeometry(2,2);
    // shadowsofa2 = createMesh(geometry2,"shadowsofa.png");
    // shadowsofa2.position.set(6.5,2,-2);
    // // spring.material.color.setHex(0x666666);
    // // poptick1.visible=false;
    // PIEaddElement(shadowsofa2);
    // PIErender();

    // PIEsetClick(shadowsofa,method);

    geometry1 = new THREE.PlaneGeometry(2,2);
    sofa = createMesh(geometry1,"sofa.png");
    sofa.position.set(-3,0,2);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    // bulboff.castShadow=true;
    PIEaddElement(sofa);

    // PIEdragElement(sofa);
    PIErender();



    bed = createMesh(geometry1,"lampbrown.png");
    bed.position.set(0,3,2);
   
    PIEaddElement(bed);
    PIErender();

    table = createMesh(geometry1,"table.png");
    table.position.set(3,3,2);
    PIEaddElement(table);
    PIErender();

    var geometry=new THREE.BoxGeometry(2,2,1);
    chair = createMesh(geometry1,"chair.png");
    chair.position.set(-3,3,2);
    PIEaddElement(chair);
    PIErender();

    lamp = createMesh(geometry1,"lamp.png");
    lamp.position.set(0,0,2);
    PIEaddElement(lamp);
    PIErender();


    clock = createMesh(geometry1,"clock.png");
    clock.position.set(3,0,2);
    PIEaddElement(clock);
    PIErender();

    pan = createMesh(geometry1,"pan.png");
    pan.position.set(-3,-3,2);
    PIEaddElement(pan);
    PIErender();

    gas = createMesh(geometry1,"gas.png");
    gas.position.set(0,-3,2);
    PIEaddElement(gas);
    PIErender();

    hammer = createMesh(geometry1,"hammer.png");
    hammer.position.set(3,-3,2);
    PIEaddElement(hammer);
    PIErender();



                    // sofa.visible=true;
                    // PIErender();
                    // bed.visible=true;
                    // PIErender();
                    // table.visible=true;
                    // PIErender();
                    // chair.visible=true;
                    // PIErender();
                    // lamp.visible=true;
                    // PIErender();
                    // clock.visible=true;
                    // PIErender();
                    // pan.visible=true;
                    // PIErender();
                    // gas.visible=true;
                    // PIErender();
                    // hammer.visible=true;
                    // PIErender();

    PIEsetClick(sofa,sofaclick);
    PIEsetClick(bed,bedclick);
    PIEsetClick(table,tableclick);
    PIEsetClick(chair,chairclick);
    PIEsetClick(lamp,lampclick);
    PIEsetClick(clock,clockclick);
    PIEsetClick(pan,panclick);
    PIEsetClick(gas,gasclick);
    PIEsetClick(hammer,hammerclick);

    


    geometry2 = new THREE.PlaneGeometry(2,2);
    shadowsofa2 = createMesh(geometry2,"shadowsofa.png");
    shadowsofa2.position.set(7.5,2,-2);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    shadowsofa2.visible=false;
    PIEaddElement(shadowsofa2);
    PIErender();

    // geometry1 = new THREE.PlaneGeometry(2,2);
    sofaclick = createMesh(geometry1,"sofa.png");
    sofaclick.position.set(8,0,2);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    // bulboff.castShadow=true;
    sofaclick.visible=false;
    PIEaddElement(sofaclick);

    PIEdragElement(sofa);
    PIErender();

    bedshadow=createMesh(geometry1,"lampshadow.png");
    bedshadow.position.set(7.5,2,-2);
    bedshadow.visible=false;
    PIEaddElement(bedshadow);
    bedclick = createMesh(geometry1,"lampbrown.png");
    bedclick.position.set(8,0,2);
    bedclick.visible=false;
    PIEaddElement(bedclick);
    PIErender();


    tableshadow=createMesh(geometry1,"tableshadow.png");
    tableshadow.position.set(7.5,2,-2);
    tableshadow.visible=false;
    PIEaddElement(tableshadow);
    tableclick = createMesh(geometry1,"table.png");
    tableclick.position.set(8,0,2);
    tableclick.visible=false;
    PIEaddElement(tableclick);
    PIErender();

    chairshadow=createMesh(geometry1,"chairshadow.png");
    chairshadow.position.set(7.5,2,-2);
    chairshadow.visible=false;
    PIEaddElement(chairshadow);
    chairclick = createMesh(geometry1,"chair.png");
    chairclick.position.set(8,0,2);
    chairclick.visible=false;
    PIEaddElement(chairclick);
    PIErender();


    lampshadow=createMesh(geometry1,"lampshadow.png");
    lampshadow.position.set(7.5,2,-2);
    lampshadow.visible=false;
    PIEaddElement(lampshadow);
    lampclick = createMesh(geometry1,"lamp.png");
    lampclick.position.set(8,0,2);
    lampclick.visible=false;
    PIEaddElement(lampclick);
    PIErender();


    clockshadow=createMesh(geometry1,"clockshadow.png");
    clockshadow.position.set(7.5,2,-2);
    clockshadow.visible=false;
    PIEaddElement(clockshadow);
    clockclick = createMesh(geometry1,"clock.png");
    clockclick.position.set(8,0,2);
    clockclick.visible=false;
    PIEaddElement(clockclick);
    PIErender();


    panshadow=createMesh(geometry1,"panshadow.png");
    panshadow.position.set(7.5,2,-2);
    panshadow.visible=false;
    PIEaddElement(panshadow);
    panclick = createMesh(geometry1,"pan.png");
    panclick.position.set(8,0,2);
    panclick.visible=false;
    PIEaddElement(panclick);
    PIErender();

    gasshadow=createMesh(geometry1,"gasshadow.png");
    gasshadow.position.set(7.5,2,-2);
    gasshadow.visible=false;
    PIEaddElement(gasshadow);
    gasclick = createMesh(geometry1,"gas.png");
    gasclick.position.set(8,0,2);
    gasclick.visible=false;
    PIEaddElement(gasclick);
    PIErender();

    hammershadow=createMesh(geometry1,"hammershadow.png");
    hammershadow.position.set(7.5,2,-2);
    hammershadow.visible=false;
    PIEaddElement(hammershadow);
    hammerclick = createMesh(geometry1,"hammer.png");
    hammerclick.position.set(8,0,2);
    hammerclick.visible=false;
    PIEaddElement(hammerclick);
    PIErender();



   




}
function invisible(){

    gasclick.visible=false;
    gasshadow.visible=false;

    panclick.visible=false;
    panshadow.visible=false;

    lampclick.visible=false;
    lampshadow.visible=false;

    clockclick.visible=false;
    clockshadow.visible=false;

    chairclick.visible=false;
    chairshadow.visible=false;

    tableclick.visible=false;
    tableshadow.visible=false;

    bedshadow.visible=false;
    bedclick.visible=false;

    sofaclick.visible=false;
    shadowsofa2.visible=false;

    hammerclick.visible=false;
    hammershadow.visible=false;

    correct.visible=false;
    correct2.visible=false;
    poptick1.visible=false;



}

function hammerclick(){
    clickable=1;
    invisible();
    hammerc=1;
    hammerclick.visible=true;

    hammershadow.visible=true;
    PIErender();

    finalchecker();

}

function gasclick(){
    clickable=1;

    invisible();
    gasc=1;
    // kl=1;
    // PIEstartAnimation();
    gasclick.visible=true;
    gasshadow.visible=true;
    PIErender();
    finalchecker();
}
function panclick(){
    invisible();
    clickable=1;

    panc=1;
    // kl=1;
    // PIEstartAnimation();
    panclick.visible=true;
    panshadow.visible=true;
    PIErender();
    finalchecker();
}

function clockclick(){
invisible();
clockc=1;
    clickable=1;

// kl=1;
//     PIEstartAnimation();
    clockclick.visible=true;
    clockshadow.visible=true;
    PIErender();
    finalchecker();

}


function chairclick(){
invisible();
 chairc=1;
    clickable=1;

    // kl=1;
    // PIEstartAnimation();
    chairclick.visible=true;
    chairshadow.visible=true;
    PIErender();
    finalchecker();
}

function tableclick(){
invisible();
 tablec=1;
    clickable=1;

 // kl=1;
 //    PIEstartAnimation();
    tableclick.visible=true;
    tableshadow.visible=true;
    PIErender();
    finalchecker();

}
function bedclick(){
invisible();
bedc=1;
bedc1=1;


    correct2.visible=false;


if(lampc1==1 && bedc1==1){
    clickable=1;
    lampc1=0;
    bedc1=0;
}

// kl=1;
//     PIEstartAnimation();
bedshadow.visible=true;
bedclick.visible=true;
PIErender();
finalchecker();

}

function lampclick(){
invisible();
 lampc=1;
 lampc1=1;

    correct2.visible=false;
 // kl=1;
 //    PIEstartAnimation();
 if(lampc1==1 && bedc1==1){
    clickable=1;
    lampc1=0;
    bedc1=0;
}
    lampclick.visible=true;
    lampshadow.visible=true;
    PIErender();
    finalchecker();

}

function sofaclick(){
invisible();
sofac=1;
    clickable=1;

// kl=1;
//     PIEstartAnimation();
    sofaclick.visible=true;
    shadowsofa2.visible=true;

PIErender();
    finalchecker();

// PIEremoveElement(shadowsofa2);

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

    PIEsetExperimentTitle("Shadows");
    PIEsetDeveloperName("Anuroop Gubbala");
 
    initialiseHelp();
    initialiseInfo();
    initialiseControls();
    initialiseScene();

    PIEsetAreaOfInterest(-7, 7, 7, -7);
    // PIEscene.background=new THREE.Color( 0xffa64d );
    PIEscene.background=new THREE.Color(0x232020);

    

           
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

                    // sofa.visible=true;
                    // PIErender();
                    // bed.visible=true;
                    // PIErender();
                    // table.visible=true;
                    // PIErender();
                    // chair.visible=true;
                    // PIErender();
                    // lamp.visible=true;
                    // PIErender();
                    // clock.visible=true;
                    // PIErender();
                    // pan.visible=true;
                    // PIErender();
                    // gas.visible=true;
                    // PIErender();
                    // if(gasc==1){
                    // gasclick.visible=true;
                    // gasshadow.visible=true;
                    // PIErender();
                    // gasc=0;
                    // }

                    // if(panc==1){
                    // panclick.visible=true;
                    // panshadow.visible=true;
                    // panc=0;
                    // PIErender();
                    // }
                    // if(lampc==1){
                    // lampclick.visible=true;
                    // lampshadow.visible=true;
                    // lampc=0;
                    // }
                    // if(clockc==1){
                    // clockclick.visible=true;
                    // clockshadow.visible=true;
                    // clockc=0;
                    // }
                    // if(chairc==1){
                    // chairclick.visible=true;
                    // chairshadow.visible=true;
                    // chairc=0;
                    // PIErender();
                    // }
                    // if(tablec==1){
                    // tableclick.visible=true;
                    // tableshadow.visible=true;
                    // tablec=0;
                    // }
                    // if(bedc==1){
                    // bedshadow.visible=true;
                    // bedclick.visible=true;
                    // bedc==0;
                    // }
                    // if(sofac==1){
                    // sofaclick.visible=true;
                    // shadowsofa2.visible=true;
                    // sofac==0;
                    // }




                    

                        // choice= (Math.floor(Math.random()*8)+1);


     if(choice==1){

            chairshadow1.visible=true;
            // chair.visible=true;

            // sofa.visible=true;
            // bed.visible=true;
            // table.visible=true;
            // chair.visible=true;

            // lamp.visible=false;
            // clock.visible=false;
            // pan.visible=false;
            // gas.visible=false;
            
            obj1=1;

    }else if(choice==2){
            bedshadow1.visible=true;

            // sofa.visible=true;
            // bed.visible=true;
            // table.visible=true;
            // chair.visible=true;
            // lamp.visible=true;
            // clock.visible=true;

            // pan.visible=false;
            // gas.visible=false;

            obj2=1;
    }else if(choice==3){
            tableshadow1.visible=true;

            // sofa.visible=false;
            // bed.visible=true;
            // table.visible=true;
            // chair.visible=true;
            // lamp.visible=false;
            // clock.visible=true;
            // pan.visible=true;
            // gas.visible=true;

            obj3=1;
    }else if(choice==4){
            
            shadowsofa.visible=true;
            // sofa.visible=true;
            // bed.visible=false;
            // table.visible=false;
            // chair.visible=false;
            // lamp.visible=true;
            // clock.visible=true;
            // pan.visible=true;
            // gas.visible=true;
            obj4=1;
    }else if(choice==5){
           
            lampshadow1.visible=true;
            // sofa.visible=true;
            // bed.visible=false;
            // table.visible=false;
            // chair.visible=false;
            // lamp.visible=true;
            // clock.visible=true;
            // pan.visible=true;
            // gas.visible=true;

            obj5=1;
    }else if(choice==6){
            
            clockshadow1.visible=true;
            // sofa.visible=true;
            // bed.visible=false;
            // table.visible=false;
            // chair.visible=false;
            // lamp.visible=true;
            // clock.visible=true;
            // pan.visible=true;
            // gas.visible=true;
            obj6=1;
    }else if(choice==7){
            panshadow1.visible=true;
            // clockshadow1.visible=true;
            // sofa.visible=true;
            // bed.visible=false;
            // table.visible=false;
            // chair.visible=false;
            // lamp.visible=true;
            // clock.visible=true;
            // pan.visible=true;
            // gas.visible=true;
            obj7=1;
    }else if(choice==8){
            gasshadow1.visible=true;
            // clockshadow1.visible=true;
            // sofa.visible=true;
            // bed.visible=false;
            // table.visible=false;
            // chair.visible=false;
            // lamp.visible=true;
            // clock.visible=true;
            // pan.visible=true;
            // gas.visible=true;
            obj8=1;
    }else if(choice==9){

        hammershadow1.visible=true;
        obj9=1;
    }



                //         if(ans==1){
                //         if(choice==1){

                //         if((obj1==object1)&&(obj2==object2)){

                //             correct.visible=true;
                //             poptick1.visible=true;
                //         }else{

                            
                //         }

                //         }else if(choice==2){

                //                 if(obj2==object2){

                //                     }

                //         }else if(choice==3){

                //                 if(obj3==object3){

                //                     }

                //         }else if(choice==4){
                //                 if(obj4==object4){

                //                     }

                //         }else if(choice==5){
                //                 if(obj5==object5){

                //                     }

                //         }else if(choice==6){
                //                 if(obj6==object6){

                //                     }

                //         }else if(choice==7){
                //                 if(obj7==object7){

                //                     }

                //         }else if(choice==8){
                //                 if(obj8==object8){

                                    

                //                     }

                //         }


                //         }

                // }

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

            // submission=1;
            invisible();
            

            // hammershadow1.visible=false;
            // shadowsofa.visible=false;
            // chairshadow1.visible=false;
            // tableshadow1.visible=false;
            // lampshadow1.visible=false;
            // gasshadow1.visible=false;
            // panshadow1.visible=false;
            // clockshadow1.visible=false;
            // bedshadow1.visible=false;
            // correct.visible=false;
            // choice= (Math.floor(Math.random()*9)+1);
            // ans=0;
     

   
        if(clickable==1){

            notclick1.visible=false;
            notclick2.visible=false;
            notclick3.visible=false;
            notclick4.visible=false;
            notclick5.visible=false;
            notclick6.visible=false;
            notclick7.visible=false;
            notclick8.visible=false;
            notclick9.visible=false;
            notclick10.visible=false;


            hammershadow1.visible=false;
            shadowsofa.visible=false;
            chairshadow1.visible=false;
            tableshadow1.visible=false;
            lampshadow1.visible=false;
            gasshadow1.visible=false;
            panshadow1.visible=false;
            clockshadow1.visible=false;
            bedshadow1.visible=false;
            correct.visible=false;
            correct2.visible=false;

            choice= (Math.floor(Math.random()*9)+1);
            // choice=2;
            ans=0;
            kl=1;
            PIEstartAnimation();
            clickable=0;
        
        }else{


            if(choice==1){

                if(chairchecker==1){

                    chairchecker=0;
                }
                else{

                    // chair.visible=false;
                    notclick1.visible=true;
                    chairchecker=1;
                    PIErender();
                }
            }
            else if(choice==2){

                if(bedchecker==1 && lampchecker==1){
                    bedchecker=0;
                    lampchecker=0;
                    PIErender();
                }else if(bedchecker==0 && lampchecker==1){
                    notclick2.visible=true;
                    PIErender();
                    bedchecker=0;
                    lampchecker=1;
                }else if(bedchecker==1 && lampchecker==0){


                    notclick5.visible=true;
                    PIErender();
                    bedchecker=1;
                    lampchecker=0;
                }else if(bedchecker==0 && lampchecker==0)
                {
                    notclick10.visible=true;
                    PIErender();
                    bedchecker=1;
                    lampchecker=1;
                }

                    // if(bedchecker==1){
                    //  notclick5.visible=true;  
                    //  PIErender();
                    //  bedchecker=0; 
                    // }

                    // if(lampchecker==1){
                    //     notclick2.visible=true;
                    //     PIErender();
                    //     lampchecker=0;
                    // }
                    

                //     if(bedchecker==0  && lampchecker==0){
                //      notclick10.visible=true;  
                //      bedchecker=1;
                //      lampchecker=1; 
                //     }
                //      if(bedchecker==0 ){
                //      // notclick2.visible=true;  
                //      bedchecker=1; 
                //     }

                //     if(lampchecker==0){
                //         // notclick5.visible=true;
                //         lampchecker=1;
                //     }

                //     // bed.visible=false;
                //     // lamp.visible=false;
                //     PIErender();
                


            }
            else if(choice==3){

                if(tablechecker==1){
                    tablechecker=0;
                }else{
                    // table.visible=false;
                    notclick3.visible=true;
                    tablechecker=1;
                    PIErender();
                    // lamp.visible=false;
                    PIErender();
                }

            }

            else if(choice==4){

                if(sofachecker==1){
                    sofachecker=0;
                }else{
                    // sofa.visible=false;
                    notclick4.visible=true;
                    sofachecker=1;
                    PIErender();
                    // lamp.visible=false;
                    PIErender();
                }
                
            }

            else if(choice==5){

                if(bedchecker==1 && lampchecker==1){
                    bedchecker=0;
                    lampchecker=0;
                    PIErender();
                }else if(bedchecker==0 && lampchecker==1){
                    notclick2.visible=true;
                    PIErender();
                    bedchecker=0;
                    lampchecker=1;
                }else if(bedchecker==1 && lampchecker==0){


                    notclick5.visible=true;
                    PIErender();
                    bedchecker=1;
                    lampchecker=0;
                }else if(bedchecker==0 && lampchecker==0)
                {
                    notclick10.visible=true;
                    PIErender();
                    bedchecker=1;
                    lampchecker=1;
                }
                    
                //     if(bedchecker==0  && lampchecker==0){
                //      notclick10.visible=true;  
                //      bedchecker=1;
                //      lampchecker=1; 
                //     }

                //     if(bedchecker==0){
                //      // notclick5.visible=true;  
                //      bedchecker=1; 
                //     }

                //     if(lampchecker==0){
                //         // notclick2.visible=true;
                //         lampchecker=1;
                //     }

                //     // bed.visible=false;
                //     // lamp.visible=false;
                //     PIErender();
                
                
            }

            else if(choice==6){

                if(clockchecker==1){
                    clockchecker=0;
                }else{
                    clockchecker=1;
                    // clock.visible=false;
                    notclick6.visible=true;
                    PIErender();
                    // lamp.visible=false;
                    PIErender();
                }
                
            }

            else if(choice==7){

                if(panchecker==1){
                    panchecker=0;
                }else{
                    panchecker=1;
                    // pan.visible=false;
                    notclick7.visible=true;
                    PIErender();
                    // lamp.visible=false;
                    PIErender();
                }
                
            }
            else if(choice==8){

                if(clockchecker==1){
                    clockchecker=0;

                }else{
                    // clock.visible=false;
                    clockshadow=1;
                    notclick8.visible=true;
                    PIErender();
                    // lamp.visible=false;
                    PIErender();
                }
                
            }else if(choice==9){

                if(hammerchecker==1){
                    hammerchecker=0;

                }else{
                    hammerchecker=1;
                    // hammer.visible=false;
                    notclick9.visible=true;
                    PIErender();
                    // lamp.visible=false;
                    PIErender();
                }
            }


        }


    



    // kl=1;
    // PIEstartAnimation();







    //  if(choice==1){

    //         chairshadow1.visible=true;
    //         // chair.visible=true;

    //         sofa.visible=true;
    //         bed.visible=true;
    //         table.visible=true;
    //         chair.visible=true;

    //         lamp.visible=false;
    //         clock.visible=false;
    //         pan.visible=false;
    //         gas.visible=false;
            
    //         obj1=1;

    // }else if(choice==2){
    //         bedshadow1.visible=true;

    //         sofa.visible=true;
    //         bed.visible=true;
    //         table.visible=true;
    //         chair.visible=true;
    //         lamp.visible=true;
    //         clock.visible=true;

    //         pan.visible=false;
    //         gas.visible=false;

    //         obj2=1;
    // }else if(choice==3){
    //         tableshadow1.visible=true;

    //         sofa.visible=false;
    //         bed.visible=true;
    //         table.visible=true;
    //         chair.visible=true;
    //         lamp.visible=false;
    //         clock.visible=true;
    //         pan.visible=true;
    //         gas.visible=true;

    //         obj3=1;
    // }else if(choice==4){
            
    //         shadowsofa.visible=true;
    //         sofa.visible=true;
    //         bed.visible=false;
    //         table.visible=false;
    //         chair.visible=false;
    //         lamp.visible=true;
    //         clock.visible=true;
    //         pan.visible=true;
    //         gas.visible=true;
    //         obj4=1;
    // }else if(choice==5){
           
    //         lampshadow1.visible=true;
    //         sofa.visible=true;
    //         bed.visible=false;
    //         table.visible=false;
    //         chair.visible=false;
    //         lamp.visible=true;
    //         clock.visible=true;
    //         pan.visible=true;
    //         gas.visible=true;

    //         obj5=1;
    // }else if(choice==6){
            
    //         clockshadow1.visible=true;
    //         sofa.visible=true;
    //         bed.visible=false;
    //         table.visible=false;
    //         chair.visible=false;
    //         lamp.visible=true;
    //         clock.visible=true;
    //         pan.visible=true;
    //         gas.visible=true;
    //         obj6=1;
    // }else if(choice==7){
    //         panshadow1.visible=true;
    //         // clockshadow1.visible=true;
    //         sofa.visible=true;
    //         bed.visible=false;
    //         table.visible=false;
    //         chair.visible=false;
    //         lamp.visible=true;
    //         clock.visible=true;
    //         pan.visible=true;
    //         gas.visible=true;
    //         obj7=1;
    // }else if(choice==8){
    //         gasshadow1.visible=true;
    //         // clockshadow1.visible=true;
    //         sofa.visible=true;
    //         bed.visible=false;
    //         table.visible=false;
    //         chair.visible=false;
    //         lamp.visible=true;
    //         clock.visible=true;
    //         pan.visible=true;
    //         gas.visible=true;
    //         obj8=1;
    // }





}


function finalchecker(){

            notclick1.visible=false;
            notclick2.visible=false;
            notclick3.visible=false;
            notclick4.visible=false;
            notclick5.visible=false;
            notclick6.visible=false;
            notclick7.visible=false;
            notclick8.visible=false;
            notclick9.visible=false;
            notclick10.visible=false;


// finalcheckervar=1;
if(choice==1){

    if(chairc==1){
        correct.visible=true;
        correct2.visible=false;

        poptick1.visible=true;

        kl=1;
        PIEstartAnimation();

        chairc=0;
        chairchecker=0;
        PIErender();
    }

}
if(choice==2){


    if(lampc==1 && bedc==1 ){
        correct.visible=true;
        poptick1.visible=true;
        PIErender();

        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        lampc=0;
        bedc=0;
        lampchecker=1;
        bedchecker=1;


    }
    else if(bedc==1 && lampc==0){
        correct.visible=true;
        poptick1.visible=true;
        PIErender();

        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        bedc=0;
        lampc=0;
        bedchecker=1;
        lampchecker=0;

    }
    else if(bedc==0 && lampc==1){

        correct.visible=true;
        poptick1.visible=true;
        PIErender();

        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        bedc=0;
        lampc=0;
        bedchecker=0;
        lampchecker=1;
    }
    else{

        bedchecker=0;
        lampchecker=0;

    }



    // if(bedc==1){
    //     correct.visible=true;
    //     correct2.visible=false;
    //     PIErender();

    //     poptick1.visible=true;
    //     kl=1;
    //     PIEstartAnimation();
    //     bedc=0;
        
    //     bedchecker=0;

    // }

    // if(lampc==1){
    //     correct.visible=true;
    //     correct2.visible=false;

    //     poptick1.visible=true;
    //     kl=1;
    //     PIEstartAnimation();
    //     PIErender();

    //     lampc=0;

    //     lampchecker=0;


    // }

    // if(lampc==0 && bedc==0)
    // {

    //     correct.visible=true;
    //     poptick1.visible=true;
    //     kl=1;
    //     PIEstartAnimation();
    //     bedc=0;
    //     bedchecker=1;
    //     lampc=0;
    //     lampchecker=1;

    // }

}

if(choice==3)
{
    if(tablec==1){

        correct.visible=true;
        poptick1.visible=true;
        PIErender();


        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        tablec=0;
        tablechecker=0;
        // checker=1;


    }
}

if(choice==4){

    if(sofac==1){
        correct.visible=true;
        poptick1.visible=true;
        PIErender();

        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        sofac=0;
        sofachecker=0;


    }
}

if(choice==5){

    if(lampc==1 && bedc==1 ){
        correct.visible=true;
        poptick1.visible=true;
        PIErender();

        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        lampc=0;
        bedc=0;
        lampchecker=1;
        bedchecker=1;


    }
    else if(bedc==1 && lampc==0){
        correct.visible=true;
        poptick1.visible=true;
        PIErender();

        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        bedc=0;
        bedchecker=1;
        lampchecker=0;

    }
    else if(bedc==0 && lampc==1){

        correct.visible=true;
        poptick1.visible=true;
        PIErender();

        correct2.visible=false;
        kl=1;
        PIEstartAnimation();
        bedc=0;
        lampc=0;
        bedchecker=0;
        lampchecker=1;
    }
    else{

        bedchecker=0;
        lampchecker=0;

    }

}

if(choice==6){

    if(clockc==1){

correct.visible=true;
        poptick1.visible=true;
        correct2.visible=false;
        PIErender();

        kl=1;
        PIEstartAnimation();
        clockc=0;
        clockchecker=0;

    }
}

if(choice==7){

    if(panc==1){
correct.visible=true;
        poptick1.visible=true;
        correct2.visible=false;
        PIErender();

        kl=1;
        PIEstartAnimation();
        panc=0;
        panchecker=0;


    }

}

if(choice==8){

    if(gasc==1){

correct.visible=true;
        poptick1.visible=true;
        correct2.visible=false;
        PIErender();

        kl=1;
        PIEstartAnimation();
        gasc=0;
        gaschecker=0;

    }
}

if(choice==9){

    if(hammerc==1){

        correct.visible=true;
        poptick1.visible=true;
        correct2.visible=false;
        PIErender();

        kl=1;
        PIEstartAnimation();
        hammerc=0;
        hammerchecker=0;


    }
}


}


var t1=t2=t3=t4=t5=t6=t7=t8=t9=0;

function notify1(){
if(t1==0){
object1=1;
t1=1;
}else{
    object1=0;
    t1=0;
}


}


function notify2(){
if(t2==0){
object2=1;
t2=1;
}else{
    object2=0;
    t2=0;
}

}

function notify3(){
if(t3==0){
object3=1;
t3=1;
}else{
    object3=0;
    t3=0;
}

}

function notify4(){

if(t4==0){
object4=1;
t4=1;
}else{
    object4=0;
    t4=0;
}



}

function notify5(){
if(t5==0){
object5=1;
t5=1;
}else{
    object5=0;
    t5=0;
}

}

function notify6(){
if(t6==0){
object6=1;
t6=1;
}else{
    object6=0;
    t6=0;
}

}

function notify7(){
if(t7==0){
object7=1;
t7=1;
}else{
    object7=0;

    t7=0;
}

}

function notify8(){
if(t8==0){
object8=1;
t8=1;
}else{
    object8=0;
    t8=0;
}

}

function notify9(){
if(t9==0){
object9=1;
t9=1;

}else{
    object9=0;
    t9=0;
}

}







function notification()
{

    

}

function answerchecker(){

kl=1;
ans=1;
PIEstartAnimation();
// if(choice==1){

//     if(obj1==object1 ){

//             correct.visible=true;
//             poptick1.visible=true;
//             }

// }else if(choice==2){

//         if(obj2==object2){

//             }

// }else if(choice==3){

//         if(obj3==object3){

//             }

// }else if(choice==4){
//         if(obj4==object4){

//             }

// }else if(choice==5){
//         if(obj5==object5){

//             }

// }else if(choice==6){
//         if(obj6==object6){

//             }

// }else if(choice==7){
//         if(obj7==object7){

//             }

// }else if(choice==8){
//         if(obj8==object8){

            

//             }

// }

}


function checker(){

// PIEaddInputCommand("Select the Objects according to your Answer",notification);
if (submission==1){
PIEaddInputCheckbox("object1",false,notify1);

PIEaddInputCheckbox("object2",false,notify2);
PIEaddInputCheckbox("object3",false,notify3);
PIEaddInputCheckbox("object4",false,notify4);
PIEaddInputCheckbox("object5",false,notify5);
PIEaddInputCheckbox("object6",false,notify6);
PIEaddInputCheckbox("object7",false,notify7);
PIEaddInputCheckbox("object8",false,notify8);
PIEaddInputCheckbox("object9",false,notify9);


PIEaddInputCommand("submit",answerchecker);

submission=0;
}


}
function initialiseControls(){ 

 PIEaddInputCommand("Next",next); 
 // PIEaddInputText("Answer",0,notify);  
 // PIEaddInputCommand("Submit Answer",checker);
 // PIEaddDisplayText() 

}


function initialiseOtherVariables(){
    
}

function resetExperiment(){



obj1=0;
obj2=0;
obj3=0;
obj4=0;
obj5=0;
obj6=0;
obj7=0;
obj8=0;
obj9=0;
object1=0;
object2=0;
object3=0;
object4=0;
object5=0;
object6=0;
object7=0;
object8=0;

gasc=0;
chairc=0;
bedc=0;
lampc=0;
panc=0;
lampc=0;
gasc=0;
clockc=0;
hammerc=0;
submission=1;
chairchecker=0;
bedchecker=0;
tablechecker=0;
sofachecker=0;
lampchecker=0;
clockchecker=0;
panchecker=0;
gaschecker=0;
hammerchecker=0;
finalcheckervar=0;
clickable=1;
bedc1=0;
lampc1=0;

invisible();

            notclick1.visible=false;
            notclick2.visible=false;
            notclick3.visible=false;
            notclick4.visible=false;
            notclick5.visible=false;
            notclick6.visible=false;
            notclick7.visible=false;
            notclick8.visible=false;
            notclick9.visible=false;
            notclick10.visible=false;


            hammershadow1.visible=false;
            shadowsofa.visible=false;
            chairshadow1.visible=false;
            tableshadow1.visible=false;
            lampshadow1.visible=false;
            gasshadow1.visible=false;
            panshadow1.visible=false;
            clockshadow1.visible=false;
            bedshadow1.visible=false;
            correct.visible=false;
            correct2.visible=false;



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
    helpContent = helpContent + "<h2>Shadow Identification</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment is question and answer based activity. Student has to click the objects that match the shadow in the question.There is coloe indifference shown and also the student has to select multiple objects for some shadows.Also,The student can check for the shadow for an object on the right side of the activity. </p>";
    helpContent = helpContent + "<p>The objects missed by student are also highlighted.</p>";

    helpContent = helpContent + "<h3>Setup stage</h3>";
helpContent = helpContent + "<p>It contains three sections - question area ,objects area and experimental area.</p>";


    // helpContent = helpContent + "<p>The objects missed by student are also highlighted.</p>";

    helpContent = helpContent + "<p>The control panel consists of next button.This button enables the student to go to next question.</p>";
    helpContent = helpContent + "<p>This button enables only after completing the current quesstion.</p>";
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
    infoContent = infoContent + "<p>The experiment is about finding the right shadows of objects.</p>";
    // infoContent = infoContent + "<h3>Sh</h3>";
    infoContent = infoContent + "<p>The shadows are shown and the student needs to pick the right object.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}



