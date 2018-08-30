class Order
  attr_reader :email, :total
  def initialize(email, total)
    @email = email
    @total = total
  end

  # All objects have 'to_s' method.
  # 'to_s' method is defined in Object class and hence all ruby objects have method 'to_s'.
  # For example when we do string interpolation then 'to_s' method is called. puts invokes 'to_s' method too.
  def to_s
    "#{email}: $#{total}"
  end

end

orders = []
1.upto(5) { |n| orders << Order.new('abp437@gmail.com', n * 10) }
puts orders
# Here the puts metnod invoked 'to_s' method.
