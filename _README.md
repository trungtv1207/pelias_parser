# installation
* NodeJs 12.18.2
* npm 6.14.5
> NodeJs
```bash
$ sudo apt update
$ sudo apt install nodejs
```
> Clone project source code
# Usage
> Giao diện dòng lệnh
```bash
$ node bin/cli.js ADDRESS_TEXT
```
> Giao diện web browser
```bash
$ node server/http.js
```
# Fix lỗi nếu có
> Xoá thư mục ```node_modules``` và tệp ```package-lock.json```:
```bash
$ sudo rm -rf node_modules package-lock.json
```
> Tải lại dependencies và chạy lại npm
```bash
$ npm install
$ npm start
```

# pelias_parser

- data files imported:
    - ../resources/whosonfirst/dictionaries/county/name:vie_x_preferred.txt
	*quận, huyện
    - ../resources/wosonfirst/dictionaries/locality/name:vie_x_preferred.txt
	*xã, phường
    - ../resources/whosonfirst/dictionaries/region/name:vie_x_preferred.txt
	*tỉnh, thành phố

    - ../resources/whosonfirst/dictionaries/county/name:vie_x_preferred_prefix.txt
	*quận, huyện chứa tiền tố
    - ../resources/whosonfirst/dictionaries/locality/name:vie_x_preferred_prefix.txt
	*xã, phường chứa tiền tố
    - ../resources/whosonfirst/dictionaries/region/name:vie_x_preferred_prefix.txt
	*tỉnh, thành phố chứa tiền tố
    
    - ../resources/whosonfirst/dictionaries/county/name:vie_x_preferred_NFD.txt
	*quận, huyện không dấu
    - ../resources/whosonfirst/dictionaries/locality/name:vie_x_preferred_NFD.txt
	*xã, phường không dấu
    - ../resources/whosonfirst/dictionaries/region/name:vie_x_preferred_NFD.txt
	*tỉnh, thành không dấu

    - ../resources/whosonfirst/dictionaries/street/
	* tên đường phố

- code files imported:
    - ../classification/CountyClassification.js
	* định danh thẻ county - quận, huyện
    - ../classification/CountyClassification.test.js
	*test class CountyClassification
    - ../test/address.vie.test.js
	*27 test địa chỉ Việt Nam

- code files edited:
    - ../classifier/WhosOnFirstClassifier.js
	*cấu hình vị trí các file từ điển
    - ../classifier/StreetSuffixClassifier.js
	*Cấu hình vị trí file tiền tố đường phố
    - ../solver/LeadingAreaDeclassifier.js
	*Cấu hình nhận thẻ county - quận, huyện
    - ../parser/Parser.js
	*Cấu hình nhận diện thẻ county - quận, huyện
    - ../resources/libpostal/dictionaries/vi/qualifiers.txt
	*Các tiền tố địa giới hành chính VD: xã, quận, thị trấn, thị xã,...
