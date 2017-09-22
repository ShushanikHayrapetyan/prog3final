const scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'data.json';


scrapeIt ("https://www.gutenberg.org/ebooks/search/?start_index=51&sort_order=downloads", {
       articles: {
        listItem: ".booklink"
      , data: {
            // Get the title
          title: ".title",
          auther: ".subtitle",
          dowlands :".extra"
        
        }
    }

}).then(function (page) {
     jsonfile.writeFile(file, page, {spaces: 2}, function(err) {
        console.error(err)
    })
    console.log(page);
   
});