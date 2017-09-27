function Magnet()
{
  Module.call(this,"magnet","Cursor magnetisation settings.");

  this.settings = {size:15,rate:4};

  this.methods.lock = function(q)
  {
    var size = parseInt(q);

    if(size < 5){ return; }

    console.log(size)

    ronin.grid.draw(size);
  }

  this.methods.unlock = function(q)
  {
    console.log(q)    
  }
}