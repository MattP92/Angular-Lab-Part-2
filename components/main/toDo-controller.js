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
});
};