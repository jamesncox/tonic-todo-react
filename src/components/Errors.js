import { useState } from "react";
import { connect } from "react-redux";
import { clearErrors, clearIsUserLoading } from "../actions/users";

function Errors({ errors, clearErrors, clearIsUserLoading }) {
  const [, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    clearErrors();
    clearIsUserLoading();
  };

  return (
    <>
      <div className="mx-5 justify-center mt-32 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-center p-5 bg-matrix-green rounded rounded-b-none">
              <h3 className="text-3xl text-matrix-green-secondary font-mono font-bold">
                There's a glitch in The Matrix!
              </h3>
            </div>
            <div className="relative flex-auto bg-black py-16 items-center">
              {errors.map((error, index) => {
                return (
                  <ul key={index}>
                    <li
                      className="text-red-500 text-center my-5 text-xl"
                      key={index}
                    >
                      {error}
                    </li>
                  </ul>
                );
              })}
            </div>
            <div className="flex items-center justify-end rounded-b bg-matrix-green ">
              <button
                className="bg-matrix-green-text rounded hover:bg-matrix-green-hover m-2 text-matrix-green-light hover:text-matrix-green-secondary font-bold uppercase px-3 py-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, { clearErrors, clearIsUserLoading })(
  Errors
);
