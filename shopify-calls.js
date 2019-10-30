/** 
 * shopify-calls.js
 * @NApiVersion 2.x
 * @NModuleScope Public 
 */


define ([] , 

    function () {    
        function getAllProducts (options,productData) {
            var promise = new Promise(function(resolve,reject){
                if(!productData){
                    productData = [];
                }
                var key = options.keyData.key;
                var pass = options.keyData.pass;
                var url = options.keyData.url;
                
                resolve(productData);
            });
            
            return promise;
        }

    return {
        getAllProducts: getAllProducts
    }
    
});