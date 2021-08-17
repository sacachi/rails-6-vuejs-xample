# == Schema Information
#
# Table name: detail_prices
#
#  id         :bigint           not null, primary key
#  price      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  barber_id  :integer
#  service_id :integer
#
# Indexes
#
#  index_detail_prices_on_barber_id   (barber_id)
#  index_detail_prices_on_service_id  (service_id)
#
class DetailPrice < ApplicationRecord
  belongs_to :barber
  belongs_to :service
end
