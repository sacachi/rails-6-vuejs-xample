# frozen_string_literal: true

City.destroy_all
Prefecture.destroy_all
Commune.destroy_all

data = RubyXL::Parser.parse('db/data/prefecture.xlsx')[0]
pre_imported = []
city_imported = []
prefectures = []
cities = []
communes = []
(1..data.count - 2).to_a.each do |index|
  row = data[index]
  pre_name = row[0].value
  pre_id = row[1].value.to_i
  city_name = row[2].value
  city_id = row[3].value.to_i
  commune_name = row[4].value
  commune_id = row[5].value.to_i
  unless pre_imported.include?(pre_id)
    prefectures << Prefecture.new(
      id: pre_id,
      name: pre_name
    )
    pre_imported << pre_id
  end
  unless city_imported.include?(city_id)
    cities << City.new(
      id: city_id,
      name: city_name,
      prefecture_id: pre_id
    )
    city_imported << city_id
  end

  communes << Commune.new(
    id: commune_id,
    name: commune_name,
    city_id: city_id,
    prefecture_id: pre_id
  )
  next unless communes.size == 500

  Prefecture.import prefectures
  City.import cities
  Commune.import communes
  prefectures = []
  cities = []
  communes = []
end
