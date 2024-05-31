"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes/routes"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { environment } from "./environments/environment";
dotenv_1.default.config();
const port = process.env.port || 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE, PATCH');
    next();
});
if (process.env.NODE_ENV == 'production') {
    app.use('/', express_1.default.static(path_1.default.join(__dirname, 'public')));
}
// main routes
app.use('/api/', routes_1.default);
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to Twinit-backend!' });
});
app.use(express_1.default.static(path_1.default.join(__dirname, 'assets')));
if (process.env.NODE_ENV == 'production') {
    app.get('*', (req, res) => {
        res.sendFile(process.cwd() + '/public/index.html');
    });
}
mongoose_1.default
    .connect(`mongodb+srv://devang:devang1234@cluster0.fjpd0.mongodb.net/Auth-reduxtoolkit?retryWrites=true&w=majority`)
    .then(() => {
    console.log("MongoDB Connected");
    const server = app.listen(port, async () => {
        console.log("listening on", port);
    });
    server.on("error", console.error);
});
//   .catch((error) => console.log(error));
