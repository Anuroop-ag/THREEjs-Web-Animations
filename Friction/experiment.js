if(window.screen.width>1000){
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
var table1,table11,table41,table51,table61,table71;
var plane1,plane20,plane22,plane21,plane23,plane24,plane4,plane5,plane6,plane9,plane,plane10,plane11,plane12,plane14,plane13,plane15;
var limit;
// function test(){
//     PIEstartAnimation();
//     PIEstopAnimation();
// }
//does what it says
function textarea(){



    var geometry = new THREE.PlaneGeometry( 5.8, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane20 = new THREE.Mesh( geometry, material );
    plane20.position.set(2.7,5.8,1);
    plane20.receiveShadow=true;
    PIEaddElement(plane20);

    var geometry = new THREE.PlaneGeometry( 0.1, 2.37, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane21 = new THREE.Mesh( geometry, material );
    plane21.position.set(5.55,4.65,1);
    plane21.receiveShadow=true;
    PIEaddElement(plane21);
       

    var geometry = new THREE.PlaneGeometry( 0.1, 2.37, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane22 = new THREE.Mesh( geometry, material );
    plane22.position.set(-0.2,4.65,1);
    plane22.receiveShadow=true;
    PIEaddElement(plane22);
       
    var geometry = new THREE.PlaneGeometry( 5.8, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane23 = new THREE.Mesh( geometry, material );
    plane23.position.set(2.7,3.5,1);
    plane23.receiveShadow=true;
    PIEaddElement(plane23);

    var geometry = new THREE.PlaneGeometry( 6.38, 2.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane24 = new THREE.Mesh( geometry, material );
    plane24.position.set(-10.25,3.5,-4.99);
    plane24.receiveShadow=true;
    PIEaddElement(plane24);

    var geometry = new THREE.PlaneGeometry( 6.5, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane4 = new THREE.Mesh( geometry, material );
    plane4.position.set(-10.2,5,-4.99);
    plane4.receiveShadow=true;
    PIEaddElement(plane4);

    var geometry = new THREE.PlaneGeometry( 0.1, 3, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane5 = new THREE.Mesh( geometry, material );
    plane5.position.set(-7,3.55,-4.99);
    plane5.receiveShadow=true;
    PIEaddElement(plane5);
       

    var geometry = new THREE.PlaneGeometry( 0.1, 3, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane6 = new THREE.Mesh( geometry, material );
    plane6.position.set(-13.5,3.55,-4.99);
    plane6.receiveShadow=true;
    PIEaddElement(plane6);
       
    var geometry = new THREE.PlaneGeometry( 6.6, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane9 = new THREE.Mesh( geometry, material );
    plane9.position.set(-10.25,2,-4.99);
    plane9.receiveShadow=true;
    PIEaddElement(plane9);

    var geometry = new THREE.PlaneGeometry( 6.38, 2.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, material );
    plane.position.set(-10.25,3.5,-4.99);
    plane.receiveShadow=true;
    PIEaddElement(plane);

    var geometry = new THREE.PlaneGeometry( 6.14, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane10 = new THREE.Mesh( geometry, material );
    plane10.position.set(6.83,0,0);
    plane10.receiveShadow=true;
    PIEaddElement(plane10);

    var geometry = new THREE.PlaneGeometry( 0.1, 1.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane11 = new THREE.Mesh( geometry, material );
    plane11.position.set(3.8,-1,0);
    plane11.receiveShadow=true;
    PIEaddElement(plane11);
       

    var geometry = new THREE.PlaneGeometry( 0.1, 1.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane12 = new THREE.Mesh( geometry, material );
    plane12.position.set(9.85,-1,0);
    plane12.receiveShadow=true;
    PIEaddElement(plane12);
       
    var geometry = new THREE.PlaneGeometry( 6.15, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane13 = new THREE.Mesh( geometry, material );
    plane13.position.set(6.82,-2,0);
    plane13.receiveShadow=true;
    PIEaddElement(plane13);

    var geometry = new THREE.PlaneGeometry( 6, 1.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane14 = new THREE.Mesh( geometry, material );
    plane14.position.set(6.84,-1,0);
    plane14.receiveShadow=true;
    PIEaddElement(plane14);


    var geometry = new THREE.PlaneGeometry( 6, 2.5, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane15 = new THREE.Mesh( geometry, material );
    plane15.position.set(2.8,4.8,0);
    plane15.receiveShadow=true;
    PIEaddElement(plane15);


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Observation Table" , 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(5,0.3,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Acceleration in m/s2 = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(4,-0.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Mass1 Info " , 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-10,4.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Area of Contact Mass1 (m2) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-11,3.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });




     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Length of Mass1 (m) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-11,3,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Breadth of Mass1 (m) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-11,2.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Width of Mass1 (m) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-11,2,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });




     var mf2 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var ms2 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    // var materialArray = [ materialFront,materialSide ];
    
    loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    var textGeom = new THREE.TextGeometry("You can check that the  ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(ms2);
        conclude1 = new THREE.Mesh(textGeom, textMaterial );
        conclude1.position.set(0,4.5,0);
        
        PIEaddElement(conclude1);
        conclude1.visible=true;
        // conclude1.style.textdecoration="underline";
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    loader = new THREE.FontLoader();
    var mf3 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    var ms3 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    // var materialArray = [ materialFront ];
     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("\"Frictional Force\"", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(ms3);
        conclude2 = new THREE.Mesh(textGeom, textMaterial );
        conclude2.position.set(3,4.5,0);

        
        PIEaddElement(conclude2);
        conclude2.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var mf4 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var ms4 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("is Independent of  ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf4);
        conclude3= new THREE.Mesh(textGeom, textMaterial );
        conclude3.position.set(0,4,0);
        
        PIEaddElement(conclude3);
        conclude3.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });
    var mf5 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    var mf5 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("\"Area of Contact of Mass1\"", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf5);
        conclude4 = new THREE.Mesh(textGeom, textMaterial );
        conclude4.position.set(2.3,4,0);
        
        PIEaddElement(conclude4);
        conclude4.visible=true;

        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var mf9 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var mf9 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Note:-", 
        {
            size: 0.25, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf9);
        conclude5 = new THREE.Mesh(textGeom, textMaterial );
        conclude5.position.set(0,5.5,0);
        
        PIEaddElement(conclude5);
        conclude5.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



     var mf1 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var ms1  = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var m1 = [ ms1];
    
    loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("To invert Mass1 tick \"Invert Mass1\". ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"       
        });  
    var textMaterial = new THREE.MeshBasicMaterial(ms1);
        conclude6 = new THREE.Mesh(textGeom, textMaterial );
        conclude6.position.set(0,5,0);
        
        PIEaddElement(conclude6);
        conclude6.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

}

function initialiseScene(){

    textarea();
   
    geometry = new THREE.PlaneGeometry(0.5,2);
    spring = createMesh(geometry,"spring.png");
    spring.position.set(1.39,-1.5,2);
    // spring.material.color.setHex(0x666666);
        PIEaddElement(spring);

    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");
    
    var  length1=0.1*Mass1;
    var  length2=0.1*Mass2;
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);

 // geometry = new THREE.PlaneGeometry(13,4);
 //    ppl = createMesh(geometry,"people.png");
 //    ppl.position.set(-6.5,-4.5,2);
 //    // ppl.material.color.setHex(0x666666);
 //        PIEaddElement(ppl);

    // geometry = new THREE.PlaneGeometry(1.5,2.4);
    // cube2=createMesh(geometry,"standmass.png");
    // cube2.position.set(xval,yval,zval);
    // //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );
    // cube3.position.set(-4,0.7,2);
    // cube3.material.color.setHex(0x666666);
        // PIEaddElement(cube3);

    geometry = new THREE.PlaneGeometry(13,0.6);
    block1=createMesh(geometry,"table.png");
    block1.position.set(-5.5,-0.42,1);
    block1.material.color.setHex(0x666666);
        PIEaddElement(block1);

        PIErender();

   geometry = new THREE.PlaneGeometry(6.5,0.9);
    blue=createMesh(geometry,"yellow.png");
    blue.position.set(4.2,5.1,1);

    PIEaddElement( blue );
    blue.visible=false;

   geometry = new THREE.PlaneGeometry(4.5,0.7);
    green=createMesh(geometry,"green.png");
    green.position.set(4.2,5,1);
     PIEaddElement( green );
    green.visible=false;
   geometry = new THREE.PlaneGeometry(4.5,0.7);
    red=createMesh(geometry,"red.png");
    red.position.set(4.2,5,1);
     PIEaddElement( red );
     red.visible=false;

   geometry = new THREE.PlaneGeometry(4.5,0.7);
    yellow=createMesh(geometry,"yellow.png");
    yellow.position.set(4.2,5,1);
     PIEaddElement( yellow );
    yellow.visible=false;


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15; 
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    // cube3.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );


    nliney.position.set(xval2,yvalbox,zval2);
    //  cube3.position.set(xval2,yvalbox,zval2);
    // // cube3.position.set(1,-2,0);
    // PIEaddElement( cube3 );   
    

    


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Frictional force =  fr =" , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t0 = new THREE.Mesh(textGeom, textMaterial );
        t0.position.set(4,-1,0);
        
        PIEaddElement(t0);
        t0.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Spring Balance = Tension =T=", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t1 = new THREE.Mesh(textGeom, textMaterial );
        t1.position.set(4,-1.5,0);
        
        PIEaddElement(t1);
        t1.visible=false;

        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



    geometry = new THREE.PlaneGeometry(3,2.5);
    fbd1 = createMesh(geometry,"fbd1.png");
    fbd1.position.set(-6,2,2);
    // spring.material.color.setHex(0x666666);
    fbd1.visible=false;
    PIEaddElement(fbd1);

    geometry = new THREE.PlaneGeometry(1.3,3);
    fbd2 = createMesh(geometry,"fbd2.png");
    fbd2.position.set(-1,-2.5,2);
    // spring.material.color.setHex(0x666666);
    fbd2.visible=false;
    PIEaddElement(fbd2);
    
    mass=PIEgetInputSlider("Mass1");


    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest = new THREE.Mesh(textGeom, textMaterial );
        texttest.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest);
        
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });

    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest2 = new THREE.Mesh(textGeom, textMaterial );
        // texttest2.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest2);
        texttest2.position.set(1,yvalbox,zval2);
           PIErender()
    });

        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
     



    

    PIErender();
}



// function masschange(){

// PIEremoveElement(cube2);
//      cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
//     cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,1.5 ),  cubeMaterial);
//     cube2.rotation.y += 0.4;
//     cube2.rotation.x +=0.15; 
//     cube2.rotation.z+=-0.05;
//     PIEaddElement( cube2 );
//     cube2.position.set(xval,yval,zval);
//     edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,1.5) );
//     nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
//     nline.rotation.y += 0.4;
//     nline.rotation.x += 0.15;
//     nline.rotation.z +=-0.05;
//     PIEaddElement( nline );
//     nline.position.set(xval,yval,zval);

// PIEremoveElement(cube3);

//     cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
//     cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,1.5 ),  cubeMaterial);
//     cube3.rotation.y += 0.4;
//     cube3.rotation.x +=0.15; 
//     cube3.rotation.z+=-0.05;
//     PIEaddElement( cube3 );
//     // cube3.position.set(xval,yval,zval);
//     edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,1.5) );
//     nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
//     nliney.rotation.y += 0.4;
//     nliney.rotation.x += 0.15;
//     nliney.rotation.z +=-0.05;
//     PIEaddElement( nliney );


//     nliney.position.set(xval2,yvalbox,zval2);

// }



function handleChange(row, col, value)
{
    /* Set current Table to Copy Table */
    PIEtableSelect("Copy Table");
    /* copy cell content to Copy Table */
    PIEupdateTableCell(row, col, value);
}


function loadExperimentElements(){
    var loader, tex, material, geometry;

    PIEsetExperimentTitle("Friction Illustration");
    PIEsetDeveloperName("Anuroop Gubbala");
    //PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseControls();
    initialiseScene();

  
    PIEsetAreaOfInterest(-8,8, 8, -8);
    // PIEscene.background=new THREE.Color( 0xffa64d );
    PIEscene.background=new THREE.Color(0x23231a);



    


    

    

    var mf6 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var ms6 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Acceleration of Mass1 is 0 ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf6);
        redtext = new THREE.Mesh(textGeom, textMaterial );
        redtext.position.set(2.5,4.7,2);
        
        PIEaddElement(redtext);
        redtext.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

    


    var mf7 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var  = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Click \"Assign Weights\" Before Starting", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf7);
        notif = new THREE.Mesh(textGeom, textMaterial );
        notif.position.set(2,4.8,2);
        
        PIEaddElement(notif);
        notif.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

    
    // PIEcreateTable("Observation Table", 8, 3, false);

    // PIEsetRowInput(1, 28, "Acceleration");
    // PIEsetRowInput(2, 28, "Spring Balance Reading");
    // PIEsetRowInput(3, 28, "Frictional Force");
    // PIEsetRowInput(4,28,"Area of Contact of Mass1");
    // PIEsetRowInput(5,20,"Length of Mass1");
    // PIEsetRowInput(6,20,"Height of Mass1");
    // PIEsetRowInput(7,20,"Width of Mass1");
    // // PIEsetTablerowStyle(1, 2,"Acceleration");
    // // PIEsetRowInput(3, 4, "lmno");
    
    // PIEtableSelect("Observation Table");
    // PIEupdateTableCell(1,2,"m/s2");
    // PIEupdateTableCell(2,2,"N");
    // PIEupdateTableCell(3,2,"N");
    // PIEupdateTableCell(4,2,"m2");
    // PIEupdateTableCell(5,2,"m");
    // PIEupdateTableCell(6,2,"m");
    // PIEupdateTableCell(7,2,"m");
    material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( xval, 0.64, 0 ),
    new THREE.Vector3( 1, 0.64, 0),
    );

    line = new THREE.Line( geometry, material );
    PIEaddElement( line );

    var geometry = new THREE.RingGeometry( 0.5,0.25,32,32);
    var material = new THREE.MeshLambertMaterial( { color: 0xea4b4b, side: THREE.DoubleSide } );
    var pulley = new THREE.Mesh( geometry, material );


    pulley.position.set(1,0.15,0);
    PIEaddElement(pulley);

    

    
    

    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("T", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        ttext = new THREE.Mesh(textGeom, textMaterial );
        ttext.position.set(0.4,0.8,0);
        
        PIEaddElement(ttext);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("T", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        ttext = new THREE.Mesh(textGeom, textMaterial );
        ttext.position.set(1.7,-0.6,0);
        
        PIEaddElement(ttext);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("fr", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        ttext = new THREE.Mesh(textGeom, textMaterial );
        ttext.position.set(-5.5,0.2,0);
        
        PIEaddElement(ttext);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Mass1", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        textMesh1 = new THREE.Mesh(textGeom, textMaterial );
        textMesh1.position.set(-4,3,0);
        
        PIEaddElement(textMesh1);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

    //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1m, height=1.5m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     dim_mass1 = new THREE.Mesh(textGeom, textMaterial );
    //     dim_mass1.position.set(-3,3,0);
        
    //     PIEaddElement(dim_mass1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    //  });

    var mat = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });
    

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Coefficient of Friction=", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        textMesh1 = new THREE.Mesh(textGeom, textMaterial );
        textMesh1.position.set(-7,-1.5,0);
        
        PIEaddElement(textMesh1);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

        var newfrictioncoeff=PIEgetInputSlider("friction_coef");


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("0.25", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text4 = new THREE.Mesh(textGeom, textMaterial );
        text4.position.set(-4,-1.5,0);
        
        PIEaddElement(text4);
        // text4.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Weights", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        textMesh1 = new THREE.Mesh(textGeom, textMaterial );
        textMesh1.position.set(3,-3.8,0);
        
        PIEaddElement(textMesh1);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });
        

    //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1.5m, height=1m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     textMesh1 = new THREE.Mesh(textGeom, textMaterial );
    //     textMesh1.position.set(4,-3.8,0);
        
    //     PIEaddElement(textMesh1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });


        var dir = new THREE.Vector3( 0, 1, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3( 1.43, -0.6, 1 );
        var length = 0.5;
        var hex = 0xffffff;

        var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex,0.3,0.2);
        PIEaddElement( arrowHelper );


        var dir = new THREE.Vector3( 1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3( -1, 0.66, 0 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperT );


        var dir = new THREE.Vector3( -1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();
       
        var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperfr = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperfr );
   

        

    var mat = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geo = new THREE.Geometry();
    geo.vertices.push(
    new THREE.Vector3(  0.15,-0.14, 0 ),
    new THREE.Vector3(  1, 0.15, 0),
    );

    var line2 = new THREE.Line( geo, mat );
    PIEaddElement( line2 );


    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, topstring, -1 ),
            new THREE.Vector3( 1.55, 0.15, -1),
            );

            line5 = new THREE.Line( geometry, mat );

            PIEaddElement( line5 );
            

    var mat = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geo = new THREE.Geometry();
    geo.vertices.push(
    new THREE.Vector3(  0.5,-0.5, 0 ),
    new THREE.Vector3(  1, 0.15, 0),
    );

    line3 = new THREE.Line( geo, mat );
    PIEaddElement( line3 );



    // var mass=PIEgetInputSlider("Mass1");
    // var length=0.03;

    // var geometry = new THREE.BoxGeometry(1,1.5);
    // var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    //  cube2 = new THREE.Mesh( geometry, material );
    // cube2.position.set(xval,yval,zval);
    //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );



    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( 1.55, -1, -1),
    new THREE.Vector3( 1.55, 0.15,-1),
    );

    line4 = new THREE.Line( geometry, material );

    PIEaddElement( line4 );
 

    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -3.5, -1 ),
            new THREE.Vector3( 1.55,-2.8, -1),
            );

            line6 = new THREE.Line( geometry, material );

    PIEaddElement( line6 );



    // var geometry = new THREE.RingGeometry( 0.5,0.25,32,32);
    // var material = new THREE.MeshLambertMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    // var pulley = new THREE.Mesh( geometry, material );

    // var geometry = new THREE.BoxGeometry( 1.5, 1);
    // var material = new THREE.MeshLambertMaterial( {color: 0x00ffb1} );
    // cube3 = new THREE.Mesh( geometry, matecube3rial );
    cube3.position.set(xval2,yvalbox,zval2);
    // cube3.position.set(1,-2,0);
    PIEaddElement( cube3 );   


    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("Spring Balance "+" = " +tension+" N ", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialFront);
    //     textMesh1 = new THREE.Mesh(textGeom, textMaterial );
    //     textMesh1.position.set(2,1.8,0);
        
    //     PIEaddElement(textMesh1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });
    // test();

    PIErender();
    PIEstartAnimation();
    // resetExperiment();
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


