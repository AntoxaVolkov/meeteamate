const usersAPI = {
  base: "http://localhost:3000",
  async getUsers(limit, currentPage) {
    const res = await new Promise((res, rej) => {
      setTimeout(() => {
        res({
          users: [
            {
              name: "Паша",
              age: "24"
            },
            {
              name: "Маша",
              age: "25"
            },
            {
              name: "Саша",
              age: "26"
            }
          ],
          count: 3
        });
      }, 2000);
    });
    return res;
  }
};

export default usersAPI;
