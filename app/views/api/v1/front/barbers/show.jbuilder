json.barber do
  json.id @barber.id
  json.name @barber.name
  json.phone reformat_phone @barber.phone
  json.age @barber.age
  json.gender @barber.gender
  json.services @barber.detail_prices do |e|
    json.id e.id
    json.created_at e.created_at
    json.barber_id e.barber_id
    json.price e.price
    json.service_id e.service_id
    json.service_name e.service.name
    json.updated_at e.updated_at
  end
  json.building "#{@barber&.commune&.name}/#{@barber&.city&.name}/#{@barber&.prefecture&.name}"
  json.prefecture_id @barber.prefecture_id
  json.commune_id @barber.commune_id
  json.city_id @barber.city_id
end
