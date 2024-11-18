import React from "react";
import axios from "axios";
import "./Gist.scss";
import { useEffect, useState } from "react";

import details from "../../assets/icons/details.svg";
import close from "../../assets/icons/close.svg";
function Gist() {
  const token =
    "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";
  const apiUrl = "https://api.github.com/gists";

  const [code, setCode] = useState("");
  const [data, setData] = useState();
  const [snippet, setSnippet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [detailsStatus, setDetailsStatus] = useState(false);

  const handleDetails = () => {
    setDetailsStatus((prev) => !prev);
    console.log(detailsStatus);
  };
  useEffect(() => {
    const fetchGists = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        });
        setData(response.data);
        const rawUrls = response.data
          .map((gist) => {
            return Object.values(gist.files).map((file) => file.raw_url);
          })
          .flat();
      } catch (error) {
        console.error("Error fetching Gists:", error);
      }
    };

    fetchGists();
  }, []);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const transformedSnippets = data.map((item) => {
        const fileUrls = Object.values(item.files).map((file) => file.raw_url);

        return {
          raw_urls: fileUrls,
          description: item.description || "No description available",
        };
      });

      // Update state with transformed data
      setSnippet(transformedSnippets);
    }
  }, [data]);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/mrehere/f5e0e532196cbafc48a7b8bd45c7afa5/raw/359c247dbb6a83f246b8bbf7ce09ca5d8957438d/posting-journal-backend.js"
        );
        setCode(response.data);

        setLoading(false);
      } catch (err) {
        setError("Error fetching the code", err);
        setLoading(false);
      }
    };

    fetchCode();
  }, []);

  return (
    <section className="gist">
      <div className="gist__details-date">
        <p className="gist__date">date 4343</p>
        <div onClick={handleDetails} className="gist__button-container">
          <img
            className="gist__img
          "
            src={details}
            alt=""
          />
          <button className="gist__button">details</button>
        </div>
      </div>
      <pre className="gist__pre">
        <code>{code}</code>
      </pre>
      {detailsStatus && (
        <div className="gist__details-container">
          <p className="gist__details">
            this is just a dummy details to work with :D
          </p>
          <img
            className="gist__close"
            onClick={handleDetails}
            src={close}
            alt=""
          />
        </div>
      )}
    </section>
  );
}

export default Gist;
