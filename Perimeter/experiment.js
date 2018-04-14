

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
var hept_1,hept_2,hept_3,hept_4,hept_5,hept_6,hept_7;
var oct_1,oct_2,oct_3,oct_4,oct_5,oct_6,oct_7,oct_8;
var n;
var ele1,ele2,popup;
var ball;
var topc;
var plane32;
var checkbox1,boxedge1;
var prog1,prog2,prog3,prog4;
var poptick1,poptick2,poptick3,poptick4,poptick5;
var score_display,score_number,q1,q2,l1,l2,info1,info2;
var plane1,plane2,plane3,plane9,plane10,plane11;
var geometry1,fbd2,geometry2,tick,geometry3,geometry4,fbd5,fbd6,geometry10;
var kl=1;
var learninfo1,learninfo2,learninfo3,learninfo4,plane20,line30;
var ques1,ques2,ques3,ques4,ques5;
var side1=side2=side3=side4=side5=side6=side7=side8=0;
var texture = new THREE.TextureLoader().load( 'farm.png' );
texture.wrapS=THREE.RepeatWrapping;
texture.wrapT=THREE.RepeatWrapping;
var leave=0,leave2=0;
var nextchecker=0;
var lastanswer;
var texture2 = new THREE.TextureLoader().load( 'topgrass.png' );
function initialiseScene(){
   
    
// b3003b
// var choice3= (Math.floor(Math.random()*10));
    
    // var geometry = new THREE.PlaneBufferGeometry( 8,3, 32 );
    // var material = new THREE.MeshBasicMaterial( {color: 0x00004d, side: THREE.DoubleSide} );
    // topc= new THREE.Mesh( geometry, material );
    // topc.position.set(-10.3,5,1);
    // PIEaddElement( topc );

    var geometry = new THREE.PlaneBufferGeometry( 0.5,0.5, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xa6a6a6, side: THREE.DoubleSide} );
    checkbox1= new THREE.Mesh( geometry, material );
    checkbox1.position.set(-11,1.2,1);
    PIEaddElement( checkbox1 );

    var edges = new THREE.EdgesGeometry( geometry );
    boxedge1 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    boxedge1.position.set(-11,1.2,1)
    PIEaddElement( boxedge1 );

    checkbox2= new THREE.Mesh( geometry, material );
    checkbox2.position.set(-11,0.2,1);
    PIEaddElement( checkbox2 );
    boxedge2 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    boxedge2.position.set(-11,0.2,1)
    PIEaddElement( boxedge2 );

    checkbox3= new THREE.Mesh( geometry, material );
    checkbox3.position.set(-11,-0.8,1);
    PIEaddElement( checkbox3 );
    boxedge3 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    boxedge3.position.set(-11,-0.8,1)
    PIEaddElement( boxedge3);

    checkbox4= new THREE.Mesh( geometry, material );
    checkbox4.position.set(-11,-1.8,1);
    PIEaddElement( checkbox4 );
    boxedge4 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    boxedge4.position.set(-11,-1.8,1)
    PIEaddElement( boxedge4 );

    checkbox5= new THREE.Mesh( geometry, material );
    checkbox5.position.set(-11,-2.8,1);
    PIEaddElement( checkbox5 );
    boxedge5 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    boxedge5.position.set(-11,-2.8,1)
    PIEaddElement( boxedge5 );

    checkbox1.visible=false;
    checkbox2.visible=false;
    checkbox3.visible=false;
    checkbox4.visible=false;
    checkbox5.visible=false;


    boxedge1.visible=false;
    boxedge2.visible=false;
    boxedge3.visible=false;
    boxedge4.visible=false;
    boxedge5.visible=false;


            var materialSide2 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray = [materialSide2 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Question 1", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
                ques1 = new THREE.Mesh(textGeom, textMaterial );
                ques1.position.set(-10.5,1.1,0);
                
                PIEaddElement(ques1);
                ques1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            var materialSide2 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray = [materialSide2 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Question 2", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
                ques2 = new THREE.Mesh(textGeom, textMaterial );
                ques2.position.set(-10.5,0.1,0);
                
                PIEaddElement(ques2);
                ques2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });
             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Question 3", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
                ques3 = new THREE.Mesh(textGeom, textMaterial );
                ques3.position.set(-10.5,-1.1,0);
                
                PIEaddElement(ques3);
                ques3.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });
             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Question 4", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
                ques4 = new THREE.Mesh(textGeom, textMaterial );
                ques4.position.set(-10.5,-2.1,0);
                
                PIEaddElement(ques4);
                ques4.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });
             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Question 5", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
                ques5 = new THREE.Mesh(textGeom, textMaterial );
                ques5.position.set(-10.5,-3.1,0);
                
                PIEaddElement(ques5);
                ques5.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });
    // checkbox6= new THREE.Mesh( geometry, material );
    // checkbox6.position.set(-8,1.2,1);
    // PIEaddElement( checkbox6 );
    // boxedge6 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    // boxedge6.position.set(-8,1.2,1)
    // PIEaddElement( boxedge6 );

    // checkbox7= new THREE.Mesh( geometry, material );
    // checkbox7.position.set(-8,0.2,1);
    // PIEaddElement( checkbox7 );
    // boxedge7 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    // boxedge7.position.set(-8,0.2,1)
    // PIEaddElement( boxedge7);

    // checkbox8= new THREE.Mesh( geometry, material );
    // checkbox8.position.set(-8,-0.8,1);
    // PIEaddElement( checkbox8 );
    // boxedge8 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    // boxedge8.position.set(-8,-0.8,1)
    // PIEaddElement( boxedge8 );

    // checkbox9= new THREE.Mesh( geometry, material );
    // checkbox9.position.set(-8,-1.8,1);
    // PIEaddElement( checkbox9 );
    // boxedge9 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    // boxedge9.position.set(-8,-1.8,1)
    // PIEaddElement( boxedge9 );

    // checkbox9= new THREE.Mesh( geometry, material );
    // checkbox9.position.set(-8,-1.8,1);
    // PIEaddElement( checkbox9 );
    // boxedge9 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    // boxedge9.position.set(-8,-1.8,1)
    // PIEaddElement( boxedge9 );

    // checkbox10= new THREE.Mesh( geometry, material );
    // checkbox10.position.set(-8,-2.8,1);
    // PIEaddElement( checkbox10 );
    // boxedge10 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    // boxedge10.position.set(-8,-2.8,1)
    // PIEaddElement( boxedge10 );



    geometry30 = new THREE.PlaneGeometry(0.5,0.5);
    ctick1 = createMesh(geometry30,"checkboxtick.png");
    ctick1.position.set(-11,1.2,1);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    PIEaddElement(ctick1);

    ctick2 = createMesh(geometry30,"checkboxtick.png");
    ctick2.position.set(-11,0.2,1);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    PIEaddElement(ctick2);

    ctick3 = createMesh(geometry30,"checkboxtick.png");
    ctick3.position.set(-11,-0.8,1);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    PIEaddElement(ctick3);

    ctick4 = createMesh(geometry30,"checkboxtick.png");
    ctick4.position.set(-11,-1.8,1);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    PIEaddElement(ctick4);

    ctick5 = createMesh(geometry30,"checkboxtick.png");
    ctick5.position.set(-11,-2.8,1);
    // spring.material.color.setHex(0x666666);
    // poptick1.visible=false;
    PIEaddElement(ctick5);


    ctick5.visible=false;
    ctick4.visible=false;
    ctick3.visible=false;
    ctick2.visible=false;
    ctick1.visible=false;





    // popup.visible=false;

    var geometry = new THREE.PlaneBufferGeometry( 10.4,3.5, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x336600, side: THREE.DoubleSide} );
    popup2= new THREE.Mesh( geometry, material );
    popup2.position.set(0,-0.7,1.1);
    PIEaddElement( popup2 );
    popup2.visible=false;
    
    var geometry = new THREE.PlaneBufferGeometry( 10.4,5, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    popup= new THREE.Mesh( geometry, material );
    popup.position.set(0,0.2,1);
    PIEaddElement( popup );
    popup.visible=false;


    var geometry = new THREE.PlaneBufferGeometry( 8,0.1, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );


     noprog = new THREE.Mesh( geometry, material );
     noprog.position.set(0,1,2);
    PIEaddElement( noprog );
    noprog.visible=false;

    var geometry = new THREE.PlaneBufferGeometry( 2,0.1, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x2eb82e, side: THREE.DoubleSide} );
    
     prog1 = new THREE.Mesh( geometry, material );
     prog1.position.set(-3,1,2);
    PIEaddElement( prog1 );

    var geometry = new THREE.PlaneBufferGeometry( 2,0.1, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x2eb82e, side: THREE.DoubleSide} );
    
    prog2 = new THREE.Mesh( geometry, material );
    prog2.position.set(-1,1,2);
    PIEaddElement( prog2 );

    prog3 = new THREE.Mesh( geometry, material );
    prog3.position.set(1,1,2);
    PIEaddElement( prog3 );
    

    prog4 = new THREE.Mesh( geometry, material );
    prog4.position.set(3,1,2);
    PIEaddElement( prog4 );
    
    var geometry = new THREE.SphereBufferGeometry( 0.2, 32, 32 );
    var mate = new THREE.MeshBasicMaterial( {color: 0x2eb82e} );
    ball = new THREE.Mesh( geometry, mate );
    ball.position.set(-4,1,2);
    PIEaddElement( ball );
    ball.visible=false;


    // var geometry = new THREE.RingGeometry( 0.2, 0.1, 32 );
    // var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    // var mesh = new THREE.Mesh( geometry, material );
    // mesh.position.set(-4,1,2);
    // PIEaddElement( mesh );

    // var geometry = new THREE.PlaneBufferGeometry( 1,0.1, 32 );
    // var material = new THREE.MeshBasicMaterial( {color: 0x2eb82e, side: THREE.DoubleSide} );
    // prog5 = new THREE.Mesh( geometry, material );
    // prog5.position.set(4.5,1,2);
    // PIEaddElement( prog5);

    geometry2 = new THREE.PlaneGeometry(1,1);
    poptick1 = createMesh(geometry2,"tick.png");
    poptick1.position.set(-4,1.8,2);
    // spring.material.color.setHex(0x666666);
    poptick1.visible=false;
    PIEaddElement(poptick1);

    poptick2 = createMesh(geometry2,"tick.png");
    poptick2.position.set(-2,1.8,2);
    // spring.material.color.setHex(0x666666);
    poptick2.visible=false;
    PIEaddElement(poptick2);

    poptick3 = createMesh(geometry2,"tick.png");
    poptick3.position.set(0,1.8,2);
    // spring.material.color.setHex(0x666666);
    poptick3.visible=false;
    PIEaddElement(poptick3);

    poptick4 = createMesh(geometry2,"tick.png");
    poptick4.position.set(2,1.8,2);
    // spring.material.color.setHex(0x666666);
    poptick4.visible=false;
    PIEaddElement(poptick4);

    poptick5 = createMesh(geometry2,"tick.png");
    poptick5.position.set(4,1.8,2);
    // spring.material.color.setHex(0x666666);
    poptick5.visible=false;
    PIEaddElement(poptick5);

    popwrong1 = createMesh(geometry2,"symbol.png");
    popwrong1.position.set(-4,1.8,2);
    // spring.material.color.setHex(0x666666);
    popwrong1.visible=false;
    PIEaddElement(popwrong1);

    popwrong2 = createMesh(geometry2,"symbol.png");
    popwrong2.position.set(-2,1.8,2);
    // spring.material.color.setHex(0x666666);
    popwrong2.visible=false;
    PIEaddElement(popwrong2);
    

    popwrong3 = createMesh(geometry2,"symbol.png");
    popwrong3.position.set(0,1.8,2);
    // spring.material.color.setHex(0x666666);
    popwrong3.visible=false;
    PIEaddElement(popwrong3);


    popwrong4 = createMesh(geometry2,"symbol.png");
    popwrong4.position.set(2,1.8,2);
    // spring.material.color.setHex(0x666666);
    popwrong4.visible=false;
    PIEaddElement(popwrong4);

    popwrong5 = createMesh(geometry2,"symbol.png");
    popwrong5.position.set(4,1.8,2);
    // spring.material.color.setHex(0x666666);
    popwrong5.visible=false;
    PIEaddElement(popwrong5);

    var materialSide42 = new THREE.MeshBasicMaterial( { color: 0x00802b} );
    var materialArray = [materialSide42 ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
    var textGeom = new THREE.TextGeometry("Awesome!", 
    {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
    });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide42);
                plane32 = new THREE.Mesh(textGeom, textMaterial );
                plane32.position.set(-1.5,0,2);
                
                PIEaddElement(plane32);
                plane32.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
    });
    



    geometry1 = new THREE.PlaneGeometry(4,5);
    fbd2 = createMesh(geometry1,"Farmer.png");
    fbd2.position.set(9.5,-2.7,2);
    // spring.material.color.setHex(0x666666);
    fbd2.visible=true;
    PIEaddElement(fbd2);


    // geometry2 = new THREE.PlaneGeometry(1,1);
    tick = createMesh(geometry2,"tick.png");
    tick.position.set(7.5,3.3,0);
    // spring.material.color.setHex(0x666666);
    tick.visible=false;
    PIEaddElement(tick);

    
    wrong = createMesh(geometry2,"wrong.png");
    wrong.position.set(7.5,3.3,0);
    // spring.material.color.setHex(0x666666);
    wrong.visible=false;
    PIEaddElement(wrong);
    

    geometry3 = new THREE.PlaneGeometry(14.7,13);
    fbd1 = createMesh(geometry3,"wheat.png");
    fbd1.position.set(0.2,0.6,-2);
    // spring.material.color.setHex(0x666666);
    fbd1.visible=false;
    PIEaddElement(fbd1);


 	geometry4 = new THREE.PlaneGeometry(30,2);
    fbd5 = createMesh(geometry4,"land.png");
    fbd5.position.set(0,-6.5,-1);
    // spring.material.color.setHex(0x666666);
    fbd5.visible=true;
    PIEaddElement(fbd5);

    geometry10 = new THREE.PlaneGeometry(12,2);
    fbd6 = createMesh(geometry10,"topgrass.png");
    // fbd6.wrapS=THREE.RepeatWrapping;

    fbd6.position.set(10,-4.75,-1);

    // spring.material.color.setHex(0x666666);
    fbd6.visible=true;
    PIEaddElement(fbd6);
