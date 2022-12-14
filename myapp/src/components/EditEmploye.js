import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditEmploye = () => {
  //use Navigate Hook
  const navigate = useNavigate();
  // use Params Hook
  const { id_employe } = useParams();
  const { iduser2 } = useParams();
  // states
  const [data, setdata] = useState([]);
// get an employe function
  const getdata = async () => {
    const response = await fetch(`http://localhost:3001/users/${id_employe}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setdata(result[0]);
    console.log(data);
  };
  // handle form changes
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata((element) => ({
      ...element,
      [name]: value,
    }));
  };
  // edit employe function

  const editemploye = async (e) => {
    e.preventDefault();
    await fetch(`/update/user/${id_employe}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname: data.user_firstname,
        lastname: data.user_lastname,
        phone: data.user_phone,
        email: data.user_email,
        civility: data.user_civility,
        speciality: data.user_speciality,
        adress: data.user_address,
        birthday: data.user_birthday,
        seniority: data.user_seniority,
        experience: data.user_experience,
        comment: data.user_comment,
        cin: data.cin,
        poste: data.poste,
      }),
    }).then((response) => {
      document.getElementById("alertmessage").style.visibility = "visible";
      document.getElementById("ok").style.visibility = "visible";
      e.target.reset();
    });
  };
  // go back to home page
  const goback = () => {
    navigate(`/espace/${iduser2}`);
  };
  // useEffect
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div
      className="col-md-4 offset-md-4"
      style={{ marginTop: "100px", position: "relative" }}
    >
      <h4>Modifier un employe</h4>
      <form onSubmit={(e) => editemploye(e)}>
        {/* nom */}
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            placeholder="Entrer votre nom"
            name="user_firstname"
            onChange={handlechange}
            defaultValue={data.user_firstname}
          />
        </div>
        {/* prenom */}
        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Entrer votre prenom"
            name="user_lastname"
            onChange={handlechange}
            defaultValue={data.user_lastname}
          />
          {/* civilite */}
          <div class="form-group mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Entrer votre civilit??"
              name="user_civility"
              onChange={handlechange}
              defaultValue={data.user_civility}
            />
          </div>
        </div>
        {/* adresee */}
        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Entrer votre Adresse"
            name="user_address"
            onChange={handlechange}
            defaultValue={data.user_adress}
          />
        </div>
        {/* email */}
        <div class="form-group mt-3">
          <input
            type="email"
            class="form-control"
            placeholder="Entrer votre email"
            name="user_email"
            onChange={handlechange}
            defaultValue={data.user_email}
          />
        </div>
        {/* telephone */}
        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Entrer votre telephone"
            name="user_phone"
            onChange={handlechange}
            defaultValue={data.user_phone}
          />
        </div>
        {/* date de naissance  */}
        {/* <div class="form-group mt-3 d-flex">
            <label>Date de naissance:</label>{" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              name="birthday"
            />
          </div> */}
        {/* cin */}
        {/* <div class="form-group mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Entrer votre numero de cin"
              name="cin"
              onChange={handlechange}
            />
          </div> */}
        {/* specialite */}
        {/* <div class="form-group mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Entrer votre specialite"
              name="speciality"
              onChange={handlechange}
            />
          </div> */}
        {/* anciennet?? */}
        {/* <div class="form-group mt-3">
            <input
              type="number"
              class="form-control"
              placeholder="Entrer vos ann??es d'anciennet??"
              name="ancien"
              onChange={handlechange}
            />
          </div> */}

        {/* resume experience */}
        {/* <div class="mt-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="d??crire votre resum??e"
              name="resume"
              onChange={handlechange}
            ></textarea>
          </div> */}
        {/* commentaires  */}
        {/* <div class="mt-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="ecrire votre commentaire ou question"
              name="commentaire"
              onChange={handlechange}
            ></textarea>
          </div> */}
        {/* send button */}
        <div className="mt-3">
          <input type="submit" className="btn btn-primary" value="Modifier" />
        </div>
      </form>
      <div
        class="alert alert-secondary text-success  "
        id="alertmessage"
        style={{ visibility: "hidden" }}
        role="alert"
      >
        Successfully Updated <i class="fa-solid fa-circle-check"></i>
      </div>
      <button
        id="ok"
        className="btn btn-success"
        style={{ visibility: "hidden" }}
        onClick={goback}
      >
        OK
      </button>
      <div style={{ position: "absolute", bottom: "10px" }}>
        <NavLink to={`/espace/${iduser2}`}> GO BACK</NavLink>
      </div>
    </div>
  );
};

export default EditEmploye;
