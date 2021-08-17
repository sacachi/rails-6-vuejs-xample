class AddBirthDateToBarber < ActiveRecord::Migration[6.1]
  def change
    add_column :barbers, :birth_day, :datetime
    remove_column :barbers, :age, :integer
  end
end
