const Addition =(a,b)=>{
    //fixing big
    return(Number(a)+Number(b))
}

const substract =(a,b)=>{
    return(a-b)
}

const multiply =(a,b)=>{
    return(a*b)
}

const division =(a,b)=>{
    return(a/b)
}
const modulo=(a,b)=>{
    return(a%b)
}
module.exports={Addition,substract,multiply,division,modulo}



//SemVer (semantic versioning system)
// numbering your app/software
/* version: 1    : 0       : 0
        Major : Minor : Patch */
        //patch : fix bug    1.0.1  fix more bug -- 1.0.2
        //minor : add feature  1.1.0  add more features --- 1.2.0
        //major : major change 2.0.0   (that code might not be supperted/ conpatiable with old version)