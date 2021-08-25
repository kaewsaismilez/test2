interface fetchConfig {
  method: string;
  path: string;
  data: object | null;
}

const apiURL = "http://localhost:8000";

export const Fetch = async (config: fetchConfig) => {
  try {
    const url = `${apiURL}${config.path}`;
    const token = localStorage.getItem("userrole_token");
    const res = await fetch(url, {
      method: config.method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(config.data),
    });
    const dataResponse = await res.json();
    if (dataResponse.code === 401) {
      localStorage.clear();
    }
    return dataResponse;
  } catch (error) {
    return error;
  }
};

// body: config.method === "POST" || config.method === "PUT" ? JSON.stringify(config.data) : null,
