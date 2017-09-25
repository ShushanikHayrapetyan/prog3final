const scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');
var file = 'data.json';

function scraper(index) {
    var file = 'data' + index + '.json'
    scrapeIt("https://www.gutenberg.org/ebooks/search/?start_index=" + index + "&sort_order=downloads", {
        articles: {
            listItem: ".booklink"
            , data: {

                title: ".title",
                auther: ".subtitle",
                downloads: ".extra"

            }
        }

    }).then(function (page) {
        jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
            console.error(err)
        })
        console.log(page);

    });
}

//scraper(1);

function scrapeloop() {
    for (var i = 1; i <= 5; i++) {
        (function (index) {
            setTimeout(function () {
                var page = (index-1)*25+1;
                scraper(page);
                console.log(page);
            }, index * 3000);
        })(i);
    }
}

scrapeloop()