function hamdrag(object, newpos) {
    var x=newpos.x, z=newpos.z;
    if(x*x+z*z!=(ballradius+0.275)*(ballradius+0.275)){
        if(x*x<=(ballradius+0.275)*(ballradius+0.275))
            z=Math.sqrt((ballradius+0.275)*(ballradius+0.275)-x*x);
        else
            x=Math.sqrt((ballradius+0.275)*(ballradius+0.275)-z*z);
    }
    
    if(newpos.x<0 && x>0)
        x=-x;
    if(newpos.z<0 && z>0)
        z=-z;

    object.position.set(x, ballradius+0.3, z);
    x1 = x, z1= z;    
    theta=Math.atan(z1/x1);
}

// var kl = 1;
var assignvar=1;
var tester=1;
function updateExperimentElements(t, dt)
        {       

            // PIEremoveElement(nline);
               	var time  = t/1000;

               	if((time >= 2)&&(kl==1)){
                    PIEstopAnimation();
                    kl=0;
                }

                if(kl == 0){
                    // if(assignvar==1){
                    // assign();
                    // assignvar=0;
                    // }

                    // red.visible=false;
                    // redtext.visible=false;

                    var Mass1=PIEgetInputSlider("Mass1");
                    var Mass2=PIEgetInputSlider("Weights");
    
                    var  length1=0.01*Mass1;
                    var  length2=0.01*Mass2;
                    

                    

                    

                //var g=PIEgetInputSlider("g");
                // var weight=Mass2*10;
                // PIEchangeDisplayText("Spring Balance Reading",);
                xval=cube2.position.x;
                yval=cube2.position.y;
                zval=cube2.position.z;
                mew_friction=PIEgetInputSlider("friction_coef");    
                
                // 

                 //    conclude5.visible=true;
                	// conclude4.visible=true;
                	// conclude3.visible=true;
                	// conclude2.visible=true;
                	// conclude1.visible=true;

                //acceleration


                accrn=( ((Mass2-(mew_friction*Mass1))*10) / (Mass2+Mass1) );
                
                if(table11){table11.visible=true;}
                if(table51){table51.visible=true;}
                if(table61){table61.visible=true;}
                if(table71){table71.visible=true;}
                if(table41){table41.visible=true;}

                // table51.visible=true;
                // table61.visible=true;
                // table71.visible=true;
                // table41.visible=true;

                tension=Mass2*(10-accrn);
                var fritionalforce=tension-(Mass1*accrn);
                
                accrn=Math.round(accrn*100)/100;

                if(accrn<=0)
                {
                    accrn=0;
                    tension=Mass2*10;
                    fritionalforce=tension;
                }

                if(invert_mass_checker==1){
                    area=1.5*(0.5+length1);
                    // PIEupdateTableCell(5,1,1.5);
                     // PIEupdateTableCell(6,1,2.4);
                   

                }else{
                    // PIEupdateTableCell(5,1,2.4);
                   // PIEupdateTableCell(7,1, 1.5);
                    area=2.4*(0.5+length1);

                }
                 // PIEupdateTableCell(7,1,(0.5+length1));

                fritionalforce=Math.round(fritionalforce*100)/100;
                tension=Math.round(tension*100)/100;
                // PIEchangeDisplayText("Acceleration",accrn+"m/s2");
                // PIEtableSelect("Observation Table \t\t\t\t");
                // PIEupdateTableCell(1,1,accrn);




                
                
                if(t2){
                     t2.visible=true;
                }

                if(t3){
                     t3.visible=true;
                }

                if(t0){
                     t0.visible=true;
                }

                if(t1){
                     t1.visible=true;
                }
               


               

                result=Mass1*mew_friction;
                
               if(tester==1){
                    bmassnotify();
                    bmassnotify2();
                    tester=0;
                    v=0;
                    accrn=0;
                    }
                if(Mass2>result)
                {   

                    // green.visible=true;
                    // greentext.visible=true;
                    var mass=PIEgetInputSlider("Mass1");
                    var length=mass*0.03;
                    // endx=0.5-length;
                    limit=xval+(length/2);
                  
                    if(xval<endx){

                        // PIEremoveElement(arrowHelperT);
                        v=v+(accrn*dt/1000);
                        xval=xval+(v*dt/1000)+((accrn*(dt/1000)*(dt/1000))*0.5);

                        PIEremoveElement(line);
                        var mass=PIEgetInputSlider("Mass1");
                       var length,linestart;
                        
                         length=mass*0.03;
                         linestart=xval+(length/2)-0.08;
                        
                        var mate = new THREE.LineBasicMaterial({
                        color: 0x9e3c19
                        });

                        var geometry = new THREE.Geometry();
                        geometry.vertices.push(
                        new THREE.Vector3( xval-0.45, 0.66, -1 ),
                        new THREE.Vector3( 1, 0.66, -1),
                        );

                        line = new THREE.Line( geometry, mate );

                        PIEaddElement( line );

                        PIEremoveElement(line6);
                        //PIEremoveElement(line4);
                        
                        // var acc=-accrn;

                        yvalbox=yvalbox-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);
                        yvalspring=yvalspring-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);
                        stringy=stringy-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);
                        topstring=topstring-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);



                        var material = new THREE.LineBasicMaterial({
                        color: 0x0000ff
                        });



                        PIEremoveElement(line3);
                            var mat = new THREE.LineBasicMaterial({
                            color: 0x9e3c19
                            });

                            var geo = new THREE.Geometry();
                            geo.vertices.push(
                            new THREE.Vector3(  0.5,-0.5, 0 ),
                            new THREE.Vector3(  1, 0.15, 0),
                            );

                            line3 = new THREE.Line( geo, mat );
                            PIEaddElement( line3 );


                        PIEremoveElement(line4);  

                        var mat = new THREE.LineBasicMaterial({
                            color: 0x9e3c19
                            });
                        

                        var geometry = new THREE.Geometry();
                        geometry.vertices.push(
                        new THREE.Vector3( 1.55, yvalbox, -1 ),
                        new THREE.Vector3( 1.55, stringy, -1),
                        );

                        line4 = new THREE.Line( geometry, mat );

                        PIEaddElement( line4 );   


                        if(invert_mass_checker==1){
    // cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    // cube2 = new THREE.Mesh( new THREE.CubeGeometry( length1,2.4,1.5 ),  cubeMaterial);
    // cube2.rotation.y += 0.4;
    // cube2.rotation.x +=0.15; 
    // cube2.rotation.z+=-0.05;
    // PIEaddElement( cube2 );
    // cube2.position.set(xval,yval,zval);

    PIEremoveElement(nline);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{
        PIEremoveElement(nline);
    
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);

    }
                        
                                                                        if(change==1){
                        PIEremoveElement(arrowHelperfr)
                        

                        var dir = new THREE.Vector3( -1 , 0, 0 );

                        //normalize the direction vector (convert to vector of length 1)
                        dir.normalize();

                        var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
                        var lengtharrow = -(-3-xval)+1.7;
                        var hex = 0xffffff;

                        arrowHelperfr = new THREE.ArrowHelper( dir, origin, lengtharrow, hex,0.6,0.2);
                        PIEaddElement( arrowHelperfr );
                    //             PIEremoveElement(nline);

                    // edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(length1,2.4,1.5) );
                    // nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
                    // nline.rotation.y += 0.4;
                    // nline.rotation.x += 0.15;
                    // nline.rotation.z +=-0.05;
                    // PIEaddElement( nline );
                    // nline.position.set(xval,yval,zval);

                                                                         }else{

                            

    //                          PIEremoveElement(nline);
    //                     edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,length1,1.5) );
    // nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    // nline.rotation.y += 0.4;
    // nline.rotation.x += 0.15;
    // nline.rotation.z +=-0.05;
    // PIEaddElement( nline );
    // nline.position.set(xval,yval,zval);
                            PIEremoveElement(arrowHelperfr)
                            var dir = new THREE.Vector3( -1 , 0, 0 );

                        //normalize the direction vector (convert to vector of length 1)
                        dir.normalize();

                        var origin = new THREE.Vector3( xval-0.9, 0.5, 3 );
                        var lengtharrow = -(-3-xval)+1.7;
                        var hex = 0xffffff;

                        arrowHelperfr = new THREE.ArrowHelper( dir, origin, lengtharrow, hex,0.6,0.2);
                        PIEaddElement( arrowHelperfr );

                        }


                        // PIEremoveElement(arrowHelperT)
                        //     var dir = new THREE.Vector3( 1 , 0, 0 );

                        //     //normalize the direction vector (convert to vector of length 1)
                        //     dir.normalize();

                        //     var origin = new THREE.Vector3( -0.9, 0.8, 0 );
                        //     var length = 1.5;
                        //     var hex = 0xffff00;

                        //     arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
                        //     PIEaddElement( arrowHelperT );

                        PIEremoveElement(line5);
                        var mat = new THREE.LineBasicMaterial({
                            color: 0x9e3c19
                            });

                        var geometry = new THREE.Geometry();
                        geometry.vertices.push(
                        new THREE.Vector3(1.55, topstring, -1 ),
                        new THREE.Vector3( 1.55, 0.15, -1),
                        );

                        line5 = new THREE.Line( geometry, mat );

                        PIEaddElement( line5 );
                        
                        spring.position.set(1.5,yvalspring,0);
                        
                        // spring.position.set(1.39,-1.5,2);
                        cube2.position.set(xval,yval,zval);



                        if(texttest){
                        	texttest.visible=false;
                        	texttest.position.set(xval,yval,4);
        					texttest.visible=true;
                        }
                    
        				if(texttest2){
                            texttest2.visible=false;
                            texttest2.position.set(1,yvalbox+0.5,4);
                            texttest2.visible=true;
                        
                        }

 						
                        cube3.position.set(1.55,yvalbox,0);
                        PIEremoveElement(nliney);
                        edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
                        nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
                        nliney.rotation.y += 0.4;
                        nliney.rotation.x += 0.15;
                        nliney.rotation.z +=-0.05;
                        PIEaddElement( nliney );
                        nliney.position.set(1.55,yvalbox,0);


                    }
                    else{

                    PIEremoveElement(arrowHelperT); 
                    // var dir = new THREE.Vector3( 0, 1, 0 );

                    // //normalize the direction vector (convert to vector of length 1)
                    // dir.normalize();

                    // var origin = new THREE.Vector3( 2, -1, 0 );
                    // var length = 1.2;
                    // var hex = 0xffff00;

                    // var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
                    // PIEaddElement( arrowHelper );


                    var dir = new THREE.Vector3( 1 , 0, 0 );

                    //normalize the direction vector (convert to vector of length 1)
                    dir.normalize();

                    var origin = new THREE.Vector3( xval+0.48, 0.64, 0 );
                    var length = .7;
                    var hex = 0xffffff;

                     arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.3,0.3);
                    PIEaddElement( arrowHelperT );

                    conclude6.visible=true;
                    conclude5.visible=true;
                	conclude4.visible=true;
                	conclude3.visible=true;
                	conclude2.visible=true;
                	conclude1.visible=true;
                

                    cube2.position.set(xval,yval,zval);

                       

                        }

                    }
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


var deletemass=1;
var text;
function bmassnotify(){
    // assign();
    // assignvar=1;
   var mass=PIEgetInputSlider("Mass1");

   if(deletemass==-1){


    PIEremoveElement(text);
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text = new THREE.Mesh(textGeom, textMaterial );
        text.position.set(-4,2.5,0);
        
        PIEaddElement(text);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });


    PIEremoveElement(texttest);

    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest = new THREE.Mesh(textGeom, textMaterial );
        texttest.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });



   }else{
   

   var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text = new THREE.Mesh(textGeom, textMaterial );
        text.position.set(-4,2.5,0);
        
        PIEaddElement(text);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    deletemass=-1;

}
    PIErender();




    PIEremoveElement(cube2);
    PIEremoveElement(cube3);
    PIEremoveElement(nliney);
    PIEremoveElement(nline);
    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");


    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    var  height =length1/2;

    if(invert_mass_checker==1){
    

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval-0.2,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval-0.2,zval);

    }
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15;
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);


    // PIEremoveElement(texttest2);
    // var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialA = [ materialF ];
    // var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialS);
    //     texttest2 = new THREE.Mesh(textGeom, textMaterial );
    //     // texttest2.position.set(-3.5,0.9,4);
        
    //     PIEaddElement(texttest2);
    //     texttest2.position.set(1,yvalbox,zval2);
    //        PIErender()
    // });


    notif.visible=false;
    blue.visible=false;
    // bmassnotify();
    // bmassnotify2();
   

}


function bmassnotify2(){
    // assignvar=1;
    // assign();
   var mass1=PIEgetInputSlider("Mass1");
   var mass2=PIEgetInputSlider("Weights");
   var u=PIEgetInputSlider("friction_coef");
   var tension;
   var area;
   PIEremoveElement(cube2);
    PIEremoveElement(cube3);
    PIEremoveElement(nliney);
    PIEremoveElement(nline);
    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");


    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    var  height =length1/2;

    if(invert_mass_checker==1){
    

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval-0.2,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval-0.2,zval);

    }
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15;
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);


    // PIEremoveElement(texttest2);
    // var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialA = [ materialF ];
    // var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialS);
    //     texttest2 = new THREE.Mesh(textGeom, textMaterial );
    //     // texttest2.position.set(-3.5,0.9,4);
        
    //     PIEaddElement(texttest2);
    //     texttest2.position.set(1,yvalbox,zval2);
    //        PIErender()
    // });


    notif.visible=false;
    blue.visible=false;
    // bmassnotify();
    // bmassnotify2();
    accrn=( ((mass2-(u*mass1))*10) / (mass2+mass1) );
    var  length1=0.01*mass1;
    var  length2=0.01*mass2;           
    length1=Math.round(length1*10)/10;            

                tension=mass2*(10-accrn);
                var fritionalforce=tension-(mass1*accrn);
                
                accrn=Math.round(accrn*100)/100;

                if(accrn<=0)
                {
                    accrn=0;
                    tension=mass2*10;
                    fritionalforce=tension;
                }

                if(invert_mass_checker==1){
                    area=1.5*(0.5+length1);
                    // PIEupdateTableCell(5,1,1.5);
                    //  PIEupdateTableCell(6,1,2.4);
                                                                                                     
                                                                                                    if(table51){
                                                                                                    PIEremoveElement(table51);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(1.5, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table51 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table51.position.set(-7.8,3,0);
                                                                                                    
                                                                                                    PIEaddElement(table51);
                                                                                                    table51.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });









                                                                                                     if(table61){
                                                                                                    PIEremoveElement(table61);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(2.4, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table61 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table61.position.set(-7.8,2.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table61);
                                                                                                    table61.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });

                }else{
                   //  PIEupdateTableCell(5,1,2.4);
                   // PIEupdateTableCell(6,1, 1.5);
                    area=2.4*(0.5+length1);
                                                                                                    if(table51){
                                                                                                    PIEremoveElement(table51);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(2.4, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table51 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table51.position.set(-7.8,3,0);
                                                                                                    
                                                                                                    PIEaddElement(table51);
                                                                                                    table51.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });

                                                                                                    if(table61){
                                                                                                    PIEremoveElement(table61);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(1.5, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table61 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table61.position.set(-7.8,2.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table61);
                                                                                                    table61.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });


                }
                 // PIEupdateTableCell(7,1,(0.5+length1));

                                                                                                    if(table71){
                                                                                                    PIEremoveElement(table71);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry((0.5+length1), 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table71 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table71.position.set(-8,2,0);
                                                                                                    
                                                                                                    PIEaddElement(table71);
                                                                                                    table71.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });



                fritionalforce=Math.round(fritionalforce*100)/100;
                tension=Math.round(tension*100)/100;
                // PIEchangeDisplayText("Acceleration",accrn+"m/s2");
                // PIEtableSelect("Observation Table \t\t\t\t");
                // PIEupdateTableCell(1,1,accrn);


                                                                                                    if(table11){
                                                                                                    PIEremoveElement(table11);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(accrn, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table11 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table11.position.set(7,-0.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table11);
                                                                                                    table11.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });



                PIEchangeDisplayText("Spring Balance Reading",tension+"N");
                // PIEupdateTableCell(2,1,tension);

                area=Math.round(area*1000)/1000;  

                if(invert_mass_checker==1){
                    // PIEupdateTableCell(4,1,area);

                                                                                                    if(table41){
                                                                                                    PIEremoveElement(table41);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(area, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table41 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table41.position.set(-7,3.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table41);
                                                                                                    table41.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });

                }
                else{
                    // PIEupdateTableCell(4,1,area);


                                                                                                                                                                                                        if(table41){
                                                                                                    PIEremoveElement(table41);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(area, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table41 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table41.position.set(-7,3.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table41);
                                                                                                    table41.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });
                }
                // PIEupdateTableCell(3,1,fritionalforce);

                
                

    PIEremoveElement(texttest2);


    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass2+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest2 = new THREE.Mesh(textGeom, textMaterial );
        texttest2.position.set(1,yvalbox+0.3,4);
        
        PIEaddElement(texttest2);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });
    result=u*mass1;
   if(mass2>result){
    var  a=( ((mass2-(u*mass1))*10) / (mass2+mass1) );

    var net=mass2*(10-a);
    PIEremoveElement(t2);
    PIEremoveElement(t3);
    var newf=net-(mass1*a);
    newf=Math.round(newf*100)/100;
    net=Math.round(net*100)/100;
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(newf+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
       t2 = new THREE.Mesh(textGeom, textMaterial );
        t2.position.set(7,-1,0);
        
        PIEaddElement(t2);
        t2.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(net+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
       t3 = new THREE.Mesh(textGeom, textMaterial );
       t3.position.set(8,-1.5,0);
        
        PIEaddElement(t3);
        t3.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

   }else{
    
var  a=( ((mass2-(u*mass1))*10) / (mass2+mass1) );

    var net=mass2*(10-a);
    PIEremoveElement(t2);
    PIEremoveElement(t3);
    tension= mass2*10;
    tension=Math.round(tension*100)/100;
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(tension+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal",length: 4
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t2 = new THREE.Mesh(textGeom, textMaterial );
        t2.position.set(7,-1,0);
        
        PIEaddElement(t2);
        t2.visible=false;
        tchange=-1;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();



        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(tension+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
       t3 = new THREE.Mesh(textGeom, textMaterial );
       t3.position.set(8,-1.5,0);
        
        PIEaddElement(t3);
        t3.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });
    });

   }

   if(deletemass2==-1){


    PIEremoveElement(text2);
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass2, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text2 = new THREE.Mesh(textGeom, textMaterial );
        text2.position.set(3,-4.2,0);
        
        PIEaddElement(text2);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });


   }else{
   

   var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass2, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text2 = new THREE.Mesh(textGeom, textMaterial );
        text2.position.set(3,-4.2,0);
        
        PIEaddElement(text2);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    deletemass2=-1;

}
    PIErender();
   

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