;
    fbd7 = createMesh(geometry10,"topgrass.png");
    fbd7.position.set(0,-4.75,-1);
    // spring.material.color.setHex(0x666666)
    fbd7.visible=true;
    PIEaddElement(fbd7);
    fbd8 = createMesh(geometry10,"topgrass.png");
    fbd8.position.set(-9,-4.75,-1);
    // spring.material.color.setHex(0x666666)
    fbd8.visible=true;
    PIEaddElement(fbd8);


   
    // geometry4 = new THREE.PlaneGeometry(30,2);
    // fbd5 = createMesh(geometry4,"land.png");
    // fbd5.position.set(0,-6.5,-1);
    // // spring.material.color.setHex(0x666666);
    // fbd5.visible=true;
    // PIEaddElement(fbd5);


    // var materialSide20 = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
    //         var materialArray = [materialSide20 ];
    //         var loader = new THREE.FontLoader();

    //          loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
    //             var textGeom = new THREE.TextGeometry("Team Avengers needs YOU!!", 
    //             {
    //                 size: 0.5, height: 0,
    //                 font: font, weight: "normal", style: "normal"
    //             });  
    //         var textMaterial = new THREE.MeshBasicMaterial(materialSide20);
    //             starting = new THREE.Mesh(textGeom, textMaterial );
    //             starting.position.set(-11,-6.4,0);
                
    //             PIEaddElement(starting);
    //             starting.visible=false;
                
    //             // PIEdragElement(textMesh1);
    //             // PIEsetDrag(textMesh1,myMainDrag);
    //             // PIEsetDragEnd(textMesh1,myTwoEnd);
    //             PIErender();
    //         });
    


var geometry = new THREE.PlaneGeometry( 8, 15, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xe8f7ee, side: THREE.DoubleSide} );
plane1 = new THREE.Mesh( geometry, material );
plane1.position.set(11,0,-1);
plane1.visible=false;
PIEaddElement(plane1);

var geometry = new THREE.PlaneGeometry( 8, 15, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xe8f7ee, side: THREE.DoubleSide} );
plane2 = new THREE.Mesh( geometry, material );
plane2.position.set(-10.8,0,-1);
plane2.visible=false;
PIEaddElement(plane2);


// var geometry = new THREE.PlaneGeometry( 25, 3 , 0 );
// var material = new THREE.MeshBasicMaterial( {color: 0x333300, side: THREE.DoubleSide} );
// plane3 = new THREE.Mesh( geometry, material );
// plane3.position.set(0,-7,-1);
// PIEaddElement(plane3);

    // geometry = new THREE.PlaneGeometry(4.5,0.7);
    // yellow=createMesh(geometry,"yellow.png");
    // yellow.position.set(-9.2,5.4,-2);
    // PIEaddElement( yellow );
    

