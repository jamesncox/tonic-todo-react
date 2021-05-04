import { connect } from "react-redux";

function Header(props) {
  const displayUser = () => {
    if (props.username) {
      return props.username;
    } else {
      return "Tonic";
    }
  };

  return (
    <div className="pt-4 pl-8">
      <header className="text-matrix-green-primary text-2xl md:text-4xl font-bold font-mono">
        Wake up, {displayUser()}...
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(Header);
