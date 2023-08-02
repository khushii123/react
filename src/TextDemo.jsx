 
import TextView from "./TextView";  
  const TextDemo = () => {
    return (
      <div>
        <TextView label={"1.khushi"} />
        <TextView label={"2.khushi"} size={20} />
        <TextView label={"3.khushi"} size={30} color={"red"} bold />
        <TextView label={"4.khushi"} size={34} color={"green"} />
        <TextView label={"5.khushi"} size={38} color={"purple"} />
      </div>
    );
  };
  
  export default TextDemo;
  