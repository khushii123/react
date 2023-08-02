import ChildView from "./ChildView";

const ParentView = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <ChildView name="Ajit" city="Mumbai" number='23345' />
      <ChildView name="Sohail" city="Bhopal" />
      <ChildView name="Khushi" city="Bhopal" />
      <ChildView name="Reetika" city="Delhi" />
      <ChildView name="Arun" city="Morena" />
      <ChildView name="Varun" city="Delhi" />
      <ChildView name="Sachin" city="Bangalore" />
      <ChildView name="Deepak" city="Bihar" />
      <ChildView name="Manasvi" city="Bhopal" />
      < ChildView name="Shweta" city="pune"/>
      <ChildView/>
<ChildView city="Pune"/>
    </div>
  );
};

export default ParentView;

