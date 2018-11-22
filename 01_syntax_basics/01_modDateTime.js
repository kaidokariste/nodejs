// Use the exports keyword to make properties and methods available outside the module file.
module.exports = {
    myDateTime: function () {
        return Date();
    },

    doWork: function(param1, param2) {
        return param1 + param2;
    }
}
