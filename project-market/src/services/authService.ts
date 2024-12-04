export const loginService = async (username: string, password: string) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, token: data.token };
      } else {
        return { success: false };
      }
    } catch (error) {
      throw new Error("Error con el servicio API");
    }
  };

