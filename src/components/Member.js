import React from "react";

export default function Member(props) {
  const { firstName, lastName, nickname, email, linkedIn, role, idTag } =
    props.member;
  const { editMember } = props;

  return (
    <div className="member-card">
      <div className="member-details">
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{role}</p>
        <p>{nickname}</p>
        <p>{email}</p>
        <p>{linkedIn}</p>
      </div>

      <div className="button-edit">
        <button onClick={() => editMember(idTag)}>Edit</button>
      </div>
    </div>
  );
}
