export const useFetch = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  try {
    return data
  } catch (error) {
    console.log(error);
  }
}