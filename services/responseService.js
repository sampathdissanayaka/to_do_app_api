module.exports.sucessWithMsg = (response,dataValue)=>{
    return response.send({
        status: true,
        data: dataValue
    });


}

module.exports.errorWithMessage = (response,msg)=>{
    return response.send({
        status: false,
        message: msg
    });


}