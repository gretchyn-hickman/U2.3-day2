import React from "react";

export default function MemberForm(props) {
  const {
    values,
    whileChange,
    whenSubmit,
    memberToEdit,
    cancelEdit,
    whenEdit,
  } = props;
  const { firstName, lastName, nickname, email, linkedIn, role } = values;

  const handleChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    whileChange(inputName, inputValue);
  };

  const handleSumbit = (evt) => {
    evt.preventDefault();
    whenSubmit();
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    whenEdit();
  };

  return (
    <div className="form-container">
      <h2>Create Member!</h2>

      <form onSubmit={memberToEdit ? handleUpdate : handleSumbit}>
        <div className="left-form">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Seungmin"
            onChange={handleChange}
            maxLength="15"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Kim"
            onChange={handleChange}
            maxLength="15"
          />

          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            name="nickname"
            placeholder="Puppy"
            value={nickname}
            onChange={handleChange}
          />
        </div>

        <div className="right-form">
          <label htmlFor="role">Role</label>
          <select name="role" value={role} onChange={handleChange}>
            <option>Full-stack Developer</option>
            <option>Front-end Developer</option>
            <option>Back-end Developer</option>
            <option>UX/UI Designer</option>
          </select>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="skzpuppy@jyp.com"
            value={email}
            onChange={handleChange}
          />

          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            type="text"
            name="linkedIn"
            placeholder="linkedIn.com/skzpuppm"
            value={linkedIn}
            onChange={handleChange}
          />
        </div>

        <div className="submit-button">
          <button type="submit" value="submit">
            {memberToEdit ? "Submit Changes" : "Add member!"}
          </button>
        </div>

        {memberToEdit && (
          <div>
            <button type="reset" className="cancel-button" onClick={cancelEdit}>
              cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
