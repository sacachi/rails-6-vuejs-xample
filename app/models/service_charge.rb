# == Schema Information
#
# Table name: service_charges
#
#  id         :bigint           not null, primary key
#  name       :string(255)
#  price      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServiceCharge < ApplicationRecord
end
