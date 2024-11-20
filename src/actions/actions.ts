"use server";

export const GetUnits = async ({
  value,
  from,
  to,
}: {
  value: number;
  from:
    | ""
    | "nm"
    | "μm"
    | "mm"
    | "cm"
    | "m"
    | "km"
    | "in"
    | "yd"
    | "ft-us"
    | "ft"
    | "fathom"
    | "mi"
    | "nMi";
  to:
    | ""
    | "nm"
    | "μm"
    | "mm"
    | "cm"
    | "m"
    | "km"
    | "in"
    | "yd"
    | "ft-us"
    | "ft"
    | "fathom"
    | "mi"
    | "nMi";
}) => {
  const url = `https://unit-converter-go-backend-production.up.railway.app/convert?from=${from}&to=${to}&value=${value}
`;
  const res = await fetch(url).then((res) => res.json());

  return res.result;
};
