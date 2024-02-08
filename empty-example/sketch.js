function make2DArry(cols, rows){
  let arr = new Array(cols);
  for (let i =0; i<arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;

}
let grid;
let w= 10;
let cols, rows;


function setup() {
  createCanvas(400,400);
 cols = width/w;
 rows=width/w;
 grid = make2DArry(cols,rows);

 for (let i=0; i<cols; i++){
  for (let j=0; j<rows; j++){
   grid[i][j]=0;
  }
 }

}
function mouseDragged(){
  let col = floor(mouseX/w);
  let row = floor(mouseY/w);

  if (col>0 && col <=cols-1 &&row <rows-1  ){
grid[col][row]=1;

}
}
function draw() {
  background(220);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
     stroke(255)
     fill(grid[i][j]*255);
     let x = i * w;
     let y = j * w;
    square(x,y,w);

    }
  }   
  let nextGrid=make2DArry(cols, rows);

  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
     nextGrid[i][j]=0;
    }
   }
  
   for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){

      //du skal kun gøre noget hvis nuværende state er fyldt
     if (grid[i][j]==1){

      //hvis nuværende state er hvid skal du kun gøre noget hvis feltet nedenunder er fyldt og ikke går udover kanten
      if(grid[i][j+1]===0 && j< rows-1){
      nextGrid[i][j+1]=1;  
      }
      //ellers går vi ud fra det var fyldt i forvejen og så skal vi træffe beslutninge om hvilken side det skal falde til
      else{

        //er den til venstre fyldt?
        if (grid[i-1][j]==0){ 
      
            nextGrid[i-1][j]=1 
          
        }
        
        nextGrid[i][j]=1
      }
     }
    }
   }
  

   grid=nextGrid;
}

 





