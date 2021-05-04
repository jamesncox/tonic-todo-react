import { connect } from "react-redux";

function Header(props) {
  const displayUser = () => {
    if (props.user) {
      return props.user.username;
    } else {
      return "Tonic";
    }
  };

  return (
    <div className="pt-4 pl-8">
      <header className="text-matrix-green text-2xl md:text-4xl font-bold font-mono">
        Wake up, {displayUser()}...
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
