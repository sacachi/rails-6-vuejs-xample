json.barbers do
  json.array! @barbers do |barber|
    json.id barber.id
    json.name barber.name
    json.phone reformat_phone barber.phone
    json.ori_phone barber.phone
    json.gender barber.gender
    json.age barber.age
    json.detail_prices barber.detail_prices
    json.prefecture barber.prefecture
    json.city barber.city
  end
end
