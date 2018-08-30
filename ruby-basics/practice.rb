# Everything you manipulate in Ruby is an object, and the results of those manipulations are themselves objects.

# Function starts with the 'def' keyword.
# Function blocks end with the 'end' keyword.
# No need to declare variables explicitly, eg. 'result' it'll figure itself out.
def say_hello(name)
  result = "Hello #{name}"
  return result
end
# The default value returned by a Ruby method is the value of the last expression evaluated.
# So in the above method we should have also skipped 'return result' statement.

# Each object in Ruby has a unique identifier that is the Object Id.
# Also new instances are created with the 'new' keyword.

# Single quotes for plain strings.
puts say_hello('Akshay')
# Double quotes for Interpolated/Formatted Strings, single quotes won't work in such cases.
puts "Hello \nWorld"

# Naming conventions:
# Local variables, method names and params - Lowercase separated by underscores.
# Global variables - Prefixed with $.
# Instance variables - Prefixed with @.
# Class variables - Prefixed with @@.
# Class names, module names - Starts with uppercase and multi word follows MixedCase.
# Constants - Uppercase separated by underscores.

# Arrays and Hashes
# Hashes are nothing but associative arrays, i.e. key value pairs as shown below:
inst_section = {
  cello: 'string',
  clarinet: 'woodwind',
  drum: 'percussion',
  oboe: 'woodwind',
  trumpet: 'brass',
  violin: 'string',
}
# Keys in Hashes must be unique.
puts inst_section

# Statement modifiers are similar to ternary operators in Python.
radiation = 4000
if radiation > 3000
  puts 'Danger, Will Robinson'
end

# Becomes
puts 'Danger, Will Robinson' if radiation > 3000

# Similarly we can use statement modifiers in while loop since Ruby treats 'nil' as falsy value.

# Regular Expressions
# A regular expression is simply a way of specifying a pattern of characters to bematched in a string.
# Regexes are delimited by / /

line = 'Python'
# The match operator '=~' can be used to match a string against a regular expression.
# If the pattern is found in the string, '=~' returns its starting position, otherwise it returns nil.
if line =~ /P(erl|ython)/
  puts "Scripting language mentioned: #{line}"
end

# Ruby Blocks
# We can't directly run Ruby blocks, we need to associate these blocks with a method call.

3.times { puts 'Hello' }
# Block parameters are put after 'do' and are accpeted in ||.
5.times do |number|
  print 'Hello '
  # This is the Block Parameter.
  puts number
end

# Similarly it works out for a single line.
3.times { |n| puts n }

# So as we can see that Block parameters are all dependent on the method that's calling that block.
2.upto(4) { |n| puts "Hello #{n}" }

# Ruby Iterators
# Each array has got iterators associated with it, here are the examples:

pets = %w{ rex nibbles fred }

# Each performs operations on the same array doesn't alter the original array and doesn't return a new array.
# 'each' simply iterates over the given enumerable, running the block for each value.
# It discards the return value of the block, and each simply returns the original object it was called on.
each_example = pets.each do |pet|
  "I love #{pet.upcase}"
end
puts each_example

# 'map', however, iterates over each element, using the return value of the block to populate a new array at each respective index and return that new array:
map_example = pets.map do |pet|
  "I love #{pet.upcase}"
end
puts map_example
