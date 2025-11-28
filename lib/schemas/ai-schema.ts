import { z } from "zod"

// Zod schema for AI action validation
export const aiActionSchema = z.discriminatedUnion("type", [
  // Create action
  z.object({
    type: z.literal("create"),
    title: z.string().min(1),
    start: z.string().datetime(),
    duration_min: z.number().int().positive(),
    notes: z.string().optional(),
    confidence: z.number().min(0).max(1),
  }),
  // Update action
  z.object({
    type: z.literal("update"),
    event_id: z.string().uuid(),
    title: z.string().optional(),
    start: z.string().datetime().optional(),
    duration_min: z.number().int().positive().optional(),
    notes: z.string().optional(),
    confidence: z.number().min(0).max(1),
  }),
  // Delete action
  z.object({
    type: z.literal("delete"),
    event_id: z.string().uuid(),
    confidence: z.number().min(0).max(1),
  }),
])

export const aiResponseSchema = z.object({
  actions: z.array(aiActionSchema),
  summary: z.string().optional(),
})

export type ValidatedAIAction = z.infer<typeof aiActionSchema>
export type ValidatedAIResponse = z.infer<typeof aiResponseSchema>

// JSON Schema for OpenAI structured outputs
export const aiJsonSchema = {
  name: "calendar_actions",
  strict: true,
  schema: {
    type: "object",
    properties: {
      actions: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["create", "update", "delete"],
            },
            event_id: {
              type: "string",
              description: "UUID of existing event (required for update/delete)",
            },
            title: {
              type: "string",
              description: "Event title (required for create)",
            },
            start: {
              type: "string",
              description: "ISO 8601 datetime with timezone",
            },
            duration_min: {
              type: "integer",
              description: "Duration in minutes",
            },
            notes: {
              type: "string",
              description: "Optional notes",
            },
            confidence: {
              type: "number",
              minimum: 0,
              maximum: 1,
              description: "Confidence score 0-1",
            },
          },
          required: ["type", "confidence"],
          additionalProperties: false,
        },
      },
      summary: {
        type: "string",
        description: "Brief summary of planned actions",
      },
    },
    required: ["actions"],
    additionalProperties: false,
  },
}

export const aiEventSchema = z.object({
  title: z.string().min(1).describe("Titel des Termins"),
  description: z.string().optional().describe("Optionale Beschreibung"),
  start_time: z.string().describe("ISO 8601 Startzeit mit Zeitzone"),
  // Darf 0 oder mehr sein; 0 wird später im Code auf eine sinnvolle Standarddauer gemappt.
  duration_min: z.number().int().min(0).describe("Dauer in Minuten (0 oder mehr)"),
  category: z.enum(["work", "personal", "health", "social", "other"]).describe("Kategorie des Termins"),
  color: z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .describe("Hex-Farbcode"),
})

export const aiEventArraySchema = z.object({
  events: z.array(aiEventSchema).describe("Liste der zu erstellenden Termine"),
})

export type AIEvent = z.infer<typeof aiEventSchema>
export type AIEventArray = z.infer<typeof aiEventArraySchema>