function invert_mass(){

    kl=1;
    PIEstartAnimation();



    xval=-3.5;
    yval=0.8;
    xval2=1.5;
    yvalbox=-3.5;
    zval2=0;
    yvalspring=-1.7;
    topstring=-1;
    stringy=-2.8;


    // PIEtableSelect("Observation Table");
    // PIEupdateTableCell(4,1,)
    // PIEremoveElement(stars);
    //  geometry = new THREE.PlaneGeometry(7,1);
    // stars=createMesh(geometry,"woodred.jpg");
    // stars.position.set(-3,-0.6,1);
    //     stars.material.color.setHex(0x666666);
    //     PIEaddElement(stars);
    //     PIErender();
    PIEremoveElement(line);
    PIEremoveElement(line4);
    PIEremoveElement(line5);
    PIEremoveElement(line6);
    PIEremoveElement(spring);
    PIEremoveElement(cube3);
     PIEremoveElement(nline);
     PIEremoveElement(nliney);
    

    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");
    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15; 
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    PIEaddElement( cube3 );  


    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);

     PIEremoveElement(texttest2);
    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest2 = new THREE.Mesh(textGeom, textMaterial );
        // texttest2.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest2);
        texttest2.position.set(1,yvalbox,zval2);
           PIErender()
    });

     geometry = new THREE.PlaneGeometry(0.5,2);
        spring = createMesh(geometry,"spring.png");
        spring.position.set(1.39,yvalspring,2);
    // spring.material.color.setHex(0x666666);
        PIEaddElement(spring);
    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( xval, 0.64, 0 ),
    new THREE.Vector3( 1, 0.64, 0),
    );

    line = new THREE.Line( geometry, material );
    PIEaddElement( line );
 
    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( 1.55, -1, -1),
    new THREE.Vector3( 1.55, 0.15,-1),
    );

    line4 = new THREE.Line( geometry, material );

    PIEaddElement( line4 );
 


    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -3.5, -1 ),
            new THREE.Vector3( 1.55,-2.8, -1),
            );

            line6 = new THREE.Line( geometry, material );

    PIEaddElement( line6 );

    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -1, -1 ),
            new THREE.Vector3( 1.55, 0.15, -1),
            );

            line5 = new THREE.Line( geometry, material );

            PIEaddElement( line5 );



if (invert_mass_checker==1) {

	

    // var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    // var loader = new THREE.FontLoader();
    

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1.5m, height=1m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     dim_mass1 = new THREE.Mesh(textGeom, textMaterial );
    //     dim_mass1.position.set(-3,3,0);
        
    //     PIEaddElement(dim_mass1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });



    PIEremoveElement(arrowHelperfr)
            

            var dir = new THREE.Vector3( -1 , 0, 0 );
            fr=-1;
            //normalize the direction vector (convert to vector of length 1)
            dir.normalize();

            var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
            var lengtharrow = -(-3-xval)+2.5;
            var hex = 0xffffff;

            arrowHelperfr = new THREE.ArrowHelper( dir, origin, lengtharrow, hex,0.6,0.2);
            PIEaddElement( arrowHelperfr );
            PIErender();

    //         geometry = new THREE.PlaneGeometry(13,0.6);
    // block1=createMesh(geometry,"table.png");
    // block1.position.set(-5.5,-0.42,1);
    // block1.material.color.setHex(0x666666);
    //     PIEaddElement(block1);

    PIEremoveElement(block1);
    geometry = new THREE.PlaneGeometry(13,0.6);
    block1=createMesh(geometry,"table.png");
    block1.position.set(-5.5,-0.2,1);
    block1.material.color.setHex(0x666666);
    PIEaddElement(block1);

 // PIEtableSelect("Observation Table");
        // PIEupdateTableCell(4,1,1.5);
// geometry = new THREE.PlaneGeometry(1.5,2.4);
//     cube2=createMesh(geometry,"standmass.png");
    PIEremoveElement(cube2);
   

                                                                                                     // var geometry = new THREE.BoxGeometry( 1.5, 1);
    // geometry = new THREE.PlaneGeometry(2.4,1.5);
    // cube2=createMesh(geometry,"invertmass.png");
    // cube2.position.set(xval,yval-0.3,zval);
    // //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );

    


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,length1+0.5) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);



    invert_mass_checker=-1;
    change=-1;
    PIErender();

    }
    else{
    // 	PIEremoveElement(dim_mass1);

    // var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    // var loader = new THREE.FontLoader();
    

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1m, height=1.5m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     dim_mass1 = new THREE.Mesh(textGeom, textMaterial );
    //     dim_mass1.position.set(-3,3,0);
        
    //     PIEaddElement(dim_mass1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });


        PIEremoveElement(arrowHelperfr);
        var dir = new THREE.Vector3( -1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();
       
        var origin = new THREE.Vector3( xval-0.9, 0.5, 3 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperfr = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperfr );
        // PIEtableSelect("Observation Table");
        // PIEupdateTableCell(4,1,1);
    PIEremoveElement(cube2);
  cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);

    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);

    PIEremoveElement(block1);    
    geometry = new THREE.PlaneGeometry(13,0.6);
    block1=createMesh(geometry,"table.png");
    block1.position.set(-5.5,-0.42,1);
    block1.material.color.setHex(0x666666);
        PIEaddElement(block1);

        change=1;
        invert_mass_checker=1;
        PIErender();
    }
    // PIEchangeDisplayCheckbox("Camera Control", true);
}

function resetMass1(){
    PIEchangeInputSlider("Mass1",1);

}

function assign(){

    PIEremoveElement(cube2);
    PIEremoveElement(cube3);
    PIEremoveElement(nliney);
    PIEremoveElement(nline);
    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");


    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    var  height =length1/2;

    if(invert_mass_checker==1){
    

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval-0.2,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval-0.2,zval);

    }
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15;
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);


    // PIEremoveElement(texttest2);
    // var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialA = [ materialF ];
    // var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialS);
    //     texttest2 = new THREE.Mesh(textGeom, textMaterial );
    //     // texttest2.position.set(-3.5,0.9,4);
        
    //     PIEaddElement(texttest2);
    //     texttest2.position.set(1,yvalbox,zval2);
    //        PIErender()
    // });


    notif.visible=false;
    blue.visible=false;
    bmassnotify();
    bmassnotify2();
}

function resetMass2(){

    PIEchangeInputSlider("Weights",1);
}
function resetTable(){
   // PIEtableSelect("Observation Table");
   // PIEupdateTableCell(1,1,0);
   // PIEupdateTableCell(2,1,0);
   // PIEupdateTableCell(3,1,0);
   // PIEupdateTableCell(4,1,1);
}  
gem1=1;
function diagram(){
    if(gem1==1){
        
        fbd1.visible=true;
        fbd2.visible=true;
        gem1=-1;
        PIErender();
    }
    else{
        fbd1.visible=false;
        fbd2.visible=false;
        gem1=1;
        PIErender();
    }
        
}
function initialiseControls(){ 

    // PIEaddInputCheckbox("Camera Control", false, camnotify);
    
    PIEaddInputCheckbox("Invert Mass1",false,invert_mass);
    PIEaddInputSlider("Mass1", 1, bmassnotify, 1, 100,1);
    PIEaddInputSlider("Weights",1,bmassnotify2,1,100,1);
    // PIEaddInputCommand("Assign Weights",assign);
    PIEaddInputSlider("friction_coef",0.25, mew ,0, 1, 0.01);
    //PIEaddInputSlider("Mass2",1,bmassnotify2,0,100,1);
    // PIEaddDisplayText("Acceleration",0);
    //PIEaddInputSlider("g",9.8,bmassnotify,9.8,10,0.2);
    // PIEaddDisplayText("Spring Balance Reading",10);
    // PIEaddInputCommand("Free Body Diagrams",diagram);
    // PIEaddInputCommand("Reset Table",resetTable);
    // PIEaddInputCommand("Reset Mass1",resetMass1);
    // PIEaddInputCommand("Reset Weights",resetMass2);
}

// function(){ thehammer.velocity=PIEgetInputSlider("Hammer's Force"); }
function mew(){

mew_friction=PIEgetInputSlider("friction_coef");

    PIEremoveElement(text4);
var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mew_friction, 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text4 = new THREE.Mesh(textGeom, textMaterial );
        text4.position.set(-4,-1.5,0);
        
        PIEaddElement(text4);
        
        PIErender();
    });





}
function initialiseOtherVariables(){
    
}

function resetExperiment(){

   
        
 xval=-3.5;
 yval=0.8;
 zval=2;
 yvalbox=-3.5;
 stringy=-2.8;
 yvalspring=-1.70;
 xval2=1.5;
 yval2=-3;
 zval2=0;
 endx=-0.5;
 endy=0.6;
 endz=0;
 v=0;
 topstring=-1;
 cube3,fr=1;
 tension=0;
 length1=1.5;
 length2=1;
 change=1;
 invert_mass_checker=1;
 deletemass2=1;
 deletemass=1;
 // redtext.visible=false;
// red.visible=false;
// blue.visible=false;
// notif.visible=false;
// success.visible=false;

        PIEremoveElement(spring);
        PIEremoveElement(cube2);
        PIEremoveElement(cube3);
        PIEremoveElement(arrowHelper);
        PIEremoveElement(arrowHelperfr);
        PIEremoveElement(arrowHelperT);
        PIEremoveElement(line);
        PIEremoveElement(nline);
        PIEremoveElement(nliney);
        PIEremoveElement(line4);
        PIEremoveElement(line5);
        if(conclude6){conclude6.visible=true;}
        if(conclude5){conclude5.visible=true;}
    	if(conclude4){conclude4.visible=true;}
    	if(conclude3){conclude3.visible=true;}
    	if(conclude2){conclude2.visible=true;}
    	if(conclude1){conclude1.visible=true;}
    




        var Mass1=PIEgetInputSlider("Mass1");
        var Mass2=PIEgetInputSlider("Weights");

    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,(0.5+length1) ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);
        
        PIEremoveElement(line6);


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15; 
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);
       
        geometry = new THREE.PlaneGeometry(0.5,2);
        spring = createMesh(geometry,"spring.png");
        spring.position.set(1.39,-1.5,2);
    // spring.material.color.setHex(0x666666);
        PIEaddElement(spring);
        PIErender();

        var dir = new THREE.Vector3( 0, 1, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3(  1.43, -0.66, 1 );
        var length = 0.5;
        var hex = 0xffffff;

        var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex,0.3,0.2);
        PIEaddElement( arrowHelper );



        var dir = new THREE.Vector3( 1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3( -1, 0.66, 2 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperT );


        var dir = new THREE.Vector3( -1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();
       
        var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperfr = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperfr );


    // geometry = new THREE.PlaneGeometry(1.5,2.4);
    // cube2=createMesh(geometry,"standmass.png");
    // cube2.position.set(xval,yval,zval);
    // //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );


    // geometry = new THREE.PlaneGeometry(2.4,1.5);
    // cube3=createMesh(geometry,"invertmass.png");
    // cube3.position.set(xval2,yvalbox,zval2);
    // // cube3.position.set(1,-2,0);
    // PIEaddElement( cube3 );  

    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( xval, 0.64, 0 ),
    new THREE.Vector3( 1, 0.64, 0),
    );

    line = new THREE.Line( geometry, material );
    PIEaddElement( line );
 
    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( 1.55, -1, -1),
    new THREE.Vector3( 1.55, 0.15,-1),
    );

    line4 = new THREE.Line( geometry, material );

    PIEaddElement( line4 );
 


    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -3.5, -1 ),
            new THREE.Vector3( 1.55,-2.8, -1),
            );

            line6 = new THREE.Line( geometry, material );

    PIEaddElement( line6 );

    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -1, -1 ),
            new THREE.Vector3( 1.55, 0.15, -1),
            );

            line5 = new THREE.Line( geometry, material );

            PIEaddElement( line5 );

       
    
         // text4.visible=false;
         if(text){text.visible=false;}
         if(text2){text2.visible=false;}
         if(t2){t2.visible=false;}
         if(t3){t3.visible=false;}
         if(t0){t0.visible=true;}
         if(t1){t1.visible=true;}



         // PIEaddInputCheckbox("Camera Control", false, camnotify);
    PIEchangeInputCheckbox("Invert Mass1",false);
    // PIEchangeInputSlider("Mass1", 0);
    PIEchangeInputSlider("friction_coef", 0.25);
    // PIEchangeInputSlider("Mass2",0);
    // PIEchangeDisplayText("Acceleration",0);
    //PIEaddInputSlider("g",9.8,bmassnotify,9.8,10,0.2);
    // PIEaddDisplayText("Spring Balance Reading",10);
// PIEcamera.position.set(-0.05527074424515538, 2.9731239686405893, 6.0079166151350645);
    // PIEcamera.rotation.set(-0.459533369319057, -0.008245089377707907, -0.0040801596752513564);
    // hitonce=false;
    // counter=0;
    // theta=0;
    // ballmass=1, ballradius=0.1;

    // PIEchangeInputSlider("Hammer's Force", 5);
    // PIEchangeInputSlider("Ball's Mass", 1);

    // if(PIElastUpdateTime) 
    //     initialiseOtherVariables();

 kl = 1;
    PIEstartAnimation();

}

// var PIEtableData = [];
// var PIEtableRows = [];
// var PIEtableNames = [];
// var PIEtables = [];
// var PIEcurrentTable;
// var PIEdraggedTable;
// var PIEtableChangeHandlers = [];



// function PIEtableDragStart(b) {
//     var a;
//     var c;
//     PIEdraggedTable = b.target;
//     a = window.getComputedStyle(PIEdraggedTable, null);
//     c = (parseInt(a.getPropertyValue("left")) - b.clientX) + "," + (parseInt(a.getPropertyValue("top")) - b.clientY);
//     b.dataTransfer.setData("Text", c);
//     b.dataTransfer.dropEffect = "move";
//     b.dataTransfer.setData("aTable", c);
//     return (false)
// }
// function PIEtableDrop(a) {
//     var b;
//     if (PIEdraggedTable != null) {
//         b = a.dataTransfer.getData("Text").split(",");
//         PIEdraggedTable.style.left = (a.clientX + parseInt(b[0], 10)) + "px";
//         PIEdraggedTable.style.top = (a.clientY + parseInt(b[1], 10)) + "px";
//         PIEdraggedTable = null;
//         a.stopPropagation();
//         a.preventDefault();
//         return false
//     }
// }
// function PIEtableDragEnter(a) {
//     a.preventDefault();
//     return (false)
// }
// function PIEtableDragOver(a) {
//     a.preventDefault();
//     return (false)
// }
// function PIEtableSetInputChange(a) {
//     var b;
//     var d;
//     var c;
//     PIEtableChangeHandlers[PIEcurrentTable] = a;
//     for (b = 0; (b < PIEtableRows[PIEcurrentTable].length); b++) {
//         for (d = 0; (d < PIEtableData[PIEcurrentTable][b].length); d++) {
//             if ((PIEtableData[PIEcurrentTable][b][d] != null) && (PIEtableData[PIEcurrentTable][b][d].children.length > 0)) {
//                 c = PIEtableData[PIEcurrentTable][b][d].children[0];
//                 c.addEventListener("change", PIEtableInputChange, false)
//             }
//         }
//     }
// }
// function PIEtableInputChange(a) {
//     a.preventDefault();
//     PIEtableInputHandleEvent(a, PIEtableChangeHandlers);
//     return (false)
// }
// function PIEtableInputHandleEvent(d, g) {
//     var f;
//     var e;
//     var h;
//     var c;
//     var a;
//     var b;
//     var i;
//     i = false;
//     f = d.target;
//     for (e = 0; (i == false) && (e < PIEtables.length); e++) {
//         for (h = 0; (i == false) && (h < PIEtableRows[e].length); h++) {
//             for (c = 0; (i == false) && (c < PIEtableData[e][h].length); c++) {
//                 if ((PIEtableData[e][h][c] != null) && (f == PIEtableData[e][h][c].children[0])) {
//                     i = true
//                 }
//             }
//         }
//     }
//     if (i == true) {
//         e--;
//         h--;
//         c--;
//         if (g[e] != null) {
//             g[e](h, c, f.value)
//         }
//     }
// }
// function PIEtableSelect(c) {
//     var a;
//     var b;
//     PIEcurrentTable = 0;
//     for (a = 0; (a < PIEtableNames.length); a++) {
//         if (c == PIEtableNames[a]) {
//             PIEcurrentTable = a
//         }
//     }
// }
// function PIEcreateTable(i, n, g, d) {
//     var c;
//     var b;
//     var m;
//     var f;
//     var a;
//     var h;
//     var l;
//     var k;
//     var j;
//     var e;
//     PIEtableChangeHandlers.push(null);
//     PIEtableNames.push(i);
//     PIEtableRows.push(new Array(0));
//     PIEtableData.push(new Array(0));
//     PIEtableChangeHandlers.push(null);
//     PIEcurrentTable = PIEtableNames.length - 1;
//     c = document.createElement("div");
//     c.draggable = true;
//     c.addEventListener("dragstart", PIEtableDragStart, false);
//     c.style.border = "2px solid white";
//     c.style.borderRadius = "10px";
//     c.style.display = "inline-block";
//     c.style.position = "absolute";
//     c.style.top = "20px";
//     c.style.color = "white";
//     document.body.appendChild(c);
//     b = document.createElement("div");
//     b.style.display = "inline-block";
//     b.style.width = "100%";
//     b.style.padding = "0px";
//     c.appendChild(b);
//     m = document.createElement("p");
//     m.style.display = "inline-block";
//     m.style.width = "100%";
//     m.style.margin = "auto";
//     m.style.border = "2 px solid white";
//     m.style.borderRadius = "10px";
//     m.style.backgroundColor = "#0020AA";
//     b.appendChild(m);
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     a = document.createElement("img");
//     a.src = "../PIE/images/TableAdd.png";
//     a.alt = "add";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     a = document.createElement("img");
//     a.src = "../PIE/images/TableDelete.png";
//     a.alt = "delete";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     a = document.createElement("span");
//     a.style.padding = "5px";
//     a.style.margin = "auto";
//     a.style.align = "center";
//     a.innerHTML = "<b>" + i + "</b>";
//     m.appendChild(a);
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     f.style.align = "right";
//     f.addEventListener("click", PIEtoggleTable, false);
//     m.appendChild(f);
//     a = document.createElement("img");
//     a.src = "../PIE/images/TableFold.png";
//     a.alt = "delete";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     f.appendChild(a);
//     a = document.createElement("div");
//     h = document.createElement("table");
//     h.style.display = "inline-block";
//     h.style.border = "1px solid white";
//     h.style.borderRadius = "10px";
//     h.style.padding = "0px";
//     h.style.backgroundColor = "#0040BB";
//     PIEtables.push(h);
//     a.appendChild(h);
//     c.appendChild(a);
//     for (j = 0; j < n; j++) {
//         for (e = 0; e < g; e++) {
//             if (j == 0) {
//                 k = PIEcreateTableCell(j, e, d)
//             } else {
//                 k = PIEcreateTableCell(j, e, false)
//             }
//         }
//     }
//     PIEupdateTable(PIEtables[PIEcurrentTable])
// }
// function PIEtoggleTable(e) {
//     var g;
//     var c;
//     var a;
//     var h;
//     var f;
//     var d;
//     var b;
//     e = e || window.event;
//     e.defaultPrevented = true;
//     g = null;
//     if (e.target) {
//         g = e.target
//     } else {
//         if (e.srcElement) {
//             g = e.srcElement
//         }
//     }
//     if (g != null) {
//         if (g.nodeType == 3) {
//             g = g.parentNode
//         }
//         a = ((g.parentNode).parentNode).parentNode;
//         h = a.children;
//         for (d = 0; (d < h.length); d++) {
//             f = h[d].children;
//             for (b = 0; (b < f.length); b++) {
//                 if (f[b].nodeName == "TABLE") {
//                     c = f[b];
//                     if (c.style.display == "inline-block") {
//                         c.style.display = "none"
//                     } else {
//                         c.style.display = "inline-block"
//                     }
//                 }
//             }
//         }
//     }
// }
// function PIEupdateTable() {
//     var c;
//     var d;
//     var a;
//     var b;
//     PIEtables[PIEcurrentTable].innerHTML = "";
//     for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
//         a = PIEtableRows[PIEcurrentTable][c];
//         PIEtables[PIEcurrentTable].appendChild(a);
//         for (d = 0; (d < PIEtableData[PIEcurrentTable][c].length); d++) {
//             b = PIEtableData[PIEcurrentTable][c][d];
//             a.appendChild(b)
//         }
//     }
// }
// function PIEexpandCell(a) {
//     if ((a.target.size + 6) < a.target.value.length) {
//         a.target.size = a.target.value.length - 6
//     }
// }
// function PIEcreateInputElement(b, c) {
//     var a;
//     a = document.createElement("input");
//     a.style.color = "#FFFFFF";
//     a.style.backgroundColor = "#0060CC";
//     a.style.border = "2px solid red";
//     if (b >= 7) {
//         a.size = (b - 6)
//     } else {
//         a.size = 1
//     }
//     a.addEventListener("keyup", PIEexpandCell, false);
//     if (PIEtableChangeHandlers[PIEcurrentTable] != null) {
//         a.addEventListener("change", PIEtableInputChange, false)
//     }
//     a.addEventListener("change", PIEtableInputChange, false);
//     a.value = c;
//     return (a)
// }
// function PIEsetColumnInput(a, b, e) {
//     var d;
//     var c;
//     for (c = 0; (c < PIEtableRows[PIEcurrentTable].length) && (PIEtableRows[PIEcurrentTable][c] != null); c++) {
//         if (PIEtableData[PIEcurrentTable][c].length > a) {
//             if (PIEtableData[PIEcurrentTable][c][a] != null) {
//                 PIEtableData[PIEcurrentTable][c][a].innerHTML = "";
//                 PIEtableData[PIEcurrentTable][c][a].appendChild(PIEcreateInputElement(b, e))
//             }
//         }
//     }
// }
// function PIEsetRowInput(e, a, d) {
//     var c;
//     var b;
//     if ((PIEtableRows[PIEcurrentTable].length > e) && (PIEtableRows[PIEcurrentTable][e] != null)) {
//         for (b = 0; (b < PIEtableData[PIEcurrentTable][e].length); b++) {
//             if (PIEtableData[PIEcurrentTable][e][b] != null) {
//                 PIEtableData[PIEcurrentTable][e][b].innerHTML = "";
//                 PIEtableData[PIEcurrentTable][e][b].appendChild(PIEcreateInputElement(a, d))
//             }
//         }
//     }
// }
// function PIEsetCellInput(e, a, b, d) {
//     var c;
//     while (PIEtableRows[PIEcurrentTable].length <= e) {
//         PIEtableRows[PIEcurrentTable].push(null);
//         PIEtableData[PIEcurrentTable].push(new Array(0))
//     }
//     if (PIEtableRows[PIEcurrentTable][e] == null) {
//         PIEtableRows[PIEcurrentTable][e] = document.createElement("tr")
//     }
//     while (PIEtableData[PIEcurrentTable][e].length <= a) {
//         PIEtableData[PIEcurrentTable][e].push(null)
//     }
//     if (PIEtableData[PIEcurrentTable][e][a] == null) {
//         PIEtableData[PIEcurrentTable][e][a] = document.createElement("td")
//     }
//     PIEtableData[PIEcurrentTable][e][a].innerHTML = "";
//     c = PIEcreateInputElement(b, d);
//     PIEtableData[PIEcurrentTable][e][a].appendChild(c)
// }
// function PIEcreateTableCell(c, b, d) {
//     var a;
//     a = (d == true) ? "th" : "td";
//     while (PIEtableRows[PIEcurrentTable].length <= c) {
//         PIEtableRows[PIEcurrentTable].push(null);
//         PIEtableData[PIEcurrentTable].push(new Array(0))
//     }
//     if (PIEtableRows[PIEcurrentTable][c] == null) {
//         PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
//     }
//     while (PIEtableData[PIEcurrentTable][c].length <= b) {
//         PIEtableData[PIEcurrentTable][c].push(null)
//     }
//     if (PIEtableData[PIEcurrentTable][c][b] == null) {
//         PIEtableData[PIEcurrentTable][c][b] = document.createElement(a)
//     } else {
//         PIEtableData[PIEcurrentTable][c][b].innerHTML = ""
//     }
// }
// function PIEupdateTableRow(c, a) {
//     var b;
//     for (b = 0; b < a.length; b++) {
//         PIEupdateTableCell(c, b, a[b])
//     }
// }
// function PIEupdateTableColumn(b, a) {
//     var c;
//     for (c = 0; c < a.length; c++) {
//         PIEupdateTableCell(c, b, a[b])
//     }
// }
// function PIEupdateTableCell(c, a, b) {
//     while (PIEtableRows[PIEcurrentTable].length <= c) {
//         PIEtableRows[PIEcurrentTable].push(null);
//         PIEtableData[PIEcurrentTable].push(new Array(0))
//     }
//     if (PIEtableRows[PIEcurrentTable][c] == null) {
//         PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
//     }
//     while (PIEtableData[PIEcurrentTable][c].length <= a) {
//         PIEtableData[PIEcurrentTable][c].push(null)
//     }
//     if (PIEtableData[PIEcurrentTable][c][a] == null) {
//         PIEtableData[PIEcurrentTable][c][a] = document.createElement("td")
//     }
//     if (PIEtableData[PIEcurrentTable][c][a].children.length == 0) {
//         PIEtableData[PIEcurrentTable][c][a].innerHTML = b
//     } else {
//         PIEtableData[PIEcurrentTable][c][a].children[0].value = b
//     }
// }
// function PIEsetTableRowStyle(d, a, c) {
//     var b;
//     if (d < PIEtableRows[PIEcurrentTable].length) {
//         for (b = 0; (b < PIEtableData[PIEcurrentTable][d].length); b++) {
//             PIEsetTableCellStyle(d, b, a, c)
//         }
//     }
// }
// function PIEsetTableColumnStyle(a, b, d) {
//     var c;
//     for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
//         if (a < PIEtableData[PIEcurrentTable][c].length) {
//             PIEsetTableCellStyle(c, a, b, d)
//         }
//     }
// }
// function PIEsetTableCellStyle(d, a, b, c) {
//     if (d < PIEtableRows[PIEcurrentTable].length) {
//         if (a < PIEtableData[PIEcurrentTable][rowI].length) {
//             if (b == "color") {
//                 PIEtableData[PIEcurrentTable][d][a].style.color = c
//             } else {
//                 if (b == "backgroundColor") {
//                     PIEtableData[PIEcurrentTable][d][a].style.backgroundColor = c
//                 } else {
//                     if (b == "margin") {
//                         PIEtableData[PIEcurrentTable][d][a].style.margin = c
//                     } else {
//                         if (b == "padding") {
//                             PIEtableData[PIEcurrentTable][d][a].style.padding = c
//                         } else {
//                             if (b == "border") {
//                                 PIEtableData[PIEcurrentTable][d][a].style.border = c
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Friction Illustration </h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a block resting on a table with one end attached to a string passing over a pulley . The other end of the string is attached to a spring balance connected to a block whose weight can be changed.</p>";
    helpContent = helpContent + "<h3>Setup stage</h3>";
    helpContent = helpContent + "<p>The top right side controls take input of mass of block, weights and coefficient of friction.It also has a reset button for Mass1,Weights and Table</p>";
    helpContent = helpContent + "<p>You have access to coefficient of friction also</p>";
    helpContent = helpContent + "<p>Free Body Diagrams can be seen once the command is clicked in control panel </p>";

    helpContent = helpContent + "<p>The slider allows you to change the mass, weights  and friction coefficent.</p>"
    helpContent = helpContent + "<p>Once you decide on that, you can enter the animation stage by clicking Assign Masses and then the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>The block only moves if the the weights >= (coefficient of friction)*blockmass . This is obtained by the force equations.";
    helpContent = helpContent +	"You can also Invert the dimensions of the block to change area of contact. Also the details are displayed on a table in left corner  ";
    helpContent = helpContent +".Until the block moves thetension is equal to weight and and hence friction.</p> ";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animation by using the speed control buttons</p>";
    helpContent = helpContent + "<p>The round button is for resetting the animation.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows  a block on table attached to a spring balance over a pulley.</p>";
    infoContent = infoContent + "<h3>Friction</h3>";
    infoContent = infoContent + "<p>Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.</p>";
    infoContent = infoContent + "<p>It does not depend on the area of contact between surfaces.</p>";
    infoContent = infoContent + "<p>Here friction is equal to =  (coefficient of friction)*(Normal Reaction) </p>";
    infoContent = infoContent + "<p>T-m1*g=m1*a and m2*g-T=m2*a</p> ";
    infoContent = infoContent + "<p>where T = tension in the string , m2=mass of weights , m1=mass of block and a=acceeration </p> ";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


}else{



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
var table1,table11,table41,table51,table61,table71;
var plane1,plane20,plane22,plane21,plane23,plane24,plane4,plane5,plane6,plane9,plane,plane10,plane11,plane12,plane14,plane13,plane15;
var limit;
// function test(){
//     PIEstartAnimation();
//     PIEstopAnimation();
// }
//does what it says
function textarea(){



    var geometry = new THREE.PlaneGeometry( 5.8, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane20 = new THREE.Mesh( geometry, material );
    plane20.position.set(2.7,5.8,1);
    plane20.receiveShadow=true;
    PIEaddElement(plane20);

    var geometry = new THREE.PlaneGeometry( 0.1, 2.37, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane21 = new THREE.Mesh( geometry, material );
    plane21.position.set(5.55,4.65,1);
    plane21.receiveShadow=true;
    PIEaddElement(plane21);
       

    var geometry = new THREE.PlaneGeometry( 0.1, 2.37, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane22 = new THREE.Mesh( geometry, material );
    plane22.position.set(-0.2,4.65,1);
    plane22.receiveShadow=true;
    PIEaddElement(plane22);
       
    var geometry = new THREE.PlaneGeometry( 5.8, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane23 = new THREE.Mesh( geometry, material );
    plane23.position.set(2.7,3.5,1);
    plane23.receiveShadow=true;
    PIEaddElement(plane23);

    var geometry = new THREE.PlaneGeometry( 6.38, 2.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane24 = new THREE.Mesh( geometry, material );
    plane24.position.set(-10.25,3.5,-4.99);
    plane24.receiveShadow=true;
    PIEaddElement(plane24);

    var geometry = new THREE.PlaneGeometry( 6.5, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane4 = new THREE.Mesh( geometry, material );
    plane4.position.set(-10.2,5,-4.99);
    plane4.receiveShadow=true;
    PIEaddElement(plane4);

    var geometry = new THREE.PlaneGeometry( 0.1, 3, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane5 = new THREE.Mesh( geometry, material );
    plane5.position.set(-7,3.55,-4.99);
    plane5.receiveShadow=true;
    PIEaddElement(plane5);
       

    var geometry = new THREE.PlaneGeometry( 0.1, 3, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane6 = new THREE.Mesh( geometry, material );
    plane6.position.set(-13.5,3.55,-4.99);
    plane6.receiveShadow=true;
    PIEaddElement(plane6);
       
    var geometry = new THREE.PlaneGeometry( 6.6, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane9 = new THREE.Mesh( geometry, material );
    plane9.position.set(-10.25,2,-4.99);
    plane9.receiveShadow=true;
    PIEaddElement(plane9);

    var geometry = new THREE.PlaneGeometry( 6.38, 2.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, material );
    plane.position.set(-10.25,3.5,-4.99);
    plane.receiveShadow=true;
    PIEaddElement(plane);

    var geometry = new THREE.PlaneGeometry( 6.14, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane10 = new THREE.Mesh( geometry, material );
    plane10.position.set(6.83,0,0);
    plane10.receiveShadow=true;
    PIEaddElement(plane10);

    var geometry = new THREE.PlaneGeometry( 0.1, 1.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane11 = new THREE.Mesh( geometry, material );
    plane11.position.set(3.8,-1,0);
    plane11.receiveShadow=true;
    PIEaddElement(plane11);
       

    var geometry = new THREE.PlaneGeometry( 0.1, 1.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane12 = new THREE.Mesh( geometry, material );
    plane12.position.set(9.85,-1,0);
    plane12.receiveShadow=true;
    PIEaddElement(plane12);
       
    var geometry = new THREE.PlaneGeometry( 6.15, 0.1, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x666666, side: THREE.DoubleSide} );
    plane13 = new THREE.Mesh( geometry, material );
    plane13.position.set(6.82,-2,0);
    plane13.receiveShadow=true;
    PIEaddElement(plane13);

    var geometry = new THREE.PlaneGeometry( 6, 1.9, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane14 = new THREE.Mesh( geometry, material );
    plane14.position.set(6.84,-1,0);
    plane14.receiveShadow=true;
    PIEaddElement(plane14);


    var geometry = new THREE.PlaneGeometry( 6, 2.5, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    plane15 = new THREE.Mesh( geometry, material );
    plane15.position.set(2.8,4.8,0);
    plane15.receiveShadow=true;
    PIEaddElement(plane15);


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Observation Table" , 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(5,0.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Acceleration in m/s2 = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(4,-0.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Mass1 Info " , 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-11,5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Area of Contact,Mass1 (m2) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-12,4,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });




     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Length of Mass1 (m) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-12,3.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Breadth of Mass1 (m) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-12,3,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Width of Mass1 (m) = " , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        table1 = new THREE.Mesh(textGeom, textMaterial);
        table1.position.set(-12,2.5,0);
        
        PIEaddElement(table1);
        table1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });




     var mf2 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var ms2 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    // var materialArray = [ materialFront,materialSide ];
    
    loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    var textGeom = new THREE.TextGeometry("You can check that the  ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(ms2);
        conclude1 = new THREE.Mesh(textGeom, textMaterial );
        conclude1.position.set(0,4.5,0);
        
        PIEaddElement(conclude1);
        conclude1.visible=true;
        // conclude1.style.textdecoration="underline";
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    loader = new THREE.FontLoader();
    var mf3 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    var ms3 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    // var materialArray = [ materialFront ];
     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("\"Frictional Force\"", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(ms3);
        conclude2 = new THREE.Mesh(textGeom, textMaterial );
        conclude2.position.set(3,4.5,0);

        
        PIEaddElement(conclude2);
        conclude2.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var mf4 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var ms4 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("is Independent of  ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf4);
        conclude3= new THREE.Mesh(textGeom, textMaterial );
        conclude3.position.set(0,4,0);
        
        PIEaddElement(conclude3);
        conclude3.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });
    var mf5 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    var mf5 = new THREE.MeshBasicMaterial( { color: 0xfff9e5 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("\"Area of Contact of Mass1\"", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf5);
        conclude4 = new THREE.Mesh(textGeom, textMaterial );
        conclude4.position.set(2.3,4,0);
        
        PIEaddElement(conclude4);
        conclude4.visible=true;

        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var mf9 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var mf9 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Note:-", 
        {
            size: 0.25, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf9);
        conclude5 = new THREE.Mesh(textGeom, textMaterial );
        conclude5.position.set(0,5.5,0);
        
        PIEaddElement(conclude5);
        conclude5.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



     var mf1 = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var ms1  = new THREE.MeshBasicMaterial( { color: 0x62d9f7 } );
    var m1 = [ ms1];
    
    loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("To invert Mass1 tick \"Invert Mass1\". ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"       
        });  
    var textMaterial = new THREE.MeshBasicMaterial(ms1);
        conclude6 = new THREE.Mesh(textGeom, textMaterial );
        conclude6.position.set(0,5,0);
        
        PIEaddElement(conclude6);
        conclude6.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

}

function initialiseScene(){

    textarea();
   
    geometry = new THREE.PlaneGeometry(0.5,2);
    spring = createMesh(geometry,"spring.png");
    spring.position.set(1.39,-1.5,2);
    // spring.material.color.setHex(0x666666);
        PIEaddElement(spring);

    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");
    
    var  length1=0.1*Mass1;
    var  length2=0.1*Mass2;
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);

 // geometry = new THREE.PlaneGeometry(13,4);
 //    ppl = createMesh(geometry,"people.png");
 //    ppl.position.set(-6.5,-4.5,2);
 //    // ppl.material.color.setHex(0x666666);
 //        PIEaddElement(ppl);

    // geometry = new THREE.PlaneGeometry(1.5,2.4);
    // cube2=createMesh(geometry,"standmass.png");
    // cube2.position.set(xval,yval,zval);
    // //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );
    // cube3.position.set(-4,0.7,2);
    // cube3.material.color.setHex(0x666666);
        // PIEaddElement(cube3);

    geometry = new THREE.PlaneGeometry(13,0.6);
    block1=createMesh(geometry,"table.png");
    block1.position.set(-5.5,-0.42,1);
    block1.material.color.setHex(0x666666);
        PIEaddElement(block1);

        PIErender();

   geometry = new THREE.PlaneGeometry(6.5,0.9);
    blue=createMesh(geometry,"yellow.png");
    blue.position.set(4.2,5.1,1);

    PIEaddElement( blue );
    blue.visible=false;

   geometry = new THREE.PlaneGeometry(4.5,0.7);
    green=createMesh(geometry,"green.png");
    green.position.set(4.2,5,1);
     PIEaddElement( green );
    green.visible=false;
   geometry = new THREE.PlaneGeometry(4.5,0.7);
    red=createMesh(geometry,"red.png");
    red.position.set(4.2,5,1);
     PIEaddElement( red );
     red.visible=false;

   geometry = new THREE.PlaneGeometry(4.5,0.7);
    yellow=createMesh(geometry,"yellow.png");
    yellow.position.set(4.2,5,1);
     PIEaddElement( yellow );
    yellow.visible=false;


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15; 
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    // cube3.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );


    nliney.position.set(xval2,yvalbox,zval2);
    //  cube3.position.set(xval2,yvalbox,zval2);
    // // cube3.position.set(1,-2,0);
    // PIEaddElement( cube3 );   
    

    


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Frictional force =  fr =" , 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t0 = new THREE.Mesh(textGeom, textMaterial );
        t0.position.set(4,-1,0);
        
        PIEaddElement(t0);
        t0.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Spring Balance = Tension =T=", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t1 = new THREE.Mesh(textGeom, textMaterial );
        t1.position.set(4,-1.5,0);
        
        PIEaddElement(t1);
        t1.visible=false;

        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



    geometry = new THREE.PlaneGeometry(3,2.5);
    fbd1 = createMesh(geometry,"fbd1.png");
    fbd1.position.set(-6,2,2);
    // spring.material.color.setHex(0x666666);
    fbd1.visible=false;
    PIEaddElement(fbd1);

    geometry = new THREE.PlaneGeometry(1.3,3);
    fbd2 = createMesh(geometry,"fbd2.png");
    fbd2.position.set(-1,-2.5,2);
    // spring.material.color.setHex(0x666666);
    fbd2.visible=false;
    PIEaddElement(fbd2);
    
    mass=PIEgetInputSlider("Mass1");


    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest = new THREE.Mesh(textGeom, textMaterial );
        texttest.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest);
        
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });

    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest2 = new THREE.Mesh(textGeom, textMaterial );
        // texttest2.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest2);
        texttest2.position.set(1,yvalbox,zval2);
           PIErender()
    });

        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
     



    

    PIErender();
}



// function masschange(){

// PIEremoveElement(cube2);
//      cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
//     cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,1.5 ),  cubeMaterial);
//     cube2.rotation.y += 0.4;
//     cube2.rotation.x +=0.15; 
//     cube2.rotation.z+=-0.05;
//     PIEaddElement( cube2 );
//     cube2.position.set(xval,yval,zval);
//     edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,1.5) );
//     nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
//     nline.rotation.y += 0.4;
//     nline.rotation.x += 0.15;
//     nline.rotation.z +=-0.05;
//     PIEaddElement( nline );
//     nline.position.set(xval,yval,zval);

// PIEremoveElement(cube3);

//     cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
//     cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,1.5 ),  cubeMaterial);
//     cube3.rotation.y += 0.4;
//     cube3.rotation.x +=0.15; 
//     cube3.rotation.z+=-0.05;
//     PIEaddElement( cube3 );
//     // cube3.position.set(xval,yval,zval);
//     edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,1.5) );
//     nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
//     nliney.rotation.y += 0.4;
//     nliney.rotation.x += 0.15;
//     nliney.rotation.z +=-0.05;
//     PIEaddElement( nliney );


//     nliney.position.set(xval2,yvalbox,zval2);

// }



function handleChange(row, col, value)
{
    /* Set current Table to Copy Table */
    PIEtableSelect("Copy Table");
    /* copy cell content to Copy Table */
    PIEupdateTableCell(row, col, value);
}


function loadExperimentElements(){
    var loader, tex, material, geometry;

    PIEsetExperimentTitle("Friction Illustration");
    PIEsetDeveloperName("Anuroop Gubbala");
    //PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseControls();
    initialiseScene();

  
    PIEsetAreaOfInterest(-20,20,17,-17);
    // PIEscene.background=new THREE.Color( 0xffa64d );
    PIEscene.background=new THREE.Color(0x23231a);


    var mf6 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var ms6 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Acceleration of Mass1 is 0 ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf6);
        redtext = new THREE.Mesh(textGeom, textMaterial );
        redtext.position.set(2.5,4.7,2);
        
        PIEaddElement(redtext);
        redtext.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

    


    var mf7 = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var  = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    
    loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Click \"Assign Weights\" Before Starting", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(mf7);
        notif = new THREE.Mesh(textGeom, textMaterial );
        notif.position.set(2,4.8,2);
        
        PIEaddElement(notif);
        notif.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

    
    // PIEcreateTable("Observation Table", 8, 3, false);

    // PIEsetRowInput(1, 28, "Acceleration");
    // PIEsetRowInput(2, 28, "Spring Balance Reading");
    // PIEsetRowInput(3, 28, "Frictional Force");
    // PIEsetRowInput(4,28,"Area of Contact of Mass1");
    // PIEsetRowInput(5,20,"Length of Mass1");
    // PIEsetRowInput(6,20,"Height of Mass1");
    // PIEsetRowInput(7,20,"Width of Mass1");
    // // PIEsetTablerowStyle(1, 2,"Acceleration");
    // // PIEsetRowInput(3, 4, "lmno");
    
    // PIEtableSelect("Observation Table");
    // PIEupdateTableCell(1,2,"m/s2");
    // PIEupdateTableCell(2,2,"N");
    // PIEupdateTableCell(3,2,"N");
    // PIEupdateTableCell(4,2,"m2");
    // PIEupdateTableCell(5,2,"m");
    // PIEupdateTableCell(6,2,"m");
    // PIEupdateTableCell(7,2,"m");
    material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( xval, 0.64, 0 ),
    new THREE.Vector3( 1, 0.64, 0),
    );

    line = new THREE.Line( geometry, material );
    PIEaddElement( line );

    var geometry = new THREE.RingGeometry( 0.5,0.25,32,32);
    var material = new THREE.MeshLambertMaterial( { color: 0xea4b4b, side: THREE.DoubleSide } );
    var pulley = new THREE.Mesh( geometry, material );


    pulley.position.set(1,0.15,0);
    PIEaddElement(pulley);

    

    
    

    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("T", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        ttext = new THREE.Mesh(textGeom, textMaterial );
        ttext.position.set(0.4,0.8,0);
        
        PIEaddElement(ttext);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("T", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        ttext = new THREE.Mesh(textGeom, textMaterial );
        ttext.position.set(1.7,-0.6,0);
        
        PIEaddElement(ttext);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("fr", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        ttext = new THREE.Mesh(textGeom, textMaterial );
        ttext.position.set(-5.5,0.2,0);
        
        PIEaddElement(ttext);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Mass1", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        textMesh1 = new THREE.Mesh(textGeom, textMaterial );
        textMesh1.position.set(-4,3,0);
        
        PIEaddElement(textMesh1);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
     });

    //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1m, height=1.5m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     dim_mass1 = new THREE.Mesh(textGeom, textMaterial );
    //     dim_mass1.position.set(-3,3,0);
        
    //     PIEaddElement(dim_mass1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    //  });

    var mat = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });
    

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Coefficient of Friction=", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        textMesh1 = new THREE.Mesh(textGeom, textMaterial );
        textMesh1.position.set(-7,-1.5,0);
        
        PIEaddElement(textMesh1);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

        var newfrictioncoeff=PIEgetInputSlider("friction_coef");


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("0.25", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text4 = new THREE.Mesh(textGeom, textMaterial );
        text4.position.set(-4,-1.5,0);
        
        PIEaddElement(text4);
        // text4.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Weights", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        textMesh1 = new THREE.Mesh(textGeom, textMaterial );
        textMesh1.position.set(3,-3.8,0);
        
        PIEaddElement(textMesh1);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });
        

    //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1.5m, height=1m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     textMesh1 = new THREE.Mesh(textGeom, textMaterial );
    //     textMesh1.position.set(4,-3.8,0);
        
    //     PIEaddElement(textMesh1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });


        var dir = new THREE.Vector3( 0, 1, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3( 1.43, -0.6, 1 );
        var length = 0.5;
        var hex = 0xffffff;

        var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex,0.3,0.2);
        PIEaddElement( arrowHelper );


        var dir = new THREE.Vector3( 1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3( -1, 0.66, 0 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperT );


        var dir = new THREE.Vector3( -1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();
       
        var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperfr = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperfr );
   

        

    var mat = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geo = new THREE.Geometry();
    geo.vertices.push(
    new THREE.Vector3(  0.15,-0.14, 0 ),
    new THREE.Vector3(  1, 0.15, 0),
    );

    var line2 = new THREE.Line( geo, mat );
    PIEaddElement( line2 );


    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, topstring, -1 ),
            new THREE.Vector3( 1.55, 0.15, -1),
            );

            line5 = new THREE.Line( geometry, mat );

            PIEaddElement( line5 );
            

    var mat = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geo = new THREE.Geometry();
    geo.vertices.push(
    new THREE.Vector3(  0.5,-0.5, 0 ),
    new THREE.Vector3(  1, 0.15, 0),
    );

    line3 = new THREE.Line( geo, mat );
    PIEaddElement( line3 );



    // var mass=PIEgetInputSlider("Mass1");
    // var length=0.03;

    // var geometry = new THREE.BoxGeometry(1,1.5);
    // var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    //  cube2 = new THREE.Mesh( geometry, material );
    // cube2.position.set(xval,yval,zval);
    //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );



    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( 1.55, -1, -1),
    new THREE.Vector3( 1.55, 0.15,-1),
    );

    line4 = new THREE.Line( geometry, material );

    PIEaddElement( line4 );
 

    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -3.5, -1 ),
            new THREE.Vector3( 1.55,-2.8, -1),
            );

            line6 = new THREE.Line( geometry, material );

    PIEaddElement( line6 );



    // var geometry = new THREE.RingGeometry( 0.5,0.25,32,32);
    // var material = new THREE.MeshLambertMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    // var pulley = new THREE.Mesh( geometry, material );

    // var geometry = new THREE.BoxGeometry( 1.5, 1);
    // var material = new THREE.MeshLambertMaterial( {color: 0x00ffb1} );
    // cube3 = new THREE.Mesh( geometry, matecube3rial );
    cube3.position.set(xval2,yvalbox,zval2);
    // cube3.position.set(1,-2,0);
    PIEaddElement( cube3 );   


    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("Spring Balance "+" = " +tension+" N ", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialFront);
    //     textMesh1 = new THREE.Mesh(textGeom, textMaterial );
    //     textMesh1.position.set(2,1.8,0);
        
    //     PIEaddElement(textMesh1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });
    // test();

    PIErender();
    PIEstartAnimation();
    // resetExperiment();
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


