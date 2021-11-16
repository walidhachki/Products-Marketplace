
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product5 from '../../assets/product5.jpg'
import product6 from '../../assets/product6.jpg'
import product7 from '../../assets/product7.jpg'
import product8 from '../../assets/product1.jpg'
import product9 from '../../assets/product4.jpg'
import product10 from '../../assets/product1.jpg'




 const initialState = [
    {
      img: product1,
      alt: 'Laptop',
      name: 'ASUS FX571',
      desc:
        'Asus M415U-14p FHD-AMD R5-5500u-8GB-1TB HDD+256G SSD-Windows 10 Pro-Garantie 12Mois',
      date: '01/01/2021',
      city: 'rabat',
      price: '10 000 DH'
      
    },
    {
      img: product2,
      alt: 'Laptop',
      name: 'RYZEN FX571',
      desc:
        'Asus M415U-14p FHD-AMD R5-5500u-8GB-1TB HDD+256G SSD-Windows 10 Pro-Garantie 12Mois',
      date: '01/01/2021',
      city: 'Tanger',
      price: '10 000 DH'
      
    }
]

  

  const reducer = (state = initialState, action ) => {
      return { ...state};
  }

  export default reducer