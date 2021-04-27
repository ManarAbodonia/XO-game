class game{
 constructor(){
this.inprogress=true;
this.winner=null;
this.currentturn=game.o;
this.movesmade=0;
this.squares=new Array(9).fill().map(s => new square());


 }
    moving(i){
if(this.inprogress&&!this.squares[i].value)
{
this.squares[i].value=this.currentturn;

this.movesmade++;
this.checkforwinner();
this.currentturn=(this.currentturn===game.o)?game.x:game.o;
}
}
checkforwinner(){

    const winningcompination=[


    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];
    winningcompination.forEach((wc) => {
    const [a,b,c]=wc;
    const sqa=this.squares[a];
    const sqb=this.squares[b];
    const sqc=this.squares[c];


    if(sqa.value&&sqa.value===sqb.value&&sqa.value===sqc.value){

this.inprogress=false;
this.winner=sqa.value;
sqa.ishightlighted=sqb.ishightlighted=sqc.ishightlighted=true;

    }
    });
    
if(this.movesmade==this.squares.length){

    this.inprogress=false;

}
}


}
game.o='o';
game.x='x';