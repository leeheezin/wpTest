module.exports = function myLoader() {
    console.log('hello myloader')
    return ListItem.replace('console.log(','alert(')
}