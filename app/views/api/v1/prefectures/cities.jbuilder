json.cities do
  json.array! @cities, :id, :name
end
