import React from "react";

function FBAFBM(props) {
  const { selectedOption, updateSelected } = props;

  function handleOptionChange(e) {
    updateSelected(e.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="FBM"
                  checked={selectedOption === "FBM"}
                  onChange={handleOptionChange}
                />
                Seller with FBM
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="FBA"
                  checked={selectedOption === "FBA"}
                  onChange={handleOptionChange}
                />
                Seller with FBA
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FBAFBM;
