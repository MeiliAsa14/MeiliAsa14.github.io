import { useState } from 'react'

function V() {
  //let price = 0
  const [price, setPrice] = useState(0);
  const [vatrate, setVat] = useState(0); 
  function handleChange(event) {
    // console.log(event.target.value) not use
    let p = event.target.value;
    console.log(p);
    setPrice(p);
    
  }
  return (
    <>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <h2>Price:</h2>
        <br />
        <input type="number" placeholder="Enter price" onChange={handleChange} />
        <br />
        <br />
        Vat rate (%):
        <br />
        <input type="number" placeholder="Enter VAT rate" onChange={(e) => setVat(e.target.value)} />
        <br />
        <br />
        Price: {price} <br />
        Vat: {(price * vatrate / 100).toFixed(2)} <br />
        Total: {(price * (1 + vatrate / 100)).toFixed(2)} <br />
      </div>
    </>
  )
}

export default V
