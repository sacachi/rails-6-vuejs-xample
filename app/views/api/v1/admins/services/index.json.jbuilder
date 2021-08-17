json.services do
  json.array! @services do |service|
    json.id service.service&.id
    json.name service.service&.name
    json.price service.price
  end
end
