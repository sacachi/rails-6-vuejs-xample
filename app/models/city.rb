# frozen_string_literal: true

# == Schema Information
#
# Table name: cities
#
#  id            :bigint           not null, primary key
#  name          :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  prefecture_id :integer
#
class City < ApplicationRecord
  validates :name, presence: true
  belongs_to :prefecture
  has_many :barbers
  has_many :communes
end
