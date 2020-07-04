# installation
> NodeJs
```bash
$ sudo apt update
$ sudo apt install nodejs
```
# Usage
> Giao diện dòng lệnh
```bash
$ node bin/cli.js ADDRESS_TEXT
```
> Giao diện web browser
```bash
$ node server/http.js
```

# pelias_parser

- data files imported:
    - ../resources/whosonfirst/dictionaries/county/name:vie_x_preferred.txt
    - ../resources/whosonfirst/dictionaries/locality/name:vie_x_preferred.txt
    - ../resources/whosonfirst/dictionaries/region/name:vie_x_preferred.txt
    - ../resources/whosonfirst/dictionaries/street/

- code files imported:
    - ../classification/CountyClassification.js
    - ../classification/CountyClassification.test.js
    - ../test/address.vie.test.js

- code files edited:
    - ../classifier/WhosOnFirstClassifier.js
    - ../classifier/StreetSuffixClassifier.js
    - ../solver/LeadingAreaDeclassifier.js
    - ../parser/Parser.js
    - ../resources/libpostal/dictionaries/vi/qualifiers.txt
