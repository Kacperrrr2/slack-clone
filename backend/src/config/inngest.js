import { Inngest } from "inngest";
import { connectDB } from "./db.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "slack-clone" });

const syncUser = inngest.createFunction(
    {id: "sync-user"},
    { event:"clerk/user.created"},
    async ({ event }) => {
        connectDB();
        
    }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [];