
var plane,plane2;
var kl=1;
var semicircle1,semicircle2,semicircle3,semicircle4;
var glassrod;
var id=0,Materialid=0;
var count=0;
var paperbit1,paperbit2;
var comb;
var learnmasterid=0;
var learnid=0;
var submit=0;
var precaution=0;
var turn=0;
var counter=0;
var reached=0;

function initialiseScene(){
   
     var geometry = new THREE.PlaneGeometry( 0.1, 8 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
        
        plane5 = new THREE.Mesh( geometry, material );
        plane5.position.set(-5,-0.3,-2);
        plane5.receiveShadow=false;
        plane5.visible=false;

        PIEaddElement(plane5);
        PIErender(); var geometry = new THREE.PlaneGeometry( 5.5, 6 );
    var material = new THREE.MeshBasicMaterial( {color: 0x3C474B, side: THREE.DoubleSide} );
        
        plane3 = new THREE.Mesh( geometry, material );
        plane3.position.set(-9.7,-0.3,-2);
        plane3.receiveShadow=false;
        plane3.visible=false;

        PIEaddElement(plane3);
        PIErender();
    var geometry = new THREE.PlaneGeometry( 5.5, 6 );
    var material = new THREE.MeshBasicMaterial( {color: 0x3C474B, side: THREE.DoubleSide} );
        
        plane3 = new THREE.Mesh( geometry, material );
        plane3.position.set(-9.7,-0.3,-2);
        plane3.receiveShadow=false;
        plane3.visible=false;

        PIEaddElement(plane3);
        PIErender();


    var geometry = new THREE.PlaneGeometry( 8, 6 );
    var material = new THREE.MeshBasicMaterial( {color: 0x3C474B, side: THREE.DoubleSide} );
        
        plane4 = new THREE.Mesh( geometry, material );
        plane4.position.set(0,-0.3,-2);
        plane4.receiveShadow=false;
        plane4.visible=false;

        PIEaddElement(plane4);
        PIErender();

    var geometry = new THREE.PlaneGeometry( 5, 0.8 );
    var material = new THREE.MeshBasicMaterial( {color: 0x081F26, side: THREE.DoubleSide} );
        
        plane = new THREE.Mesh( geometry, material );
        plane.position.set(-9,3,0);
        plane.receiveShadow=false;
        plane.visible=true;

        PIEaddElement(plane);
        PIErender();

    var geometry = new THREE.CircleGeometry( 0.4, 32 ,Math.PI/2,Math.PI);
    var material = new THREE.MeshBasicMaterial( { color: 0x081F26 } );
        semicircle1 = new THREE.Mesh( geometry, material );
        semicircle1.position.set(-11.5,3,0);
    PIEaddElement( semicircle1 );

    var geometry = new THREE.CircleGeometry( 0.4, 32 ,-Math.PI/2,Math.PI);
    var material = new THREE.MeshBasicMaterial( { color: 0x081F26 } );
        semicircle2 = new THREE.Mesh( geometry, material );
        semicircle2.position.set(-6.5,3,0);
    PIEaddElement( semicircle2 );



    var geometry = new THREE.PlaneGeometry( 5, 0.8 );
    var material = new THREE.MeshBasicMaterial( {color: 0x081F26, side: THREE.DoubleSide} );
        
        plane2 = new THREE.Mesh( geometry, material );
        plane2.position.set(0,3,0);
        plane2.receiveShadow=false;
        plane2.visible=true;

        PIEaddElement(plane2);
        PIErender();

    var geometry = new THREE.CircleGeometry( 0.4, 32 ,Math.PI/2,Math.PI);
    var material = new THREE.MeshBasicMaterial( { color: 0x081F26 } );
        semicircle3 = new THREE.Mesh( geometry, material );
        semicircle3.position.set(-2.5,3,0);
    PIEaddElement( semicircle3 );

    var geometry = new THREE.CircleGeometry( 0.4, 32 ,-Math.PI/2,Math.PI);
    var material = new THREE.MeshBasicMaterial( { color: 0x081F26 } );
        semicircle4 = new THREE.Mesh( geometry, material );
        semicircle4.position.set(+2.5,3,0);
    PIEaddElement( semicircle4 );

    semicircle4.visible=false;
    semicircle3.visible=false;
    plane2.visible=false;

    PIErender();



}


function rubbingmaterials(){
    var geometry = new THREE.PlaneGeometry(3,3);
    wool = createMesh(geometry,"wool.png");
    wool.position.set(0,0,-0.99);
    wool.visible=false;
    PIEaddElement(wool);
    PIErender();
    PIEsetClick(wool,woolclick);
    // PIEdragElement(wool);

    var geometry = new THREE.PlaneGeometry(3,3);
    woolc = createMesh(geometry,"woolc.png");
    woolc.position.set(0,0,-0.99);
    woolc.visible=false;
    PIEaddElement(woolc);
    PIErender();

    
    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Wool", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text12 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text12.position.set(0,-3,0)
        PIEaddElement(text12);
        text12.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



    var geometry = new THREE.PlaneGeometry(3.5,4);
    silk = createMesh(geometry,"silk.png");
    silk.position.set(0,0,-0.99);
    silk.visible=false;
    PIEaddElement(silk);
    PIErender();
    PIEsetClick(silk,silkclick);

    var geometry = new THREE.PlaneGeometry(3.5,4);
    silkcnegative = createMesh(geometry,"silkcnegative.png");
    silkcnegative.position.set(0,0,-0.99);
    silkcnegative.visible=false;
    PIEaddElement(silkcnegative);
    PIErender();
    


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Silk", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text13 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text13.position.set(0,-3,0)
        PIEaddElement(text13);
        text13.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
});
    var geometry = new THREE.PlaneGeometry(4.5,5);
    polythene = createMesh(geometry,"polythene.png");
    polythene.position.set(0,0,-0.99);
    polythene.visible=false;
    PIEaddElement(polythene);
    PIErender();
    PIEsetClick(polythene,polytheneclick);

    var geometry = new THREE.PlaneGeometry(4.5,5);
    polythenec = createMesh(geometry,"polythenec.png");
    polythenec.position.set(0,0,-0.99);
    polythenec.visible=false;
    PIEaddElement(polythenec);
    PIErender();
   


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Polythene", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text14 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text14.position.set(0,-3,0)
        PIEaddElement(text14);
        text14.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
});
    var geometry = new THREE.PlaneGeometry(4.5,5);
    amber = createMesh(geometry,"amber.png");
    amber.position.set(6,0,-0.99);
    amber.visible=false;
    PIEaddElement(amber);
    PIErender();
    PIEsetClick(amber,amberclick);

    var geometry = new THREE.PlaneGeometry(4.5,5);
    amberc = createMesh(geometry,"amberc.png");
    amberc.position.set(6,0,-0.99);
    amberc.visible=false;
    PIEaddElement(amberc);
    PIErender();
    

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Amber", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text15 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text15.position.set(6,-3,0)
        PIEaddElement(text15);
        text15.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();


});
    var geometry = new THREE.PlaneGeometry(3,2.5);
    sulphur= createMesh(geometry,"sulphur.png");
    sulphur.position.set(0,0,-0.99);
    sulphur.visible=false;
    PIEaddElement(sulphur);
    PIErender();
    PIEsetClick(sulphur,sulphurclick);

    var geometry = new THREE.PlaneGeometry(3,2.5);
    sulphurc= createMesh(geometry,"sulphurc.png");
    sulphurc.position.set(0,0,-0.99);
    sulphurc.visible=false;
    PIEaddElement(sulphurc);
    PIErender();
    

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Sulphur", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text16 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text16.position.set(0,-3,0)
        PIEaddElement(text16);
        text16.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();

  });  


    var geometry = new THREE.PlaneGeometry(4,6);
    hair= createMesh(geometry,"hair.png");
    hair.position.set(0,0,-0.99);
    hair.visible=false;
    PIEaddElement(hair);
    PIErender();
    PIEsetClick(hair,hairclick);

    var geometry = new THREE.PlaneGeometry(4,6);
    hairc= createMesh(geometry,"hairc.png");
    hairc.position.set(0,0,-0.99);
    hairc.visible=false;
    PIEaddElement(hairc);
    PIErender();
    PIEsetClick(hair,hairclick);
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Hair", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text17 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text17.position.set(0,-3,0)
        PIEaddElement(text17);
        text17.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
});

    var geometry = new THREE.PlaneGeometry(4,6);
    copper= createMesh(geometry,"copper.png");
    copper.position.set(0,0,-0.99);
    copper.visible=false;
    PIEaddElement(copper);
    PIErender();
    PIEsetClick(copper,copperclick);

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Copper", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text18 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text18.position.set(0,-3,0)
        PIEaddElement(text18);
        text18.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
});

    var geometry = new THREE.PlaneGeometry(4,6);
    wax= createMesh(geometry,"wax.png");
    wax.position.set(5,1.5,-0.99);
    wax.visible=false;
    PIEaddElement(wax);
    PIErender();
    PIEsetClick(wax,waxclick);

    var geometry = new THREE.PlaneGeometry(4,6);
    waxc= createMesh(geometry,"waxc.png");
    waxc.position.set(5,1.5,-0.99);
    waxc.visible=false;
    PIEaddElement(waxc);
    PIErender();
   

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Wax", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text19 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text19.position.set(5,-3,0);
        PIEaddElement(text19);
        text19.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();


  }); 


}


function waxclick(){
    id=2;
    count=0;
    copper.visible=false;
    text19.visible=false;
    text18.visible=false;
    text3.visible=false;
    plane4.visible=true;

    PIErender();
    // PIEstartAnimation();
}

