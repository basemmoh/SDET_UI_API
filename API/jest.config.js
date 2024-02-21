module.exports ={
    testMatch: [
        '<rootDir>/test/*.test.js'
    ],
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ]
}