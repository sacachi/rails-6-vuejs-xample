json.barbers do
  json.array! @barbers do |barber|
    json.id barber.id
    json.name barber.name
    json.admin do
      json.id barber.admin&.id
      json.email barber.admin&.email
    end
    json.phone barber.phone
    json.age barber.age
    json.birth_day get_format(barber.birth_day)
    json.gender_name translate_enum('barber', barber.gender)
    json.gender barber.gender
    json.prefecture_id barber.prefecture_id
    json.prefecture do
      json.id barber&.prefecture&.id
      json.name barber&.prefecture&.name
    end
    json.city_id barber.city_id
    json.city do
      json.id barber&.city&.id
      json.name barber&.city&.name
    end
    json.commune_id barber.commune_id
    json.commune do
      json.id barber&.commune&.id
      json.name barber&.commune&.name
    end
    json.address barber.address
  end
end
