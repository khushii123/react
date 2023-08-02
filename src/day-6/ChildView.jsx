//const ChildView=(meraprops)=>{ first method
//console.log(meraprops)

//Way to handle default val this is way to handle error

// const ChildView = ({name, city, number="NA"}) => { // 2nd way to handle def val
const ChildView = ({name, city, number}) => {
    // console.log(meraProps);
     return (
       <div
         style={{
           backgroundColor: "white",
           height: 140,
           width: 100,
           padding: 12,
           boxShadow: "silver 0px 0px 1px 1px",
         }}
       >
           <p>
        {/* {meraProps.name} from {meraProps.city} with {meraProps.number || "NA"} */}{" "}
        {name} from {city} with {number}
      </p>
      <p>{ name ==="Khushi"? " yes khushi":"no khushi"}</p>
      <p>{city === "Pune" ? "Yes Pune" : "No Pune"}</p>
    </div>
  );
};
ChildView.defaultProps = {
  number: "NA",
  city: "Morena",
  name: "Nahi hai.....",
}; // third way to handle default val.
export default ChildView;