function hamdrag(object, newpos) {
    var x=newpos.x, z=newpos.z;
    if(x*x+z*z!=(ballradius+0.275)*(ballradius+0.275)){
        if(x*x<=(ballradius+0.275)*(ballradius+0.275))
            z=Math.sqrt((ballradius+0.275)*(ballradius+0.275)-x*x);
        else
            x=Math.sqrt((ballradius+0.275)*(ballradius+0.275)-z*z);
    }
    
    if(newpos.x<0 && x>0)
        x=-x;
    if(newpos.z<0 && z>0)
        z=-z;

    object.position.set(x, ballradius+0.3, z);
    x1 = x, z1= z;    
    theta=Math.atan(z1/x1);
}

// var kl = 1;
var assignvar=1;
var tester=1;
function updateExperimentElements(t, dt)
        {       

            // PIEremoveElement(nline);
                var time  = t/1000;

                if((time >= 2)&&(kl==1)){
                    PIEstopAnimation();
                    kl=0;
                }

                if(kl == 0){
                    // if(assignvar==1){
                    // assign();
                    // assignvar=0;
                    // }

                    // red.visible=false;
                    // redtext.visible=false;

                    var Mass1=PIEgetInputSlider("Mass1");
                    var Mass2=PIEgetInputSlider("Weights");
    
                    var  length1=0.01*Mass1;
                    var  length2=0.01*Mass2;
                    

                    

                    

                //var g=PIEgetInputSlider("g");
                // var weight=Mass2*10;
                // PIEchangeDisplayText("Spring Balance Reading",);
                xval=cube2.position.x;
                yval=cube2.position.y;
                zval=cube2.position.z;
                mew_friction=PIEgetInputSlider("friction_coef");    
                
                // 

                 //    conclude5.visible=true;
                    // conclude4.visible=true;
                    // conclude3.visible=true;
                    // conclude2.visible=true;
                    // conclude1.visible=true;

                //acceleration


                accrn=( ((Mass2-(mew_friction*Mass1))*10) / (Mass2+Mass1) );
                
                if(table11){table11.visible=true;}
                if(table51){table51.visible=true;}
                if(table61){table61.visible=true;}
                if(table71){table71.visible=true;}
                if(table41){table41.visible=true;}

                // table51.visible=true;
                // table61.visible=true;
                // table71.visible=true;
                // table41.visible=true;

                tension=Mass2*(10-accrn);
                var fritionalforce=tension-(Mass1*accrn);
                
                accrn=Math.round(accrn*100)/100;

                if(accrn<=0)
                {
                    accrn=0;
                    tension=Mass2*10;
                    fritionalforce=tension;
                }

                if(invert_mass_checker==1){
                    area=1.5*(0.5+length1);
                    // PIEupdateTableCell(5,1,1.5);
                     // PIEupdateTableCell(6,1,2.4);
                   

                }else{
                    // PIEupdateTableCell(5,1,2.4);
                   // PIEupdateTableCell(7,1, 1.5);
                    area=2.4*(0.5+length1);

                }
                 // PIEupdateTableCell(7,1,(0.5+length1));

                fritionalforce=Math.round(fritionalforce*100)/100;
                tension=Math.round(tension*100)/100;
                // PIEchangeDisplayText("Acceleration",accrn+"m/s2");
                // PIEtableSelect("Observation Table \t\t\t\t");
                // PIEupdateTableCell(1,1,accrn);




                
                
                if(t2){
                     t2.visible=true;
                }

                if(t3){
                     t3.visible=true;
                }

                if(t0){
                     t0.visible=true;
                }

                if(t1){
                     t1.visible=true;
                }
               


               

                result=Mass1*mew_friction;
                
               if(tester==1){
                    bmassnotify();
                    bmassnotify2();
                    tester=0;
                    v=0;
                    accrn=0;
                    }
                if(Mass2>result)
                {   

                    // green.visible=true;
                    // greentext.visible=true;
                    var mass=PIEgetInputSlider("Mass1");
                    var length=mass*0.03;
                    // endx=0.5-length;
                    limit=xval+(length/2);
                  
                    if(xval<endx){

                        // PIEremoveElement(arrowHelperT);
                        v=v+(accrn*dt/1000);
                        xval=xval+(v*dt/1000)+((accrn*(dt/1000)*(dt/1000))*0.5);

                        PIEremoveElement(line);
                        var mass=PIEgetInputSlider("Mass1");
                       var length,linestart;
                        
                         length=mass*0.03;
                         linestart=xval+(length/2)-0.08;
                        
                        var mate = new THREE.LineBasicMaterial({
                        color: 0x9e3c19
                        });

                        var geometry = new THREE.Geometry();
                        geometry.vertices.push(
                        new THREE.Vector3( xval-0.45, 0.66, -1 ),
                        new THREE.Vector3( 1, 0.66, -1),
                        );

                        line = new THREE.Line( geometry, mate );

                        PIEaddElement( line );

                        PIEremoveElement(line6);
                        //PIEremoveElement(line4);
                        
                        // var acc=-accrn;

                        yvalbox=yvalbox-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);
                        yvalspring=yvalspring-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);
                        stringy=stringy-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);
                        topstring=topstring-(v*dt/1000)-((accrn*(dt/1000)*(dt/1000))*0.5);



                        var material = new THREE.LineBasicMaterial({
                        color: 0x0000ff
                        });



                        PIEremoveElement(line3);
                            var mat = new THREE.LineBasicMaterial({
                            color: 0x9e3c19
                            });

                            var geo = new THREE.Geometry();
                            geo.vertices.push(
                            new THREE.Vector3(  0.5,-0.5, 0 ),
                            new THREE.Vector3(  1, 0.15, 0),
                            );

                            line3 = new THREE.Line( geo, mat );
                            PIEaddElement( line3 );


                        PIEremoveElement(line4);  

                        var mat = new THREE.LineBasicMaterial({
                            color: 0x9e3c19
                            });
                        

                        var geometry = new THREE.Geometry();
                        geometry.vertices.push(
                        new THREE.Vector3( 1.55, yvalbox, -1 ),
                        new THREE.Vector3( 1.55, stringy, -1),
                        );

                        line4 = new THREE.Line( geometry, mat );

                        PIEaddElement( line4 );   


                        if(invert_mass_checker==1){
    // cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    // cube2 = new THREE.Mesh( new THREE.CubeGeometry( length1,2.4,1.5 ),  cubeMaterial);
    // cube2.rotation.y += 0.4;
    // cube2.rotation.x +=0.15; 
    // cube2.rotation.z+=-0.05;
    // PIEaddElement( cube2 );
    // cube2.position.set(xval,yval,zval);

    PIEremoveElement(nline);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{
        PIEremoveElement(nline);
    
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);

    }
                        
                                                                        if(change==1){
                        PIEremoveElement(arrowHelperfr)
                        

                        var dir = new THREE.Vector3( -1 , 0, 0 );

                        //normalize the direction vector (convert to vector of length 1)
                        dir.normalize();

                        var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
                        var lengtharrow = -(-3-xval)+1.7;
                        var hex = 0xffffff;

                        arrowHelperfr = new THREE.ArrowHelper( dir, origin, lengtharrow, hex,0.6,0.2);
                        PIEaddElement( arrowHelperfr );
                    //             PIEremoveElement(nline);

                    // edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(length1,2.4,1.5) );
                    // nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
                    // nline.rotation.y += 0.4;
                    // nline.rotation.x += 0.15;
                    // nline.rotation.z +=-0.05;
                    // PIEaddElement( nline );
                    // nline.position.set(xval,yval,zval);

                                                                         }else{

                            

    //                          PIEremoveElement(nline);
    //                     edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,length1,1.5) );
    // nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    // nline.rotation.y += 0.4;
    // nline.rotation.x += 0.15;
    // nline.rotation.z +=-0.05;
    // PIEaddElement( nline );
    // nline.position.set(xval,yval,zval);
                            PIEremoveElement(arrowHelperfr)
                            var dir = new THREE.Vector3( -1 , 0, 0 );

                        //normalize the direction vector (convert to vector of length 1)
                        dir.normalize();

                        var origin = new THREE.Vector3( xval-0.9, 0.5, 3 );
                        var lengtharrow = -(-3-xval)+1.7;
                        var hex = 0xffffff;

                        arrowHelperfr = new THREE.ArrowHelper( dir, origin, lengtharrow, hex,0.6,0.2);
                        PIEaddElement( arrowHelperfr );

                        }


                        // PIEremoveElement(arrowHelperT)
                        //     var dir = new THREE.Vector3( 1 , 0, 0 );

                        //     //normalize the direction vector (convert to vector of length 1)
                        //     dir.normalize();

                        //     var origin = new THREE.Vector3( -0.9, 0.8, 0 );
                        //     var length = 1.5;
                        //     var hex = 0xffff00;

                        //     arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
                        //     PIEaddElement( arrowHelperT );

                        PIEremoveElement(line5);
                        var mat = new THREE.LineBasicMaterial({
                            color: 0x9e3c19
                            });

                        var geometry = new THREE.Geometry();
                        geometry.vertices.push(
                        new THREE.Vector3(1.55, topstring, -1 ),
                        new THREE.Vector3( 1.55, 0.15, -1),
                        );

                        line5 = new THREE.Line( geometry, mat );

                        PIEaddElement( line5 );
                        
                        spring.position.set(1.5,yvalspring,0);
                        
                        // spring.position.set(1.39,-1.5,2);
                        cube2.position.set(xval,yval,zval);



                        if(texttest){
                            texttest.visible=false;
                            texttest.position.set(xval,yval,4);
                            texttest.visible=true;
                        }
                    
                        if(texttest2){
                            texttest2.visible=false;
                            texttest2.position.set(1,yvalbox+0.5,4);
                            texttest2.visible=true;
                        
                        }

                        
                        cube3.position.set(1.55,yvalbox,0);
                        PIEremoveElement(nliney);
                        edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
                        nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
                         nliney.rotation.y += 0.4;
                        nliney.rotation.x += 0.15;
                        nliney.rotation.z +=-0.05;
                        PIEaddElement( nliney );
                        nliney.position.set(1.55,yvalbox,0);


                    }
                    else{

                    PIEremoveElement(arrowHelperT); 
                    // var dir = new THREE.Vector3( 0, 1, 0 );

                    // //normalize the direction vector (convert to vector of length 1)
                    // dir.normalize();

                    // var origin = new THREE.Vector3( 2, -1, 0 );
                    // var length = 1.2;
                    // var hex = 0xffff00;

                    // var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
                    // PIEaddElement( arrowHelper );


                    var dir = new THREE.Vector3( 1 , 0, 0 );

                    //normalize the direction vector (convert to vector of length 1)
                    dir.normalize();

                    var origin = new THREE.Vector3( xval+0.48, 0.64, 0 );
                    var length = .7;
                    var hex = 0xffffff;

                     arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.3,0.3);
                    PIEaddElement( arrowHelperT );

                    conclude6.visible=true;
                    conclude5.visible=true;
                    conclude4.visible=true;
                    conclude3.visible=true;
                    conclude2.visible=true;
                    conclude1.visible=true;
                

                    cube2.position.set(xval,yval,zval);

                       

                        }

                    }
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


