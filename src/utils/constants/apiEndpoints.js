export const baseEndpoints = {
  auth: "/api/v1/auth",
  cats: "/api/v1/cats",
  users: "/api/v1/users",
  catPosts: "/api/v1/cat-posts",
  shelters: "/api/v1/shelters",
  events: "/api/v1/events",
}





export const mainApiEndpoints = {
    auth: {
        login: `${baseEndpoints.auth}/login`,
        register: "/register",
    },
    cats: {
        getAll: `${baseEndpoints.cats}`,
        createOne: `${baseEndpoints.cats}`,
        getOne: `${baseEndpoints.cats}`,
        deleteOne: `${baseEndpoints.cats}`,
        updateOne: `${baseEndpoints.cats}`
    },
    users: {
        createOne: `${baseEndpoints.users}`,
        getAll: `${baseEndpoints.users}`,
        getOne: `${baseEndpoints.users}`,
        deleteOne: `${baseEndpoints.users}`,
        updateOne: `${baseEndpoints.users}`,
        
    },
    
}