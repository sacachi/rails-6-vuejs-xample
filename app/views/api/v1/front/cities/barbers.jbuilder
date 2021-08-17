json.barbers do
  json.array! @barbers do |barber|
    json.id barber.id
    json.name barber.name
    json.gender barber.gender
    json.phone barber.phone
    json.city_id barber.city_id
    json.prefecture_id barber.prefecture_id
    json.city barber.city
    json.prefecture barber.prefecture
    json.detail_prices barber.detail_prices
  end
end
