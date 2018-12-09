class AddDateAvailableToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :date_available, :datetime
  end
end
