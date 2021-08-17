# frozen_string_literal: true

Admin.destroy_all
SuperAdmin.destroy_all

prefecture = Prefecture.find_by(name: 'Tp Hà Nội')
city = City.find_by(name: 'Quận Tây Hồ')
barber = Barber.create!(city_id: city.id, prefecture_id: prefecture.id, phone: '0968034165', name: 'Miki Thuỳ Linh',
                        address: 'Ngõ 172/151 Âu Cơ')
Admin.create!(email: 'ngothuylinh9192@gmail.com', password: '123456', barber_id: barber.id)

SuperAdmin.seed do |user|
  user.email = 'admin@gmail.com'
  user.password = 'Ment@2021'
end
