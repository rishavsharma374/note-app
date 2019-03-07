const readline = require('readline');
const yargs = require('yargs');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    terminal:false
});
const note = require('./note.js');


console.log("STARTING NOTE APP");

var argv = yargs.argv;


rl.on('line',(data)=>{
    
    if(data==='1' || data ==='add'|| data==='ADD'){
        console.log('\nEnter your note\n');
        addNote();
        
        
    }else if(data==='2' || data ==='remove'|| data==='REMOVE'){
        removeNote();
        
        
    }else if(data==='3' || data ==='see'|| data==='SEE'|| data ==='see all notes'|| data ==='SEE ALL NOTES'){
       seeNote();
    }else if(data==='4' || data ==='exit'|| data==='EXIT'){
        process.exit();
        
    }
    
});

const addNote = ()=>{
    rl.question('\nPlease enter the title : ',(title)=>{
        rl.question('\nPlease Enter your note : \n ',(body)=>{
            note.add(title,body);
        })
    })
   
    
}
const removeNote =()=>{
    rl.question('please enter the title of the note you want to remove\n', (title)=>{
        note.remove(title);
    });
};

const seeNote = ()=>{
    note.see();
};
rl.setPrompt('\nEnter your Query : \n 1.ADD NOTE\n 2.REMOVE NOTE\n 3.SEE ALL NOTES\n 4.EXIT\n')   ; 
rl.prompt();



