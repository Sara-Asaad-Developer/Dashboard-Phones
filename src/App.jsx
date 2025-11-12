import { useRef, useState } from "react"

export default function App() {
  const nameInput = useRef();
  const priceInput = useRef();
  const qtyInput = useRef();

  const [newPhones, setnewPhones] = useState(false);

  ;


  const [phones, setPhones] = useState([

    { name: 'iphon x', price: 60000, qty: 5 },
    { name: 'iphon 17', price: 1100, qty: 4 },
    { name: 'iphon 11', price: 5500, qty: 55 },
    { name: 'iphon 10', price: 7000, qty: 8 },
    { name: 'iphon 12', price: 25000, qty: 11 },
  ]);


  const removePhone = (index) => {
    let isconfirm = confirm('Are you suer')
    if (isconfirm) {
      let copy = [...phones];
      copy.splice(index, 1);
      setPhones(copy);
    }
  };

  const addPhone = () => {
    let newPhone = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value
    };
    let copy = [...phones];
    copy.push(newPhone);
    setPhones(copy);
    alert('Phone New Added');
    setnewPhones(false);
  };




  return (

    <div className="w-full h-dvh flex justify-center">
      <div className="container">
        <div className="w-full   p-10 ">
          <button className="btn btn-info"
            onClick={() => { setnewPhones(true) }}>Add Phone</button>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Qty</th>
                <th>Item Total</th>
              </tr>
            </thead>
            <tbody>
              {phones.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>{el.qty}</td>
                    <td>{el.price * el.qty}</td>
                    <td>
                      <div className="w-full flex justify-center gap-4">
                        <button className="btn btn-warning w-20"> Eidet</button>
                        <button className="btn btn-error w-20"
                          onClick={() => removePhone(index)}>Remove</button>
                      </div>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>

      </div>
      {newPhones ? (<div className="w-full h-dvh fixed top-0 left-0 bg-black/70  flex justify-center items-center" onClick={() => { setnewPhones(false) }} >
        <div className="w-[500px] p-4 rounded-[8px] bg-gray-900 shadow border flex flex-col  gap-4 animate__animated animate__fadeInDownBig"
          onClick={(event) => { event.stopPropagation(); }}>
          <h1>Add New Phones</h1>
          <input ref={nameInput} type="text" className='w-full input' placeholder='Enter New Phones Name' />
          <input ref={priceInput} type="text" className='w-full input' placeholder='Enter New Phones Praic' />
          <input ref={qtyInput} type="text" className='w-full input' placeholder='Enter New Phones Qty' />
          <button className="btn btn-primary" onClick={addPhone}> Add New Phone</button>
        </div>
      </div>) : null}

      <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-4">
          <h3 className="font-bold text-lg">Eidet Phone</h3>
          <input ref={nameInput} type="text" className='w-full input' placeholder='Enter New Phones Name' />
          <input ref={priceInput} type="text" className='w-full input' placeholder='Enter New Phones Praic' />
          <input ref={qtyInput} type="text" className='w-full input' placeholder='Enter New Phones Qty' />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary w-100 ">Close</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  )
}









































// import { useState } from "react";


// export default function App() {
//   const [userInfo, setUserInfo] = useState({
//     name: '-----',
//     age: '----',
//     country: '-----',
//   });

//   const chingeName = () => {
//     let newName = prompt('Enter Your Name');
//     let copy = { ...userInfo };
//     copy.name = newName;
//     setUserInfo(copy);
//   };

//   const chingeAge = () => {
//     let newAge = prompt('Enter Your Age');
//     let copy = { ...userInfo };
//     copy.age = newAge;
//     setUserInfo(copy);
//   };

//   const chingeCountry = () => {
//     let newCountry = prompt('Enter Your Country');
//     let copy = { ...userInfo };
//     copy.country = newCountry;
//     setUserInfo(copy);
//   };

//   return (
//     <div className="w-full h-dvh bg-red-500 ">
//       <h1 className="w-[40%] flex items-center justify-center"> The Table Your SARA</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th> Name</th>
//             <td>{userInfo.name}</td>
//             <th>
//               <button className="btn btn bg-success w-30"
//                 onClick={chingeName}> Edit Name</button>
//             </th>
//           </tr>

//           <tr>
//             <th>Age</th>
//             <td>{userInfo.age}</td>
//             <th>
//               <button className="btn btn bg-success w-30"
//                 onClick={chingeAge}> Edit Age</button>
//             </th>
//           </tr>

//           <tr>
//             <th>Country</th>
//             <td>{userInfo.country}</td>
//             <th>
//               <button className="btn btn bg-success w-30"
//                 onClick={chingeCountry}>Edit Country</button>
//             </th>
//           </tr>

//         </thead>

//       </table>
//     </div>
//   )
// }
