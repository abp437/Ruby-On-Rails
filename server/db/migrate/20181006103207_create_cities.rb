class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :city_name
      t.timestamps
    end
    # It creates a new column named 'city_id' in Users table, but however
    add_reference :users, :city
    # Here we add a foreign key reference. Here the 'city_id' column acts as a
    # foreign key to the city table and in it the 'id' column of the city table
    # We can access City's data in the user record.
    add_foreign_key :users, :cities
  end
end
