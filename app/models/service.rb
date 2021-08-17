# == Schema Information
#
# Table name: services
#
#  id         :bigint           not null, primary key
#  name       :string(255)
#  price      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Service < ApplicationRecord
  has_many :combos
  has_many :bookings, through: :combos
  has_many :detail_prices

  def full_name
    "#{name} - #{price} VNĐ"
  end
end