var deletemass=1;
var text;
function bmassnotify(){
    // assign();
    // assignvar=1;
   var mass=PIEgetInputSlider("Mass1");

   if(deletemass==-1){


    PIEremoveElement(text);
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text = new THREE.Mesh(textGeom, textMaterial );
        text.position.set(-4,2.5,0);
        
        PIEaddElement(text);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });


    PIEremoveElement(texttest);

    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest = new THREE.Mesh(textGeom, textMaterial );
        texttest.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });



   }else{
   

   var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text = new THREE.Mesh(textGeom, textMaterial );
        text.position.set(-4,2.5,0);
        
        PIEaddElement(text);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    deletemass=-1;

}
    PIErender();




    PIEremoveElement(cube2);
    PIEremoveElement(cube3);
    PIEremoveElement(nliney);
    PIEremoveElement(nline);
    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");


    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    var  height =length1/2;

    if(invert_mass_checker==1){
    

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval-0.2,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval-0.2,zval);

    }
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15;
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);


    // PIEremoveElement(texttest2);
    // var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialA = [ materialF ];
    // var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialS);
    //     texttest2 = new THREE.Mesh(textGeom, textMaterial );
    //     // texttest2.position.set(-3.5,0.9,4);
        
    //     PIEaddElement(texttest2);
    //     texttest2.position.set(1,yvalbox,zval2);
    //        PIErender()
    // });


    notif.visible=false;
    blue.visible=false;
    // bmassnotify();
    // bmassnotify2();
   

}


function bmassnotify2(){
    // assignvar=1;
    // assign();
   var mass1=PIEgetInputSlider("Mass1");
   var mass2=PIEgetInputSlider("Weights");
   var u=PIEgetInputSlider("friction_coef");
   var tension;
   var area;
   PIEremoveElement(cube2);
    PIEremoveElement(cube3);
    PIEremoveElement(nliney);
    PIEremoveElement(nline);
    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");


    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    var  height =length1/2;

    if(invert_mass_checker==1){
    

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval-0.2,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval-0.2,zval);

    }
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15;
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);


    // PIEremoveElement(texttest2);
    // var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialA = [ materialF ];
    // var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialS);
    //     texttest2 = new THREE.Mesh(textGeom, textMaterial );
    //     // texttest2.position.set(-3.5,0.9,4);
        
    //     PIEaddElement(texttest2);
    //     texttest2.position.set(1,yvalbox,zval2);
    //        PIErender()
    // });


    notif.visible=false;
    blue.visible=false;
    // bmassnotify();
    // bmassnotify2();
    accrn=( ((mass2-(u*mass1))*10) / (mass2+mass1) );
    var  length1=0.01*mass1;
    var  length2=0.01*mass2;           
    length1=Math.round(length1*10)/10;            


            tension=mass2*(10-accrn);
            var fritionalforce=tension-(mass1*accrn);
                
                accrn=Math.round(accrn*100)/100;

                if(accrn<=0)
                {
                    accrn=0;
                    tension=mass2*10;
                    fritionalforce=tension;
                }

                if(invert_mass_checker==1){
                    area=1.5*(0.5+length1);
                    // PIEupdateTableCell(5,1,1.5);
                    //  PIEupdateTableCell(6,1,2.4);
                                                                                                     
                                                                                                    if(table51){
                                                                                                    PIEremoveElement(table51);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(1.5, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table51 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table51.position.set(-7.8,3.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table51);
                                                                                                    table51.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });









                                                                                                     if(table61){
                                                                                                    PIEremoveElement(table61);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(2.4, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table61 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table61.position.set(-7.8,3,0);
                                                                                                    
                                                                                                    PIEaddElement(table61);
                                                                                                    table61.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });

                }else{
                   //  PIEupdateTableCell(5,1,2.4);
                   // PIEupdateTableCell(6,1, 1.5);
                    area=2.4*(0.5+length1);
                                                                                                    if(table51){
                                                                                                    PIEremoveElement(table51);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(2.4, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table51 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table51.position.set(-7.8,3.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table51);
                                                                                                    table51.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });

                                                                                                    if(table61){
                                                                                                    PIEremoveElement(table61);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(1.5, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table61 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table61.position.set(-7.8,3,0);
                                                                                                    
                                                                                                    PIEaddElement(table61);
                                                                                                    table61.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });


                }
                 // PIEupdateTableCell(7,1,(0.5+length1));

                                                                                                    if(table71){
                                                                                                    PIEremoveElement(table71);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry((0.5+length1), 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table71 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table71.position.set(-8,2.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table71);
                                                                                                    table71.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });



                fritionalforce=Math.round(fritionalforce*100)/100;
                tension=Math.round(tension*100)/100;
                // PIEchangeDisplayText("Acceleration",accrn+"m/s2");
                // PIEtableSelect("Observation Table \t\t\t\t");
                // PIEupdateTableCell(1,1,accrn);


                                                                                                    if(table11){
                                                                                                    PIEremoveElement(table11);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(accrn, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table11 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table11.position.set(7,-0.5,0);
                                                                                                    
                                                                                                    PIEaddElement(table11);
                                                                                                    table11.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });



                PIEchangeDisplayText("Spring Balance Reading",tension+"N");
                // PIEupdateTableCell(2,1,tension);

                area=Math.round(area*1000)/1000;  

                if(invert_mass_checker==1){
                    // PIEupdateTableCell(4,1,area);

                                                                                                    if(table41){
                                                                                                    PIEremoveElement(table41);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(area, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table41 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table41.position.set(-7,4,0);
                                                                                                    
                                                                                                    PIEaddElement(table41);
                                                                                                    table41.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });

                }
                else{
                    // PIEupdateTableCell(4,1,area);


                                                                                                                                                                                                        if(table41){
                                                                                                    PIEremoveElement(table41);
                                                                                                    }
                                                                                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
                                                                                                    var materialArray = [materialSide ];
                                                                                                    var loader = new THREE.FontLoader();

                                                                                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                                                                            
                                                                                                    var textGeom = new THREE.TextGeometry(area, 
                                                                                                    {
                                                                                                        size: 0.2, height: 0,
                                                                                                        font: font, weight: "normal", style: "normal"
                                                                                                    });  
                                                                                                    
                                                                                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                                                                                    table41 = new THREE.Mesh(textGeom, textMaterial);
                                                                                                    table41.position.set(-7,4,0);
                                                                                                    
                                                                                                    PIEaddElement(table41);
                                                                                                    table41.visible=false;
                                                                                                    // PIEdragElement(textMesh1);
                                                                                                    // PIEsetDrag(textMesh1,myMainDrag);
                                                                                                    // PIEsetDragEnd(textMesh1,myTwoEnd);
                                                                                                    PIErender();
                                                                                                    });
                }
                // PIEupdateTableCell(3,1,fritionalforce);

                
                

    PIEremoveElement(texttest2);


    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass2+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest2 = new THREE.Mesh(textGeom, textMaterial );
        texttest2.position.set(1,yvalbox+0.3,4);
        
        PIEaddElement(texttest2);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });
    result=u*mass1;
   if(mass2>result){
    var  a=( ((mass2-(u*mass1))*10) / (mass2+mass1) );

    var net=mass2*(10-a);
    PIEremoveElement(t2);
    PIEremoveElement(t3);
    var newf=net-(mass1*a);
    newf=Math.round(newf*100)/100;
    net=Math.round(net*100)/100;
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(newf+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
       t2 = new THREE.Mesh(textGeom, textMaterial );
        t2.position.set(7,-1,0);
        
        PIEaddElement(t2);
        t2.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(net+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
       t3 = new THREE.Mesh(textGeom, textMaterial );
       t3.position.set(8,-1.5,0);
        
        PIEaddElement(t3);
        t3.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

   }else{
    
var  a=( ((mass2-(u*mass1))*10) / (mass2+mass1) );

    var net=mass2*(10-a);
    PIEremoveElement(t2);
    PIEremoveElement(t3);
    tension= mass2*10;
    tension=Math.round(tension*100)/100;
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(tension+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal",length: 4
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t2 = new THREE.Mesh(textGeom, textMaterial );
        t2.position.set(7,-1,0);
        
        PIEaddElement(t2);
        t2.visible=false;
        tchange=-1;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();



        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(tension+" N ", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
       t3 = new THREE.Mesh(textGeom, textMaterial );
       t3.position.set(8,-1.5,0);
        
        PIEaddElement(t3);
        t3.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });
    });

   }

   if(deletemass2==-1){


    PIEremoveElement(text2);
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass2, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text2 = new THREE.Mesh(textGeom, textMaterial );
        text2.position.set(3,-4.2,0);
        
        PIEaddElement(text2);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender()
    });


   }else{
   

   var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mass2, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text2 = new THREE.Mesh(textGeom, textMaterial );
        text2.position.set(3,-4.2,0);
        
        PIEaddElement(text2);
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    deletemass2=-1;

}
    PIErender();
   

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

