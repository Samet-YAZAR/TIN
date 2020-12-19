const fs = require('fs');
const path = require('path');

fs.watch(path.join(__dirname,"sub-dir"),{
    persistent: true,
    recursive: true
},(event, filename) => {
    if (filename.charAt(filename.length-1) !=="~") {
        console.log(`Changed file: ${filename}`);
        if (event=== "rename" || event ==="change" ){
            fs.readFile(path.join(__dirname,"sub-dir",filename), 'utf8', function(err, data) {
                if (err) throw err;
                console.log(data);
            });
        }
    }});