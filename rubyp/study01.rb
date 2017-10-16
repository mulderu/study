# this is comment text
# study


puts "this is main"

name = "Mulder"
puts name

sum = 18+5
puts sum 

arr1 = [1,2,3, 'hi', 'mulder']
print arr1
puts ""

print "name.length:", name.length, '\n'
print "arr1.length:", arr1.length, '\n'


def hap(x, y)
    puts x+y 
end
 
hap(10, 20)

def checkx(x)
    if x>10
        print "10 over:" ,x
    else
        print "10 under:" , x
    end
end

checkx(20)
checkx(5)

print [1,2,3].size, '\n'

print [4,5,6][0], '\n'

print  [1,2,3] << 4, '\n'

$global_variable = 10
class Class1
  def print_global
     $global_variable+=1
     puts "Global variable in Class1 is #$global_variable"
  end
end
class Class2
  def print_global
     $global_variable+=1
     puts "Global variable in Class2 is #$global_variable"
  end
end

class1obj = Class1.new
class1obj.print_global
class2obj = Class2.new
class2obj.print_global
puts "================"


class Customer
   def initialize(id, name, addr)
      @cust_id=id
      @cust_name=name
      @cust_addr=addr
   end
   def display_details()
      puts "Customer id #@cust_id"
      puts "Customer name #@cust_name"
      puts "Customer address #@cust_addr"
    end
end

# Create Objects
cust1=Customer.new("1", "John", "Wisdom Apartments, Ludhiya")
cust2=Customer.new("2", "Poul", "New Empire road, Khandala")

# Call Methods
cust1.display_details()
cust2.display_details()
puts "================"




class Customer2
   @@no_of_customers=0
   def initialize(id, name, addr)
      @cust_id=id
      @cust_name=name
      @cust_addr=addr
      @@no_of_customers += 1
   end
   def display_details()
      puts "Customer id #@cust_id"
      puts "Customer name #@cust_name"
      puts "Customer address #@cust_addr"
    end
    def total_no_of_customers()
       puts "Total number of customers: #@@no_of_customers"
    end
end

# Create Objects
cust21=Customer2.new("1", "John", "Wisdom Apartments, Ludhiya")
cust22=Customer2.new("2", "Poul", "New Empire road, Khandala")

# Call Methods
cust21.total_no_of_customers()
cust22.total_no_of_customers()
puts "================"
 

class Example
   VAR1 = 100 # const
   VAR2 = 200
   def show
       puts "Value of first Constant is #{VAR1}"
       puts "Value of second Constant is #{VAR2}"
   end
end

# Create Objects
object=Example.new()
object.show
puts "================"


puts 'escape using "\\"';
puts 'That\'s right';
puts "Multiplication Value : #{24*60*60}";
puts "================"


ary = [  "fred", 10, 3.14, "This is a string", "last element", ]
ary.each do |i|
   puts i
end
puts "================"

hsh = colors = { "red" => 0xf00, "green" => 0x0f0, "blue" => 0x00f }
hsh.each do |key, value|
   print key, " is ", value, "\n"
end

(10..15).each do |n| 
   print n, ' ' 
end
puts ""

foo = 42
puts defined? foo    # => "local-variable"
puts defined? $_     # => "global-variable"
puts defined? bar    # => nil (undefined)


MR_COUNT = 0        # constant defined on main Object class
module Foo
  MR_COUNT = 0
  ::MR_COUNT = 1    # set global count to 1
  MR_COUNT = 2      # set local count to 2
end
puts MR_COUNT       # this is the global constant
puts Foo::MR_COUNT  # this is the local "Foo" constant



CONST = ' out there'
class Inside_one
   CONST = proc {' in there'}
   def where_is_my_CONST
      ::CONST + ' inside one'
   end
end
class Inside_two
   CONST = ' inside two'
   def where_is_my_CONST
      CONST
   end
end
puts Inside_one.new.where_is_my_CONST
puts Inside_two.new.where_is_my_CONST
puts Object::CONST + Inside_two::CONST
# puts Inside_two::CONST + CONST
# puts Inside_one::CONST
# puts Inside_one::CONST.call + Inside_two::CONS
puts "================"

x=1
if x > 2
   puts "x is greater than 2"
elsif x <= 2 and x!=0
   puts "x is 1"
else
   puts "I can't guess the number"
end

$debug=1
print "debug\n" if $debug


x=1
unless x>2
   puts "x is less than 2"
 else
  puts "x is greater than 2"
end


$var =  1
print "1 -- Value is set\n" if $var
print "2 -- Value is set\n" unless $var

$var = false
print "3 -- Value is set\n" unless $var


$age =  5
case $age
when 0 .. 2
    puts "baby"
when 3 .. 6
    puts "little child"
when 7 .. 12
    puts "child"
when 13 .. 18
    puts "youth"
else
    puts "adult"
end
puts "================"

$i = 0
$num = 5

while $i < $num  do
   puts("Inside the loop i = #$i" )
   $i +=1
end

$i = 0
$num = 5
begin
   puts("Inside the loop i = #$i" )
   $i +=1
end while $i < $num

$i = 0
$num = 5

until $i > $num  do
   puts("Inside the loop i = #$i" )
   $i +=1;
end

for i in 0..5
   puts "Value of local variable is #{i}"
end

(0..5).each do |i|
   puts "Value of local variable is #{i}"
end

for i in 0..5
   if i > 2 then
      break
   end
   puts "Value of local variable is #{i}"
end

for i in 0..5
   if i < 2 then
      next
   end
   puts "Value of local variable is #{i}"
end
puts "================"

def test(a1="Ruby", a2="Perl")
   puts "The programming language is #{a1}"
   puts "The programming language is #{a2}"
end
test "C", "C++"
test

def test
   i = 100
   j = 10
   k = 0
end

puts test
 
def test
   i = 100
   j = 200
   k = 300
return i, j, k
end
var = test
puts var

# Variable Number of Parameters:
def sample (*test)
   puts "The number of parameters is #{test.length}"
   for i in 0...test.length
      puts "The parameters are #{test[i]}"
   end
end
sample "Zara", "6", "F"
sample "Mac", "36", "M", "MCA"







BEGIN {
    puts "================"
    puts "BEGIN:::: hi mulder started !"
    puts "================"
}
END {
    puts "================"
    puts "END:::: hi mulder end !"
    puts "================"
}