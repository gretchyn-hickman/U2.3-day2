import "./App.css";
import React, { useState } from "react";
import MemberForm from "./components/MemberForm";
import Member from "./components/Member";
import Header from "./components/Header";

const formFormat = {
  firstName: "",
  lastName: "",
  nickname: "",
  email: "",
  linkedIn: "",
  role: "",
  idTag: null,
};

function App() {
  const [members, setMember] = useState([]);
  // current members available
  const [formValues, setFormValues] = useState(formFormat);
  // the values of the form that will be returned

  const [memberToEdit, setMemberToEdit] = useState(null);

  // error state to show current errors * optional

  // update
  const updateForm = (nameOfInput, valueOfInput) => {
    // on change => set values

    setFormValues({ ...formValues, [nameOfInput]: valueOfInput });
    // ...formValues inputs the preexisting form object to search through the key value pairs
  };

  const resetForm = () => {
    setFormValues(formFormat);
  };

  //submit
  const submitForm = () => {
    // on submit setsMember from formValues

    const newMember = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      role: formValues.role,
      nickname: formValues.nickname,
      email: formValues.email,
      linkedIn: formValues.linkedIn,
      idTag: members.length,
    };

    setMember([...members, newMember]);

    setMemberToEdit(false);
    resetForm();
  };

  const whenEdit = () => {
    const newMember = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      role: formValues.role,
      nickname: formValues.nickname,
      email: formValues.email,
      linkedIn: formValues.linkedIn,
      idTag: formValues.idTag,
    };

    members.splice(formValues.idTag, 1);
    setMember([...members, newMember]);

    setMemberToEdit(false);
    resetForm();
  };

  // editMember
  const editMember = (id) => {
    const memberEditin = members.find((member) => member.idTag === id);
    setMemberToEdit(true);
    setFormValues(memberEditin);
  };

  const cancelEdit = () => {
    resetForm();
    setMemberToEdit(false);
  };

  return (
    <div className="App">
      <Header />
      <MemberForm
        values={formValues}
        whileChange={updateForm}
        whenSubmit={submitForm}
        memberToEdit={memberToEdit}
        cancelEdit={cancelEdit}
        whenEdit={whenEdit}
      />

      <section className="members-list">
        {members.map((member) => (
          <Member member={member} key={member.idTag} editMember={editMember} />
        ))}
      </section>
    </div>
  );
}

export default App;
