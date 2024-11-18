import React from "react";
import axios from "axios";

function Gist() {
  const token =
    "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";
  const apiUrl = "https://api.github.com/gists";

  const fetchGists = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      const rawUrls = response.data
        .map((gist) => {
          return Object.values(gist.files).map((file) => file.raw_url);
        })
        .flat();

      console.log(rawUrls);
    } catch (error) {
      console.error("Error fetching Gists:", error);
    }
  };

  fetchGists();

  return (
    <div>
      <pre>
        <code></code>
      </pre>
    </div>
  );
}

export default Gist;
