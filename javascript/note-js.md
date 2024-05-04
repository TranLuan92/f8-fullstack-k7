# Javascript

# format js : (ctrl + shift + p) / gõ format document / (prettier)

# Giới thiệu.

    * Javascript là ngôn ngữ lập trình phía client
    * Khi NodeJS ra đời --> Javascript chạy được ở trên Server
    * File có phần mở rộng: .js

# Biểu thức = Toán tử và toán hạng

        //s = a + b * c --> biểu thức

        //s, a, b, c --> Toán hạng
        // =, +, * --> Toán tử

1.  Toán tử số học
    /_
    +, -, _, /
    % --> Chia lấy dư \*_ --> Lũy thừa
    ++ --> Tăng lên 1 đơn vị
    -- --> Giảm đi 1 đơn vị
    _/

        var a = 1;
        var b;
        // a++;
        // a--;
        // ++a;
        // var b = a++;
        var b = ++a;
        // console.log(a);
        // console.log(b);

        var count = 1;
        var total = count++ + ++count + count++;
        // console.log(total);

        /*
        1. count = 2, total = 1
        2. count = 3, total = 1 + 3 = 4
        3. count = 4, total = 4 + 3 = 7
        */

2.  Toán tử gán (=)
    var a = 10;
    // a = a + 10;
    // a += 10;
    // a -= 10;
    // a \*= 10;
    // a /= 10;
    // a %= 10;
    a \*\*= 10;
    // console.log(a);

3.  Toán tử so sánh
    /\* >, <, >=, <=, ==, ===, !=, !==

        ==> Luôn trả kiểu dữ liệu logic (boolean): true, false

        Lưu ý:
        == So sánh bằng nhưng chỉ so sánh giá trị
        === So sánh bằng cả giá trị và kiểu dữ liệu
        != So sánh khác nhưng chỉ so sánh giá trị
        !== So sánh khác cả kiểu dữ liệu và giá trị
        */

4.  Toán tử lý luận (kết hợp)
    /\*
    && --> Kết hợp and
    || --> Kết hợp or
    ! --> Kết hợp not

        Thứ tự ưu tiên: Ngoặc tròn --> and --> or --> not
        */

        var a = 10;
        // var check = !(a >= 5 && a <= 15);
        var check = a < 0 || (a >= 5 && a <= 15);
        console.log(check);

        var b = 5;
        // if (10 === b) {

        // }

5.  Toán tử 3 ngôi
    //Cú pháp: dieukien ? giatridung : giatrisai
    // var a = 10;
    // var b = a >= 10 ? "F8" : "Hoàng An";
    // console.log(b);

            // var a = 10;
            // var total = 5 + 10 + (a >= 10 ? 10 : 5) + 2;
            // console.log(total);

    // Cách dùng :

    > > > Toán tử 3 ngôi thường được sử dụng để thay thế cho câu lệnh điều kiện if/else trong các trường hợp đơn giản, giúp rút gọn cú pháp và làm cho mã nguồn dễ đọc hơn.
    > > > // ví dụ :
    > > > // sắp sếp số theo thứ tự tăng dần.
    > > > // var a = 1 ;
    > > > // var b = 2 ;
    > > > // var c = 3 ;
    > > > //a > b ? (a > c ? a : c) : b > c ? b : c ;
    > > > dùng if :
    > > > if(a > b ){

        console.log(a);

    } else if ( a < b ){
    console.log(b);
    }else{
    console.log(c);
    }

6.  Toán tử nullish (??)
    //Cú pháp: bien ?? giatri
    //Cách hoạt động: Nếu bien !== undefined và bien !== null thì lấy biến, ngược lại lấy giatri

        var x = 10;
        // var result = x ?? "F8";
        // var result = x !== null && x !== undefined ? x : "F8";
        var result = x === null || x === undefined ? "F8" : x;
        console.log(result);

        //Viết lại toán tử nullish bằng toán tử 3 ngôi
        var x = 10;
        var result = x >= 10 ? 10 : hello ;
        console.log(x);

# Comment

        //Comment JS 1 dòng
        /_
        Comment nhiều dòng
        Comment nhiều dòng
        Comment nhiều dòng
        _/

        //Khai báo biến (Đặt tên theo quy tắc camelCase)
        var user;
        var customer;
        var userId, username, email, userEmail;
        var course = "Fullstack Offline",
        age = 32;

> > > Lưu ý: Nếu 1 biến được khai báo nhưng không gán giá trị --> Giá trị mặc định sẽ là undefined

        console.log(user);
        console.log(course);

        //Hiển thị nội dung lên trình duyệt
        // document.write("<h2>Hello anh em F8</h2>");

        //Dùng DOM (Học sau)
        // document.body.innerHTML = "Học JS không khó";

        >>>Lưu ý: Nội dung hiển thị lên trình duyệt có thể là thẻ html
        // document.write(course);

        // var welcome = "<h2>Khóa học " + course + " tại F8</h2>";
        // welcome = welcome + "<h3>Hoàng An</h3>";

# Năm 2015, js có bổ sung cú pháp mới để thay thế dấu nháy đơn và nháy kép

> > > Backtick: ``var welcome =`<h2>Khóa học ${course} tại F8</h2>

        <h3>Hoàng An</h3>`;

        document.write(welcome);

> > > Lưu ý : lối biến trong js dùng ${...}

> > > Lưu ý: Biến trong JS có 2 cách khai báo khác: let, const --> Học sau
