- Là 1 JavaScript Runtime Enviroment 
- Trước tiên, mình giải thích lại cách hoạt động của JavaScript. JavaScript khác với các ngôn ngữ biên dịch như C/C++. JavaScript chạy trong một container – container này chính là một phần mềm thực hiện đọc code JavaScript và thực thi nó.

Phần đọc code và chuyển thành các đoạn mã để container có thể hiểu chính là nhiệm vụ của JavaScript Engine.

Phần thực thi các đoạn mã đó lại thuộc về JavaScript Runtime Enviroment. JavaScript Runtime Enviroment cung cấp các đối tượng, môi trường để JavaScript giao tiếp với máy tính.

Ví dụ Chrome Browser và Node.js đều sử dụng chung JavaScript Engine là V8. Tuy nhiên JavaScript Runtime Enviroment trong 2 trường hợp này lại khác nhau:

Chrome Browser sử dụng các đối tượng như window, DOM object hay các method như AJAX… để giao tiếp với network và hiển thị.
Node.js lại cung cấp các thư viện cho phép truy cập trực tiếp các file trên máy tính, truy cập database, tiến trình (Chrome Browser không làm được các việc này)
