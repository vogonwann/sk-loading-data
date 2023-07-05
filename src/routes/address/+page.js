export const load = async (loadEvent) => {
    const { fetch } = loadEvent;
    const response = await fetch('http://localhost:5173/api/postcodes');
    const postcodes = await response.json();
    const addressList = postcodes.map(postcode => {
        return `${postcode.buildingName}, ${postcode.line1}, ${postcode.line2}`;
    });
    return { addressList };
}