function invert_mass(){

    kl=1;
    PIEstartAnimation();



    xval=-3.5;
    yval=0.8;
    xval2=1.5;
    yvalbox=-3.5;
    zval2=0;
    yvalspring=-1.7;
    topstring=-1;
    stringy=-2.8;


    // PIEtableSelect("Observation Table");
    // PIEupdateTableCell(4,1,)
    // PIEremoveElement(stars);
    //  geometry = new THREE.PlaneGeometry(7,1);
    // stars=createMesh(geometry,"woodred.jpg");
    // stars.position.set(-3,-0.6,1);
    //     stars.material.color.setHex(0x666666);
    //     PIEaddElement(stars);
    //     PIErender();
    PIEremoveElement(line);
    PIEremoveElement(line4);
    PIEremoveElement(line5);
    PIEremoveElement(line6);
    PIEremoveElement(spring);
    PIEremoveElement(cube3);
     PIEremoveElement(nline);
     PIEremoveElement(nliney);
    

    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");
    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15; 
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    PIEaddElement( cube3 );  


    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);

     PIEremoveElement(texttest2);
    var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialA = [ materialF ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialS);
        texttest2 = new THREE.Mesh(textGeom, textMaterial );
        // texttest2.position.set(-3.5,0.9,4);
        
        PIEaddElement(texttest2);
        texttest2.position.set(1,yvalbox,zval2);
           PIErender()
    });

     geometry = new THREE.PlaneGeometry(0.5,2);
        spring = createMesh(geometry,"spring.png");
        spring.position.set(1.39,yvalspring,2);
    // spring.material.color.setHex(0x666666);
        PIEaddElement(spring);
    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( xval, 0.64, 0 ),
    new THREE.Vector3( 1, 0.64, 0),
    );

    line = new THREE.Line( geometry, material );
    PIEaddElement( line );
 
    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( 1.55, -1, -1),
    new THREE.Vector3( 1.55, 0.15,-1),
    );

    line4 = new THREE.Line( geometry, material );

    PIEaddElement( line4 );
 


    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -3.5, -1 ),
            new THREE.Vector3( 1.55,-2.8, -1),
            );

            line6 = new THREE.Line( geometry, material );

    PIEaddElement( line6 );

    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -1, -1 ),
            new THREE.Vector3( 1.55, 0.15, -1),
            );

            line5 = new THREE.Line( geometry, material );

            PIEaddElement( line5 );



if (invert_mass_checker==1) {

    

    // var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    // var loader = new THREE.FontLoader();
    

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1.5m, height=1m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     dim_mass1 = new THREE.Mesh(textGeom, textMaterial );
    //     dim_mass1.position.set(-3,3,0);
        
    //     PIEaddElement(dim_mass1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });



    PIEremoveElement(arrowHelperfr)
            

            var dir = new THREE.Vector3( -1 , 0, 0 );
            fr=-1;
            //normalize the direction vector (convert to vector of length 1)
            dir.normalize();

            var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
            var lengtharrow = -(-3-xval)+2.5;
            var hex = 0xffffff;

            arrowHelperfr = new THREE.ArrowHelper( dir, origin, lengtharrow, hex,0.6,0.2);
            PIEaddElement( arrowHelperfr );
            PIErender();

    //         geometry = new THREE.PlaneGeometry(13,0.6);
    // block1=createMesh(geometry,"table.png");
    // block1.position.set(-5.5,-0.42,1);
    // block1.material.color.setHex(0x666666);
    //     PIEaddElement(block1);

    PIEremoveElement(block1);
    geometry = new THREE.PlaneGeometry(13,0.6);
    block1=createMesh(geometry,"table.png");
    block1.position.set(-5.5,-0.2,1);
    block1.material.color.setHex(0x666666);
    PIEaddElement(block1);

 // PIEtableSelect("Observation Table");
        // PIEupdateTableCell(4,1,1.5);
// geometry = new THREE.PlaneGeometry(1.5,2.4);
//     cube2=createMesh(geometry,"standmass.png");
    PIEremoveElement(cube2);
   

                                                                                                     // var geometry = new THREE.BoxGeometry( 1.5, 1);
    // geometry = new THREE.PlaneGeometry(2.4,1.5);
    // cube2=createMesh(geometry,"invertmass.png");
    // cube2.position.set(xval,yval-0.3,zval);
    // //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );

    


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,length1+0.5) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);



    invert_mass_checker=-1;
    change=-1;
    PIErender();

    }
    else{
    //  PIEremoveElement(dim_mass1);

    // var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    // var materialArray = [ materialFront ];
    // var loader = new THREE.FontLoader();
    

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry("(Length=1m, height=1.5m , width=1m)", 
    //     {
    //         size: 0.17, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
    //     dim_mass1 = new THREE.Mesh(textGeom, textMaterial );
    //     dim_mass1.position.set(-3,3,0);
        
    //     PIEaddElement(dim_mass1);
    //     // PIEdragElement(textMesh1);
    //     // PIEsetDrag(textMesh1,myMainDrag);
    //     // PIEsetDragEnd(textMesh1,myTwoEnd);
    //     PIErender();
    // });


        PIEremoveElement(arrowHelperfr);
        var dir = new THREE.Vector3( -1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();
       
        var origin = new THREE.Vector3( xval-0.9, 0.5, 3 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperfr = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperfr );
        // PIEtableSelect("Observation Table");
        // PIEupdateTableCell(4,1,1);
    PIEremoveElement(cube2);
  cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);

    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);

    PIEremoveElement(block1);    
    geometry = new THREE.PlaneGeometry(13,0.6);
    block1=createMesh(geometry,"table.png");
    block1.position.set(-5.5,-0.42,1);
    block1.material.color.setHex(0x666666);
        PIEaddElement(block1);

        change=1;
        invert_mass_checker=1;
        PIErender();
    }
    // PIEchangeDisplayCheckbox("Camera Control", true);
}

function resetMass1(){
    PIEchangeInputSlider("Mass1",1);

}

function assign(){

    PIEremoveElement(cube2);
    PIEremoveElement(cube3);
    PIEremoveElement(nliney);
    PIEremoveElement(nline);
    var Mass1=PIEgetInputSlider("Mass1");
    var Mass2=PIEgetInputSlider("Weights");


    
    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    var  height =length1/2;

    if(invert_mass_checker==1){
    

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);


    }else{

    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,1.5,0.5+length1 ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval-0.2,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,1.5,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval-0.2,zval);

    }
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15;
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);


    // PIEremoveElement(texttest2);
    // var materialF = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialS = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    // var materialA = [ materialF ];
    // var loader = new THREE.FontLoader();

    // loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
    //     var textGeom = new THREE.TextGeometry(Mass2+"Kg", 
    //     {
    //         size: 0.3, height: 0,
    //         font: font, weight: "normal", style: "normal"
    //     });  
    // var textMaterial = new THREE.MeshBasicMaterial(materialS);
    //     texttest2 = new THREE.Mesh(textGeom, textMaterial );
    //     // texttest2.position.set(-3.5,0.9,4);
        
    //     PIEaddElement(texttest2);
    //     texttest2.position.set(1,yvalbox,zval2);
    //        PIErender()
    // });


    notif.visible=false;
    blue.visible=false;
    bmassnotify();
    bmassnotify2();
}

function resetMass2(){

    PIEchangeInputSlider("Weights",1);
}
function resetTable(){
   // PIEtableSelect("Observation Table");
   // PIEupdateTableCell(1,1,0);
   // PIEupdateTableCell(2,1,0);
   // PIEupdateTableCell(3,1,0);
   // PIEupdateTableCell(4,1,1);
}  
gem1=1;
function diagram(){
    if(gem1==1){
        
        fbd1.visible=true;
        fbd2.visible=true;
        gem1=-1;
        PIErender();
    }
    else{
        fbd1.visible=false;
        fbd2.visible=false;
        gem1=1;
        PIErender();
    }
        
}
function initialiseControls(){ 

    // PIEaddInputCheckbox("Camera Control", false, camnotify);
    
    PIEaddInputCheckbox("Invert Mass1",false,invert_mass);
    PIEaddInputSlider("Mass1", 1, bmassnotify, 0, 100,1);
    PIEaddInputSlider("Weights",1,bmassnotify2,0,100,1);
    // PIEaddInputCommand("Assign Weights",assign);
    PIEaddInputSlider("friction_coef",0.25, mew ,0, 1, 0.01);
    //PIEaddInputSlider("Mass2",1,bmassnotify2,0,100,1);
    // PIEaddDisplayText("Acceleration",0);
    //PIEaddInputSlider("g",9.8,bmassnotify,9.8,10,0.2);
    // PIEaddDisplayText("Spring Balance Reading",10);
    // PIEaddInputCommand("Free Body Diagrams",diagram);
    // PIEaddInputCommand("Reset Table",resetTable);
    // PIEaddInputCommand("Reset Mass1",resetMass1);
    // PIEaddInputCommand("Reset Weights",resetMass2);
}

// function(){ thehammer.velocity=PIEgetInputSlider("Hammer's Force"); }
function mew(){

mew_friction=PIEgetInputSlider("friction_coef");

    PIEremoveElement(text4);
var materialFront = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x9e3c19 } );
    var materialArray = [ materialFront ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mew_friction, 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text4 = new THREE.Mesh(textGeom, textMaterial );
        text4.position.set(-4,-1.5,0);
        
        PIEaddElement(text4);
        
        PIErender();
    });





}
function initialiseOtherVariables(){
    
}

function resetExperiment(){

    kl = 1;
    PIEstartAnimation();
        
 xval=-3.5;
 yval=0.8;
 zval=2;
 yvalbox=-3.5;
 stringy=-2.8;
 yvalspring=-1.70;
 xval2=1.5;
 yval2=-3;
 zval2=0;
 endx=-0.5;
 endy=0.6;
 endz=0;
 v=0;
 topstring=-1;
 cube3,fr=1;
 tension=0;
 length1=1.5;
 length2=1;
 change=1;
 invert_mass_checker=1;
 deletemass2=1;
 deletemass=1;
 // redtext.visible=false;
// red.visible=false;
// blue.visible=false;
// notif.visible=false;
// success.visible=false;

        PIEremoveElement(spring);
        PIEremoveElement(cube2);
        PIEremoveElement(cube3);
        PIEremoveElement(arrowHelper);
        PIEremoveElement(arrowHelperfr);
        PIEremoveElement(arrowHelperT);
        PIEremoveElement(line);
        PIEremoveElement(nline);
        PIEremoveElement(nliney);
        PIEremoveElement(line4);
        PIEremoveElement(line5);
        if(conclude6){conclude6.visible=true;}
        if(conclude5){conclude5.visible=true;}
        if(conclude4){conclude4.visible=true;}
        if(conclude3){conclude3.visible=true;}
        if(conclude2){conclude2.visible=true;}
        if(conclude1){conclude1.visible=true;}
    




        var Mass1=PIEgetInputSlider("Mass1");
        var Mass2=PIEgetInputSlider("Mass2");

    var  length1=0.01*Mass1;
    var  length2=0.01*Mass2;
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube2 = new THREE.Mesh( new THREE.CubeGeometry( 1.5,2.4,(0.5+length1) ),  cubeMaterial);
    cube2.rotation.y += 0.4;
    cube2.rotation.x +=0.15; 
    cube2.rotation.z+=-0.05;
    PIEaddElement( cube2 );
    cube2.position.set(xval,yval,zval);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(1.5,2.4,0.5+length1) );
    nline = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nline.rotation.y += 0.4;
    nline.rotation.x += 0.15;
    nline.rotation.z +=-0.05;
    PIEaddElement( nline );
    nline.position.set(xval,yval,zval);
        
        PIEremoveElement(line6);


    cubeMaterial = new THREE.MeshBasicMaterial({color: 0x109370, side: THREE.DoubleSide, shading: THREE.FlatShading});
    cube3 = new THREE.Mesh( new THREE.CubeGeometry( 2.4,length2,1.5 ),  cubeMaterial);
    cube3.rotation.y += 0.4;
    cube3.rotation.x +=0.15; 
    cube3.rotation.z+=-0.05;
    PIEaddElement( cube3 );
    cube3.position.set(xval2,yvalbox,zval2);
    edges1 = new THREE.EdgesGeometry( new THREE.BoxBufferGeometry(2.4,length2,1.5) );
    nliney = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0x000 } ) );
    nliney.rotation.y += 0.4;
    nliney.rotation.x += 0.15;
    nliney.rotation.z +=-0.05;
    PIEaddElement( nliney );
     nliney.position.set(xval2,yvalbox,zval2);
       
        geometry = new THREE.PlaneGeometry(0.5,2);
        spring = createMesh(geometry,"spring.png");
        spring.position.set(1.39,-1.5,2);
    // spring.material.color.setHex(0x666666);
        PIEaddElement(spring);

        var dir = new THREE.Vector3( 0, 1, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3(  1.43, -0.66, 1 );
        var length = 0.5;
        var hex = 0xffffff;

        var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex,0.3,0.2);
        PIEaddElement( arrowHelper );



        var dir = new THREE.Vector3( 1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();

        var origin = new THREE.Vector3( -1, 0.66, 2 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperT = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperT );


        var dir = new THREE.Vector3( -1 , 0, 0 );

        //normalize the direction vector (convert to vector of length 1)
        dir.normalize();
       
        var origin = new THREE.Vector3( xval-0.5, 0.5, 3 );
        var length = 1.2;
        var hex = 0xffffff;

         arrowHelperfr = new THREE.ArrowHelper( dir, origin, length, hex,0.6,0.2);
        PIEaddElement( arrowHelperfr );


    // geometry = new THREE.PlaneGeometry(1.5,2.4);
    // cube2=createMesh(geometry,"standmass.png");
    // cube2.position.set(xval,yval,zval);
    // //cube2.position.set(-2.5,0.6,0);
    // PIEaddElement( cube2 );


    // geometry = new THREE.PlaneGeometry(2.4,1.5);
    // cube3=createMesh(geometry,"invertmass.png");
    // cube3.position.set(xval2,yvalbox,zval2);
    // // cube3.position.set(1,-2,0);
    // PIEaddElement( cube3 );  

    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( xval, 0.64, 0 ),
    new THREE.Vector3( 1, 0.64, 0),
    );

    line = new THREE.Line( geometry, material );
    PIEaddElement( line );
 
    var material = new THREE.LineBasicMaterial({
    color: 0x9e3c19
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
    new THREE.Vector3( 1.55, -1, -1),
    new THREE.Vector3( 1.55, 0.15,-1),
    );

    line4 = new THREE.Line( geometry, material );

    PIEaddElement( line4 );
 


    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -3.5, -1 ),
            new THREE.Vector3( 1.55,-2.8, -1),
            );

            line6 = new THREE.Line( geometry, material );

    PIEaddElement( line6 );

    var geometry = new THREE.Geometry();
            geometry.vertices.push(
            new THREE.Vector3( 1.55, -1, -1 ),
            new THREE.Vector3( 1.55, 0.15, -1),
            );

            line5 = new THREE.Line( geometry, material );

            PIEaddElement( line5 );

       
    
         // text4.visible=false;
         if(text){text.visible=false;}
         if(text2){text2.visible=false;}
         if(t2){t2.visible=false;}
         if(t3){t3.visible=false;}
         if(t0){t0.visible=true;}
         if(t1){t1.visible=true;}



         // PIEaddInputCheckbox("Camera Control", false, camnotify);
    PIEchangeInputCheckbox("Invert Mass1",false);
    // PIEchangeInputSlider("Mass1", 0);
    PIEchangeInputSlider("friction_coef", 0.25);
    // PIEchangeInputSlider("Mass2",0);
    // PIEchangeDisplayText("Acceleration",0);
    //PIEaddInputSlider("g",9.8,bmassnotify,9.8,10,0.2);
    // PIEaddDisplayText("Spring Balance Reading",10);
