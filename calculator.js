function display(item) {
    result.value += item
}
function back(){
    result.value = result.value.slice(0,-1)
} 
function clearAll(){
    result.value = ""
}
function equal(){
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = 'Error'
        setTimeout(()=>{
            result.value = ""
        },1000)
    }
}