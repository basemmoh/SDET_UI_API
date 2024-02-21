module.exports = {
    '@tags' : ['search'],

    'Search Test Suite'(browser){

        searchText ='dress';

          const page = browser.page.searchPage();
        
        page
            .navigate()
            .search(searchText)
            .itemSelector(0)
            .itemSelector(1)
            .itemSelector(2)
            .itemSelector(3)
            .itemSelector(4)
            .itemSelector(5)
            .itemSelector(6)
            

        
        

    }

}

