/** @format */
export const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setChange: any
) => {
  setChange((prev: any) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
};
