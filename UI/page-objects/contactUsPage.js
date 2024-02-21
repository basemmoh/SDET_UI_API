module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
    
    elements: {
       
        emailAddress: '#email',
        orderReference: '#id_order',
        attachFile: '#fileUpload',
        message: '#message',
        sendButton: '#submitMessage',
        chooseOption: '#id_contact option[value="0"]',
        customerService: '#id_contact option[value="2"]',
        webmaster: '#id_contact option[value="1"]',
        alertSuccess:'.alert-success',
        alertFailure: '.alert-danger'

    },

    commands: [{

        setSubjectHandlingOption(value){
            return this
                .click(value)
        },
        setEmail(emailAddressvalue){
            return this
                .setValue('@emailAddress',emailAddressvalue);
        },
        setOrderReference(orderReferenceValue){
            return this 
                .setValue('@orderReference',orderReferenceValue)
        },
        attachFile(file){
            return this
                .setValue('@attachFile',require('path').resolve('./Test.txt'))
                
        },
        
       setMessage(messageValue){
            return this
                .setValue('@message',messageValue)
        },
        sendMessage(){
            return this
                .click('@sendButton')
        },
        assertSuccessMsg(){
            return this
                .assert.textContains('@alertSuccess','Your message has been successfully sent to our team.','Valid input')
        },
        assertFailureMsg(){
            return this
                .assert.textContains('@alertFailure','error', 'Invalid Input')
        }

    }]
}