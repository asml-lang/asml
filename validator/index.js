var Ajv = require('ajv');

var schema = require('../schema.json');
var schema_model = require('../sending-email.asm.json');
var data = require('../example.json');


var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}


var validate_model = ajv.compile(schema);
var valid_model = validate_model(schema_model);
console.log('validating the model:', valid_model)
if (!valid_model) console.log(validate_model.errors);

if (valid_model) {
    var validate_data = ajv.compile(schema_model);
    var valid_data = validate_data(data);
    console.log('validating data:', valid_data)
    if (!valid_data) console.log(validate_data.errors);
}