"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_1 = __importDefault(require("../model/model"));
const router = express_1.default.Router();
router.post('/post', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("Post Api in Typescript @@@ hi")
    try {
        const data = req.body;
        console.log("Data=>", data);
        var data_collection = yield model_1.default.create(data);
        return res.status(res.statusCode).json({ message: "Data created successfully", data: data_collection });
    }
    catch (error) {
        return res.status(res.statusCode).json({
            message: error.message
        });
    }
}));
router.get('/getAll', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("Get All Api in Typescript @@@ all")
    try {
        var data_collection = yield model_1.default.find({});
        return res.status(res.statusCode).json({ message: "All data!", data: data_collection });
    }
    catch (error) {
        return res.status(res.statusCode).json({ message: error.message });
    }
}));
router.get('/getOne/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var data = yield model_1.default.findOne({ id: req.params.id });
        return data ? res.status(res.statusCode).json({ message: "data found successfully", data }) : res.status(404).json({ message: "Not match for this given id" });
    }
    catch (error) {
        return res.status(res.statusCode).json({ message: error.message });
    }
}));
router.patch('/update/:id', (req, res, next) => {
    res.send("Update by ID Api in Typescript @@@");
});
router.delete('/delete/:id', (req, res, next) => {
    res.send("Delete by ID Api in Typescript @@@");
});
exports.default = router;
