const toMacro = require('./index');


const tests = [{
        input: 'rstdRstdSTDtd12tsd',
        output: 'RSTD_RSTD_ST_DTD_1_2TSD',
    },
    {
        input: 'arst',
        output: 'ARST',
    },
    {
        input: 'arTst',
        output: 'AR_TST',
    },
];

tests.forEach(test => {
    if (toMacro(test.input) !== test.output) {
        console.error(`Test failed`);
    }
})