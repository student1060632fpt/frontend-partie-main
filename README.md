# Document team Partie

## 1. Ý tưởng:

Nhóm em có dự định tạo Một Scheduled Social, ứng dụng thực hiện task cho quản lý và nhân viên, hoặc cho các nhân viên remote, freelancer để thực hiện các task của customer. Điểm đặc biệt ở đây là quản lý, doanh nghiệp có thể đặt phần thưởng hay mức phạt cho từng task bằng token.

## 2. Các công nghệ sử dụng:

- Version control: Github, branch
- Front-end:
  - ReactJs làm framework chính
  - Redux Toolkit để quản lý store
  - Các UI library: Ant design, Bootstrap, material ui
  - Webpack: để đóng gói và build bản product, vì cài webpack nên lúc npm install lần đầu rất chậm
- Back-end: Django, MongoDB, Python
- Smart Contract: Rust

## 3. Kế hoạch thực hiện dự án của nhóm:

- Tuần 1: Cả nhóm lên kế hoạch, bàn bạc về ý tưởng, tính khả thi, tên và logo dự án

- Tuần 2: Quyết định chọn ý tưởng. Lên design chi tiết website, workflow và diagram.

- Tuần 3: Xây dựng dần smart contract, vẽ cấu trúc database. Build layout cho front-end

- Tuần 4: Kết nối Front-end với API và smart contract. Hoàn thiện project và chuẩn bị cho Demo Pitching Day

## 4. Flow chart luồng thuyết trình
![alt text for screen readers](/flow.png "Text to show on mouseover")
[https://drive.google.com/file/d/19F_OKD9PUu69Mw8wAPdtTYw2QBudfeBE/view?usp=sharing]

## 5. front-end:

### a. trang:

1. home page
   1. Header: thông báo (quân)
   2. top categories of job
   3. top hot job:
   4. list professional freelancer
   5. bỏ feature blog
   6. modal: sign in, chỉ cần kết nối với ví
   7. gửi địa chỉ ví về backend
2. form upload profile cho user : cv

   8. /freelancer-profile-settings

3. profile freelancer

   9. /developer-profile

4. list job:

   10. filter
   11. /project

5. list freelancer 10 người có point cao nhất: 12. filter 13. /developer

6. job detail 14. token 15. description 16. list freelancer đã nhắm job đó 17. detail người đăng job đó 18. modal nhận job với số ngày freelancer được quyền chọn 19. /project-details

7. quản lý job 20. list job 1. /manage-projects 21. đăng job 2. /post-project

8. list freelancer apply to my job 22. all project 3. những freelancer đã thầu từng project 23. /pending-projects

9. vote report - vote theo người có token sẵn cao nhất

10. freelancer report

### b. Deploy

Nhóm dùng vercel để deploy, tuy là vercel setup hơi chậm nhưng mà vercel hiện tại đang hỗ trợ setup dễ dàng nhất và miễn phí hiện tại để thay thế cho heroku

[Project Settings – Dashboard – Vercel](https://vercel.com/student1060632fpt/template-reactjs-kofe/settings)

### c. Source code

- Link github front end để test

[student1060632fpt/frontend-partie-main (github.com)](https://github.com/student1060632fpt/frontend-partie-main)

- **Source github frontend bản chính**

[student1060632fpt/frontend-partie-main (github.com)](https://github.com/student1060632fpt/frontend-partie-main)

### d. Cấu trúc dự án

Dự án được định sẵn sẽ cấu trúc theo React Global thông dụng dễ dùng

### e. Cách chạy source code

- Sau khi clone source code từ github về chạy, npm i phải có flag –legacy phía sau nếu không sẽ bị conflict phiên bản nên sẽ không thể chạy được. Lần npm i đầu tiên sẽ mất 1 tiếng và gặp nhiều lỗi. Lần thứ hai và thứ ba mới đỡ tốn thời gian hơn

```
  npm i --legacy-peer-deps
```


* Sau đó chạy source code như bình thường, lần đầu chạy source code npm start sẽ mất thêm 1 tiếng nữa để chạy tại vì webpack lần đầu bundle rất lâu, lần thứ hai và lần thứ ba sẽ còn 5 giây

```
npm start
```

## 6.  Smart contract

- source UI test để get data từ smc bản cũ

[https://github.com/thanh-hdt/ui-pat](https://github.com/thanh-hdt/ui-pat)

- source UI test để get data từ smc bản mới

[thanh-hdt/ui-pat-test (github.com)](https://github.com/thanh-hdt/ui-pat-test)

- **Source main smart contract**

[https://github.com/thanh-hdt/smc-partie-team](https://github.com/thanh-hdt/smc-partie-team)

## 7.  function backend:

- sign-in
  - POST - json: {address: string} -> lấy address làm token
- sign-up
  - POST - formdata: {address: string, name: string, image: base64, attachment: array&lt;string> (bắt validate link), email: string, skill: array&lt;string>, social: array&lt;string>}
- quản lý user: hình ảnh, cv, họ tên, email, địa chỉ ví
  - EDIT
- quản lý job: liên kết với freelancer
  - POST - json: {id: string(front-end tạo), address: string, budget: number, categories: Array&lt;string>, skill: array&lt;string>, attachments: string, deadline: hh:mm:ss dd/mm/yyyy}
  - GET/:jobId
  - GET/
  - UPDATE khi chưa có người nhận
  - DELETE/:jobId
- quản lý freelancer

### 8. Thành viên nhóm

- Nguyễn Lê Xuân Hòa - 2033145 - hoa.nguyen_bk@hcmut.edu.vn

- Hoàng Đình Thành - 1915130 - thanh.hoangbk2k.k19@hcmut.edu.vn

- Nguyễn Hồng Quân - 2052228 - quan.nguyen2711@hcmut.edu.vn

### 9. Demo website app:

[https://partie-hackathon.vercel.app/template/index](https://partie-hackathon.vercel.app/template/index)

