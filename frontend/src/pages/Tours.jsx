import React, { useState, useEffect } from "react";
import "../styles/tour.css";
import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [searchResults, setSearchResults] = useState(null); // 🔹 Stores search results

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  // 🔹 Dynamically update page count based on search results
  useEffect(() => {
    if (searchResults) {
      setPageCount(Math.ceil(searchResults.length / 8)); // Update based on filtered results
    } else if (tourCount) {
      setPageCount(Math.ceil(tourCount / 8)); // Default pagination
    }
  }, [searchResults, tourCount]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <SearchBar setSearchResults={setSearchResults} /> {/* Pass function to SearchBar */}
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}

          {!loading && !error && (
            <Row>
              {(searchResults ?? tours)?.map((tour) => ( // 🔹 Use searchResults if available
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              {/* 🔹 Conditionally Render Pagination */}
              {(!searchResults || searchResults.length > 8) && (
                <Col lg="12">
                  <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                    {[...Array(pageCount).keys()].map((number) => (
                      <span
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number ? "active__page" : ""}
                      >
                        {number + 1}
                      </span>
                    ))}
                  </div>
                </Col>
              )}
            </Row>
          )}
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Tours;

