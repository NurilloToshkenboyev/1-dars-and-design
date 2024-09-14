import React from 'react'
import './card.css'
import { LaptopOutlined, NotificationOutlined, UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';



export const ProductCard = ({img , title , price , rame , brand }) => {
  return (
    <div className='productCard'>
        <img style={{width: '150px', height: '150px'}} src={img} alt="img" />
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', padding: '2px 40px'}}>
        <h2>{title} </h2>
        <p>{brand}</p>
        <p>{rame}</p>
        </div>
        <div >
        <strong style={{fontSize: '20px'}}>{price} Сум</strong>
        <span style={{  background: 'yellow', fontSize: '25px', padding: '0 5px', marginLeft: '20px'}}>< ShoppingCartOutlined/></span>
        </div>
    </div>
  )
}
