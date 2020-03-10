const validator  =  require( "schematron-runner");
const fs = require("fs");
 
const xmlPath = '/Users/sramveer/work/qpro/schematron/output/athena_pi_medicaid2019.xml';
const schematronPath = '/Users/sramveer/work/qpro/schematron/input/Schema/qrda-3-2019.sch';
 
(async () => {
    const xml = await fs.readFileSync(xmlPath, "utf8");
    const schematron = await fs.readFileSync(schematronPath, "utf8");
 
    const results = await validator.validate(xml, schematron);
    // console.log('------------------results------------------', results);
    var jsonContent = JSON.stringify(results);
    console.log('------------------jsonContent-----------------'+jsonContent);


    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });   



  
})();