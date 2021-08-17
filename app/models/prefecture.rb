# frozen_string_literal: true

# == Schema Information
#
# Table name: prefectures
#
#  id         :bigint           not null, primary key
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Prefecture < ApplicationRecord
  validates :name, presence: true
  has_many :barbers
  has_many :cities
  has_many :communes
end
