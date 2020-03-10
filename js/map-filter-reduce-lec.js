"use strict";

$(document).ready(function() {

    /****************** MAP, FILTER, REDUCE ******************/

        // Array of MacBookPro{} objects
    var mbpModels = [
            {
                id: 'MA464LL/A',
                desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
                model: 'A1150',
                year: '2006',
                price: 3199
            },
            {
                id: 'MB986LL/A',
                desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
                model: 'A1286',
                year: 'Mid-2009',
                price: 2799
            },
            {
                id: 'MD311LL/A ',
                desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
                model: 'A1297',
                year: 'Late-2011',
                price: 2399
            },
            {
                id: 'MGXA2LL/A',
                desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
                model: 'A1398',
                year: 'Mid-2014',
                price: 2299
            }
        ];


    // ES6
    // var cartTotal = cart.reduce((total,item) => total + item.cost, 0);

    // *****************   ******     ******************//
    // *****************  TODO: MAP() ******************//
    // *****************   ******     ******************//

    // Print a list of id's of the mbpModels array
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6


    /********************************* 1 *********************************/

    //  1. Using forEach()
    let ids = [];

    mbpModels.forEach(function(mbp) {
        ids.push(mbp.id);
    });

    $('#forEach').html(createList(ids));

    /********************************* 2 *********************************/

    //  2. Using map()
    let ids_map = mbpModels.map(function(mbp) {
            return mbp.id;
        });

    $('#map').html(createList(ids_map));

    /********************************* 3 *********************************/

    //  3. Use ES6
    let ids_map_es6 = mbpModels.map(mbp => mbp.id);

    $('#mapES6').html(createList(ids_map_es6));

    /**************************** createList() ***************************/
    /******* returns a <li> type list in raw HTML ************************/
    function createList(arr) {
        var html = '';
        arr.forEach(function (item) {
            html += '<li>' + item + '</li>';
        });
        return html;
    }
    /**************************** createList() ***************************/


    // *****************   ******     ******************//
    // **************  TODO: FILTER() ******************//
    // *****************   ******     ******************//

    // Print a list of the models made in 2011 and later
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get year from string *****************************/
    function getYear(yearString) {
        let yearArr,bucket;
        [yearArr, bucket] = [yearString.split(''),[]];
        for(var i=3; i>=0; i--) {
            bucket[i] = yearArr.pop();
        }
        return bucket.join('');
    }
    /********************* END function to get year from string ***************************/


    /********************************* 1 *********************************/
    //  1. Use forEach()
    let models = [];
    mbpModels.forEach(function(mbp) {
        if(parseInt(getYear(mbp.year)) >= 2011) {
            models.push(mbp.desc);
        }
    });
    $('#filterForEach').html(createList(models));

    /********************************* 2 *********************************/
    //  2. Use filter()
    let models_filter = mbpModels.filter(function (mbp) {
            return parseInt(getYear(mbp.year)) >= 2011;
        });
    $('#filter').html(createList(models_filter.map(mbp => mbp.desc)));

    /********************************* 3 *********************************/
    //  3. Use ES6
    let models_filter_es6 = mbpModels.filter(mbp => parseInt(getYear(mbp.year)) >= 2011);
    $('#filterEs6').html(createList(models_filter_es6.map(mbp => mbp.desc)));

    // *****************   ******     ******************//
    // **************  TODO: REDUCE() ******************//
    // *****************   ******     ******************//

    // Determine the total value of all MacBook Pros together
    //  1. Use forEach()
    //  2. Use reduce()
    //  3. Use ES6

    /********************************* 1 *********************************/
    //  1. Use forEach()
    var price = 0;
    mbpModels.forEach(function(mbp) {
        price += mbp.price;
    });
    $('#reduceForEach').html(commaThousands(price));

    /********************************* 2 *********************************/
    //  2. Use reduce()
    let price_reduce = mbpModels.reduce(function(total, mbp) {
            return total + mbp.price;
        }, 0);
    $('#reduce').html(commaThousands(price_reduce));

    /********************************* 3 *********************************/
    //  3. Use ES6
    let price_reduce_es6 = mbpModels.reduce((total, mbp) => total + mbp.price, 0);
    $('#reduceEs6').html(commaThousands(price_reduce_es6));

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get commas in number *****************************/
    function commaThousands(number) {
        var numArr = number.toString().split('');
        var startPos = numArr.length % 3;
        var initialLength = numArr.length;
        var first = true;
        var extra = 0;
        // add commas every third digit from the end
        if( numArr.length <= 3) {
            return number;
        } else {
            for(var i = 0; i < (numArr.length - numArr.length % 3) / 3; i++) {
                console.log('for iteration');
                console.log(i * 3 + extra + startPos);
                if(i*3+extra+startPos >= initialLength+extra) {
                    // console.log('stop');
                    break;
                } else {
                    if((startPos !== 0) && first) {
                        numArr.splice(startPos,0,',');
                        first = false;
                        extra++;
                    } else{
                        numArr.splice((i*3+extra),0,',');
                        extra++;
                    }
                }
            }
            // console.log(numArr.join(''));
            numArr.splice(0,0,'$');
            return numArr.join('');
        }
    }
    /**************************** DON'T WORRY HOW THIS FUNCTION WORKS ********************************/

});