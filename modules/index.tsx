import ModuleHome from "./home";
import ModuleTransparency from "./transparency";
import ModuleAbout from "./about";
//Campaign
import ModuleCampaignCauses from "./campaign/causes";

import ModuleTeam from "./team";

// FINAL

import _ModuleHome from "./_final/home";

import ModuleMaintainance from "./maintainance";

export default function Module() {
  return <>Select a module.</>;
}

Module.Home = _ModuleHome;
Module.Maintainance = ModuleMaintainance;
Module.Transparency = ModuleTransparency;
Module.About = ModuleAbout;
Module.Campaign = {
  Causes: ModuleCampaignCauses,
};
Module.Team = ModuleTeam;
