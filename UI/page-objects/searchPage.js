let PicsNameArr =[]
for(let i=1; i<8; i++){
    PicsNameArr.push("#product_list > li:nth-child(" + i +  ") > div > div.right-block > h5 > a")
}

module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',
    
    elements: {
        searchBox: '#search_query_top',
        searchBoxSubmit: '.button-search',
        

    },

    commands: [{
        search(value){
            return this
                .setValue('@searchBox',value)
                .click('@searchBoxSubmit')
        },
        itemSelector(value){
            return this
                .assert.textContains(PicsNameArr[value],'Dress','This item belongs to dress search')
        },
    }]
}