// read the deployments folder
// find all chainIDs
// create an object for each chainID and its deployed Address
// eg

import glob from "glob";
import fs from "fs/promises";

const addresses = {};

glob('deployments/**/.chainId', function (err, files) {
    if (err) {
        console.log(err);
    }

    files.forEach(async (e) => {
        const chainId = await fs.readFile(e, { encoding: 'utf8' });
        let crowdfundingAddress;
        let projectAddress;
        let path = e.replaceAll(".chainId","");
        // try {
        //     find the abi and address from the json file from the path        
        // } catch (error) {
            
        // }        
        
    }
        //open file and read the chainId
    );
});

