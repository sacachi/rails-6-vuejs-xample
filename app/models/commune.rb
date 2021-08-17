# frozen_string_literal: true

# == Schema Information
#
# Table name: communes
#
#  id            :bigint           not null, primary key
#  name          :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  city_id       :integer
#  prefecture_id :integer
#
class Commune < ApplicationRecord
  validates :name, presence: true
  has_many :barbers
  belongs_to :city
  belongs_to :prefecture
end
