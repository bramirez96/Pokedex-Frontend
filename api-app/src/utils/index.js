export const getHeight = (dmValue) => {
  const conversion = Math.floor(dmValue * 3.937);
  const inches = conversion % 12;
  const feet = Math.floor(conversion / 12);
  if (feet) return `${feet}'${inches}"`;
  else return `${inches}"`;
};

export const getWeight = (hgValue) => `${Math.floor(hgValue / 4.536)}lbs`;