function copperclick(){
    id=1;
    count=0;
    wax.visible=false;
    text18.visible=false;
    text19.visible=false;
    text3.visible=false;
    plane4.visible=true;

    PIErender();
    // PIEstartAnimation();
}


function hairclick(){

    id=1;
    count=0;
    text17.visible=false;
    text3.visible=false;
    plane4.visible=true;


    PIErender();

    // PIEstartAnimation();
}

function sulphurclick(){

    id=1;
    count=0;
    text16.visible=false;
    text3.visible=false;
    plane4.visible=true;


    PIErender();

    // PIEstartAnimation();
}

function woolclick(){

    id=1;
    silk.visible=false;
    amber.visible=false;
    count=0;
    text12.visible=false;
    text13.visible=false;
    text3.visible=false;
    plane4.visible=true;


    PIErender();

    // PIEstartAnimation();

}

function silkclick(){

    id=2;
    wool.visible=false;
    amber.visible=false;
    text3.visible=false;

    PIErender();
    count=0;
    text13.visible=false;
    plane4.visible=true;


    PIErender();

    // PIEstartAnimation();

}


function polytheneclick(){

    id=1;
    amber.visible=false;
    text14.visible=false;
    text15.visible=false;
    text3.visible=false;
    plane4.visible=true;


    PIErender();

    // PIEstartAnimation();

}

function amberclick(){

    id=2;
    polythene.visible=false;
    text15.visible=false;
    text14.visible=false;
    text3.visible=false;
    plane4.visible=true;




    PIErender();
    count=0;

    // PIEstartAnimation();

}


function images(){


    var geometry = new THREE.PlaneGeometry(3,0.3);
    glassrod = createMesh(geometry,"glassrod.png");
    glassrod.position.set(-6,0,0);
    glassrod.visible=true;
    glassrod.rotation.z=-3.14/2+0.2;
    PIEaddElement(glassrod);
    PIErender();
    PIEsetClick(glassrod,glassrodClick);
    PIEdragElement(glassrod);
    


    var geometry = new THREE.PlaneGeometry(3,0.3);
    glassrodc = createMesh(geometry,"glassrodc.png");
    glassrodc.position.set(-6,0,0);
    glassrodc.visible=false;
    glassrodc.rotation.z=-3.14/2+0.2;
    PIEaddElement(glassrodc);
    PIErender();
    PIEdragElement(glassrodc);
    PIEsetDrag(glassrodc,glassrodcdrag);


    var geometry = new THREE.PlaneGeometry(3,0.3);
    ebonite = createMesh(geometry,"ebonite.png");
    ebonite.position.set(-4,0,0);
    ebonite.visible=true;
    ebonite.rotation.z=-3.14/2+0.2;
    PIEaddElement(ebonite);
    PIErender();
    PIEsetClick(ebonite,eboniterodClick);
    PIEdragElement(ebonite);

    var geometry = new THREE.PlaneGeometry(3,0.3);
    ebonitecnegative = createMesh(geometry,"ebonitecnegative.png");
    ebonitecnegative.position.set(-4,0,0);
    ebonitecnegative.visible=false;
    ebonitecnegative.rotation.z=-3.14/2+0.2;
    PIEaddElement(ebonitecnegative);
    PIErender();
    PIEdragElement(ebonitecnegative);

   
    var geometry = new THREE.PlaneGeometry(3,0.3);
    ebonitecpositive = createMesh(geometry,"ebonitecpositive.png");
    ebonitecpositive.position.set(-4,0,0);
    ebonitecpositive.visible=false;
    ebonitecpositive.rotation.z=-3.14/2+0.2;
    PIEaddElement(ebonitecpositive);
    PIErender();
    PIEdragElement(ebonitecpositive);
    PIEsetDrag(ebonitecpositive,ebonitecdrag);
    


    var geometry = new THREE.PlaneGeometry(2,3);
    fur = createMesh(geometry,"fur.png");
    fur.position.set(0,0,0);
    fur.visible=true;
    PIEaddElement(fur);
    PIErender();
    PIEsetClick(fur,furClick);
    PIEdragElement(fur);
   

    var geometry = new THREE.PlaneGeometry(2,3);
    furc = createMesh(geometry,"furc.png");
    furc.position.set(0,0,0);
    furc.visible=false;
    PIEaddElement(furc);
    PIErender();
    PIEdragElement(furc);
     PIEsetDrag(fur,furcdrag);

    var geometry = new THREE.PlaneGeometry(1,3);
    comb= createMesh(geometry,"comb.png");
    comb.position.set(-8,0,0);
    comb.visible=true;
    PIEaddElement(comb);
    PIErender();
    PIEsetClick(comb,combclick);
    PIEdragElement(comb);
    PIEsetDrag(comb,combdrag);


    var geometry = new THREE.PlaneGeometry(1,3);
    combc= createMesh(geometry,"combc.png");
    combc.position.set(-8,0,0);
    combc.visible=false;
    PIEaddElement(combc);
    PIErender();
    PIEdragElement(combc);

   


    var geometry = new THREE.PlaneGeometry(4.5,5);
    silk2 = createMesh(geometry,"silk2.png");
    silk2.position.set(4,-0.2,0);
    silk2.visible=true;
    PIEaddElement(silk2);
    PIErender();
    PIEsetClick(silk2,silk2click);
    PIEdragElement(silk2);


     var geometry = new THREE.PlaneGeometry(4.5,5);
    silkcpositive = createMesh(geometry,"silkcpositive.png");
    silkcpositive.position.set(4,-0.2,0);
    silkcpositive.visible=false;
    PIEaddElement(silkcpositive);
    PIErender();
    PIEdragElement(silkcpositive);
    
    

    var geometry = new THREE.PlaneGeometry(1,1);
    steel = createMesh(geometry,"steel.png");
    steel.position.set(-10,-0.2,0);
    steel.visible=true;
    PIEaddElement(steel);
    PIErender();
    PIEsetClick(steel,steelclick);
    PIEdragElement(steel);

    
    var geometry = new THREE.PlaneGeometry(4,4);
    paperbit1 = createMesh(geometry,"paperbin.png");
    paperbit1.position.set(7,-3,1);
    paperbit1.visible=false;
    PIEaddElement(paperbit1);
    PIErender();

    var geometry = new THREE.PlaneGeometry(0.2,0.2);
    paperbit2 = createMesh(geometry,"paperbit.png");
    paperbit2.position.set(7,-3,-1);
    paperbit2.visible=true;
    PIEaddElement(paperbit2);
    PIErender();

    var geometry = new THREE.PlaneGeometry(0.2,0.2);
    paperbit3 = createMesh(geometry,"paperbit.png");
    paperbit3.position.set(7,-3,-1);
    paperbit3.visible=true;
    PIEaddElement(paperbit3);
    PIErender();

    var geometry = new THREE.PlaneGeometry(0.2,0.2);
    paperbit4 = createMesh(geometry,"paperbit.png");
    paperbit4.position.set(7,-3,-1);
    paperbit4.visible=true;
    PIEaddElement(paperbit4);
    PIErender();    





}





function glassvisible(){


        wool.visible=false;
        silk.visible=true;
        PIErender();
}

function ebonitevisible(){

sulphur.visible=true;
PIErender();
}

function steelclick(){
    namehide();
    text3.visible=false;
    PIEsetDrag(steel,steeldrag);

    plane4.visible=true;
    plane5.visible=false;

    plane3.visible=true;
    Materialid=6;
    ebonite.visible=false;
    fur.visible=false;
    glassrod.visible=false;
    comb.visible=false;
    silk2.visible=false;
    PIErender();
    silk.visible=true;
    PIErender();
    text2.visible=true;
    text13.visible=true;
    semicircle4.visible=true;
    semicircle3.visible=true;
    plane2.visible=true;
paperbit1.visible=true;
    PIErender();
}
function silk2click(){
    text3.visible=false;

    namehide();
    plane3.visible=true;
    plane4.visible=true;
    plane5.visible=false;
    PIEsetDrag(silk2,silk2drag);

    Materialid=5;
    ebonite.visible=false;
    fur.visible=false;
    glassrod.visible=false;
    comb.visible=false;
    steel.visible=false;
    silk2.position.set(-8,0,0);

    PIErender();
    copper.visible=true;
    // wax.visible=true;
    // silk2.position.set(-6,0,0);
    PIErender();
    semicircle4.visible=true;
    semicircle3.visible=true;
    plane2.visible=true;
    text2.visible=true;
    text18.visible=true;
    text19.visible=true;
    paperbit1.visible=true;
    PIErender();



}
function combclick(){
    namehide();
    plane3.visible=true;
    plane4.visible=true;
    plane5.visible=false;
    text3.visible=false;
    PIEsetDrag(combc,combcdrag);


    Materialid=4;
    ebonite.visible=false;
    fur.visible=false;
    glassrod.visible=false;
    silk2.visible=false;
    steel.visible=false;
    comb.position.set(-8,0,0);

    PIErender();
    hair.visible=true;
    PIErender();
    semicircle4.visible=true;
    semicircle3.visible=true;
    plane2.visible=true;
    text2.visible=true;
    text17.visible=true;
paperbit1.visible=true;
    PIErender();
}


function glassrodClick(){
    namehide();
    turn=0;
    plane3.visible=true;
    plane4.visible=true;
    plane5.visible=false;
    text3.visible=false;

PIEsetDrag(glassrod,glassdrag);
    Materialid=1;
    glassvisible();
    ebonite.visible=false;
    fur.visible=false;
    comb.visible=false;
    silk2.visible=false;
    steel.visible=false;
    glassrod.position.set(-8,0,0);

    PIErender();
    semicircle4.visible=true;
    semicircle3.visible=true;
    plane2.visible=true;
    text2.visible=true;
    text12.visible=false;
    text13.visible=true;
    paperbit1.visible=true;
    PIErender();

    

    // kl=1;
    // PIEstartAnimation();

}


