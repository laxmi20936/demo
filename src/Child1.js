const Child1 = ({ ip, setIp }) => {
    const changeHandler = (e) => {
      // console.log(e.target.value);
      setIp(e.target.value);
    };
  
    return (
      <div>
        <input type="text" value={ip} onChange={changeHandler} />
      </div>
    );
  };
  
  export default Child1;