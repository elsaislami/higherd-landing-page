import TerminalIcon from "../assets/icons/TerminalIcon.jsx";
import SettingsIcon from "../assets/icons/SettingsIcon.jsx";
import UsersIcon from "../assets/icons/UsersIcon.jsx";
import UsersTagIcon from "../assets/icons/UsersTagIcon.jsx";
import HrIcon from "../assets/icons/HrIcon.jsx";
import VisaIcon from "../assets/icons/VisaIcon.jsx";
import RegisterIcon from "../assets/icons/RegisterIcon.jsx";
import TodoIcon from "../assets/icons/TodoIcon.jsx";
import EducationIcon from "../assets/icons/EducationIcon.jsx";

import EditSettingsIcon from "../assets/icons/EditSettingsIcon.jsx";
import EcoEnergyIcon from "../assets/icons/EcoEnergyIcon.jsx";
import ConstructionIcon from "../assets/icons/ConstructionIcon.jsx";
import PcScreenIcon from "../assets/icons/PcScreenIcon.jsx";

const iconComponents = {
  TerminalIcon,
  SettingsIcon,
  UsersIcon,
  UsersTagIcon,
  HrIcon,
  VisaIcon,
  RegisterIcon,
  TodoIcon,
  EducationIcon,
  EditSettingsIcon,
  EcoEnergyIcon,
  ConstructionIcon,
  PcScreenIcon,
};

/**
 * Renders an icon component by name with consistent styling
 * @param {string} iconName - The name of the icon component to render
 * @param {number} size - The size of the icon (default: 40)
 * @param {string} color - The color of the icon (default: "#4500A8")
 * @returns {JSX.Element|null} The rendered icon component or null if not found
 */
export const getIconComponent = (iconName, size = 40, color = "#4500A8") => {
  const IconComponent = iconComponents[iconName];
  if (IconComponent) {
    return <IconComponent size={size} color={color} />;
  }
  console.error(`Icon component "${iconName}" not found.`);
  return null;
};

export default { getIconComponent };
