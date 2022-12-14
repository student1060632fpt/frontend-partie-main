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

# to do 14/12
viết lại 2 object
```
{
    "creator_id": "dollnguyen12345.testnet",
    "budget": 11000000000000000000,
    "freelancers": {
        "a2487c1136b5a6c7691ae00745eb711f954d9af6193880568a90c668addbc899": {
            "creator": [
                true,
                true
            ],
            "freelancer": [
                true,
                true
            ]
        }
    },
    "is_start": true,
    "is_end": true,
    "voting_id": ""
}
```