PIErender();

            // var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            // var materialArray = [materialSide ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry("This is Anuroop.", 
            //     {
            //         size: 0.3, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
            //     plane10 = new THREE.Mesh(textGeom, textMaterial );
            //     plane10.position.set(-,3,0);
                
            //     PIEaddElement(plane10);
            //     plane10.visible=true;
                
            //     // PIEdragElement(textMesh1);
            //     // PIEsetDrag(textMesh1,myMainDrag);
            //     // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });

            var materialSide42 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            var materialArray = [materialSide42 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(" ", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide42);
                plane9 = new THREE.Mesh(textGeom, textMaterial );
                plane9.position.set(-6.5,2,0);
                
                PIEaddElement(plane9);
                plane9.visible=true;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



            var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Select \" No. of Sides \" of his Farm to help him!!", 
                {
                    size: 0.4, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                plane = new THREE.Mesh(textGeom, textMaterial );
                plane.position.set(-5.5,0,0);
                
                PIEaddElement(plane);
                plane.visible=true;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSi = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            var materialAr = [materialSi ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(" The Perimeter is calculated as:", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                basic= new THREE.Mesh(textGeom, textMaterial );
                basic.position.set(-12,5,0);
                
                PIEaddElement(basic);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });





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

    PIEsetExperimentTitle("PERIMETER OF IRREGULAR POLYGONS");
    PIEsetDeveloperName("Anuroop Gubbala");
    //PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseControls();
    initialiseScene();



    prog1.visible=false;
    prog2.visible=false;
    prog3.visible=false;
    prog4.visible=false;
  
    PIEsetAreaOfInterest(-7, 7, 7, -7);
    // PIEscene.background=new THREE.Color( 0xffa64d );
    PIEscene.background=new THREE.Color(0x23140F);

            // var materialSi = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            // var materialAr = [materialSi ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry("All values are in meters (m)", 
            //     {
            //         size: 0.2, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSi);
            //     basic= new THREE.Mesh(textGeom, textMaterial );
            //     basic.position.set(-10,5,0);
                
            //     PIEaddElement(basic);
            //     // q2.visible=false;
                
            //     // PIEdragElement(textMesh1);
            //     // PIEsetDrag(textMesh1,myMainDrag);
            //     // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });



            var materialSide6 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            var materialArray = [materialSide6 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Enter the Perimeter of the given boundary!", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide6);
                q1 = new THREE.Mesh(textGeom, textMaterial );
                q1.position.set(-6,-6.4,0);
                
                PIEaddElement(q1);
                q1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSide15 = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            var materialArray = [materialSide15 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("How much rope will be left after laying it around the given boundary?", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide15);
                rope = new THREE.Mesh(textGeom, textMaterial );
                rope.position.set(-11,-6.4,0);
                
                PIEaddElement(rope);
                rope.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialS = new THREE.MeshBasicMaterial( { color: 0x0066ff} );
            var materialA = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Rope Length = 90 ", 
                {
                    size: 0.35, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialS);
                q2 = new THREE.Mesh(textGeom, textMaterial );
                q2.position.set(-11.25,2.4,1);
                
                PIEaddElement(q2);
                q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

             var materialSide2 = new THREE.MeshBasicMaterial( { color: 0x333300} );
            var materialArray2 = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Level 2", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
                l2 = new THREE.Mesh(textGeom, textMaterial );
                l2.position.set(-11.25,3,1);
                
                PIEaddElement(l2);
                l2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            var materialSide1 = new THREE.MeshBasicMaterial( { color: 0x333300} );
            var materialArray1 = [materialSide1 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Level 1", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                l1 = new THREE.Mesh(textGeom, textMaterial );
                l1.position.set(-11.25,3,1);
                
                PIEaddElement(l1);
                l1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



            var materialSide3 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray3 = [materialSide3];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(" ", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide3);
                info1 = new THREE.Mesh(textGeom, textMaterial );
                info1.position.set(-10,1.8,0);
                
                PIEaddElement(info1);
                info1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            var materialSide3 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray3 = [materialSide3];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Level Progress ", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide3);
                info3 = new THREE.Mesh(textGeom, textMaterial );
                info3.position.set(-11.25,1.8,1);
                
                PIEaddElement(info3);
                info3.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            var materialSide4 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray4 = [materialSide4 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Level Progress", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide4);
                info2 = new THREE.Mesh(textGeom, textMaterial );
                info2.position.set(-11.25,1.8,1);
                
                PIEaddElement(info2);
                info2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Your Score:", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                score_display = new THREE.Mesh(textGeom, textMaterial );
                score_display.position.set(8,2.5,0);
                
                PIEaddElement(score_display);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSide21 = new THREE.MeshBasicMaterial( { color: 0x366B0E} );
            var materialArray = [materialSide21 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Click \"No. of Sides\"", 
                {
                    size: 0.3, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                n = new THREE.Mesh(textGeom, textMaterial );
                n.position.set(8,3,0);
                
                PIEaddElement(n);
                // q2.visible=false;
                n.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSide21 = new THREE.MeshBasicMaterial( { color: 0x366B0E} );
            var materialArray = [materialSide21 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("+", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                plus1 = new THREE.Mesh(textGeom, textMaterial );
                plus1.position.set(-10.3,3,3);
                
                PIEaddElement(plus1);
                // q2.visible=false;
                plus1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



              var materialSide21 = new THREE.MeshBasicMaterial( { color: 0x366B0E} );
            var materialArray = [materialSide21 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("+", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                plus2 = new THREE.Mesh(textGeom, textMaterial );
                plus2.position.set(-10.3,2.5,3);
                
                PIEaddElement(plus2);
                // q2.visible=false;
                plus2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("+", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                plus3 = new THREE.Mesh(textGeom, textMaterial );
                plus3.position.set(-10.3,2,3);
                
                PIEaddElement(plus3);
                // q2.visible=false;
                plus3.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("+", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                plus4 = new THREE.Mesh(textGeom, textMaterial );
                plus4.position.set(-10.3,1.5,3);
                
                PIEaddElement(plus4);
                // q2.visible=false;
                plus4.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("+", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                plus5 = new THREE.Mesh(textGeom, textMaterial );
                plus5.position.set(-10.3,1,3);
                
                PIEaddElement(plus5);
                // q2.visible=false;
                plus5.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });
             
             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("+", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                plus6 = new THREE.Mesh(textGeom, textMaterial );
                plus6.position.set(-10.3,0.5,3);
                
                PIEaddElement(plus6);
                // q2.visible=false;
                plus6.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("+", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                plus7 = new THREE.Mesh(textGeom, textMaterial );
                plus7.position.set(-10.3,0,3);
                
                PIEaddElement(plus7);
                // q2.visible=false;
                plus7.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("=", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
                equals = new THREE.Mesh(textGeom, textMaterial );
                equals.position.set(-9.4,2.5,3);
                
                PIEaddElement(equals);
                // q2.visible=false;
                equals.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


    PIErender();

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



               	if(time >= 2 &&kl==1){


                        ball.visible=false;
                        popwrong1.visible=false;
                        popwrong2.visible=false;
                        popwrong3.visible=false;
                        popwrong4.visible=false;
                        popwrong5.visible=false;
                        noprog.visible=false;
                        popup.visible=false;
                        poptick1.visible=false;
                        poptick2.visible=false;
                        poptick3.visible=false;
                        poptick4.visible=false;
                        poptick5.visible=false;
                        prog1.visible=false;
                        prog2.visible=false;
                        prog3.visible=false;
                        prog4.visible=false;


                    PIEstopAnimation();
                    kl=0;
                }else{


                    // noprog.visible=true;
                    // popup.visible=true;

                    movement(dt);

                    


                        if(score==0){

                        //     // ball.position.set(-4,1,2);
                        //     // ball.visible=true;
                        //     popwrong1.visible=false;
                        //     popwrong2.visible=false;
                        //     popwrong3.visible=false;
                        //     popwrong4.visible=false;
                        //     popwrong5.visible=false;

                            checkbox1.visible=false;
                            checkbox2.visible=false;
                            checkbox3.visible=false;
                            checkbox4.visible=false;
                            checkbox5.visible=false;


                            boxedge1.visible=false;
                            boxedge2.visible=false;
                            boxedge3.visible=false;
                            boxedge4.visible=false;
                            boxedge5.visible=false;


                        }
                        // else if(score==1){

                        //     popwrong1.visible=false;
                        //     popwrong2.visible=false;
                        //     popwrong3.visible=false;
                        //     popwrong4.visible=false;
                        //     popwrong5.visible=false;

                        //     poptick1.visible=false;

                        //     // prog1.visible=true;

                        //     ball.position.set(-4,1,2);
                        //     ball.visible=true;
                        // }else if(score==2){

                        //     popwrong1.visible=false;
                        //     popwrong2.visible=false;
                        //     popwrong3.visible=true;
                        //     popwrong4.visible=true;
                        //     popwrong5.visible=true;

                        //     poptick1.visible=true;
                        //     poptick2.visible=true;

                        //     prog1.visible=true;
                        //     // prog2.visible=true;

                        //     ball.position.set(-2,1,2);
                        //     ball.visible=true;

                        // }else if(score==3){

                        //     popwrong1.visible=false;
                        //     popwrong2.visible=false;
                        //     popwrong3.visible=false;
                        //     popwrong4.visible=true;
                        //     popwrong5.visible=true;

                        //     poptick1.visible=true;
                        //     poptick2.visible=true;
                        //     poptick3.visible=true;

                        //     prog1.visible=true;
                        //     prog2.visible=true;
                        //     // prog3.visible=true;

                        //     ball.position.set(0,1,2);
                        //     ball.visible=true;
                            
                        // }else if(score==4){

                        //     popwrong1.visible=false;
                        //     popwrong2.visible=false;
                        //     popwrong3.visible=false;
                        //     popwrong4.visible=false;
                        //     popwrong5.visible=true;

                        //     poptick1.visible=true;
                        //     poptick2.visible=true;
                        //     poptick3.visible=true;
                        //     poptick4.visible=true;

                        //     prog1.visible=true;
                        //     prog2.visible=true;
                        //     prog3.visible=true;
                        //     ball.position.set(2,1,2);
                        //     ball.visible=true;
                            
                        // }else if(score==5){

                        //     popwrong1.visible=false;
                        //     popwrong2.visible=false;
                        //     popwrong3.visible=false;
                        //     popwrong4.visible=false;
                        //     popwrong5.visible=false;

                        //     poptick1.visible=true;
                        //     poptick2.visible=true;
                        //     poptick3.visible=true;
                        //     poptick4.visible=true;
                        //     poptick5.visible=true;

                        //     prog1.visible=true;
                        //     prog2.visible=true;
                        //     prog3.visible=true;
                        //     prog4.visible=true;
                        //     ball.position.set(4,1,2);
                        //     ball.visible=true;
                            
                        // }


                        if(score==1 || score==6){

                            ctick5.visible=false;
                            ctick4.visible=false;
                            ctick3.visible=false;
                            ctick2.visible=false;
                            ctick1.visible=false;

                        }
                        else if(score==2 || score==7 ){
                            ctick5.visible=false;
                            ctick4.visible=false;
                            ctick3.visible=false;
                            ctick2.visible=false;
                            ctick1.visible=false;
                        }else if(score==3|| score==8){

                            ctick5.visible=false;
                            ctick4.visible=false;
                            ctick3.visible=false;
                            ctick2.visible=false;
                            ctick1.visible=false;
                        }else if(score==4 || score==9){
                            ctick5.visible=false;
                            ctick4.visible=false;
                            ctick3.visible=false;
                            ctick2.visible=false;
                            ctick1.visible=false;
                        }
                        else if(score==5 || score==10){
                            ctick5.visible=false;
                            ctick4.visible=false;
                            ctick3.visible=false;
                            ctick2.visible=false;
                            ctick1.visible=false;
                        }
                        else if (score==0){

                            ctick5.visible=false;
                            ctick4.visible=false;
                            ctick3.visible=false;
                            ctick2.visible=false;
                            ctick1.visible=false;
                        }

                        if(score==5)
                            {


                                ctick5.visible=false;
                                ctick4.visible=false;
                                ctick3.visible=false;
                                ctick2.visible=false;
                                ctick1.visible=false;

                            }




                }


                if(kl == 0){

                    





                }

        }

//orbit control config
function camnotify(){
    if(orbitcam.enabled){
        PIEchangeDisplayCheckbox("Camera Control", false);
        orbitcam.enabled=false;
    }
    else{
        orbitcam.enabled=true;
        PIEchangeDisplayCheckbox("Camera Control", true);
    }
}





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



// function LineDashedMaterial( parameters ) {

//         Material.call( this );

//         this.type = 'LineDashedMaterial';

//         this.color = new Color( 0xffffff );

//         this.linewidth = 1;

//         this.scale = 1;
//         this.dashSize = 30;
//         this.gapSize = 10;

//         this.lights = false;

//         this.setValues( parameters );

//     }


function next(){

PIEremoveElement(result);

 if(equals)
    equals.visible=false;

// var material = new THREE.LineDashedMaterial();

// var geometry = new THREE.Geometry();
// geometry.vertices.push(
//     new THREE.Vector3( -7, 0, 0 ),
//     new THREE.Vector3( 0, 7, 0 ),
//     new THREE.Vector3( 7, 0, 0 )
// );

// var line1 = new THREE.Line( geometry, material );
// PIEaddElement( line1 );
// PIEremoveElement(plane);

PIEremoveElement(t0);
PIEremoveElement(tri_1);
PIEremoveElement(tri_2);
PIEremoveElement(tri_3);

PIEremoveElement(quad_1);
PIEremoveElement(quad_2);
PIEremoveElement(quad_3);
PIEremoveElement(quad_4);


PIEremoveElement(pent_1);
PIEremoveElement(pent_2);
PIEremoveElement(pent_3);
PIEremoveElement(pent_4);
PIEremoveElement(pent_5);


PIEremoveElement(hex_1);
PIEremoveElement(hex_2);
PIEremoveElement(hex_3);
PIEremoveElement(hex_4);
PIEremoveElement(hex_5);
PIEremoveElement(hex_6);

PIEremoveElement(hept_1);
PIEremoveElement(hept_2);
PIEremoveElement(hept_3);
PIEremoveElement(hept_4);
PIEremoveElement(hept_5);
PIEremoveElement(hept_6);
PIEremoveElement(hept_7);


PIEremoveElement(oct_1);
PIEremoveElement(oct_2);
PIEremoveElement(oct_3);
PIEremoveElement(oct_4);
PIEremoveElement(oct_5);
PIEremoveElement(oct_6);
PIEremoveElement(oct_7);
PIEremoveElement(oct_8);

PIEremoveElement(score_number);

PIEremoveElement(line);

tick.visible=false;
wrong.visible=false;

    checkbox1.visible=false;
    checkbox2.visible=false;
    checkbox3.visible=false;
    checkbox4.visible=false;
    checkbox5.visible=false;


    boxedge1.visible=false;
    boxedge2.visible=false;
    boxedge3.visible=false;
    boxedge4.visible=false;
    boxedge5.visible=false;

    ques1.visible=false;
    ques2.visible=false;
    ques3.visible=false;
    ques4.visible=false;
    ques5.visible=false;
            


plane9.visible=false;
fbd1.visible=false;
n.visible=false;


if(score==5)
{


    ctick5.visible=false;
    ctick4.visible=false;
    ctick3.visible=false;
    ctick2.visible=false;
    ctick1.visible=false;

}

if(score==10){
    score=0;
    resetExperiment();
}else{



if(score<5){

    l1.visible=false;
    q1.visible=true;
    info1.visible=false;
    info3.visible=false;
    l2.visible=false;
    q2.visible=false;
    info2.visible=false;
    rope.visible=false;


}

if(score>=5){

    l2.visible=false;
    q2.visible=true;
    info2.visible=false;
    rope.visible=true;
    l1.visible=false;
    q1.visible=false;
    info1.visible=false;
    info3.visible=false;
}
            
            var materialSide9 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray = [materialSide9 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(score, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide9);
                score_number = new THREE.Mesh(textGeom, textMaterial );
                score_number.position.set(10,2.5,0);
                
                PIEaddElement(score_number);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



 choice= PIEgetInputSlider("No. of Sides");
 choice=choice-2;

            // var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            // var materialArray = [materialSide ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry(choice, 
            //     {
            //         size: 0.2, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
            //     t0 = new THREE.Mesh(textGeom, textMaterial );
            //     t0.position.set(4,5,0);
                
            //     PIEaddElement(t0);
                
            //     // PIEdragElement(textMesh1);
            //     // PIEsetDrag(textMesh1,myMainDrag);
            //     // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });


    if(choice==3){   PIEremoveElement(plane);   
    
                var x = 0, y = 0;

                var heartShape = new THREE.Shape();
                var choice1= (Math.floor(Math.random()*2)+1);
                var choice2= (Math.floor(Math.random()*2)+1);
                var choice3= (Math.floor(Math.random()*2)+1);
                var choice4= (Math.floor(Math.random()*2)+1);
                var choice5= (Math.floor(Math.random()*2)+1);
                var choice6= (Math.floor(Math.random()*2)+1);
                heartShape.moveTo(choice1,5-choice1);
                heartShape.lineTo(-5,0+choice2);
                heartShape.lineTo(-3,-4+choice4);
                heartShape.lineTo(1,-5+choice5);
                heartShape.lineTo(3+choice1,1+choice6);
                heartShape.lineTo(choice1,5-choice1);
                var geometry = new THREE.ShapeGeometry( heartShape );
                // var texture = new THREE.TextureLoader().load( 'farm.png' );
                // texture.wrapS=THREE.RepeatWrapping;
                // texture.wrapT=THREE.RepeatWrapping;
                var material = new THREE.MeshBasicMaterial( { map: texture } );
                // material.wireframe=true;

                plane = new THREE.Mesh( geometry, material ) ;
                // plane = new createMesh( geometry,".png" ) ;
                // plane.transparent=true;
                // plane.position.z=0;
                PIEaddElement( plane );
                PIErender();
                // kl=1;
                // PIEstartAnimation();
                // PIEstartAnimation();
                // PIEstopAnimation();


                // geometry1 = new THREE.PlaneGeometry(4,5);
                // fbd2 = createMesh(geometry1,"Farmer.png");
                // fbd2.position.set(9.5,-2.7,2);
                // // spring.material.color.setHex(0x666666);
                // fbd2.visible=true;
                // PIEaddElement(fbd2);

                var edges = new THREE.EdgesGeometry( geometry );
                line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                PIEaddElement( line );


                
                
                var choice10= (Math.floor(Math.random()*5)+1);
                 side1=6+choice10;
                 side2=5+choice10;
                 side3=4+choice10;
                 side4=9+choice10;
                 side5=3+choice10;
                perimeter=side1+side2+side3+side4+side5;


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_1 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_1.position.set(((choice1-5)/2),((5-choice1+choice2)/2)+0.5,0);
                                        
                                        PIEaddElement(pent_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_2= new THREE.Mesh(textGeom, textMaterial );
                                        pent_2.position.set(-4.5,((-4+choice4+choice2)/2)-0.5,0);
                                        
                                        PIEaddElement(pent_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_3 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_3.position.set(-1,((-9+choice4+choice5)/2)-0.5,0);
                                        
                                        PIEaddElement(pent_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_4 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_4.position.set((4+choice1)/2 +0.5,((-4+choice5+choice6)/2),0);
                                        
                                        PIEaddElement(pent_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_5 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_5.position.set((3+(2*choice1))/2,((6-choice1+choice6)/2)+0.5,0);
                                        
                                        PIEaddElement(pent_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });
                                    nextchecker=3;
                                    PIEstartAnimation();


            
            // var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            // var materialArray = [materialSide ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry(choice3, 
            //     {
            //         size: 0.2, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
            //     t0 = new THREE.Mesh(textGeom, textMaterial );
            //     t0.position.set(4,5,0);
                
            //     PIEaddElement(t0);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });



            
}else if(choice==1){

            PIEremoveElement(plane);
            
            var choice10= (Math.floor(Math.random()*2)+1);
            


        var x = 0, y = 0;

        var heartShape = new THREE.Shape();
        var choice1= (Math.floor(Math.random()*2)+1);
        var choice2= (Math.floor(Math.random()*2)+1);
        var choice3= (Math.floor(Math.random()*2)+1);
        var choice4= (Math.floor(Math.random()*2)+1);
        var choice5= (Math.floor(Math.random()*2)+1);
        var choice6= (Math.floor(Math.random()*2)+1);
        heartShape.moveTo(-5,-1);
        heartShape.lineTo(1+choice2,-choice3);
        heartShape.lineTo(5-choice1,4-choice6);
        // heartShape.lineTo(0,4-choice1);
        heartShape.lineTo(-5,-1);

        
        var choice10= (Math.floor(Math.random()*5)+1);
        var side1=6+choice10;
        var side2=4+choice10;
        var side3=10+choice10;
        perimeter=side1+side2+side3;

        
            var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(side1, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                tri_1 = new THREE.Mesh(textGeom, textMaterial );
                tri_1.position.set((-4+choice2)/2 -0.2,((-1-choice3)/2)-0.5,0);
                
                PIEaddElement(tri_1);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(side2, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                tri_2 = new THREE.Mesh(textGeom, textMaterial );
                tri_2.position.set((6-choice1+choice2)/2 + 0.2,((4-choice3-choice6)/2)-0.5,0);
                
                PIEaddElement(tri_2);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(side3, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                tri_3 = new THREE.Mesh(textGeom, textMaterial );
                tri_3.position.set(-0.5,((3-choice6)/2)+0.5,0);
                
                PIEaddElement(tri_3);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


        var geometry = new THREE.ShapeGeometry( heartShape );
        // var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
        var material = new THREE.MeshBasicMaterial( { map: texture } );
        plane = new THREE.Mesh( geometry, material ) ;
        PIEaddElement( plane );
        var edges = new THREE.EdgesGeometry( geometry );
        line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
        PIEaddElement( line );


            PIErender();
            nextchecker=1;
            PIEstartAnimation();

             
   

    }else  if(choice==2){
        

                                    PIEremoveElement(plane);
                                    var choice10= (Math.floor(Math.random()*5)+1);

                                    if(c==1){
                                    var x = 0, y = 0;

                                    var heartShape = new THREE.Shape();
                                    var choice1= (Math.floor(Math.random()*2)+1);
                                    var choice2= (Math.floor(Math.random()*2)+1);
                                    var choice3= (Math.floor(Math.random()*2)+1);
                                    var choice4= (Math.floor(Math.random()*2)+1);
                                    var choice5= (Math.floor(Math.random()*2)+1);
                                    var choice6= (Math.floor(Math.random()*2)+1);
                                    heartShape.moveTo(-3,-3);
                                    heartShape.lineTo(1,-choice3);
                                    heartShape.lineTo(5,4-choice6);
                                    heartShape.lineTo(0,4-choice1);
                                    heartShape.lineTo(-3,-3);
                                    
                                    var choice10= (Math.floor(Math.random()*5)+1);
                                    var side1=5+choice10;
                                    var side2=7+choice10;
                                    var side3=5.5+choice10;
                                    var side4=6+choice10;
                                    perimeter=side1+side2+side3+side4;

                                
                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_1 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_1.position.set(-1,((-3-choice3)/2)-0.5,0);
                                        
                                        PIEaddElement(quad_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_2= new THREE.Mesh(textGeom, textMaterial );
                                        quad_2.position.set(3.2,((4-choice3-choice6)/2)-0.5,0);
                                        
                                        PIEaddElement(quad_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_3 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_3.position.set(2.5,((8-choice6-choice1)/2)+0.5,0);
                                        
                                        PIEaddElement(quad_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_4 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_4.position.set(-2,((1-choice1)/2)+1,0);
                                        
                                        PIEaddElement(quad_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });




                                    // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
                                    // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
                                    // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
                                    // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
                                    // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

                                    var geometry = new THREE.ShapeGeometry( heartShape );
                                    // var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
                                    var material = new THREE.MeshBasicMaterial( { map: texture } );
                                    plane = new THREE.Mesh( geometry, material ) ;
                                    PIEaddElement( plane );
                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );

                                    c=-1;

                                }else{
                                    var x = 0, y = 0;

                                    var heartShape = new THREE.Shape();
                                    var choice1= (Math.floor(Math.random()*2)+1);
                                    var choice2= (Math.floor(Math.random()*2)+1);
                                    var choice3= (Math.floor(Math.random()*2)+1);
                                    var choice4= (Math.floor(Math.random()*2)+1);
                                    var choice5= (Math.floor(Math.random()*2)+1);
                                    var choice6= (Math.floor(Math.random()*2)+1);
                                    heartShape.moveTo(3+choice6,3+choice6);
                                    heartShape.lineTo(5,choice5);
                                    heartShape.lineTo(-5,choice3);
                                    heartShape.lineTo(-3-choice1,3+choice4);
                                    heartShape.lineTo(3+choice6,3+choice6);
                                    
                                    var choice10= (Math.floor(Math.random()*5)+1);
                                    var side1=5+choice10;
                                    var side2=8+choice10;
                                    var side3=5.5+choice10;
                                    var side4=7+choice10;
                                
                                    perimeter=side1+side2+side3+side4;
                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_1 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_1.position.set(((8+choice6)/2)+0.2,((3+choice6+choice5)/2),0);
                                        
                                        PIEaddElement(quad_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_2= new THREE.Mesh(textGeom, textMaterial );
                                        quad_2.position.set(0,((choice3+choice5)/2)-0.5,0);
                                        
                                        PIEaddElement(quad_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_3 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_3.position.set(((-8-choice1)/2 )- 0.5,((3+choice4+choice3)/2)+0.5,0);
                                        
                                        PIEaddElement(quad_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_4 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_4.position.set(((choice6-choice1)/2),((6+choice6+choice4)/2)+0.5,0);
                                        
                                        PIEaddElement(quad_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
                                    // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
                                    // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
                                    // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
                                    // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

                                    var geometry = new THREE.ShapeGeometry( heartShape );
                                    // var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
                                    var material = new THREE.MeshBasicMaterial( { map: texture } );
                                    plane = new THREE.Mesh( geometry, material ) ;
                                    PIEaddElement( plane );

                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );
                                    c=1;
                                }


                                    nextchecker=2;
                                    PIEstartAnimation();




    }else if(choice==4) {

                            PIEremoveElement(plane);

                            
                            if(pos==1){
                                var x = 0, y = 0;

                                var heartShape = new THREE.Shape();
                                var choice1= (Math.floor(Math.random()*2)+1);
                                var choice2= (Math.floor(Math.random()*2)+1);
                                var choice3= (Math.floor(Math.random()*2)+1);
                                var choice4= (Math.floor(Math.random()*2)+1);
                                var choice5= (Math.floor(Math.random()*2)+1);
                                var choice6= (Math.floor(Math.random()*2)+1);
                                heartShape.moveTo(choice1,3+choice1);
                                heartShape.lineTo(4,choice3);
                                heartShape.lineTo(choice3,-3-choice6);
                                heartShape.lineTo(0,2-choice1);
                                heartShape.lineTo(-4-choice1,-2-choice3);
                                heartShape.lineTo(-6+choice5,4+choice1);
                                heartShape.lineTo(choice1,3+choice1);


                                var geometry = new THREE.ShapeGeometry( heartShape );
                                // var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
                                var material = new THREE.MeshBasicMaterial( { map: texture } );
                                plane = new THREE.Mesh( geometry, material ) ;
                                PIEaddElement( plane );
                                var edges = new THREE.EdgesGeometry( geometry );
                                line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                PIEaddElement( line );

                                pos=-1;
                            

                                var choice10= (Math.floor(Math.random()*5)+1);
                                var side1=6+choice10;
                                var side2=8+choice10;
                                var side3=7+choice10;
                                var side4=9+choice10;
                                var side5=12+choice10;
                                var side6=10+choice10;
                                perimeter=side1+side2+side3+side4+side5+side6;

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_1 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_1.position.set(((4+choice1)/2)+0.5,((3+choice1+choice3)/2)+0.5,0);
                                        
                                        PIEaddElement(hex_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_2= new THREE.Mesh(textGeom, textMaterial );
                                        hex_2.position.set(((4+choice3)/2)+0.3,((-3-choice6+choice3)/2),0);
                                        
                                        PIEaddElement(hex_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_3 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_3.position.set((choice3)/2-0.5,((-1-choice1-choice6)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_4 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_4.position.set((-4-choice1)/2 +0.2,((-choice3-choice1)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_5 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_5.position.set(((-10-choice1+choice5)/2)-0.5,((2+choice1-choice3)/2),0);
                                        
                                        PIEaddElement(hex_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side6, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_6 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_6.position.set((-6+choice5+choice1)/2  -0.4 ,(7+2*choice1)/2+0.5,0);
                                        
                                        PIEaddElement(hex_6);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });





                            }else{

                                PIEremoveElement(plane);
                                var x = 0, y = 0;

                                var heartShape = new THREE.Shape();
                                var choice1= (Math.floor(Math.random()*2)+1);
                                var choice2= (Math.floor(Math.random()*2)+1);
                                var choice3= (Math.floor(Math.random()*2)+1);
                                var choice4= (Math.floor(Math.random()*2)+1);
                                var choice5= (Math.floor(Math.random()*2)+1);
                                var choice6= (Math.floor(Math.random()*2)+1);
                                heartShape.moveTo(choice1,3+choice1);
                                heartShape.lineTo(1+choice3,choice3);
                                heartShape.lineTo(choice3+4,-2-choice6);
                                heartShape.lineTo(0,2-choice1);
                                heartShape.lineTo(-4-choice1,-2-choice3);
                                heartShape.lineTo(-3-choice5,5-choice1);
                                heartShape.lineTo(choice1,3+choice1);


                                var geometry = new THREE.ShapeGeometry( heartShape );
                                // var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00} );
                                var material = new THREE.MeshBasicMaterial( { map: texture } );
                                plane = new THREE.Mesh( geometry, material ) ;
                                PIEaddElement( plane );

                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );
                                pos=1;



                                var choice10= (Math.floor(Math.random()*5)+1);
                                var side1=6+choice10;
                                var side2=8+choice10;
                                var side3=7+choice10;
                                var side4=9+choice10;
                                var side5=12+choice10;
                                var side6=10+choice10;
                                perimeter=side1+side2+side3+side4+side5+side6;


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_1 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_1.position.set(((2+choice1+choice3)/2),((3+choice1+choice3)/2)+0.5,0);
                                        
                                        PIEaddElement(hex_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_2= new THREE.Mesh(textGeom, textMaterial );
                                        hex_2.position.set(((5+(2*choice3))/2)+0.3,((-2-choice6+choice3)/2),0);
                                        
                                        PIEaddElement(hex_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_3 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_3.position.set((4+choice3)/2,((-choice1-choice6)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_4 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_4.position.set((-4-choice1)/2 +0.2,((-choice3-choice1)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_5 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_5.position.set((-7-choice1-choice5)/2 -0.5,((3-choice1-choice3)/2),0);
                                        
                                        PIEaddElement(hex_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side6, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_6 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_6.position.set((-3-choice5+choice1)/2  ,4.5,0);
                                        
                                        PIEaddElement(hex_6);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


            }

 nextchecker=4;
                                    PIEstartAnimation();





    }else if(choice==5){


                                PIEremoveElement(plane);
                                var x = 0, y = 0;

                                var heartShape = new THREE.Shape();
                                var choice1= (Math.floor(Math.random()*2)+1);
                                var choice2= (Math.floor(Math.random()*2)+1);
                                var choice3= (Math.floor(Math.random()*2)+1);
                                var choice4= (Math.floor(Math.random()*2)+1);
                                var choice5= (Math.floor(Math.random()*2)+1);
                                var choice6= (Math.floor(Math.random()*2)+1);
                                heartShape.moveTo(-2,-2);
                                heartShape.lineTo(2,-2-choice3);
                                heartShape.lineTo(choice1,0);
                                heartShape.lineTo(4+choice1,4+choice4);
                                heartShape.lineTo(0,4+choice3);
                                heartShape.lineTo(-4,2);
                                heartShape.lineTo(-6,-3);
                                heartShape.lineTo(-2,-2);


                                var geometry = new THREE.ShapeGeometry( heartShape );
                                // var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00} );
                                var material = new THREE.MeshBasicMaterial( { map: texture } );
                                plane = new THREE.Mesh( geometry, material ) ;
                                PIEaddElement( plane );

                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );
                                pos=1;



                                var choice10= (Math.floor(Math.random()*2)+1);
                                var side1=4+choice10;
                                var side2=4+choice10;
                                var side3=10+choice10;
                                var side4=7+choice10;
                                var side5=8+choice10;
                                var side6=6+choice10;
                                var side7=5+choice10;
                                perimeter=side1+side2+side3+side4+side5+side6+side7;


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hept_1 = new THREE.Mesh(textGeom, textMaterial );
                                        hept_1.position.set(0,((-4-choice3)/2)-0.5,0);
                                        
                                        PIEaddElement(hept_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hept_2= new THREE.Mesh(textGeom, textMaterial );
                                        hept_2.position.set(((2+(choice1))/2)+0.4,((-2-choice3)/2),0);
                                        
                                        PIEaddElement(hept_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hept_3 = new THREE.Mesh(textGeom, textMaterial );
                                        hept_3.position.set((4+(2*choice1))/2 + 0.4,((4+choice4)/2),0);
                                        
                                        PIEaddElement(hept_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hept_4 = new THREE.Mesh(textGeom, textMaterial );
                                        hept_4.position.set((4+choice1)/2,((8+choice3+choice4)/2)+0.2,0);
                                        
                                        PIEaddElement(hept_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hept_5 = new THREE.Mesh(textGeom, textMaterial );
                                        hept_5.position.set( -2.3,((6+choice3)/2),0);
                                        
                                        PIEaddElement(hept_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side6, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hept_6 = new THREE.Mesh(textGeom, textMaterial );
                                        hept_6.position.set(-5.4 ,-0.5,0);
                                        
                                        PIEaddElement(hept_6);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                        loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side7, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hept_7 = new THREE.Mesh(textGeom, textMaterial );
                                        hept_7.position.set(-4  ,-2.8,0);
                                        
                                        PIEaddElement(hept_7);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                         nextchecker=5;
                                    PIEstartAnimation();


    }else{


                                PIEremoveElement(plane);
                                var x = 0, y = 0;

                                var heartShape = new THREE.Shape();
                                var choice1= (Math.floor(Math.random()*2)+1);
                                var choice2= (Math.floor(Math.random()*2)+1);
                                var choice3= (Math.floor(Math.random()*2)+1);
                                var choice4= (Math.floor(Math.random()*2)+1);
                                var choice5= (Math.floor(Math.random()*2)+1);
                                var choice6= (Math.floor(Math.random()*2)+1);
                                heartShape.moveTo(-2-choice2,-2);
                                heartShape.lineTo(2,-2-choice3);
                                heartShape.lineTo(choice1,0);
                                heartShape.lineTo(4+choice1,4+choice4);
                                heartShape.lineTo(2,4+choice3);
                                heartShape.lineTo(-2-choice5,2);
                                heartShape.lineTo(0,0);
                                heartShape.lineTo(-3,-1);
                                heartShape.lineTo(-2-choice2,-2);



                                var geometry = new THREE.ShapeGeometry( heartShape );
                                // var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00} );
                                var material = new THREE.MeshBasicMaterial( { map: texture } );
                                plane = new THREE.Mesh( geometry, material ) ;
                                PIEaddElement( plane );

                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );
                                pos=1;



                                var choice10= (Math.floor(Math.random()*2)+1);
                                var side1=7+choice10;
                                var side2=6+choice2;
                                var side3=11+choice10;
                                var side4=3+choice10;
                                var side5=9+choice3;
                                var side6=6+choice10;
                                var side7=5+choice10;
                                var side8=0.5+choice1;
                                perimeter=side1+side2+side3+side4+side5+side6+side7+side8;


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_1 = new THREE.Mesh(textGeom, textMaterial );
                                        oct_1.position.set(-choice2/2,((-4-choice3)/2)-0.5,0);
                                        
                                        PIEaddElement(oct_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_2= new THREE.Mesh(textGeom, textMaterial );
                                        oct_2.position.set(((2+(choice1))/2)+0.4,((-2-choice3)/2),0);
                                        
                                        PIEaddElement(oct_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_3 = new THREE.Mesh(textGeom, textMaterial );
                                        oct_3.position.set((4+(2*choice1))/2 + 0.4,((4+choice4)/2),0);
                                        
                                        PIEaddElement(oct_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_4 = new THREE.Mesh(textGeom, textMaterial );
                                        oct_4.position.set((6+choice1)/2,((8+choice3+choice4)/2)+0.2,0);
                                        
                                        PIEaddElement(oct_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_5 = new THREE.Mesh(textGeom, textMaterial );
                                        oct_5.position.set( -choice5/2 -0.4,((6+choice3)/2),0);
                                        
                                        PIEaddElement(oct_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side6, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_6 = new THREE.Mesh(textGeom, textMaterial );
                                        oct_6.position.set((-2-choice5)/2  ,0.5,0);
                                        
                                        PIEaddElement(oct_6);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                        loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side7, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_7 = new THREE.Mesh(textGeom, textMaterial );
                                        oct_7.position.set(-1.5 ,-0.3,0);
                                        
                                        PIEaddElement(oct_7);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side8, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        oct_8 = new THREE.Mesh(textGeom, textMaterial );
                                        oct_8.position.set((-5-choice2)/2 - 0.5,-1.5,0);
                                        
                                        PIEaddElement(oct_8);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     nextchecker=6;
                                    PIEstartAnimation();


    }


}


}

function notify(){



}


function movement(dt){
   



    if(nextchecker==3){
        if(lastanswer)PIEremoveElement(lastanswer);

       
        
        
        plus5.visible=false;
        plus6.visible=false;
        plus7.visible=false;
        // plus8.visible=false;

        if(pent_1){

            if(pent_1.position.x>-10){

                pent_1.position.x=pent_1.position.x-(0.005*dt);
                pent_1.position.z=3;
                
                }

                else if(pent_1.position.y<3.5)
                                        
                {
                    pent_1.position.y=pent_1.position.y+(0.005*dt);

                }else{

                    if(pent_2.position.x>-10)
                    {

                            pent_2.position.x=pent_2.position.x-(0.005*dt);
                            // pent_2.position.y=pent_2.position.y+(0.004*dt);

                            pent_2.position.z=3;
                    }else if(pent_2.position.y<3)
                            {pent_2.position.y=pent_2.position.y+(0.005*dt);


                     }else{
                                
                             plus1.visible=true;
                            if(pent_3.position.x>-10)
                            {

                            pent_3.position.x=pent_3.position.x-(0.005*dt);
                            // pent_3.position.y=pent_3.position.y+(0.002*dt);

                            pent_3.position.z=3;
                            }
                            else if(pent_3.position.y<2.5)
                            {

                                pent_3.position.y=pent_3.position.y+(0.005*dt);

                            }else{
                                
                            plus2.visible=true;
                            if(pent_4.position.x>-10)
                            {pent_4.position.x=pent_4.position.x-(0.005*dt);
                            pent_4.position.z=3;
                            }else if(pent_4.position.y<2)
                            {pent_4.position.y=pent_4.position.y+(0.005*dt);

                            }else {
                                
                                                plus3.visible=true;
                                                if(pent_5.position.x>-10)
                                                {pent_5.position.x=pent_5.position.x-(0.005*dt);
                                                pent_5.position.z=3;
                                                }else if(pent_5.position.y>1.5)
                                                {pent_5.position.y=pent_5.position.y-(0.005*dt);


                                                }else{
  equals.visible=true;
  plus4.visible=true;
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
        











        }



    







                 



    







                }else if(nextchecker==1){
                    if(lastanswer)PIEremoveElement(lastanswer);
        
        plus1.visible=false;
        
        
        plus4.visible=false;
        plus5.visible=false;
        plus6.visible=false;
        plus7.visible=false;
        // plus8.visible=false;
        
        if(tri_1){


            if(tri_1.position.x>-10){

                tri_1.position.x=tri_1.position.x-(0.005*dt);
                tri_1.position.z=3;
                
                }

                else if(tri_1.position.y<3)
                                        
                {
                    tri_1.position.y=tri_1.position.y+(0.005*dt);

                }else{
                    plus2.visible=true;
                    if(tri_2.position.x>-10)
                    {

                            tri_2.position.x=tri_2.position.x-(0.005*dt);
                            // pent_2.position.y=pent_2.position.y+(0.004*dt);

                            tri_2.position.z=3;
                    }else if(tri_2.position.y<2.5)
                            {tri_2.position.y=tri_2.position.y+(0.005*dt);


                     }else{
                                
                            plus3.visible=true;
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
                                
                            
                              equals.visible=true;
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



    







                }else if(nextchecker==2){
                    if(lastanswer)PIEremoveElement(lastanswer);
       plus1.visible=false;
        plus2.visible=false;
        plus3.visible=false;
        plus4.visible=false;
        plus5.visible=false;
        plus6.visible=false;
        plus7.visible=false;
        // plus8.visible=false;
        if(quad_1){

            if(quad_1.position.x>-10){

                quad_1.position.x=quad_1.position.x-(0.005*dt);
                quad_1.position.z=3;
                
                }

                else if(quad_1.position.y<3.5)
                                        
                {
                    quad_1.position.y=quad_1.position.y+(0.005*dt);

                }else{
                     plus1.visible=true;
                    if(quad_2.position.x>-10)
                    {

                            quad_2.position.x=quad_2.position.x-(0.005*dt);
                            // pent_2.position.y=pent_2.position.y+(0.004*dt);

                            quad_2.position.z=3;
                    }else if(quad_2.position.y<3)
                            {quad_2.position.y=quad_2.position.y+(0.005*dt);


                     }else{
                                
                             plus2.visible=true;
                            if(quad_3.position.x>-10)
                            {

                            quad_3.position.x=quad_3.position.x-(0.005*dt);
                            // pent_3.position.y=pent_3.position.y+(0.002*dt);

                            quad_3.position.z=3;
                            }
                            else if(quad_3.position.y<2.5 && leave==0)
                            {

                                quad_3.position.y=quad_3.position.y+(0.005*dt);

                            }else if(quad_3.position.y>2.5)
                            {
                                leave=1;
                                quad_3.position.y=quad_3.position.y-(0.005*dt);

                            }
                            else{
                                
                             plus3.visible=true;
                            if(quad_4.position.x>-10)
                            {quad_4.position.x=quad_4.position.x-(0.005*dt);

                            quad_4.position.z=3;
                            }else if(quad_4.position.y<2 && leave2==0)
                            {quad_4.position.y=quad_4.position.y+(0.005*dt);

                            }else if(quad_4.position.y>2 )
                            {quad_4.position.y=quad_4.position.y-(0.005*dt);
                                leave2=1;
                            }


                            else {
                                
                              equals.visible=true;
                                     
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



    







                 



    







                }if(nextchecker==4){
                    if(lastanswer)PIEremoveElement(lastanswer);
                    plus1.visible=false;
                    plus2.visible=false;
                    plus3.visible=false;
                    plus4.visible=false;
                    plus5.visible=false;
                    plus6.visible=false;
                    plus7.visible=false;

                    // plus8.visible=false;

                    learn=0;
        if(hex_1){

            if(hex_1.position.x>-10){

                hex_1.position.x=hex_1.position.x-(0.005*dt);
                hex_1.position.z=3;
                
                }

                else if(hex_1.position.y>3.5)
                                        
                {
                    hex_1.position.y=hex_1.position.y+(0.005*dt);

                }else{
plus1.visible=true;
                    if(hex_2.position.x>-10)
                    {

                            hex_2.position.x=hex_2.position.x-(0.005*dt);
                            // pent_2.position.y=pent_2.position.y+(0.004*dt);

                            hex_2.position.z=3;
                    }else if(hex_2.position.y<3)
                            {hex_2.position.y=hex_2.position.y+(0.005*dt);


                     }else{
                                
                           plus2.visible=true; 
                            if(hex_3.position.x>-10)
                            {

                            hex_3.position.x=hex_3.position.x-(0.005*dt);
                            // pent_3.position.y=pent_3.position.y+(0.002*dt);

                            hex_3.position.z=3;
                            }
                            else if(hex_3.position.y<2.5)
                            {

                                hex_3.position.y=hex_3.position.y+(0.005*dt);

                            }else{
                                
                           plus3.visible=true; 
                            
                            if(hex_4.position.x>-10)
                            {hex_4.position.x=hex_4.position.x-(0.005*dt);
                            hex_4.position.z=3;
                            }else if(hex_4.position.y<2)
                            {hex_4.position.y=hex_4.position.y+(0.005*dt);

                            }else {
                                
                           plus4.visible=true; 
                            
                                                if(hex_5.position.x>-10)
                                                {hex_5.position.x=hex_5.position.x-(0.005*dt);
                                                hex_5.position.z=3;
                                                }else if(hex_5.position.y>1.5 &&learn==0)
                                                {hex_5.position.y=hex_5.position.y-(0.005*dt);


                                                }else if(hex_5.position.y<1.5)
                                                {hex_5.position.y=hex_5.position.y+(0.005*dt);
                                                    learn=1;

                                                }else{                        





                           plus5.visible=true; 

                                                    if(hex_6.position.x>-10)
                                                {hex_6.position.x=hex_6.position.x-(0.005*dt);
                                                hex_6.position.z=3;
                                                }else if(hex_6.position.y>1)
                                                {hex_6.position.y=hex_6.position.y-(0.005*dt);


                                                }else{

                                                                                                              equals.visible=true;
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


            }
        











        }



    







                 



    







                }else if(nextchecker==5){
if(lastanswer)PIEremoveElement(lastanswer);
                    plus1.visible=false;
                    plus2.visible=false;
                    plus3.visible=false;
                    plus4.visible=false;
                    plus5.visible=false;
                    plus6.visible=false;
                    plus7.visible=false;
                    // plus8.visible=false;

                    learn=0;
        if(hept_1){

            if(hept_1.position.x>-10){

                hept_1.position.x=hept_1.position.x-(0.005*dt);
                hept_1.position.z=3;
                
                }

                else if(hept_1.position.y<3.5)
                                        
                {
                    hept_1.position.y=hept_1.position.y+(0.005*dt);

                }else{
plus1.visible=true;
                    if(hept_2.position.x>-10)
                    {

                            hept_2.position.x=hept_2.position.x-(0.005*dt);
                            // pent_2.position.y=pent_2.position.y+(0.004*dt);

                            hept_2.position.z=3;
                    }else if(hept_2.position.y<3)
                            {hept_2.position.y=hept_2.position.y+(0.005*dt);


                     }else{
                                
               plus2.visible=true;             
                            if(hept_3.position.x>-10)
                            {

                            hept_3.position.x=hept_3.position.x-(0.005*dt);
                            // pent_3.position.y=pent_3.position.y+(0.002*dt);

                            hept_3.position.z=3;
                            }
                            else if(hept_3.position.y>2.5)
                            {

                                hept_3.position.y=hept_3.position.y-(0.005*dt);

                            }else{
                                
             plus3.visible=true;               
                            if(hept_4.position.x>-10)
                            {hept_4.position.x=hept_4.position.x-(0.005*dt);
                            hept_4.position.z=3;
                            }else if(hept_4.position.y>2)
                            {hept_4.position.y=hept_4.position.y-(0.005*dt);

                            }else {
                                
                  plus4.visible=true;          
                                                if(hept_5.position.x>-10)
                                                {hept_5.position.x=hept_5.position.x-(0.005*dt);
                                                hept_5.position.z=3;
                                                }else if(hept_5.position.y>1.5 &&learn==0)
                                                {hept_5.position.y=hept_5.position.y-(0.005*dt);


                                                }else if(hept_5.position.y<1.5)
                                                {hept_5.position.y=hept_5.position.y+(0.005*dt);
                                                    learn=1;

                                                }else{                        





plus5.visible=true;
                                                    if(hept_6.position.x>-10)
                                                {hept_6.position.x=hept_6.position.x-(0.005*dt);
                                                hept_6.position.z=3;
                                                }else if(hept_6.position.y<1)
                                                {hept_6.position.y=hept_6.position.y+(0.005*dt);


                                                }else{
plus6.visible=true;
                                                    if(hept_7.position.x>-10)
                                                {hept_7.position.x=hept_7.position.x-(0.005*dt);
                                                hept_7.position.z=3;
                                                }else if(hept_7.position.y<0.5)
                                                {hept_7.position.y=hept_7.position.y+(0.005*dt);


                                                }else{

                                                                                                             equals.visible=true;
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

            

            }


            }
        











        }



    







                 



    







                }else if(nextchecker==6){
                    if(lastanswer)PIEremoveElement(lastanswer);
                    plus1.visible=false;
                    plus2.visible=false;
                    plus3.visible=false;
                    plus4.visible=false;
                    plus5.visible=false;
                    plus6.visible=false;
                    plus7.visible=false;
                    // plus8.visible=false;

                    learn=0;
        if(oct_1){

            if(oct_1.position.x>-10){

                oct_1.position.x=oct_1.position.x-(0.005*dt);
                oct_1.position.z=3;
                
                }

                else if(oct_1.position.y<3.5)
                                        
                {
                    oct_1.position.y=oct_1.position.y+(0.005*dt);

                }else{

              plus1.visible=true;
                    if(oct_2.position.x>-10)
                    {

                            oct_2.position.x=oct_2.position.x-(0.005*dt);
                            // pent_2.position.y=pent_2.position.y+(0.004*dt);

                            oct_2.position.z=3;
                    }else if(oct_2.position.y<3)
                            {oct_2.position.y=oct_2.position.y+(0.005*dt);


                     }else{
                                
              plus2.visible=true;                  
                            if(oct_3.position.x>-10)
                            {

                            oct_3.position.x=oct_3.position.x-(0.005*dt);
                            // pent_3.position.y=pent_3.position.y+(0.002*dt);

                            oct_3.position.z=3;
                            }
                            else if(oct_3.position.y>2.5)
                            {

                                oct_3.position.y=oct_3.position.y-(0.005*dt);

                            }else{
                                
                plus3.visible=true;            
                            if(oct_4.position.x>-10)
                            {oct_4.position.x=oct_4.position.x-(0.005*dt);
                            oct_4.position.z=3;
                            }else if(oct_4.position.y>2)
                            {oct_4.position.y=oct_4.position.y-(0.005*dt);

                            }else {
                                
                      plus4.visible=true;      
                                                if(oct_5.position.x>-10)
                                                {oct_5.position.x=oct_5.position.x-(0.005*dt);
                                                oct_5.position.z=3;
                                                }else if(oct_5.position.y>1.5)
                                                {oct_5.position.y=oct_5.position.y-(0.005*dt);


                                                }else{                        





                      plus5.visible=true;      

                                                    if(oct_6.position.x>-10)
                                                {oct_6.position.x=oct_6.position.x-(0.005*dt);
                                                oct_6.position.z=3;
                                                }else if(oct_6.position.y<1)
                                                {oct_6.position.y=oct_6.position.y+(0.005*dt);


                                                }else{
                      plus6.visible=true;      

                                                    if(oct_7.position.x>-10)
                                                {oct_7.position.x=oct_7.position.x-(0.005*dt);
                                                oct_7.position.z=3;
                                                }else if(oct_7.position.y<0.5)
                                                {oct_7.position.y=oct_7.position.y+(0.005*dt);


                                                }else{


                      plus7.visible=true;      

                                                    if(oct_8.position.x>-10)
                                                {oct_8.position.x=oct_8.position.x-(0.005*dt);
                                                oct_8.position.z=3;
                                                }else if(oct_8.position.y<0)
                                                {oct_8.position.y=oct_8.position.y+(0.005*dt);


                                                }else{                                                      equals.visible=true;

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





                    }                       

            

            }


            }
        











        }



    







                 



    







                }








}


// function movement(dt){



//     if(nextchecker==1){

//                     if(choice==3){

//                         if(pent_1){
                                        
//                                         if(pent_1.position.x>-10)
//                                         {pent_1.position.x=pent_1.position.x-(0.005*dt);
//                                         pent_1.position.z=3;
//                                         }else if(pent_1.position.y<3.5)
//                                         {pent_1.position.y=pent_1.position.y+(0.005*dt);


//                                         }

//                             else
//                             {
//                                 if(pent_2.position.x>-10)
//                             {

//                             pent_2.position.x=pent_2.position.x-(0.005*dt);
//                             // pent_2.position.y=pent_2.position.y+(0.004*dt);

//                             pent_2.position.z=3;
//                             }else if(pent_2.position.y<3)
//                             {pent_2.position.y=pent_2.position.y+(0.005*dt);


//                             }
                            

//                                   else{
                                
                            
//                             if(pent_3.position.x>-10)
//                             {

//                             pent_3.position.x=pent_3.position.x-(0.005*dt);
//                             // pent_3.position.y=pent_3.position.y+(0.002*dt);

//                             pent_3.position.z=3;
//                             }
//                             else if(pent_3.position.y<2.5)
//                             {pent_3.position.y=pent_3.position.y+(0.005*dt);


//                             }
//                                 else
//                                 {
                                
                            
//                             if(pent_4.position.x>-10)
//                             {pent_4.position.x=pent_4.position.x-(0.005*dt);
//                             pent_4.position.z=3;
//                             }else if(pent_4.position.y<2)
//                             {pent_4.position.y=pent_4.position.y+(0.005*dt);

//                             }

//                                 else {
                                
                            
//                                                 if(pent_5.position.x>-10)
//                                                 {pent_5.position.x=pent_5.position.x-(0.005*dt);
//                                                 pent_5.position.z=3;
//                                                 }else if(pent_5.position.y>1.5)
//                                                 {pent_5.position.y=pent_5.position.y-(0.005*dt);


//                                                 }
//                                                 else{

//                                                                                                             if(lastanswer)PIEremoveElement(lastanswer);
//                                                                                                             var materialSide21 = new THREE.MeshBasicMaterial( { color: 0x366B0E} );
//                                                                                                             var materialArray = [materialSide21 ];
//                                                                                                             var loader = new THREE.FontLoader();

//                                                                                                              loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                                                
//                                                                                                                 var textGeom = new THREE.TextGeometry(perimeter+"m", 
//                                                                                                                 {
//                                                                                                                     size: 0.2, height: 0,
//                                                                                                                     font: font, weight: "normal", style: "normal"
//                                                                                                                 });  
//                                                                                                             var textMaterial = new THREE.MeshBasicMaterial(materialSide21);
//                                                                                                                 lastanswer = new THREE.Mesh(textGeom, textMaterial );
//                                                                                                                 lastanswer.position.set(-9,2.5,3);
                                                                                                                
//                                                                                                                 PIEaddElement(lastanswer);
//                                                                                                                 // q2.visible=false;
//                                                                                                                 lastanswer.visible=true;
                                                                                                                
//                                                                                                                 // PIEdragElement(textMesh1);
//                                                                                                                 // PIEsetDrag(textMesh1,myMainDrag);
//                                                                                                                 // PIEsetDragEnd(textMesh1,myTwoEnd);
//                                                                                                                 PIErender();
//                                                                                                             });
//                                                                                                             PIEstopAnimation();
//                                                 }

//                                     }

//                                 }

                    

//                         }




//                        }
            


//             }




//                     }




//                 }

// }

function notification()
{

    // noprog.visible=true;
    // popup.visible=true;

    // if(score==0){

    //     // ball.position.set(-4,1,2);
    //     // ball.visible=true;
    //     popwrong1.visible=true;
    //     popwrong2.visible=true;
    //     popwrong3.visible=true;
    //     popwrong4.visible=true;
    //     popwrong5.visible=true;

    // }
    // else if(score==1){

    //     popwrong1.visible=false;
    //     popwrong2.visible=true;
    //     popwrong3.visible=true;
    //     popwrong4.visible=true;
    //     popwrong5.visible=true;

    //     poptick1.visible=true;

    //     // prog1.visible=true;

    //     ball.position.set(-4,1,2);
    //     ball.visible=true;
    // }else if(score==2){

    //     popwrong1.visible=false;
    //     popwrong2.visible=false;
    //     popwrong3.visible=true;
    //     popwrong4.visible=true;
    //     popwrong5.visible=true;

    //     poptick1.visible=true;
    //     // poptick2.visible=true;

    //     prog1.visible=true;
    //     // prog2.visible=true;

    //     ball.position.set(-2,1,2);
    //     ball.visible=true;

    // }else if(score==3){

    //     popwrong1.visible=false;
    //     popwrong2.visible=false;
    //     popwrong3.visible=false;
    //     popwrong4.visible=true;
    //     popwrong5.visible=true;

    //     poptick1.visible=true;
    //     poptick2.visible=true;
    //     poptick3.visible=true;

    //     prog1.visible=true;
    //     prog2.visible=true;
    //     // prog3.visible=true;

    //     ball.position.set(0,1,2);
    //     ball.visible=true;
        
    // }else if(score==4){

    //     popwrong1.visible=false;
    //     popwrong2.visible=false;
    //     popwrong3.visible=false;
    //     popwrong4.visible=false;
    //     popwrong5.visible=true;

    //     poptick1.visible=true;
    //     poptick2.visible=true;
    //     poptick3.visible=true;
    //     poptick4.visible=true;

    //     prog1.visible=true;
    //     prog2.visible=true;
    //     prog3.visible=true;
    //     ball.position.set(2,1,2);
    //     ball.visible=true;
        
    // }else if(score==5){

    //     popwrong1.visible=false;
    //     popwrong2.visible=false;
    //     popwrong3.visible=false;
    //     popwrong4.visible=false;
    //     popwrong5.visible=false;

    //     poptick1.visible=true;
    //     poptick2.visible=true;
    //     poptick3.visible=true;
    //     poptick4.visible=true;
    //     poptick5.visible=true;

    //     prog1.visible=true;
    //     prog2.visible=true;
    //     prog3.visible=true;
    //     prog4.visible=true;
    //     ball.position.set(4,1,2);
    //     ball.visible=true;
        
    // }




}



function checker(){






wrong.visible=false;
tick.visible=false;
PIEremoveElement(score_number);

            var materialSide10 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray10 = [materialSide10 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(score, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide10);
                score_number = new THREE.Mesh(textGeom, textMaterial );
                score_number.position.set(10,2.5,0);
                
                PIEaddElement(score_number);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



 var eval=PIEgetInputText("Answer");
if(score>=5){
    perimeter=90-perimeter;
}


 if(eval==perimeter)
 {                                  
                                    score=score+1;

                                    if(score==10){
                                    
                                    PIEremoveElement(result);
                                    var materialSide8 = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide8 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("You Win", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide8);
                                        result = new THREE.Mesh(textGeom, textMaterial );
                                        result.position.set(8,3.5,0);
                                        
                                        PIEaddElement(result);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();

                                        
                                    });

                                     

                                     n.visible=true;


}else if(score==4){                 tick.visible=true;
                                    PIEremoveElement(result);
                                    var materialSide11 = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide11 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("You Are Good At This", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide11);
                                        result = new THREE.Mesh(textGeom, textMaterial );
                                        result.position.set(8,0,0);
                                        
                                        PIEaddElement(result);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     n.visible=true;


}else{

                                    tick.visible=true;
                                    PIEremoveElement(result);
                                    var materialSide11 = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide11 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Good Going Mate!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide11);
                                        result = new THREE.Mesh(textGeom, textMaterial );
                                        result.position.set(8,0,0);
                                        
                                        PIEaddElement(result);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     n.visible=true;

}
 

 }else{                             


                                    score=0;
                                    PIEremoveElement(result);
                                    wrong.visible=true;
                                    var materialSide12 = new THREE.MeshBasicMaterial( { color: 0xC40919} );
                                    var materialArray = [materialSide12 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Just Try Again!!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide12);
                                        result = new THREE.Mesh(textGeom, textMaterial );
                                        result.position.set(8,0,0);
                                        
                                        PIEaddElement(result);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     n.visible=false;
 

 }



if(score==1 || score==6){

    ctick5.visible=false;
    ctick4.visible=false;
    ctick3.visible=false;
    ctick2.visible=false;
    ctick1.visible=true;

}
else if(score==2 || score==7 ){
    ctick5.visible=false;
    ctick4.visible=false;
    ctick3.visible=false;
    ctick2.visible=true;
    ctick1.visible=true;
}else if(score==3|| score==8){

    ctick5.visible=false;
    ctick4.visible=false;
    ctick3.visible=true;
    ctick2.visible=true;
    ctick1.visible=true;
}else if(score==4 || score==9){
    ctick5.visible=false;
    ctick4.visible=true;
    ctick3.visible=true;
    ctick2.visible=true;
    ctick1.visible=true;
}
else if(score==5 || score==10){
    ctick5.visible=true;
    ctick4.visible=true;
    ctick3.visible=true;
    ctick2.visible=true;
    ctick1.visible=true;
}

          
kl=1;
PIEstartAnimation();






}
function sides(){

choice=PIEgetInputSlider("No. of Sides");
next();

}


function nolearn(){
learnchecker=1;
learninfo1.visible=false;
learninfo2.visible=false;
learninfo3.visible=false;
learninfo4.visible=false;
plane20.visible=false;
if(pent_11)PIEremoveElement(pent_11);
if(pent_21)PIEremoveElement(pent_21);
if(pent_31)PIEremoveElement(pent_31);
if(pent_41)PIEremoveElement(pent_41);
if(pent_51)PIEremoveElement(pent_51);
// if(pent_1)PIEremoveElement(pent_1);
// pent_2.visible=false;
// pent_3.visible=false;
// pent_4.visible=false;
// pent_5.visible=false;
plane11.visible=false;
line30.visible=false;
kl=1;
PIEstartAnimation();

}
function initialiseControls(){ 
 PIEaddInputSlider("No. of Sides",5,sides,3,8,1);
 // PIEaddInputCommand("Next"s,next); 
 PIEaddInputText("Answer",0,notify);  
 PIEaddInputCommand("Submit",checker);
 // PIEaddInputCommand("Learn",learn);
 // PIEaddInputCommand("Close Learn",nolearn);

 // PIEaddInputCommand("Submit",checker);


 // PIEaddDisplayText() 

}

function textarea(){

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Perimeter is the Sum of all the Sides of a given Shape.", 
                                        {
                                            size: 0.4, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        learninfo1 = new THREE.Mesh(textGeom, textMaterial );
                                        // learninfo1.position.set(((choice1-5)/2),((5-choice1+choice2)/2)+0.5,0);
                                        
                                        PIEaddElement(learninfo1);
                                        learninfo1.position.set(-7,5,2);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("For Example:", 
                                        {
                                            size: 0.4, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        learninfo2 = new THREE.Mesh(textGeom, textMaterial );
                                        // learninfo1.position.set(((choice1-5)/2),((5-choice1+choice2)/2)+0.5,0);
                                        
                                        PIEaddElement(learninfo2);
                                        learninfo2.position.set(-10,3,2);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("The Perimeter for given Shape is:", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        learninfo3 = new THREE.Mesh(textGeom, textMaterial );
                                        // learninfo1.position.set(((choice1-5)/2),((5-choice1+choice2)/2)+0.5,0);
                                        
                                        PIEaddElement(learninfo3);
                                        learninfo3.position.set(-12,2,2);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("6+5+4+3+9 = 27", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        learninfo4= new THREE.Mesh(textGeom, textMaterial );
                                        // learninfo1.position.set(((choice1-5)/2),((5-choice1+choice2)/2)+0.5,0);
                                        
                                        PIEaddElement(learninfo4);
                                        learninfo4.position.set(-10,1,2);
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


}

var learnchecker=1;
function learn(){
    
if(learnchecker==1){

    textarea();


var geometry = new THREE.PlaneGeometry( 25, 13, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xFF7700, side: THREE.DoubleSide} );
plane11 = new THREE.Mesh( geometry, material );
plane11.position.set(0,0,1);
PIEaddElement(plane11);
PIErender();


 PIEremoveElement(plane20);   
    
                var x = 0, y = 0;

                var heartShape = new THREE.Shape();
                var choice1= (Math.floor(Math.random()*2)+1);
                var choice2= (Math.floor(Math.random()*2)+1);
                var choice3= (Math.floor(Math.random()*2)+1);
                var choice4= (Math.floor(Math.random()*2)+1);
                var choice5= (Math.floor(Math.random()*2)+1);
                var choice6= (Math.floor(Math.random()*2)+1);
                heartShape.moveTo(choice1,5-choice1);
                heartShape.lineTo(-5,0+choice2);
                heartShape.lineTo(-3,-4+choice4);
                heartShape.lineTo(1,-5+choice5);
                heartShape.lineTo(3+choice1,1+choice6);
                heartShape.lineTo(choice1,5-choice1);
                var geometry = new THREE.ShapeGeometry( heartShape );
                // var texture = new THREE.TextureLoader().load( 'farm.png' );
                // texture.wrapS=THREE.RepeatWrapping;
                // texture.wrapT=THREE.RepeatWrapping;
                var material = new THREE.MeshBasicMaterial( { map: texture } );
                // material.wireframe=true;

                plane20 = new THREE.Mesh( geometry, material ) ;
                // plane = new createMesh( geometry,".png" ) ;
                // plane.transparent=true;
                // plane.position.z=0;
                PIEaddElement( plane20 );
                plane20.position.set(0,0,2);
                PIErender();
                // kl=1;
                // PIEstartAnimation();
                // PIEstartAnimation();
                // PIEstopAnimation();


                // geometry1 = new THREE.PlaneGeometry(4,5);
                // fbd2 = createMesh(geometry1,"Farmer.png");
                // fbd2.position.set(9.5,-2.7,2);
                // // spring.material.color.setHex(0x666666);
                // fbd2.visible=true;
                // PIEaddElement(fbd2);

                var edges = new THREE.EdgesGeometry( geometry );
                line30 = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
                PIEaddElement( line30 );
                line30.position.z=2;


                
                
                var choice10= (Math.floor(Math.random()*5)+1);
                var side1=6;
                var side2=5;
                var side3=4;
                var side4=9;
                var side5=3;
                perimeter=side1+side2+side3+side4+side5;


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_11 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_11.position.set(((choice1-5)/2),((5-choice1+choice2)/2)+0.5,0);
                                        
                                        PIEaddElement(pent_11);
                                        pent_11.position.z=2;
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_21= new THREE.Mesh(textGeom, textMaterial );
                                        pent_21.position.set(-4.5,((-4+choice4+choice2)/2)-0.5,0);
                                        
                                        PIEaddElement(pent_21);
                                        pent_21.position.z=2;
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_31 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_31.position.set(-1,((-9+choice4+choice5)/2)-0.5,0);
                                        
                                        PIEaddElement(pent_31);
                                        pent_31.position.z=2;
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_41 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_41.position.set((4+choice1)/2 +0.5,((-4+choice5+choice6)/2),0);
                                        
                                        PIEaddElement(pent_41);
                                        pent_41.position.z=2;
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_51 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_51.position.set((3+(2*choice1))/2,((6-choice1+choice6)/2)+0.5,0);
                                        
                                        PIEaddElement(pent_51);
                                        pent_51.position.z=2;
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



            
            // var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            // var materialArray = [materialSide ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry(choice3, 
            //     {
            //         size: 0.2, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
            //     t0 = new THREE.Mesh(textGeom, textMaterial );
            //     t0.position.set(4,5,0);
                
            //     PIEaddElement(t0);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });

learnchecker=0;
}

}


function initialiseOtherVariables(){
    
}

function resetExperiment(){


 pos=1;
 c=1;
 score=0;


ctick5.visible=false;
ctick4.visible=false;
ctick3.visible=false;
ctick2.visible=false;
ctick1.visible=false;
plane9.visible=true;
fbd1.visible=true;
score_display.visible=true;
if(score_number)  score_number.visible=true;
q1.visible=false;
q2.visible=false;
l1.visible=false;
l2.visible=false;
info1.visible=false;
info3.visible=false;
info2.visible=false;
rope.visible=false;
ques1.visible=false;
ques2.visible=false;
ques3.visible=false;
ques4.visible=false;
ques5.visible=false;
// initialiseScene();
PIEremoveElement(result);


PIEremoveElement(plane);
PIEremoveElement(t0);
PIEremoveElement(tri_1);
PIEremoveElement(tri_2);
PIEremoveElement(tri_3);

PIEremoveElement(quad_1);
PIEremoveElement(quad_2);
PIEremoveElement(quad_3);
PIEremoveElement(quad_4);


PIEremoveElement(pent_1);
PIEremoveElement(pent_2);
PIEremoveElement(pent_3);
PIEremoveElement(pent_4);
PIEremoveElement(pent_5);


PIEremoveElement(hex_1);
PIEremoveElement(hex_2);
PIEremoveElement(hex_3);
PIEremoveElement(hex_4);
PIEremoveElement(hex_5);
PIEremoveElement(hex_6);
var learnchecker=1;
PIEremoveElement(score_number);

PIEremoveElement(line);
PIEremoveElement(result);
n.visible=false;
// plane.visible=true;


    checkbox1.visible=false;
    checkbox2.visible=false;
    checkbox3.visible=false;
    checkbox4.visible=false;
    checkbox5.visible=false;


    boxedge1.visible=false;
    boxedge2.visible=false;
    boxedge3.visible=false;
    boxedge4.visible=false;
    boxedge5.visible=false;


            var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Click Next to Start The Quiz", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                plane = new THREE.Mesh(textGeom, textMaterial );
                plane.position.set(-5,0,0);
                
                PIEaddElement(plane);
                plane.visible=true;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


                      plus1.visible=false;      
                      plus2.visible=false;      
                      plus3.visible=false;      
                      plus4.visible=false;      
                      plus5.visible=false;      
                      plus6.visible=false;      
                      plus7.visible=false;    
                      equals.visible=false;
                      lastanswer.visible=false;

                      // plus1.visible=false;      


nolearn();

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
    helpContent = helpContent + "<h2>Perimeter  Calculations </h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows irregular POLYGONS with dimensions of each side mentioned.Two levels are designed. First level is where student enters the perimeter value.In the second level the student should tell the rope left after fencing the boundary.</p>";
    helpContent = helpContent + "<h3>Setup stage</h3>";
    helpContent = helpContent + "<p>The control panel consists of next button, an input text field and submit button.</p>";
    helpContent = helpContent + "<h3>Animation Stage stage</h3>";
    
    helpContent = helpContent + "<p>The animation is shown for the calculation of the Perimeter.</p>";
    helpContent = helpContent + "<h3>Quiz stage</h3>";
    
    helpContent = helpContent + "<p>After 5 Right answers the user enters the quiz zone.Here he has to calculate and enter the right answers.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows irregular polygons with dimensions</p>";
    infoContent = infoContent + "<h3>Perimeter</h3>";
    infoContent = infoContent + "<p>Sum of all the  sides = perimeter</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}



