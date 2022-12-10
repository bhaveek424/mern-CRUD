const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8000,
  jwtSecret: process.env.JWT_SECRET || "bhaveek",
  mongoUrl:
    "mongodb+srv://bhaveek:bhaveek1234@cluster0.ajarip0.mongodb.net/?retryWrites=true&w=majority",
};

export default config;
