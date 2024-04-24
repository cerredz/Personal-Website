import { client } from "@/utils/Sanity";

// get the projects from the sanity database
export const getProjectData = async () => {
  try {
    const query = `*[_type == "projects"]`;
    const result = await client.fetch(query);

    if (!result) {
      console.log("Error Getting the Project Data");
      console.log(result);
      return;
    }
    return result;
  } catch (err) {
    console.error("Error Getting the Project Data", err);
  }
};
