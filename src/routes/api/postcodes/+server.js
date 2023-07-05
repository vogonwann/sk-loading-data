export const GET = async () => {
    const response = await fetch('http://localhost:4000/postcodes');
    const postCodes = await response.json();
    const appPostCodes = postCodes.map(postCode => {
        return {
            buildingName: postCode.building_name,
            line1: postCode.line_1,
            line2: postCode.line_2,
            line3: postCode.line_3,
            town: postCode.post_town,
            country: postCode.country,
            postcode: postCode.postcode
        };
    });
    return new Response(JSON.stringify(appPostCodes), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}