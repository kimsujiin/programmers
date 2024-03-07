function solution(todo_list, finished) {
    let unfinished=[];
    
    for(let i =0; i<todo_list.length; i++){
        if(!finished[i]){
            unfinished.push(todo_list[i])
        }
    }
    return unfinished
}


