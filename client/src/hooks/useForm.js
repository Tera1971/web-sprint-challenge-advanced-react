// write your custom hook here to control your checkout form
const useForm = () => {
    const [firstName, setFirstName, handleFirstName] = useInput("");
    const [lastName, setlastName, handleLasName] = useInput("");
    const [address, setAddress, handleAdress] = useInput("");
    const [city, setCity, handleCity] =("");
    const [state, setState, handleState] = useInput("");
    const [zipcode, setZipcode, handleZipcode] = useInput("");


    const resetValues = e => {
      e.preventDefault();
      setFirstName("");
      setLastName("");
      setAddress("");
      setCity("");
      setState("");
      setZipcode("");
    };
  
    return (
      <form onSubmit={resetValues}>
        <input
          className="firstName-text"
          id="firstName"
          name="firstName"
          onChange={e => handlefirstName(e.target.value)}
          placeholder="First-Name"
          type="text"
          value={firstName}
        />
        <input
          className="lastName-text"
          id="lastName"
          name="lastName"
          onChange={e => handleLastName(e.target.value)}
          placeholder="Last-Name"
          type="lastName"
          value={lastName}
        />
        <input
          className="address-text"
          id="address"
          name="address"
          onChange={e => handleAddress(e.target.value)}
          placeholder="Address"
          type="text"
          value={address}
        />
        <input
          className="city-text"
          id="city"
          name="city"
          onChange={e => handleCity(e.target.value)}
          placeholder="City"
          type="text"
          value={city}
          />
        <input
        className="zipCode-number"
        id="zipcode"
        number="zip"
        onChange={e => handleZipcode(e.target.value)}
        placeholder="Zip Code"
        type="number"
        value={zipCode}
        />


        <button type="submit">Submit</button>
      </form>
    );
  };
  export default useForm;