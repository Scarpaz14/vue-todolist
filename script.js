const app = new Vue({
    el:"#todolist",
    data:{
        list:[
            {
                text:"Fare la spesa",
                isDone:false
            },
            {
                text:"Fare da mangiare",
                isDone:false
            },
            {
                text:"Fare palestra",
                isDone:false
            }
        ],
        todoNew: "",
    },

    methods:{
        addNewTodo(){
            if(this.todoNew !== " "){
                this.list.push({ text: this.todoNew, isDone: false });
                this.todoNew = '';
            }
        },
        cancelTodo(index){
            this.list.splice(index,1)
        },

        lineThought(index){
            if(!this.list[index].isDone){
                this.list[index].isDone=true;
            } else{
                this.list[index].isDone=false
            }
        }

    },

})