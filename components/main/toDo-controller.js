"use strict";
{
    angular.module('app')
        .controller('toDoController', function(){
            let $ctrl = this;
            $ctrl.toDoList =[
                {
            task:"Make food",
            completed: true
                },
                
                {
            task:"Clean car",
            completed: false
                },

                {
            task:"Take out trash",
            completed: true
                }];

        $ctrl.addTask=function(){
            $ctrl.toDoList.push({task: $ctrl.newChore, completed: false});
        };
        
        $ctrl.removeTask=function(index){
            $ctrl.toDoList.splice(index, 1);
        };
        
        $ctrl.completeTask=function(index){
            $ctrl.toDoList[index].completed = true; 
        };
        
});
};