// PIEcamera.position.set(-0.05527074424515538, 2.9731239686405893, 6.0079166151350645);
    // PIEcamera.rotation.set(-0.459533369319057, -0.008245089377707907, -0.0040801596752513564);
    // hitonce=false;
    // counter=0;
    // theta=0;
    // ballmass=1, ballradius=0.1;

    // PIEchangeInputSlider("Hammer's Force", 5);
    // PIEchangeInputSlider("Ball's Mass", 1);

    // if(PIElastUpdateTime) 
    //     initialiseOtherVariables();



}

// var PIEtableData = [];
// var PIEtableRows = [];
// var PIEtableNames = [];
// var PIEtables = [];
// var PIEcurrentTable;
// var PIEdraggedTable;
// var PIEtableChangeHandlers = [];



// function PIEtableDragStart(b) {
//     var a;
//     var c;
//     PIEdraggedTable = b.target;
//     a = window.getComputedStyle(PIEdraggedTable, null);
//     c = (parseInt(a.getPropertyValue("left")) - b.clientX) + "," + (parseInt(a.getPropertyValue("top")) - b.clientY);
//     b.dataTransfer.setData("Text", c);
//     b.dataTransfer.dropEffect = "move";
//     b.dataTransfer.setData("aTable", c);
//     return (false)
// }
// function PIEtableDrop(a) {
//     var b;
//     if (PIEdraggedTable != null) {
//         b = a.dataTransfer.getData("Text").split(",");
//         PIEdraggedTable.style.left = (a.clientX + parseInt(b[0], 10)) + "px";
//         PIEdraggedTable.style.top = (a.clientY + parseInt(b[1], 10)) + "px";
//         PIEdraggedTable = null;
//         a.stopPropagation();
//         a.preventDefault();
//         return false
//     }
// }
// function PIEtableDragEnter(a) {
//     a.preventDefault();
//     return (false)
// }
// function PIEtableDragOver(a) {
//     a.preventDefault();
//     return (false)
// }
// function PIEtableSetInputChange(a) {
//     var b;
//     var d;
//     var c;
//     PIEtableChangeHandlers[PIEcurrentTable] = a;
//     for (b = 0; (b < PIEtableRows[PIEcurrentTable].length); b++) {
//         for (d = 0; (d < PIEtableData[PIEcurrentTable][b].length); d++) {
//             if ((PIEtableData[PIEcurrentTable][b][d] != null) && (PIEtableData[PIEcurrentTable][b][d].children.length > 0)) {
//                 c = PIEtableData[PIEcurrentTable][b][d].children[0];
//                 c.addEventListener("change", PIEtableInputChange, false)
//             }
//         }
//     }
// }
// function PIEtableInputChange(a) {
//     a.preventDefault();
//     PIEtableInputHandleEvent(a, PIEtableChangeHandlers);
//     return (false)
// }
// function PIEtableInputHandleEvent(d, g) {
//     var f;
//     var e;
//     var h;
//     var c;
//     var a;
//     var b;
//     var i;
//     i = false;
//     f = d.target;
//     for (e = 0; (i == false) && (e < PIEtables.length); e++) {
//         for (h = 0; (i == false) && (h < PIEtableRows[e].length); h++) {
//             for (c = 0; (i == false) && (c < PIEtableData[e][h].length); c++) {
//                 if ((PIEtableData[e][h][c] != null) && (f == PIEtableData[e][h][c].children[0])) {
//                     i = true
//                 }
//             }
//         }
//     }
//     if (i == true) {
//         e--;
//         h--;
//         c--;
//         if (g[e] != null) {
//             g[e](h, c, f.value)
//         }
//     }
// }
// function PIEtableSelect(c) {
//     var a;
//     var b;
//     PIEcurrentTable = 0;
//     for (a = 0; (a < PIEtableNames.length); a++) {
//         if (c == PIEtableNames[a]) {
//             PIEcurrentTable = a
//         }
//     }
// }
// function PIEcreateTable(i, n, g, d) {
//     var c;
//     var b;
//     var m;
//     var f;
//     var a;
//     var h;
//     var l;
//     var k;
//     var j;
//     var e;
//     PIEtableChangeHandlers.push(null);
//     PIEtableNames.push(i);
//     PIEtableRows.push(new Array(0));
//     PIEtableData.push(new Array(0));
//     PIEtableChangeHandlers.push(null);
//     PIEcurrentTable = PIEtableNames.length - 1;
//     c = document.createElement("div");
//     c.draggable = true;
//     c.addEventListener("dragstart", PIEtableDragStart, false);
//     c.style.border = "2px solid white";
//     c.style.borderRadius = "10px";
//     c.style.display = "inline-block";
//     c.style.position = "absolute";
//     c.style.top = "20px";
//     c.style.color = "white";
//     document.body.appendChild(c);
//     b = document.createElement("div");
//     b.style.display = "inline-block";
//     b.style.width = "100%";
//     b.style.padding = "0px";
//     c.appendChild(b);
//     m = document.createElement("p");
//     m.style.display = "inline-block";
//     m.style.width = "100%";
//     m.style.margin = "auto";
//     m.style.border = "2 px solid white";
//     m.style.borderRadius = "10px";
//     m.style.backgroundColor = "#0020AA";
//     b.appendChild(m);
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     a = document.createElement("img");
//     a.src = "../PIE/images/TableAdd.png";
//     a.alt = "add";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     a = document.createElement("img");
//     a.src = "../PIE/images/TableDelete.png";
//     a.alt = "delete";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     a = document.createElement("span");
//     a.style.padding = "5px";
//     a.style.margin = "auto";
//     a.style.align = "center";
//     a.innerHTML = "<b>" + i + "</b>";
//     m.appendChild(a);
//     f = document.createElement("button");
//     f.style.background = "none";
//     f.style.border = "none";
//     f.style.boxSizing = "border-box";
//     f.style.align = "right";
//     f.addEventListener("click", PIEtoggleTable, false);
//     m.appendChild(f);
//     a = document.createElement("img");
//     a.src = "../PIE/images/TableFold.png";
//     a.alt = "delete";
//     a.height = "16";
//     a.width = "16";
//     a.style.display = "inline";
//     f.appendChild(a);
//     a = document.createElement("div");
//     h = document.createElement("table");
//     h.style.display = "inline-block";
//     h.style.border = "1px solid white";
//     h.style.borderRadius = "10px";
//     h.style.padding = "0px";
//     h.style.backgroundColor = "#0040BB";
//     PIEtables.push(h);
//     a.appendChild(h);
//     c.appendChild(a);
//     for (j = 0; j < n; j++) {
//         for (e = 0; e < g; e++) {
//             if (j == 0) {
//                 k = PIEcreateTableCell(j, e, d)
//             } else {
//                 k = PIEcreateTableCell(j, e, false)
//             }
//         }
//     }
//     PIEupdateTable(PIEtables[PIEcurrentTable])
// }
// function PIEtoggleTable(e) {
//     var g;
//     var c;
//     var a;
//     var h;
//     var f;
//     var d;
//     var b;
//     e = e || window.event;
//     e.defaultPrevented = true;
//     g = null;
//     if (e.target) {
//         g = e.target
//     } else {
//         if (e.srcElement) {
//             g = e.srcElement
//         }
//     }
//     if (g != null) {
//         if (g.nodeType == 3) {
//             g = g.parentNode
//         }
//         a = ((g.parentNode).parentNode).parentNode;
//         h = a.children;
//         for (d = 0; (d < h.length); d++) {
//             f = h[d].children;
//             for (b = 0; (b < f.length); b++) {
//                 if (f[b].nodeName == "TABLE") {
//                     c = f[b];
//                     if (c.style.display == "inline-block") {
//                         c.style.display = "none"
//                     } else {
//                         c.style.display = "inline-block"
//                     }
//                 }
//             }
//         }
//     }
// }
// function PIEupdateTable() {
//     var c;
//     var d;
//     var a;
//     var b;
//     PIEtables[PIEcurrentTable].innerHTML = "";
//     for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
//         a = PIEtableRows[PIEcurrentTable][c];
//         PIEtables[PIEcurrentTable].appendChild(a);
//         for (d = 0; (d < PIEtableData[PIEcurrentTable][c].length); d++) {
//             b = PIEtableData[PIEcurrentTable][c][d];
//             a.appendChild(b)
//         }
//     }
// }
// function PIEexpandCell(a) {
//     if ((a.target.size + 6) < a.target.value.length) {
//         a.target.size = a.target.value.length - 6
//     }
// }
// function PIEcreateInputElement(b, c) {
//     var a;
//     a = document.createElement("input");
//     a.style.color = "#FFFFFF";
//     a.style.backgroundColor = "#0060CC";
//     a.style.border = "2px solid red";
//     if (b >= 7) {
//         a.size = (b - 6)
//     } else {
//         a.size = 1
//     }
//     a.addEventListener("keyup", PIEexpandCell, false);
//     if (PIEtableChangeHandlers[PIEcurrentTable] != null) {
//         a.addEventListener("change", PIEtableInputChange, false)
//     }
//     a.addEventListener("change", PIEtableInputChange, false);
//     a.value = c;
//     return (a)
// }
// function PIEsetColumnInput(a, b, e) {
//     var d;
//     var c;
//     for (c = 0; (c < PIEtableRows[PIEcurrentTable].length) && (PIEtableRows[PIEcurrentTable][c] != null); c++) {
//         if (PIEtableData[PIEcurrentTable][c].length > a) {
//             if (PIEtableData[PIEcurrentTable][c][a] != null) {
//                 PIEtableData[PIEcurrentTable][c][a].innerHTML = "";
//                 PIEtableData[PIEcurrentTable][c][a].appendChild(PIEcreateInputElement(b, e))
//             }
//         }
//     }
// }
// function PIEsetRowInput(e, a, d) {
//     var c;
//     var b;
//     if ((PIEtableRows[PIEcurrentTable].length > e) && (PIEtableRows[PIEcurrentTable][e] != null)) {
//         for (b = 0; (b < PIEtableData[PIEcurrentTable][e].length); b++) {
//             if (PIEtableData[PIEcurrentTable][e][b] != null) {
//                 PIEtableData[PIEcurrentTable][e][b].innerHTML = "";
//                 PIEtableData[PIEcurrentTable][e][b].appendChild(PIEcreateInputElement(a, d))
//             }
//         }
//     }
// }
// function PIEsetCellInput(e, a, b, d) {
//     var c;
//     while (PIEtableRows[PIEcurrentTable].length <= e) {
//         PIEtableRows[PIEcurrentTable].push(null);
//         PIEtableData[PIEcurrentTable].push(new Array(0))
//     }
//     if (PIEtableRows[PIEcurrentTable][e] == null) {
//         PIEtableRows[PIEcurrentTable][e] = document.createElement("tr")
//     }
//     while (PIEtableData[PIEcurrentTable][e].length <= a) {
//         PIEtableData[PIEcurrentTable][e].push(null)
//     }
//     if (PIEtableData[PIEcurrentTable][e][a] == null) {
//         PIEtableData[PIEcurrentTable][e][a] = document.createElement("td")
//     }
//     PIEtableData[PIEcurrentTable][e][a].innerHTML = "";
//     c = PIEcreateInputElement(b, d);
//     PIEtableData[PIEcurrentTable][e][a].appendChild(c)
// }
// function PIEcreateTableCell(c, b, d) {
//     var a;
//     a = (d == true) ? "th" : "td";
//     while (PIEtableRows[PIEcurrentTable].length <= c) {
//         PIEtableRows[PIEcurrentTable].push(null);
//         PIEtableData[PIEcurrentTable].push(new Array(0))
//     }
//     if (PIEtableRows[PIEcurrentTable][c] == null) {
//         PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
//     }
//     while (PIEtableData[PIEcurrentTable][c].length <= b) {
//         PIEtableData[PIEcurrentTable][c].push(null)
//     }
//     if (PIEtableData[PIEcurrentTable][c][b] == null) {
//         PIEtableData[PIEcurrentTable][c][b] = document.createElement(a)
//     } else {
//         PIEtableData[PIEcurrentTable][c][b].innerHTML = ""
//     }
// }
// function PIEupdateTableRow(c, a) {
//     var b;
//     for (b = 0; b < a.length; b++) {
//         PIEupdateTableCell(c, b, a[b])
//     }
// }
// function PIEupdateTableColumn(b, a) {
//     var c;
//     for (c = 0; c < a.length; c++) {
//         PIEupdateTableCell(c, b, a[b])
//     }
// }
// function PIEupdateTableCell(c, a, b) {
//     while (PIEtableRows[PIEcurrentTable].length <= c) {
//         PIEtableRows[PIEcurrentTable].push(null);
//         PIEtableData[PIEcurrentTable].push(new Array(0))
//     }
//     if (PIEtableRows[PIEcurrentTable][c] == null) {
//         PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
//     }
//     while (PIEtableData[PIEcurrentTable][c].length <= a) {
//         PIEtableData[PIEcurrentTable][c].push(null)
//     }
//     if (PIEtableData[PIEcurrentTable][c][a] == null) {
//         PIEtableData[PIEcurrentTable][c][a] = document.createElement("td")
//     }
//     if (PIEtableData[PIEcurrentTable][c][a].children.length == 0) {
//         PIEtableData[PIEcurrentTable][c][a].innerHTML = b
//     } else {
//         PIEtableData[PIEcurrentTable][c][a].children[0].value = b
//     }
// }
// function PIEsetTableRowStyle(d, a, c) {
//     var b;
//     if (d < PIEtableRows[PIEcurrentTable].length) {
//         for (b = 0; (b < PIEtableData[PIEcurrentTable][d].length); b++) {
//             PIEsetTableCellStyle(d, b, a, c)
//         }
//     }
// }
// function PIEsetTableColumnStyle(a, b, d) {
//     var c;
//     for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
//         if (a < PIEtableData[PIEcurrentTable][c].length) {
//             PIEsetTableCellStyle(c, a, b, d)
//         }
//     }
// }
// function PIEsetTableCellStyle(d, a, b, c) {
//     if (d < PIEtableRows[PIEcurrentTable].length) {
//         if (a < PIEtableData[PIEcurrentTable][rowI].length) {
//             if (b == "color") {
//                 PIEtableData[PIEcurrentTable][d][a].style.color = c
//             } else {
//                 if (b == "backgroundColor") {
//                     PIEtableData[PIEcurrentTable][d][a].style.backgroundColor = c
//                 } else {
//                     if (b == "margin") {
//                         PIEtableData[PIEcurrentTable][d][a].style.margin = c
//                     } else {
//                         if (b == "padding") {
//                             PIEtableData[PIEcurrentTable][d][a].style.padding = c
//                         } else {
//                             if (b == "border") {
//                                 PIEtableData[PIEcurrentTable][d][a].style.border = c
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Friction Illustration </h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a block resting on a table with one end attached to a string passing over a pulley . The other end of the string is attached to a spring balance connected to a block whose weight can be changed.</p>";
    helpContent = helpContent + "<h3>Setup stage</h3>";
    helpContent = helpContent + "<p>The top right side controls take input of mass of block, weights and coefficient of friction.It also has a reset button for Mass1,Weights and Table</p>";
    helpContent = helpContent + "<p>You have access to coefficient of friction also</p>";
    helpContent = helpContent + "<p>Free Body Diagrams can be seen once the command is clicked in control panel </p>";

    helpContent = helpContent + "<p>The slider allows you to change the mass, weights  and friction coefficent.</p>"
    helpContent = helpContent + "<p>Once you decide on that, you can enter the animation stage by clicking Assign Masses and then the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>The block only moves if the the weights >= (coefficient of friction)*blockmass . This is obtained by the force equations.";
    helpContent = helpContent + "You can also Invert the dimensions of the block to change area of contact. Also the details are displayed on a table in left corner  ";
    helpContent = helpContent +".Until the block moves thetension is equal to weight and and hence friction.</p> ";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animation by using the speed control buttons</p>";
    helpContent = helpContent + "<p>The round button is for resetting the animation.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows  a block on table attached to a spring balance over a pulley.</p>";
    infoContent = infoContent + "<h3>Friction</h3>";
    infoContent = infoContent + "<p>Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.</p>";
    infoContent = infoContent + "<p>It does not depend on the area of contact between surfaces.</p>";
    infoContent = infoContent + "<p>Here friction is equal to =  (coefficient of friction)*(Normal Reaction) </p>";
    infoContent = infoContent + "<p>T-m1*g=m1*a and m2*g-T=m2*a</p> ";
    infoContent = infoContent + "<p>where T = tension in the string , m2=mass of weights , m1=mass of block and a=acceeration </p> ";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}








}
