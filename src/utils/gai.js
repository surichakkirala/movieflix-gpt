import { GoogleGenAI } from "@google/genai";
import { OPENAI_KEY } from "./constants";

const gai = new GoogleGenAI({ apiKey: OPENAI_KEY });

export default gai;
