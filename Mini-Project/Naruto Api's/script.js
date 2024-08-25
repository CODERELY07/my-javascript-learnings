async function searchName() {
  try {
    const naurtoName = document.getElementById("textInput").value.toLowerCase();
    console.log(naurtoName);
    const response = await fetch(
      `https://narutodb.xyz/api/character/search?name=${naurtoName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resources");
    }

    const data = await response.json();
    const imgElement = document.getElementById("imgElement");
    imgElement.src = data.images[0];

    imgElement.style.display = "block";

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
