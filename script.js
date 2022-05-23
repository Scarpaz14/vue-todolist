const app = new Vue({
    el:"#todolist",
    data:{
        list:[
            {
                text:"Fare la spesa",
                isDone:"true"
            },
            {
                text:"Fare da mangiare",
                isDone:"false"
            },
            {
                text:"Fare palestra",
                isDone:"false"
            }
        ],
        todoNew: "",
    },

    methods:{
        addNewTodo(){
            if(this.todoNew !== " "){
                this.list.push({ text: this.todoNew, isDone: "false" });
                this.todoNew = '';
            }
        },

        CancelTodo(index){
            this.list.splice(index,1)
        }
    },
    

})