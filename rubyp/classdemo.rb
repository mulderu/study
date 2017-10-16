# define a class
class Box
   # constructor method
   def initialize(w,h)
      @width, @height = w, h
   end

   # accessor methods
   def getWidth
      @width
   end
   def getHeight
      @height
   end

   # setter methods
   def setWidth=(value)
      @width = value
   end
   def setHeight=(value)
      @height = value
   end
end

# create an object
box = Box.new(10, 20)

# use setter methods
box.setWidth = 30
box.setHeight = 50

# use accessor methods
x = box.getWidth()
y = box.getHeight()

puts "Width of the box is : #{x}"
puts "Height of the box is : #{y}"


class Box2
   # Initialize our class variables
   @@count = 0
   def initialize(w,h)
      # assign instance variables
      @width, @height = w, h

      @@count += 1
   end

   def self.printCount()
      puts "Box2 count is : #@@count"
   end
end

# create two object
box1 = Box2.new(10, 20)
box2 = Box2.new(30, 100)

# call class method to print box count
Box2.printCount()


class Box3
   # constructor method
   def initialize(w,h)
      @width, @height = w, h
   end
   # define to_s method
   def to_s
      "Box3(w:#@width,h:#@height)"  # string formatting of the object.
   end
end

# create an object
box = Box3.new(10, 20)

# to_s method will be called in reference of string automatically.
puts "String representation of box is : #{box}"






#Access Control:
# define a class
class Box4
   # constructor method
   def initialize(w,h)
      @width, @height = w, h
   end

   # instance method by default it is public
   def getArea
      getWidth() * getHeight
   end

   # define private accessor methods
   def getWidth
      @width
   end
   def getHeight
      @height
   end
   # make them private
   private :getWidth, :getHeight

   # instance method to print area
   def printArea
      @area = getWidth() * getHeight
      puts "Big4 box area is : #@area"
   end
   # make it protected
   protected :printArea
end

# create an object
box = Box4.new(10, 20)

# call instance methods
a = box.getArea()
puts "Area of the Box4 is : #{a}"

# try to call protected or methods
#box.printArea()



# methods overriding

# define a class
class Box5
   # constructor method
   def initialize(w,h)
      @width, @height = w, h
   end
   # instance method
   def getArea
      @width * @height
   end
end

# define a subclass
class BigBox < Box5

   # change existing getArea method as follows
   def getArea
      @area = @width * @height
      puts "Big box area is : #@area"
   end
end

# create an object
box = BigBox.new(10, 20)

# print the area using overriden method.
box.getArea()


# Class constant
# define a class
class Box6
   BOX_COMPANY = "TATA Inc"
   BOXWEIGHT = 10
   # constructor method
   def initialize(w,h)
      @width, @height = w, h
   end
   # instance method
   def getArea
      @width * @height
   end
end

# create an object
box = Box6.new(10, 20)

# call instance methods
a = box.getArea()
puts "Area of the box is : #{a}"
puts Box6::BOX_COMPANY
puts "Box weight is: #{Box::BOXWEIGHT}"
