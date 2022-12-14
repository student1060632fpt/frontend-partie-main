# Todo 12/12
- setup vercel lỗi 
```
No Output Directory named "build" found after the Build completed. You can configure the Output Directory in your Project Settings.
```
cách giải
https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md#with-vercel


- A non-serializable value
```
redux-toolkit.esm.js:390 
        
       A non-serializable value was detected in an action, in the path: `payload.contract_id`. Value: 
```

# todo 13/12

Các bước để build lên server của vercel
1. Tạo nhánh cho chức năng mình muốn update
2. Update code lên
3. ở phía code chạy câu lệnh 
```
npm run buil
```
4. Xong thì tạo merge request trên github
5. coi thử vercel báo thành công thì đã lên server, còn ko phải coi bug trên web của vercel

- chiều
Cần coi lại có cách nào fetch isSignIn khi isSignIn bằng false lại
