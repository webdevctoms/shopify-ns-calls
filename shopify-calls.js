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

        function getAllProductsSync (options) {
            try{
                var page = 1;
                var url = options.keyData.url + 'products.json?limit=250&page=' + page;
                var authKey = options.keyData.authKey;

                var header = {
                    Authorization: 'Basic ' + authKey
                };
                var shopifyData = https.get({
                    url:url,
                    headers:header
                });
                log.debug ({
                    title: 'Shopify Data',
                    details: shopifyData
                });
                var parsedBody = JSON.parse(shopifyData.body);
                log.debug ({
                    title: 'Shopify Data parsed',
                    details: parsedBody.products
                });
                var productData = parsedBody.products;
                return productData;
            }
            catch(err){
                log.error({
					title:err.name + ' error getting all product data',
					details:err
				});
            }
            
        }

    return {
        getAllProducts: getAllProducts,
        getAllProductsSync:getAllProductsSync
    }

});