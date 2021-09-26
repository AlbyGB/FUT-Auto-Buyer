import { getValue, setValue } from "../../services/repository";

const updateCache = (key, value, type, isDefaultValue = false) => {
  const buyerSetting = getValue("BuyerSettings") || {};
  if (type === "number") value = parseInt(value);
  buyerSetting[key] = value;
  buyerSetting[key + "isDefaultValue"] = isDefaultValue;
  setValue("BuyerSettings", buyerSetting);
};

export const generateTextInput = (
  label,
  placeholder,
  id,
  info,
  type = "number",
  additionalClasses = "buyer-settings-field",
  customCallBack = null
) => {
  const key = Object.keys(id)[0];
  if (placeholder) {
    customCallBack && customCallBack(placeholder);
    updateCache(key, placeholder, type, true);
  }
  $(document).on("input", `#${id[key]}`, ({ target: { value } }) => {
    customCallBack && customCallBack(value);
    updateCache(key, value || placeholder, type, !value);
  });
  return `<div class="price-filter ${additionalClasses}">
       <div class="info">
           <span class="secondary label">${label} :<br/><small>${info}</small></span>
       </div>
       <div class="buttonInfo">
           <div class="inputBox">
               <input type="${type}" class="numericInput" id='${id[key]}' placeholder=${placeholder}>
           </div>
       </div>
    </div>`;
};
