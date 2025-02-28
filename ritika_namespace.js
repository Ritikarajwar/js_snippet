let ritika = {
    // find numbers at odd position
    odd_function :function (arr) {
        let x = arr.filter((num) => arr.indexOf(num) % 2 != 0);
        return x
    },

    // find words whose length >3
    // arr :  is the function take array of word and return those words whose length is grater than the given length(len)
    // len: takes an integer 
    words_len: function (arr, len) {
        let x = arr.filter((words) => words.length > len)
        return x;
    },

  
    // Suppose you have an object called Product which has name and price.
    // Now extract those products which are more than Rs4000
    // let products = [{
    //     name:'phone',
    //     price:3000
    // },{
    //     name:'earphone',
    //     price: 2000
    // }]
    // console.log(filter_price(products,2000))
    filter_price: function (arr, amount) {
        let x = arr.filter(product => product.price > amount)
        return x;
    },


    // Suppose you have an array of cities , now you have to extract those cities in which "NEW" word is there like new jersey, new york etc
    //  let arr = ['new york','hello','jersy new','bye']
    // console.log(cities_with_new(arr))
    cities_with_new: function (arr, str) {
        let x = arr.filter((words) => words.toLowerCase().includes(str))
        return x
    }

}