function eboniterodClick(){
    namehide();
    plane3.visible=true;
    plane4.visible=true;
    plane5.visible=false;
    text3.visible=false;

    PIEsetDrag(ebonite,ebonitedrag);

    Materialid=2;
    glassrod.visible=false;
    fur.visible=false;
    comb.visible=false;
    silk2.visible=false;
    steel.visible=false;
    ebonite.position.set(-8,0,0);

    PIErender();
    semicircle4.visible=true;
    semicircle3.visible=true;
    plane2.visible=true;
    text2.visible=true;
    text16.visible=true;
    PIErender();

    ebonitevisible();
paperbit1.visible=true;
   
    // kl=1;
    // PIEstartAnimation();

}

function furClick(){
    plane3.visible=true;
    plane4.visible=true;
    plane5.visible=false;

    text3.visible=false;
    PIEsetDrag(fur,furdrag);

    namehide();
    Materialid=3;
    glassrod.visible=false;
    ebonite.visible=false;
    comb.visible=false;
    silk2.visible=false;
    fur.position.set(-8,0,0);
    steel.visible=false;
    PIErender();
    semicircle4.visible=true;
    semicircle3.visible=true;
    plane2.visible=true;
    text2.visible=true;

    PIErender();
    // amber.visible=true;
    polythene.visible=true;
    text14.visible=true;
    text15.visible=true;
    PIErender();

    // ebonitevisible();
paperbit1.visible=true;
    PIErender();
    // kl=1;
    // PIEstartAnimation();

}

function combcdrag(ele,newpos){

var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;


if(newx>5.7 && newx<8.2 && newy<0 && newy>-3)
{
    reached=1;
}

if(newy<-1){
    newy=-1;
}
if(reached==1){
    paperbit2.position.set(newx+0.1,newy-1,newz+1.000001);
    paperbit3.position.set(newx+0.3,newy-1.4,newz+1.000001);
    paperbit4.position.set(newx+0.5,newy-1.3,newz+1.000001);

    

}
ele.position.set(newx,newy,newz+1);
comb.position.drag(newx,newy,newz+1);



}




function furcdrag(ele,newpos){

var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;


if(newx>5.7 && newx<8.2 && newy<0 && newy>-3)
{
    reached=1;
}

if(newy<-1){
    newy=-1;
}
if(reached==1){
    paperbit2.position.set(newx+0.1,newy-1,newz+1.000001);
    paperbit3.position.set(newx+0.3,newy-1.4,newz+1.000001);
    paperbit4.position.set(newx+0.5,newy-1.3,newz+1.000001);



}
ele.position.set(newx,newy,newz+1);
fur.position.set(newx,newy,newz+1);




}



function ebonitecdrag(ele,newpos){

var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;


if(newx>5.7 && newx<8.2 && newy<0 && newy>-3)
{
    reached=1;
}

if(newy<-1){
    newy=-1;
}
if(reached==1){
    paperbit2.position.set(newx+0.1,newy-1,newz+1.000001);
    paperbit3.position.set(newx+0.3,newy-1.4,newz+1.000001);
    paperbit4.position.set(newx+0.5,newy-1.3,newz+1.000001);

}
ele.position.set(newx,newy,newz+1);
ebonite.position.set(newx,newy,newz+1);



}



function glassrodcdrag(ele,newpos){

var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;


if(newx>5.7 && newx<8.2 && newy<0 && newy>-3)
{
    reached=1;
}

if(newy<-1){
    newy=-1;
}
if(reached==1){
    paperbit2.position.set(newx+0.1,newy-1,newz+1.000001);
    paperbit3.position.set(newx+0.3,newy-1.4,newz+1.000001);
    paperbit4.position.set(newx+0.5,newy-1.3,newz+1.000001);

}
ele.position.set(newx,newy,newz+1);
glassrod.position.set(newx,newy,newz+1);



}


function glassdrag(ele,newpos){
PIEresetClick(glassrod);
var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;

if(ele.position.x >-2 && ele.position.y>-1.25 && ele.position.y<1.25 && ele.position.x<1.5 ){
    
if(newx>0.5){
    newx=0.5;
}
if(newx<-0.5){

    newx=-0.5;
}

if(newy>1.5)
{
    newy=1.5;

}

if(newy<-1.5){
    newy=-1.5;
}


if(newy>0.5 && turn==0){

    turn=1;
}
if(newy<0&& turn==1){
    counter=counter+1;

}

if(counter>2){
    glassrodc.position.set(newx,newy,newz+1. );
    glassrodc.visible=true;
    glassrod.visible=false;
    silkcnegative.visible=true;
    silk.visible=false;
}

 // silk.visible=false;   
}

ele.position.set(newx,newy,newz);

}


function ebonitedrag(ele,newpos){
PIEresetClick(ebonite);
var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;

if(ele.position.x >-2 && ele.position.y>-1.25 && ele.position.y<1.25 && ele.position.x<1.5 ){
    
if(newx>0.5){
    newx=0.5;
}
if(newx<-0.5){

    newx=-0.5;
}

if(newy>1.5)
{
    newy=1.5;

}

if(newy<-1.5){
    newy=-1.5;
}


if(newy>0.5 && turn==0){

    turn=1;
}
if(newy<0&& turn==1){
    counter=counter+1;

}

if(counter>2){
    ebonitecpositive.position.set(newx,newy,newz+1. );
    ebonitecpositive.visible=true;
    ebonite.visible=false;
    sulphurc.visible=true;
    sulphur.visible=false;
}

 // silk.visible=false;   
}

ele.position.set(newx,newy,newz);

}


function combdrag(ele,newpos){
PIEresetClick(ebonite);
var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;

if(ele.position.x >-2 && ele.position.y>-1.25 && ele.position.y<1.25 && ele.position.x<1.5 ){
    
if(newx>0.5){
    newx=0.5;
}
if(newx<-0.5){

    newx=-0.5;
}

if(newy>1.5)
{
    newy=1.5;

}

if(newy<-1.5){
    newy=-1.5;
}


if(newy>0.5 && turn==0){

    turn=1;
}
if(newy<0&& turn==1){
    counter=counter+1;

}

if(counter>2){
    combc.position.set(newx,newy,newz+1 );
    combc.visible=true;
    comb.visible=false;
    hairc.visible=true;
    hair.visible=false;
}

 // silk.visible=false;   
}

ele.position.set(newx,newy,newz);

}


function silk2drag(ele,newpos){
PIEresetClick(silk2);
var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;

if(ele.position.x >-2 && ele.position.y>-1.25 && ele.position.y<1.25 && ele.position.x<1.5 ){
    
if(newx>0.5){
    newx=0.5;
}
if(newx<-0.5){

    newx=-0.5;
}

if(newy>1.5)
{
    newy=1.5;

}

if(newy<-1.5){
    newy=-1.5;
}
}


if(newy>0.5 && turn==0){

    turn=1;
}
if(newy<0&& turn==1){
    counter=counter+1;

}

if(counter>2){
    // copper.position.set(newx,newy,newz+1 );
    // combc.visible=true;
    // comb.visible=false;
    // hairc.visible=true;
    // hair.visible=false;
    //copper.visible=false;
    text11.visible=false;
}

 // silk.visible=false;   


ele.position.set(newx,newy,newz);

}


function steeldrag(ele,newpos){
PIEresetClick(steel);
var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;

if(ele.position.x >-2 && ele.position.y>-1.25 && ele.position.y<1.25 && ele.position.x<1.5 ){
    
if(newx>0.5){
    newx=0.5;
}
if(newx<-0.5){

    newx=-0.5;
}

if(newy>1.5)
{
    newy=1.5;

}

if(newy<-1.5){
    newy=-1.5;
}
}


if(newy>0.5 && turn==0){

    turn=1;
}
if(newy<0&& turn==1){
    counter=counter+1;

}

if(counter>2){
    // copper.position.set(newx,newy,newz+1 );
    // combc.visible=true;
    // comb.visible=false;
    // hairc.visible=true;
    // hair.visible=false;
    // silk.visible=false;
    text11.visible=false;
}

 // silk.visible=false;   


ele.position.set(newx,newy,newz);

}



function furdrag(ele,newpos){
PIEresetClick(ebonite);
var newx=newpos.x;
var newy=newpos.y;
var newz=newpos.z;

if(ele.position.x >-2 && ele.position.y>-1.25 && ele.position.y<1.25 && ele.position.x<1.5 ){
    
if(newx>0.5){
    newx=0.5;
}
if(newx<-0.5){

    newx=-0.5;
}

if(newy>1.5)
{
    newy=1.5;

}

if(newy<-1.5){
    newy=-1.5;
}


if(newy>0.5 && turn==0){

    turn=1;
}
if(newy<0&& turn==1){
    counter=counter+1;

}

if(counter>2){
    furc.position.set(newx,newy,newz+1 );
    furc.visible=true;
    fur.visible=false;
    polythenec.visible=true;
    polythene.visible=false;
}

 // silk.visible=false;   
}

ele.position.set(newx,newy,newz);

}


