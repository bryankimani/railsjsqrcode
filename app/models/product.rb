class Product < ApplicationRecord
  # after_create do
  #   update(barcode: SecureRandom.hex)
  # end

  before_create do
    self.barcode = SecureRandom.hex
  end
end
