// import React, { useRef } from "react";
// import "./search-bar.css";
// import { Col, Form, FormGroup } from "reactstrap";
// import { BASE_URL } from "./../utils/config";

// const SearchBar = ({ setSearchResults }) => { // 🔹 Receive setSearchResults as a prop
//   const titleRef = useRef("");

//   const searchHandler = async (e) => {
//     e.preventDefault(); // 🔹 Prevent page reload

//     const title = titleRef.current.value;
//     if (title === "") {
//       return alert("Please enter a tour name!");
//     }

//     try {
//       const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?title=${title}`);
//       if (!res.ok) throw new Error("Something went wrong");

//       const result = await res.json();
//       console.log("Search Result:", result);

//       if (!result.data || result.data.length === 0) {
//         alert("No tours found!");
//         return;
//       }

//       setSearchResults(result.data); // 🔹 Set search results in Tours.jsx
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <Col lg="4">
//       <div className="search__bar">
//         <Form className="d-flex align-items-center gap-3" onSubmit={searchHandler}>
//           <FormGroup className="d-flex gap-3 form__group form__group-fast form__group-wide">
//             <span>
//               <i className="ri-search-line"></i>
//             </span>
//             <div>
//               <h6>Descontos</h6>
//               <input
//                 type="text"
//                 placeholder="Digite o nome do desconto"
//                 ref={titleRef}
//               />
//             </div>
//           </FormGroup>
//           <button className="search__icon" type="submit">
//             <i className="ri-search-line"></i>
//           </button>
//         </Form>
//       </div>
//     </Col>
//   );
// };

// export default SearchBar;

import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./../utils/config";

const SearchBar = ({ setSearchResults }) => { 
  const titleRef = useRef("");

  const searchHandler = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim(); 
    if (title === "") {
      setSearchResults(null); // 🔹 Reset to show all tours
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?title=${title}`);
      if (!res.ok) throw new Error("Something went wrong");

      const result = await res.json();
      console.log("Search Result:", result);

      if (!result.data || result.data.length === 0) {
        alert("No tours found!");
        return;
      }

      setSearchResults(result.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChange = () => {
    if (titleRef.current.value.trim() === "") {
      setSearchResults(null); // 🔹 Reset to show all tours
    }
  };

  return (
    <Col lg="4">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-3" onSubmit={searchHandler}>
          <FormGroup className="d-flex gap-3 form__group form__group-fast form__group-wide">
            <span>
              <i className="ri-search-line"></i>
            </span>
            <div>
              <h6>Descontos</h6>
              <input
                type="text"
                placeholder="Digite o nome do desconto"
                ref={titleRef}
                onChange={handleInputChange} // 🔹 Detect changes
              />
            </div>
          </FormGroup>
          <button className="search__icon" type="submit">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;

