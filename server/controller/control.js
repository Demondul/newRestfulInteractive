const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    retrieve_all: function(request,response){
        console.log("retrieving...")
        Task.find({}, function(err,tasks){
            if(err){
                console.log(err);
                response.json({message:"Retrieval Error", data:err});
            }
            else{
                console.log("retrieved...")
                return response.json({data:tasks});
            }
        });
    },
    retrieve_id: function(request,response){
        Task.find({_id:request.params.id}, function(err,obj){
            if(err){
                console.log(err);
                response.json({message:"Retrieval Error",data:err.errors});
            }
            else{
                response.json({data:obj});
            }
        });
    },
    create_task: function(request,response){
        let obj = new Task({
            title:request.body.title,
            description:request.body.description,
            completed:request.body.completed
        });

        obj.save(function(err){
            if(err){
                response.json({message:err.errors});
            }
            else{
                response.json({message:"Saved!",data:obj})
            }
        });
    },
    update_task: function(request,response){
        Task.findOne({_id:request.params.id},function(err,obj){
            obj.title = request.body.title;
            obj.description = request.body.description;
            obj.completed = request.body.completed;
            obj.save(function(err){
                if(err){
                    response.json({message:err.errors});
                }
                else{
                    response.json({message:"Updated!",data:obj});
                }
            });
        });
    },
    delete_task: function(request,response){
        Task.remove({_id:request.params.id},function(err){
            if(err){
                response.json({message:err.errors});
            }
            else{
                response.json({message:"Deleted!"})
            }
        });
    }
}