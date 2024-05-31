"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sensor_controller_1 = require("../controllers/sensor.controller");
const router = express_1.default.Router();
router.post("/createSensorData", sensor_controller_1.createSensorData);
router.post("/createMeasurementData", sensor_controller_1.createMeasurementData);
router.get("/getSensorAndMeasurementData", sensor_controller_1.getSensorAndMeasurementData);
router.get("/getAllSensor", sensor_controller_1.getAllSensor);
router.get("/getMeasurementsBySensorId/:sensorId", sensor_controller_1.getMeasurementsBySensorId);
router.get("/getSensorDataByLocation", sensor_controller_1.getSensorDataByLocation);
exports.default = router;
