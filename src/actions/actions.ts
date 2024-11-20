"use server";

export const GetUnits = async ({
  value,
  from,
  to,
}: {
  value: number;
  from: string;
  to: string;
}) => {
  const url = `https://unit-converter-go-backend-production.up.railway.app/convert?from=${from}&to=${to}&value=${value}
`;
  const res = await fetch(url).then((res) => res.json());

  return res.result;
};
