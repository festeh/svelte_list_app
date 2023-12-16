

export async function load({ fetch }) {
  let res = await fetch("/gapi/trends");
  let trends = await res.json();
  return {
    trends,
  };
}
