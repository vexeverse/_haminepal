import dummyData from "@/json/data";

function getAllData(): any {
  return dummyData.team;
}

function getSingleData(): any {
  return dummyData.campaign.causes[0];
}

export { getAllData, getSingleData };
