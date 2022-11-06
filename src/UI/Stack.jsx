import PropTypes from "prop-types";

const Stack = ({ children, pos }) => {
  return (
    <div
      className="stack"
      style={{
        justifyContent: pos === "center" ? "center" : `flex-${pos}`
      }}
    >
      {children}
    </div>
  );
};

Stack.propTypes = {
  children: PropTypes.node.isRequired
};

export default Stack;
