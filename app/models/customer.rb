# == Schema Information
#
# Table name: customers
#
#  id            :bigint           not null, primary key
#  address       :string(255)
#  age           :integer
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
#  index_customers_on_city_id        (city_id)
#  index_customers_on_commune_id     (commune_id)
#  index_customers_on_prefecture_id  (prefecture_id)
#
class Customer < ApplicationRecord
  belongs_to :city, optional: true
  belongs_to :prefecture, optional: true
  belongs_to :commune, optional: true

  enum gender: { male: 0, female: 1, other: 2 }
end
