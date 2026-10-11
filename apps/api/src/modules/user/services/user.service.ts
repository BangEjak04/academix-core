import { Injectable } from "@nestjs/common";
import { InjectDrizzle } from "@nestjs/drizzle";
import type { Database } from "../../../core/db/database";

@Injectable()
export class UserService {
  constructor(
    @InjectDrizzle()
    private readonly db: Database,
  ) {}

  findAll(page: number, perPage: number) {
    return this.db.query.users.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  findByEmail(email: string) {
    return this.db.query.users.findFirst({
      where: { email },
    });
  }

  create() {
    return this.db;
  }

  update() {
    return this.db;
  }

  delete() {
    return this.db;
  }
}
