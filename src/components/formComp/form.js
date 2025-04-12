import React from "react";

export function Form() {

//   const [email, setEmail] = useState("null"); 
//   const [password, setPassword] = useState("null");
//   const [zone, setZone] = useState("null");
//   const [guests, setGuests] = useState("null");



// useState(() => {  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
// )};

  return (
    <>
      <div className="flex items-center justify-center gap-50">


      <div className="flex flex-col items-start justify-start gap-7 px-4">
        <h2 className="text-7xl w-[200px]font-stretch-ultra-expanded">Secure a Spot</h2>
        <p className="w-[500px] text-left text-yellow-700">Choose from several table service arrangements including the entrance fee, liquor, separate cloakroom, separate lavatory and speed entrance  </p>
        </div>

        <div className="flex flex-row items-center justify-center w-[400px] h-[100vh] bg-[#1a0f20]">

          <form
            action=""
            className="flex flex-col items-start justify-start gap-7 px-4 mx-auto"
          >

            <div className="flex items-center justify-center w-[300px] h-[50px] bg-[#402c45] rounded-lg">
              <input
                className="w-full h-full px-4 border-none outline-none"
                type="text"
                name=""
                id=""
                placeholder="Email or Phone Number"
              />
            </div>

            <div className="flex items-center justify-center w-[300px] h-[50px] bg-[#402c45] rounded-lg">
              <input
                className="w-full h-full border-none outline-none px-4"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>

            <label className="text-[12px] text-[#d1c4e9]">Confirm Zone</label>
            <div className="flex items-center justify-center w-[300px] h-[50px] bg-[#402c45] rounded-lg">
              {/* <input className="w-full h-full border-none px-4" type="name" name="" id="" placeholder='Zone'/> */}
              <select className="w-[300px] h-full border-none px-4 text-[#d1c4e9] bg-[#402c45] rounded-lg">
                <option value="select">Choose Zone</option>
                <option value="select"> Zone I</option>
                <option value="select">Zone II</option>
                <option value="select">Zone III</option>
              </select>
            </div>

            <div className="flex items-center justify-center w-[300px] h-[50px] bg-[#402c45] rounded-lg">
              {/* <input className="w-full h-full border-none px-4" type="password" name="" id="" placeholder='Password'/> */}
              <select className="w-[300px] h-full border-none px-4 text-[#d1c4e9] bg-[#402c45] rounded-lg">
                <option value="select"> Guests Range</option>
                <option value="select"> 1-2</option>
                <option value="select">3-8</option>
                <option value="select">Other</option>
              </select>
            </div>

            <button className="flex items-center justify-center w-[300px] h-[50px] bg-[#402c45] rounded-lg">
              Reserve Now
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
