json.services do
  json.array! @services do |service|
    json.id service.id
    json.name service.name
    json.price service.price
  end
end
