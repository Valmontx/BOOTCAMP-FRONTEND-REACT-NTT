// falta test
export const userRegex = /^[a-zA-Z\s]+$/;

export const validateUsername = (user: string): boolean => userRegex.test(user);


export const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };