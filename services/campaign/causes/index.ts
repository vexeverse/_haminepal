import dummyData from "@/json/data";

function getAllData(): any {
  return dummyData.campaign.causes;
}

function getSingleData(): any {
  return dummyData.campaign.causes[0];
}

export { getAllData, getSingleData };
