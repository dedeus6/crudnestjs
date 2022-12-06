import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.0lnyvmd.mongodb.net/?retryWrites=true&w=majority")
    ],
    controllers: [],
    providers: []
})
export class AppModule {}