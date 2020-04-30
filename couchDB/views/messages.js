exports.by_to = {
    map: function(doc){
        if (doc.to){
            emit(doc.to, {_id: doc._id});
        }
    }
};