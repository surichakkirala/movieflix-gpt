import { GoogleGenAI } from "@google/genai";
import { SECRET_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: SECRET_KEY });

export default ai;
