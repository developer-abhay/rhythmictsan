import "./Sidebar.css";

const Sidebar = ({ setFilter }) => {
  return (
    <div className="sidebar">
      <h5 onClick={() => setFilter("all")}>All</h5>
      <h5 onClick={() => setFilter("guitar ukelele")}>Guitar</h5>
      <h5 onClick={() => setFilter("keyboard piano")}>Keys/Piano</h5>
      <h5 onClick={() => setFilter("vocal")}>Vocals</h5>
      <h5 onClick={() => setFilter("drum")}>Drums</h5>
      <h5 onClick={() => setFilter("dance")}>Dance</h5>
      <h5 onClick={() => setFilter("percussion tabla cajon")}>Percussion</h5>
      <h5 onClick={() => setFilter("art")}>Art</h5>
    </div>
  );
};

export default Sidebar;
