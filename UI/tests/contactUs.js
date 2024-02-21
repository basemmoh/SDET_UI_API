module.exports = {
    '@tags' : ['contactUs'],

    'contactUs Test Suite'(browser){

        email = 'Basemabdelghanhy@gmail.com';
        invalidEmail = 'basem';
        refer = 'shopping' ;
        msg = 'Thank you.'

        const page = browser.page.contactUsPage();

        //test Case 1: valid input
        page
            .navigate()
            .setSubjectHandlingOption('@webmaster')
            .setEmail(email)
            .setOrderReference(refer)
            .setMessage(msg)
            .attachFile()
            .sendMessage()
            .assertSuccessMsg()
            
            browser.pause(3000)
            
        //test Case 2: invalid input
        page
            .navigate()
            .setSubjectHandlingOption('@customerService')
            .setEmail(invalidEmail)
            .setOrderReference(refer)
            .setMessage(msg)
            .sendMessage()
            .assertFailureMsg()
        
            browser.pause(3000)
            
        //Test case 3 Blank options    
        page
        .navigate()
        .setSubjectHandlingOption('@chooseOption')
        .sendMessage()
        .assertFailureMsg()

        browser.pause(3000)
        

    }

}