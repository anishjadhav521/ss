

class d{

    show = false;

    onChange(){

        this.getBool(()=>{
            this.getBool();
        })
    }

    getBool(callback){

        this.show = false;
        if(callback)
        callback();

    }

}


const a = function(params,callback) {

    console.log(params);
    if(callback)
    callback();
    
    
}

a(1,()=>{
    a(2)
})