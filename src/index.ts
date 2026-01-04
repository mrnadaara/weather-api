import app from "./server";
import { serverPort } from "./config"

app.listen(serverPort, () => {
  console.log(`Server is running on http://localhost:${serverPort}`)
})