const fs = require('fs');
const readline = require('readline');
const _ = require('lodash');

var rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
    terminal:false
});


// adding
var add = (title,body)=>{
    var notes = [];
    note = {
        title,
        body
    };
   try {
        var read_noteData = fs.readFileSync('notes-data.json');
        notes = JSON.parse(read_noteData);
    } catch (err) {
        
    }

  var duplicate_values = notes.filter((note)=>note.title ===title);


  if(duplicate_values.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  };
   rl.close();
    
};


// removing
var remove = (title)=>{
    // fetch noets

    note = {
        title
    }
   try{
       var readNotes = fs.readFileSync('notes-data.json');
       notes = JSON.parse(readNotes);
   }catch(e){}

   var filtered_notes = notes.filter((note)=>{
       note.title === title;
   });
 
   
   if(filtered_notes.length === 0){
       notes.push(filtered_notes);
       fs.writeFileSync('notes-data.json',JSON.stringify(filtered_notes));
   };
   console.log('\n Note Deleted!');
   
   rl.close();


};

var see = ()=>{
    try{
        var readNotes = fs.readFileSync('notes-data.json');
        notes = JSON.parse(readNotes);
    }catch(e){}
     
    if(notes.length===0){
        console.log('\n No Notes Found!\n Save some notes first!')
    }else{
        console.log(notes);
        
    };
    
    
    rl.close();
};
module.exports={
    add, remove, see,
}