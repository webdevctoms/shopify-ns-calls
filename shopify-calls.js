/** 
 * shopify-calls.js
 * @NApiVersion 2.x
 * @NModuleScope Public 
 */


define(['N/https'] , 

    function (https) {    
        function getAllProducts (options,productData) {
            var promise = new Promise(function(resolve,reject){
                if(!productData){
                    productData = [];
                }
                var key = options.keyData.key;
                var pass = options.keyData.pass;
                var url = options.keyData.url;
                var input = key + ":" + pass;
                var authKey = btoa(input);
                setTimeout(function(){
                    log.debug ({
                        title: 'Start Timer 30 sec',
                        details:'will it work?'
                    });
                    productData.push('done timeout');
                    resolve(productData);
                }, 30000);
            });
            
            return promise;
        }

        function getAllProductsSync (options,productData) {
            if(!productData){
                productData = [];
            }
            var url = options.keyData.url;
            var authKey = options.authKey;
            productData.push('done timeout');
            return productData;
        }

    return {
        getAllProducts: getAllProducts,
        getAllProductsSync:getAllProductsSync
    }

});