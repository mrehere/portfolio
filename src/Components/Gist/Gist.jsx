import React from "react";
import axios from "axios";
import "./Gist.scss";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

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

  const [detailsIndex, setDetailsIndex] = useState(null);

  const handleDetails = (index) => {
    setDetailsIndex(detailsIndex === index ? null : index);
    console.log(detailsIndex);
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Gists:", error);
      }
    };

    fetchGists();
  }, []);

  useEffect(() => {
    const getSnippets = async () => {
      try {
        if (data && Array.isArray(data)) {
          // Use Promise.all to handle async calls inside map
          const transformedSnippets = await Promise.all(
            data.map(async (item) => {
              const fileUrls = await Promise.all(
                Object.values(item.files).map(async (file) => {
                  const response = await axios.get(file.raw_url);
                  return response.data;
                })
              );

              return {
                raw_urls: fileUrls,
                description: item.description || "No description available",
                created_at: item.created_at,
              };
            })
          );

          // Update state with transformed data
          setSnippet(transformedSnippets);
        }
      } catch (error) {
        console.log("Unable to fetch snippets, error:", error);
      }
    };

    getSnippets();
  }, [data]);
  if (loading) {
    console.log("loading..");
    return <h1>Snippets loading.....</h1>;
  }
  return (
    <section className="gist">
      {snippet.map((item, index) => (
        <div className="gist__snippet-container" key={index}>
          <div className="gist__details-date">
            <p className="gist__date">
              {formatDistanceToNow(item.created_at, { addSuffix: true })}
            </p>
            <div
              onClick={() => handleDetails(index)}
              className="gist__button-container"
            >
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
            <code>{item.raw_urls}</code>
          </pre>
          {detailsIndex === index && (
            <div className="gist__details-container">
              <p className="gist__details">{item.description}</p>
              <img
                className="gist__close"
                onClick={() => handleDetails(index)}
                src={close}
                alt=""
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Gist;
