json.service_charges do
  json.array! @service_charges do |service_charge|
    json.id service_charge.id
    json.name service_charge.name
    json.price service_charge.price
  end
end
