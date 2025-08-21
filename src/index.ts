import  express  from "express";
import expenseRoutes from "./routes/expenseRoutes";

const app = express();
app.use(express.json());

app.use("/expenses", expenseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost${PORT}`)
})