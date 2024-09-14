import React from 'react'
import { productData } from '../serive-data'
import { ProductCard } from '../components/product-card'

export const Product = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginLeft: '50px'  }}>
      {productData.map((item) => (
        <div key={item.id}>
          <ProductCard {...item} />
        </div>
      ))}
    </div>
  )
}
