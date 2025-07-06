import { useState } from 'react'

function V() {
  //let price = 0
  const [price, setPrice] = useState('');
  const [vatrate, setVat] = useState(0.07); 
  const [discount, setDiscount] = useState(''); 

  function handlePriceChange(event) {
    const p = parseFloat(event.target.value) || 0;
    setPrice(p);
  }

  function handleDiscountChange(event) {
    const d = parseFloat(event.target.value) || 0;
    setDiscount(d);
  }

   function handleReset() {
    setPrice(0);
    setDiscount(0);
    setVat(0.07); // Reset to default 7%
  }

  const gross = price - discount;
  const vatAmount = gross * vatrate;
  const total = gross + vatAmount;

  return (
    <>
    
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' ,}}>
        
        <div>
          <span>Price:</span> 
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        
        <div>
          <span>Discount:</span>
          <input
            type="number"
            placeholder="Enter discount"
            value={discount}
            onChange={handleDiscountChange}
          />
        </div>

        <br />
        
        <div>Gross Price: ฿{gross.toFixed(2)}</div>
        <div>VAT Rate (7%): ฿{vatAmount.toFixed(2)}</div>
        <br />
        <div><strong>Total Price: ฿{total.toFixed(2)}</strong></div>
        <br />

        <button onClick={handleReset} style={{
          padding: '6px 12px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Reset
        </button>

        {/* Price: {price} <br />
        Vat: {(price * vatrate / 100).toFixed(2)} <br />
        Total: {(price * (1 + vatrate / 100)).toFixed(2)} <br />
        Discount: {(price * discount / 100).toFixed(2)} <br />
        Final Price: {((price * (1 + vatrate / 100)) - (price * discount / 100)).toFixed(2)} <br />*/}
      </div> 
    </>
  );
}

export default V;
