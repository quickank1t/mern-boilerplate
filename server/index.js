import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log("App listening on port 3000!");
});

export default app;
