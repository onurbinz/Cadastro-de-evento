import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/checkin.ts
import { z } from "zod";
async function checkIn(app) {
  app.withTypeProvider().get("/attendees/:attendeeId/check-in", {
    schema: {
      summary: "Check in an attendee",
      tags: ["attendees"],
      params: z.object({
        attendeeId: z.coerce.number().int()
      }),
      response: {
        201: z.null()
      }
    }
  }, async (request, reply) => {
    const { attendeeId } = request.params;
    const attendeeCheckIn = await prisma.checkin.findUnique({
      where: {
        attendeeId
      }
    });
    if (attendeeCheckIn !== null) {
      throw new BadRequest("Attendee alreay checked in!");
    }
    await prisma.checkin.create({
      data: {
        attendeeId
      }
    });
    return reply.status(201).send();
  });
}

export {
  checkIn
};
