# == Schema Information
#
# Table name: bookings
#
#  id          :bigint           not null, primary key
#  detail      :json
#  status      :integer          default("new")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  barber_id   :integer
#  customer_id :integer
#
# Indexes
#
#  index_bookings_on_barber_id    (barber_id)
#  index_bookings_on_customer_id  (customer_id)
#
class Booking < ApplicationRecord
  has_many :combos
  has_many :services, through: :combos
  belongs_to :customer
  belongs_to :barber
  enum status: {
    new: 0,
    completed: 1,
    canceled: 2
  }, _prefix: :booking

  accepts_nested_attributes_for :customer
end
