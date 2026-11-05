function setup() {
  createCanvas(600, 600);//crea un area de dibuix de 600 pixels
  //quadrats, pixels d´ample i 600 pixels d´alçada, canvas és áreas
//de dibuix.setup és la configuracion o caracteristiques del nostre
//codi
}

function draw() {//draw significa dibuixar
//fons de color gris, és de color gris perqué hi ha un numeru entre 0 i 255 i el 0 és negre i el 255 es blanc
background(255);
print("mouseX: "+mouseX);
  print("mouseY: "+mouseY);
fill(15, 147+mouseY, 255-mouseX)//fill és omplir de color  el que hi ha a contunicion en aquest cas el·lipse El primer númeru es el nivell de vermellor(R:red). el segon númeru es el nivell de bravor(8.blue).   podem fer 255x255x255 .16.700.800 de colors diferents He de posar  el color de vulgui als ulls i a la cara canviat els 3 numerus, buscat a gogle color RGB
ellipse(mouseX,mouseY,250-mouseX/30,300-mouseY/30);//es la cara sencera. El primero els 3 numerus,significa la pocision x (horisontal) del  centre de la el·lipse. El segont numeru significa la pocision y (verifyca) del centre de la el·lipse El tercer nemeru significa l´ amplada en pixels i el quart l´aÇada de el·lipsess .Sempre els numerus son pixels contasts de de la contonada superior esquerra, es a dir el punt 0,0 es troba diferent que a matematicas (categoria inferior esquerra)
//mouseX=mouseY=300
fill(250, 242, 242)
ellipse(mouseX-50,mouseY-50,30+mouseX/10,50+mouseY/10);// ull dret perque es 350 de x al centre
fill(250, 242, 242)
ellipse(mouseX+50,mouseY-50,30,50);//es ell ull esquere perque es 250 pixels de x del centre
fill(250, 242, 242)
arc(mouseX,mouseY+10,120,70,0,PI);
  noFill();
arc(mouseX-50,mouseY-70,40+mouseX/10,35+mouseY/10,PI,0);
ellipse(mouseX-50,mouseY-50,10,10)
fill(0,0,0)
ellipse(mouseX+50,mouseY-50,10,10)
fill(0,0,0)

}
