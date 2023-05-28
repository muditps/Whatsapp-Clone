
const url= "http://localhost:8000";

export const uploadImage = async (request, response) => {
    //console.log(request.file);
    if(!request.file) 
        return await response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    await response.status(200).json(imageUrl);    
}