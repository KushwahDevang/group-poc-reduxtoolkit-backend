"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Measurement = exports.Sensor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const sensorSchema = new mongoose_1.default.Schema({
    description: { type: String, required: true },
    geometry: {
        type: (Array),
        required: true,
    },
    location: { type: String, required: true },
    name: { type: String, required: true },
    unit: { type: String, required: true },
    _sensorId: { type: String, required: true },
    _sensorType: { type: String, required: true },
});
exports.Sensor = mongoose_1.default.model("Sensor", sensorSchema);
const measurementSchema = new mongoose_1.default.Schema({
    _sensorId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Sensor" },
    time: { type: Date, required: true },
    measurement: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }, //expires: "1d",
});
exports.Measurement = mongoose_1.default.model("Measurement", measurementSchema);
// import mongoose from "mongoose";
// const temperatureSchema = new mongoose.Schema({
//   time: { type: Date, required: true },
//   metadata: {
//     sensorId: { type: String, required: true },
//     sensorType: { type: String, required: true },
//   },
//   measurements: { type: Number, required: true },
//   createdAt: { type: Date, expires: "1d", default: Date.now }, // TTL index on the createdAt field, expires after 1 day
// });
// const Temperature = mongoose.model("Temperature", temperatureSchema);
// export default Temperature;
