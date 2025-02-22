import React from 'react'

const Blog = () => {
  return (
            <Card className="w-64 rounded-2xl shadow-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/256"
        alt="Product"
        className="w-full h-40 object-cover"
      />
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">$99.99</p>
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default Blog