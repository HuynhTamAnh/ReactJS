//alias type
type Todo={
    id:number,
    title:string,
    completed:boolean,
}
const data: Todo[]=[
    {id:1,title:"đi chơi",completed:true},
    {id:2,title:"đi chơi",completed:true},
    {id:3,title:"đi chơi",completed:true},
]

//lấy ra HTMLElement thông qua id
const addTodo=(id:string):HTMLElement=>{
    return document.getElementById(id) as HTMLElement;
}

const renderTodoList=(Todo[]):void=>{

}

const editStatus=(id:number):void=>{
    
}

const deleteTodo=(id:number):void=>{

}