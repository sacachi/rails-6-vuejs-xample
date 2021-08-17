# == Schema Information
#
# Table name: combos
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  booking_id :integer
#  service_id :integer
#
# Indexes
#
#  index_combos_on_booking_id  (booking_id)
#  index_combos_on_service_id  (service_id)
#
class Combo < ApplicationRecord
  belongs_to :booking
  belongs_to :service
end
