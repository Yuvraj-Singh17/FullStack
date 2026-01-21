function abcd(val){

}
abcd(function(){
    console.log("Hey")
})


function abcd(){
    return function(){
        console.log("Hey!!")
    }
}
abcd()()