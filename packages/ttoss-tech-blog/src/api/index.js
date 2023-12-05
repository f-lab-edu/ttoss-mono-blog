export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`/api${endpoint}`);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    else return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
