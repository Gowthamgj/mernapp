export default class api {
    checkValid(bodyparam,cb){
        fetch(window.urls.validateuser,window.formatBody(bodyparam))
        .then(res => res.json())
        .then(
            (result)=>{
                cb(result)
            }
        )
    }
}