function loadExperimentElements(){
    var loader, tex, material, geometry;

    PIEsetExperimentTitle("Charging By Rubbing");
    PIEsetDeveloperName("Anuroop Gubbala");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseControls();
    initialiseScene();
    images();
    rubbingmaterials();
    text();


   
  
    PIEsetAreaOfInterest(-7, 7, 7, -7);
    PIEscene.background=new THREE.Color( 0x000619 );
    // PIEscene.background=new THREE.Color(0x23140F);


            
    PIEcreateTable("Table",1,2,"Observations",false);
    PIEtableSelect("Table");
    PIEsetColumnInput(0,25,"Pair");
    PIEsetColumnInput(1,25,"Charged?");
    // PIEupdateTableCell(0,0,"rrr");

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

function glassrodmovement(dt){

var velocity=1;
    if(glassrod.position.x<3){
        glassrod.position.x=glassrod.position.x+(0.01*dt);

    }else if(glassrod.position.y<2.5){
        velocity=-1;
        glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
    }
    // else if(glassrod.position.y<-2.5){
    //     velocity=1;
        


    // }

    // glassrod.position.y=glassrod.position.y+(velocity*(0.001*dt));

}

function namehide(){
    text4.visible=false;
    text5.visible=false;
    text6.visible=false;
    text7.visible=false;
    text8.visible=false;
    text9.visible=false;
    // text10.visible=false;
    // text4.visible=false;


}


 var velocity=1;


function text(){
    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Materials", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text1 = new THREE.Mesh(textGeom, textMaterial);
        text1.position.set(-10,2.9,0);
        
        PIEaddElement(text1);
        text1.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Rubbing Materials", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text2 = new THREE.Mesh(textGeom, textMaterial);
        text2.position.set(-1.5,2.9,0);
        
        PIEaddElement(text2);
        text2.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Click Any One", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text3 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text3.position.set(3,2.5,0)
        PIEaddElement(text3);
        text3.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });



    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Steel", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text9 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text9.position.set(-10.3,-2.5,0)
        PIEaddElement(text9);
        text9.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


      var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Comb", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text4 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text4.position.set(-8.3,-2.5,0);
        PIEaddElement(text4);
        text4.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });
      var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Glass", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text5 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text5.position.set(-6,-2.5,0)
        PIEaddElement(text5);
        text5.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });
    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Ebonite", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text6 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text6.position.set(-4,-2.5,0)
        PIEaddElement(text6);
        text6.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Fur", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text7 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text7.position.set(0,-2.5,0)
        PIEaddElement(text7);
        text7.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Silk", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text8 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text8.position.set(4,-2.5,0);
        PIEaddElement(text8);
        text8.visible=true;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" Charge Generated", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text10 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text10.position.set(-4,5,0)
        PIEaddElement(text10);
        text10.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Charge Not Generated", 
        {
            size: 0.2, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text11 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text11.position.set(-4,5,0)
        PIEaddElement(text11);
        text11.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Right Answer", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text20 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text20.position.set(4,6,0)
        PIEaddElement(text20);
        text20.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });

     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Wrong Answer", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text21 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text21.position.set(4,6,0)
        PIEaddElement(text21);
        text21.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Is The Material Charged?", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text22 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text22.position.set(-7,6,0)
        PIEaddElement(text22);
        text22.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });


    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Submit your Answer->", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text23 = new THREE.Mesh(textGeom, textMaterial);
        // text3.position.set(-10.5,2,0);
        text23.position.set(3.5,6,0)
        PIEaddElement(text23);
        text23.visible=false;
        // PIEdragElement(textMesh1);
        // PIEsetDrag(textMesh1,myMainDrag);
        // PIEsetDragEnd(textMesh1,myTwoEnd);
        PIErender();
    });







}

function draghelper(ele,newpos)
{


    ele.position.set(newpos.x,newpos.y,newpos.z);
    if(ele.position.x > 1.5 && ele.position.y>-2 && ele.position.y<2 && ele.position.x<4.5 ){
    

    ele.visible=false;
}

    // rotate=1;
    // PIEstartAnimation();
    // purse2.rotation.z=0;


}


