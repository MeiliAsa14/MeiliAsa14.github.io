// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// // import bankLogo from './assets/bank.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
        
//       </div>
//       <h1>VAT calculator</h1>
//       <div className="card">
//         <div style ={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
//         {count}
//         <button onClick={() => setCount((count) => count + 1)}>
//           Increment
//         </button>
//         </div>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <br />
//       <br />
//     </>
//   )
// }

// // function V() {
// //   //let price = 0
// //   const [price, setPrice] = useState(0);
// //   const [vatrate, setVat] = useState(0); 
// //   function handleChange(event) {
// //     // console.log(event.target.value) not use
// //     let p = event.target.value;
// //     console.log(p);
// //     setPrice(p);
    
// //   }
// //   return (
// //     <>
// //       <h2>VAT calculator</h2>
// //       <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
// //         Price:
// //         <br />
// //         <input type="number" placeholder="Enter price" onChange={handleChange} />
// //         <br />
// //         <br />
// //         Vat rate (%):
// //         <br />
// //         <input type="number" placeholder="Enter VAT rate" onChange={(e) => setVat(e.target.value)} />
// //         <br />
// //         <br />
// //         Price: {price} <br />
// //         Vat: {(price * vatrate / 100).toFixed(2)} <br />
// //         Total: {(price * (1 + vatrate / 100)).toFixed(2)} <br />
// //       </div>
// //     </>
// //   )
// // }

// // export default App
