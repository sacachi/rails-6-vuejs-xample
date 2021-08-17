# frozen_string_literal: true

User.destroy_all

(1..2).to_a.each do |index|
  User.seed do |user|
    user.email = "user#{index}@gmail.com"
    user.password = '123456'
  end
end