function updateExperimentElements(t, dt)
        {       
            // PIEstopAnimation();

            // PIEremoveElement(nline);
               	var time  = t/1000;



               	if(time >= 1.5 &&kl==1){


                       


                    PIEstopAnimation();
                    kl=0;
                }else{






                }


                if(kl == 0){

    plane3.visible=false;
    plane4.visible=false;
    plane5.visible=false;


                   if(Materialid==1){

                    if(id==2) {

                            // // glassrodmovement(dt);
                         if(count<2){   
                            if(glassrod.position.x<2.7){
                                glassrod.position.x=glassrod.position.x+(0.01*dt);
                                glassrodc.position.x=glassrod.position.x;


                            }else {

                            if(glassrod.position.y>2.5){
                                velocity=-1;
                                // count=count+1;
                                if(count>0){
                                    glassrodc.visible=true;
                                    glassrod.visible=false;
                                    silkcnegative.visible=true;
                                    silk.visible=false;

                                }
                                glassrod.position.y=glassrod.position.y+(velocity)*(0.004*dt);
                                glassrodc.position.y=glassrodc.position.y+(velocity)*(0.004*dt);
                            }
                            else if(glassrod.position.y<-0.5){
                                velocity=1;
                                count=count+1;
                                glassrod.position.y=glassrod.position.y+(velocity)*(0.004*dt);
                                glassrodc.position.y=glassrodc.position.y+(velocity)*(0.004*dt);


                            }else{
                                glassrod.position.y=glassrod.position.y+(velocity)*(0.004*dt);
                                glassrodc.position.y=glassrodc.position.y+(velocity)*(0.004*dt);
                            }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                           }

                       }else{

                        if(silk.position.x>-12)
                        {
                            silk.position.x=silk.position.x-(0.01*dt);
                            silkcnegative.position.x=silkcnegative.position.x-(0.01*dt);
                            

                        }


                        if(paperbit1.position.x>glassrod.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                        }else{
                            silk.visible=false;
                            silkcnegative.visible=false;

                            // PIEdragElement(glassrod);

                            if(glassrodc.position.y<1){

                                var x=glassrodc.position.x;
                                var y=glassrodc.position.y;
                                var z=glassrodc.position.z;

                                y=y+(0.001*dt);

                                glassrodc.position.set(x,y,z);
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                            }

                                 PIEupdateTableCell(0,0,"Glass-Silk");
                                 PIEupdateTableCell(0,1,"Charge Generated");
                                // text5.position.set(10,2,0);
                                // text5.visible=true;
                                text10.visible=true;

                            // PIEstopAnimation();
                        }

                       }
                    }

                else if(id==1){


                        if(count<2){
                        if(glassrod.position.x<-0.7){
                                glassrod.position.x=glassrod.position.x+(0.01*dt);
                                glassrodc.position.x=glassrod.position.x;

                            }else {

                            if(glassrod.position.y>1){
                                velocity=-1;
                                // count=count+1;
                                if(count>0){
                                    glassrodc.visible=true;
                                    glassrod.visible=false;
                                    woolc.visible=true;
                                    wool.visible=false;

                                }
                                glassrod.position.y=glassrod.position.y+(velocity)*(0.004*dt);
                                glassrodc.position.y=glassrodc.position.y+(velocity)*(0.004*dt);


                            }
                            else if(glassrod.position.y<0){
                                velocity=1;
                                count=count+1;
                                glassrod.position.y=glassrod.position.y+(velocity)*(0.004*dt);
                                
                                glassrodc.position.y=glassrodc.position.y+(velocity)*(0.004*dt);


                            }else{
                                glassrod.position.y=glassrod.position.y+(velocity)*(0.004*dt);
                                glassrodc.position.y=glassrodc.position.y+(velocity)*(0.004*dt);

                                }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                            }

                            }else{


                            if(wool.position.x>-12)
                            {
                                wool.position.x=wool.position.x-(0.01*dt);
                                woolc.position.x=woolc.position.x-(0.01*dt);
                               

                            }else{
                                wool.visible=false;
                                woolc.visible=false;

                                
                            }
                            if(paperbit1.position.x>glassrod.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                            }else{

                                 PIEdragElement(glassrodc);


                                 if(glassrodc.position.y<1){

                                var x=glassrodc.position.x;
                                var y=glassrodc.position.y;
                                var z=glassrodc.position.z;

                                y=y+(0.001*dt);

                                glassrodc.position.set(x,y,z);
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                                }

                                // paperbit1.position.y=paperbit1.position.y+(0.01*dt);
                                // paperbit2.position.y=paperbit2.position.y+(0.01*dt);
                                // text5.position.set(10,2,0);
                                // text5.visible=true;
                                text10.visible=true;
                                 PIEupdateTableCell(0,0,"Glass-Wool");
                                 PIEupdateTableCell(0,1,"Charge Generated");

                                    // PIEstopAnimation();
                                }



                        }

                    }

                    

                }else if(Materialid==2){


                    if(id==1){

                         if(count<2){
                        if(ebonite.position.x<-0.7){
                                ebonite.position.x=ebonite.position.x+(0.01*dt);
                                ebonitecpositive.position.x=ebonite.position.x;

                            }else {

                            if(ebonite.position.y>1){
                                velocity=-1;
                                // count=count+1;
                                        if(count>0){
                                    ebonitecpositive.visible=true;
                                    ebonite.visible=false;
                                    sulphurc.visible=true;
                                    sulphur.visible=false;

                                }
                                ebonite.position.y=ebonite.position.y+(velocity)*(0.004*dt);
                                ebonitecpositive.position.y=ebonitecpositive.position.y+(velocity)*(0.004*dt);

                            }
                            else if(ebonite.position.y<0){
                                velocity=1;
                                count=count+1;
                        
                                ebonite.position.y=ebonite.position.y+(velocity)*(0.004*dt);
                                ebonitecpositive.position.y=ebonitecpositive.position.y+(velocity)*(0.004*dt);
                                


                            }else{
                                ebonite.position.y=ebonite.position.y+(velocity)*(0.004*dt);
                                // ebonite.position.y=ebonite.position.y+(velocity)*(0.004*dt);
                                ebonitecpositive.position.y=ebonitecpositive.position.y+(velocity)*(0.004*dt);


                                }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                            }

                            }else{


                            if(sulphur.position.x>-12)
                            {
                                sulphur.position.x=sulphur.position.x-(0.01*dt);
                                sulphurc.position.x=sulphurc.position.x-(0.01*dt);
                               

                            }else{
                                sulphur.visible=false;
                                sulphurc.visible=false;

                                
                            }
                            if(paperbit1.position.x>ebonite.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                            }else{

                                     
                                if(ebonitecpositive.position.y<1){

                                var x=ebonitecpositive.position.x;
                                var y=ebonitecpositive.position.y;
                                var z=ebonitecpositive.position.z;

                                y=y+(0.001*dt);

                                ebonitecpositive.position.set(x,y,z);
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                                }
                                // paperbit1.position.y=paperbit1.position.y+(0.01*dt);
                                // paperbit2.position.y=paperbit2.position.y+(0.01*dt);
                                // text6.position.set(10,2,0);
                                // text6.visible=true;
                                text10.visible=true;
                                 PIEupdateTableCell(0,0,"Ebonite-Suplhur");
                                 PIEupdateTableCell(0,1,"Charge Generated");

                                    // PIEstopAnimation();
                                }


                        }

                    }

                }

                else if(Materialid==3){



                    if(id==1){

                        if(count<2){
                        if(fur.position.x<-2.7){
                                fur.position.x=fur.position.x+(0.01*dt);
                                furc.position.x=fur.position.x;

                            }else {

                            if(fur.position.y>2.5){
                                velocity=-1;
                                // count=count+1;
                                  if(count>0){
                                    furc.visible=true;
                                    fur.visible=false;
                                    polythenec.visible=true;
                                    polythene.visible=false;

                                }
                                fur.position.y=fur.position.y+(velocity)*(0.004*dt);
                                furc.position.y=furc.position.y+(velocity)*(0.004*dt);

                            }
                            else if(fur.position.y<-0.5){
                                velocity=1;
                                count=count+1;
                                fur.position.y=fur.position.y+(velocity)*(0.004*dt);
                                furc.position.y=furc.position.y+(velocity)*(0.004*dt);
                                


                            }else{
                                fur.position.y=fur.position.y+(velocity)*(0.004*dt);
                                furc.position.y=furc.position.y+(velocity)*(0.004*dt);

                                }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                            }

                            }else{


                            if(polythene.position.x>-12)
                            {
                                polythene.position.x=polythene.position.x-(0.01*dt);
                                polythenec.position.x=polythenec.position.x-(0.01*dt);
                               

                            }else{
                                polythene.visible=false;
                                polythenec.visible=false;

                                
                            }
                            if(paperbit1.position.x>fur.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                            }else{

                                    
                                if(furc.position.y<1){

                                var x=furc.position.x;
                                var y=furc.position.y;
                                var z=furc.position.z;

                                y=y+(0.001*dt);

                                furc.position.set(x,y,z);
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                                } 
                                // text7.position.set(10,2,0);
                                // text7.visible=true;
                                text10.visible=true;
                                PIErender();
                                 PIEupdateTableCell(0,0,"Fur-Polythene");
                                 PIEupdateTableCell(0,1,"Charge Generated");
                                // paperbit1.position.y=paperbit1.position.y+(0.01*dt);
                                // paperbit2.position.y=paperbit2.position.y+(0.01*dt);
                                    // PIEstopAnimation();
                                }


                        }

                    }

                    else if(id==2) {

                            // // glassrodmovement(dt);
                         if(count<2){   
                            if(fur.position.x<3.7){
                                fur.position.x=fur.position.x+(0.01*dt);
                                furc.position.x=fur.position.x;


                            }else {

                            if(fur.position.y>2.5){
                                velocity=-1;
                                // count=count+1;
                                if(count>0){
                                    furc.visible=true;
                                    fur.visible=false;
                                    amberc.visible=true;
                                    amber.visible=false;

                                }
                                fur.position.y=fur.position.y+(velocity)*(0.004*dt);
                                furc.position.y=furc.position.y+(velocity)*(0.004*dt);

                            }
                            else if(fur.position.y<-0.5){
                                velocity=1;
                                count=count+1;
                                fur.position.y=fur.position.y+(velocity)*(0.004*dt);
                                furc.position.y=furc.position.y+(velocity)*(0.004*dt);

                                


                            }else{
                                fur.position.y=fur.position.y+(velocity)*(0.004*dt);
                                furc.position.y=furc.position.y+(velocity)*(0.004*dt);


                            }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                           }

                       }else{

                        if(amber.position.x>-12)
                        {
                            amber.position.x=amber.position.x-(0.01*dt);
                            amberc.position.x=amberc.position.x-(0.01*dt);
                           

                        } if(paperbit1.position.x>fur.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                        }else{
                            amber.visible=false;
                            amberc.visible=false;
                                if(furc.position.y<1){

                                var x=furc.position.x;
                                var y=furc.position.y;
                                var z=furc.position.z;

                                y=y+(0.001*dt);

                                furc.position.set(x,y,z);
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                                } 

                                // text7.position.set(10,2,0);
                                // text7.visible=true;
                                text10.visible=true;

                                PIErender();
                                 PIEupdateTableCell(0,0,"Fur-Amber");
                                 PIEupdateTableCell(0,1,"Charge Generated");
                            // PIEstopAnimation();
                        }

                       }

                    }





                }



                else if(Materialid==4){



                    if(id==1){

                        if(count<2){
                        if(comb.position.x<-2.7){
                                comb.position.x=comb.position.x+(0.01*dt);
                                combc.position.x=comb.position.x;


                            }else {

                            if(comb.position.y>2.5){
                                velocity=-1;
                                // count=count+1;
                                   if(count>0){
                                    combc.visible=true;
                                    comb.visible=false;
                                    hairc.visible=true;
                                    hair.visible=false;

                                }
                                comb.position.y=comb.position.y+(velocity)*(0.004*dt);
                                combc.position.y=combc.position.y+(velocity)*(0.004*dt);
                                
                            }
                            else if(comb.position.y<-0.5){
                                velocity=1;
                                count=count+1;
                                comb.position.y=comb.position.y+(velocity)*(0.004*dt);
                                combc.position.y=combc.position.y+(velocity)*(0.004*dt);
                                


                            }
                            else{
                                comb.position.y=comb.position.y+(velocity)*(0.004*dt);
                                combc.position.y=combc.position.y+(velocity)*(0.004*dt);

                                }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                            }

                            }else{


                            if(hair.position.x>-12)
                            {
                                hair.position.x=hair.position.x-(0.01*dt);
                                hairc.position.x=hairc.position.x-(0.01*dt);
                               

                            }else{
                                hair.visible=false;
                                hairc.visible=false;

                                
                            }
                            if(paperbit1.position.x>comb.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                            }else{

                                if(combc.position.y<1){

                                var x=combc.position.x;
                                var y=combc.position.y;
                                var z=combc.position.z;

                                y=y+(0.001*dt);

                                combc.position.set(x,y,z);
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                                } 

                                // text4.position.set(10,2,0);
                                // text4.visible=true;
                                text10.visible=true;
                                 PIEupdateTableCell(0,0,"Comb-Hair");
                                 PIEupdateTableCell(0,1,"Charge Generated");
                                     
                                // paperbit1.position.y=paperbit1.position.y+(0.01*dt);
                                // paperbit2.position.y=paperbit2.position.y+(0.01*dt);
                                    // PIEstopAnimation();
                                }


                        }

                    }

                    

                }else if(Materialid==5){



                    if(id==1){

                        if(count<2){
                        if(silk2.position.x<-2){
                                silk2.position.x=silk2.position.x+(0.01*dt);

                            }else {

                            if(silk2.position.y>2.5){
                                velocity=-1;
                                // count=count+1;


                                silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
                            }
                            else if(silk2.position.y<-0.5){
                                velocity=1;
                                count=count+1;
                                silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
                                


                            }else{
                                silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);

                                }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                            }

                            }else{


                            if(copper.position.x>-12)
                            {
                                copper.position.x=copper.position.x-(0.01*dt);
                               

                            }else{
                                copper.visible=false;

                                
                            }
                            if(paperbit1.position.x>silk2.position.x ){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                            }else{


                                if(silk2.position.y<1){

                                var x=silk2.position.x;
                                var y=silk2.position.y;
                                var z=silk2.position.z;

                                y=y+(0.001*dt);

                                silk2.position.set(x,y,z);
                                // paperbit2.position.set(x+0.1,y-1,z);
                                // paperbit3.position.set(x+0.3,y-1.4,z);
                                // paperbit4.position.set(x+0.5,y-1.3,z);

                                } 

                                // text8.position.set(10,2,0);
                                // text8.visible=true;
                                
                                text11.visible=true;
                                 PIEupdateTableCell(0,0,"Silk-Copper");
                                 PIEupdateTableCell(0,1,"Charge Not Generated");

                                // paperbit1.position.y=paperbit1.position.y+(0.01*dt);
                                // paperbit2.position.y=paperbit2.position.y+(0.01*dt);
                                    // PIEstopAnimation();
                                }


                        }

                    }
                           else if(id==2) {

                            // // glassrodmovement(dt);
                         if(count<2){   
                            if(silk2.position.x<3.7){
                                silk2.position.x=silk2.position.x+(0.01*dt);
                                silkcpositive.position.x=silk2.position.x;


                            }else {

                            if(silk2.position.y>0.5){
                                velocity=-1;
                                   if(count>0){
                                    silkcpositive.visible=true;
                                    silk2.visible=false;
                                    waxc.visible=true;
                                    wax.visible=false;

                                }
                                silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
                                silkcpositive.position.y=silkcpositive.position.y+(velocity)*(0.004*dt);

                            }
                            else if(silk2.position.y<-0.5){
                                velocity=1;
                                count=count+1;
                                silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
                                silkcpositive.position.y=silkcpositive.position.y+(velocity)*(0.004*dt);

                                


                            }else{
                                silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
                                silkcpositive.position.y=silkcpositive.position.y+(velocity)*(0.004*dt);


                            }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                           }

                       }else{

                        if(wax.position.x>-12)
                        {
                            wax.position.x=wax.position.x-(0.01*dt);
                            waxc.position.x=waxc.position.x-(0.01*dt);
                            
                        } 
                        if(paperbit1.position.x>silk2.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                        }else{
                            wax.visible=false;
                            waxc.visible=false;
                              if(silkcpositive.position.y<1){

                                var x=silkcpositive.position.x;
                                var y=silkcpositive.position.y;
                                var z=silkcpositive.position.z;

                                y=y+(0.001*dt);

                                silkcpositive.position.set(x,y,z);
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                                // text8.position.set(10,2,0);
                                // text8.visible=true;
                                text10.visible=true;
                                 PIEupdateTableCell(0,0,"Silk-Wax");
                                 PIEupdateTableCell(0,1,"Charge Generated");

                            // PIEstopAnimation();
                            }
                        }

                       }

                    }

                   
                }else if(Materialid==6){


                    if(id==2) {

                            // // glassrodmovement(dt);
                         if(count<2){   
                            if(steel.position.x<2.7){
                                steel.position.x=steel.position.x+(0.01*dt);

                            }else {

                            if(steel.position.y>1.5){
                                velocity=-1;
                                // count=count+1;

                                steel.position.y=steel.position.y+(velocity)*(0.004*dt);
                            }
                            else if(steel.position.y<-1.0){
                                velocity=1;
                                count=count+1;
                                steel.position.y=steel.position.y+(velocity)*(0.004*dt);
                                


                            }else{
                                steel.position.y=steel.position.y+(velocity)*(0.004*dt);

                            }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                           }

                       }else{

                        if(silk.position.x>-12)
                        {
                            silk.position.x=silk.position.x-(0.01*dt);
                            

                        }


                        if(paperbit1.position.x>steel.position.x){

                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                        }else{
                            silk.visible=false;
                            // PIEdragElement(glassrod);

                            if(steel.position.y<1){

                                var x=steel.position.x;
                                var y=steel.position.y;
                                var z=steel.position.z;

                                y=y+(0.001*dt);

                                steel.position.set(x,y,z);

                                // text9.position.set(10,2,0);
                                // text9.visible=true;
                                text11.visible=true;
                                 PIEupdateTableCell(0,0,"Steel-Silk");
                                 PIEupdateTableCell(0,1,"Charge Not Generated");
                                // paperbit2.position.set(x-0.3,y-0.3,z);
                                // paperbit3.position.set(x,y-0.5,z);
                                // paperbit4.position.set(x+0.3,y-0.2,z);

                            }


                            // PIEstopAnimation();
                        }

                       }
                    }
                }




                if(learnmasterid==1){

                    if(learnid==1){

                        learnmovement(glassrod,glassrodc,wool,woolc,dt);
                        PIEupdateTableCell(0,0,"glassrod-wool");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==2){

                        learnmovement(glassrod,glassrodc,hair,hairc,dt);
                        PIEupdateTableCell(0,0,"glassrod-Hair");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==3){

                        learnmovement(glassrod,glassrodc,silk,silkcnegative,dt);
                         PIEupdateTableCell(0,0,"glassrod-Silk");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==4){

                        learnmovement(glassrod,glassrodc,amber,amberc,dt);

                         PIEupdateTableCell(0,0,"glassrod-Amber");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==5){
                        precaution=1;

                        learnmovement(glassrod,glassrod,copper,copper,dt);
                         PIEupdateTableCell(0,0,"glassrod-Copper");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==6){

                        learnmovement(glassrod,glassrodc,wax,waxc,dt);
                         PIEupdateTableCell(0,0,"glassrod-Wax");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else {

                        learnmovement(glassrod,glassrodc,polythene,polythenec,dt);
                         PIEupdateTableCell(0,0,"glassrod-Polythene");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }




                }else if(learnmasterid==2){

                    if(learnid==1){

                        learnmovement(ebonite,ebonitecpositive,wool,woolc,dt);
                         PIEupdateTableCell(0,0,"Ebonite-wool");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==2){

                         learnmovement(ebonite,ebonitecpositive,hair,hairc,dt);
                        PIEupdateTableCell(0,0,"Ebonite-hair");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==3){

                         learnmovement(ebonite,ebonitecpositive,silk,silkcnegative,dt);
                        PIEupdateTableCell(0,0,"Ebonite-Silk");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==4){

                        learnmovement(ebonite,ebonitecpositive,amber,amberc,dt);
                        PIEupdateTableCell(0,0,"Ebonite-Amber");
                        PIEupdateTableCell(0,1,"Charge  Generated");
                    }else if(learnid==5){
                        precaution=1;

                        learnmovement(ebonite,ebonitecpositive,copper,copper,dt);
                        PIEupdateTableCell(0,0,"Ebonite-Copper");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==6){

                        learnmovement(ebonite,ebonitecpositive,wax,waxc,dt);
                        PIEupdateTableCell(0,0,"Ebonite-Wax");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else {

                        learnmovement(ebonite,ebonitecpositive,polythene,polythenec,dt);
                        PIEupdateTableCell(0,0,"Ebonite-Polythene");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }




                }else if(learnmasterid==3){

                    if(learnid==1){

                        learnmovement(comb,combc,wool,woolc,dt);
                        PIEupdateTableCell(0,0,"Comb-wool");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==2){

                        learnmovement(comb,combc,hair,hairc,dt);
                         PIEupdateTableCell(0,0,"Comb-Hair");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==3){

                        learnmovement(comb,combc,silk,silkcnegative,dt);
                         PIEupdateTableCell(0,0,"Comb-Silk");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==4){

                        learnmovement(comb,combc,amber,amberc,dt);
                         PIEupdateTableCell(0,0,"Comb-Amber");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==5){
                        precaution=1;

                        learnmovement(comb,comb,copper,copper,dt);
                         PIEupdateTableCell(0,0,"Comb-Copper");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==6){

                        learnmovement(comb,combc,wax,waxc,dt);
                         PIEupdateTableCell(0,0,"Comb-Wax");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else {

                        learnmovement(comb,combc,polythene,polythenec,dt);
                         PIEupdateTableCell(0,0,"Comb-Polythene");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }




                }else if(learnmasterid==4){

                    if(learnid==1){

                        learnmovement(silk2,silkcpositive,wool,woolc,dt);
                        PIEupdateTableCell(0,0,"Silk-Wool");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==2){

                        learnmovement(silk2,silkcpositive,hair,hairc,dt);
                         PIEupdateTableCell(0,0,"Silk-Hair");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==100){

                        
                    }else if(learnid==3){

                        learnmovement(silk2,silkcpositive,amber,amberc,dt);
                         PIEupdateTableCell(0,0,"Silk-Amber");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==4){
                        precaution=1;
                        learnmovement(silk2,silk2,copper,copper,dt);
                         PIEupdateTableCell(0,0,"Silk-Copper");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==5){

                        learnmovement(silk2,silkcpositive,wax,waxc,dt);
                         PIEupdateTableCell(0,0,"Silk-Wax");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else{

                        learnmovement(silk2,silkcpositive,polythene,polythenec,dt);
                         PIEupdateTableCell(0,0,"Silk-Polythene");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }




                }else if(learnmasterid==5){

                    if(learnid==1){

                        learnmovement(fur,furc,wool,woolc,dt);
                         PIEupdateTableCell(0,0,"Fur-Wool");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==2){

                        learnmovement(fur,furc,hair,hairc,dt);
                        PIEupdateTableCell(0,0,"Fur-Hair");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==3){

                        learnmovement(fur,furc,silk,silkc,dt);
                        PIEupdateTableCell(0,0,"Fur-Silk");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }else if(learnid==4){

                        learnmovement(fur,furc,amber,amberc,dt);
                    }else if(learnid==5){
                        precaution=1;
                        learnmovement(fur,fur,copper,copper,dt);
                        PIEupdateTableCell(0,0,"Fur-Copper");
                        PIEupdateTableCell(0,1,"Charge  Not Generated");
                    }else if(learnid==6){

                        learnmovement(fur,furc,wax,waxc,dt);
                        PIEupdateTableCell(0,0,"Fur-Wax");
                        PIEupdateTableCell(0,1,"Charge  Generated");
                    }else {

                        learnmovement(fur,furc,polythene,polythenec,dt);
                        PIEupdateTableCell(0,0,"Fur-Polythene");
                        PIEupdateTableCell(0,1,"Charge Generated");
                    }




                }else if(learnmasterid==6){
                    precaution=1;
                    if(learnid==1){
                        
                        learnmovement(steel,steel,wool,wool,dt);
                        PIEupdateTableCell(0,0,"Steel-Wool");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==2){

                        learnmovement(steel,steel,hair,hair,dt);
                         PIEupdateTableCell(0,0,"Steel-Hair");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==3){

                        learnmovement(steel,steel,silk,silk,dt);
                         PIEupdateTableCell(0,0,"Steel-Silk");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==4){

                        learnmovement(steel,steel,amber,amber,dt);
                         PIEupdateTableCell(0,0,"Steel-Amber");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==5){
                        precaution=1;
                        learnmovement(steel,steel,copper,copper,dt);
                         PIEupdateTableCell(0,0,"Steel-Copper");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else if(learnid==6){

                        learnmovement(steel,steel,wax,wax,dt);
                         PIEupdateTableCell(0,0,"Steel-Wax");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }else {

                        learnmovement(steel,steel,polythene,polythene,dt);
                         PIEupdateTableCell(0,0,"Steel-Polythene");
                        PIEupdateTableCell(0,1,"Charge Not Generated");
                    }




                }

            
            



            }









        }

// if(choice==1){
//                             Learnmasterid=1;
//                             glassrod.visible=true;
//                             glassrod.position.x=-6;
//                             PIErender();

//             }else if(choice==2){
//                             learnmasterid=2;
//                             ebonite.visible=true;
//                             ebonite.position.x=-6;
//                             PIErender();
//              }else if(choice==3){
//                             learnmasterid=3;
//                             comb.visible=true;
//                             comb.position.x=-6;
//                             PIErender();

//              }else if(choice==4){
//                             learnmasterid=4;
//                             silk2.visible=true;
//                             silk2.position.x=-6;

//                             PIErender();

//              }else{
//                             learnmasterid=5;
//                             fur.visible=true;
//                             fur.position.x=-6;

//                             PIErender();

//              }


//              if(choice2==1){
//                     learnid=1;
//                     wool.visible=true;
//                     wool.position.x=3;
//                     PIErender();
//              }else if(choice2==2){
//                     learnid=2;
//                     hair.visible=true;
//                     hair.position.x=3;
//                     PIErender();
//              }else if(choice2==3){
//                     learnid=3;
//                     silk.visible=true;
//                     silk.position.x=3;
//                     PIErender();
//              }else if(choice2==4){
//                     learnid=4;
//                     amber.visible=true;
//                     amber.position.x=3;
//                     PIErender();

//              }else if(choice2==5){
//                     learnid=5;
//                     copper.visible=true;
//                     copper.position.x=3;
//                     PIErender();

//              }else if(choice2==6){
//                     learnid=6;
//                     wax.visible=true;
//                     wax.position.x=3;
//                     PIErender();

//              }else if(choice2==7){
//                     learnid=7;
//                     polythene.visible=true;
//                     polythene.position.x=3;
//                     PIErender();

//              }


   // if(count<2){   
   //                          if(silk2.position.x<3.7){
   //                              silk2.position.x=silk2.position.x+(0.01*dt);
   //                              silkcpositive.position.x=silk2.position.x;


   //                          }else {

   //                          if(silk2.position.y>0.5){
   //                              velocity=-1;
   //                                 if(count>0){
   //                                  silkcpositive.visible=true;
   //                                  silk2.visible=false;
   //                                  waxc.visible=true;
   //                                  wax.visible=false;

   //                              }
   //                              silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
   //                              silkcpositive.position.y=silkcpositive.position.y+(velocity)*(0.004*dt);

   //                          }
   //                          else if(silk2.position.y<-0.5){
   //                              velocity=1;
   //                              count=count+1;
   //                              silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
   //                              silkcpositive.position.y=silkcpositive.position.y+(velocity)*(0.004*dt);

                                


   //                          }else{
   //                              silk2.position.y=silk2.position.y+(velocity)*(0.004*dt);
   //                              silkcpositive.position.y=silkcpositive.position.y+(velocity)*(0.004*dt);


   //                          }

   //                              // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
   //                         }

   //                     }else{

   //                      if(wax.position.x>-12)
   //                      {
   //                          wax.position.x=wax.position.x-(0.01*dt);
   //                          waxc.position.x=waxc.position.x-(0.01*dt);
                            
   //                      } 
   //                      if(paperbit1.position.x>silk2.position.x){

   //                              paperbit1.position.x=paperbit1.position.x-(0.01*dt);
   //                              paperbit2.position.x=paperbit2.position.x-(0.01*dt);

   //                      }else{
   //                          wax.visible=false;
   //                          waxc.visible=false;
   //                            if(silkcpositive.position.y<1){

   //                              var x=silkcpositive.position.x;
   //                              var y=silkcpositive.position.y;
   //                              var z=silkcpositive.position.z;

   //                              y=y+(0.001*dt);

   //                              silkcpositive.position.set(x,y,z);
   //                              paperbit2.position.set(x+0.1,y-1,z);
   //                              paperbit3.position.set(x+0.3,y-1.4,z);
   //                              paperbit4.position.set(x+0.5,y-1.3,z);

   //                              // text8.position.set(10,2,0);
   //                              // text8.visible=true;
   //                              text10.visible=true;
   //                               PIEupdateTableCell(0,0,"Silk-Wax");
   //                               PIEupdateTableCell(0,1,"Charge Generated");

   //                          // PIEstopAnimation();
   //                          }
   //                      }

   //                     }


function learnmovement(object,objectc,surface,surfacec,dt){

      
if(submit==1){
                      if(count<2){
                        if(object.position.x<2.7){
                                object.position.x=object.position.x+(0.01*dt);
                                 objectc.position.x=object.position.x;
                            }else {

                            if(object.position.y>2.5){
                                velocity=-1;
                                // count=count+1;

                                if(count>0){

                                    if(precaution==0){
                                    objectc.visible=true;
                                    object.visible=false;
                                    surfacec.position.set(surface.position.x,surface.position.y,surface.position.z);
                                    surfacec.visible=true;
                                    surface.visible=false;
                                    }
                                    else{

                                    }
                                }
                                object.position.y=object.position.y+(velocity)*(0.004*dt);
                                objectc.position.y=objectc.position.y+(velocity)*(0.004*dt);

                            }
                            else if(object.position.y<-0.5){
                                velocity=1;
                                count=count+1;     
                                object.position.y=object.position.y+(velocity)*(0.004*dt);
                                objectc.position.y=objectc.position.y+(velocity)*(0.004*dt);
                                


                            }else{
                                object.position.y=object.position.y+(velocity)*(0.004*dt);
                                objectc.position.y=objectc.position.y+(velocity)*(0.004*dt);

                                }

                                // glassrod.position.y=glassrod.position.y+(velocity)*(0.001*dt);
                            }

                            }else{


                            if(surface.position.x>-12)
                            {
                                surface.position.x=surface.position.x-(0.01*dt);
                                surfacec.position.x=surface.position.x-(0.01*dt);
                               

                            }else{
                                if(precaution==0){
                                surface.visible=false;
                                surfacec.visible=false;
                                }
                                else{
                                    surface.visible=false;
                                    surfacec.visible=false;
                                }
                            }
                            if(paperbit1.position.x>object.position.x ){


                                paperbit1.position.x=paperbit1.position.x-(0.01*dt);
                                paperbit2.position.x=paperbit2.position.x-(0.01*dt);

                            }else{

                                 
                                if(objectc.position.y<1){

                                var x=objectc.position.x;
                                var y=objectc.position.y;
                                var z=objectc.position.z;

                                y=y+(0.001*dt);

                                objectc.position.set(x,y,z);
                                if(precaution==0){
                                paperbit2.position.set(x+0.1,y-1,z);
                                paperbit3.position.set(x+0.3,y-1.4,z);
                                paperbit4.position.set(x+0.5,y-1.3,z);

                                
                                }
                               
                                
                                } 
                                // paperbit1.position.y=paperbit1.position.y+(0.01*dt);
                                // paperbit2.position.y=paperbit2.position.y+(0.01*dt);
                                    // PIEstopAnimation();
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



}

function notify(){



}




function notification()
{

    



}



function checker(){







 









}

function submission(){
    text23.visible=false;
    text22.visible=false;
    text10.visible=false;
    text11.visible=false;
    text12.visible=false;
    text13.visible=false;
    text14.visible=false;
    text15.visible=false;
    text16.visible=false;
    text17.visible=false;
    text18.visible=false;
    text19.visible=false;
    text4.visible=false;
    text5.visible=false;
    text6.visible=false;
    text7.visible=false;
    text8.visible=false;
    text9.visible=false;
    

        submit=1;
    PIEstartAnimation();

    var result=PIEgetInputText("Answer");

        if(result=="Yes" && precaution==0){
        text20.visible=true;

        }else if(result=="No" && precaution==1){

        text20.visible=true;
        }else{
        text21.visible=true;

}
}
function sides(){

choice=PIEgetInputSlider("No. of Sides");
next();

}


function nolearn(){
 
resetExperiment();
}

function textarea(){



}

var learnchecker=1;


function initialiseOtherVariables(){
    
}


function learninitialise(){
plane3.visible=false;
plane4.visible=false;
glassrod.visible=false;
ebonite.visible=false;
comb.visible=false;
silk2.visible=false;
fur.visible=false;
steel.visible=false;
wool.visible=false;
hair.visible=false;
silk.visible=false;
amber.visible=false;
copper.visible=false;
wax.visible=false;
polythene.visible=false;


    glassrodc.visible=false;
    ebonitecpositive.visible=false;
    ebonitecnegative.visible=false;
    combc.visible=false;
    furc.visible=false;
    
    silkcpositive.visibe=false;

    
    silkcnegative.visible=false;

    sulphurc.visible=false;
    polythenec.visible=false;
    amberc.visible=false;
    hairc.visible=false;
    waxc.visible=false;


PIEresetClick(glassrod);
PIEresetClick(ebonite);
PIEresetClick(comb);
PIEresetClick(silk);
PIEresetClick(silk2);
PIEresetClick(fur);
PIEresetClick(steel);
PIEresetClick(wool);
PIEresetClick(hair);
PIEresetClick(amber);
PIEresetClick(copper);
PIEresetClick(wax);
PIEresetClick(polythene);











text3.visible=false;

text2.visible=true;
plane2.visible=true;
semicircle4.visible=true;
semicircle3.visible=true;
text22.visible=true;
text23.visible=true;

namehide();
text10.visible=false;
text11.visible=false;
text12.visible=false;
text13.visible=false;
text14.visible=false;
text15.visible=false;
text16.visible=false;
text17.visible=false;
text18.visible=false;
text19.visible=false;

PIErender();

}
function initialiseControls(){

PIEaddInputCommand("Learn",learn);
PIEaddInputCommand("Close Learn",resetExperiment);
PIEaddInputText("Answer","Yes/No",textarea);
PIEaddInputCommand("Submit",submission);
PIEaddInputCommand("Neutral",neutral);



}

function neutral(){
    paperbit2.visible=false;
    paperbit3.visible=false;
    paperbit4.visible=false;
    PIErender();

if(glassrodc.visible==true){
    glassrodc.visible=false;
    glassrod.visible=true;
    PIErender();

}

if(ebonitecpositive.visible==true){
    ebonitecpositive.visible=false;
    ebonite.visible=true;
    PIErender();

}

if(combc.visible==true){
    combc.visible=false;
    comb.visible=true;
    PIErender();

}if(furc.visible==true){
    furc.visible=false;
    fur.visible=true;
    PIErender();

}if(silkcnegative.visible==true){
    silkcnegative.visible=false;
    silk.visible=true;
    PIErender();

}if(silkcpositive.visible==true){
    silkcpositive.visible=false;
    silk.visible=true;
    PIErender();

}

if(sulphurc.visible==true){
    suplhurc.visible=false;
    sulphur.visible=true;

}

if(woolc.visible==true)
{
    woolc.visible=false;
    wool.visible=true;
}

if(polythenec.visible==true)
{
    polythenec.visible=false;
    polythene.visible=true;
}

if(hairc.visible==true)
{
    hairc.visible=false;
    hair.visible=true;
}

if(waxc.visible==true)
{
    waxc.visible=false;
    wax.visible=true;
}

}

function learn(){
learninitialise();
PIErender();
var choice= (Math.floor(Math.random()*7)+1);
var choice2=(Math.floor(Math.random()*7)*1);
    plane5.visible=true;
PIErender();
if(choice==4 &&choice2==3){
    choice2=2;
}
if(choice==1 && choice2==4){
    choice2=1;
}
            if(choice==1){
                            learnmasterid=1;
                            glassrod.visible=true;
                            glassrod.position.x=-6;
                            text5.position.x=-6;
                            text5.visible=true;
                            PIErender();

            }else if(choice==2){
                            learnmasterid=2;
                            ebonite.visible=true;
                            ebonite.position.x=-6;
                            text6.position.x=-6;
                            text6.visible=true;
                            PIErender();
             }else if(choice==3){
                            learnmasterid=3;
                            comb.visible=true;
                            comb.position.x=-6;
                            text4.position.x=-6;
                            text4.visible=true;
                            PIErender();

             }else if(choice==4){
                            learnmasterid=4;
                            silk2.visible=true;
                            silk2.position.x=-6;
                            text8.position.x=-6;
                            text8.visible=true;
                            PIErender();

             }else if(choice==5){
                            learnmasterid=5;
                            fur.visible=true;
                            fur.position.x=-6;
                            text7.position.x=-6;
                            text7.visible=true;
                            PIErender();

             }else{
                learnmasterid=6;
                steel.visible=true;
                steel.position.x=-6;
                text9.position.x=-6;
                text9.visible=true;
                PIErender();

             }




             if(choice2==1){
                    learnid=1;
                    wool.visible=true;
                    wool.position.x=3;
                    text12.position.x=3;
                    text12.visible=true;

                    PIErender();
             }else if(choice2==2){
                    learnid=2;
                    hair.visible=true;
                    hair.position.x=3;
                    text17.position.x=3;
                    text17.visible=true;

                    PIErender();
             }else if(choice2==3 ){
                    learnid=3;
                    silk.visible=true;
                    silk.position.x=3;
                    text13.position.x=3;
                    text13.visible=true;

                    PIErender();
             }else if(choice2==4){
                    learnid=4;
                    amber.visible=true;
                    amber.position.x=3;
                    text15.position.x=3;
                    text15.visible=true;

                    PIErender();

             }else if(choice2==5){
                    learnid=5;
                    copper.visible=true;
                    copper.position.x=3;
                    text18.position.x=3;
                    text18.visible=true;

                    PIErender();

             }else if(choice2==6){
                    learnid=6;
                    wax.visible=true;
                    wax.position.x=3;
                    text19.position.x=3;
                    text19.visible=true;

                    PIErender();

             }else {
                    learnid=7;
                    polythene.visible=true;
                    polythene.position.x=3;
                    text14.position.x=3;
                    text14.visible=true;

                    PIErender();

             }


// PIEstartAnimation();

}

function resetrubbingimages(){

     wool.position.set(0,0,-0.99);
     wool.visible=false;
     silk.position.set(3,0,-0.99);
     silk.visible=false;
     polythene.position.set(0,0,-0.99);
     polythene.visible=false;
     amber.position.set(6,0,-0.99);
     amber.visible=false;
     sulphur.position.set(0,0,-0.99);
     sulphur.visible=false;
     hair.position.set(-2,0,-0.99);
     hair.visible=false;
     copper.position.set(0,0,-0.99);
     copper.visible=false;
     wax.position.set(5,1.5,-0.99);
     wax.visible=false;
     PIErender();
}
function resetimages(){
    glassrod.position.set(-6,0,0);
    glassrod.visible=true;
    ebonite.position.set(-4,0,0);
    ebonite.visible=true;
    fur.position.set(0,0,0);
    fur.visible=true;
    comb.position.set(-8,0,0);
    comb.visible=true;
    silk2.position.set(4,-0.2,0);
    silk2.visible=true;
    steel.position.set(-10,-0.2,0);
    steel.visible=true;
                                                                                                        paperbit1.position.set(7,-3,1);
                                                                                                        paperbit1.visible=true;
    paperbit2.position.set(20.5,-2.5,-1);
    paperbit2.visible=true;
    paperbit3.position.set(20.5,-2.5,-1);
    paperbit3.visible=true;
    paperbit4.position.set(20.5,-2.5,-1);
    paperbit4.visible=true;

    glassrodc.visible=false;
    ebonitecpositive.visible=false;
    ebonitecnegative.visible=false;
    combc.visible=false;
    furc.visible=false;
    
    silkcpositive.visibe=false;

    
    silkcnegative.visible=false;

    sulphurc.visible=false;
    polythenec.visible=false;
    amberc.visible=false;
    hairc.visible=false;
    waxc.visible=false;






wool.visible=false;
hair.visible=false;
silk.visible=false;
amber.visible=false;
copper.visible=false;
wax.visible=false;
polythene.visible=false;

PIEsetClick(glassrod,glassrodClick);
PIEsetClick(ebonite,eboniterodClick);
PIEsetClick(comb,combclick);
PIEsetClick(silk,silkclick);
PIEsetClick(silk2,silk2click);
PIEsetClick(fur,furClick);
PIEsetClick(steel,steelclick);
PIEsetClick(wool,woolclick);
PIEsetClick(hair,hairclick);
PIEsetClick(amber,amberclick);
PIEsetClick(copper,copperclick);
PIEsetClick(wax,waxclick);
PIEsetClick(polythene,polytheneclick);

PIErender();

}

function namevisible(){

    text9.position.set(-10.3,-2.5,0);
    text4.position.set(-8.3,-2.5,0);
    text5.position.set(-6,-2.5,0);
    text6.position.set(-4,-2.5,0);
    text7.position.set(0,-2.5,0);
    text8.position.set(4,-2.5,0);

    text4.visible=true;
    text5.visible=true;
    text6.visible=true;
    text7.visible=true;
    text8.visible=true;
    text9.visible=true;

    text10.visible=false;
    text11.visible=false;
    text20.visible=false;
    text21.visible=false;
    text22.visible=false;
    PIErender();
}

function resetExperiment(){

// initialiseControls();
// initialiseScene();

resetimages();
resetrubbingimages();
namevisible();
    plane3.visible=false;
    plane4.visible=false;
    plane5.visible=false;



kl=0;
id=0;
Materialid=0;
count=0;
learnmasterid=0;
learnid=0;
submit=0;
precaution=0;

text10.visible=false;
text11.visible=false;
text12.visible=false;
text13.visible=false;
text14.visible=false;
text15.visible=false;
text16.visible=false;
text17.visible=false;
text18.visible=false;
text19.visible=false;
silkcnegative.visible=false;
silkcpositive.visible=false;
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
    helpContent = helpContent + "<h2>Charging By Rubbing </h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment deals with the natural phenomena of charging through rubbing.The charge Transfers during friction are the reason for that. Mostly insulators have this capability</p>";
    helpContent = helpContent + "<h3>Setup stage</h3>";
    helpContent = helpContent + "<p>The control panel consists of Learn button,close Learn button, an input text field and submit button.</p>";
    helpContent = helpContent + "<h3>Basic stage</h3>";
    
    helpContent = helpContent + "<p>At first the user has to click on the material he wants to test.Then he has to drag the surface on which he wants to rub the material.An animation begins explaining the concept and shows the charge concept with the help pf charges and paper bits.</p>";
    helpContent = helpContent + "<h3>Learn stage</h3>";
    
    helpContent = helpContent + "<p>The learn section tests the user by asking the result before cshowing the animation.Submitting the answer shows the animation and also whether the user was correct or not. </p>";
    helpContent = helpContent + "<p>The close learn sections brings the user back to the initial stage</p>";
    
    helpContent = helpContent + "<h3>Observation table</h3>";
    

    helpContent = helpContent + "<p>The observtions are tabulated also.</p>";

    helpContent = helpContent + "<p>The neutral button loses the charge.</p>";
    

    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows materials and rubbing surfaces and the interaction that causes Charging by Rubbing.</p>";
    infoContent = infoContent + "<h3>Charging By Rubbing</h3>";
    infoContent = infoContent + "<p>Here charge transfers happen due to friction between two surfaces.This happens mostly in insulators.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}



