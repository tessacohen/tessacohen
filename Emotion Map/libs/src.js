
let groups=[];
let china;

let clickCounter = -1;

//let dotClasses = ['.st328', '.st329','.st330']
let groupNames = ['dot', 'dot2', 'group1', 'group2', 'group3', 'group4', 'group5', 'group6', 'group7', 'group8', 'group9', 'group10', 'china', 'italy', 'russia', 'us', 'aus', 'canada', 'world', 'world1', 'world2', 'endworld']

function setup(){
    // Hide elemets
    getElementsByGroupNames(groupNames)
 
}

function mouseClicked(){
    litUpGroups();  
}


function getElementsByGroupNames(groupNames){
    for(let i=0; i< groupNames.length ; i++){
        console.log(groupNames[i])
        let tmp = document.getElementsByName(groupNames[i]);
         console.log(tmp[0])
            // make them invisible
            tmp[0].style.visibility='hidden';
        groups.push(tmp);
    }
}
function litUpGroups(){
    
    clickCounter ++;
    
    let tmpGroup = groups[clickCounter]
        // making them visible
        for(let i=0; i<tmpGroup.length; i++){
             tmpGroup[i].style.visibility='visible';
        }

}


//function getElementsByClasses(classes){
//    for(let i=0; i< classes.length ; i++){
//        let tmp = document.querySelectorAll(classes[i]);
//        
//            // make them invisible
//        for(let j=0; j<tmp.length; j++){
//            tmp[j].style.visibility='hidden';
//        }
//        groups.push(tmp);
//    }
//}