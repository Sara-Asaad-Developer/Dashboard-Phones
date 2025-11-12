import { useRef, useState } from "react"

export default function App() {

  const[editPhoneIndex,setEditPhonIndex]=useState(null)

  const nameInput = useRef();
  const priceInput = useRef();
  const qtyInput = useRef();

  const [newPhones, setnewPhones] = useState(false);

  ;


  const [phones, setPhones] = useState(JSON.parse(localStorage.getItem('phones')) || []);


  const removePhone = (index) => {
    let isconfirm = confirm('Are you suer')
    if (isconfirm) {
      let copy = [...phones];
      copy.splice(index, 1);
      setPhones(copy);
      localStorage.setItem('phones', JSON.stringify(copy));
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
    localStorage.setItem('phones', JSON.stringify(copy));
  };
  const openEditModal = (index) => {
    setEditPhonIndex(index);
    document.getElementById('my_modal_5').showModal()
    let oldData = phones[index];
    nameInput.current.value = oldData.name;
    priceInput.current.value = oldData.price;
    qtyInput.current.value = oldData.qty;
  };
  const saveNewData = () => {
    let newPhoneData = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value,
    };

    let copy = [...phones];
    copy[editPhoneIndex] = newPhoneData;
    setPhones(copy);
    alert('Phone Data Edit Saccess');
    console.log('I Edit Phone Indwx :' + editPhoneIndex);
    localStorage.setItem('phones', JSON.stringify(copy));
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
                        <button className="btn btn-warning w-20"
                          onClick={()=>openEditModal(index)}> Edit</button>
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

      {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-4">
          <div className=" flex gap-25 w-full  items-center pb-5">
          <button className="btn btn-error w-20 text"
              onClick={() => document.getElementById('my_modal_5').close()}>X</button>
          <h3 className="font-bold text-lg">Eidet Phone</h3>
          </div>
          <input ref={nameInput} type="text" className='w-full input' placeholder='Enter New Phones Name' />
          <input ref={priceInput} type="text" className='w-full input' placeholder='Enter New Phones Praic' />
          <input ref={qtyInput} type="text" className='w-full input' placeholder='Enter New Phones Qty' />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary w-100 " onClick={saveNewData}>Save</button>
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
