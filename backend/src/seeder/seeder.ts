import mongoose from "mongoose";
import Ticket from "../models/ticketModel";
import { ticketsData } from "./ticketData";

const seedData = async () => {
    try {
        await mongoose.connect('')
        await Ticket.deleteMany();
        console.log("All Data Deleted");
        await Ticket.insertMany(ticketsData)
        console.log("All Data Loaded");
    } catch (error) {
        console.log(error);
    }
}

seedData()