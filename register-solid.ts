// register-solid.ts
import { plugin } from "bun";
import { SolidPlugin } from "bun-plugin-solid";

// Enregistre le transformeur SolidJS avant tout
plugin(SolidPlugin());
