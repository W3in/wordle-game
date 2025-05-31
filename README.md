# 🎮 Wordle Game - Trò chơi đoán từ 5 chữ cái
## 🧩 Giới thiệu Sơ lược về tựa game web này:
Trong Wordle, mục tiêu của người chơi là đoán ra một từ 5 chữ cái trong tối đa 6 lượt đoán. Mỗi lần đoán, game sẽ phản hồi bằng cách thay đổi màu sắc của các ô chữ để cho biết chữ cái đó có đúng hay không, và nếu có thì nó có ở đúng vị trí không.

Lượt đoán đầu tiên: Người chơi nhập một từ 5 chữ cái.

Phản hồi màu sắc:

- 🟢 **Xanh lá cây**: Chữ cái **đúng** và **đúng vị trí**.
- 🟡 **Vàng**: Chữ cái **đúng** nhưng **sai vị trí**.
- 🩶 **Xám**: Chữ cái **không có** trong từ cần đoán.

Các màu này giúp người chơi xác định từ đang đoán có bao nhiêu chữ cái chính xác, và từ đó tinh chỉnh các lượt đoán tiếp theo.

Tiến trình chơi:

Người chơi sẽ nhập các từ mới cho đến khi đoán đúng hoặc hết số lượt cho phép (tối đa 6 lượt).

Mỗi lượt nhập sẽ nhận được phản hồi màu sắc, giúp người chơi dần dần khoanh vùng các chữ cái đúng và vị trí của chúng.

---

## ⚙️ Công nghệ sử dụng
- [ReactJS](https://reactjs.org/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML5 & CSS3](https://developer.mozilla.org/en-US/docs/Web)

---

## 🛠️ Cài đặt và chạy ứng dụng

**Bước 1:** Clone dự án về máy bằng Git 
**Bước 2:** Di chuyển vào thư mục dự án bằng lệnh `cd wordle-game`  
**Bước 3:** Cài đặt các thư viện cần thiết bằng lệnh `npm install`  
**Bước 4:** Khởi chạy ứng dụng bằng lệnh `npm start`

Sau khi chạy lệnh `npm start`, trình duyệt sẽ tự động mở tại địa chỉ **http://localhost:3000**

---

## 💡 Đóng góp

Rất hoan nghênh mọi ý kiến đóng góp và cải tiến. Bạn có thể mở issue hoặc gửi pull request.
