import "./Sidebar.css";

const Sidebar = ({ setFilter }) => {
  return (
    <div className="sidebar">
      <h5 onClick={() => setFilter("all")}>All</h5>
      <h5 onClick={() => setFilter("guitar")}>Guitar</h5>
      <h5 onClick={() => setFilter("keyboard")}>Piano</h5>
      <h5 onClick={() => setFilter("vocal")}>Vocals</h5>
      <h5 onClick={() => setFilter("drum")}>Drums</h5>
      <h5 onClick={() => setFilter("dance")}>Dance</h5>
      <h5 onClick={() => setFilter("percussion")}>Percussion</h5>
    </div>
  );
};

export default Sidebar;
