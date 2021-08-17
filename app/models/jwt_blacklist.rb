# == Schema Information
#
# Table name: jwt_blacklists
#
#  id         :bigint           not null, primary key
#  exp        :datetime
#  jti        :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_jwt_blacklists_on_jti  (jti)
#
class JwtBlacklist < ApplicationRecord
  self.table_name = 'jwt_blacklists'
end
