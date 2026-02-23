/**
 * Passenger (Phusion) entry point for cPanel / CloudLinux Node.js hosting.
 *
 * How it works:
 *   1. `next build` produces a self-contained server in `.next/standalone/server.js`.
 *   2. Passenger starts this file as the application entry point.
 *   3. We hand control to the standalone server, which listens on the port
 *      Passenger provides via `process.env.PORT` (or falls back to 3000).
 *
 * Required cPanel → Setup Node.js App settings:
 *   • Application root   → the directory that contains this file
 *   • Application startup file → app.js
 *   • Node.js version    → 18.x or 20.x (LTS recommended)
 */

const { execSync, execFileSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// ── Resolve paths ──────────────────────────────────────────────────────
const appDir = __dirname;
const standalonePath = path.join(appDir, ".next", "standalone", "server.js");

// ── Preflight checks ──────────────────────────────────────────────────
if (!fs.existsSync(standalonePath)) {
  console.error(
    "[Passenger] Standalone server not found at:",
    standalonePath,
    "\nRun `npm run build` first."
  );
  process.exit(1);
}

// ── Set required env vars ──────────────────────────────────────────────
// Passenger passes the port via PORT; Next.js standalone also reads PORT.
process.env.PORT = process.env.PORT || "3000";
process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
process.env.NODE_ENV = "production";

// ── Start the standalone Next.js server ────────────────────────────────
require(standalonePath);
