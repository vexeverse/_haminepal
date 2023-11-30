import dummyData from "@/json/data";

function getAllData(): any {
  const data = {
    kinds: 6734233.22,
    funds: 6734233.22,
    used: 6734233.22,
    remaining: 6734233.22,
  };
  return data;
}

function getSingleData(): any {
  return dummyData.campaign.causes[0];
}

export { getAllData, getSingleData };
