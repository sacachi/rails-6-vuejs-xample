a = [
  { name: 'Cắt tóc', price: 30_000 },
  { name: 'Cạo mặt', price: 35_000 },
  { name: 'Lột mụn cám', price: 30_000 },
  { name: 'Nhuộm tóc', price: 30_000 },
  { name: 'Làm móng tay', price: 50_000 },
  { name: 'Tạo kiểu tóc', price: 50_000 }
]
b = [
  { name: 'Phụ phí phục vụ tại nhà', price: 35_000 }
]
Service.create(a)
ServiceCharge.create(b)
