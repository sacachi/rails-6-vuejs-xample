json.bookings do
  json.array! @bookings do |booking|
    json.customer do
      json.id booking.customer.id
      json.name booking.customer.name
      json.phone booking.customer.phone
      json.address booking.customer.address
      json.prefecture_name booking.customer&.prefecture&.name
      json.city_name booking.customer&.city&.name
      json.commune_name booking.customer&.commune&.name
    end
    json.barber do
      json.id booking.barber.id
      json.name booking.barber&.name
      json.phone booking.barber&.phone
    end
    json.id booking.id
    json.status do
      json.key booking.status
      json.value translate_enum('booking', booking.status)
    end
    json.detail booking.detail
    json.created_at I18n.l(booking.created_at)
  end
end
json.total @total
