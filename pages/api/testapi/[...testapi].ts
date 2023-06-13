import type { NextApiRequest, NextApiResponse } from "next";
import { adminAuth } from "@/pages/api/middleware";
import connection from "@/mysql";
import formidable from "formidable";
const bcrypt = require("bcrypt");
const fs = require("fs");
const XLSX = require("xlsx");
export const config = {
  api: {
    bodyParser: false,
  },
};

import { createRouter } from "next-connect";
const router = createRouter<NextApiRequest, NextApiResponse>();

declare module "next" {
  interface NextApiRequest {
    decoded: any;
  }
}

interface UserData {
  user_id?: string;
  fullname?: string;
  email?: string;
  username?: string;
  level?: string;
}
interface Users extends Array<UserData> {}

// Middleware
router.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
  //   const decoded = await adminAuth(req, res);
  //   req.decoded = decoded;
  await next();
});

router.get(
  "/api/testapi/lists",
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    try {
      const [response]: any = await connection.query(`SELECT * FROM banner`);
      res.status(200).json({ status: "success", data: response });
    } catch {
      res.status(200).json({ status: "error", message: "Invalid Token" });
    }
  }
);

router.get(
  "/api/testapi/delete",
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    try {
      const { id } = req.query;
      await connection.query(`DELETE FROM banner WHERE banner_id = ${id}`);
      res.status(200).json({ status: "success" });
    } catch {
      res.status(200).json({ status: "error", message: "Invalid Token" });
    }
  }
);

export default router.handler({
  onError: (err: any, req: NextApiRequest, res: NextApiResponse) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).end("Page is not found");
  },
});
