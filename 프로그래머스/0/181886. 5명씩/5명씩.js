function solution(names) {
    const groups = [];
    let group = [];
    
    for(let i =0; i<names.length; i++){
        group.push(names[i]);
        
        if(group.length === 5 || i===names.length -1){
            groups.push(group)
            group = []
        }
    }
    
    return groups.map((group)=>group[0])
   
}