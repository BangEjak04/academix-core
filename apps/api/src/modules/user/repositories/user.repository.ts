import { Injectable } from "@nestjs/common";
import { InjectDrizzle } from "@nestjs/drizzle";
import { type Database } from "../../../core/db/database";

@Injectable()
export class UserRepository {
  constructor(@InjectDrizzle() private readonly db: Database) {}
}
