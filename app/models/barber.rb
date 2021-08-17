# == Schema Information
#
# Table name: barbers
#
#  id            :bigint           not null, primary key
#  address       :string(255)
#  birth_day     :datetime
#  deleted_at    :datetime
#  gender        :integer          default("female")
#  name          :string(255)
#  phone         :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  city_id       :integer
#  commune_id    :integer
#  prefecture_id :integer
#
# Indexes
#
#  index_barbers_on_city_id        (city_id)
#  index_barbers_on_commune_id     (commune_id)
#  index_barbers_on_prefecture_id  (prefecture_id)
#
class Barber < ApplicationRecord
  after_create :create_detail_price
  acts_as_paranoid
  has_one :admin
  belongs_to :city, optional: true
  belongs_to :prefecture, optional: true
  belongs_to :commune, optional: true
  has_many :bookings
  has_many :detail_prices
  has_many :services, through: :detail_prices

  enum gender: { male: 0, female: 1, other: 2 }

  accepts_nested_attributes_for :admin

  def create_detail_price
    return if detail_prices.present?

    Service.all.each do |service|
      DetailPrice.create(service_id: service.id, price: service.price, barber_id: id)
    end
  end

  def age
    Time.current.year - birth_day.year
  rescue StandardError
    ''
  end
end
